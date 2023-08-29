README TODOS:
- document scss

# Power Transformation Lab Website

This site uses a modified version of [TeXt Theme](https://github.com/kitian616/jekyll-TeXt-theme).

## Site pages
Site pages are the `.md` files in the root of the repository.
They are all generated to be static, but some of them behave more dynamically
then others, doing things like listing the most recent posts. They are all
accessible via the navigation bar.

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

Additionally, a 404 page is located at "404.html".


### Hero pages

Styles for hero pages are defined in `_sass/components/_hero.scss`. A page may
either use the `hero_page` layout (which itself uses the `page` layout) such as
the "About" page, or it could write out its own HTML like on the home and
research pages, if custom styles have to be applied.

Hero pages have a required `hero_image` field which is the image URL for the
background image. Additionally, there are two optional variables that can be
set:

- `fallback_color`: A fallback color to use for the background in case
  the image cannot load. This is in `rrggbb` format, notably without the `#`.
- `banner_color`: An optional background color for the div containing the hero
  text, to create the effect of the hero text being a banner. This color is in
  `#rrggbb` format.
- `long_title`: Optional boolean that makes the font size of the title smaller
  on screen sizes between the `lg` and `md` breakpoints


## Adding posts
Posts are added just like normal jekyll to "_posts". See `Features` for featured
posts.

### Archive Title Prefix

Posts also have an optional "archive_title_prefix" variable that can be added
which will change the title that appears in the `lab_updates` page (which
uses the `archive` layout), but not
on the top of the article itself. It should include a colon any any spacing,
because it is simply prepended to the article title. For example, a
file with front-matter
```
---
title: My Post Title
archive_title_prefix: "Update: "
---
```
would have `Update: My Post Title` displayed in `lab_updates`, but would still
just have `My Post Title` on top of the page if you clicked on it.

### Publications page categories
#### Paper Topic

Any post with the tag `papers` will show up on the "Publications" page, which has
three buttons to sort the papers into the categories of "Renewable energy
planning", "Power markets", and "Political economy".

This sorting is accmoplished by adding one of the tags
`renewable_energy_planning`, `power_markets`, or `political_economy` to the
post. For example, the post
`_posts/2022-06-03-low-carbon-transition-china-soe-china-energy.md` has tags
`[papers, renewable_energy_planning]` so it will show up under the "Renewable
energy planning" category.

Currently, having multiple categories for a single paper is not supported. Papers without any of these
tags will appear when all are shown but not under any category.

#### Paper Type
In a similar manner to above, papers are categorized by type into "Journal
Articles", "Refereed Book Chapters and Other Publications", "Working Papers and
Reports", and "Posters".

To categorize posts into these types, the tags `journal_article`,
`refereed_and_other`, `working_and_reports`, and `posters` should be used.

Currently, papers without any of these tags will not appear in any section.


## Adding team members
To add a team member, add a new markdown file to the `_team` directory. They are
listed on the team page alphabetically by filename, so currently they are prefixed with a
2-digit number. It would be possible to force a custom order on the files by
configuring the `team` collection in `config.md`. [See here for details.](https://jekyllrb.com/docs/collections/#custom-sorting-of-documents)

The front matter is laid out as follows:
- `name`: Required, self-explanatory
- `img`: Portrait or some other picture that will be displayed above their name.
  Optional.
- `alumni`: If set to `true`, the name will be shown in a list at the bottom of
  the page instead of the image and bio being displayed normally.

Finally, the main content section of the file will be the person's bio.

## Adding media mentions
Add a markdown file to `in_the_media/`. They are sorted alphabetically also,
with the 3 last ones being displayed as recent on the news page, so it is
recommended to prepend the date to each one.

All of the information in a media mention file is contained within the front
matter. The four required fields are `title`, `link`, `description`, and `date`.
The date should be in standard Jekyll `yyyy-mm-dd` format.


## Featured items (media mentions and lab posts)

To feature a media mention or lab post, add `featured: true` to the front-matter.

### Posts
Featured posts will appear in the "Featured Lab Updates" section on the News
page. There is no limit to how many posts can be featured. They will be
displayed with the most recent on top.

### Media Mentions

Featured media mentions will appear on the "In The Media" page, as three large items, with all media mentions listed below them.
It is required to set an `img` in the front-matter as well. The image can be
from locally within the repo or an externally hosted image.
Currently, featured media mentions do *not* appear on the News page - the News page will list the most recent ones.
