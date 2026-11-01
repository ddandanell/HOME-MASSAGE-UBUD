# Release record — site-007 static per-route head + Kuta contamination removal

- Date: 2026-11-01 (+08), 13:20–13:41
- Site: site-007 `homemassageubud.com`
- Repo: `ddandanell/HOME-MASSAGE-UBUD`
- PRs: #82 (prerender, head `fbb2237`), #83 (Kuta removal, head `16c0020`)
- Squash-merged to main: `46d7757` (#83), `3940296` (#82)
- Vercel production deployment READY on `3940296` — deployment `7469124316`, status `success`, 2026-11-01T05:39:48Z
- Live verification: 2026-11-01 13:41 (+08) on `www.homemassageubud.com` (the host that serves; canonical target is apex)

## Why

All 157 URLs returned the same 16,255-byte React shell: one title, one description, one canonical pointing at the homepage, zero `<h1>`, 11 words of body text. Per-route tags were written by react-helmet-async after JavaScript ran. The Ubud host also served three Kuta sitemap files and advertised one in robots.txt.

## What shipped

1. **Static per-route head.** `client/src/data/route-meta.json` holds one title (50–60 chars), one description (120–155) and one h1 for each of the 157 sitemap URLs. `scripts/prerender.mjs` runs after `vite build` and writes `dist/<route>.html` with that route's title, description, self-referential canonical, OG/Twitter tags and JSON-LD (`HealthAndBeautyBusiness` + `WebPage`), plus a static `<h1>` and lead paragraph inside `#root` that React replaces on mount. `SEOHead` reads the same manifest so the static and rendered head cannot diverge.
2. **Build gates (fail-closed).** A missing manifest entry, a sitemap URL without a route, a duplicate title, a title outside 50–60, a description outside 120–155, a missing h1, or a generated file with the wrong canonical fails the build — no deploy.
3. **Kuta contamination removed.** `sitemap-kuta.xml` (152 locs), `sitemap-kuta-index.xml` (10), `sitemap-kuta-pages.xml` (16) deleted; the `Sitemap: https://homemassagekuta.com/...` line removed from `robots.txt`; the three deleted paths 308 to `/sitemap.xml` so they cannot fall through the SPA rewrite as HTML.
4. **`index.html` cleanup.** Removed the client-injected LocalBusiness script, which contained a full **Kuta** LocalBusiness schema served from the Ubud host, and the placeholder `google-site-verification` meta. GA4 tags untouched.
5. **Copy.** Titles/metas written for the pages that earn clicks in GSC 2026-08-03..2026-11-01 (homepage, `/pricing`, `/nail-care`, `/services/mobile-massage`, `/services/sports-massage`, the 13 `/ubud/*` treatments, Ubud and North/East Bali geo pages); long-tail titles normalised to the same ranges. Prices unchanged.

## Live verification (measured, 2026-11-01 13:41 +08)

| URL | Status | Bytes | Title length | Canonical | `<h1>` |
|---|---|---|---|---|---|
| `/` | 200 | 13,649 | 58 | `https://homemassageubud.com/` | yes |
| `/pricing` | 200 | 13,663 | 54 | `/pricing` | yes |
| `/services/mobile-massage` | 200 | 13,736 | 56 | `/services/mobile-massage` | yes |
| `/home-massage/cities/ubud` | 200 | 13,682 | 58 | `/home-massage/cities/ubud` | yes |
| `/ubud/deep-tissue-massage` | 200 | 13,774 | 57 | `/ubud/deep-tissue-massage` | yes |
| `/kuta` | 200 | 13,611 | 60 | `/kuta` | yes |
| `/ubud-centre` | 200 | 13,707 | 57 | `/ubud-centre` | yes |

- `/sitemap.xml` → 200, 157 locs. `/sitemap-kuta.xml` → 308 `/sitemap.xml`. `/robots.txt` → no Kuta reference.
- Unknown paths (`/bali`) fall through the SPA rewrite and serve the homepage head; they should 404 or carry `noindex` — open item.
- Host chain unchanged this release: `http://` → 308 https; `https://homemassageubud.com/` → **307** → `https://www.homemassageubud.com/` → 200. The 307 still tells Google to keep the old URL; the apex/www fix is the next item and needs the Vercel primary-domain change.

## Decisions taken this run

- **No 301s yet, on evidence.** 90 days of GSC page data (2026-08-03..2026-11-01) show the pages slated for consolidation are the ones earning clicks: `/services/mobile-massage` 16 clicks, `/lovina` 15, `/nail-care` 14, `/uluwatu` 11, `/amed` 10, `/services/sports-massage` 10, `/ubud/lymphatic-drainage-massage` 6, against the homepage's 25. Redirecting a zero-replacement set now would delete the site's earned clicks. Rule applied: a URL with ≥1 click in 90 days is not redirected until its replacement exists.
- **GA4 tag question answered from the code, not from access.** `index.html` fires `G-TXREJ9CP15` only on the Ubud hosts and `G-B8P4D8WGLK` only on the Kuta hosts. So `G-TXREJ9CP15` is the Ubud property; `G-B8P4D8WGLK` is dead code on this deployment and is the Kuta property. Read access is still missing, so no traffic claim is made.
- **`aggregateRating` 5.0 / 500 reviews is not in the prerendered schema.** It is an unsourced claim in the old client-injected block; it needs evidence before it goes back into structured data.
- **www→apex redirect deliberately not added.** A rules-based redirect now would loop against Vercel's platform-level apex→www 307. It ships with the primary-domain change.

## Cost

$0. No image requests, no paid APIs, no subagents.
