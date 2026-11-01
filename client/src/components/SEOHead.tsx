import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { generateCanonicalUrl, normaliseSiteUrl, getSiteConfig } from '@/lib/seoUtils';
import ROUTE_META from '@/data/route-meta.json';

type RouteMeta = { title: string; description: string; h1?: string };
const META = ROUTE_META as Record<string, RouteMeta>;

/** Per-route copy from the shared manifest, so the prerendered HTML and the
 *  client-rendered head can never disagree. */
function manifestMeta(location: string): RouteMeta | undefined {
  if (META[location]) return META[location];
  const trimmed = location.replace(/\/+$/, '') || '/';
  return META[trimmed];
}

/**
 * Every route is prerendered with its own canonical, robots, description and
 * Open Graph / Twitter tags. react-helmet-async does not merge with those tags —
 * it appends its own copies, so after hydration every page carried two
 * canonical links (independent QA, 2026-11-01). On first mount we remove the
 * prerendered copies that helmet does not own (no data-rh attribute); helmet's
 * tags take over and keep managing them on client-side navigation. If JavaScript
 * never runs, the prerendered tags are all a crawler sees, which is the point.
 */
const PRERENDERED_HEAD_SELECTOR =
  'link[rel="canonical"], meta[name="robots"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogType = 'website',
  ogImage,
  noindex = false
}: SEOHeadProps) {
  const [location] = useLocation();

  // Drop the prerendered copies of the head tags helmet is about to manage.
  // Runs once: the static tags exist only in the initially loaded document.
  useEffect(() => {
    document.querySelectorAll(PRERENDERED_HEAD_SELECTOR).forEach((el) => {
      if (!el.hasAttribute('data-rh')) el.remove();
    });
  }, []);

  // Detect current site at runtime — works correctly on both homemassageubud.com
  // and homemassagekuta.com even though they share the same source code.
  const { siteName, titleSuffix, ogImage: defaultOgImage } = getSiteConfig();

  // Manifest copy wins (prerendered HTML uses the same strings).
  const route = manifestMeta(location);
  const baseTitle = route?.title ?? title;
  const baseDescription = route?.description ?? description;

  // Build title — if it already contains the site suffix don't double-append
  const fullTitle =
    route?.title ?? (title.includes(titleSuffix) ? title : `${title} | ${titleSuffix}`);

  // Resolve canonical: if the page passes an explicit one (possibly Ubud-hardcoded)
  // normaliseSiteUrl rewrites it to the current domain automatically.
  const canonicalUrl = route ? generateCanonicalUrl(location) : canonical
    ? normaliseSiteUrl(canonical)
    : generateCanonicalUrl(location);

  const resolvedOgImage = ogImage ? normaliseSiteUrl(ogImage) : defaultOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={baseDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical — always self-referential for the current domain */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={baseDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${baseTitle} - Professional massage services in Bali`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={baseDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={`${baseTitle} - Professional massage services in Bali`} />
    </Helmet>
  );
}
