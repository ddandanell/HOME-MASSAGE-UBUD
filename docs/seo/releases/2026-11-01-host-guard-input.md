# Release — host honesty guard gets an input (DEFECT-D-3)

- **Date:** 2026-11-01, 15:02 (+08) / 07:02Z
- **Site:** site-007 `homemassageubud.com`
- **Operator:** Home Massage Ubud SEO
- **Trigger:** Chief of Staff review of merge `e899eb0`, 2026-11-01, finding that the DEFECT-D-1
  warning at `scripts/prerender.mjs:278` had no input and had never fired.
- **Preceding merge:** `e899eb0` (PR #85)
- **PR:** #86 · **branch head:** `11ae2b9` · **merge commit:** `bbfa942` (merged 2026-11-01T07:02:18Z)
- **Vercel production deployment:** `4Rhev4jqnpRQgAem1kUu6wXgmjvn`, state `success`, 2026-11-01T07:02:46Z
- **Scope:** one script, one doc. No copy, no routes, no titles, no canonicals, no redirects.

## The finding, restated

`SERVED_HOST` is set nowhere in the repository — not `vercel.json`, not `package.json`
(`build` = `vite build && node scripts/prerender.mjs`), not any workflow. The guard was
`if (process.env.SERVED_HOST && process.env.SERVED_HOST !== host)`, so it evaluated false on every
build and the `else` branch printed `canonical host … (DEFECT-D-1 tracked in docs/seo/KNOWN-DEFECTS.md)`.
A reader saw a line about the canonical host and a defect id; it looked like a pass. The statement
"this cannot be reported green again" was not true when it was written.

## The change

`scripts/prerender.mjs`, host-honesty block:

1. **Serve host resolved from three sources, in order:** `SERVED_HOST` → `VERCEL_PROJECT_PRODUCTION_URL`
   → `VERCEL_URL`. All three normalised through `new URL()` to a bare host, so a value with or
   without a scheme works.
2. **Fail closed on a Vercel build with no resolvable host:** `process.exit(1)`, message
   `host honesty guard could not resolve the served host … A guard with no input is decoration;
   refusing to build green.` Vercel is detected by `VERCEL=1`, `VERCEL_ENV`, or
   `VERCEL_PROJECT_PRODUCTION_URL`. A local build with no env vars stays `UNARMED` and does not fail.
3. **Verdict published, not just logged:** `dist/seo-host-check.json` carries `canonicalHost`,
   `canonicalOrigin`, `servedHost`, `servedHostSource`, `matches`, `defect`, `environment`,
   `checkedAt`. It is served in production at `/seo-host-check.json`. This exists because the build
   log is not readable from the SEO workstation — Vercel read access is denied — so a guard whose
   only output is a log line cannot be verified by the person who owns the defect.
4. **Three distinct log outcomes:** `WARNING DEFECT-D-1` on mismatch (with both hosts and the source),
   `host check OK` on match, `host check UNARMED` on a local build.

## Why a mismatch is still a warning and not a build failure

Failing the build on mismatch would block every deploy until David flips the Vercel primary domain,
turning a platform setting into a hostage on my work queue. The guard's job is to make the defect
visible and impossible to call green — which it now does — not to punish the deployment for a
decision it cannot make.

## Test matrix, run locally 2026-11-01 15:01 (+08)

| Environment | Expected | Observed |
|---|---|---|
| no env vars | `UNARMED`, `matches: null`, exit 0 | as expected |
| `VERCEL=1 VERCEL_ENV=production`, no host | exit 1, `FAIL … refusing to build green` | as expected |
| `VERCEL_PROJECT_PRODUCTION_URL=www.homemassageubud.com` | `WARNING DEFECT-D-1`, `matches: false`, `defect: D-1` | as expected |
| `SERVED_HOST=homemassageubud.com` | `host check OK`, `matches: true` | as expected |

Also re-ran the full local build: `157 route files written, 154 sitemap locs, 404.html written`,
unchanged from `e899eb0`.

## Docs

`docs/seo/KNOWN-DEFECTS.md`: DEFECT-D-1 gains the guard paragraph and the published-verdict URL;
new **DEFECT-D-3** records the no-input guard, the finding, the four-way test and the residual limit,
and is marked CLOSED on this date.

## What this release does not do

It does not close DEFECT-D-1. The apex still answers 307 → www. That needs the Vercel primary domain
flipped, which is David's action and was already logged in D-1 with the acceptance test.

Cost 0.00. No image, no paid API.

## Verified live after the deploy — 2026-11-01 15:05 (+08), host www

The point of the release is that the guard now speaks in production, and it does:

```
GET https://www.homemassageubud.com/seo-host-check.json   200, 308 B, application/json
{
  "canonicalHost": "homemassageubud.com",
  "canonicalOrigin": "https://homemassageubud.com",
  "servedHost": "www.homemassageubud.com",
  "servedHostSource": "VERCEL_PROJECT_PRODUCTION_URL",
  "matches": false,
  "defect": "D-1",
  "environment": "production",
  "checkedAt": "2026-11-01T07:02:44.741Z"
}
```

`servedHostSource` is the proof that the fix is real: the host was resolved from Vercel's own build
environment, not from a variable nobody sets. `matches: false` and `defect: "D-1"` are the defect,
stated by the deployment about itself, on the public web, on every production build.

Nothing else moved:

| Probe | Result |
|---|---|
| `/` | 200, 13,669 B, `In-Villa Massage Ubud \| 7am–10pm Daily \| Home Massage Ubud` |
| `/pricing` | 200, `Ubud Massage Prices \| What You Pay \| Home Massage Ubud` |
| `/services/mobile-massage` | 200, `Mobile Massage Ubud \| We Come to You \| Home Massage Ubud` |
| `/ubud/lymphatic-drainage-massage` | 200, own title, canonical on apex, one `<h1>` |
| `/lovina` | 200, `Massage in Lovina \| Villa Delivery \| Home Massage Ubud` |
| `/nonexistent-xyz-123`, `/sitemap-foobar.xml` | 404, 9,767 B, `Page not found \| Home Massage Ubud` |
| `/sitemap.xml` | 154 locs, hosts `['homemassageubud.com']`, Kuta locs `[]` |
| `/robots.txt` | one line: `Sitemap: https://homemassageubud.com/sitemap.xml` |
| apex `/` | 307 → `https://www.homemassageubud.com/` — DEFECT-D-1 unchanged, still with David |

## Open after this release

- **DEFECT-D-1** — unchanged. Needs the Vercel primary domain flipped to the apex.
- **Rikke's independent rendered pass** — requested on merged head `bbfa942` (the Chief of Staff's
  finding that PR #85 merged 8 seconds after it opened with no independent verdict). Not a
  substitute for this record; it is a separate input and her verdict stands or falls on its own.

## Record corrections — Chief of Staff review, 2026-11-01 15:03–15:09 (+08)

The release itself stands; three statements around it were corrected. Recorded here rather than
edited into the sections above, so the first version and the correction both remain readable.

1. **The proof quoted a stale `checkedAt`.** `07:02:44.741Z` was the verdict of deployment
   `4Rhev4jqnpRQgAem1kUu6wXgmjvn`. PR #87's merge (`4436588`, 07:05:03Z) triggered a second production
   build, so the served file then read `07:05:33.334Z`; PR #88 and PR #89 triggered two more. Served
   2026-11-01 15:33 (+08), twice three seconds apart, it reads
   `"checkedAt": "2026-11-01T07:29:41.997Z"` on deployment `Ssb7Ka1chUbpoadG7iyh6DzMpKEt`. The
   stationarity across two requests is the proof the file is build-time, not per-request; the
   timestamp itself identifies a build, so a verdict is cited with its deployment id.
2. **Fail-closed cannot fire in production.** `VERCEL_URL` is always set on a Vercel build, so the
   host always resolves and `process.exit(1)` is unreachable there; that branch is proven by local
   simulation only. The branch observed firing with real inputs is `matches: false` / `defect: "D-1"`.
   This is the §15 rule applied to itself.
3. **"Public" was the wrong word.** `robots.txt` carries `Disallow: /*.json$` for `User-agent: *`, so
   `/seo-host-check.json` is readable by curl and by a human and is not offered to crawlers. It is an
   operator and reviewer artifact, not a crawlable page. Nothing on the site depends on a crawler
   reading it.

One consequence worth recording: a docs-only merge is a production build on this project, so every
documentation merge moves `checkedAt`. That is not a defect, but it is why the deployed-verdict file
must never be quoted as "what the site currently says" without naming the deployment.
