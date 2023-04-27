# quick script to split about.md into separate bios
from slugify import slugify

idx = 1

alumni = False

with open("input.txt") as f:
    raw_text = f.read()

for bio in raw_text.split("###")[1:]:
    try:

        bio_md = "---\n"

        lines = bio.split("\n")
        name = lines[0].strip()

        if "Alumni" in name and not alumni:
            alumni = True
            continue

        if alumni:
            bio_md += f"alumni: true\n"

        else:
            img = lines[1].split("(")[1][:-1]
            bio_md += f"img: {img}\n"

        bio_md += f"name: {name}\n"
        bio_md += "---\n\n"

        if not alumni:
            bio_md += "\n".join(lines[2:])

        filename = f"{str(idx).zfill(2)}_{slugify(name)}.md"
        with open(filename, "w+") as f:
            f.write(bio_md)

        idx += 1
    except Exception as e:
        print(bio)
