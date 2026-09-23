---
name: paper-post
description: "Create a Power Transformation Lab Jekyll paper post from a paper URL and an example post. Use when adding a recent publication, featuring it in News, or placing it in the home-page gallery."
argument-hint: "Provide the paper URL and the example post slug or path."
---

# Create a Paper Post

Create one publication post in this repository, matching the supplied example post and the site's existing Jekyll conventions.

## Inputs

- A paper URL, preferably the publisher's article or abstract page.
- An example post slug or path to copy the repository's local structure and style.
- Optional: a BibTeX file or citation supplied by the user.

## Workflow

1. Read the example post before editing. Confirm its layout, front-matter fields, subtitle author format, image convention, abstract style, article link labels, and recommended citation format.
2. Inspect the nearby site templates when needed to confirm how posts are selected. In this repository, `featured` and `home` are post tags: `featured` feeds News and `home` feeds the home-page gallery. Paper posts also need `papers`, one supported topic tag (`renewable_energy_planning`, `power_markets`, or `political_economy`), and a type tag such as `journal_article`.
3. Retrieve metadata from the paper URL. Capture the title, complete author list, journal, publication year, volume, pages or article number, DOI, abstract, and canonical article URL.
4. If automated metadata retrieval fails, is blocked, or returns incomplete data, ask the user to supply a BibTeX file or citation. Do not guess bibliographic metadata or invent an abstract.
5. Choose a date-prefixed filename in `_posts/YYYY-MM-DD-slug.md`. Use the current post date unless the user specifies another date or the repository's established convention requires the publication date. Make the slug concise and unique.
6. Create a post with `layout: paper`, the paper title, an author-and-journal subtitle, tags including `papers`, the best supported topic tag, `journal_article`, `featured`, and `home`, and an existing relevant image path. Reuse a suitable image from the example or the repository; do not add an unrelated asset.
7. Use the verified abstract as the body. Add a published-version link when available, followed by `Recommended citation:` and a complete citation. Bold Davidson's name in the subtitle and recommended citation when present, following the example.
8. Keep the change limited to the new post unless the user explicitly asks for other site changes. Do not modify the home page or News template when the tags already provide the required inclusion.

## Validation

- Parse the new file's YAML front matter and confirm required fields are present.
- Confirm the `tags` list contains `papers`, a valid topic tag, `journal_article`, `featured`, and `home`.
- Confirm the title, authors, journal, year, DOI, article number or pages, and abstract match the supplied metadata.
- Run `git diff --check`.
- Do not run a local Jekyll build. If a build is requested separately, tell the user that this skill intentionally does not run it.
- Report the created file and any validation limitation clearly.
