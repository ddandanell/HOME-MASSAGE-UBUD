# Release 2026-11-01 — independent-QA must-fixes (PR #88, PR #89)

Operator: Home Massage Ubud SEO. Site: site-007, homemassageubud.com.
QA source: Rikke, independent QA, report `shared/seo-ops/reports/site-007-pr85-retrospective-qa-2026-11-01.md`, checked 2026-11-01 15:04–15:10 +08 against merged heads e899eb0 / bbfa942.

## PR #88 — merge `18df04b6`, 2026-11-01T07:23:35Z

Vercel production deployment `hTtQdB233rBGumD2awpZdo2UWci8`, READY, host-check written 07:24:03Z.

| QA must-fix | Cause found | Fix | Measured after |
|---|---|---|---|
| Homepage H1 changes on hydration (two DOM H1s) | `client/src/components/SEOContent.tsx`, a `sr-only` `aria-hidden` keyword block with its own `<h1>`, mounted only after React | Component deleted; import and usage removed from `Home.tsx` | 1 `<h1>` in the rendered DOM |
| `/kuta`, `/lovina` scroll to 467px at 390px | Final CTA in `AreaPageTemplate`: `min-w-[300px]` over the Button base `whitespace-nowrap`, label `Book via WhatsApp: +62 811-2656-869`, button measured 451px | `w-full sm:w-auto sm:min-w-[300px] max-w-full whitespace-normal break-words h-auto py-3` | `scrollWidth` 390 on both |
| Visible `5.0 Rating` with no rating in JSON-LD | Hard-coded in three templates | Removed from `AreaPageTemplate`, `TreatmentPageTemplate`, `ServiceLandingPageTemplate`; nothing invented to replace it | No `5.0 Rating` anywhere in the tree or the rendered page |

## PR #89 — see the record appended below on merge

| QA must-fix | Cause found | Fix |
|---|---|---|
| Two canonical tags after hydration (all routes) | `react-helmet-async` appends its own head tags; it does not merge with the prerendered ones | `SEOHead.tsx` removes prerendered head tags that helmet does not own (no `data-rh`) on first mount. Helmet keeps managing them on client-side navigation; with JS off the prerendered tags remain |
| Broken image on `/services/mobile-massage` (`/attached_assets/massage-therapy-hero.jpg`, 404, 9,767 B HTML) | Five hard-coded `/attached_assets/` paths; that directory is not served | Bundled `@/assets/massage-therapy-hero.jpg` imported and used |
| Medical claims on `/ubud/lymphatic-drainage-massage` (body, FAQ, hydrated `Service.description`) | Copy written as efficacy claims: "remove toxins", "boost immune function", "accelerates post-surgery recovery", "detoxification" | Rewritten as what the treatment physically is (light pressure, slow strokes, in-villa) plus a medical disclaimer. Prices, durations and availability unchanged |

## Not fixed in this release, and why

- **DEFECT-D-1** (apex 307 → www while canonicals and sitemap locs are on the apex) — needs David to set the Vercel primary domain. Unchanged, published at `/seo-host-check.json`.
- **Remaining trust claims** (homepage and `/about` `4.9/5` + `500+ Reviews`, `500+ Happy Clients`, `8+ years` vs `10+ Years`) — owner-attested type claims about David's own business. Deleting them unasked destroys a trust signal if true; keeping them silently is what the register exists to stop. See `docs/seo/CLAIMS.md`, rows C-02 to C-04. Open with David.
- **Health/medical language elsewhere** — the same claim class exists in roughly 20 more components and pages (detox, toxins, immune, post-surgery). One page is fixed here because QA named it; the rest is a content sweep that belongs to the week-2 rebuild of the 13 `/ubud/*` treatment pages, not to a hotfix.
- **`100+ Therapists`, `10+ Years`, `10,000+ Happy Clients`** on `/services/mobile-massage` — same class as the rows above, added to `CLAIMS.md` pending David's source.
