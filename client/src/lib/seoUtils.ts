/**
 * Utility functions for SEO operations
 */

/**
 * Generates a canonical URL from a given path
 * Ensures consistent format: HTTPS, non-www, no trailing slash
 * 
 * @param path - The URL path (e.g., "/services" or "/services/")
 * @param baseUrl - The base domain URL (default: https://homemassageubud.com)
 * @returns The canonical URL
 */
export function generateCanonicalUrl(
  path: string,
  baseUrl: string = 'https://homemassageubud.com'
): string {
  // Remove trailing slash (except for root)
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  
  // Combine base URL and clean path
  return `${baseUrl}${cleanPath}`;
}

/**
 * Removes query parameters from a URL for canonical purposes
 * 
 * @param url - The full URL with potential query parameters
 * @returns URL without query parameters
 */
export function removeQueryParams(url: string): string {
  return url.split('?')[0];
}

/**
 * Validates if a URL is a proper canonical URL
 * 
 * @param url - The URL to validate
 * @returns True if URL is a valid canonical URL
 */
export function isValidCanonicalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    
    // Check HTTPS protocol
    if (parsed.protocol !== 'https:') return false;
    
    // Check no www subdomain
    if (parsed.hostname.startsWith('www.')) return false;
    
    // Check no trailing slash (except root)
    if (parsed.pathname !== '/' && parsed.pathname.endsWith('/')) return false;
    
    // Check no query parameters
    if (parsed.search) return false;
    
    // Check no hash fragments
    if (parsed.hash) return false;
    
    return true;
  } catch {
    return false;
  }
}
