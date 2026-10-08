// 의존성 없는 정적 사이트 생성기: node build.mjs  ->  dist/
// ponytail: 페이지가 6개 x 4개 언어라 프레임워크 없이 템플릿 함수로 충분. 관리자 편집 UI가 필요해지면 Next.js/CMS로 이전.
import { mkdirSync, rmSync, writeFileSync, copyFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = 'https://www.urbansoftware.co.kr';
const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'docs');
const LANGS = ['ko', 'en', 'ja', 'zh-cn'];
const PAGES = ['home', 'company', 'business', 'technology', 'projects', 'contact'];
const PATH = { home: '', company: 'company/', business: 'business/', technology: 'technology/', projects: 'projects/', contact: 'contact/' };
const FONT = {
  ko: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css',
  en: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap',
  ja: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700;800&display=swap',
  'zh-cn': 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700;800&display=swap'
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const br = (s) => esc(s).replace(/\n/g, '<br>');
const url = (lang, page) => `${BASE}/${lang}/${PATH[page]}`;
const rel = (page) => (page === 'home' ? './' : PATH[page]); // 언어 폴더 기준 상대 경로
const depth = (page) => (page === 'home' ? '../' : '../../');

const content = {};
for (const l of LANGS) content[l] = (await import(`./content/${l}.mjs`)).default;

/* ---------- 공통 조각 ---------- */
const rows = (items, withTag) => `<div class="rows">${items.map((it, i) => `
  <div class="row reveal"><span class="no">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(it.t)}</h3><p>${esc(it.d)}</p>${withTag && it.tag ? `<span class="tag">${esc(it.tag)}</span>` : ''}</div></div>`).join('')}</div>`;
const cols3 = (items) => `<div class="cols3">${items.map((it) => `<div class="reveal"><h3>${esc(it.t)}</h3><p>${esc(it.d)}</p></div>`).join('')}</div>`;
const defs = (list, cls = 'defs') => `<dl class="${cls}">${list.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
const split = (label, h, body, alt = false) => `<section class="section${alt ? ' alt' : ''}"><div class="wrap"><div class="inner split"><div class="reveal"><p class="label">${esc(label)}</p><h2>${esc(h)}</h2></div><div>${body}</div></div></div></section>`;
const pageHead = (c) => `<div class="page-head"><div class="wrap"><div class="inner"><h1>${esc(c.h1)}</h1><p>${esc(c.lead)}</p></div></div></div>`;
const cta = (t, isHome) => `<section class="cta"><div class="wrap"><div><h2>${esc(t.h)}</h2><p>${esc(t.p)}</p></div><a class="btn" href="${isHome ? 'contact/' : '../contact/'}">${esc(t.btn)}</a></div></section>`;
const note = (s) => `<p class="note">${esc(s)}</p>`;

/* ---------- 페이지 본문 ---------- */
const body = {
  home(t, L) {
    const h = t.home;
    return `
<section class="hero"><div class="wrap"><div class="inner">
  <p class="eyebrow">${esc(h.hero.eyebrow)}</p>
  <h1>${esc(h.hero.h1)}</h1>
  <p class="lead">${esc(h.hero.lead)}</p>
  <div class="actions"><a class="btn" href="contact/">${esc(h.hero.primary)}</a><a class="btn ghost" href="business/">${esc(h.hero.secondary)}</a></div>
</div></div></section>
<div class="facts"><div class="wrap"><div class="inner">${defs(h.facts, '').replace('<dl class="">', '<dl>')}</div></div></div>
<section class="section"><div class="wrap"><div class="inner"><div class="head reveal"><p class="label">${esc(h.intro.label)}</p><h2>${esc(h.intro.h)}</h2></div><div class="prose oneline reveal" style="margin-top:32px">${h.intro.p.map((p) => `<p>${esc(p)}</p>`).join('')}</div></div></div></section>
${split(h.business.label, h.business.h, rows(h.business.items, false), true)}
<section class="section"><div class="wrap"><div class="inner"><div class="head reveal"><p class="label">${esc(h.caps.label)}</p><h2>${esc(h.caps.h)}</h2></div>${cols3(h.caps.items)}</div></div></section>
${split(h.tech.label, h.tech.h, `<div class="prose reveal"><p>${esc(h.tech.p)}</p></div><ul class="rows" style="margin-top:32px">${h.tech.items.map((s) => `<li class="row reveal" style="grid-template-columns:1fr"><span>${esc(s)}</span></li>`).join('')}</ul><p style="margin-top:24px"><a class="btn ghost sm" href="technology/">${esc(h.tech.link)}</a></p>`, true)}
${cta(h.cta, true)}`;
  },
  company(t) {
    const c = t.company;
    return `${pageHead(c)}
${split(c.overview.label, c.overview.h, `<div class="prose reveal">${c.overview.p.map((p) => `<p>${br(p)}</p>`).join('')}</div><div style="margin-top:40px" class="reveal">${defs(c.defs)}</div>`)}
${split(c.history.label, c.history.h, `<ul class="timeline">${c.history.items.map(([d, s]) => `<li><time>${esc(d)}</time><span>${esc(s)}</span></li>`).join('')}</ul>${note(c.note)}`, true)}`;
  },
  business(t) {
    const c = t.business;
    return `${pageHead(c)}
<section class="section"><div class="wrap"><div class="inner">${rows(c.areas, true)}</div></div></section>
<section class="section alt"><div class="wrap"><div class="inner"><div class="head reveal"><p class="label">${esc(c.approach.label)}</p><h2>${esc(c.approach.h)}</h2></div>${cols3(c.approach.items)}${note(c.note)}</div></div></section>
${cta(t.home.cta)}`;
  },
  technology(t) {
    const c = t.technology;
    return `${pageHead(c)}
${split(c.overview.label, c.overview.h, `<div class="prose reveal">${c.overview.p.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`)}
${split(c.expertise.label, c.expertise.h, rows(c.expertise.items, false), true)}
<section class="section"><div class="wrap"><div class="inner"><div class="head reveal"><p class="label">${esc(c.dev.label)}</p><h2>${esc(c.dev.h)}</h2></div>${cols3(c.dev.items)}</div></div></section>
${split(c.quality.label, c.quality.h, `<div class="prose reveal"><p>${esc(c.quality.p)}</p></div>${note(c.quality.note)}`, true)}
${cta(t.home.cta)}`;
  },
  projects(t) {
    const c = t.projects;
    return `${pageHead(c)}
<section class="section"><div class="wrap"><div class="inner"><div class="rows">${c.items.map((it, i) => `
  <div class="row reveal"><span class="no">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(it.t)}</h3><p>${esc(c.labels.client)}: ${esc(it.client)} / ${esc(c.labels.role)}: ${esc(it.role)}</p></div></div>`).join('')}</div>${note(c.note)}</div></div></section>
${cta(t.home.cta)}`;
  },
  contact(t) {
    const c = t.contact, f = c.form;
    const msg = { required: f.required, email: f.emailErr, short: f.short, agree: f.agreeErr, sent: f.sent, lName: f.name, lCompany: f.company, lEmail: f.email, lType: f.type };
    const err = '<p class="errmsg" role="alert"></p>';
    return `${pageHead(c)}
<section class="section"><div class="wrap"><div class="inner split">
  <div class="reveal"><p class="label">${esc(c.info.label)}</p><h2>${esc(c.info.h)}</h2><div style="margin-top:32px">${defs(c.info.defs)}</div></div>
  <div class="reveal"><p class="label">${esc(f.label)}</p><h2 style="margin-bottom:32px">${esc(f.h)}</h2>
  <form id="contactForm" class="form" novalidate data-to="admin@urbansoftware.co.kr" data-msg='${esc(JSON.stringify(msg)).replace(/&quot;/g, '&quot;')}'>
    <div class="field"><label for="f-name">${esc(f.name)} <span class="req">*</span></label><input id="f-name" name="name" autocomplete="name" required>${err}</div>
    <div class="field"><label for="f-company">${esc(f.company)}</label><input id="f-company" name="company" autocomplete="organization"></div>
    <div class="field"><label for="f-email">${esc(f.email)} <span class="req">*</span></label><input id="f-email" name="email" type="email" autocomplete="email" required>${err}</div>
    <div class="field"><label for="f-type">${esc(f.type)} <span class="req">*</span></label><select id="f-type" name="type" required>${f.types.map(([v, s]) => `<option value="${v}">${esc(s)}</option>`).join('')}</select>${err}</div>
    <div class="field"><label for="f-message">${esc(f.message)} <span class="req">*</span></label><textarea id="f-message" name="message" required></textarea>${err}</div>
    <div class="hp" aria-hidden="true"><label>Website <input name="website" tabindex="-1" autocomplete="off"></label></div>
    <div class="check"><input id="f-agree" name="agree" type="checkbox" required><div><label for="f-agree">${esc(f.agree)}</label>${err}</div></div>
    <div><button class="btn" type="submit">${esc(f.submit)}</button></div>
    <p class="status" id="formStatus" role="status" aria-live="polite"></p>
  </form></div>
</div></div></section>`;
  }
};

/* ---------- 레이아웃 ---------- */
function layout(lang, page) {
  const t = content[lang];
  const d = depth(page);
  const c = t[page];
  const title = c.title, desc = c.desc || t.site.desc;
  const canonical = url(lang, page);
  const hreflang = LANGS.map((l) => `<link rel="alternate" hreflang="${content[l].htmlLang}" href="${url(l, page)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${url('ko', page)}">`;
  const ld = { '@context': 'https://schema.org', '@type': 'Organization', name: 'UrbanSoft', alternateName: t.site.name, url: BASE, email: 'admin@urbansoftware.co.kr', foundingDate: '2023-08' };
  const navItems = ['company', 'business', 'technology', 'projects', 'contact'];
  const nav = navItems.map((p) => `<a href="${d === '../' ? '' : '../'}${PATH[p]}"${p === page ? ' aria-current="page"' : ''}>${esc(t.nav[p])}</a>`).join('');
  const home = d === '../' ? './' : '../';
  const langs = LANGS.map((l) => `<li><a href="${d}${l}/${PATH[page]}" hreflang="${content[l].htmlLang}" lang="${content[l].htmlLang}" data-lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${esc(content[l].langName)}</a></li>`).join('');
  const footNav = ['company', 'business', 'technology', 'projects', 'contact'].map((p) => `<a href="${d === '../' ? '' : '../'}${PATH[p]}">${esc(t.nav[p])}</a>`).join('');
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
${hreflang}
<meta property="og:type" content="website">
<meta property="og:site_name" content="URBANSOFT">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${t.og}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="${d}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONT[lang]}">
<link rel="stylesheet" href="${d}assets/site.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.ui.skip)}</a>
<header class="site-header"><div class="wrap bar">
  <a class="brand" href="${home}" aria-label="${esc(t.ui.home)}"><img src="${d}assets/logo.svg" alt="" width="30" height="30">URBANSOFT</a>
  <nav class="nav" id="nav" aria-label="Main">${nav}</nav>
  <div class="tools">
    <details class="lang"><summary aria-label="${esc(t.ui.lang)}">${esc(t.langName)}</summary><ul>${langs}</ul></details>
    <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav">${esc(t.ui.menu)}</button>
  </div>
</div></header>
<main id="main">
${body[page](t)}
</main>
<footer class="site-footer"><div class="wrap"><div class="inner">
  <div class="foot">
    <div><a class="brand" href="${home}"><img src="${d}assets/logo.svg" alt="" width="30" height="30">URBANSOFT</a><p>${esc(t.footer.desc)}</p></div>
    <nav aria-label="Footer">${footNav}</nav>
  </div>
  <div class="legal"><span>${esc(t.footer.rights)}</span><a href="mailto:admin@urbansoftware.co.kr">admin@urbansoftware.co.kr</a></div>
</div></div></footer>
<script src="${d}assets/site.js" defer></script>
</body>
</html>
`;
}

/* ---------- 출력 ---------- */
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'assets'), { recursive: true });
for (const f of readdirSync(join(root, 'assets'))) copyFileSync(join(root, 'assets', f), join(out, 'assets', f));

const urls = [];
for (const lang of LANGS) {
  for (const page of PAGES) {
    const dir = join(out, lang, PATH[page]);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), layout(lang, page));
    urls.push({ lang, page });
  }
}

// 루트: 저장된 언어 > 브라우저 언어 > 한국어
writeFileSync(join(out, 'index.html'), `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>URBANSOFT</title>
<link rel="canonical" href="${BASE}/ko/">
${LANGS.map((l) => `<link rel="alternate" hreflang="${content[l].htmlLang}" href="${BASE}/${l}/">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${BASE}/ko/">
<script>
(function(){var s=null;try{s=localStorage.getItem('lang')}catch(e){}
var n=(navigator.language||'ko').toLowerCase();
var l=s||(n.indexOf('zh')==0?'zh-cn':n.indexOf('ja')==0?'ja':n.indexOf('en')==0?'en':'ko');
if(['ko','en','ja','zh-cn'].indexOf(l)<0)l='ko';location.replace('/'+l+'/');})();
</script>
<noscript><meta http-equiv="refresh" content="0; url=/ko/"></noscript>
</head><body><p><a href="/ko/">한국어</a> · <a href="/en/">English</a> · <a href="/ja/">日本語</a> · <a href="/zh-cn/">简体中文</a></p></body></html>
`);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ lang, page }) => `<url><loc>${url(lang, page)}</loc><lastmod>${today}</lastmod>${LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${content[l].htmlLang}" href="${url(l, page)}"/>`).join('')}</url>`).join('\n')}
</urlset>
`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`);
writeFileSync(join(out, 'CNAME'), 'www.urbansoftware.co.kr\n'); // GitHub Pages 사용자 지정 도메인
copyFileSync(join(root, 'assets', 'logo.svg'), join(out, 'assets', 'favicon.svg'));
console.log(`built ${urls.length} pages + root, sitemap, robots -> docs/`);
