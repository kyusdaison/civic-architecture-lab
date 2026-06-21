import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(__dirname, '..');
const workspaceRoot = resolve(siteRoot, '..');
const require = createRequire(join(workspaceRoot, 'package.json'));
const { chromium } = require('playwright');

const packageRoot = join(workspaceRoot, 'output', 'brand', 'cal-logo-authoritative');
const packageSvg = join(packageRoot, 'svg');
const packagePng = join(packageRoot, 'png');
const sitePng = join(siteRoot, 'public', 'brand', 'cal', 'png');

mkdirSync(packagePng, { recursive: true });
mkdirSync(sitePng, { recursive: true });

async function renderSvg(browser, { input, output, width, height, scale = 1 }) {
  const renderWidth = width * scale;
  const renderHeight = height * scale;
  const page = await browser.newPage({
    viewport: { width: renderWidth, height: renderHeight },
  });
  const svg = readFileSync(input, 'utf8');
  await page.setContent(`<!doctype html>
    <html>
      <head>
        <style>
          html, body {
            width: ${renderWidth}px;
            height: ${renderHeight}px;
            margin: 0;
            overflow: hidden;
            background: transparent;
          }
          svg {
            display: block;
            width: ${renderWidth}px;
            height: ${renderHeight}px;
          }
        </style>
      </head>
      <body>
        ${svg}
      </body>
    </html>`);
  await page.screenshot({ path: output, omitBackground: true, scale: 'css' });
  await page.close();
}

const browser = await chromium.launch({ headless: true });

const jobs = [
  { input: 'cal-logo-primary.svg', output: 'cal-logo-primary-2240.png', width: 1120, height: 420, scale: 2 },
  { input: 'cal-logo-light-bg.svg', output: 'cal-logo-light-bg-2240.png', width: 1120, height: 420, scale: 2 },
  { input: 'cal-logo-reversed.svg', output: 'cal-logo-reversed-2240.png', width: 1120, height: 420, scale: 2 },
  { input: 'cal-logo-dark-bg.svg', output: 'cal-logo-dark-bg-2240.png', width: 1120, height: 420, scale: 2 },
  { input: 'cal-logo-navy.svg', output: 'cal-logo-navy-2240.png', width: 1120, height: 420, scale: 2 },
  { input: 'cal-logo-black.svg', output: 'cal-logo-black-2240.png', width: 1120, height: 420, scale: 2 },
  { input: 'cal-mark-primary.svg', output: 'cal-mark-primary-1024.png', width: 512, height: 512, scale: 2 },
  { input: 'cal-mark-reversed.svg', output: 'cal-mark-reversed-1024.png', width: 512, height: 512, scale: 2 },
  { input: 'cal-app-icon.svg', output: 'cal-app-icon-1024.png', width: 512, height: 512, scale: 2 },
  { input: 'cal-app-icon.svg', output: 'cal-icon-512.png', width: 512, height: 512, scale: 1 },
  { input: 'cal-app-icon.svg', output: 'cal-icon-192.png', width: 192, height: 192, scale: 1 },
  { input: 'cal-app-icon.svg', output: 'cal-apple-touch-icon.png', width: 180, height: 180, scale: 1 },
];

for (const job of jobs) {
  await renderSvg(browser, {
    input: join(packageSvg, job.input),
    output: join(packagePng, job.output),
    width: job.width,
    height: job.height,
    scale: job.scale,
  });
}

await browser.close();

for (const filename of [
  'cal-logo-primary-2240.png',
  'cal-logo-light-bg-2240.png',
  'cal-logo-reversed-2240.png',
  'cal-logo-dark-bg-2240.png',
  'cal-mark-primary-1024.png',
  'cal-mark-reversed-1024.png',
  'cal-app-icon-1024.png',
  'cal-icon-512.png',
  'cal-icon-192.png',
  'cal-apple-touch-icon.png',
]) {
  copyFileSync(join(packagePng, filename), join(sitePng, filename));
}

console.log(`Exported CAL PNG assets to:
- ${packagePng}
- ${sitePng}`);
