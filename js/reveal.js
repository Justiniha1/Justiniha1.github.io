/* reveal.js
   Two responsibilities: reveal elements on scroll, and toggle the mobile nav.
   Both degrade cleanly. If this file never loads, all content is visible
   and the nav list renders in the normal document flow. */

(function () {
  'use strict';

  var supportsObserver = 'IntersectionObserver' in window;
  var targets = document.querySelectorAll('[data-reveal]');

  /* ---- Scroll reveal ---- */
  if (!supportsObserver) {
    // The .js class already hid these. Without an observer we can never
    // reveal them on scroll, so reveal everything now rather than leave
    // the page blank.
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    targets.forEach(function (el) {
      var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      if (delay > 0) {
        el.style.setProperty('--reveal-delay', (delay * 90) + 'ms');
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }
}());
