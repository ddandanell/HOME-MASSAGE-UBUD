/**
 * Utility functions for SEO operations
 */

const UBUD_BASE = 'https://homemassageubud.com';
const KUTA_BASE  = 'https://homemassagekuta.com';

/**
 * Returns the canonical base URL for the current domain at runtime.
 */
export function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    const h = window.location.hostname;
    if (h === 'homemassagekuta.com' || h === 'www.homemassagekuta.com') {
      return KUTA_BASE;
    }
  }
  return UBUD_BASE;
}

/**
 * Generates a canonical URL from a given path.
 * When called without a baseUrl, the correct base is detected from
 * window.location.hostname so both sites produce self-referential canonicals.
 * Any explicitly supplied baseUrl is normalised to the current site domain,
 * preventing Ubud-hardcoded values from leaking onto the Kuta site.
 */
export function generateCanonicalUrl(
  path: string,
  baseUrl?: string
): string {
  const siteBase = getBaseUrl();
  const resolvedBase = baseUrl
    ? baseUrl.replace(UBUD_BASE, siteBase).replace(KUTA_BASE, siteBase)
    : siteBase;
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${resolvedBase}${cleanPath}`;
}

/**
 * Rewrites any hardcoded absolute URL to use the current site's domain.
 */
export function normaliseSiteUrl(url: string): string {
  const siteBase = getBaseUrl();
  return url.replace(UBUD_BASE, siteBase).replace(KUTA_BASE, siteBase);
}

/**
 * Returns site-specific metadata for the current domain.
 */
export function getSiteConfig() {
  const isKuta = getBaseUrl() === KUTA_BASE;
  return {
    siteName:    isKuta ? 'Home Massage Kuta' : 'Home Massage Ubud',
    titleSuffix: isKuta ? 'Home Massage Kuta' : 'Home Massage Ubud',
    ogImage:     isKuta
      ? 'https://homemassagekuta.com/og-image.jpg'
      : 'https://homemassageubud.com/og-image.jpg',
    baseUrl: getBaseUrl(),
  };
}

/** Removes query parameters from a URL for canonical purposes */
export function removeQueryParams(url: string): string {
  return url.split('?')[0];
}

/** Validates if a URL is a proper canonical URL */
export function isValidCanonicalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') return false;
    if (parsed.hostname.startsWith('www.')) return false;
    if (parsed.pathname !== '/' && parsed.pathname.endsWith('/')) return false;
    if (parsed.search) return false;
    if (parsed.hash) return false;
    return true;
  } catch {
    return false;
  }
}
