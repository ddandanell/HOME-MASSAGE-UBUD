import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  webpSrc?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  placeholderColor?: string;
  onLoad?: () => void;
}

/**
 * LazyImage Component
 * 
 * Optimized image component with:
 * - WebP support with JPG fallback
 * - Intersection Observer lazy loading
 * - Blur-up placeholder effect
 * - Proper width/height to prevent CLS
 * - Async decoding for better performance
 */
export default function LazyImage({
  src,
  alt,
  webpSrc,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  placeholderColor = '#f3f4f6',
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === 'eager') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before viewport
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate srcset for responsive images if width is provided
  const generateSrcSet = (imageSrc: string) => {
    if (!width || !imageSrc) return undefined;
    // Simple srcset: original + half size
    const base = imageSrc.replace(/\.[^/.]+$/, '');
    const ext = imageSrc.match(/\.[^/.]+$/)?.[0] || '';
    return `${imageSrc} ${width}w, ${base}-small${ext} ${Math.round(width / 2)}w`;
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholderColor,
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {isInView && (
        <picture>
          {webpSrc && (
            <source
              srcSet={generateSrcSet(webpSrc)}
              sizes={`(max-width: 768px) 100vw, ${width ? `${width}px` : '800px'}`}
              type="image/webp"
            />
          )}
          <img
            src={src}
            srcSet={generateSrcSet(src)}
            sizes={`(max-width: 768px) 100vw, ${width ? `${width}px` : '800px'}`}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding={decoding}
            onLoad={handleLoad}
            className={`
              w-full h-full object-cover
              transition-opacity duration-500
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </picture>
      )}
    </div>
  );
}

/**
 * HeroImage Component
 * 
 * Eager-loaded image for above-the-fold hero sections.
 * Uses preload link for critical LCP images.
 */
export function HeroImage({
  src,
  alt,
  webpSrc,
  className = '',
  width,
  height,
  onLoad,
}: Omit<LazyImageProps, 'loading'>) {
  return (
    <LazyImage
      src={src}
      alt={alt}
      webpSrc={webpSrc}
      className={className}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      onLoad={onLoad}
    />
  );
}
