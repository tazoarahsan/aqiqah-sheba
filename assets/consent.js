/* Aqiqah Sheba — cookie consent banner (Google Consent Mode v2)
   Shown only to visitors whose device is set to a European time zone (EU/EEA, UK, Switzerland).
   Everyone else is measured by default (see the consent defaults in each page's <head>).
   The choice is saved in this browser; clearing site data shows the banner again. */
(function () {
  var KEY = 'as_consent';
  try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }

  var tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
  var inEurope = /^Europe\//.test(tz) || /^Atlantic\/(Reykjavik|Canary|Madeira|Azores|Faroe)$/.test(tz) || tz === 'Arctic/Longyearbyen';
  if (!inEurope) return;

  var bn = (document.documentElement.lang || '').indexOf('bn') === 0;
  var T = bn ? {
    label: 'কুকি সম্মতি',
    text: 'কোন বিজ্ঞাপন থেকে পরিবারগুলো আমাদের কাছে আসছে তা বুঝতে ও সাইট উন্নত করতে আমরা কুকি ব্যবহার করি। না বললেও সাইট একইভাবে কাজ করবে।',
    more: 'গোপনীয়তা নীতি', href: '/bn/privacy',
    yes: 'সম্মতি দিন', no: 'না, ধন্যবাদ'
  } : {
    label: 'Cookie consent',
    text: 'We use cookies to see which ads bring families to us and to improve this site. The site works the same if you say no.',
    more: 'Privacy Policy', href: '/privacy',
    yes: 'Accept', no: 'Reject'
  };

  function save(choice) {
    try { localStorage.setItem(KEY, choice); } catch (e) {}
    var v = choice === 'granted' ? 'granted' : 'denied';
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v });
    }
    window.dataLayer.push({ event: 'consent_update', consent_choice: v });
    box.remove();
  }

  var css = document.createElement('style');
  css.textContent =
    '.as-consent{position:fixed;left:12px;right:12px;bottom:12px;z-index:300;max-width:720px;margin:0 auto;' +
    'background:#fff;color:#0f1e17;border:1px solid rgba(26,61,46,.2);border-radius:12px;' +
    'box-shadow:0 18px 40px -16px rgba(15,30,23,.45);padding:16px 18px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;' +
    'font:15px/1.5 ' + (bn ? '"Hind Siliguri",' : '') + 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}' +
    '.as-consent p{flex:1 1 320px;margin:0}' +
    '.as-consent .as-btns{display:flex;gap:8px;flex:0 0 auto}' +
    '.as-consent button{min-height:44px;padding:0 20px;border-radius:8px;font:inherit;font-weight:700;cursor:pointer;border:2px solid #1a3d2e}' +
    '.as-consent .as-yes{background:#1a3d2e;color:#f7f1e3}' +
    '.as-consent .as-no{background:#fff;color:#1a3d2e}' +
    '.as-consent button:focus-visible{outline:3px solid #d4a94a;outline-offset:2px}';
  document.head.appendChild(css);

  var box = document.createElement('div');
  box.className = 'as-consent';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', T.label);
  box.innerHTML = '<p></p><div class="as-btns"><button type="button" class="as-no"></button><button type="button" class="as-yes"></button></div>';
  box.querySelector('p').textContent = T.text + ' ';
  var more = document.createElement('a'); more.href = T.href; more.textContent = T.more; more.style.color = '#1a3d2e'; more.style.fontWeight = '600';
  box.querySelector('p').appendChild(more);
  box.querySelector('.as-no').textContent = T.no;
  box.querySelector('.as-yes').textContent = T.yes;
  box.querySelector('.as-yes').addEventListener('click', function () { save('granted'); });
  box.querySelector('.as-no').addEventListener('click', function () { save('denied'); });

  function place() {
    // Sit above the mobile order bar when it is showing
    var bar = document.querySelector('.mobile-order-bar, .mobile-bar');
    var h = bar && getComputedStyle(bar).display !== 'none' ? bar.offsetHeight : 0;
    box.style.bottom = (h + 12) + 'px';
  }
  function show() { document.body.appendChild(box); place(); window.addEventListener('resize', place); }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
