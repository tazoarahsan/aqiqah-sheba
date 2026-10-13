---
# ╔══════════════════════════════════════════════════════════════════╗
#   BANGLA POST TEMPLATE
#   Copy everything into a new file inside _posts, named like:
#       _posts/2026-10-20-aqiqah-kokhon-korben.md
#              └ date ──┘ └──── slug (English letters, hyphens) ───┘
#   It will appear at  aqiqahsheba.com/blog/aqiqah-kokhon-korben/
#   Lines starting with # are notes for you; you can delete them.
# ╚══════════════════════════════════════════════════════════════════╝

lang: bn
# Keep the quotes around titles and descriptions (a colon without quotes breaks the page)
title: "লেখার শিরোনাম এখানে"
description: "এক-দুই বাক্যে লেখাটির সারসংক্ষেপ (Google ও শেয়ার প্রিভিউতে দেখাবে)।"

# REQUIRED for Bangla posts: the English title and summary shown on the /blog page
title_en: "English title for the blog page"
description_en: "One or two English sentences summarising the article."

# Write ONE of these keys exactly:  rulings | newborn-sunnah | sadaqah-kaffara | news
topic: rulings

# ── Optional: delete any line you don't need ──
# Cover image, 1200×630 px, uploaded to the assets/blog folder and named after the slug
image: /assets/blog/aqiqah-kokhon-korben.jpg
image_alt: ছবির সংক্ষিপ্ত বর্ণনা
# Adds a clickable "এই লেখায় যা আছে" list built from the ## headings
toc: true
# If an English version of this article exists, put its address here
# (and put this article's address in the English one's translation line).
# The pair then shows once on /blog, as the English card.
# translation: /blog/when-to-do-aqiqah/
# If you revise the article later, add the revision date
# updated: 2026-11-05
# Hide the green order box at the end (e.g. for news posts)
# hide_cta: true
# Keep the post hidden until it's ready
# published: false
---

প্রথম অনুচ্ছেদ।

## প্রথম অংশের শিরোনাম

সাধারণ লেখা। **মোটা অক্ষর** এভাবে, [লিংক](https://aqiqahsheba.com/packages.html) এভাবে।

- তালিকার একটি বিষয়
- আরেকটি বিষয়

## হাদিস যোগ করার নিয়ম

{% include hadith.html
   narrator="… থেকে বর্ণিত, রাসূলুল্লাহ ﷺ বলেছেন:"
   arabic="আরবি পাঠ এখানে (Sunnah.com থেকে কপি করুন)"
   meaning="বাংলা অর্থ এখানে"
   source="সুনান আবু দাউদ, হাদিস ২৮৩৮"
   link="https://sunnah.com/abudawud:2838"
   grade="সহিহ (আলবানী)"
%}

## দুর্বল বর্ণনা উল্লেখ করতে হলে

{% include hadith.html
   weak=true
   arabic="আরবি পাঠ"
   meaning="বাংলা অর্থ"
   source="গ্রন্থের নাম, হাদিস নম্বর"
   link="https://sunnah.com/..."
   grade="দুর্বল (মুহাদ্দিসের নাম)"
   note="কেন বর্ণনাটি দুর্বল এবং এ বিষয়ে আলেমদের অবস্থান কী, এক-দুই বাক্যে।"
%}

## মাঝখানে অর্ডার বক্স দেখাতে চাইলে

{% include cta.html %}

শেষের অর্ডার বক্স স্বয়ংক্রিয়ভাবে যোগ হয়।
