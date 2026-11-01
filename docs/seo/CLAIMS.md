# Claims register — homemassageubud.com (site-007)

Owner of approval: David Dandanell. Operator: Home Massage Ubud SEO.
Rule: a claim is published only if it is a **sourced fact** (publisher + URL + date), an **owner-attested fact** (David states it in writing), or a **quoted third party**. Anything else is deleted or rewritten as a mechanism.

Observed on the live site and in `client/src` on 2026-11-01. "Rendered" means verified in a browser at 390x844, not read from source.

| # | Claim (verbatim) | Where it renders | Class | Status 2026-11-01 | Action |
|---|---|---|---|---|---|
| C-01 | `5.0 Rating` | Hero eyebrow strip of `AreaPageTemplate`, `TreatmentPageTemplate`, `ServiceLandingPageTemplate` — i.e. all area pages, all `/ubud/*` treatment pages, all service landing pages | Unverifiable (no review-platform source; no GA4/GSC/Business-Profile read on this side) | **REMOVED** 2026-11-01, PR #88 | Deleted from all three templates. Reinstating requires a source with a date. |
| C-02 | `4.9/5` + `500+ Reviews` badge | Homepage hero (`EnhancedHero`), `/about` (`About.tsx` floating badge) | Unverifiable; also **contradicts C-01's 5.0** — two different ratings were published on the same site | **OPEN — with David** | One line from David: source (platform + count + date) → keep with the date, or delete the badge. Not touched in PR #88 to avoid deleting a true signal unasked. |
| C-03 | `500+ Happy Clients` | `TrustBadges`, `About`, `Testimonials`, `InternalLinkNetwork`, `EnhancedHero` stat strips | Owner-attested at best | **OPEN — with David** | Same decision as C-02; volume claim, no source. |
| C-04 | `10+ Years` vs `8+ years` | `ServiceLandingPageTemplate` trust strip (`10+ Years`); `/about` meta description (`8+ years serving Bali`) | Owner-attested, and **internally contradictory** | **OPEN — with David** | Two figures for one fact. David states the founding year; both strings get that year and a date. |
| C-05 | `aggregateRating` 5.0 / 500 reviews in JSON-LD | Was injected client-side into structured data on every page | Unverifiable; structured-data rating without a source is a manual-action risk | **REMOVED** 2026-11-01 (PR #82/#85) | Absent from the prerendered JSON-LD. Prerender gate has no rating block. |
| C-06 | Prices, e.g. `From IDR 450K`, `Rp 380,000` / 60 min | `/pricing`, service pages, pricing tables | Owner-attested (business sets its own price) | **KEPT** | Prices untouched by PR #88 by instruction. Any price change needs David. |
| C-07 | `7am–10pm Daily`, `Same-day Available` | Hero strips, footer, meta descriptions | Owner-attested | **KEPT** | Operating hours; no conflict found on the site. |

| C-08 | `100+ Therapists`, `10+ Years`, `10,000+ Happy Clients` | `/services/mobile-massage` service template trust strip | Unverifiable, no source on file | **OPEN — with David** | Same decision as C-02/C-03. Not touched: owner-attested-type claims about team size and volume. |
| C-09 | Medical efficacy language (`removes toxins`, `boosts immune function`, `accelerates post-surgery recovery`, `detoxification`) | Body, FAQ and hydrated `Service.description`, 20+ components; `/ubud/lymphatic-drainage-massage` named by QA | Prohibited by the site brief — a compliance problem, not a sourcing one | **FIXED on the named page** 2026-11-01 (PR #89) | Rewritten as mechanism plus a medical disclaimer, prices unchanged. The rest of the site is a content sweep in the week-2 rebuild. |

## What PR #88 and PR #89 changed and what they did not

- Removed: C-01 in three templates. Deleted `client/src/components/SEOContent.tsx` — hidden (`sr-only`, `aria-hidden`) keyword-stuffed block on the homepage containing a second `<h1>`.
- Not removed: C-02, C-03, C-04 — these are owner-attested-type claims about David's own business. Deleting them unasked destroys a trust signal if they are true; keeping them silently is what this register exists to stop. David decides.
- Not touched: C-06 prices, by standing instruction.

## How to close a row

A row moves to `KEPT` only with a source line in this file: publisher, URL, date observed, and who approved it. Operator verification is never recorded as owner approval.
