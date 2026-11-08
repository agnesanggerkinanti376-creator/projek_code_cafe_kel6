(function () {
  var box = document.getElementById('pplBox'); if (!box) return;
  var dir = 1, hold = 0, vis = false, last = 0, drag = null, moved = 0;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function pause() { hold = performance.now() + 5000; }
  ['touchstart', 'wheel', 'keydown'].forEach(function (e) { box.addEventListener(e, pause, { passive: true }); });
  box.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; drag = { x: e.clientX, l: box.scrollLeft }; moved = 0; pause(); box.style.cursor = 'grabbing'; });
  window.addEventListener('pointermove', function (e) { if (!drag) return; moved = Math.abs(e.clientX - drag.x); box.scrollLeft = drag.l - (e.clientX - drag.x); pause(); });
  window.addEventListener('pointerup', function () { drag = null; box.style.cursor = ''; });
  Array.prototype.forEach.call(document.querySelectorAll('[data-ppl]'), function (b) {
    b.addEventListener('click', function () { pause(); box.scrollBy({ left: (+b.getAttribute('data-ppl')) * Math.max(320, box.clientWidth * .6), behavior: 'smooth' }); });
  });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { vis = en[0].isIntersecting; }, { threshold: .2 }).observe(box); else vis = true;
  function tick(t) {
    var dt = Math.min(64, t - (last || t)); last = t;
    var max = box.scrollWidth - box.clientWidth;
    if (vis && !reduce && !drag && t > hold && max > 4) {
      box.scrollLeft += dir * 34 * dt / 1000;
      if (box.scrollLeft >= max - 1) dir = -1; else if (box.scrollLeft <= 0) dir = 1;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
