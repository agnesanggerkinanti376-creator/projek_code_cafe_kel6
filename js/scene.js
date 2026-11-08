(function () {
  var scene = document.getElementById("scene");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pos = 0, dir = 1, pausedUntil = 0, last = performance.now(), dragging = false, moved = false, dx0 = 0, sl0 = 0;
  function pauseCam(ms) { pausedUntil = performance.now() + ms; }

  /* Camera: slow pan left and right, pauses while the visitor drags or scrolls */
  ["touchstart", "wheel", "keydown", "focusin"].forEach(function (ev) {
    scene.addEventListener(ev, function () { pauseCam(5000); }, { passive: true });
  });
  scene.addEventListener("scroll", function () { if (performance.now() < pausedUntil) pos = scene.scrollLeft; });
  scene.addEventListener("pointerdown", function (e) {
    if (e.pointerType !== "mouse") return;
    dragging = true; moved = false; dx0 = e.clientX; sl0 = scene.scrollLeft; pauseCam(5000);
  });
  window.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var d = e.clientX - dx0;
    if (Math.abs(d) > 5) moved = true;
    scene.scrollLeft = sl0 - d; pauseCam(5000);
  });
  window.addEventListener("pointerup", function () { dragging = false; });
  scene.addEventListener("click", function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  if (!reduceMotion) {
    (function frame(now) {
      var dt = Math.min(64, now - last) / 1000; last = now;
      if (!document.hidden && now >= pausedUntil && !dragging) {
        var max = scene.scrollWidth - scene.clientWidth;
        if (max > 0) {
          pos += dir * 48 * dt;
          if (pos >= max) { pos = max; dir = -1; }
          if (pos <= 0) { pos = 0; dir = 1; }
          scene.scrollLeft = pos;
        }
      }
      requestAnimationFrame(frame);
    })(last);
  }

  /* "Lihat Menu": back to the menu boards at the left of the scene */
  Array.prototype.forEach.call(document.querySelectorAll("[data-pan]"), function (el) {
    el.addEventListener("click", function () {
      pauseCam(9000);
      try { scene.scrollTo({ left: Number(el.getAttribute("data-pan")) || 0, behavior: "smooth" }); } catch (e) { scene.scrollLeft = 0; }
    });
  });

  /* Barista and grinder */
  var SAYS = ["Halo! Mau ngopi apa hari ini?", "Ngoding lancar, kopi menyala!", "Espresso.exe paling pekat.", "Buka setiap hari 08.00 sampai 22.00.", "Where ideas get brewed."];
  var sayIdx = 0, bubble = document.getElementById("bubble"), bubbleText = document.getElementById("bubbleText");
  function say() {
    sayIdx = (sayIdx + 1) % SAYS.length;
    bubbleText.textContent = SAYS[sayIdx];
    bubble.classList.remove("bubble"); void bubble.getBoundingClientRect(); bubble.classList.add("bubble");
  }
  function onKey(fn) { return function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } }; }
  var barista = document.getElementById("barista");
  barista.addEventListener("click", say);
  barista.addEventListener("keydown", onKey(say));
  var grinder = document.getElementById("grinder");
  function grind() { grinder.classList.remove("shake"); void grinder.getBoundingClientRect(); grinder.classList.add("shake"); }
  grinder.addEventListener("click", grind);
  grinder.addEventListener("keydown", onKey(grind));
})();
