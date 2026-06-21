import { mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(__dirname, '..');
const workspaceRoot = resolve(siteRoot, '..');

const siteOut = join(siteRoot, 'public', 'brand', 'cal');
const packageOut = join(workspaceRoot, 'output', 'brand', 'cal-logo-authoritative');
const siteSvgOut = join(siteOut, 'svg');
const sitePngOut = join(siteOut, 'png');
const packageSvgOut = join(packageOut, 'svg');
const packagePngOut = join(packageOut, 'png');
const packageDocsOut = join(packageOut, 'docs');

for (const dir of [siteOut, siteSvgOut, sitePngOut, packageOut, packageSvgOut, packagePngOut, packageDocsOut]) {
  mkdirSync(dir, { recursive: true });
}

const colors = {
  navy: '#061426',
  gold: '#B9974A',
  ivory: '#F7F3EA',
  charcoal: '#15171A',
  white: '#FFFFFF',
};

const fontStack = 'Baskerville, Iowan Old Style, Libre Baskerville, Georgia, Times New Roman, serif';

function metadata(title, desc) {
  return `<title>${title}</title>
  <desc>${desc}</desc>`;
}

function markGroup({ main = colors.navy, accent = colors.gold, x = 0, y = 0, scale = 1, id = 'cal-mark' } = {}) {
  return `<g id="${id}" transform="translate(${x} ${y}) scale(${scale})">
    <path d="M82 156A98 98 0 0 1 159 60" fill="none" stroke="${main}" stroke-width="30" stroke-linecap="butt"/>
    <path d="M201 60A98 98 0 0 1 278 156" fill="none" stroke="${main}" stroke-width="30" stroke-linecap="butt"/>
    <path d="M163 40H197L190 83H170Z" fill="${accent}"/>
    <rect x="58" y="166" width="244" height="15" fill="${main}"/>
    <rect x="71" y="188" width="218" height="8" fill="${main}"/>
    <text x="83" y="296" fill="${main}" font-family="${fontStack}" font-size="116" font-weight="700" letter-spacing="0.5">CAL</text>
    <rect x="78" y="306" width="204" height="10" fill="${main}"/>
    <rect x="58" y="323" width="244" height="14" fill="${main}"/>
  </g>`;
}

function wordmark({ fill = colors.navy, x = 462, y = 126, scale = 1, id = 'cal-wordmark' } = {}) {
  return `<g id="${id}" transform="translate(${x} ${y}) scale(${scale})">
    <text x="0" y="0" fill="${fill}" font-family="${fontStack}" font-size="74" font-weight="600" letter-spacing="-1.2">Civic</text>
    <text x="0" y="86" fill="${fill}" font-family="${fontStack}" font-size="74" font-weight="600" letter-spacing="-1.6">Architecture</text>
    <text x="0" y="172" fill="${fill}" font-family="${fontStack}" font-size="74" font-weight="600" letter-spacing="-1.2">Lab</text>
  </g>`;
}

function fullLogoSvg({
  title,
  main = colors.navy,
  accent = colors.gold,
  word = main,
  background,
  width = 1120,
  height = 420,
} = {}) {
  const bg = background ? `<rect width="1120" height="420" fill="${background}"/>` : '';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 1120 420" role="img" aria-labelledby="title desc">
  ${metadata(title, 'Civic Architecture Lab authoritative institutional logo lockup.')}
  ${bg}
  ${markGroup({ main, accent, x: 68, y: 48, scale: 0.88, id: 'cal-authoritative-mark' })}
  <rect x="407" y="78" width="2.5" height="264" fill="${accent}"/>
  ${wordmark({ fill: word, x: 470, y: 128, scale: 1, id: 'civic-architecture-lab-wordmark' })}
</svg>
`;
}

function markSvg({ title, main = colors.navy, accent = colors.gold, background, size = 512 } = {}) {
  const bg = background ? `<rect width="512" height="512" fill="${background}"/>` : '';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512" role="img" aria-labelledby="title desc">
  ${metadata(title, 'Civic Architecture Lab symbol mark: civic arch, gold keystone, and CAL institutional monogram.')}
  ${bg}
  ${markGroup({ main, accent, x: 76, y: 78, scale: 1, id: 'cal-symbol' })}
</svg>
`;
}

function appIconSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-labelledby="title desc">
  ${metadata('Civic Architecture Lab App Icon', 'Civic Architecture Lab app icon with institutional CAL mark on sovereign midnight navy.')}
  <rect width="512" height="512" rx="72" fill="${colors.navy}"/>
  <rect x="28" y="28" width="456" height="456" rx="52" fill="none" stroke="${colors.gold}" stroke-opacity="0.32" stroke-width="2"/>
  ${markGroup({ main: colors.ivory, accent: colors.gold, x: 76, y: 78, scale: 1, id: 'cal-app-symbol' })}
</svg>
`;
}

function previewHtml() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Civic Architecture Lab Logo System</title>
  <style>
    :root {
      --navy: ${colors.navy};
      --gold: ${colors.gold};
      --ivory: ${colors.ivory};
      --charcoal: ${colors.charcoal};
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #f4f1ea;
      color: var(--charcoal);
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main { max-width: 1180px; margin: 0 auto; padding: 48px 28px 64px; }
    h1 { margin: 0 0 10px; font-family: ${fontStack}; font-size: 44px; letter-spacing: -0.02em; color: var(--navy); }
    p { margin: 0; color: #5d6268; line-height: 1.6; }
    .grid { display: grid; gap: 18px; margin-top: 32px; }
    .card {
      border: 1px solid rgba(6,20,38,0.12);
      background: white;
      padding: 28px;
      min-height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .dark { background: var(--navy); }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .marks { display: grid; grid-template-columns: repeat(5, minmax(120px, 1fr)); gap: 18px; }
    img { display: block; max-width: 100%; height: auto; margin: 0 auto; }
    .label { margin-top: 18px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #777; font-weight: 700; }
    .dark .label { color: rgba(247,243,234,0.68); }
    .swatches { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
    .swatch { height: 92px; border: 1px solid rgba(0,0,0,0.08); display: flex; align-items: end; padding: 14px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; }
    @media (max-width: 760px) {
      .row, .marks, .swatches { grid-template-columns: 1fr; }
      h1 { font-size: 34px; }
    }
  </style>
</head>
<body>
  <main>
    <h1>Civic Architecture Lab Logo System</h1>
    <p>Authoritative institutional master assets. Use SVG as source of truth; PNG exports are convenience previews.</p>

    <section class="grid">
      <div class="card">
        <img src="svg/cal-logo-primary.svg" alt="Civic Architecture Lab primary logo" />
        <div class="label">Primary lockup / light background</div>
      </div>
      <div class="card dark">
        <img src="svg/cal-logo-reversed.svg" alt="Civic Architecture Lab reversed logo" />
        <div class="label">Reversed lockup / dark background</div>
      </div>
      <div class="row">
        <div class="card">
          <img src="svg/cal-logo-navy.svg" alt="Civic Architecture Lab single color navy logo" />
          <div class="label">Single color navy</div>
        </div>
        <div class="card">
          <img src="svg/cal-logo-black.svg" alt="Civic Architecture Lab black logo" />
          <div class="label">Black file version</div>
        </div>
      </div>
      <div class="marks">
        <div class="card"><img src="svg/cal-mark-primary.svg" alt="Primary mark" /><div class="label">Primary mark</div></div>
        <div class="card dark"><img src="svg/cal-mark-reversed.svg" alt="Reversed mark" /><div class="label">Reversed mark</div></div>
        <div class="card"><img src="svg/cal-mark-navy.svg" alt="Navy mark" /><div class="label">Navy mark</div></div>
        <div class="card"><img src="svg/cal-mark-black.svg" alt="Black mark" /><div class="label">Black mark</div></div>
        <div class="card"><img src="svg/cal-app-icon.svg" alt="App icon" /><div class="label">App icon</div></div>
      </div>
      <div class="swatches">
        <div class="swatch" style="background:${colors.navy}; color:${colors.ivory};">#061426<br/>Sovereign Midnight Navy</div>
        <div class="swatch" style="background:${colors.gold}; color:${colors.charcoal};">#B9974A<br/>Institutional Gold</div>
        <div class="swatch" style="background:${colors.ivory}; color:${colors.charcoal};">#F7F3EA<br/>Ivory White</div>
        <div class="swatch" style="background:${colors.charcoal}; color:${colors.ivory};">#15171A<br/>Charcoal Black</div>
      </div>
    </section>
  </main>
</body>
</html>
`;
}

function guidelinesMd() {
  return `# Civic Architecture Lab Logo System

## Selected Direction

Sovereign Institutional Master. The mark preserves the CAL civic-architecture structure while tightening it into a formal institutional identity system.

## Core Meaning

- Civic arch: institutional threshold and public mandate.
- Gold keystone: trust, authorization, order, and long-term stewardship.
- CAL monogram: civic architecture, institutional design, and public infrastructure.
- Foundation bars: continuity, public service infrastructure, and operational stability.

## Color System

- Sovereign Midnight Navy: \`${colors.navy}\`
- Institutional Gold: \`${colors.gold}\`
- Ivory White: \`${colors.ivory}\`
- Charcoal Black: \`${colors.charcoal}\`

## Files

- \`svg/cal-logo-primary.svg\`: primary lockup for light backgrounds.
- \`svg/cal-logo-reversed.svg\`: transparent reversed lockup for dark backgrounds.
- \`svg/cal-logo-dark-bg.svg\`: reversed lockup with built-in navy background.
- \`svg/cal-logo-navy.svg\`: one-color navy lockup.
- \`svg/cal-logo-black.svg\`: one-color black lockup.
- \`svg/cal-mark-primary.svg\`: primary symbol.
- \`svg/cal-mark-reversed.svg\`: reversed symbol.
- \`svg/cal-app-icon.svg\`: app/social icon.
- \`png/\`: convenience exports for previews and platform icons.

## Usage Rules

- Use the primary logo on ivory or white backgrounds.
- Use the reversed logo on midnight navy or charcoal backgrounds.
- Use one-color navy for official stationery, simple print, and watermark-style applications.
- Use black only where color printing is unavailable.
- Use the symbol-only mark for favicon, app icon, social avatar, certificate seals, and small digital placements.
- Keep clear space around the logo equal to at least half the emblem width.
- Do not add gradients, shadows, outlines, flags, seals, slogans, or partner marks inside the lockup.

## Production Note

This is a deterministic SVG master suitable for web and brand handoff. For trademark filing, high-end print, or final identity manuals, the wordmark should be outlined from the approved production typeface.
`;
}

const assets = new Map([
  ['cal-logo-primary.svg', fullLogoSvg({ title: 'Civic Architecture Lab Primary Logo' })],
  ['cal-logo-light-bg.svg', fullLogoSvg({ title: 'Civic Architecture Lab Logo on Ivory White', background: colors.ivory })],
  ['cal-logo-reversed.svg', fullLogoSvg({ title: 'Civic Architecture Lab Reversed Logo', main: colors.ivory, accent: colors.gold, word: colors.ivory })],
  ['cal-logo-dark-bg.svg', fullLogoSvg({ title: 'Civic Architecture Lab Logo on Midnight Navy', main: colors.ivory, accent: colors.gold, word: colors.ivory, background: colors.navy })],
  ['cal-logo-navy.svg', fullLogoSvg({ title: 'Civic Architecture Lab One Color Navy Logo', main: colors.navy, accent: colors.navy, word: colors.navy })],
  ['cal-logo-black.svg', fullLogoSvg({ title: 'Civic Architecture Lab Black Logo', main: colors.charcoal, accent: colors.charcoal, word: colors.charcoal })],
  ['cal-logo-white.svg', fullLogoSvg({ title: 'Civic Architecture Lab White Logo', main: colors.white, accent: colors.white, word: colors.white })],
  ['cal-mark-primary.svg', markSvg({ title: 'Civic Architecture Lab Primary Mark' })],
  ['cal-mark-reversed.svg', markSvg({ title: 'Civic Architecture Lab Reversed Mark', main: colors.ivory, accent: colors.gold })],
  ['cal-mark-navy.svg', markSvg({ title: 'Civic Architecture Lab Navy Mark', main: colors.navy, accent: colors.navy })],
  ['cal-mark-black.svg', markSvg({ title: 'Civic Architecture Lab Black Mark', main: colors.charcoal, accent: colors.charcoal })],
  ['cal-mark-white.svg', markSvg({ title: 'Civic Architecture Lab White Mark', main: colors.white, accent: colors.white })],
  ['cal-favicon.svg', appIconSvg()],
  ['cal-app-icon.svg', appIconSvg()],
]);

for (const [filename, content] of assets.entries()) {
  writeFileSync(join(packageSvgOut, filename), content);
  writeFileSync(join(siteSvgOut, filename), content);
}

writeFileSync(join(packageOut, 'review.html'), previewHtml());
writeFileSync(join(packageDocsOut, 'logo-system-guidelines.md'), guidelinesMd());
writeFileSync(join(siteOut, 'site.webmanifest'), JSON.stringify({
  name: 'Civic Architecture Lab',
  short_name: 'CAL',
  icons: [
    { src: '/brand/cal/png/cal-icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/brand/cal/png/cal-icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
  theme_color: colors.navy,
  background_color: colors.navy,
  display: 'standalone',
}, null, 2));

for (const [filename] of assets.entries()) {
  copyFileSync(join(packageSvgOut, filename), join(siteSvgOut, filename));
}

console.log(`Wrote CAL logo SVG assets to:
- ${packageOut}
- ${siteOut}`);
