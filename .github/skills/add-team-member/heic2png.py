"""Convert a HEIC/HEIF photo (single image or tiled grid) to PNG.

Needs only Pillow and an ffmpeg with the HEVC decoder; no libheif.
Usage: python3 -I heic2png.py input.heic output.png
"""
import os
import struct
import subprocess
import sys
import tempfile

from PIL import Image

Image.MAX_IMAGE_PIXELS = 200_000_000


def boxes(buf, off, end):
    while off < end:
        size, typ = struct.unpack(">I4s", buf[off:off + 8])
        hdr = 8
        if size == 1:
            size = struct.unpack(">Q", buf[off + 8:off + 16])[0]
            hdr = 16
        elif size == 0:
            size = end - off
        yield typ.decode("latin1"), off + hdr, off + size
        off += size


class Reader:
    def __init__(self, buf, pos):
        self.buf, self.pos = buf, pos

    def u(self, n):
        if n == 0:
            return 0
        v = int.from_bytes(self.buf[self.pos:self.pos + n], "big")
        self.pos += n
        return v


def main(src, dst):
    data = open(src, "rb").read()
    ms, me = next((s, e) for t, s, e in boxes(data, 0, len(data)) if t == "meta")
    sub = {t: (s, e) for t, s, e in boxes(data, ms + 4, me)}

    # Primary item
    s, _ = sub["pitm"]
    primary = Reader(data, s + 4).u(2 if data[s] == 0 else 4)

    # Item types
    items = {}
    s, e = sub["iinf"]
    for _, bs, _be in boxes(data, s + 4 + (2 if data[s] == 0 else 4), e):
        v = data[bs]
        r = Reader(data, bs + 4)
        if v >= 2:
            iid = r.u(2 if v == 2 else 4)
            r.u(2)
            items[iid] = data[r.pos:r.pos + 4].decode("latin1")

    # Item locations
    s, e = sub["iloc"]
    ver = data[s]
    r = Reader(data, s + 4)
    b1, b2 = r.u(1), r.u(1)
    off_size, len_size, base_size = b1 >> 4, b1 & 15, b2 >> 4
    idx_size = (b2 & 15) if ver in (1, 2) else 0
    locs = {}
    for _ in range(r.u(2) if ver < 2 else r.u(4)):
        iid = r.u(2) if ver < 2 else r.u(4)
        method = (r.u(2) & 15) if ver in (1, 2) else 0
        r.u(2)  # data_reference_index
        base = r.u(base_size)
        extents = []
        for _ in range(r.u(2)):
            r.u(idx_size)
            o, ln = r.u(off_size), r.u(len_size)
            if method == 1:  # stored inside the idat box
                o += sub["idat"][0]
            extents.append((base + o, ln))
        locs[iid] = extents

    def item_data(iid):
        return b"".join(data[o:o + ln] for o, ln in locs[iid])

    # Grid tile references
    dimg = {}
    if "iref" in sub:
        s, e = sub["iref"]
        n = 2 if data[s] == 0 else 4
        for t, bs, _be in boxes(data, s + 4, e):
            r = Reader(data, bs)
            frm = r.u(n)
            refs = [r.u(n) for _ in range(r.u(2))]
            if t == "dimg":
                dimg[frm] = refs

    # Item properties
    s, e = sub["iprp"]
    ip = {t: (a, b) for t, a, b in boxes(data, s, e)}
    props = list(boxes(data, *ip["ipco"]))
    s, _ = ip["ipma"]
    ver, flags = data[s], int.from_bytes(data[s + 1:s + 4], "big")
    r = Reader(data, s + 4)
    assoc = {}
    for _ in range(r.u(4)):
        iid = r.u(2) if ver < 1 else r.u(4)
        assoc[iid] = [
            (r.u(2) & 0x7FFF) if flags & 1 else (r.u(1) & 0x7F)
            for _ in range(r.u(1))
        ]

    def prop(iid, typ):
        for i in assoc.get(iid, []):
            t, a, b = props[i - 1]
            if t == typ:
                return a, b
        return None

    def decode(iid):
        a, b = prop(iid, "hvcC")
        cfg = data[a:b]
        nal_len = (cfg[21] & 3) + 1
        stream = b""
        q = 23
        for _ in range(cfg[22]):  # parameter-set arrays (VPS/SPS/PPS)
            q += 1  # array type byte
            count = struct.unpack(">H", cfg[q:q + 2])[0]
            q += 2
            for _ in range(count):
                ln = struct.unpack(">H", cfg[q:q + 2])[0]
                q += 2
                stream += b"\x00\x00\x00\x01" + cfg[q:q + ln]
                q += ln
        raw, q = item_data(iid), 0
        while q < len(raw):
            ln = int.from_bytes(raw[q:q + nal_len], "big")
            q += nal_len
            stream += b"\x00\x00\x00\x01" + raw[q:q + ln]
            q += ln
        with tempfile.TemporaryDirectory() as d:
            fi, fo = os.path.join(d, "t.hevc"), os.path.join(d, "t.png")
            open(fi, "wb").write(stream)
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "hevc", "-i", fi,
                            "-frames:v", "1", fo], check=True)
            return Image.open(fo).convert("RGB").copy()

    if items.get(primary) == "grid":
        g = item_data(primary)
        rows, cols = g[2] + 1, g[3] + 1
        n = 4 if g[1] & 1 else 2
        width = int.from_bytes(g[4:4 + n], "big")
        height = int.from_bytes(g[4 + n:4 + 2 * n], "big")
        tiles = [decode(t) for t in dimg[primary]]
        tw, th = tiles[0].size
        img = Image.new("RGB", (cols * tw, rows * th))
        for i, t in enumerate(tiles):
            img.paste(t, ((i % cols) * tw, (i // cols) * th))
        img = img.crop((0, 0, width, height))
    else:
        img = decode(primary)

    rot = prop(primary, "irot")
    if rot and data[rot[0]] & 3:
        img = img.rotate(90 * (data[rot[0]] & 3), expand=True)
    img.save(dst)
    print(f"wrote {dst} {img.size}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
