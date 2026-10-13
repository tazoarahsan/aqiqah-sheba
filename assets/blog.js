/* Aqiqah Sheba blog: topic + language filters, table of contents, copy-link */
(function () {
  // /blog: switch header & footer language in place, remember the choice, keep the URL clean
  var root = document.documentElement;
  if (root.hasAttribute('data-ui')) {
    var u = new URL(location.href);
    if (u.searchParams.has('ui')) { u.searchParams.delete('ui'); history.replaceState(null, '', u); }
    document.querySelectorAll('[data-ui-switch]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var v = a.dataset.uiSwitch;
        root.setAttribute('data-ui', v);
        try { localStorage.setItem('blogUi', v); } catch (err) {}
      });
    });
  }

  var list = document.querySelector('.blog-list');
  if (list) {
    var cards = list.querySelectorAll('.card');
    var featured = list.querySelector('.card--featured');
    var empty = list.querySelector('.filter-empty');
    var state = { topic: '', lang: '' };
    var params = new URLSearchParams(location.search);
    state.topic = params.get('topic') || '';
    state.lang = params.get('lang') || '';

    var apply = function () {
      var shown = 0;
      list.querySelectorAll('[data-filter-topic]').forEach(function (c) { c.classList.toggle('is-active', c.dataset.filterTopic === state.topic); });
      list.querySelectorAll('[data-filter-lang]').forEach(function (c) { c.classList.toggle('is-active', c.dataset.filterLang === state.lang); });
      cards.forEach(function (card) {
        var match = (!state.topic || card.dataset.topic === state.topic) && (!state.lang || card.dataset.lang === state.lang);
        card.hidden = !match;
        if (match) shown++;
      });
      if (featured) featured.classList.toggle('card--featured', !state.topic && !state.lang);
      if (empty) empty.hidden = shown > 0;
      var url = new URL(location.href);
      ['topic', 'lang'].forEach(function (k) { if (state[k]) url.searchParams.set(k, state[k]); else url.searchParams.delete(k); });
      history.replaceState(null, '', url);
    };
    list.addEventListener('click', function (e) {
      var b = e.target.closest('[data-filter-topic],[data-filter-lang]');
      if (!b) return;
      if ('filterTopic' in b.dataset) state.topic = b.dataset.filterTopic;
      else state.lang = b.dataset.filterLang;
      apply();
    });
    if (state.topic || state.lang) apply();
  }

  // Table of contents (posts with toc: true)
  var tocList = document.querySelector('.toc-list');
  if (tocList) {
    var heads = document.querySelectorAll('.post-body > h2');
    if (!heads.length) { document.querySelector('.toc').remove(); }
    heads.forEach(function (h, i) {
      if (!h.id) h.id = 'section-' + (i + 1);
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id; a.textContent = h.textContent;
      li.appendChild(a); tocList.appendChild(li);
    });
  }

  // Copy link
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var label = btn.textContent;
      var done = function () {
        btn.textContent = btn.dataset.copied || 'Copied'; btn.classList.add('is-done');
        setTimeout(function () { btn.textContent = label; btn.classList.remove('is-done'); }, 2000);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(done);
      else { var t = document.createElement('textarea'); t.value = btn.dataset.copy; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done(); }
    });
  });
})();
