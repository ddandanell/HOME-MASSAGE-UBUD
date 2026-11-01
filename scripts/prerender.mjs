#!/usr/bin/env node
/**
 * Prerender per-route <head> for homemassageubud.com.
 *
 * Runs after `vite build` (dist/ contains the SPA shell). For every route in
 * client/src/data/route-meta.json it writes dist/<route>.html containing the
 * route's own title, description, canonical, Open Graph/Twitter tags and JSON-LD,
 * plus an <h1> and lead paragraph inside #root that React replaces on mount.
 *
 * Vercel serves these files directly (cleanUrls: true) so a crawler that does not
 * run JavaScript still sees one title, one description, one self-referential
 * canonical and one <h1> per URL.
 *
 * Fail-closed: the build dies on a missing entry, a duplicate title, a title or
 * description outside the house range, or a sitemap URL with no route.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const SITE = 'https://homemassageubud.com';
const SUFFIX = ' | Home Massage Ubud';
const BRAND = 'Home Massage Ubud';

const manifest = JSON.parse(readFileSync(join(ROOT, 'client/src/data/route-meta.json'), 'utf8'));
const sitemap = readFileSync(join(ROOT, 'client/public/sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(SITE, '').replace(/^$/, '/') || '/'
);

const errors = [];

// ---- gate 1: coverage -------------------------------------------------------
for (const loc of locs) {
  if (!manifest[loc]) errors.push(`sitemap URL has no manifest entry: ${loc}`);
}
for (const path of Object.keys(manifest)) {
  if (!locs.includes(path)) errors.push(`manifest entry not in sitemap: ${path}`);
}

// ---- gate 2: house ranges + uniqueness -------------------------------------
const seen = new Map();
for (const [path, meta] of Object.entries(manifest)) {
  const t = meta.title || '';
  const d = meta.description || '';
  if (t.length < 50 || t.length > 60) errors.push(`title ${t.length} chars (need 50-60): ${path}`);
  if (d.length < 120 || d.length > 155) errors.push(`description ${d.length} chars (need 120-155): ${path}`);
  if (!meta.h1) errors.push(`missing h1: ${path}`);
  if (seen.has(t)) errors.push(`duplicate title on ${path} and ${seen.get(t)}: ${t}`);
  seen.set(t, path);
}

if (errors.length) {
  console.error('\nprerender: FAILED');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}

// ---- shared blocks ---------------------------------------------------------
const UBUD_LD = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE}/#localbusiness`,
  name: BRAND,
  url: SITE,
  image: `${SITE}/og-image.jpg`,
  logo: `${SITE}/logo.png`,
  telephone: '+62-811-2656-869',
  email: 'hello@homemassageubud.com',
  priceRange: '$$',
  currenciesAccepted: 'IDR',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ubud',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -8.5069, longitude: 115.2625 },
  areaServed: [
    'Ubud',
    'Sayan',
    'Kedewatan',
    'Sanggingan',
    'Penestanan',
    'Nyuh Kuning',
    'Lodtunduh',
    'Mas',
    'Pejeng',
    'Tegallalang',
    'Payangan',
    'Sidemen',
  ].map((name) => ({ '@type': 'City', name, addressRegion: 'Bali', addressCountry: 'ID' })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
  ],
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headFor(path, meta) {
  const url = path === '/' ? `${SITE}/` : `${SITE}${path}`;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      UBUD_LD,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': `${SITE}/#localbusiness` },
        inLanguage: 'en',
        about: { '@id': `${SITE}/#localbusiness` },
      },
    ],
  };
  return `
    <title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${BRAND}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />
    <meta name="twitter:image" content="${SITE}/og-image.jpg" />
    <script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

// ---- template --------------------------------------------------------------
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');

function stripHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name="description"[^>]*>/gi, '')
    .replace(/<meta\s+name="robots"[^>]*>/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, '')
    .replace(/<meta\s+property="twitter:[^"]+"[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
}

const FALLBACK_STYLE = `<style id="prerender-style">
  #prerender-fallback{max-width:46rem;margin:0 auto;padding:3rem 1.25rem;color:#f8fafc;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:1.5}
  #prerender-fallback h1{font-size:1.9rem;line-height:1.25;margin:0 0 .9rem}
  #prerender-fallback p{margin:0;color:#cbd5e1}
</style>`;

function bodyFor(meta) {
  return `<div id="root"><div id="prerender-fallback"><h1>${esc(meta.h1)}</h1><p>${esc(meta.description)}</p></div></div>`;
}

let written = 0;
for (const [path, meta] of Object.entries(manifest)) {
  let html = stripHeadTags(shell);
  html = html.replace('</head>', `${headFor(path, meta)}\n${FALLBACK_STYLE}\n  </head>`);
  html = html.replace(/<div id="root"><\/div>/, bodyFor(meta));
  const target = path === '/' ? join(DIST, 'index.html') : join(DIST, `${path.slice(1)}.html`);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  written += 1;
}

// ---- gate 3: prove the output ---------------------------------------------
const checks = ['/', '/ubud/deep-tissue-massage', '/pricing', '/home-massage/cities/ubud'];
for (const p of checks) {
  const file = p === '/' ? join(DIST, 'index.html') : join(DIST, `${p.slice(1)}.html`);
  if (!existsSync(file)) {
    console.error(`prerender: missing output for ${p}`);
    process.exit(1);
  }
  const html = readFileSync(file, 'utf8');
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  const h1 = (html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1];
  const want = p === '/' ? `${SITE}/` : `${SITE}${p}`;
  if (!title || !canonical || !h1) {
    console.error(`prerender: ${p} output incomplete (title=${!!title} canonical=${!!canonical} h1=${!!h1})`);
    process.exit(1);
  }
  if (canonical !== want) {
    console.error(`prerender: ${p} canonical ${canonical} != ${want}`);
    process.exit(1);
  }
  console.log(`  ${p}  title(${title.length})  canonical ok  h1 ok`);
}

console.log(`prerender: ${written} route files written, gates passed`);
