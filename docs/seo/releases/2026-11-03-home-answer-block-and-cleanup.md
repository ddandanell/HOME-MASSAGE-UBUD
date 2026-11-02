# Release — site-007 answer block on `/`, console and favicon cleanup

Date: 2026-11-03, 06:26–06:41 +08 (2026-11-02 22:26–22:41 UTC)
Operator: Home Massage Ubud SEO (site-007). Verified on `www.homemassageubud.com` — the host that answers 200. Not a preview host, not a local build.

## Two releases, both on main

| # | PR | head SHA | merge SHA | Vercel production deployment | state | deployed |
|---|---|---|---|---|---|---|
| 1 | [#93](https://github.com/ddandanell/HOME-MASSAGE-UBUD/pull/93) | `c68c2d6ce6cc0bb93bdd620cc11deb89f869d63b` | `90766785fe4f605bb416a54c1360effe1f33fc90` | `7505078564` | success | 2026-11-02 22:31:13Z (06:31 +08) |
| 2 | [#94](https://github.com/ddandanell/HOME-MASSAGE-UBUD/pull/94) | `e41dd55015d7125978d1571d57847cab04067499` | `a9cda3d99d279b8a72aa0836b6162fab9e83f489` | `7505182793` | success | 2026-11-02 22:36:50Z (06:36 +08) |

Both merges were made on the exact head SHA (the API call sends `sha`, so GitHub rejects a moved head).

## Release 1 — content depth on the page that earns the clicks

Priority rule: one page per run, clicks then impressions, GSC `sc-domain:homemassageubud.com`, page dimension, web, 2026-08-05..2026-11-02. Top of that list: `/` 22 clicks / 1,751 impressions; `/services/mobile-massage` 16 / 421; `/lovina` 13 / 168; `www/nail-care` 13 / 437. `/` is first and holds the largest impression pool, so it took the run.

Changed:

- `client/src/data/route-meta.json` — `/` gains an `answer`: 55 words, 57 whitespace tokens, 350 characters.
- `client/src/components/EnhancedHero.tsx` — that string renders directly under the `h1`; the old subtitle ("…Best massage in Ubud by licensed therapists…") is gone; four links follow the block to `/pricing`, `/ubud/traditional-balinese-massage`, `/ubud-luxury-villas`, `/service-areas`.
- `scripts/prerender.mjs` — the fail-closed gate now enforces CONT-003 (40–60 words, ≤420 chars) on any route carrying `answer`, and the prerendered fallback body uses it as the lead paragraph, so the no-JavaScript HTML and the hydrated page carry the same words.

Measured live after deployment, `www`, 2026-11-03 06:31 +08:

- `/` 200, one `h1`, one canonical `https://homemassageubud.com/`, one description, answer paragraph in the raw HTML immediately after `</h1>`.
- Rendered at 390×844 in Chrome: 57 words in the block, four internal links with the right hrefs, `scrollWidth` 390 against viewport 390, one `h1`, one canonical.
- The four link targets each answer 200 and each is a sitemap URL.

Claims check on the new copy: the coverage list ("Ubud centre, Sayan, Penestanan, Tegallalang and Sidemen") repeats what `/service-areas` already publishes; "thirteen treatments" matches the 13 `/ubud/*` treatment pages. No price, no rating, no review count, no superlative, no medical claim. Nothing was invented.

## Release 2 — the console error and the 404s found while verifying release 1

- `client/index.html` carried `<link rel="modulepreload" href="/src/main.tsx">`. Vite inlined it as `data:application/octet-stream;base64,…` and Chrome refused it on every one of the 157 URLs (`Failed to load module script … MIME type of "application/octet-stream"`). Removed. The real entry `/assets/js/index-*.js` serves `application/javascript` 200.
- Four icon links pointed at files that do not exist in `client/public` (`favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`); `/favicon.ico` was a measured 404 on every page. Replaced by the inline SVG icon already in the head and `apple-touch-icon` → `/icon-192x192.svg`. No image was produced.
- `docs/seo/CLAIMS.md` — new row C-10 for the homepage badge `#1 Rated In-Villa Massage Service` (superlative, no source; already inside the scope of open decision D-03). Logged, not deleted.

Measured live after deployment, 2026-11-03 06:37 +08: no `data:application/octet-stream` in the HTML, no `favicon.ico` reference, one SVG icon link plus the apple-touch icon, browser console clean apart from the GA `collect` request headless Chrome aborts. `/` 13,195 B (13,874 B after release 1, 13,669 B before both).

## Not shipped, deliberately

- **www→apex 308: not added.** `https://homemassageubud.com/` still answers **307** to `https://www.homemassageubud.com/` (measured 2026-11-03 06:37 +08, unchanged since 2026-11-01). A rules-based redirect before David flips the Vercel primary domain would loop. Open as D-06.
- **No 301, no delete, no `noindex`** of any URL with clicks. The South-Bali, micro-site and `/services/*` consolidation stays on hold by the ≥1-click rule.
- **No price changed.**

## Findings logged for the next runs

- **F-1** The prerendered fallback body carries the answer paragraph but not the four internal links; a crawler that does not execute JavaScript sees text with no onward path. Google renders JS, so this is an improvement, not a defect — but the fallback should carry the link list too.
- **F-2** The `/` `h1` differs between the two heads: manifest `In-Villa Massage Ubud | 7am–10pm Daily`, hydrated hero `Ubud Massage – Professional In-Villa Service / Traditional Balinese Healing at Your Villa`. One `h1` either way, two strings. Reconcile next run.
- **F-3** `client/src/pages/near-me-massage/NearMeMassageHub.tsx` carries `"ratingValue": "4.9"` in a JSON-LD block. No router imports the component, so nothing renders it today; it is a trap for whoever wires that page up. No `aggregateRating` exists in the live JSON-LD on `/`, `/pricing` or `/services/mobile-massage` (checked 2026-11-03 06:39 +08), so C-05 stays closed.

## Rollback

Revert `90766785` and/or `a9cda3d9`. Three code files, one manifest key, two documents; no data migration, no redirect, no Vercel configuration.
