const TOT = 8694811544; 

(() => {
'use strict';

const C = {
  host: 'fillesh@roblox',
  name: 'FILLESH',
  nick: 'fillesh',
  roles: [
    'Full-Stack Scripter',
    'Roblox Developer',
    'SCRIPTING / UI / SFX / ANIM'
  ],
  lead: 'Full-stack scripter who has contributed to over 8.5B+ roblox visits.',

  about: [
    "Hey, I'm Fillesh. I've been scripting on Roblox for 6 years. I'm a full-stack scripter and I've contributed to over 8.5B+ visits.",
    "Besides scripting I also do SFX, animation and UI. I'm getting into VFX as well, but it's pretty low right now.",
    "Outside Roblox I write Python, C#, C, HTML, CSS, JavaScript and Java. Python, C# and HTML are my strongest.",
    "Right now I'm focused on my own Dishonored Framework, plus Anime Divers and FUT. (Which are games from a well known studio)",
    "I also DO invest in Roblox games; however, I stopped investing in games this year because I had already made too many investments."
  ],

  info: [
    ['name', 'Fillesh'],
    ['aspect', 'Full-Stack Scripter'],
    ['experience', '6 years'],
  ],

  sk: [
    { n: 'Lua(u)', lv: 'Expert',                   p: 96 },
    { n: 'Python',           lv: 'Advanced to Proficient',   p: 93 },
    { n: 'C#',               lv: 'Advanced', p: 80 },
    { n: 'HTML',             lv: 'Intermediate to Advanced',                 p: 70 },
    { n: 'CSS',              lv: 'Intermediate',             p: 55 },
    { n: 'JavaScript',       lv: 'Intermediate',             p: 55 },
    { n: 'C',                lv: 'Novice to Intermediate',   p: 38 },
    { n: 'Java',             lv: 'Novice',                   p: 25 },
    { n: 'SFX (Roblox)',             lv: 'Intermediate to Advanced',                   p: 72 },
    { n: 'UI REDESIGN (Roblox)',             lv: 'Intermediate',                   p: 57 },
    { n: 'Animating (Roblox)',             lv: 'Novice to Intermediate',                   p: 42 },
    { n: 'VFX (Roblox)',             lv: 'Beginner',                   p: 13 }
  ],

  also: '',

  now: [
    { d: 'own project', t: 'Dishonored Framework', at: 'personal',       x: 'My own project. Currently focused on it.' },
        { d: 'focused on',       t: 'FUT',                  at: 'Lead Developer / Director',      x: 'Currently focused on it alongside Anime Divers.', u: 'https://www.roblox.com/games/88033955914813/FUT' },
    { d: 'focused on',       t: 'Anime Divers',         at: 'Lead Developer / Director', x: 'Currently in development.' }
  ],

  g: [
    { n: 'Jujutsu Shenanigans',   r: 'Contributor',    u: 'https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans' },
    { n: 'Azure Latch',           r: 'Contributor',    u: 'https://www.roblox.com/games/94647229517154/Azure-Latch' },
    { n: 'FUT',                   r: 'Lead Developer',      u: 'https://www.roblox.com/games/88033955914813/FUT' },
    { n: 'Devil Hunter',          r: 'Contributor',    u: 'https://www.roblox.com/games/131079272918660/Devil-Hunter' },
    { n: 'Locked 2',              r: 'Developer',      u: 'https://www.roblox.com/games/109883052223750/LOCKED-2' },
    { n: 'Blue Lock Skibidi',     r: 'Developer', u: 'https://www.roblox.com/games/77021749781226/Blue-Lock-Skibidi' },
    { n: 'Spiked',                r: 'Contributor',    u: 'https://www.roblox.com/games/17435076424/SPIKED' },
    { n: 'Footbolt',              r: 'Contributor',    u: 'https://www.roblox.com/games/98484885893001/Foot-Bolt' },
    { n: 'Heroes World',          r: 'Lead Developer', u: 'https://www.roblox.com/games/4934471106/Heroes-World'},
    { n: 'Shut Sapphire',         r: 'Co-Owner',       u: 'https://www.roblox.com/games/129035895655249/Shut-Sapphire' },
    { n: 'KAT X',                 r: 'Developer',      u: 'https://www.roblox.com/games/95491140879721/KAT-X' },
    { n: 'Dragon Blox Ultimate',  r: 'Investor',       u: 'https://www.roblox.com/games/3311165597/Dragon-Blox-Ultimate' },
    { n: 'Anime Divers',          r: 'Lead Developer', d: 1 },
    { n: 'Flop N Fight',          r: 'Investor',       d: 1 },
    { n: 'Uma Magicians',         r: 'Contributor',    d: 1 },
    { n: 'Okenku',                r: 'Tester',         d: 1 },
    { n: 'Justice Battlegrounds', r: 'Developer',      d: 1 },
    { n: 'Project Genius',       r: 'Developer',      d: 1 },
    { n: 'VB:RO',              r: 'Contributor',      d: 1 },
    { n: 'Prodigy',               r: 'Tester',         d: 1 },
    { n: 'Apex Strikers',               r: 'Tester',         d: 1 }
  ],

  ct: [
    { k: 'roblox',  label: 'filleshh',        href: 'https://www.roblox.com/users/1684644288/profile' },
    { k: 'youtube', label: '/fillesh',                   href: 'https://www.youtube.com/@fillesh' },
    { k: 'discord', label: 'Fillesh',       href: 'https://discord.com/users/876476368748154960' },
    { k: 'medal',   label: '/Fillesh',                 href: 'https://medal.tv/u/Fillesh' }
  ],

  q: [
    "Hi im fillesh",
    '8.5B+ visits and counting',
    'Can i get free % of your game',
    'workspace:Destroy() oo im a genius',
    'I feel like mr robot',
    'Devex rates are horrible',
    'Roblox when am i getting a rdc invite',
    'Oh dont forget to follow my roblox',
    'They call me Terry Davis reincarnation'
  ]
};

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sl = ms => new Promise(r => setTimeout(r, ms));
const rd = matchMedia('(prefers-reduced-motion: reduce)').matches;
const es = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fm = n => n.toLocaleString('en-US');
const ini = n => { const w = n.split(/\s+/); return (w.length > 1 ? w[0][0] + w[1][0] : n.slice(0, 2)).toUpperCase(); };
const slug = s => s.toLowerCase().replace(/\s+/g, '-');

async function ty(el, t, o = {}) {
  const { sp = 30, j = 24, cr = true, keep = false, dl = 0, tick, ab } = o;
  el.classList.remove('pending');
  el.style.visibility = 'visible';
  if (rd) { el.textContent = t; return; }

  el.textContent = '';
  const v = document.createElement('span');
  const c = document.createElement('span'); c.className = 'caret';
  const g = document.createElement('span'); g.className = 'ghost'; g.textContent = t;
  el.append(v);
  if (cr) el.append(c);
  el.append(g);

  if (dl) await sl(dl);

  for (let i = 0; i < t.length; i++) {
    if (ab && ab()) { v.textContent = t; break; }
    v.textContent = t.slice(0, i + 1);
    g.textContent = t.slice(i + 1);
    if (tick) tick();
    const ch = t[i];
    let d = sp + Math.random() * j;
    if (',.;:'.includes(ch)) d += 110;
    if (ch === '\n') d += 200;
    await sl(d);
  }
  g.remove();
  if (!keep) c.remove();
}

async function tg(root) {
  for (const el of $$('[data-t]', root)) {
    const f = el.classList.contains('bd');
    await ty(el, el.dataset.t, { sp: f ? 14 : 34, j: f ? 14 : 30 });
    await sl(f ? 160 : 260);
  }
}

async function cy(el, arr, o = {}) {
  const { type = 70, erase = 32, hold = 1800 } = o;
  if (rd) { el.textContent = arr[0]; return; }
  let i = 0;
  while (true) {
    const t = arr[i++ % arr.length];
    for (let c = 1; c <= t.length; c++) { el.textContent = t.slice(0, c); await sl(type + Math.random() * 45); }
    await sl(hold);
    for (let c = t.length - 1; c >= 0; c--) { el.textContent = t.slice(0, c); await sl(erase); }
    await sl(320);
  }
}

function scr(el) {
  const o = el.dataset.orig || (el.dataset.orig = el.textContent);
  const ch = '!<>-_\\/[]{}=+*^?#01';
  let f = 0; const ld = 7, tot = o.length + ld;
  clearInterval(el._s);
  el._s = setInterval(() => {
    el.textContent = [...o].map((c, i) => (i < f - ld || c === ' ') ? c : ch[Math.random() * ch.length | 0]).join('');
    if (++f > tot) { clearInterval(el._s); el.textContent = o; }
  }, 28);
}

function bld() {
  const ps = C.host + ':~$';
  $('#bp').textContent = ps;
  $('#hp').textContent = ps;
  $('#tp').textContent = ps;
  $$('.ps').forEach(e => e.textContent = ps);

  const secs = ['home', 'about', 'skills', 'priority', 'work', 'contact'];
  $('#nv').innerHTML = secs.map(s => `<a href="#${s}">./${s}</a>`).join('');

  const nm = $('#name');
  nm.textContent = C.name;
  nm.dataset.text = C.name;
  $('#lead').dataset.t = C.lead;
  $('#lead').textContent = C.lead;

  $('#al').innerHTML = C.about.map(t =>
    `<p><span class="ps1">&gt;</span><span class="bd" data-t="${es(t)}"></span></p>`).join('');
  $('#il').innerHTML = C.info.map(([k, v]) => `<dt>${es(k)}</dt><dd>${es(v)}</dd>`).join('');

  $('#sl').innerHTML = C.sk.map(s =>
    `<div class="skill"><div><span class="sn">${es(s.n)}</span><span class="lv">${es(s.lv)}</span></div><span class="bar" data-p="${s.p}"></span></div>`).join('');
  $('#also').textContent = C.also;
  rb(0);

  $('#fl').innerHTML = C.now.map((l, i) => `
    <div class="log reveal" style="--d:${i * .1}s">
      <time>[${es(l.d)}]</time>
      <div><h3>${l.u ? `<a href="${es(l.u)}" target="_blank" rel="noopener">${es(l.t)}</a>` : es(l.t)} <em>@ ${es(l.at)}</em></h3><p>${es(l.x)}</p></div>
    </div>`).join('');

  $('#gl').innerHTML = C.g.map((g, i) => `
    <article class="card reveal" style="--d:${(i % 3) * .1}s">
      <div class="mono" aria-hidden="true">${es(ini(g.n))}</div>
      <div>
        <h3>${g.u ? `<a href="${es(g.u)}" target="_blank" rel="noopener">${es(g.n)}</a>` : es(g.n)}</h3>
        <p>${es(g.r)}${g.a ? ` <em>(aka ${es(g.a)})</em>` : ''}</p>
        <div class="tags"><span>${es(slug(g.r))}</span>${g.d ? '<span>in-dev</span>' : ''}</div>
      </div>
    </article>`).join('');

  $('#ln').innerHTML = C.ct.map(c =>
    `<li><span class="k">${es(c.k)}</span><span class="ps1">=&gt;</span><a href="${es(c.href)}" target="_blank" rel="noopener">${es(c.label)}</a></li>`).join('');

  $('#ed').textContent = 'designed and developed from scratch by // ' + new Date().getFullYear() + ' ' + C.nick;

  $$('[data-t]').forEach(el => { el.textContent = el.dataset.t; el.classList.add('pending'); });

  $$('nav a, .btn, .card h3 a').forEach(a => a.addEventListener('mouseenter', () => scr(a)));
}

function rb(k) {
  const w = innerWidth < 520 ? 10 : 16;
  $$('.bar').forEach(b => {
    const n = Math.round(w * +b.dataset.p / 100 * k);
    b.innerHTML = `[<b>${'█'.repeat(n)}</b><s>${'░'.repeat(w - n)}</s>]`;
  });
}
async function ab() {
  if (rd) return rb(1);
  const n = 34;
  for (let i = 1; i <= n; i++) {
    rb(1 - Math.pow(1 - i / n, 3));
    await sl(22);
  }
  rb(1);
}

const IDS=[9391468976,94647229517154,88033955914813,131079272918660,109883052223750,77021749781226,95491140879721,98484885893001,14266669489,17435076424,129035895655249,4934471106,3311165597];
const FB={95491140879721:1e8,98484885893001:4e6};

async function fv(){
  const u={},ok=new Set();
  let t=0;
  await Promise.all(IDS.map(async p=>{
    try{
      const r=await fetch(`https://apis.roproxy.com/universes/v1/places/${p}/universe`);
      if(r.ok){const d=await r.json();if(d.universeId)u[d.universeId]=p}
    }catch{}
  }));
  const k=Object.keys(u);
  if(!k.length)return 0;
  try{
    const r=await fetch(`https://games.roproxy.com/v1/games?universeIds=${k.join(',')}`);
    if(r.ok)(await r.json()).data.forEach(g=>{ok.add(u[g.id]);t+=g.visits});
  }catch{}
  if(!ok.size)return 0;
  for(const p in FB)if(!ok.has(+p))t+=FB[p];
  return t;
}

async function live() {
  const el = $('#cn'), tm = $('#ct'), sp = $('#sp');
  const L = 24, bl = '▁▂▃▄▅▆▇█';
  let d=1;
  el.textContent='LOADING';
  const ld=setInterval(()=>{el.textContent='LOADING'+'.'.repeat(d++%4)},400);
  let n=await fv()||TOT;
  clearInterval(ld);
  const h = Array.from({ length: L }, () => 2 + Math.random() * 3 | 0);
  const clk = () => { tm.textContent = new Date().toTimeString().slice(0, 8); };
  const spk = () => { sp.textContent = h.map(v => bl[v]).join(''); };
  clk(); spk();

  if (rd) el.textContent = fm(n);
  else {
    const t0 = performance.now(), T = 1800;
    await new Promise(r => {
      const f = t => {
        const k = Math.min((t - t0) / T, 1);
        el.textContent = fm(Math.floor(n * (1 - Math.pow(1 - k, 4))));
        if (k < 1) requestAnimationFrame(f); else r();
      };
      requestAnimationFrame(f);
    });
    el.textContent = fm(n);
  }
  setInterval(async()=>{
  const v=await fv();
  if(v&&v!==n){
    n=v;
    el.textContent=fm(n);
    el.classList.add('up');
    setTimeout(()=>el.classList.remove('up'),400);
    clk();
  }
},60000);
}

function go() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      if (el.classList.contains('reveal')) el.classList.add('in');
      if (el.hasAttribute('data-seq')) tg(el);
      if (el.id === 'sl') ab();
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -12% 0px' });

  $$('.reveal, [data-seq], #sl').forEach(el => { if (!el.closest('#home')) io.observe(el); });

  const ls = $$('#nv a');
  const no = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) ls.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => no.observe(s));

  const fo = new IntersectionObserver(es => {
    if (es[0].isIntersecting) { fo.disconnect(); cy($('#qt'), C.q, { type: 80, hold: 2200 }); }
  });
  fo.observe($('#qt'));

  hero();
}

async function hero() {
  $('#hf').classList.add('in');
  live();
  await ty($('#cmd'), 'whoami', { sp: 85, j: 50, dl: 250 });
  await sl(150);
  $('#name').classList.add('show');
  await sl(900);
  cy($('#role'), C.roles, { type: 65, hold: 1700 });
  await sl(500);
  await ty($('#lead'), C.lead, { sp: 16, j: 20 });
  $('#cta').classList.add('in');
}

function term() {
  const out = $('#to'), inp = $('#ti'), box = $('#tm');
  const ps = C.host + ':~$';
  let busy = false, hist = [], hi = 0;

  const dn = () => { out.scrollTop = out.scrollHeight; };
  box.addEventListener('click', () => inp.focus());

  const skl = () => C.sk.map(s => `${s.n.padEnd(17)} ${s.lv}`);
  const cts = () => C.ct.map(c => `${c.k.padEnd(9)} ${c.label}`);
  const wk = () => C.g.map(g => `${g.n.padEnd(22)} ${g.r}${g.d ? ' [IN-DEV]' : ''}`);

  const FILES = {
    'about.txt':  () => C.about,
    'skills.db':  skl,
    'contact.sh': cts,
    'work/':      () => ['cat: work/: Is a directory']
  };

  const CMDS = {
    help:     () => ['available commands:',
                     '  about      who am i',
                     '  skills     what i can do',
                     '  work       games i worked on',
                     '  priority      what i am on right now',
                     '  visits     total visits contributed',
                     '  contact    how to reach me',
                     '  ls         list files',
                     '  cat <file> read a file',
                     '  open <sec> jump to a section',
                     '  whoami     identify yourself',
                     '  clear      wipe the screen'],
    about:    () => C.about,
    skills:   skl,
    work:     wk,
    priority:    () => C.now.map(l => `${l.t.padEnd(22)} ${l.at}`),
    visits:   () => ['total visits contributed: ' + $('#cn').textContent],
    contact:  cts,
    ls:       () => ['about.txt   skills.db   contact.sh   work/   .secrets'],
    whoami:   () => [C.nick, 'roblox dev who is a full-stack scripter with 6 years of experience'],
    hello:    () => ["Hiiiii, I'm Fillesh."],
    date:     () => [new Date().toString()],
    exit:     () => ['There is no escape.'],
    sudo:     () => ['Bro thinks he is terry davis or sum'],
    rm:       () => ['Nice try elliot.'],
    ping:     () => ['64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.042 ms', 'There is no place like home.'],
    cat: a => {
      const f = a[0];
      if (!f) return ['usage: cat <file>'];
      if (f === '.secrets') return ['cat: .secrets: Permission denied. Nice try.'];
      return FILES[f] ? FILES[f]() : [`cat: ${f}: No such file or directory`];
    },
    open: a => {
      const s = (a[0] || '').replace(/^\.?\//, '');
      const el = document.getElementById(s);
      if (!el || !el.matches('main section')) return ['usage: open <home|about|skills|now|work|contact>'];
      setTimeout(() => el.scrollIntoView({ behavior: rd ? 'auto' : 'smooth' }), 350);
      return ['opening ./' + s + ' ...'];
    }
  };

  async function pr(ls, cls = '') {
    busy = true;
    const f = ls.length > 8;
    for (const l of ls) {
      const d = document.createElement('div'); d.className = 'tline ' + cls;
      out.appendChild(d);
      await ty(d, l, { sp: f ? 1 : 5, j: f ? 2 : 8, cr: false, tick: dn });
    }
    busy = false; dn();
  }

  function run(raw) {
    const [cmd, ...a] = raw.trim().split(/\s+/);
    const c = cmd.toLowerCase();
    if (c === 'clear') { out.innerHTML = ''; return; }
    if (CMDS[c]) return pr(CMDS[c](a));
    return pr([`${c}: command not found. Type 'help'.`], 'err');
  }

  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      if (busy) return;
      const v = inp.value.trim();
      inp.value = '';
      const ec = document.createElement('div');
      ec.className = 'tline echo';
      ec.textContent = ps + ' ' + v;
      out.appendChild(ec); dn();
      if (v) { hist.push(v); hi = hist.length; run(v); }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); if (hi > 0) inp.value = hist[--hi];
    } else if (e.key === 'ArrowDown') {
      e.preventDefault(); inp.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const m = Object.keys(CMDS).filter(k => k.startsWith(inp.value.toLowerCase()));
      if (m.length === 1) inp.value = m[0];
    }
  });
}

function rn() {
  if (rd) return;
  const cv = $('#rn'), cx = cv.getContext('2d');
  const sz = 16; let cols, dr, w, h;
  const rs = () => {
    w = cv.width = innerWidth; h = cv.height = innerHeight;
    cols = Math.ceil(w / sz);
    dr = Array.from({ length: cols }, () => Math.random() * -60);
  };
  rs(); addEventListener('resize', rs);
  const gl = '01';
  setInterval(() => {
    if (document.hidden) return;
    cx.fillStyle = 'rgba(0,0,0,.14)'; cx.fillRect(0, 0, w, h);
    cx.fillStyle = '#ffd60a'; cx.font = sz + 'px monospace';
    for (let i = 0; i < cols; i++) {
      cx.fillText(gl[Math.random() * gl.length | 0], i * sz, dr[i] * sz);
      if (dr[i] * sz > h && Math.random() > .975) dr[i] = 0;
      dr[i]++;
    }
  }, 70);
}

bld();
rn();
term();
go();

})();
