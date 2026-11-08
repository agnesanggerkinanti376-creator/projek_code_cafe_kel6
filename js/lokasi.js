(function () {
  var OUTLETS = [
    { id: "siguntang", city: "Palembang", name: "Code Caffe Bukit Siguntang", address: "Jl. Bukit Siguntang No. 6, Palembang",
      hours: "Senin\u2013Minggu, 08.00\u201322.00", open: 8, close: 22,
      services: ["Makan di tempat", "Ambil sendiri", "Pesan lewat WhatsApp"] }
  ];
  var selLoc = document.getElementById("fLoc"), selSvc = document.getElementById("fSvc"), list = document.getElementById("locList");
  if (!selLoc || !selSvc || !list) return;
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function fill(sel, first, values) {
    sel.innerHTML = '<option value="">' + first + '</option>' + values.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join("");
  }
  fill(selLoc, "Semua lokasi", uniq(OUTLETS.map(function (o) { return o.city; })));
  fill(selSvc, "Semua layanan", uniq([].concat.apply([], OUTLETS.map(function (o) { return o.services; }))));

  function nowWib() {
    try {
      var p = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
      var h = 0, m = 0;
      p.forEach(function (x) { if (x.type === "hour") h = parseInt(x.value, 10) % 24; if (x.type === "minute") m = parseInt(x.value, 10); });
      return h * 60 + m;
    } catch (e) { var d = new Date(); return d.getHours() * 60 + d.getMinutes(); }
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function card(o) {
    var t = nowWib(), isOpen = t >= o.open * 60 && t < o.close * 60;
    var status = isOpen ? "Buka sekarang, tutup " + pad(o.close) + ".00" : "Tutup, buka " + pad(o.open) + ".00";
    var map = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(o.name + ", " + o.address);
    var wa = "https://wa.me/6289669159580?text=" + encodeURIComponent("Halo Code Caffe, saya mau tanya soal " + o.name + ".");
    return '<article class="loc-card"><h3>' + esc(o.name) + '</h3><p>' + esc(o.address) + '</p>' +
      '<p class="open-now"><span class="dot' + (isOpen ? "" : " closed") + '" aria-hidden="true"></span>' + esc(status) + '</p>' +
      '<p>' + esc(o.hours) + '</p><ul>' + o.services.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + '</ul>' +
      '<div class="acts"><a class="btn" href="' + map + '" target="_blank" rel="noopener">Petunjuk arah</a>' +
      '<a class="btn ghost" href="' + wa + '" target="_blank" rel="noopener">Chat WhatsApp</a></div></article>';
  }
  function render() {
    var c = selLoc.value, s = selSvc.value;
    var rows = OUTLETS.filter(function (o) { return (!c || o.city === c) && (!s || o.services.indexOf(s) > -1); });
    list.innerHTML = rows.length ? rows.map(card).join("") : '<p class="loc-empty">// belum ada outlet untuk pilihan ini</p>';
  }
  selLoc.addEventListener("change", render);
  selSvc.addEventListener("change", render);
  render();
})();
