(() => {
'use strict';

const D = PORTFOLIO;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = n => n.toLocaleString('en-US');

const video = $('#bg');
const gate = $('#gate');
const site = $('#site');
const defaultvol = 0.25;
const sections = ['home', 'work', 'skills', 'contact'];

function render() {
  const info = Object.fromEntries(D.info);
  $('#strip').innerHTML = `
    <div><dt>experience</dt><dd>${esc(info.experience)}</dd></div>
    <div><dt>total visits contributed</dt><dd><span id="cn">0</span></dd></div>`;

  $('#nv').innerHTML = sections.map(s => `<a href="#${s}">${s}</a>`).join('');

  Object.entries(D.sections).forEach(([k, v]) => { const el = $('#t-' + k); if (el) el.textContent = v; });

  $('#sl').innerHTML = D.skills.map(g => `
    <div class="sgroup"><h3>${esc(g.group)}</h3><div class="sitems">${g.items.map(s =>
      `<div class="sitem"><b>${esc(s.name)}</b><span>${esc(s.level)}</span></div>`).join('')}</div></div>`).join('');
  $('#also').textContent = D.skillsNote;

  $('#gl').innerHTML = D.games.map(g => {
    const body = `<span class="n">${esc(g.name)}</span><span class="r">${esc(g.role)}${g.inDev ? '<i>in development</i>' : ''}</span>`;
    return g.url
      ? `<li><a class="track" href="${esc(g.url)}" target="_blank" rel="noopener">${body}</a></li>`
      : `<li><div class="track">${body}</div></li>`;
  }).join('');
  $('#wn').textContent = D.workNote;

  $('#ln').innerHTML = D.contact.map(c =>
    `<li><a href="${esc(c.href)}" target="_blank" rel="noopener"><span class="k">${esc(c.key)}</span><span class="v">${esc(c.label)}</span></a></li>`).join('');

  $('#ed').textContent = '© ' + new Date().getFullYear() + ' ' + D.nick;
}

function navi() {
  const links = $$('#nv a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => io.observe(s));
}

async function roproxy() {
  const universes = {};
  const confirmed = new Set();
  let total = 0;
  await Promise.all(D.visitPlaceIds.map(async place => {
    try {
      const r = await fetch(`https://apis.roproxy.com/universes/v1/places/${place}/universe`);
      if (r.ok) {
        const d = await r.json();
        if (d.universeId) universes[d.universeId] = place;
      }
    } catch {}
  }));
  const ids = Object.keys(universes);
  if (!ids.length) return 0;
  try {
    const r = await fetch(`https://games.roproxy.com/v1/games?universeIds=${ids.join(',')}`);
    if (r.ok) (await r.json()).data.forEach(g => { confirmed.add(universes[g.id]); total += g.visits; });
  } catch {}
  if (!confirmed.size) return 0;
  for (const place in D.fallbackPlaceVisits) if (!confirmed.has(+place)) total += D.fallbackPlaceVisits[place];
  return total;
}

async function visits() {
  const num = $('#cn');
  let n = (await roproxy()) || D.fallbackVisits;
  if (reduced) num.textContent = fmt(n);
  else {
    const start = performance.now(), span = 1400;
    await new Promise(done => {
      const step = t => {
        const k = Math.min((t - start) / span, 1);
        num.textContent = fmt(Math.floor(n * (1 - Math.pow(1 - k, 4))));
        if (k < 1) requestAnimationFrame(step); else done();
      };
      requestAnimationFrame(step);
    });
  }
  num.textContent = fmt(n);
  setInterval(async () => {
    const v = await roproxy();
    if (v && v !== n) { n = v; num.textContent = fmt(n); }
  }, 60000);
}

let opened = false;
function openn() {
  if (opened) return;
  opened = true;
  site.removeAttribute('inert');
  gate.classList.add('out');
  gate.setAttribute('aria-hidden', 'true');
}

async function fallbackplay() {
  video.volume = defaultvol;
  video.muted = false;
  try {
    await video.play();
    return !video.paused && !video.muted;
  } catch {
    return false;
  }
}

async function boot() {
  video.addEventListener('error', openn);
  $('#enter').addEventListener('click', async () => {
    await fallbackplay();
    openn();
  });
  const reveal = setTimeout(() => { if (!opened) gate.classList.remove('wait'); }, 3500);
  const ok = await fallbackplay();
  clearTimeout(reveal);
  if (ok) openn();
  else if (!opened) {
    gate.classList.remove('wait');
    $('#enter').focus({ preventScroll: true });
  }
}

render();
navi();
visits();
boot();

})();
