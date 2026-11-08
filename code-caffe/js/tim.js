(function () {
  var ps = Array.prototype.slice.call(document.querySelectorAll('.pp'));
  var cw = document.getElementById('crowdWrap'); if (cw) cw.scrollLeft = (cw.scrollWidth - cw.clientWidth) * .75;
  ps.forEach(function (p) {
    p.addEventListener('click', function () {
      var on = !p.classList.contains('on');
      ps.forEach(function (q) { q.classList.remove('on'); q.setAttribute('aria-pressed', 'false'); });
      if (on) { p.classList.add('on'); p.setAttribute('aria-pressed', 'true'); }
    });
  });
})();
