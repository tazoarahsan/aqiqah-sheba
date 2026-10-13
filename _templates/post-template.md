---
# ╔══════════════════════════════════════════════════════════════════╗
#   NEW POST TEMPLATE — copy everything in this file into a new file
#   inside the _posts folder, named like:
#       _posts/2026-10-20-aqiqah-kokhon-korben.md
#              └ date ──┘ └──── slug (English letters, hyphens) ───┘
#   The page will appear at  aqiqahsheba.com/blog/aqiqah-kokhon-korben/
#   Lines starting with # are notes for you; you can delete them.
# ╚══════════════════════════════════════════════════════════════════╝

title: লেখার শিরোনাম এখানে

# Shown on Google and in WhatsApp/Facebook previews. Aim for 120–160 characters.
description: এক-দুই বাক্যে লেখাটির সারসংক্ষেপ।

# Pick ONE and spell it exactly the same every time (it powers the filter on /blog):
#   আকিকার মাসায়েল | নবজাতকের সুন্নাহ | সাদাকাহ ও কাফফারা | আমাদের কথা
topic: আকিকার মাসায়েল

# ── Optional: delete any line you don't need ──
# Cover image, 1200×630 px, uploaded to the assets/blog folder and named after the slug
image: /assets/blog/aqiqah-kokhon-korben.jpg
image_alt: ছবির সংক্ষিপ্ত বর্ণনা
# Adds a clickable "এই লেখায় যা আছে" list built from the ## headings
toc: true
# If you later revise the post, add the date of the revision
# updated: 2026-11-05
# Hide the green order box at the end (e.g. for news posts)
# hide_cta: true
# Keep the post hidden until it's ready
# published: false
---

প্রথম অনুচ্ছেদ। এটি কার্ডে ও Google-এ ছোট বিবরণ হিসেবেও দেখাতে পারে।

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

শেষের অর্ডার বক্স স্বয়ংক্রিয়ভাবে যোগ হয়, আলাদা করে দিতে হবে না।
