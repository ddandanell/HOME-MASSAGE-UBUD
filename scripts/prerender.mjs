#!/usr/bin/env node
/**
 * Prerender per-route <head> + sitemap + 404 for homemassageubud.com.
 *
 * Runs after `vite build` (dist/ contains the SPA shell). For every route in
 * client/src/data/route-meta.json it writes dist/<route>.html containing the
 * route's own title, description, canonical, Open Graph/Twitter tags and JSON-LD,
 * plus an <h1> and lead paragraph inside #root that React replaces on mount.
 *
 * Vercel serves these files directly (cleanUrls: true) so a crawler that does not
 * run JavaScript still sees one title, one description, one canonical and one <h1>
 * per URL.
 *
 * It also owns two artifacts that used to drift:
 *   - dist/sitemap.xml, generated from the manifest, not hand-maintained XML.
 *     A route with `"sitemap": false` and a `reason` stays served and indexable
 *     but is not advertised. Exactly one Sitemap line exists in robots.txt.
 *   - dist/404.html, because the catch-all rewrite is gone: an unknown path must
 *     answer 404, not 200 with a copy of the homepage.
 *
 * Canonical host: SITE_ORIGIN (default https://homemassageubud.com, the apex).
 * KNOWN-DEFECT D-1: the apex answers 307 -> www until the Vercel primary domain
 * is flipped, so every canonical and sitemap loc currently points at a redirect.
 * One env var flips all of them; nothing else in this file hardcodes the host.
 *
 * Fail-closed: the build dies on a missing entry, a duplicate title, a title or
 * description outside the house range, an unlisted route without a reason, or a
 * missing output.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const SITE = (process.env.SITE_ORIGIN || 'https://homemassageubud.com').replace(/\/+$/, '');
const LAST_MOD = process.env.SITEMAP_LASTMOD || new Date().toISOString().slice(0, 10);
const SUFFIX = ' | Home Massage Ubud';
const BRAND = 'Home Massage Ubud';

const manifest = JSON.parse(readFileSync(join(ROOT, 'client/src/data/route-meta.json'), 'utf8'));

const errors = [];

// ---- gate 1: coverage, uniqueness, house ranges -----------------------------
const seen = new Map();
const listed = [];
const unlisted = [];

for (const [path, meta] of Object.entries(manifest)) {
  const t = meta.title || '';
  const d = meta.description || '';
  if (t.length < 50 || t.length > 60) errors.push(`title ${t.length} chars (need 50-60): ${path}`);
  if (d.length < 120 || d.length > 155) errors.push(`description ${d.length} chars (need 120-155): ${path}`);
  if (!meta.h1) errors.push(`missing h1: ${path}`);
  if (meta.answer) {
    // CONT-003: an answer block is 40-60 words and sits directly after the h1.
    const words = meta.answer.trim().split(/\s+/).filter(Boolean).length;
    if (words < 40 || words > 60) errors.push(`answer ${words} words (need 40-60): ${path}`);
    if (meta.answer.length > 420) errors.push(`answer ${meta.answer.length} chars (max 420): ${path}`);
  }
  if (seen.has(t)) errors.push(`duplicate title on ${path} and ${seen.get(t)}: ${t}`);
  seen.set(t, path);
  if (meta.sitemap === false) {
    if (!meta.reason) errors.push(`route marked sitemap:false without a reason: ${path}`);
    unlisted.push(path);
  } else {
    listed.push(path);
  }
}

if (!errors.length && !listed.length) errors.push('no indexable routes in the manifest');

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

const urlFor = (path) => (path === '/' ? `${SITE}/` : `${SITE}${path}`);

function headFor(path, meta) {
  const url = urlFor(path);
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
  // The answer block, where a route has one, is the lead paragraph a crawler reads
  // after the h1 without JavaScript; otherwise the description stands in for it.
  const lead = meta.answer || meta.description;
  const links = (meta.answerLinks || []).map(link => `<a href="${esc(link.href)}">${esc(link.label)}</a>`).join(' · ');
  return `<div id="root"><div id="prerender-fallback"><h1>${esc(meta.h1)}</h1><p>${esc(lead)}</p>${links ? `<nav aria-label="Explore Ubud massage">${links}</nav>` : ''}</div></div>`;
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

// ---- sitemap.xml, generated from the manifest ------------------------------
const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  listed
    .map((p) => `  <url>\n    <loc>${urlFor(p)}</loc>\n    <lastmod>${LAST_MOD}</lastmod>\n  </url>`)
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemapXml);

// ---- 404.html: real 404, not a soft copy of the homepage -------------------
const notFound = stripHeadTags(shell)
  .replace(
    '</head>',
    `
    <title>Page not found | ${BRAND}</title>
    <meta name="robots" content="noindex, follow" />
    ${FALLBACK_STYLE}
  </head>`
  )
  .replace(
    /<div id="root"><\/div>/,
    `<div id="root"><div id="prerender-fallback"><h1>Page not found</h1><p>This page does not exist on ${BRAND}. Try the <a href="/">homepage</a> or the <a href="/sitemap">sitemap</a>.</p></div></div>`
  );
writeFileSync(join(DIST, '404.html'), notFound);

// ---- gate 3: prove the output ---------------------------------------------
const checks = ['/', '/ubud/deep-tissue-massage', '/pricing'];
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
  const want = urlFor(p);
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

const out404 = readFileSync(join(DIST, '404.html'), 'utf8');
if (!/name="robots" content="noindex/.test(out404) || /rel="canonical"/.test(out404)) {
  console.error('prerender: 404.html is not a clean noindex 404');
  process.exit(1);
}
if (/http-equiv="refresh"/i.test(out404)) {
  console.error('prerender: 404.html still carries the GitHub Pages redirect hack');
  process.exit(1);
}

const outSitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const outLocs = [...outSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (outLocs.length !== listed.length) {
  console.error(`prerender: sitemap has ${outLocs.length} locs, manifest lists ${listed.length}`);
  process.exit(1);
}
for (const loc of outLocs) {
  const p = loc.replace(SITE, '') || '/';
  if (manifest[p] && manifest[p].sitemap === false) {
    console.error(`prerender: unlisted route in sitemap: ${p}`);
    process.exit(1);
  }
}

console.log(`prerender: ${written} route files written, ${listed.length} sitemap locs, 404.html written`);
console.log(`prerender: canonical host ${SITE} · unlisted ${unlisted.length}${unlisted.length ? ' (' + unlisted.join(', ') + ')' : ''}`);

// ---- host honesty ----------------------------------------------------------
// The build cannot change the platform redirect. Say out loud when the canonical
// host is not the host that answers 200, so no report can call it clean.
//
// This guard used to read SERVED_HOST and nothing else. SERVED_HOST is set
// nowhere in this repo, so the branch never fired and the guard was decoration
// (found by the Chief of Staff 2026-11-01 against merge e899eb0). It now learns
// the served host from Vercel's own build environment, FAILS CLOSED on a Vercel
// build when it cannot learn it, and writes its verdict to
// dist/seo-host-check.json so the verdict survives to something that can be
// curled — the build log alone is not readable from the SEO workstation.
const host = new URL(SITE).host;

function normaliseHost(value) {
  if (!value) return undefined;
  const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    return new URL(withScheme).host.toLowerCase();
  } catch {
    return undefined;
  }
}

const servedCandidates = [
  ['SERVED_HOST', normaliseHost(process.env.SERVED_HOST)],
  ['VERCEL_PROJECT_PRODUCTION_URL', normaliseHost(process.env.VERCEL_PROJECT_PRODUCTION_URL)],
  ['VERCEL_URL', normaliseHost(process.env.VERCEL_URL)],
];
const [servedSource, servedHost] = servedCandidates.find(([, v]) => v) || [null, undefined];

const onVercel =
  process.env.VERCEL === '1' || Boolean(process.env.VERCEL_ENV) || Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL);

if (onVercel && !servedHost) {
  console.error(
    'prerender: FAIL — host honesty guard could not resolve the served host from SERVED_HOST, ' +
      'VERCEL_PROJECT_PRODUCTION_URL or VERCEL_URL. A guard with no input is decoration; refusing to build green.'
  );
  process.exit(1);
}

const matches = servedHost ? servedHost === host : null;
const hostCheck = {
  canonicalHost: host,
  canonicalOrigin: SITE,
  servedHost: servedHost || null,
  servedHostSource: servedSource,
  matches,
  defect: matches === false ? 'D-1' : null,
  environment: process.env.VERCEL_ENV || (onVercel ? 'vercel-unknown' : 'local'),
  checkedAt: new Date().toISOString(),
};
writeFileSync(join(DIST, 'seo-host-check.json'), JSON.stringify(hostCheck, null, 2) + '\n');

if (matches === false) {
  console.warn(
    `prerender: WARNING DEFECT-D-1 — canonical host ${host} is NOT the served host ${servedHost} ` +
      `(source ${servedSource}). Every canonical and sitemap loc points at a redirect until the ` +
      'platform primary domain is flipped. docs/seo/KNOWN-DEFECTS.md'
  );
} else if (matches === true) {
  console.log(`prerender: host check OK — canonical host ${host} is the served host (source ${servedSource}).`);
} else {
  console.log(`prerender: host check UNARMED — no served host known from env (SITE_ORIGIN=${SITE}). Local build.`);
}
