import { Helmet } from 'react-helmet-async';

interface CanonicalUrlProps {
  path: string;
}

/**
 * CanonicalUrl Component
 * 
 * Adds canonical URL link tag to page head.
 * This prevents duplicate content issues and tells Google which URL is the primary version.
 * 
 * Usage:
 *   <CanonicalUrl path="/services/deep-tissue-massage" />
 * 
 * @param path - The page path (will be prefixed with domain automatically)
 */
export default function CanonicalUrl({ path }: CanonicalUrlProps) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove trailing slash (except for homepage)
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '');
  
  const canonicalUrl = `https://homemassageubud.com${cleanPath}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
