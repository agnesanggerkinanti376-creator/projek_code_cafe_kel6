(function () {
  var D = [{"n": "Espresso.exe", "c": "Kopi", "d": "Kopi hitam pekat yang membuat kerja tetap lancar.", "p": "Rp 18.000", "i": "assets/images/gambar-06.jpg", "o": "50% 58%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Espresso.exe."}, {"n": "Java Latte", "c": "Kopi", "d": "Espresso dengan susu steamed.", "p": "Rp 25.000", "i": "assets/images/menu-java-latte.jpg", "o": "50% 45%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Java%20Latte."}, {"n": "Cappuccino Loop", "c": "Kopi", "d": "Espresso dengan foam susu.", "p": "Rp 25.000", "i": "assets/images/menu-cappuccino-loop.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Cappuccino%20Loop."}, {"n": "Green Screen Matcha", "c": "Non-kopi", "d": "Matcha Jepang dengan susu.", "p": "Rp 28.000", "i": "assets/images/menu-green-screen-matcha.jpg", "o": "50% 42%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Green%20Screen%20Matcha."}, {"n": "Croissant Compile", "c": "Pastry", "d": "Croissant butter khas Prancis yang renyah.", "p": "Rp 20.000", "i": "assets/images/menu-croissant-compile.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Croissant%20Compile."}, {"n": "Byte Donut", "c": "Pastry", "d": "Donat lembut bertabur gula.", "p": "Rp 12.000", "i": "assets/images/menu-byte-donut.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Byte%20Donut."}, {"n": "Code Burger", "c": "Makanan", "d": "Burger dengan patty, sayuran, dan saus spesial.", "p": "Rp 25.000", "i": "assets/images/menu-code-burger.jpg", "o": "50% 55%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Code%20Burger."}, {"n": "Root Access Taro", "c": "Non-kopi", "d": "Taro creamy dengan susu segar.", "p": "Rp 26.000", "i": "assets/images/menu-root-access-taro.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Root%20Access%20Taro."}, {"n": "Earl Grey Milk Tea", "c": "Non-kopi", "d": "Teh Earl Grey klasik dengan susu segar.", "p": "Rp 24.000", "i": "assets/images/menu-earl-grey-milk-tea.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Earl%20Grey%20Milk%20Tea."}, {"n": "Cookie Overflow", "c": "Pastry", "d": "Cookie choco chip yang tebal dan lumer.", "p": "Rp 15.000", "i": "assets/images/menu-cookie-overflow.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Cookie%20Overflow."}, {"n": "Cinnamon Loop Danish", "c": "Pastry", "d": "Pastry danish manis dengan rasa kayu manis.", "p": "Rp 22.000", "i": "assets/images/menu-cinnamon-loop-danish.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Cinnamon%20Loop%20Danish."}, {"n": "Debugging Fried Rice", "c": "Makanan", "d": "Nasi goreng rempah dengan telur mata sapi.", "p": "Rp 28.000", "i": "assets/images/menu-debugging-fried-rice.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Debugging%20Fried%20Rice."}, {"n": "Indomie Refactor", "c": "Makanan", "d": "Mi instan favorit dengan sayur, telur, dan cabai.", "p": "Rp 18.000", "i": "assets/images/menu-indomie-refactor.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Indomie%20Refactor."}, {"n": "Chicken Kernel Wings", "c": "Makanan", "d": "Sayap ayam goreng dengan saus BBQ atau pedas.", "p": "Rp 30.000", "i": "assets/images/menu-chicken-kernel-wings.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Chicken%20Kernel%20Wings."}, {"n": "Le Minerale", "c": "Non-kopi", "d": "Air mineral dingin 600 ml.", "p": "Rp 6.000", "i": "assets/images/menu-le-minerale.jpg", "o": "50% 50%", "w": "https://wa.me/6289669159580?text=Halo%20Code%20Caffe%2C%20saya%20mau%20pesan%20Le%20Minerale."}], CATS = ['Kopi', 'Non-kopi', 'Pastry', 'Makanan'], CUP = "<svg viewBox=\"0 0 32 40\" aria-hidden=\"true\"><path d=\"M4 6h24l-3 30H7z\" fill=\"none\" stroke=\"#241A15\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><path d=\"M6 24h20l-1.6 12H7.6z\" fill=\"#241A15\"/><path d=\"M8 11h16\" stroke=\"#241A15\" stroke-width=\"1.6\" stroke-dasharray=\"2 2\"/></svg>";
  var cat = 'Kopi', cur = 0;
  var img = document.getElementById('mnImg'), title = document.getElementById('mnTitle'), tabs = document.getElementById('mnTabs'), list = document.getElementById('mnList');
  var info = document.getElementById('mnInfo'), ib = document.getElementById('mnInfoBtn');
  function items() { return D.filter(function (d) { return d.c === cat; }); }
  function show(d, first) {
    title.textContent = d.n;
    document.getElementById('mnDesc').textContent = d.d;
    document.getElementById('mnPrice').textContent = d.p;
    var mo = document.getElementById('mnOrder'); if (mo) mo.href = d.w;
    img.alt = 'Foto ' + d.n; img.style.objectPosition = d.o;
    if (first) { img.src = d.i; return; }
    img.classList.add('swap');
    var n = new Image(); n.onload = n.onerror = function () { img.src = d.i; requestAnimationFrame(function () { img.classList.remove('swap'); }); }; n.src = d.i;
  }
  function renderList() {
    var it = items(); list.innerHTML = '';
    it.forEach(function (d, i) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'mn-item'; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', i === cur);
      b.innerHTML = CUP + '<span></span><span class="mn-p"></span>'; b.children[1].textContent = d.n; b.children[2].textContent = d.p;
      b.addEventListener('click', function () { cur = i; renderList(); show(d); });
      list.appendChild(b);
    });
  }
  function renderTabs() {
    tabs.innerHTML = '';
    CATS.forEach(function (c) {
      var b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', c === cat); b.textContent = c;
      b.addEventListener('click', function () { cat = c; cur = 0; renderTabs(); renderList(); show(items()[0]); });
      tabs.appendChild(b);
    });
  }
  ib.addEventListener('click', function () { var o = info.hidden; info.hidden = !o; ib.setAttribute('aria-expanded', o); });
  renderTabs(); renderList(); show(items()[0], true);
})();
