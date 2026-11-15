---
name: add-team-member
description: "Add new Power Transformation Lab members (e.g. undergraduate RAs) to the team page from the bios and photos they submitted. Use when onboarding new lab members, adding people to team.md / _team/, or when someone says new RAs have sent their bio and photo."
argument-hint: "Optionally name the new members, or paste/attach their bio and photo."
---

# Add a Team Member

Create one `_team/` entry and one square photo in `img/team/` per new lab member. New members are asked to send a short third-person bio and a square photo, usually to the PI.

## 1. Find submissions on Slack first

Use the Slack tools (`slack_search_public_and_private`, `slack_read_channel`, `slack_read_file`). Search the last ~6 weeks, newest first:

- Keywords `bio` and `photo`, and the `has:file is:dm` filter. Submissions usually come as DMs to the PI ("here is my bio and square photo").
- Introductions in `#general` ("I'm starting as an undergrad RA"). These show who joined, but they are **not** bios.
- RA hiring and recommendation threads (e.g. a mentor naming selected candidates). These help confirm names and roles.

For each person, read the DM to get the exact bio text and the photo's file ID. Download the photo with `slack_read_file`.

Skip anyone who already has a file in `_team/`. Check by name with `grep -ril "<name>" _team`.

## 2. Ask about anyone still missing

Make a list of people who joined, or were named as new members, but have no bio and photo on Slack. **Ask the user** whether those were sent another way: email, a shared Google Doc or Drive folder, pasted into chat, or not sent yet. If the user pastes or attaches them, use those. Never write a bio yourself and never use a placeholder photo. Leave the person out and report them as pending.

## 3. Match conventions

Read 2–3 current files of the same role before writing anything. Filename prefixes set the order on the team page:

| Prefix | Role (current members) |
|---|---|
| `00_` | PI |
| `01_NN_` | Postdocs / researchers |
| `02_NN_` | PhD students |
| `03_` | Master's students |
| `04_` | Undergraduates |
| `05_NN_` | Visiting scholars |
| `1xx_` + `alumni: true` | Alumni (the number roughly mirrors the former role) |

Confirm against the current files, since the scheme can drift. Current undergrads use `_team/04_<first>-<last>.md`:

```markdown
---
img: img/team/<first>-<last>.jpg
name: <First Last>
---

<Bio paragraph>
```

- Use the bio **verbatim**. Fix only obvious typos such as a missing period, and mention each fix to the user. Keep the person's own name usage and pronouns. Don't add or infer facts.
- Use the full name as the person gives it. Add a preferred name only if they ask for one.

## 4. Process the photo

Existing member photos are square JPGs, roughly 700–1300 px. Output **1000×1000 JPEG** (quality ~85–90) to `img/team/<first>-<last>.jpg` with Pillow:

- If the photo isn't square, crop it to a head-and-shoulders square with the face in the upper-middle. Trim any dark or blank borders.
- If it's smaller than 1000 px, enlarge it and tell the user it may look soft. Suggest asking the person for a higher-resolution original.
- **HEIC/HEIF** (iPhone photos; Slack may label them `.PNG`): run `file` to detect the real format. If `pillow-heif` or an ImageMagick build with HEIC support is available, use that. Otherwise run the bundled converter, which only needs ffmpeg's HEVC decoder and Pillow:
  `python3 -I .github/skills/add-team-member/heic2png.py <input.heic> <output.png>`
- Downscale a preview (~400 px) and look at it before committing. Check the crop, the rotation and that it decoded correctly.

## 5. Finish

- Run `git diff --check`.
- Commit the new `_team/*.md` files and `img/team/*.jpg` files together, then push to the working branch. Open a PR only if the user asks.
- Report who was added, any text fixes, photo caveats (enlarged, converted, cropped), and who is still pending and why.
- Don't run a local Jekyll build unless asked, and say that the rendering wasn't checked.
