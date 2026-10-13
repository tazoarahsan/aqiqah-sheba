---
# ╔══════════════════════════════════════════════════════════════════╗
#   ENGLISH POST TEMPLATE
#   Copy everything into a new file inside _posts, named like:
#       _posts/2026-10-20-when-to-do-aqiqah.md
#              └ date ──┘ └─── slug (lowercase, hyphens) ───┘
#   It will appear at  aqiqahsheba.com/blog/when-to-do-aqiqah/
#   Lines starting with # are notes for you; you can delete them.
# ╚══════════════════════════════════════════════════════════════════╝

lang: en
# Keep the quotes around titles and descriptions (a colon without quotes breaks the page)
title: "Your article title here"

# Shown on /blog, on Google and in WhatsApp/Facebook previews. Aim for 120–160 characters.
description: "One or two sentences summarising the article."

# Write ONE of these keys exactly:  rulings | newborn-sunnah | sadaqah-kaffara | news
topic: rulings

# ── Optional: delete any line you don't need ──
# Cover image, 1200×630 px, uploaded to the assets/blog folder and named after the slug
image: /assets/blog/when-to-do-aqiqah.jpg
image_alt: Short description of the image
# Adds a clickable "In this article" list built from the ## headings
toc: true
# If a Bangla version of this article exists, put its address here
# (and put this article's address in the Bangla one's translation line)
# translation: /blog/aqiqah-kokhon-korben/
# If you revise the article later, add the revision date
# updated: 2026-11-05
# Hide the green order box at the end (e.g. for news posts)
# hide_cta: true
# Keep the post hidden until it's ready
# published: false
---

Opening paragraph.

## First section heading

Normal text. **Bold** like this, [a link](https://aqiqahsheba.com/en/packages.html) like this.

- A list item
- Another item

## Adding a hadith

{% include hadith.html
   narrator="… reported that the Messenger of Allah ﷺ said:"
   arabic="Arabic text here (copy from Sunnah.com)"
   meaning="Plain-English meaning here"
   source="Sunan Abi Dawud 2838"
   link="https://sunnah.com/abudawud:2838"
   grade="Sahih (Al-Albani)"
%}

## Mentioning a weak narration

{% include hadith.html
   weak=true
   arabic="Arabic text"
   meaning="Meaning"
   source="Book name and hadith number"
   link="https://sunnah.com/..."
   grade="Da'if (name of the grading scholar)"
   note="One or two sentences on why it is weak and what scholars say."
%}

## Showing an order box mid-article

{% include cta.html %}

The order box at the end is added automatically.
