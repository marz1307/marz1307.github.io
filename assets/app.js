// theme toggle (persisted) + scroll reveal
// Note: initial data-theme is set by an inline <head> script before paint to avoid flash.
// This module handles toggle interaction, label/aria sync, and scroll-reveal.
(function () {
  const root = document.documentElement;

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_) { /* private mode etc. */ }
  }

  // Ensure data-theme exists even if the inline bootstrap was stripped or failed.
  if (!root.getAttribute('data-theme')) {
    const stored = safeGet('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', stored || (prefersDark ? 'dark' : 'light'));
  }

  function syncToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const t = root.getAttribute('data-theme');
    const isDark = t === 'dark';
    btn.textContent = isDark ? 'LIGHT' : 'DARK';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  document.addEventListener('DOMContentLoaded', () => {
    syncToggle();
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const cur = root.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        safeSet('theme', next);
        syncToggle();
      });
    }

    // scroll reveal
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 60);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  });
})();
