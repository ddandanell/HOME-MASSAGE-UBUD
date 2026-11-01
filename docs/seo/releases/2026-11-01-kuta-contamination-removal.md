# Release record - Kuta contamination removal (site-007)

- Date: 2026-11-01 (+08)
- Site: site-007 homemassageubud.com
- Branch: seo/007-kuta-contamination-removal
- Status: STAGED - not merged, not deployed. Awaiting Vercel write access.

## What changes

1. client/public/sitemap-kuta.xml deleted - 152 locs, every one on homemassagekuta.com.
2. client/public/sitemap-kuta-index.xml deleted - 10 locs, all Kuta.
3. client/public/sitemap-kuta-pages.xml deleted - 16 locs, all Kuta.
4. client/public/robots.txt - the Kuta Sitemap line is removed. The Ubud robots file now advertises Ubud's sitemap only.
5. vercel.json - 308 redirects for the three removed paths to /sitemap.xml, so a deleted .xml path cannot fall through to the SPA rewrite and answer 200 HTML.

Not touched: sitemap.xml (157 locs, all apex), sitemap-index.xml, the canonical host, page copy.

## Evidence the change is needed (2026-11-01, live)

- www.homemassageubud.com/sitemap-kuta.xml returned 200, 28,406 bytes, 152 locs, all on homemassagekuta.com.
- Same for sitemap-kuta-index.xml and sitemap-kuta-pages.xml.
- www.homemassageubud.com/robots.txt returned 200 and carried the Kuta Sitemap line.
- Search Console sc-domain:homemassageubud.com sitemaps list: one submitted sitemap, sitemap.xml, 157 submitted. The Kuta files were not submitted on this property; the contamination is file- and robots-level only.

## Not in this change

- Kuta and South-Bali pages served on the Ubud host are untouched. The South-Bali 301s are on hold by Chief of Staff decision of 2026-11-01 09:30 (+08): those pages earned 11 clicks in 2026-10-01..2026-10-29 against 5 for the homepage. /blog/premium-home-massage-kuta is David's cross-domain call.

## Verification required before this is called live

1. Merge only on the exact head SHA with QA sign-off.
2. Vercel production READY on that SHA.
3. sitemap-kuta.xml returns 308 to /sitemap.xml; robots.txt contains no Kuta reference.
4. sitemap.xml still 200 with 157 locs.
