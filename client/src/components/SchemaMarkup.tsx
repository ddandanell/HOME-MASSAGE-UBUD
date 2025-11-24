import React from 'react';

interface SchemaMarkupProps {
  type: 'organization' | 'service' | 'review' | 'faq' | 'breadcrumb';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        // This is now handled in index.html globally, so we skip it here
        return null;

      case 'service':
        // Generate Service schema with proper provider reference to LocalBusiness
        const serviceSchema: any = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name,
          description: data.description,
          serviceType: data.serviceType || 'Massage Therapy',
          provider: {
            '@id': 'https://homemassageubud.com/#localbusiness'
          }
        };

        // Add area served if provided
        if (data.areaServed) {
          if (Array.isArray(data.areaServed)) {
            serviceSchema.areaServed = data.areaServed.map((area: string) => ({
              '@type': 'City',
              name: area,
              addressRegion: 'Bali',
              addressCountry: 'Indonesia'
            }));
          } else {
            serviceSchema.areaServed = {
              '@type': 'City',
              name: data.areaServed,
              addressRegion: 'Bali',
              addressCountry: 'Indonesia'
            };
          }
        }

        // Add offers if pricing is provided
        if (data.offers && data.offers.length > 0) {
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
          serviceSchema.offers = {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
            url: data.url
          };
        }

        // Add URL if provided
        if (data.url) {
          serviceSchema.url = data.url;
        }

        return serviceSchema;

      case 'review':
        return {
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@id': 'https://homemassageubud.com/#localbusiness'
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: data.rating,
            bestRating: '5'
          },
          author: {
            '@type': 'Person',
            name: data.author
          },
          reviewBody: data.reviewBody || data.review,
          datePublished: data.datePublished || data.date
        };

      case 'faq':
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

  const schema = generateSchema();

  // Don't render if schema is null
  if (!schema) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
