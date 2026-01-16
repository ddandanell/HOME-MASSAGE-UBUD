import React from 'react';
import { Link } from 'wouter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

interface SpiderLinksBlockProps {
  currentPage?: string; // To avoid linking to current page
}

export default function SpiderLinksBlock({ currentPage }: SpiderLinksBlockProps) {
  const servicePages = [
    { href: '/home-massage/services/balinese', label: 'Balinese home massage' },
    { href: '/home-massage/services/deep-tissue', label: 'Deep tissue home massage' },
    { href: '/home-massage/services/relaxation', label: 'Relaxation home massage' },
    { href: '/home-massage/services/couples', label: 'Couples home massage' },
  ];

  const cityPages = [
    { href: '/home-massage/cities/ubud', label: 'Home massage in Ubud' },
    { href: '/home-massage/cities/canggu', label: 'Home massage in Canggu' },
    { href: '/home-massage/cities/seminyak', label: 'Home massage in Seminyak' },
    { href: '/home-massage/cities/sanur', label: 'Home massage in Sanur' },
    { href: '/home-massage/cities/nusa-dua', label: 'Home massage in Nusa Dua' },
  ];

  const knowledgePages = [
    { href: '/home-massage/knowledge/safety', label: 'Home massage safety' },
    { href: '/home-massage/knowledge/benefits', label: 'Home massage benefits' },
    { href: '/home-massage/knowledge/aftercare', label: 'Home massage aftercare' },
    { href: '/home-massage/knowledge/what-to-expect', label: 'What to expect from home massage' },
  ];

  const blogPages = [
    { href: '/home-massage/blog/what-is-home-massage', label: 'What is home massage?' },
    { href: '/home-massage/blog/home-massage-vs-spa', label: 'Home massage vs spa' },
    { href: '/home-massage/blog/is-home-massage-safe', label: 'Is home massage safe?' },
    { href: '/home-massage/blog/how-to-book-home-massage', label: 'How to book home massage' },
    { href: '/home-massage/blog/why-tourists-prefer-home-massage', label: 'Why tourists prefer home massage' },
  ];

  const renderLinks = (pages: Array<{ href: string; label: string }>) => {
    return pages
      .filter(page => page.href !== currentPage)
      .map((page, index) => (
        <li key={index}>
          <Link href={page.href} className="text-primary hover:underline">
            {page.label}
          </Link>
        </li>
      ));
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/10" id="full-spider-links">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Explore Home Massage Services
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover all our home massage services, locations, and resources. Learn everything you need to know about booking professional home massage treatments in Bali.
          </p>
          
          <Card>
            <CardContent className="p-6">
              <Accordion type="multiple" className="w-full">
                {/* Hub Link */}
                <AccordionItem value="hub">
                  <AccordionTrigger className="text-lg font-semibold">
                    Home Massage Hub
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      {currentPage !== '/home-massage' && (
                        <li>
                          <Link href="/home-massage" className="text-primary hover:underline">
                            Home massage main hub
                          </Link>
                        </li>
                      )}
                      <li className="text-muted-foreground">
                        Your complete guide to professional home massage in Bali
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Services */}
                <AccordionItem value="services">
                  <AccordionTrigger className="text-lg font-semibold">
                    Home Massage Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      {currentPage !== '/home-massage/services' && (
                        <Link href="/home-massage/services" className="text-primary hover:underline font-medium">
                          View all home massage services →
                        </Link>
                      )}
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 pl-4">
                      {renderLinks(servicePages)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Cities */}
                <AccordionItem value="cities">
                  <AccordionTrigger className="text-lg font-semibold">
                    Home Massage Locations
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      {currentPage !== '/home-massage/cities' && (
                        <Link href="/home-massage/cities" className="text-primary hover:underline font-medium">
                          View all home massage cities →
                        </Link>
                      )}
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 pl-4">
                      {renderLinks(cityPages)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Knowledge */}
                <AccordionItem value="knowledge">
                  <AccordionTrigger className="text-lg font-semibold">
                    Home Massage Knowledge
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      {currentPage !== '/home-massage/knowledge' && (
                        <Link href="/home-massage/knowledge" className="text-primary hover:underline font-medium">
                          View all home massage knowledge articles →
                        </Link>
                      )}
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 pl-4">
                      {renderLinks(knowledgePages)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Blog */}
                <AccordionItem value="blog">
                  <AccordionTrigger className="text-lg font-semibold">
                    Home Massage Blog
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      {currentPage !== '/home-massage/blog' && (
                        <Link href="/home-massage/blog" className="text-primary hover:underline font-medium">
                          View all home massage blog posts →
                        </Link>
                      )}
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 pl-4">
                      {renderLinks(blogPages)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
