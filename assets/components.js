/* ============================================================
   ARÈS-7 — COMPOSANTS INTERACTIFS (registre)
   ------------------------------------------------------------
   Chaque interactif est enregistré par un id. Le moteur (app.js)
   monte le composant là où une section déclare interactive:'<id>'.
   Ajouter un interactif futur (viewer 3D, mélangeur de lumière,
   circuit 24/60/36) = ajouter une fonction ici + la référencer
   dans data.js. Rien d'autre à toucher.
   ============================================================ */
window.ARES7Components = (function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const fr = (n, dec = 0) => isFinite(n)
    ? n.toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec })
    : '—';
  const sci = (n) => {                         // 1,0e-4 avec report d'arrondi
    if (n === 0) return '0';
    let e = Math.floor(Math.log10(Math.abs(n)));
    let m = Math.round((n / Math.pow(10, e)) * 10) / 10;
    if (Math.abs(m) >= 10) { m /= 10; e += 1; }
    return fr(m, 1) + 'e' + e;
  };

  /* ---------- 1. Géodésique f2 animée (hero) ----------
     12 nœuds φ pentavalents + radiales/intérieures + plasma qui circule. */
  function spiral(cv) {
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const W = cv.width, H = cv.height, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.42;
    const PHI = 12, nodes = [];
    for (let i = 0; i < PHI; i++) nodes.push({ a: (i / PHI) * Math.PI * 2, r: R * (i % 2 ? 0.62 : 1.0) });
    const parts = [];
    for (let i = 0; i < 26; i++) parts.push({ t: i / 26, v: 0.0006 + (i % 7) * 0.0001 });
    let rot = 0;
    (function frame() {
      ctx.clearRect(0, 0, W, H); rot += 0.0016;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.3);
      g.addColorStop(0, 'rgba(91,157,255,0.10)'); g.addColorStop(1, 'rgba(91,157,255,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const pts = nodes.map(n => ({ x: cx + Math.cos(n.a + rot) * n.r, y: cy + Math.sin(n.a + rot) * n.r }));
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(120,175,255,0.16)'; ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i], a = pts[(i + 1) % pts.length], b = pts[(i + 2) % pts.length];
        ctx.moveTo(p.x, p.y); ctx.lineTo(cx, cy);
        ctx.moveTo(p.x, p.y); ctx.lineTo(a.x, a.y);
        ctx.moveTo(p.x, p.y); ctx.lineTo(b.x, b.y);
      }
      ctx.stroke();
      ctx.strokeStyle = 'rgba(120,175,255,0.25)'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
      parts.forEach(pp => {
        pp.t += pp.v; if (pp.t > 1) pp.t -= 1;
        const a = pp.t * Math.PI * 2 + rot;
        ctx.beginPath(); ctx.arc(cx + Math.cos(a) * R, cy + Math.sin(a) * R, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(220,240,255,0.9)'; ctx.fill();
      });
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#8fd0ff';   // pas de halo (vide)
        ctx.fill(); ctx.shadowBlur = 0;
      });
      requestAnimationFrame(frame);
    })();
  }

  /* ---------- 1bis. Héliosphère — spirale de Parker (hero) ----------
     Le vent solaire s'enroule depuis le Soleil, les planètes baignent
     dans le courant. C'est « le milieu que ARÈS-7 traverse ». */
  function heliosphere(cv) {
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, dpr, cx, cy, maxR;
    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth || 360; H = cv.clientHeight || 360;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; cy = H / 2; maxR = Math.min(W, H) * 0.46;
    }
    const P = [], rnd = (i) => (Math.sin(i * 12.9898) * 43758.5453) % 1; // pseudo-alea stable
    let seed = 0;
    function spawn(p, center) {
      const r = center ? (8 + Math.abs(rnd(seed++)) * 30) : (Math.abs(rnd(seed++)) * maxR);
      const a = rnd(seed++) * 6.283;
      p.x = cx + Math.cos(a) * r; p.y = cy + Math.sin(a) * r; p.s = 0.6 + Math.abs(rnd(seed++)) * 0.7;
    }
    function vel(p) {
      const dx = p.x - cx, dy = p.y - cy, r = Math.hypot(dx, dy) || 0.001, th = Math.atan2(dy, dx);
      const vr = p.s + r * 0.0006, vt = Math.min(2.2, 55 / r);
      return [vr * Math.cos(th) - vt * Math.sin(th), vr * Math.sin(th) + vt * Math.cos(th)];
    }
    const planets = [                                   // schéma, pas à l'échelle
      { f: 0.16, a: 0.4, sp: 0.016,  c: '#9a9890', n: 'Mercure' },
      { f: 0.23, a: 2.6, sp: 0.012,  c: '#e3c48a', n: 'Vénus' },
      { f: 0.30, a: 1.2, sp: 0.008,  c: '#5b9dff', n: 'Terre' },
      { f: 0.38, a: 3.0, sp: 0.0055, c: '#D85A30', n: 'Mars' },
      { f: 0.50, a: 5.0, sp: 0.003,  c: '#EF9F27', n: 'Jupiter' },
      { f: 0.61, a: 0.9, sp: 0.0022, c: '#d8c07a', n: 'Saturne' },
      { f: 0.71, a: 4.1, sp: 0.0015, c: '#9fd6e0', n: 'Uranus' },
      { f: 0.81, a: 2.0, sp: 0.0011, c: '#5f7fe0', n: 'Neptune' }
    ];
    function frame() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(133,183,235,0.22)'; ctx.setLineDash([3, 5]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, maxR * 0.96, 0, 6.283); ctx.stroke(); ctx.setLineDash([]);
      for (const p of P) {
        const [vx, vy] = vel(p); p.x += vx; p.y += vy;
        const r = Math.hypot(p.x - cx, p.y - cy), a = Math.min(0.85, 0.3 + (1 - r / maxR) * 0.4);
        ctx.strokeStyle = r < maxR * 0.32 ? 'rgba(250,199,117,' + a + ')' : 'rgba(133,183,235,' + a + ')';
        ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(p.x - vx * 3.5, p.y - vy * 3.5); ctx.lineTo(p.x, p.y); ctx.stroke();
        if (r > maxR * 0.98) spawn(p, true);
      }
      for (const pl of planets) {
        pl.a += pl.sp; const r = maxR * pl.f, px = cx + Math.cos(pl.a) * r, py = cy + Math.sin(pl.a) * r;
        ctx.strokeStyle = 'rgba(180,178,169,0.16)'; ctx.lineWidth = 0.5; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 6.283); ctx.stroke();
        ctx.fillStyle = pl.c; ctx.beginPath(); ctx.arc(px, py, pl.n === 'Jupiter' ? 7 : pl.n === 'Saturne' ? 6 : 4, 0, 6.283); ctx.fill();
        if (pl.n) { ctx.fillStyle = pl.n === 'Mars' ? '#ff9a6a' : '#c7ccdb'; ctx.font = (pl.n === 'Mars' ? 'bold 12px' : '11px') + ' sans-serif'; const ux = Math.cos(pl.a), uy = Math.sin(pl.a); ctx.textAlign = ux >= 0 ? 'left' : 'right'; ctx.textBaseline = 'middle';
          ctx.fillText(pl.n, px + ux * 10, py + uy * 10); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; }
      }
      ctx.fillStyle = '#EF9F27'; ctx.shadowColor = 'rgba(239,159,39,0.85)'; ctx.shadowBlur = 20;
      ctx.beginPath(); ctx.arc(cx, cy, 11, 0, 6.283); ctx.fill(); ctx.shadowBlur = 0;
      requestAnimationFrame(frame);
    }
    size();
    for (let i = 0; i < Math.min(340, Math.floor(W * 0.7)); i++) { const p = {}; spawn(p, false); P.push(p); }
    window.addEventListener('resize', size);
    requestAnimationFrame(frame);
  }

  /* ---------- 2. Simulateur de propulsion ----------
     Deux couches : jet (canon) ⊂ fusion (source DFD, via η).
     Le mur compare la FUSION requise (jet/η) au réacteur. */
  const SIM_HTML = `
    <div class="sim">
      <div class="sim-head"><h3>Plasmoïde → poussée</h3><button class="btn-reset" data-reset>↺ valeurs canoniques</button></div>
      <div class="sim-body">
        <div class="sim-controls">
          <div class="ctrl"><label>Masse plasmoïde mₚ <span class="val" data-o="mp">10 µg</span></label><input type="range" data-r="mp" min="1" max="100" step="1" value="10"><div class="hint">canon : 10 µg</div></div>
          <div class="ctrl"><label>Cadence f <span class="val" data-o="f">10 kHz</span></label><input type="range" data-r="f" min="1" max="50" step="1" value="10"><div class="hint">canon : 10 kHz</div></div>
          <div class="ctrl"><label>Vitesse d'éjection v <span class="val" data-o="v">150 km/s</span></label><input type="range" data-r="v" min="20" max="400" step="5" value="150"><div class="hint">canon : 150 km/s</div></div>
          <div class="ctrl"><label>Masse vaisseau <span class="val" data-o="m">150 t</span></label><input type="range" data-r="m" min="50" max="400" step="5" value="150"></div>
          <div class="ctrl"><label>Duty cycle (moteur allumé) <span class="val" data-o="duty">15 %</span></label><input type="range" data-r="duty" min="5" max="100" step="1" value="15"><div class="hint">fraction du temps où le moteur tire · canon : 15 %</div></div>
          <div class="ctrl"><label>Rendement jet/fusion η <span class="val" data-o="eta">37 %</span></label><input type="range" data-r="eta" min="20" max="60" step="1" value="37"><div class="hint">part de la fusion convertie en jet · 🔵 cible — études DFD publiées ~20–25 %</div></div>
          <div class="ctrl"><label>Puissance de fusion dispo (réacteur) <span class="val" data-o="cap">3,1 MW</span></label><input type="range" data-r="cap" min="0.5" max="12" step="0.1" value="3.1"><div class="hint">🔵 DFD/PFRC repère 2–3 MW · fusion nette ~15–25 % = LE verrou</div></div>
        </div>
        <div class="sim-out">
          <div class="readouts">
            <div class="ro"><div class="ro-k">Débit ṁ</div><div class="ro-v" data-o="oMdot">0,1</div><div class="ro-u">g/s</div></div>
            <div class="ro"><div class="ro-k">Poussée F</div><div class="ro-v" data-o="oF">15</div><div class="ro-u">N</div></div>
            <div class="ro"><div class="ro-k">Isp</div><div class="ro-v" data-o="oIsp">15 300</div><div class="ro-u">s</div></div>
            <div class="ro"><div class="ro-k">Accélération</div><div class="ro-v" data-o="oA">1,0e-4</div><div class="ro-u">m/s²</div></div>
            <div class="ro"><div class="ro-k">Temps combustion</div><div class="ro-v" data-o="oTb">3,2</div><div class="ro-u">ans · Δv=10</div></div>
            <div class="ro"><div class="ro-k">Temps calendaire</div><div class="ro-v" data-o="oTc">21</div><div class="ro-u">ans @ duty</div></div>
            <div class="ro"><div class="ro-k">Conso</div><div class="ro-v" data-o="oConso">473</div><div class="ro-u">kg/an</div></div>
            <div class="ro"><div class="ro-k">Propergol total</div><div class="ro-v" data-o="oFuel">10 000</div><div class="ro-u">kg · Δv=10</div></div>
            <div class="ro"><div class="ro-k">Puissance jet</div><div class="ro-v" data-o="oPjet">1,13</div><div class="ro-u">MW · ½Fv</div></div>
          </div>
          <div class="power-gauge" data-gauge>
            <div class="pg-top"><span>Fusion requise <b data-o="oFus" style="color:var(--text-bright)">3,0</b> MW</span><span>réacteur : <b data-o="oCap2">3,1</b> MW</span></div>
            <div class="pg-bar"><div class="pg-fill" data-fill style="width:60%"></div><div class="pg-cap" data-pgcap style="left:100%"></div></div>
          </div>
          <div class="verdict-line ok" data-vline><span data-vtxt>✓ Dans l'enveloppe du réacteur.</span></div>
        </div>
      </div>
    </div>`;

  function simPropulsion(mount) {
    mount.innerHTML = SIM_HTML;
    const g0 = 9.80665, YEAR = 3.156e7, DV = 10000;
    const R = {}, O = {};
    mount.querySelectorAll('[data-r]').forEach(el => R[el.dataset.r] = el);
    mount.querySelectorAll('[data-o]').forEach(el => O[el.dataset.o] = el);
    const gauge = mount.querySelector('[data-gauge]'), fill = mount.querySelector('[data-fill]'),
          pgcap = mount.querySelector('[data-pgcap]'), vLine = mount.querySelector('[data-vline]'),
          vTxt = mount.querySelector('[data-vtxt]');
    const num = (v, d) => fr(v, d).replace('.', ',');

    function compute() {
      const mp = +R.mp.value * 1e-9, f = +R.f.value * 1e3, v = +R.v.value * 1e3,
            m = +R.m.value * 1e3, duty = +R.duty.value / 100, eta = +R.eta.value / 100,
            cap = +R.cap.value * 1e6;
      const mdot = mp * f, F = mdot * v, Pjet = 0.5 * mdot * v * v, Pfus = Pjet / eta,
            Isp = v / g0, a = F / m, tComb = DV / a, tCal = tComb / duty,
            conso = mdot * duty * YEAR, fuel = mdot * tComb;

      O.mp.textContent = R.mp.value + ' µg'; O.f.textContent = R.f.value + ' kHz';
      O.v.textContent = R.v.value + ' km/s'; O.m.textContent = R.m.value + ' t';
      O.duty.textContent = R.duty.value + ' %'; O.eta.textContent = R.eta.value + ' %';
      O.cap.textContent = num(+R.cap.value, 1) + ' MW';

      O.oMdot.textContent = num(mdot * 1000, mdot * 1000 < 1 ? 3 : 2);
      O.oF.textContent = num(F, F < 10 ? 1 : 0);
      O.oIsp.textContent = fr(Isp, 0);
      O.oA.textContent = sci(a);
      O.oTb.textContent = num(tComb / YEAR, tComb / YEAR < 10 ? 1 : 0);
      O.oTc.textContent = num(tCal / YEAR, tCal / YEAR < 10 ? 1 : 0);
      O.oConso.textContent = fr(conso, 0);
      O.oFuel.textContent = fr(fuel, 0);
      O.oPjet.textContent = num(Pjet / 1e6, 2);
      O.oFus.textContent = num(Pfus / 1e6, 2);
      O.oCap2.textContent = num(cap / 1e6, 1);

      const ratio = Pfus / cap;
      fill.style.width = (Math.min(ratio, 1.6) / 1.6 * 100) + '%';
      pgcap.style.left = (1 / 1.6 * 100) + '%';
      const over = Pfus > cap;
      gauge.classList.toggle('over', over);
      if (over) {
        vLine.className = 'verdict-line over';
        vTxt.textContent = '⛔ Mur : fusion requise ' + num(Pfus / 1e6, 2) + ' MW > réacteur '
          + num(cap / 1e6, 1) + ' MW. Irréaliste tant que la fusion nette n\'est pas démontrée (🔵 15–25 %).';
      } else {
        vLine.className = 'verdict-line ok';
        vTxt.textContent = (ratio > 0.9 ? '⚠ Au bord (marge minime) — fusion ' : '✓ Dans l\'enveloppe du réacteur — fusion ')
          + num(Pfus / 1e6, 2) + ' / ' + num(cap / 1e6, 1) + ' MW. Pour Δv = 10 km/s : ≈ '
          + num(tCal / YEAR, tCal / YEAR < 10 ? 1 : 0) + ' ans calendaire (≈ '
          + num(tComb / YEAR, tComb / YEAR < 10 ? 1 : 0) + ' ans de tir effectif).';
      }
    }
    Object.values(R).forEach(r => r.addEventListener('input', compute));
    mount.querySelector('[data-reset]').addEventListener('click', () => {
      R.mp.value = 10; R.f.value = 10; R.v.value = 150; R.m.value = 150;
      R.duty.value = 15; R.eta.value = 37; R.cap.value = 3.1; compute();
    });
    compute();
  }

  /* ---------- 3. Mélangeur de lumière blanche (raies He I) ----------
     Chaque raie seule = une couleur ; ensemble = une lumière claire et chaude (intensités supposées).
     Réfute en direct les fossiles « arêtes vertes / jaunes ». */
  function mixBlanc(mount) {
    const RAIES = [
      { nm: 587.6, w: 100, lab: '587,6 (jaune)' }, { nm: 667.8, w: 60, lab: '667,8 (rouge)' },
      { nm: 706.5, w: 40, lab: '706,5 (rouge)' },  { nm: 471.3, w: 50, lab: '471,3 (bleue)' },
      { nm: 492.2, w: 40, lab: '492,2 (bleue)' },  { nm: 501.6, w: 50, lab: '501,6 (verte)' }
    ];
    const wl2rgb = w => { let r=0,g=0,b=0;
      if(w>=380&&w<440){r=-(w-440)/60;b=1;} else if(w<490){g=(w-440)/50;b=1;}
      else if(w<510){g=1;b=-(w-510)/20;} else if(w<580){r=(w-510)/70;g=1;}
      else if(w<645){r=1;g=-(w-645)/65;} else if(w<=780){r=1;}
      return [r,g,b]; };
    mount.innerHTML = '<div class="sim"><div class="sim-head"><h3>Mélangeur — les raies de l\'hélium</h3>'
      + '<button class="btn-reset" data-rz>↺ réglage de départ</button></div><div class="sim-body">'
      + '<div class="sim-controls">' + RAIES.map((r,i) =>
        `<div class="ctrl"><label>${r.lab} nm <span class="val" data-v="${i}">${r.w} %</span></label>`
        + `<input type="range" data-r="${i}" min="0" max="100" value="${r.w}"></div>`).join('')
      + '</div><div class="sim-out" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px">'
      + '<div data-sw style="width:170px;height:170px;border-radius:50%;border:1px solid var(--line)"></div>'
      + '<div data-txt style="font-family:var(--mono);font-size:13px;color:var(--text-dim)"></div>'
      + '<div style="font-size:12px;color:var(--text-dim);max-width:40ch;text-align:center">Mets tout à zéro sauf une raie : couleur pure. Le réglage de départ est une <strong>illustration</strong> (intensités supposées) : il donne une lumière claire et chaude, pas un blanc pur. Pour un vrai blanc : couche de luminophore, comme un tube fluorescent.</div>'
      + '</div></div></div>';
    const sliders = Array.from(mount.querySelectorAll('[data-r]'));
    const sw = mount.querySelector('[data-sw]'), txt = mount.querySelector('[data-txt]');
    function calc() {
      let R=0,G=0,B=0,W=0;
      sliders.forEach((s,i) => { const p=+s.value/100; const [r,g,b]=wl2rgb(RAIES[i].nm);
        R+=r*p; G+=g*p; B+=b*p; W+=p;
        mount.querySelector(`[data-v="${i}"]`).textContent = s.value + ' %'; });
      const mx = Math.max(R,G,B,1e-9);
      const rgb = [R,G,B].map(x => Math.round(255*Math.pow(x/mx,0.8)));
      const dim = W>0 ? 1 : 0;
      sw.style.background = `rgb(${rgb.map(x=>x*dim).join(',')})`;
      txt.textContent = 'R/G/B ≈ ' + [R,G,B].map(x=>(x/mx).toFixed(2)).join(' / ');
    }
    sliders.forEach(s => s.addEventListener('input', calc));
    mount.querySelector('[data-rz]').addEventListener('click', () => { sliders.forEach((s,i)=>s.value=RAIES[i].w); calc(); });
    calc();
  }

  return { spiral: spiral, heliosphere: heliosphere, 'sim-propulsion': simPropulsion, 'mix-blanc': mixBlanc };
})();
