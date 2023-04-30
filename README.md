README TODOS:
- document scss

# Power Transformation Lab Website

This site uses a modified version of [TeXt Theme](https://github.com/kitian616/jekyll-TeXt-theme).

## Site pages
Site pages are the `.md` files in the root of the directory (and the `lab_updates`) directory.
They are all generated to be static, but some of them behave more dynamically
then others, doing things like listing the most recent posts. They are the pages
accessible by the navigation bar (except `archive.html`).

| Title | Site URL | File |
|-|-|-|
| Home | `/` | `index.md` |
| Research| `/research.html` | `research.md` |
| Publications| `/publications.html` | `publications.md` |
| Models and Data| `/models_and_data.html` | `models_and_data.html` |
| News| `/news.html` | `news.md` |
| In The Media| `/in_the_media.html` | `in_the_media.html` |
| Lab Updates| `/lab_updates.html` | `lab_updates.md` |
| About| `/about.html` | `about.html` |
| Team| `/team.html` | `team.md` |
| Teaching| `/teaching.html` | `teaching.md` |
| Opportunities| `/opportunities.html` | `opportunities.md` |
| Study At UCSD| `/study_at_ucsd.html` | `study_at_ucsd.md` |
| Contact| `/contact.html` | `contact.md` |
| Archive| `/archive.html` | `archive.html` |

## Adding posts
Posts are added just like normal jekyll to "_posts". See `Features` for featured
posts.

*NOT YET IMPLEMENTED:* Posts also have an optional "archive_title" variable that can be added
which will change the title that appears in the condensed archive view, but not
on the top of the article itself.

## Adding team members
To add a team member, add a new markdown file to the `_team` directory. They are
listed on the team page alphabetically, so currently they are prefixed with a
2-digit number.

The front matter is laid out as follows:
- `name`: Required, self-explanatory
- `img`: Portrait or some other picture that will be displayed above their name.
  Optional.
- `alumni`: If set to `true`, this will not display on the page. This behavior
  may change in the future.

Finally, the content of the md file will be the person's bio.

## Adding media mentions
Add a markdown file to `in_the_media/`. They are sorted alphabetically also,
with the 3 last ones being displayed as recent on the news page. The front
matter is very simple: it has the variables `title`, `link`, and `description` (all 3 are required). Images should be used for featured media mentions. See `Features`.

## Features (NOT YET IMPLEMENTED)
For media mentions and posts, three of them should be selected to be featured.
If more than 3 are chosen then some will be lost. Featured posts will appear as
large items on the main "Lab updates" page. Featured media mentions will appear
on the "media mentions" page, again as three large item , with all media mentions
listed below them. Currently, the sidebar on "Lab updates" displays the most
recent media mentions instead of the featured ones; this behavior may change in
the future.

Featured items most have both `featured: true` in the front-matter and also a
`feature-img` variable that specifies the path to the image that should be
displayed with it.
