(function () {
  'use strict';
  var d = document;

  /* 모바일 메뉴 */
  var btn = d.getElementById('menuBtn'), nav = d.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* 선택 언어 기억 */
  Array.prototype.forEach.call(d.querySelectorAll('[data-lang]'), function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('lang', a.getAttribute('data-lang')); } catch (e) {}
    });
  });

  /* fade-in (prefers-reduced-motion은 CSS에서 처리) */
  var items = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
  }

  /* 문의 양식: 클라이언트 검증 + mailto 전송 (서버 연결 전 임시 방식) */
  var form = d.getElementById('contactForm');
  if (form) {
    var msg = JSON.parse(form.getAttribute('data-msg'));
    var to = form.getAttribute('data-to');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true, f = form.elements;
      function mark(name, bad, text) {
        var box = f[name].closest('.field') || f[name].closest('.check');
        var out = box.querySelector('.errmsg');
        box.classList.toggle('err', bad);
        if (out) out.textContent = bad ? text : '';
        if (bad) ok = false;
      }
      mark('name', !f.name.value.trim(), msg.required);
      mark('email', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim()), msg.email);
      mark('type', !f.type.value, msg.required);
      mark('message', f.message.value.trim().length < 10, msg.short);
      mark('agree', !f.agree.checked, msg.agree);
      if (f.website.value) return; /* 스팸 방지용 숨김 필드 */
      if (!ok) { form.querySelector('.err input,.err select,.err textarea').focus(); return; }
      var body = [
        msg.lName + ': ' + f.name.value.trim(),
        msg.lCompany + ': ' + f.company.value.trim(),
        msg.lEmail + ': ' + f.email.value.trim(),
        msg.lType + ': ' + f.type.options[f.type.selectedIndex].text,
        '', f.message.value.trim()
      ].join('\n');
      location.href = 'mailto:' + to + '?subject=' + encodeURIComponent('[' + f.type.options[f.type.selectedIndex].text + '] ' + f.name.value.trim()) + '&body=' + encodeURIComponent(body);
      d.getElementById('formStatus').textContent = msg.sent;
    });
  }
})();
