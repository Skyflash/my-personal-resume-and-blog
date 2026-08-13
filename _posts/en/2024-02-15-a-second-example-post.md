---
layout: post
title: "A Second Example Post (No Translation)"
date: '2024-02-15 09:00:00'
description: "Not every post needs a translation — this one only exists in English, and that's fine."
intro: "This post shows what happens when content isn't translated: no translation_key means no language switcher on the post itself, and it simply won't appear in the other language's blog listing or search results."
lang: en_US
categories:
- Guides
keywords: example, lorem ipsum, translation
tags:
- example
- multilingual
permalink: "/en/blog/guides/:title/"
icon: fa-book
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo, quis auctor massa condimentum a.

* TOC
{:toc}

## Why untranslated posts are fine

On a real site you'll often publish faster than you can translate, or some posts just won't be relevant to a second-language audience. This theme handles that gracefully:

- A post without `translation_key` in its front matter has no language switcher — visitors won't be offered a version that doesn't exist.
- It only shows up in the blog index, category page, and search results of its own language.
- Related posts (shown at the bottom of an article) are only ever suggested in the same language.

## Adding a translation later

If you do translate a post later, just add a matching `translation_key` to both files' front matter and the switcher appears automatically — no other change needed.

```yaml
translation_key: my-shared-key
```

Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
