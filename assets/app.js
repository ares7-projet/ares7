/* ============================================================
   ARÈS-7 — MOTEUR DE RENDU
   ------------------------------------------------------------
   Lit window.ARES7 (data.js), construit nav + sections, monte
   les composants (components.js), puis branche filtre / recherche
   / scroll-spy. Aucun contenu ici : tout vient du modèle.
   ============================================================ */
(function () {
  'use strict';
  const D = window.ARES7, C = window.ARES7Components;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const hAttr = h => h ? ` data-h="${h}"` : '';

  /* ---------- rendu des blocs ---------- */
  const BLOCK = {
    heading: b => `<h3${hAttr(b.h)}>${b.html}</h3>`,
    prose:   b => `<div class="prose"${hAttr(b.h)}>${b.html.indexOf('<p') === 0 ? b.html : '<p style="margin-bottom:14px">' + b.html + '</p>'}</div>`,
    callout: b => `<div class="callout${b.variant ? ' ' + b.variant : ''}"${hAttr(b.h)}>${b.html}</div>`,
    verdict: b => `<div class="verdict"${hAttr(b.h)}><div class="big">${b.value}</div><div class="vtext">${b.html}</div></div>`,
    chain:   b => `<div class="chain">${b.steps.map((s, i) => (i ? '<span class="arrow">→</span>' : '') + `<span class="step">${s}</span>`).join('')}</div>`,
    embed:   b => `<div class="embed"${hAttr(b.h)}><iframe src="${b.src}" title="${b.title || ''}" loading="lazy" style="width:100%;height:${b.height || 460}px;border:1px solid var(--line);border-radius:12px;background:#060608"></iframe><div style="font-size:12px;color:var(--text-dim);margin-top:6px"><a href="${b.src}" target="_blank" rel="noopener">↗ plein écran</a>${b.caption ? ' · ' + b.caption : ''}</div></div>`,
    list:    b => `<ul class="clean"${hAttr(b.h)}>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`,
    cards:   b => `<div class="grid2">${b.items.map(it =>
                    `<div class="card"${hAttr(it.h)}><h3 style="margin-top:0">${it.title} ${it.badge || ''}</h3>${it.html}</div>`).join('')}</div>`,
    table:   b => {
      const th = `<thead><tr>${b.head.map((h, i) =>
        `<th${b.numLast && i === b.head.length - 1 ? ' style="text-align:right"' : ''}>${h}</th>`).join('')}</tr></thead>`;
      const tb = `<tbody>${b.rows.map(r => `<tr>${r.map((c, i) =>
        `<td${b.numLast && i === r.length - 1 ? ' class="num"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody>`;
      return `<table class="data"${hAttr(b.h)}>${th}${tb}</table>`;
    }
  };
  const MEMO = '<div class="callout" style="border-style:dashed;opacity:.85">🔒 <b>mémo privé</b> — visible seulement en local, non publié</div>';
  const renderBlocks = blocks => (blocks || []).map(b => (b.prive ? MEMO : '') + (BLOCK[b.type] || (() => ''))(b)).join('');

  /* ---------- rendu d'une section ---------- */
  function renderSection(s) {
    if (s.hero) {
      return `<section class="chapter" id="${s.id}" style="border:none;padding-top:0">
        <div class="hero">
          <div class="hero-text">
            <p class="tagline">${s.hero.tagline}</p>
            <h1>${s.hero.h1}</h1>
            <p class="pitch">${s.hero.pitch}</p>
            <p class="creed">${s.hero.creed}</p>
          </div>
          <div class="canvas-wrap"><canvas id="spiral" width="760" height="760" aria-label="géodésique f2 animée"></canvas></div>
        </div>
        ${renderBlocks(s.blocks)}
      </section>`;
    }
    return `<section class="chapter" id="${s.id}">
      <h2><span class="sec-num">${s.num}</span>${s.title}</h2>
      ${s.prive ? MEMO : ''}
      ${s.lead ? `<p class="lead">${s.lead}</p>` : ''}
      ${renderBlocks(s.blocks)}
      ${s.interactive ? `<div data-interactive="${s.interactive}"></div>` : ''}
      ${s.after || ''}
    </section>`;
  }

  /* ---------- construction du DOM ---------- */
  function build() {
    // marque / nav
    $('#brand').innerHTML = `<svg viewBox="0 0 100 100" width="72" height="72" style="display:block;margin:0 0 10px;filter:drop-shadow(0 0 10px rgba(91,157,255,.35))"><line x1="26.8" y1="37.9" x2="30.3" y2="17.8" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.2" y1="61.6" x2="26.8" y2="37.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="49.4" x2="30.2" y2="61.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.6" y1="37.3" x2="49.9" y2="49.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="23.6" x2="69.6" y2="37.3" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.3" y1="17.8" x2="49.9" y2="23.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.8" y1="37.9" x2="49.9" y2="49.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="49.4" x2="49.9" y2="23.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="23.6" x2="26.8" y2="37.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.1" y1="19.4" x2="69.6" y2="37.3" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.7" y1="10.7" x2="73.1" y2="19.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.0" y1="8.0" x2="69.7" y2="10.7" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.3" y1="17.8" x2="50.0" y2="8.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="23.6" x2="73.1" y2="19.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.1" y1="19.4" x2="50.0" y2="8.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.0" y1="8.0" x2="49.9" y2="23.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="8.4" x2="69.7" y2="10.7" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.4" y1="18.5" x2="50.1" y2="8.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.9" y1="12.6" x2="30.4" y2="18.5" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.3" y1="17.8" x2="26.9" y2="12.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.0" y1="8.0" x2="50.1" y2="8.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="8.4" x2="26.9" y2="12.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.9" y1="12.6" x2="50.0" y2="8.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.6" y1="31.4" x2="30.4" y2="18.5" stroke="#8fd0ff" stroke-width="0.7"/><line x1="6.0" y1="50.0" x2="12.6" y2="31.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="31.1" x2="6.0" y2="50.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.3" y1="17.8" x2="12.5" y2="31.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.9" y1="12.6" x2="12.6" y2="31.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.6" y1="31.4" x2="12.5" y2="31.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="31.1" x2="26.9" y2="12.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="56.8" x2="6.0" y2="50.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.2" y1="61.6" x2="12.5" y2="56.8" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="31.1" x2="12.5" y2="56.8" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="56.8" x2="26.8" y2="37.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.8" y1="37.9" x2="12.5" y2="31.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.4" y1="42.6" x2="69.6" y2="37.3" stroke="#8fd0ff" stroke-width="0.7"/><line x1="94.0" y1="50.0" x2="87.4" y2="42.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="26.9" x2="94.0" y2="50.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.7" y1="10.7" x2="87.5" y2="26.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.1" y1="19.4" x2="87.4" y2="42.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.4" y1="42.6" x2="87.5" y2="26.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="26.9" x2="73.1" y2="19.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="75.4" x2="30.2" y2="61.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.6" y1="81.5" x2="49.9" y2="75.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.0" y1="61.1" x2="69.6" y2="81.5" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.6" y1="37.3" x2="73.0" y2="61.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="49.4" x2="49.9" y2="75.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="75.4" x2="73.0" y2="61.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.0" y1="61.1" x2="49.9" y2="49.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="73.1" x2="6.0" y2="50.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.3" y1="89.3" x2="12.5" y2="73.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.8" y1="79.9" x2="30.3" y2="89.3" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.2" y1="61.6" x2="26.8" y2="79.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="56.8" x2="12.5" y2="73.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="73.1" x2="26.8" y2="79.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.8" y1="79.9" x2="12.5" y2="56.8" stroke="#8fd0ff" stroke-width="0.7"/><line x1="27.0" y1="38.9" x2="30.4" y2="18.5" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.4" y1="62.7" x2="27.0" y2="38.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.6" y1="57.4" x2="30.4" y2="62.7" stroke="#8fd0ff" stroke-width="0.7"/><line x1="6.0" y1="50.0" x2="12.6" y2="57.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.6" y1="31.4" x2="27.0" y2="38.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="27.0" y1="38.9" x2="12.6" y2="57.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.6" y1="57.4" x2="12.6" y2="31.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.2" y1="20.1" x2="69.7" y2="10.7" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.8" y1="38.4" x2="73.2" y2="20.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="24.6" x2="69.8" y2="38.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.4" y1="18.5" x2="50.1" y2="24.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="8.4" x2="73.2" y2="20.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.2" y1="20.1" x2="50.1" y2="24.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="24.6" x2="50.1" y2="8.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="68.9" x2="69.7" y2="82.2" stroke="#8fd0ff" stroke-width="0.7"/><line x1="94.0" y1="50.0" x2="87.5" y2="68.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.4" y1="68.6" x2="94.0" y2="50.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.6" y1="81.5" x2="87.4" y2="68.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.1" y1="87.4" x2="69.6" y2="81.5" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.7" y1="82.2" x2="73.1" y2="87.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="68.9" x2="87.4" y2="68.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.4" y1="68.6" x2="73.1" y2="87.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.1" y1="87.4" x2="87.5" y2="68.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="91.6" x2="69.6" y2="81.5" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.3" y1="89.3" x2="49.9" y2="91.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.0" y1="92.0" x2="30.3" y2="89.3" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.7" y1="82.2" x2="50.0" y2="92.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.1" y1="87.4" x2="49.9" y2="91.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="91.6" x2="50.0" y2="92.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.0" y1="92.0" x2="73.1" y2="87.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.9" y1="80.6" x2="30.3" y2="89.3" stroke="#8fd0ff" stroke-width="0.7"/><line x1="30.4" y1="62.7" x2="26.9" y2="80.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="76.4" x2="30.4" y2="62.7" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.7" y1="82.2" x2="50.1" y2="76.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.0" y1="92.0" x2="26.9" y2="80.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.9" y1="80.6" x2="50.1" y2="76.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="76.4" x2="50.0" y2="92.0" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="50.6" x2="30.4" y2="62.7" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.8" y1="38.4" x2="50.1" y2="50.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.2" y1="62.1" x2="69.8" y2="38.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="69.7" y1="82.2" x2="73.2" y2="62.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="76.4" x2="50.1" y2="50.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="50.6" x2="73.2" y2="62.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.2" y1="62.1" x2="50.1" y2="76.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="43.2" x2="69.8" y2="38.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="94.0" y1="50.0" x2="87.5" y2="43.2" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.2" y1="62.1" x2="87.5" y2="43.2" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="43.2" x2="87.5" y2="68.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="68.9" x2="73.2" y2="62.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.4" y1="68.6" x2="87.4" y2="42.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.4" y1="42.6" x2="73.0" y2="61.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.0" y1="61.1" x2="87.4" y2="68.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="91.6" x2="49.9" y2="75.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="49.9" y1="75.4" x2="26.8" y2="79.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.8" y1="79.9" x2="49.9" y2="91.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="26.9" y1="80.6" x2="12.5" y2="73.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.5" y1="73.1" x2="12.6" y2="57.4" stroke="#8fd0ff" stroke-width="0.7"/><line x1="12.6" y1="57.4" x2="26.9" y2="80.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="50.6" x2="27.0" y2="38.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="27.0" y1="38.9" x2="50.1" y2="24.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="50.1" y1="24.6" x2="50.1" y2="50.6" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="43.2" x2="73.2" y2="20.1" stroke="#8fd0ff" stroke-width="0.7"/><line x1="73.2" y1="20.1" x2="87.5" y2="26.9" stroke="#8fd0ff" stroke-width="0.7"/><line x1="87.5" y1="26.9" x2="87.5" y2="43.2" stroke="#8fd0ff" stroke-width="0.7"/></svg><div class="brand"><span class="logo">${D.meta.name.replace('·', '<span class="seven">·</span>')}</span></div>
      <p class="brand-sub">${D.meta.sub}</p>`;
    const navItem = s => `<li><a href="#${s.id}"><span class="nav-num">${s.num}</span>${s.nav}${s.prive ? ' 🔒' : ''}</a></li>`;
    if (D.groupes) {                                   // ordre et sommaire par groupes ; une section non listée va à la fin
      const rang = id => { for (let g = 0; g < D.groupes.length; g++) { const i = D.groupes[g].ids.indexOf(id); if (i >= 0) return g * 100 + i; } return 999; };
      D.sections = D.sections.slice().sort((x, y) => rang(x.id) - rang(y.id));
      $('#nav').innerHTML = D.groupes.map(g => `<li class="nav-groupe">${g.titre}</li>` +
        D.sections.filter(s => g.ids.includes(s.id)).map(navItem).join('')).join('') +
        D.sections.filter(s => rang(s.id) === 999).map(navItem).join('');
    } else $('#nav').innerHTML = D.sections.map(navItem).join('');

    // barre de filtre honnêteté + recherche
    $('#filters').innerHTML = `<span class="fb-label">Honnêteté</span>` +
      D.filters.map(f => `<span class="toggle" data-c="${f.c}" title="${f.title}"><span class="dot"></span>${f.label}</span>`).join('') +
      `<label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><input type="text" id="search" placeholder="Rechercher…" autocomplete="off"></label>`;

    // contenu
    $('#content').innerHTML = D.sections.map(renderSection).join('');

    // mini-sommaire en tête des sections longues (4 sous-titres ou plus)
    $$('#content section.chapter').forEach(sec => {
      const h3 = $$('h3', sec).filter(h => !h.closest('.card'));
      if (h3.length < 4) return;
      h3.forEach((h, i) => { h.id = sec.id + '-' + (i + 1); });
      const nav = document.createElement('nav'); nav.className = 'mini-toc';
      nav.innerHTML = '<b>Dans cette section :</b> ' + h3.map(h => `<a href="#${h.id}">${h.textContent.replace(/[🟢🟡🔵⛔]/gu, '').trim()}</a>`).join(' · ');
      const ancre = $('.lead', sec) || $('h2', sec); ancre.after(nav);
    });

    // composants : spirale (hero) + interactifs déclarés
    if (C) (C.heliosphere || C.spiral)($('#spiral'));
    $$('[data-interactive]').forEach(el => { const fn = C && C[el.dataset.interactive]; if (fn) fn(el); });
  }

  /* ---------- filtre honnêteté ---------- */
  function honestyFilter() {
    $$('.toggle').forEach(t => t.addEventListener('click', () => {
      t.classList.toggle('off');
      document.body.classList.toggle('hide-' + t.dataset.c, t.classList.contains('off'));
    }));
  }

  /* ---------- ergonomie : sommaire mobile + retour en haut ---------- */
  function navigation() {
    const som = document.createElement('button'); som.className = 'fab fab-sommaire'; som.textContent = '☰ Sommaire';
    som.onclick = () => document.body.classList.toggle('sommaire-ouvert');
    const haut = document.createElement('button'); haut.className = 'fab fab-haut'; haut.textContent = '↑'; haut.title = 'Haut de page';
    haut.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.append(som, haut);
    $$('#nav a').forEach(l => l.addEventListener('click', () => document.body.classList.remove('sommaire-ouvert')));
    document.addEventListener('click', e => { if (document.body.classList.contains('sommaire-ouvert') && e.clientX > window.innerWidth * 0.75) document.body.classList.remove('sommaire-ouvert'); });
    window.addEventListener('scroll', () => haut.classList.toggle('visible', window.scrollY > 900), { passive: true });
  }

  /* ---------- scroll-spy ---------- */
  function scrollSpy() {
    const links = $$('#nav a');
    const map = links.map(a => ({ a, sec: $(a.getAttribute('href')) })).filter(x => x.sec);
    if (!('IntersectionObserver' in window) || !map.length) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const hit = map.find(m => m.sec === e.target); if (hit) hit.a.classList.add('active');
    }), { rootMargin: '-40% 0px -55% 0px' });
    map.forEach(m => io.observe(m.sec));
  }

  /* ---------- recherche plein texte (DOM, marche en file://) ---------- */
  function search() {
    const input = $('#search'); if (!input) return;
    const sections = $$('section.chapter');
    let timer;
    const clearMarks = () => $$('mark.hit').forEach(m => m.replaceWith(document.createTextNode(m.textContent)));
    const highlight = (root, q) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: n => {
          if (!n.nodeValue.toLowerCase().includes(q)) return NodeFilter.FILTER_REJECT;
          const p = n.parentElement;
          return (!p || ['SCRIPT', 'STYLE', 'MARK', 'INPUT'].includes(p.tagName)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
      });
      const targets = []; let n; while ((n = walker.nextNode())) targets.push(n);
      targets.forEach(node => {
        const txt = node.nodeValue, low = txt.toLowerCase(), frag = document.createDocumentFragment();
        let i = 0, idx;
        while ((idx = low.indexOf(q, i)) >= 0) {
          if (idx > i) frag.appendChild(document.createTextNode(txt.slice(i, idx)));
          const mk = document.createElement('mark'); mk.className = 'hit'; mk.textContent = txt.slice(idx, idx + q.length);
          frag.appendChild(mk); i = idx + q.length;
        }
        if (i < txt.length) frag.appendChild(document.createTextNode(txt.slice(i)));
        node.parentNode.replaceChild(frag, node);
      });
    };
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = input.value.trim().toLowerCase();
        clearMarks();
        if (q.length < 2) { sections.forEach(s => s.classList.remove('search-dim')); return; }
        sections.forEach(sec => {
          const hit = sec.textContent.toLowerCase().includes(q);
          sec.classList.toggle('search-dim', !hit);
          if (hit) highlight(sec, q);
        });
      }, 160);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    build(); honestyFilter(); scrollSpy(); navigation(); search();
  });
})();
