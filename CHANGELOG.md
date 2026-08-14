# Changelog

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
