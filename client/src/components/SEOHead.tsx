import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';

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
  ogImage = 'https://homemassageubud.com/og-image.jpg',
  noindex = false
}: SEOHeadProps) {
  const [location] = useLocation();
  const fullTitle = title.includes('Home Massage Ubud') ? title : `${title} | Home Massage Ubud`;
  const siteUrl = 'https://homemassageubud.com';
  
  // Generate canonical URL - use provided canonical or construct from current location
  // Always use absolute URL without trailing slash
  const canonicalUrl = canonical || `${siteUrl}${location === '/' ? '' : location.replace(/\/$/, '')}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Always include canonical tag - self-referential if not specified */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta - default is index,follow unless noindex is true */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Home Massage Ubud" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Professional massage services in Bali`} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - Professional massage services in Bali`} />
    </Helmet>
  );
}
