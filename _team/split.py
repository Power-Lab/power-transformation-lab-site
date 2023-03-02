# quick script to split about.md into separate bios
from slugify import slugify

idx = 1

alumni = False

with open("input.txt") as f:
    raw_text = f.read()

for bio in raw_text.split("###")[1:]:

    bio_md = "---\n"

    lines = bio.split("\n")
    name = lines[0].strip()

    if "Alumni" in name:
        alumni = True
        continue

    bio_md += f"name: {name}\n"

    img = lines[1].split("(")[1][:-1]
    bio_md += f"img: {img}\n"

    if alumni:
        bio_md += f"alumni: true\n"

    bio_md += "---\n\n"

    bio_md += "\n".join(lines[2:])


    filename = f"{str(idx).zfill(2)}_{slugify(name)}.md"
    with open(filename, "w+") as f:
        f.write(bio_md)

    idx += 1
