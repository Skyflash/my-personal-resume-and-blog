---
layout: post
title: "Markdown & Styles in This Theme"
date: '2024-03-01 09:00:00'
description: "A quick tour of the Markdown elements this theme styles out of the box: headings, lists, quotes, code blocks, tables, and images."
intro: "Every post body is rendered from Markdown through kramdown, then styled by the .prose rules in _sass/_blog.scss. This post exercises most of them, so you can see what you get before you start writing."
lang: en_US
categories:
- Guides
keywords: markdown, kramdown, styles, example, syntax highlighting
tags:
- markdown
- example
permalink: "/en/blog/guides/:title/"
translation_key: markdown-styles-demo
icon: fa-code
---

Lorem ipsum dolor sit amet, **bold text**, *italic text*, and `inline code` all render the way you'd expect. Links look like [this one](https://jekyllrb.com/) and pick up the accent color.

## Headings

This post uses `##` and `###` — `#` (h1) is reserved for the post title itself, set from the `title` front matter field, not written in the body.

### A smaller heading

Headings get consistent spacing above and below, so you don't need to add manual line breaks between sections.

## Lists

Unordered:

- First item
- Second item, with a nested list:
  - Nested item one
  - Nested item two
- Third item

Ordered:

1. Install Ruby and Bundler
2. Run `bundle install`
3. Run `bundle exec jekyll serve`

## Quotes

> A blockquote gets a left border and muted text — useful for pull quotes or for quoting a source.

## Code

Inline code like `page.title` sits in a pill of its own. Fenced code blocks get syntax highlighting via [Rouge](https://github.com/rouge-ruby/rouge), the highlighter this theme ships with:

```yaml
title: "My Post"
date: '2024-03-01 09:00:00'
categories:
- Guides
tags:
- example
```

```liquid
{% raw %}{% for post in site.posts %}
  {{ post.title }}
{% endfor %}{% endraw %}
```

## Tables

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Shown as the post's H1 |
| `date` | Yes | Also used for sorting and the "reading time" estimate |
| `image` | No | Cover photo; pair with `image_dark` for a theme-adaptive version |

## Images

`.prose` caps image width at 100% of the reading column and rounds the corners — no extra classes needed:

![The theme's placeholder avatar](/static/assets/img/avatar-placeholder.svg)

---

That's the full set. Mix and match as needed — none of it is required, and plain paragraphs of text work just as well as everything above.
