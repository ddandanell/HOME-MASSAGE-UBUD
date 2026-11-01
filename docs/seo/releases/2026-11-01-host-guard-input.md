# Release — host honesty guard gets an input (DEFECT-D-3)

- **Date:** 2026-11-01, 15:0x (+08) / 07:0xZ
- **Site:** site-007 `homemassageubud.com`
- **Operator:** Home Massage Ubud SEO
- **Trigger:** Chief of Staff review of merge `e899eb0`, 2026-11-01, finding that the DEFECT-D-1
  warning at `scripts/prerender.mjs:278` had no input and had never fired.
- **Preceding merge:** `e899eb0` (PR #85)
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
