---
layout: post
title: "Cinque cose da controllare prima di pubblicare"
date: '2024-03-15 09:00:00'
description: "Una breve checklist pre-lancio per chi personalizza questo tema: identità del sito, contenuti, pagine legali e i soliti dettagli dell'ultimo minuto."
intro: "Niente di specifico per questo tema — solo le poche cose che si dimenticano quando si è impazienti di pubblicare un sito nuovo."
lang: it_IT
categories:
- Appunti
keywords: checklist, lancio, esempio
tags:
- esempio
- checklist
permalink: "/it/blog/appunti/:title/"
translation_key: prelaunch-checklist
icon: fa-check-square-o
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prima di puntare un dominio su questo sito e dire che è finito, vale la pena ripassare una breve lista.

- **Identità del sito.** Il blocco `title`, `description` e `author` in `_config.yml` — i segnaposto sono chiaramente segnaposto, ma è facile dimenticarne uno.
- **Pagine legali.** `disclaimer.md` e `privacy.md` nella root del repository arrivano con note su cosa metterci davvero, non testo legale reale.
- **Immagini di copertina.** I post funzionano bene anche senza `image`, ma l'indice del blog e il post in evidenza rendono meglio con una.
- **Link di esempio rimasti.** I post di esempio (questo incluso) fanno riferimento al repository di questo tema e ai contenuti dimostrativi — sostituiscili o rimuovili una volta letto cosa mostrano.
- **Un dominio personalizzato, se lo usi.** Vedi la sezione "Deploying to GitHub Pages" del README per la combinazione `url`/`baseurl` giusta per la tua configurazione.

Nessuno di questi punti impedisce al sito di compilare — Jekyll non si lamenta di un `author.name` segnaposto. Sono solo cose facili da dimenticare proprio perché niente si rompe se lo fai.
