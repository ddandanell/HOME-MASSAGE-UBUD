import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { generateCanonicalUrl, normaliseSiteUrl, getSiteConfig } from '@/lib/seoUtils';

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

  // Detect current site at runtime — works correctly on both homemassageubud.com
  // and homemassagekuta.com even though they share the same source code.
  const { siteName, titleSuffix, ogImage: defaultOgImage } = getSiteConfig();

  // Build title — if it already contains the site suffix don't double-append
  const fullTitle = title.includes(titleSuffix) ? title : `${title} | ${titleSuffix}`;

  // Resolve canonical: if the page passes an explicit one (possibly Ubud-hardcoded)
  // normaliseSiteUrl rewrites it to the current domain automatically.
  const canonicalUrl = canonical
    ? normaliseSiteUrl(canonical)
    : generateCanonicalUrl(location);

  const resolvedOgImage = ogImage ? normaliseSiteUrl(ogImage) : defaultOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
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
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Professional massage services in Bali`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={`${title} - Professional massage services in Bali`} />
    </Helmet>
  );
}
