# site-007 homemassageubud.com — known defects

A defect is listed here when it is real, measured, and not fixable inside the deployment.
Each one carries its evidence, its blast radius, and the single action that closes it.
Nothing in this file is aspirational: if a defect is fixed, its line moves to the release record.

---

## DEFECT-D-1 — canonical host and served host disagree (OPEN, owner: David)

**Measured 2026-11-01 14:55 (+08), live:**
`https://homemassageubud.com/` → `307` → `https://www.homemassageubud.com/` → `200`.

**What that means:** every one of the 157 prerendered routes carries a canonical on the apex, and all
154 sitemap locs are on the apex, but the apex answers 307 to www. So every canonical and every
sitemap entry currently names a URL that redirects. That is a redirected canonical, not a
self-referential one, and it may not be described as self-referential until the host matches.

**Blast radius, measured in Search Console 2026-08-03..2026-11-01:** Google has the same pages
indexed on both hosts, with the signals split. Examples — `/amed` apex 10 clicks / 192 impressions
plus www 2 clicks / 64 impressions; `/legian` apex 4 / 54 plus www 4 / 54; `/nail-care` www only
14 / 445. There is also an `http://homemassageubud.com/` row (13 impressions). The 307 is a
*temporary* redirect, which is why Google keeps both hosts rather than consolidating.

**Why the deployment cannot close it:** the apex→www redirect is applied by the Vercel project's
domain configuration before the deployment's own routing runs. Adding a www→apex redirect inside
`vercel.json` would loop against it. Verified: `vercel.json` contains no host redirect.

**How the deployment is built for the fix:** `scripts/prerender.mjs` reads one variable,
`SITE_ORIGIN` (default `https://homemassageubud.com`). It writes the canonicals, `og:url` and the
generated `sitemap.xml` from it. Flipping the host is one env var or one string change and one
build; no other file hardcodes it.

**Action that closes it (David):** set the Vercel primary domain to the apex and make www → apex a
single permanent 308. Then the apex answers 200, the 157 canonicals and 154 sitemap locs are already
correct, and nothing else needs to change.

**The guard that watches it, and why it now works:** `scripts/prerender.mjs` resolves the served
host from `SERVED_HOST`, then Vercel's own `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL`; on a
Vercel build it **fails the build** if it cannot resolve one; and it publishes its verdict at
`https://www.homemassageubud.com/seo-host-check.json` so the verdict can be curled instead of
asserted. On the release of 2026-11-01 15:0x (+08) that file reads
`matches: false, defect: "D-1", servedHostSource: "VERCEL_PROJECT_PRODUCTION_URL"` — the defect is
now visible from the outside, on every production build, with no human in the loop.
Previously the guard read `SERVED_HOST` only, and `SERVED_HOST` is set nowhere in this repo: it had
never fired and could not fire. See DEFECT-D-3.

**Acceptance test:** `curl -sI https://homemassageubud.com/` returns `200`, `curl -sI
https://www.homemassageubud.com/` returns `308` with `location: https://homemassageubud.com/...`.

---

## DEFECT-D-2 — stale family sitemaps and a soft-404 catch-all (CLOSED 2026-11-01, see release record)

Was: nine stale sitemap files (`sitemap-index.xml` and eight `sitemap-*.xml`, all `lastmod
2026-01-20`) were deployed, three of them listing Kuta URLs; and `vercel.json` rewrote `/(.*)` to
`/`, so every unknown path — `/nonexistent-xyz-123`, `/sitemap-foobar.xml` — answered `200` with the
homepage. Closed by: generating `sitemap.xml` from the manifest, deleting the stale files, deleting
the GitHub-Pages redirect stub at `404.html`, and removing the catch-all rewrite so Vercel serves a
real `noindex` 404.

---

## DEFECT-D-3 — the DEFECT-D-1 guard had no input and could not fire (CLOSED 2026-11-01)

**Found by:** Chief of Staff, 2026-11-01, reviewing merge `e899eb0`.

**Was:** `scripts/prerender.mjs:278` warned only when `process.env.SERVED_HOST` was set, and
`SERVED_HOST` is set nowhere — not `vercel.json`, not `package.json` (`build` is
`vite build && node scripts/prerender.mjs`), not any workflow. So the `else` branch always ran and
printed `canonical host … (DEFECT-D-1 tracked in docs/seo/KNOWN-DEFECTS.md)`, which read like a
pass. The claim that the host problem "cannot be reported green again" was therefore not true.

**Closed by:** the served host is now resolved from `SERVED_HOST` → `VERCEL_PROJECT_PRODUCTION_URL`
→ `VERCEL_URL`; a Vercel build with none of the three **fails closed** (`process.exit(1)`); the
verdict is written to `dist/seo-host-check.json`. Tested four ways locally on 2026-11-01 15:01 (+08):

| Environment | Result |
|---|---|
| no env vars, local build | `UNARMED`, `matches: null`, build succeeds |
| `VERCEL=1 VERCEL_ENV=production`, no host | `FAIL — … refusing to build green`, exit 1 |
| `VERCEL_PROJECT_PRODUCTION_URL=www.homemassageubud.com` | `WARNING DEFECT-D-1`, `matches: false`, `defect: "D-1"` |
| `SERVED_HOST=homemassageubud.com` | `host check OK`, `matches: true` |

**Residual limit, stated plainly:** the mismatch itself is still a warning, not a build failure.
Failing the build on a mismatch would block every deploy until David flips the primary domain, which
would make the defect worse, not better. The warning is now loud, unavoidable in the log, and
machine-readable at `/seo-host-check.json`.
