---
layout: post
title: "Markdown e stili in questo tema"
date: '2024-03-01 09:00:00'
description: "Una rassegna veloce degli elementi Markdown che questo tema stilizza già: titoli, elenchi, citazioni, blocchi di codice, tabelle e immagini."
intro: "Il corpo di ogni post viene renderizzato dal Markdown tramite kramdown, poi stilizzato dalle regole .prose in _sass/_blog.scss. Questo post li usa quasi tutti, così puoi vedere il risultato prima di iniziare a scrivere."
lang: it_IT
categories:
- Guide
keywords: markdown, kramdown, stili, esempio, syntax highlighting
tags:
- markdown
- esempio
permalink: "/it/blog/guide/:title/"
translation_key: markdown-styles-demo
icon: fa-code
---

Lorem ipsum dolor sit amet, **testo in grassetto**, *testo in corsivo* e `codice inline` vengono renderizzati come ti aspetti. I link appaiono [così](https://jekyllrb.com/) e prendono il colore d'accento.

## Titoli

Questo post usa `##` e `###` — `#` (h1) è riservato al titolo del post stesso, impostato dal campo `title` nel front matter, non scritto nel corpo.

### Un titolo più piccolo

I titoli hanno una spaziatura coerente sopra e sotto, quindi non serve aggiungere interruzioni di riga manuali fra le sezioni.

## Elenchi

Non ordinato:

- Primo elemento
- Secondo elemento, con un elenco annidato:
  - Elemento annidato uno
  - Elemento annidato due
- Terzo elemento

Ordinato:

1. Installa Ruby e Bundler
2. Esegui `bundle install`
3. Esegui `bundle exec jekyll serve`

## Citazioni

> Una blockquote ha un bordo a sinistra e testo attenuato — utile per citazioni in evidenza o per citare una fonte.

## Codice

Il codice inline come `page.title` sta dentro una pillola. I blocchi di codice recintati ottengono l'evidenziazione della sintassi tramite [Rouge](https://github.com/rouge-ruby/rouge), l'highlighter incluso in questo tema:

```yaml
title: "Il mio post"
date: '2024-03-01 09:00:00'
categories:
- Guide
tags:
- esempio
```

```liquid
{% raw %}{% for post in site.posts %}
  {{ post.title }}
{% endfor %}{% endraw %}
```

## Tabelle

| Campo | Obbligatorio | Note |
|---|---|---|
| `title` | Sì | Mostrato come H1 del post |
| `date` | Sì | Usato anche per l'ordinamento e la stima del "tempo di lettura" |
| `image` | No | Foto di copertina; abbinala a `image_dark` per una versione theme-adaptive |

## Immagini

`.prose` limita la larghezza delle immagini al 100% della colonna di lettura e ne arrotonda gli angoli — nessuna classe aggiuntiva necessaria:

![L'avatar segnaposto del tema](/static/assets/img/avatar-placeholder.svg)

---

Questo è il set completo. Combinali come preferisci — nessuno è obbligatorio, e anche semplici paragrafi di testo funzionano bene quanto tutto il resto.
