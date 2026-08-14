# Changelog

## [1.3.0] - 2026-08-14 — Self-hosted cookie consent, more example content

### Changed

- **Cookie consent banner replaced**: the previous banner loaded [cookie-bar.eu](https://cookie-bar.eu) from a CDN, a library with no release since 2023. Replaced with [CookieConsent v3](https://cookieconsent.orestbida.com/) (orestbida, MIT) — but **self-hosted** this time (`static/assets/cookieconsent/`), not CDN-loaded, so the theme's "no required third-party JavaScript" claim stays true even with the banner enabled. See the README's new "Cookie consent" section for what's wired up, and how to remove it entirely if your site doesn't need one.
- **Bug fix**: the old banner's granular consent never actually gated the Disqus embed in `_includes/comments.html` — it checked for the "accept everything" cookie instead of the specific third-party category, so a visitor choosing "necessary only" could still end up with Disqus loading (or, depending on timing, silently not loading regardless of their choice). Fixed by switching to CookieConsent's declarative `data-category="thirdparty"` script-gating, which only ever runs after that specific category is granted.
- `_sass/_cookieconsent.scss` (new): maps the library's CSS variables onto this theme's own tokens, so the banner and preferences panel follow light/dark/auto automatically.

### Added

- Two more example posts (IT/EN pairs): a Markdown/styles showcase covering headings, lists, blockquotes, inline and fenced code (with syntax highlighting), tables, and images; and a shorter pre-launch checklist post. With only two example posts total, the featured-post feature (added in 1.2.0) didn't really read as "one post pulled out of a list" — there wasn't much of a list left. Four posts per language (three after the featured one is excluded) makes the point clearer, and the Markdown post doubles as a live reference for what `.prose` styles.

## [1.2.0] - 2026-08-14 — Featured post on the blog index

### Added

- Post front matter's new `featured: true` field pins that post as a large, prominent card at the top of the blog index (first page only) — image and text side by side on desktop, stacked on mobile, with a "Featured" badge. It's excluded from the regular post grid below, so it isn't shown twice. At most one post per language should be flagged this way — see the README's "Writing posts" section.
- The featured card deliberately doesn't crop or force an aspect ratio on the cover image: cover images in this theme are often graphics with text baked in (a title, a diagram) rather than plain photos, at unpredictable aspect ratios and text positions, so any fixed crop risks cutting that text off. The image keeps its natural proportions instead, same approach as the in-post cover image.

## [1.1.0] - 2026-08-14 — Configurable favicon, per-post icons

### Added

- `favicon` key in `_config.yml`: the favicon path is no longer hardcoded in `_includes/head.html`, so forks can swap it without touching the template.
- Post front matter's `icon` field (a [Fork Awesome](https://forkaweso.me/Fork-Awesome/icons/) class, e.g. `fa-book`) is now rendered on blog cards — bottom-right, next to the category pill, colored with `--color-accent`. The field existed in front matter and the docs before this, but no layout ever consumed it.
- Footer now credits the theme on its own line, separate from the site's own copyright, so the credit survives a fork setting its own `site.author`.
- "Buy Me a Coffee" support button and `.github/FUNDING.yml`.
- Social preview screenshots (light/dark) for the repo's GitHub card.

## [1.0.0] - 2026-08-13 — Initial release

First public release of the theme, extracted from a personal resume/blog site
built with Jekyll and Claude Code.

### Features

- Pure Jekyll, no front-end build pipeline: CSS compiled natively via Jekyll/Sass, zero third-party JavaScript (no jQuery, no bundler).
- Bilingual out of the box (Italian/English example content), with a language switcher and `hreflang` tags driven entirely by front matter — no i18n plugin (GitHub Pages' plugin whitelist doesn't include one). See the README for how to add, remove, or change languages.
- Light / dark / automatic theme, persisted across pages (`localStorage`), either user-chosen or following `prefers-color-scheme`.
- Multi-page: Home, CV/Experience, Projects, Blog (with categories and pagination), Contact.
- Blog with configurable categories (per language), a category index with post counts, language-filtered pagination, and client-side search (fetches `search.json`, no external library, results filtered to the current language).
- Theme-adaptive post cover images: two images per post, one for light theme and one for dark, chosen purely via CSS.
- Live GitHub stats (stars/forks) on project cards, cached in `localStorage` to stay under the public API's rate limit.
- Configurable, stable post permalinks with built-in redirect support (`jekyll-redirect-from`), so renaming a category later doesn't break existing links.
- A simple, theme-aware 404 page.

### Known limitations

- Blog pagination is implemented by hand (see `_layouts/blog-index.html`) rather than via `jekyll-paginate`, because pagination needs to filter by language and the plugin can't do that. Past the first two pages per language, you'll need to add pagination page files by hand — see the README.
- The included legal pages (`disclaimer.md`, `privacy.md`) are placeholders, not real legal text. Replace them before publishing a real site.
