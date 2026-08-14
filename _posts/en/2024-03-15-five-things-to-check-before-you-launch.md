---
layout: post
title: "Five Things to Check Before You Launch"
date: '2024-03-15 09:00:00'
description: "A short pre-launch checklist for anyone customizing this theme: identity, content, legal pages, and the usual last-minute details."
intro: "None of this is theme-specific wisdom — it's just the handful of things people forget when they're excited to ship a new site."
lang: en_US
categories:
- Notes
keywords: checklist, launch, example
tags:
- example
- checklist
permalink: "/en/blog/notes/:title/"
translation_key: prelaunch-checklist
icon: fa-check-square-o
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Before you point a domain at this and call it done, it's worth running through a short list.

- **Site identity.** `_config.yml`'s `title`, `description`, and `author` block — the placeholders are obviously placeholders, but it's easy to miss one.
- **Legal pages.** `disclaimer.md` and `privacy.md` at the repo root ship with notes on what to actually put there, not real legal text.
- **Cover images.** Posts render fine without an `image`, but the blog index and the featured post both look better with one.
- **Broken example links.** The two example posts (this one included) reference this theme's own repo and demo content — replace or remove them once you've read what they're showing.
- **A custom domain, if you're using one.** See the README's "Deploying to GitHub Pages" section for the `url`/`baseurl` combination that applies to your setup.

None of these will stop the site from building — Jekyll won't complain about a placeholder `author.name`. They're just easy to forget precisely because nothing breaks if you do.
