// Генерирует картинки для соцсетей через headless Chrome:
//   public/og-image.png, public/og-image-en.png         — превью ссылки (1200×630)
//   public/social/cases/<slug>-<lang>.png               — превью для каждого кейса
//   public/social/banner-*.png                          — обложки для VK / Telegram / Behance
// Запуск: node scripts/social/render.mjs   (нужны Google Chrome и интернет для шрифтов)
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const pub = path.join(root, 'public');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const work = path.join(tmpdir(), 'devenas-social');
mkdirSync(work, { recursive: true });

const avatar = 'file://' + path.join(pub, 'assets/avatar.jpg');
const site = { ru: JSON.parse(readFileSync(path.join(root, 'src/data/ru/site.json'), 'utf8')), en: JSON.parse(readFileSync(path.join(root, 'src/data/en/site.json'), 'utf8')) };

const copy = {
  ru: { role: 'Веб-дизайнер Анастасия Девентейчик', slogan: ['Сайты, которые', 'работают на бизнес'], me: '← ЭТО Я', ribbon: 'Лендинги ✦ Многостраничные сайты ✦ Интернет-магазины ✦ Дизайн-макеты ✦ Лендинги ✦ Многостраничные сайты', case: '[ КЕЙС ]' },
  en: { role: 'Web designer Anastasia Deventeichik', slogan: ['Websites that', 'work for business'], me: "← THAT'S ME", ribbon: 'Landing pages ✦ Multi-page websites ✦ Online stores ✦ Website design ✦ Landing pages ✦ Multi-page websites', case: '[ CASE STUDY ]' },
};

const head = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;900&family=JetBrains+Mono:wght@500;700&family=Onest:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;border-radius:0}
html,body{background:#0e0e10;color:#f4f1ea;overflow:hidden;font-family:Onest,sans-serif}
.abs{position:absolute}
.lines i{position:absolute;top:0;bottom:0;width:1px;background:rgba(244,241,234,.18)}
.wm{font-family:Unbounded;font-weight:900;line-height:.8;letter-spacing:-.05em;white-space:nowrap}
.card{background:#f4f1ea;color:#0a0a0a;box-shadow:12px 12px 0 #ff4a1c;transform:rotate(-7deg);font:700 15px 'JetBrains Mono';padding:12px 12px 16px}
.card img{display:block;width:100%;aspect-ratio:1;object-fit:cover;background:#d4ff3a;margin-bottom:10px}
.mono{font-family:'JetBrains Mono';font-weight:700;text-transform:uppercase;letter-spacing:.02em}
.lime{color:#d4ff3a}
.mark{background:#d4ff3a;color:#0a0a0a;padding:0 12px 4px 8px}
.rib{left:-40px;right:-40px;background:#ff4a1c;color:#0a0a0a;transform:rotate(-1.6deg);padding:12px 0;font:700 22px Unbounded;text-transform:uppercase;white-space:nowrap;letter-spacing:-.01em}
</style></head><body>`;

// ---------- шаблоны ----------
const ogHome = (lang) => {
  const c = copy[lang];
  return {
    w: 1200, h: 630,
    html: `${head}<div class="lines"><i style="left:300px"></i><i style="left:600px"></i><i style="left:900px"></i></div>
<div class="abs wm" style="left:24px;top:92px;width:1152px;font-size:196px">DEVENAS</div>
<div class="abs card" style="left:868px;top:34px;width:214px"><img src="${avatar}"><span>${c.me}</span></div>
<div class="abs" style="left:48px;top:322px"><div class="mono lime" style="font-size:20px;margin-bottom:18px">${c.role}</div>
<div style="font:600 46px/1.12 Unbounded;letter-spacing:-.03em;max-width:820px">${c.slogan[0]} <span class="mark">${c.slogan[1]}</span></div></div>
<div class="abs rib" style="bottom:34px">${c.ribbon}</div></body></html>`,
  };
};

const caseCard = (item, lang) => {
  const c = copy[lang];
  const len = item.name.length;
  const size = len <= 12 ? 100 : len <= 20 ? 76 : 58;
  const cover = 'file://' + path.join(pub, item.cover.replace(/^\//, ''));
  return {
    w: 1200, h: 630,
    html: `${head}<div class="lines"><i style="left:300px"></i><i style="left:600px"></i><i style="left:900px"></i></div>
<div class="abs mono lime" style="left:48px;top:52px;font-size:18px">${c.case}</div>
<div class="abs" style="left:48px;top:96px;width:560px;font:900 ${size}px/1.02 Unbounded;letter-spacing:-.05em">${item.name}</div>
<div class="abs" style="left:48px;bottom:172px;width:540px;font:400 30px/1.3 Onest;color:rgba(244,241,234,.78)">${item.description}</div>
<div class="abs" style="left:48px;bottom:118px;display:flex;gap:8px">${item.tags.map((t) => `<span class="mono" style="border:1px solid rgba(244,241,234,.4);padding:5px 10px;font-size:13px">${t}</span>`).join('')}</div>
<div class="abs" style="left:640px;top:64px;width:512px;height:400px;border:1px solid #0a0a0a;box-shadow:14px 14px 0 #3d5afe;background:#17171a;overflow:hidden"><img src="${cover}" style="width:100%;height:100%;object-fit:cover;object-position:top center"></div>
<div class="abs rib" style="bottom:22px"><span style="margin-left:60px">devenasdesign.com ✦ ${c.role} ✦ devenasdesign.com ✦ ${c.role}</span></div></body></html>`,
  };
};

const banner = (w, h, lang) => {
  const c = copy[lang];
  const safe = 1196; // на телефоне VK показывает центральные 1196px
  const left = Math.round((w - safe) / 2);
  // слово DEVENAS ≈ 5.88 × размер шрифта в ширину; оставляем справа место под карточку
  const wm = Math.round(Math.min(h * 0.42, (safe * 0.68) / 5.88));
  const cardW = Math.round(Math.min(h * 0.46, 220));
  const top = Math.round(h * 0.14);
  const roleTop = top + Math.round(wm * 0.86);
  const sloganTop = roleTop + Math.round(h * 0.085);
  return {
    w, h,
    html: `${head}<div class="lines"><i style="left:${Math.round(w * 0.25)}px"></i><i style="left:${Math.round(w * 0.5)}px"></i><i style="left:${Math.round(w * 0.75)}px"></i></div>
<div class="abs wm" style="left:${left}px;top:${top}px;font-size:${wm}px">DEVENAS</div>
<div class="abs mono lime" style="left:${left + 6}px;top:${roleTop}px;font-size:${Math.round(h * 0.048)}px">${c.role}</div>
<div class="abs" style="left:${left + 6}px;top:${sloganTop}px;font:600 ${Math.round(h * 0.074)}px/1.12 Unbounded;letter-spacing:-.03em">${c.slogan[0]} <span class="mark">${c.slogan[1]}</span></div>
<div class="abs card" style="left:${left + safe - cardW - 24}px;top:${Math.round(h * 0.07)}px;width:${cardW}px"><img src="${avatar}"><span>${c.me}</span></div>
<div class="abs rib" style="bottom:${Math.round(h * 0.035)}px;font-size:${Math.round(h * 0.055)}px;padding:${Math.round(h * 0.02)}px 0"><span style="margin-left:${left}px">devenasdesign.com ✦ ${c.ribbon.split(' ✦ ').slice(0, 4).join(' ✦ ')}</span></div></body></html>`,
  };
};

// ---------- рендер ----------
const render = (tpl, out) =>
  new Promise((resolve, reject) => {
    const html = path.join(work, 'page.html');
    const profile = path.join(work, 'profile');
    writeFileSync(html, tpl.html);
    rmSync(out, { force: true });
    mkdirSync(path.dirname(out), { recursive: true });
    const proc = spawn(chrome, ['--headless=new', `--user-data-dir=${profile}`, '--no-first-run', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', `--window-size=${tpl.w},${tpl.h}`, '--virtual-time-budget=9000', `--screenshot=${out}`, `file://${html}`], { stdio: 'ignore' });
    let last = -1;
    const timer = setInterval(() => {
      if (existsSync(out)) {
        const size = statSync(out).size;
        if (size > 0 && size === last) { clearInterval(timer); proc.kill('SIGKILL'); resolve(); }
        last = size;
      }
    }, 1500);
    setTimeout(() => { clearInterval(timer); proc.kill('SIGKILL'); existsSync(out) ? resolve() : reject(new Error('timeout ' + out)); }, 60000);
  });

const jobs = [
  [ogHome('ru'), path.join(pub, 'og-image.png')],
  [ogHome('en'), path.join(pub, 'og-image-en.png')],
  [banner(1590, 400, 'ru'), path.join(pub, 'social/banner-vk-1590x400-ru.png')],
  [banner(1590, 400, 'en'), path.join(pub, 'social/banner-vk-1590x400-en.png')],
  [banner(1500, 500, 'ru'), path.join(pub, 'social/banner-wide-1500x500-ru.png')],
  [banner(1500, 500, 'en'), path.join(pub, 'social/banner-wide-1500x500-en.png')],
];
for (const lang of ['ru', 'en']) {
  for (const item of site[lang].work.items) jobs.push([caseCard(item, lang), path.join(pub, `social/cases/${item.slug}-${lang}.png`)]);
}

const only = process.argv[2];
for (const [tpl, out] of jobs) {
  if (only && !out.includes(only)) continue;
  await render(tpl, out);
  console.log('ok', path.relative(root, out));
}
rmSync(work, { recursive: true, force: true });
