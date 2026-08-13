---
title: Privacy Policy
layout: page
description: Privacy and cookie policy
permalink: /about/privacy/
lang: en_US
---

**This is placeholder content — replace it with your own privacy policy before publishing your site.**

What you're legally required to disclose depends on your country, on whether you have visitors in the EU/UK (GDPR), California (CCPA), etc., and on which third-party services you actually enable. There's no one-size-fits-all text — reusing someone else's privacy policy without adapting it to what your site really does is a bad idea.

Things to check for **this theme specifically**, since each one has its own privacy implications if you enable it:

- **Disqus comments** (`_config.yml` → `disqus:`, `_includes/comments.html`) — Disqus sets cookies and processes commenter data; see [Disqus's own privacy documentation](https://disqus.com/data-sharing-settings/).
- **Google Analytics** (`_config.yml` → `ga:`, `_includes/analytics.html`) — collects visitor analytics data.
- **Cookie consent banner** (`_includes/cookieconsent.html`) — loaded from a third-party CDN ([cookie-bar.eu](https://cookie-bar.eu)); read their terms if you keep it, or replace it with your own.
- **GitHub API calls** for live star/fork counts on the Projects page (`assets/js/github-stats.js`) — client-side only, no server of yours is involved, but it does call `api.github.com` from the visitor's browser.

This page is linked from the footer (`_includes/footer.html`) and from `_data/i18n.yml` (`footer_privacy`). Feel free to rename, remove, or restructure it entirely.
