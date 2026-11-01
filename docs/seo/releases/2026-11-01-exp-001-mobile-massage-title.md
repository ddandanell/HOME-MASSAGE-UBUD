# Release 2026-11-01 — EXP-007-001, exact-phrase title on /services/mobile-massage

Pilot measured loop, step 2 (T-0001, Chief of Staff, 2026-11-01). Operator: Home Massage Ubud SEO.
Model: DeepSeek V4.1 Flash. Cost 0.00, no paid tier.

## What shipped

One entry in `client/src/data/route-meta.json`, route `/services/mobile-massage`:

| field | before | after |
|---|---|---|
| title | `Mobile Massage Ubud \| We Come to You \| Home Massage Ubud` (56) | `Home Massage Service Ubud \| Mobile Massage to Your Villa` (56) |
| description | unchanged (147) | unchanged (147) |

Nothing else changed: no body copy, price, hours, claim, route, canonical, robots directive or sitemap entry. `route-meta.json` is the single source of truth for both surfaces — `scripts/prerender.mjs` writes it into the served HTML and `SEOHead.tsx` reads the same manifest after hydration, so the two cannot drift.

## Gate (local, before push)

`npm run build` green on 2026-11-01 20:31 (+08):

- 157 route files written, 154 sitemap locs, 404.html written.
- Every title 50–60 and unique (157 unique of 157); every description 122–155.
- Unlisted routes unchanged: `/blog/premium-home-massage-kuta`, `/kuta`, `/villa-massage/cities/kuta`.
- Host check reported `UNARMED` — correct for a local build with no served-host env, by design since PR #86.
- Dist output for this route inspected directly: title 56, description 147, canonical `https://homemassageubud.com/services/mobile-massage`, one `<h1>`.

## Release

- PR **#91**, head `578ab0872f4bdd13667000ce0c5cee8e2bec3093`, base `2a49f9a6042e392cecc5d5257b8e469f5e6aec1a`, 1 file, +1/−1.
- Merged 2026-11-01T12:36Z (**20:36 +08**), merge commit **`6e4bf32f81ff1b41853f106b6af405dfab860f2d`**. `origin/main` verified at that SHA after the merge.

## Live verification on the canonical domain, 20:37 (+08) / 12:37Z

Fetched from `https://www.homemassageubud.com` — never a preview host, never the apex (DEFECT-D-1 is still open; the apex 307s to www).

| check | result |
|---|---|
| `GET /services/mobile-massage` | 200, 13,736 B, `<title>Home Massage Service Ubud \| Mobile Massage to Your Villa</title>` (56) |
| description | 147 chars, unchanged |
| canonical | `https://homemassageubud.com/services/mobile-massage`, exactly one |
| h1 | exactly one, `Mobile Massage – We Come to Your Location` |
| hydrated DOM (headless Chrome, 390×844, JS run) | title identical to the prerendered title (56), description identical, 1 canonical, 1 h1 |
| visible `5.0 Rating` | 0 occurrences |
| `aggregateRating` | 1 occurrence, inside an HTML comment in `<head>`, not in the JSON-LD graph — unchanged from the QA baseline |
| `GET /sitemap.xml` | 200, 154 locs, one host, 0 Kuta locs |
| `GET /robots.txt` | one Sitemap line, apex, unchanged |
| `GET /seo-host-check.json` | `checkedAt 2026-11-01T12:33:13.463Z`, source `VERCEL_PROJECT_PRODUCTION_URL`, served `www.homemassageubud.com`, canonical `homemassageubud.com`, `matches:false`, `defect: D-1`, `environment: production` |

## Deploy identity — what is proved and what is not

- **Proved:** the served HTML contains a title string that exists only in commit `578ab08` / merge `6e4bf32`, and `/seo-host-check.json` carries a build stamp of `2026-11-01T12:33:13.463Z`, which is after the merge. A new production build therefore ran and is answering on www. This is content-addressed proof, stronger than a deployment id.
- **Not proved:** the Vercel deployment id and its READY state for this project. The Vercel connector in this space is scoped to a different project (`bali-villa-books-api-serverff`); asking it for this project returns another project's deployments, and `GITHUB_LIST_DEPLOYMENTS` returns no deployment records for this repo on `main` or on the merge SHA. That is the same access gap behind D-05/D-12, recorded rather than papered over.

## Measurement

Do not read anything before 2026-11-08. Baseline and the pre-committed bar, labels and confounds: `shared/seo-ops/reports/site-007-baseline-2026-11-01.md` and `shared/seo-ops/reports/site-007-experiment-001-mobile-massage-head-2026-11-01.md`.

- Interim read (Chief's loop): window 2026-11-08 .. 2026-11-14, read 2026-11-15.
- Formal verdict, house rule +28 days: 2026-11-29.
- Clicks are Google organic clicks, not visitors. No GA4 on this property; no session, lead or booking number exists or is claimed.

## Findings raised, not fixed here

Observed while choosing the target; none of them is in this change, and each needs a decision or a separate change:

1. **`/services/mobile-massage` quotes different prices from `/pricing`** — this page: 60 min Rp 380,000, 90 min Rp 390,000, 120 min Rp 450,000 (a 90-minute session only Rp 10,000 above 60 while 120 is Rp 450,000); `/pricing`: 60-minute Balinese from 320k, 90-minute from 450k. One of the two pages is wrong for at least one package. Prices are a commercial fact I will not invent — David's call.
2. **Opening hours contradict within one page** — the prerendered description says `7am–10pm daily` while the body says `8 AM to 10 PM` in the introduction and in a why-choose bullet. The schema says 07:00–22:00. Aligned only in the metadata (unchanged); the body was left alone in this release to keep the experiment single-variable.
3. **A named 5-star testimonial is rendered on service pages** from `whyChooseTestimonial` data (e.g. "Emma & Ryan", rating 5) with no source on file, and the schema builder has a `Review`/`ratingValue` path. GSC still reports "Review snippets ... PASS" for /ubud pages from crawls dated 2026-08..10, i.e. before the 2026-11-01 rating removal. This is the D-03 axis: evidence or removal, David's answer.
4. **Island-wide coverage claims** on this page name Seminyak, Canggu, Uluwatu, Sanur and Nusa Dua — site-002's territory in the binding geo split. Overlap means the fleet pays twice for one position.
5. **`metaTitle` / `metaDescription` fields in page components are dead code** since PR #89: `SEOHead` always prefers `route-meta.json`. They read as authoritative and are not; anyone editing them will change nothing and believe they shipped.
