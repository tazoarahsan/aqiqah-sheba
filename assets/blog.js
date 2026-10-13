/* Aqiqah Sheba blog: topic filter, table of contents, copy-link */
(function () {
  // Topic filter on /blog/
  var chips = document.querySelectorAll('.topic-filter .chip');
  if (chips.length) {
    var cards = document.querySelectorAll('.blog-list .card');
    var featured = document.querySelector('.card--featured');
    var empty = document.querySelector('.filter-empty');
    var apply = function (topic) {
      var shown = 0;
      chips.forEach(function (c) { c.classList.toggle('is-active', c.dataset.filter === topic); });
      cards.forEach(function (card) {
        var match = !topic || card.dataset.topic === topic;
        card.hidden = !match;
        if (match) shown++;
      });
      // When filtering, the first matching card becomes visually normal; keep featured only for "all"
      if (featured) featured.classList.toggle('card--featured', !topic);
      if (empty) empty.hidden = shown > 0;
    };
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        apply(c.dataset.filter);
        var url = new URL(location.href);
        if (c.dataset.filter) url.searchParams.set('topic', c.dataset.filter); else url.searchParams.delete('topic');
        history.replaceState(null, '', url);
      });
    });
    var initial = new URLSearchParams(location.search).get('topic');
    if (initial) apply(initial);
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
      var done = function () {
        var label = btn.textContent;
        btn.textContent = 'লিংক কপি হয়েছে'; btn.classList.add('is-done');
        setTimeout(function () { btn.textContent = label; btn.classList.remove('is-done'); }, 2000);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(done);
      else { var t = document.createElement('textarea'); t.value = btn.dataset.copy; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done(); }
    });
  });
})();
