# Personal Resume & Blog (Jekyll theme)

A personal CV/resume + blog theme for [Jekyll](https://jekyllrb.com/), built to run on [GitHub Pages](https://pages.github.com/) with zero front-end build tooling and no required third-party JavaScript. Bilingual out of the box (Italian/English placeholder content) — use both languages, trim it to one, or extend it to more.

This repository is the theme **plus example placeholder content** (lorem ipsum posts, example CV data, example legal pages) so it runs out of the box. Replace the placeholders with your own content and it's your site.

## Features

- **Pure Jekyll**, no front-end build pipeline: CSS compiled natively via Jekyll/Sass, no required third-party JavaScript (no jQuery, no bundler). The one optional exception is the cookie consent banner, and even that's vendored into this repo rather than loaded from a CDN — see below.
- **Multilingual** (Italian/English example content shipped, extensible): permalinks under `/it/`/`/en/`, a language switcher with `hreflang` tags, all driven by front matter and `_data/i18n.yml` — no i18n plugin (not compatible with GitHub Pages' plugin whitelist).
- **Light / dark / automatic theme**, persisted across pages (`localStorage`), user-chosen or following `prefers-color-scheme`.
- **Multi-page**: Home, CV/Experience, Projects, Blog (with categories and pagination), Contact — not a single scrolling landing page.
- **Blog** with configurable categories (per language), a category index with post counts, language-filtered pagination, and client-side search (fetches `search.json`, no external library, results filtered to the current language).
- **Featured post**: flag one post per language (`featured: true` in its front matter) to pin it as a large card at the top of the blog index — see [Writing posts](#writing-posts).
- **Theme-adaptive post cover images**: two images per post, one for light theme and one for dark, chosen purely via CSS.
- **Live GitHub stats** (stars/forks) on project cards, cached in `localStorage` to stay under the public API's rate limit.
- Icons via [Fork Awesome](https://forkaweso.me/), with hand-written inline SVG for icons not in that set (X/Twitter, Bluesky, and the language-switcher flags).
- Configurable, stable post permalinks with built-in redirect support (`jekyll-redirect-from`), so renaming a category later doesn't break existing links.
- **Optional, self-hosted cookie consent banner** ([CookieConsent v3](https://cookieconsent.orestbida.com/), MIT), theme-aware (follows light/dark/auto automatically) and wired to gate the Disqus embed behind actual consent — see [Cookie consent](#cookie-consent) below. Not required, and easy to remove entirely if your site doesn't need one.

## Quick start

Requires Ruby (with Bundler).

```bash
# use this repo as a GitHub template (or just clone it), then:
bundle install

# start the dev server at http://127.0.0.1:4000
bundle exec jekyll serve

# to also see future-dated posts (e.g. scheduled articles)
bundle exec jekyll serve --future
```

Then start customizing — see below for where everything lives.

## Making it yours

1. **Site identity** — `_config.yml`: `title`, `description`, `url`, the `author:` block (name, avatar, social links, email), `social:` links. Every value in there has a comment explaining what it's for.
2. **Avatar** — replace `static/assets/img/avatar-placeholder.svg` with your own photo (JPEG/PNG/SVG all work) and update `author.avatar` in `_config.yml`. If you leave `avatar:` blank, the home page just skips it.
3. **Favicon** — replace `static/assets/img/favicon.svg` (or point `_includes/head.html` / `404.html` at a different file).
4. **CV/Experience** — `_data/index/careers.yml` (timeline) and `_data/index/skills.yml` (skills by category). Every text field is a map of `{it: ..., en: ...}` — keep both keys in sync, or just fill in the languages you actually use.
5. **Projects** — `_data/index/projects.yml`. Point `gh_user`/`repo` at a real GitHub repo to get live star/fork counts, or use a plain `url:`, or neither for a link-less card.
6. **Blog posts** — see [Writing posts](#writing-posts) below.
7. **Blog categories** — `_data/blog.yml`.
8. **UI text** (nav labels, buttons, "reading time", etc.) — `_data/i18n.yml`, one key per string.
9. **Legal pages** — `disclaimer.md` and `privacy.md` at the repo root are placeholders with notes on what to actually put there. Don't ship them as-is.
10. **Comments / analytics** (optional) — `_config.yml`. `disqus:` ships with a placeholder shortname (comment out the two lines to disable comments entirely); `ga:`'s `id:` is commented out by default (uncomment and fill it in to enable).
11. **Cookie consent** (optional) — see [Cookie consent](#cookie-consent) below.

## Content structure

```
_posts/it/, _posts/en/     Blog posts, one folder per language
it/, en/                   Static pages per language (home, CV, projects,
                            contact, blog index, category pages)
_data/blog.yml             Blog categories (name + URL), one row per
                            language per category
_data/i18n.yml             Shared UI strings, {it, en} per key
_data/index/                careers.yml, skills.yml, projects.yml — all
                            text fields are {it, en} maps
_layouts/, _includes/      Theme templates; _includes/icons/ has the
                            hand-drawn inline SVG icons
_sass/                     Design tokens (_tokens.scss) + one file per
                            component
static/assets/img/         Your images go here (removed from this repo
                            except two placeholder SVGs — see above)
```

## Writing posts

Add a Markdown file to `_posts/it/` or `_posts/en/` following Jekyll's
`YYYY-MM-DD-title.md` naming convention. Look at the two example posts
already in the repo for the front matter fields this theme understands
(`title`, `date`, `description`, `intro`, `lang`, `categories`, `tags`,
`permalink`, `icon`, optionally `image`/`image_dark` for a theme-adaptive
cover, and `translation_key` — see below).

Not every post needs a translation. A post without `translation_key` simply
has no language switcher and only shows up in its own language's blog index,
category page, and search results — that's the normal, supported case, not
a degraded one.

### Featuring a post

Add `featured: true` to a post's front matter and it becomes a large card at
the top of that language's blog index (first page only), with the cover image
and text side by side on desktop. It's removed from the regular grid below,
so it doesn't appear twice.

Only one featured post per language is supported at a time — if more than one
has `featured: true`, the most recent one wins (`where: "featured", true |
first`, and `site.posts` is already newest-first). There's no automatic
"latest post" fallback: leave the field out entirely and the blog index just
shows the regular grid, no featured card. To feature a different post later,
remove the flag from the old one and add it to the new one.

A cover image (`image`, optionally `image_dark`) isn't required, but the
featured card looks noticeably better with one. Unlike the regular post
grid, the featured card doesn't crop the image to a fixed shape — it keeps
its natural proportions, so wide banners and tall graphics both display in
full, with no risk of cropping off text baked into the image.

## How the multilingual system works

There's no i18n plugin involved (GitHub Pages' "safe mode" plugin whitelist
doesn't include one) — it's all plain Liquid and front matter:

- **Permalinks** live under a language prefix: `/it/...`, `/en/...`.
- **Categories** are matched by the literal string in `categories:` front
  matter (`site.categories["Some Category"]`), so each language needs its own
  category name — see `_data/blog.yml`, which has one row per language per
  category (name *and* URL slug, since slugs are translated too where it
  makes sense, e.g. `/en/notes/` rather than `/en/appunti/`).
- **`icon`** (optional) is a [Fork Awesome](https://forkaweso.me/Fork-Awesome/icons/)
  class, e.g. `fa-book` — shown on the post card in the blog index, next to
  the category pill. Leave it out to skip the icon.
- **The language switcher and `hreflang` tags** (`_includes/i18n-alternates.html`)
  work by matching `translation_key` in front matter — the *same* key on two
  posts/pages marks them as translations of each other. This is deliberate:
  since slugs can differ between languages (`/it/progetti/` vs
  `/en/projects/`), a simple URL prefix swap isn't enough to find the sibling
  page.
- **Blog pagination** is done by hand in `_layouts/blog-index.html`, filtered
  by `page.lang`, because `jekyll-paginate` (the only pagination plugin GitHub
  Pages allows) always paginates *all* posts with no way to exclude other
  languages. With more than `blog_posts_per_page` posts in one language
  (`_config.yml`), you'll need a second page file — copy `it/blog/index.html`
  or `en/blog/index.html`, set `page_num: 2`, and give it its own permalink
  (e.g. `/it/blog/page2/`).

### Adding a third language

1. Add the language's key to every entry in `_data/i18n.yml`.
2. Add its rows to `_data/blog.yml` (categories).
3. Add its code to the language list in `_includes/i18n-alternates.html` and,
   if you want it on the 404 page too, in `404.html`.
4. Create its static pages under a new folder (mirroring `it/`/`en/`), and
   its posts under `_posts/<lang>/`.
5. Optionally add its flag icon in `_includes/icons/` and reference it from
   `_includes/nav.html`.

### Going single-language

If you don't need multiple languages: delete one of `it/`/`en/` and its
`_posts/<lang>/` folder, remove that language's rows from `_data/blog.yml`
and keys from `_data/i18n.yml`, set `default_lang` in `_config.yml` to the
one you keep, and remove the now-unused language from
`_includes/i18n-alternates.html`'s `ordered_langs` list. The switcher simply
won't render once there's only one language left (`i18n_alternates.size` is
never `> 1`), so nothing else needs to change.

### The site root (`/`)

There's no page at the bare root URL — only `/it/` and `/en/` — so
`en/index.html` carries `redirect_from: /`, which makes visitors landing on
the bare domain (or `https://<username>.github.io/<repo>/` with no further
path) land on `/en/`. If you change `default_lang` in `_config.yml`, **move
that `redirect_from: /` to the matching language's `index.html`** — only one
page can claim it (whichever one doesn't, the site root 404s).

## Cookie consent

This theme ships with an optional cookie consent banner
([CookieConsent v3](https://cookieconsent.orestbida.com/) by Orest Bida, MIT
licensed) — `_includes/cookieconsent.html`, wired into `_includes/footer.html`.
It's **self-hosted**: the library's JS/CSS live under
`static/assets/cookieconsent/`, fetched from this repo like every other
asset, never from a CDN. That's a deliberate choice — the theme's front page
promises no *required* third-party JavaScript, and a CDN-loaded script would
quietly break that promise for every site built on it, whether that site
actually needs a cookie banner or not.

**Whether you need one at all is a legal question this theme can't answer for
you** — it depends on your jurisdiction, your visitors', and what you
actually enable (analytics, comments, ads, ...). Two ways forward:

- **Keep it.** Two consent categories are pre-wired: `necessary` (always on,
  can't be disabled) and `thirdparty`. The Disqus embed in
  `_includes/comments.html` only loads once a visitor grants `thirdparty` —
  it's a `<script type="text/plain" data-category="thirdparty" ...>` tag,
  inert until CookieConsent flips it on, not a check against a cookie's value
  (a previous version of this theme did that, and it was buggy: it checked
  for "accepted everything" instead of the specific category, so choosing
  "necessary only" could still silently skip loading comments). If you add
  your own third-party embed later (analytics, an ad script, a different
  comments platform), give its `<script>` tag the same treatment, or add a
  new category for it and update the copy in `cookieconsent.html`'s
  `translations` block to describe what it does.
- **Remove it.** Delete `_includes/cookieconsent.html`'s `{% include %}` line
  from `_includes/footer.html`, the "Cookie preferences" link right above it,
  the `static/assets/cookieconsent/` folder, `_sass/_cookieconsent.scss` and
  its `@import` in `assets/css/main.scss`. Then decide what to do about
  `_includes/comments.html`'s `data-category="thirdparty"` script tag —
  either leave it (browsers just render `type="text/plain"` as inert, so
  Disqus simply never loads) or turn it back into a plain `<script src="...">`
  if you've decided you don't need consent-gating at all.

The banner and preferences panel reuse this theme's own design tokens
(`_sass/_cookieconsent.scss` maps them onto CookieConsent's CSS variables), so
they follow light/dark/auto automatically — no extra JS, no `.cc--darkmode`
class to toggle.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo's Settings → Pages, set the source to your default branch.
3. If you're using a **custom domain**, add a `CNAME` file at the repo root with your domain, and set `url:` in `_config.yml` accordingly. Note that if your GitHub account's `<username>.github.io` site already has a custom domain, GitHub Pages nests *every* project repo's site under that same domain by default (`yourdomain.com/<repo>/`) even without a `CNAME` in this repo — check there before assuming you need one here too.
4. If you're **not** using a custom domain (i.e. publishing at `https://<username>.github.io/<repo>`), set `baseurl: '/<repo>'` in `_config.yml`.
5. GitHub Pages' classic "Deploy from a branch" pipeline always builds with the `github-pages` gem pinned in the `Gemfile` — that's also what this repo uses locally, so what works on your machine works when published.

## Support

If you find this theme useful, you can support its development:

[![Buy me a coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-FFDD00?style=flat&logo=buymeacoffee&logoColor=brown)](https://buymeacoffee.com/cristiancastellari)

Or use the GitHub Sponsors button on the top-right of the repository.

## License

MIT — see [LICENSE](LICENSE). Once you replace the placeholder content with your own, that content is of course yours to license however you like.
