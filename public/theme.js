(function () {
  var KEY = 'wazotek-theme';

  function preferDark() {
    var stored = localStorage.getItem(KEY);
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply(dark) {
    document.documentElement.classList.toggle('dark', dark);
  }

  apply(preferDark());

  function bindToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn || btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', function () {
      var nextDark = !document.documentElement.classList.contains('dark');
      apply(nextDark);
      localStorage.setItem(KEY, nextDark ? 'dark' : 'light');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindToggle);
  } else {
    bindToggle();
  }
})();
