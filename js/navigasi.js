(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('header.bar nav a'));
  var nav = document.querySelector('header.bar nav');
  function setOn(a) {
    links.forEach(function (l) { l.classList.toggle('on', l === a); });
    if (a && nav && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
  }
  links.forEach(function (a) { a.addEventListener('click', function () { setOn(a); lock = Date.now() + 900; }); });
  var lock = 0, ticking = false;
  function spy() {
    ticking = false; if (Date.now() < lock) return;
    var cur = links[0], y = 140;
    links.forEach(function (l) {
      var id = (l.getAttribute('href') || '').slice(1), el = id && id !== 'atas' ? document.getElementById(id) : null;
      if (el && el.getBoundingClientRect().top <= y) cur = l;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = links[links.length - 1];
    setOn(cur);
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  spy();
  var tr = document.getElementById('galTrack'); if (!tr) return;
  var drag = null, moved = 0;
  tr.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; drag = { x: e.clientX, l: tr.scrollLeft }; moved = 0; tr.style.cursor = 'grabbing'; tr.style.scrollSnapType = 'none'; });
  window.addEventListener('pointermove', function (e) { if (!drag) return; moved = Math.abs(e.clientX - drag.x); tr.scrollLeft = drag.l - (e.clientX - drag.x); });
  window.addEventListener('pointerup', function () { if (!drag) return; drag = null; tr.style.cursor = ''; tr.style.scrollSnapType = ''; });
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hold = 0, vis = false, hover = false;
  function pause(ms) { hold = Date.now() + (ms || 7000); }
  ['touchstart', 'wheel', 'keydown', 'pointerdown'].forEach(function (e) { tr.addEventListener(e, function () { pause(); }, { passive: true }); });
  tr.addEventListener('mouseenter', function () { hover = true; }); tr.addEventListener('mouseleave', function () { hover = false; pause(2000); });
  tr.addEventListener('scroll', function () { if (!auto) pause(); }, { passive: true });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { vis = en[0].isIntersecting; }, { threshold: .4 }).observe(tr); else vis = true;
  var auto = false;
  setInterval(function () {
    if (reduce || !vis || hover || drag || Date.now() < hold) return;
    var w = tr.clientWidth + 16, i = Math.round(tr.scrollLeft / w), n = tr.querySelectorAll('.shot').length;
    auto = true; tr.scrollTo({ left: (i + 1 >= n ? 0 : i + 1) * w, behavior: 'smooth' });
    setTimeout(function () { auto = false; }, 900);
  }, 4000);
})();
