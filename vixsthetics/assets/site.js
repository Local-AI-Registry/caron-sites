/* Vixsthetics preview interactions. No libraries. */
(function () {
  var d = document, root = d.documentElement, body = d.body;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header shadow and floating book pill */
  function onScroll() {
    var y = window.scrollY;
    body.classList.toggle('scrolled', y > 20);
    body.classList.toggle('show-float', y > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Mobile menu */
  var mb = d.querySelector('.menu-btn');
  if (mb) mb.addEventListener('click', function () {
    var open = body.classList.toggle('menu-open');
    mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    var mm = d.getElementById('mobile-menu'); if (mm) mm.inert = !open;
  });
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) mb.click();
  });

  /* Reveal on scroll */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in', 'in-view'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  d.querySelectorAll('.reveal, .vcta').forEach(function (el) { io ? io.observe(el) : el.classList.add('in', 'in-view'); });

  /* Hero crossfade with slow zoom */
  var slides = d.querySelectorAll('.hero-slides img');
  if (slides.length > 1 && !reduce) {
    var si = 0;
    setInterval(function () {
      slides[si].classList.remove('on');
      si = (si + 1) % slides.length;
      slides[si].classList.add('on');
    }, 6500);
  }

  /* Treatment wheel */
  d.querySelectorAll('.wheel').forEach(function (w) {
    var ul = w.querySelector('ul'), items = ul.querySelectorAll('li'), i = 0;
    function set(n) {
      items.forEach(function (li, k) { li.classList.toggle('on', k === n); });
      var it = items[n];
      ul.style.transform = 'translateY(' + (-(it.offsetTop + it.offsetHeight / 2)) + 'px)';
    }
    window.addEventListener('resize', function () { set(i); });
    set(0);
    if (!reduce) setInterval(function () { i = (i + 1) % items.length; set(i); }, 2200);
  });

  /* Rotating line */
  d.querySelectorAll('.rotator').forEach(function (r) {
    var s = r.querySelectorAll('span'), i = 0;
    s[0].classList.add('on');
    if (reduce || s.length < 2) return;
    setInterval(function () {
      var cur = s[i]; cur.classList.remove('on'); cur.classList.add('out');
      setTimeout(function () { cur.classList.remove('out'); }, 700);
      i = (i + 1) % s.length; s[i].classList.add('on');
    }, 2800);
  });

  /* Quote carousel */
  d.querySelectorAll('.quotes').forEach(function (q) {
    var t = q.querySelector('.qtrack'), s = q.querySelectorAll('.qslide'), i = 0, timer;
    function go(n) {
      i = (n + s.length) % s.length;
      t.style.transform = 'translateX(' + (-100 * i) + '%)';
      s.forEach(function (el, k) { el.classList.toggle('on', k === i); el.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
    }
    q.querySelector('.qprev').addEventListener('click', function () { go(i - 1); reset(); });
    q.querySelector('.qnext').addEventListener('click', function () { go(i + 1); reset(); });
    function reset() { clearInterval(timer); if (!reduce) timer = setInterval(function () { go(i + 1); }, 6000); }
    go(0); reset();
  });

  /* Tabs */
  d.querySelectorAll('[role="tablist"]').forEach(function (tl) {
    var tabs = tl.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab, k) {
      tab.addEventListener('click', function () { select(k); });
      tab.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); select((k + 1) % tabs.length, true); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); select((k - 1 + tabs.length) % tabs.length, true); }
      });
    });
    function select(n, focus) {
      tabs.forEach(function (t, k) {
        var on = k === n;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        d.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tabs[n].focus();
      var bg = tl.closest('.tabs') && tl.closest('.tabs').querySelector(':scope > img');
      var src = tabs[n].getAttribute('data-img');
      if (bg && src) bg.src = src;
    }
  });

  /* Video modal (placeholder until the practice shoot) */
  var modal = d.getElementById('video-modal');
  d.querySelectorAll('[data-video]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (!modal) return;
      modal.querySelector('.vt').textContent = b.getAttribute('data-video');
      modal.querySelector('.sum').textContent = b.getAttribute('data-summary') || '';
      modal.showModal();
    });
  });
  if (modal) {
    modal.querySelector('.close').addEventListener('click', function () { modal.close(); });
    modal.addEventListener('click', function (e) { if (e.target === modal) modal.close(); });
  }

  /* AI referral capture: remember which AI assistant sent the visitor */
  try {
    var ref = (d.referrer || '').toLowerCase(), src = '';
    var m = location.search.match(/[?&]utm_source=([^&]+)/);
    var hay = ref + ' ' + (m ? decodeURIComponent(m[1]).toLowerCase() : '');
    [['chatgpt', 'ChatGPT'], ['openai', 'ChatGPT'], ['perplexity', 'Perplexity'], ['gemini', 'Gemini'], ['copilot', 'Copilot'], ['bing.com/chat', 'Copilot'], ['claude', 'Claude'], ['meta.ai', 'Meta AI'], ['grok', 'Grok']]
      .forEach(function (p) { if (!src && hay.indexOf(p[0]) > -1) src = p[1]; });
    if (src) sessionStorage.setItem('ai_source', src);
    var saved = sessionStorage.getItem('ai_source');
    if (saved) d.querySelectorAll('input[name="ai_source"]').forEach(function (i) { i.value = saved; });
  } catch (e) {}

  /* Preview forms: show thank-you, send nothing */
  d.querySelectorAll('form.f').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.classList.add('sent');
      var t = f.querySelector('.thanks'); if (t) { t.setAttribute('tabindex', '-1'); t.focus(); }
    });
  });

  var yr = d.querySelectorAll('[data-year]'); yr.forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
