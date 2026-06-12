import React from 'react';

/**
 * ========================================
 * SCHEMA MARKUP COMPONENT
 * ========================================
 * 
 * This component dynamically generates JSON-LD structured data for various schema types.
 * It's used throughout the site to add Google-friendly markup for rich search results.
 * 
 * SUPPORTED SCHEMA TYPES:
 * - service: For massage service pages (treatments, packages)
 * - review: For customer testimonials and reviews
 * - faq: For frequently asked questions sections
 * - breadcrumb: For navigation breadcrumb trails
 * 
 * NOTE: Organization/LocalBusiness schema is handled globally in index.html
 * and does not need to be generated per-page via this component.
 * 
 * USAGE EXAMPLE:
 * ```tsx
 * <SchemaMarkup
 *   type="service"
 *   data={{
 *     name: "Balinese Massage",
 *     description: "Traditional massage with gentle stretches",
 *     areaServed: ["Ubud", "Tegallalang"],
 *     offers: [{ name: "60 Minutes", price: "450000" }],
 *     url: "https://homemassageubud.com/ubud/balinese-massage"
 *   }}
 * />
 * ```
 * 
 * IMPORTANT NOTES:
 * - All Service schemas reference the LocalBusiness via @id
 * - LocalBusiness schema is in client/index.html (loaded on all pages)
 * - Only include real, verifiable information (no fake reviews)
 * - Test all changes with Google Rich Results Test
 * - Data prop uses 'any' type for flexibility across different schema types
 *   (defining strict types for each schema would add complexity without
 *   significant benefit since React escapes all content automatically)
 * 
 * @see SCHEMA_IMPLEMENTATION_GUIDE.md for complete documentation
 */

interface SchemaMarkupProps {
  type: 'service' | 'review' | 'faq' | 'breadcrumb';
  // Using 'any' for flexibility across different schema types
  // React's built-in escaping via JSON.stringify provides XSS protection
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case 'service':
        /**
         * SERVICE SCHEMA
         * Represents a specific massage service or treatment
         * 
         * REQUIRED data properties:
         * - name: Service name (matches page H1)
         * - description: Brief service description (150-250 chars)
         * 
         * OPTIONAL data properties:
         * - serviceType: Type of service (default: "Massage Therapy")
         * - areaServed: String or array of areas where service is available
         * - offers: Array of pricing packages with name, price, description
         * - url: Canonical URL of the service page
         * 
         * PROVIDER REFERENCE:
         * - Always links to LocalBusiness via @id (in index.html)
         * - Never duplicate full business details here
         */
        const serviceSchema: any = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          
          // Service identification
          name: data.name,
          description: data.description,
          serviceType: data.serviceType || 'Massage Therapy',
          
          // Provider reference - links to LocalBusiness in index.html
          // This avoids duplicating business information on every page
          provider: {
            '@id': 'https://homemassageubud.com/#localbusiness'
          }
        };

        /**
         * AREA SERVED
         * Specifies geographic areas where this service is available
         * Can be a single area (string) or multiple areas (array)
         * Each area is structured as a City object with location details
         */
        if (data.areaServed) {
          if (Array.isArray(data.areaServed)) {
            // Multiple service areas
            serviceSchema.areaServed = data.areaServed.map((area: string) => ({
              '@type': 'City',
              name: area,
              addressRegion: 'Bali',
              addressCountry: 'Indonesia'
            }));
          } else {
            // Single service area
            serviceSchema.areaServed = {
              '@type': 'City',
              name: data.areaServed,
              addressRegion: 'Bali',
              addressCountry: 'Indonesia'
            };
          }
        }

        /**
         * OFFERS (Pricing)
         * Specifies pricing packages and availability
         * 
         * IMPORTANT: Prices must match what's displayed on the page
         * Format: Numeric string without currency symbols (e.g., "450000" for IDR 320,000)
         * 
         * Multiple offers = different durations or packages
         * Single offer = one standard price
         */
        if (data.offers && data.offers.length > 0) {
          // Multiple pricing packages (e.g., 60min, 90min, 2hr)
          serviceSchema.offers = data.offers.map((offer: any) => ({
            '@type': 'Offer',
            name: offer.name || offer.duration,
            description: offer.description,
            price: offer.price,
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
            url: data.url
          }));
        } else if (data.price) {
          // Single pricing option
          serviceSchema.offers = {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
            url: data.url
          };
        }

        /**
         * SERVICE URL
         * The canonical URL of this service's page
         * Should match the page's canonical tag
         */
        if (data.url) {
          serviceSchema.url = data.url;
        }

        return serviceSchema;

      case 'review':
        /**
         * REVIEW SCHEMA
         * Marks up individual customer reviews/testimonials
         * 
         * REQUIRED data properties:
         * - rating: Numeric rating (1-5)
         * - author: Reviewer name
         * - reviewBody or review: The review text
         * - datePublished or date: When the review was posted
         * 
         * IMPORTANT: Only include REAL customer reviews
         * Fake reviews violate Google guidelines and can result in penalties
         * 
         * itemReviewed links to the LocalBusiness via @id
         */
        return {
          '@context': 'https://schema.org',
          '@type': 'Review',
          
          // Links review to the business (in index.html)
          itemReviewed: {
            '@id': 'https://homemassageubud.com/#localbusiness'
          },
          
          // Star rating
          reviewRating: {
            '@type': 'Rating',
            ratingValue: data.rating,
            bestRating: '5'
          },
          
          // Who wrote the review
          author: {
            '@type': 'Person',
            name: data.author
          },
          
          // Review content and date
          reviewBody: data.reviewBody || data.review,
          datePublished: data.datePublished || data.date
        };

      case 'faq':
        /**
         * FAQ SCHEMA
         * Marks up Frequently Asked Questions for FAQ rich results
         * 
         * data should be an array of objects with:
         * - question: The question text
         * - answer: The answer text
         * 
         * Benefits:
         * - Can appear as expandable FAQ in search results
         * - Increases visibility and click-through rate
         * - Helps answer common customer queries directly in search
         */
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        };

      case 'breadcrumb':
        /**
         * BREADCRUMB SCHEMA
         * Marks up navigation breadcrumbs for rich search results
         * 
         * data should be an array of objects with:
         * - name: Display text for breadcrumb
         * - url: Full URL for that breadcrumb level
         * 
         * Benefits:
         * - Shows navigation path in search results
         * - Helps Google understand site structure
         * - Improves user experience with clear hierarchy
         * 
         * Best practices:
         * - Always start with "Home" at position 1
         * - Use full URLs (include https://)
         * - Match visible breadcrumbs on page
         */
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return null;
    }
  };

  // Generate the appropriate schema based on type
  const schema = generateSchema();

  // Don't render if schema is null (e.g., deprecated organization type)
  if (!schema) {
    return null;
  }

  /**
   * RENDER JSON-LD SCRIPT TAG
   * The schema is embedded as a <script type="application/ld+json"> tag
   * This is Google's recommended approach (JSON-LD format)
   * 
   * dangerouslySetInnerHTML is safe here because:
   * - We control the schema content (not user input)
   * - JSON.stringify properly escapes special characters
   * - React's built-in XSS protection applies
   */
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * ========================================
 * USAGE EXAMPLES
 * ========================================
 * 
 * SERVICE SCHEMA:
 * ---------------
 * <SchemaMarkup
 *   type="service"
 *   data={{
 *     name: "Deep Tissue Massage Ubud",
 *     description: "Intensive therapeutic massage targeting chronic tension",
 *     serviceType: "Massage Therapy",
 *     areaServed: ["Ubud", "Tegallalang"],
 *     offers: [
 *       { name: "60 Minutes", price: "500000", description: "Focused treatment" },
 *       { name: "90 Minutes", price: "700000", description: "Full body" }
 *     ],
 *     url: "https://homemassageubud.com/ubud/deep-tissue-massage"
 *   }}
 * />
 * 
 * FAQ SCHEMA:
 * -----------
 * <SchemaMarkup
 *   type="faq"
 *   data={[
 *     {
 *       question: "Do you provide massage oils?",
 *       answer: "Yes, we bring premium essential oils included in the price."
 *     },
 *     {
 *       question: "What areas do you serve?",
 *       answer: "We serve all of Ubud including Tegallalang and Sanggingan."
 *     }
 *   ]}
 * />
 * 
 * BREADCRUMB SCHEMA:
 * ------------------
 * <SchemaMarkup
 *   type="breadcrumb"
 *   data={[
 *     { name: "Home", url: "https://homemassageubud.com/" },
 *     { name: "Services", url: "https://homemassageubud.com/services" },
 *     { name: "Balinese Massage", url: "https://homemassageubud.com/ubud/balinese-massage" }
 *   ]}
 * />
 * 
 * REVIEW SCHEMA:
 * --------------
 * <SchemaMarkup
 *   type="review"
 *   data={{
 *     rating: 5,
 *     author: "Sarah Johnson",
 *     review: "Amazing massage experience in our villa!",
 *     date: "2026-01-15"
 *   }}
 * />
 */
