(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  document.querySelectorAll('.dropdown').forEach(function (dd) {
    var btn = dd.querySelector('.drop-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      document.querySelectorAll('.dropdown.open').forEach(function (other) {
        if (other !== dd) other.classList.remove('open');
      });
      dd.classList.toggle('open');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown.open').forEach(function (dd) {
      dd.classList.remove('open');
    });
  });

  // Hash-based views: sections tagged data-view="<slug>" are swapped in when
  // location.hash matches; anything else falls back to the overview section.
  function closeMenus() {
    document.querySelectorAll('.dropdown.open').forEach(function (dd) {
      dd.classList.remove('open');
    });
    if (nav) nav.classList.remove('open');
  }

  function showView() {
    var views = document.querySelectorAll('[data-view]');
    if (!views.length) return;
    var slug = location.hash.replace('#', '');
    var match = null;
    views.forEach(function (v) {
      if (v.getAttribute('data-view') === slug) match = v;
    });
    views.forEach(function (v) {
      v.hidden = match ? v !== match : v.getAttribute('data-view') !== 'overview';
    });
    closeMenus();
    // Only force the scroll position for view changes; plain anchors (e.g.
    // #contact) keep native scroll behavior.
    if (match || !slug) window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', showView);
  showView();
})();
