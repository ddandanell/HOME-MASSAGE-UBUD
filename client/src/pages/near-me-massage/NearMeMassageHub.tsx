import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, Shield, MapPin, Calendar, Star, Phone, MessageCircle, Home, Hotel, Users, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER_FORMATTED, generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';

export default function NearMeMassageHub() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm searching for near me massage. Can you help me check availability?";
    openWhatsApp(message);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Near Me Massage - Ubud Villa Massage",
    "description": "Professional near me massage service in Bali. Licensed therapists come to your villa, hotel, or accommodation with same-day availability.",
    "image": "https://homemassageubud.com/images/near-me-massage.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ubud",
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "telephone": WHATSAPP_NUMBER_FORMATTED,
    "priceRange": "280000-600000 IDR",
    "areaServed": [
      "Ubud", "Canggu", "Seminyak", "Sanur", "Nusa Dua"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://homemassageubud.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Near Me Massage",
        "item": "https://homemassageubud.com/near-me-massage"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Near Me Massage – Professional Mobile Massage Wherever You Are | Bali"
        description="Looking for near me massage? Professional mobile massage service comes directly to your location in Bali. Same-day availability. Licensed therapists. Book massage near you now."
        canonical="https://homemassageubud.com/near-me-massage"
      />
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Near Me Massage – Professional Mobile Massage Wherever You Are
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  If you are searching for near me massage, you are most likely looking for a professional massage service 
                  that is close to you, available now, and easy to book without stress.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8" onClick={handleWhatsAppClick}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Check Availability Near You
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <a href={`tel:${WHATSAPP_NUMBER_FORMATTED}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What Does "Near Me Massage" Mean */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Does "Near Me Massage" Actually Mean?
                </h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg text-muted-foreground mb-4">
                    When people search for <strong>near me massage</strong>, they are not just asking about distance. They are asking:
                  </p>
                  <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                    <li>Is there a massage service close to my location?</li>
                    <li>Can someone come to me right now or today?</li>
                    <li>Is the service professional and safe?</li>
                    <li>Can I book quickly without calling many places?</li>
                  </ul>
                  <p className="text-lg text-muted-foreground mb-4">
                    A true <strong>near me massage</strong> service means:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">The therapist comes to you</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">The service is available in your area</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">The booking process is fast</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">The pricing is clear</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">The service is professional and wellness-focused</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    That is exactly how our mobile <strong>near me massage</strong> service is designed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Near Me Massage - We Come to You */}
          <section className="py-16 md:py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Mobile Near Me Massage – We Come to You
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our <strong>near me massage</strong> service is fully mobile. That means:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">No travel on your side</h3>
                          <p className="text-sm text-muted-foreground">Stay relaxed at your accommodation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">No waiting in traffic</h3>
                          <p className="text-sm text-muted-foreground">We handle the journey to you</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">No unfamiliar spa environments</h3>
                          <p className="text-sm text-muted-foreground">Enjoy privacy in your own space</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">No confusion about directions</h3>
                          <p className="text-sm text-muted-foreground">Our therapist finds you</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Our therapist arrives with:</h3>
                <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>A professional massage table</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>Clean linens and towels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>Massage oils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>Proper hygiene setup</span>
                  </li>
                </ul>
                
                <p className="text-lg text-muted-foreground mb-6">
                  All you need is a quiet space. The rest is handled for you.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  This is why travelers, expats, and locals prefer <strong>near me massage</strong> instead of traditional walk-in spas.
                </p>
              </div>
            </div>
          </section>

          {/* Near Me Massage for Different Locations */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Near Me Massage for Villas, Hotels, and Homes
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We provide <strong>near me massage</strong> services in:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Private villas</h3>
                          <p className="text-sm text-muted-foreground">Complete privacy in your rental</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Hotel className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Hotels and resorts</h3>
                          <p className="text-sm text-muted-foreground">Service delivered to your room</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Guesthouses</h3>
                          <p className="text-sm text-muted-foreground">Comfortable treatment in your accommodation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Airbnb properties</h3>
                          <p className="text-sm text-muted-foreground">Perfect for vacation rentals</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Private homes</h3>
                          <p className="text-sm text-muted-foreground">For residents and expats</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  If you searched for <strong>near me massage at hotel</strong> or <strong>near me massage at villa</strong>, 
                  this service is built exactly for that situation.
                </p>
                
                <p className="text-lg text-muted-foreground mb-4">
                  Many clients choose <strong>near me massage</strong> because:
                </p>
                <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>They want privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>They want to relax immediately after travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>They want to avoid crowded spa areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>They want flexible scheduling</span>
                  </li>
                </ul>
                
                <div className="flex gap-4 flex-wrap">
                  <Button asChild>
                    <Link href="/near-me-massage/at-home">
                      Near Me Massage at Home →
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/near-me-massage/hotel">
                      Near Me Massage at Hotel →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Same-Day Availability */}
          <section className="py-16 md:py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Same-Day Near Me Massage Availability
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  One of the most common reasons people search for <strong>near me massage</strong> is urgency.
                </p>
                
                <p className="text-lg text-muted-foreground mb-4">You may be:</p>
                <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Tired from travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Experiencing muscle tension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Recovering from activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Looking for relaxation today</span>
                  </li>
                </ul>
                
                <Card className="mb-6 border-primary">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4">
                      <strong>We offer same-day near me massage depending on availability.</strong>
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The fastest way to check availability is by phone or WhatsApp.
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Because this is a mobile service, availability depends on:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• Your location</li>
                      <li>• Time of day</li>
                      <li>• Therapist schedule</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <p className="text-lg text-muted-foreground mb-6">
                  If you need <strong>near me massage today</strong>, contact us as early as possible.
                </p>
                
                <div className="flex gap-4 flex-wrap">
                  <Button onClick={handleWhatsAppClick}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Book Same Day Massage
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/near-me-massage/same-day">
                      Learn More About Same-Day Service →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Massage Available */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Types of Massage Available Near You
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  Our <strong>near me massage</strong> service includes multiple massage styles. 
                  Each therapist is trained and certified.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Relaxation Massage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Gentle, soothing massage for stress relief and deep relaxation
                      </p>
                      <p className="text-sm font-semibold">From IDR 380,000</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Deep Tissue Massage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Intensive therapeutic massage targeting chronic muscle tension
                      </p>
                      <p className="text-sm font-semibold">From IDR 380,000</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Traditional Massage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Balinese healing techniques with acupressure and stretching
                      </p>
                      <p className="text-sm font-semibold">From IDR 380,000</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Oil Massage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Smooth, flowing massage with aromatherapy oils
                      </p>
                      <p className="text-sm font-semibold">From IDR 350,000</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Couples Massage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Two therapists provide simultaneous massage treatments
                      </p>
                      <p className="text-sm font-semibold">From IDR 550,000</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recovery Massage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Sports and stress-relief massage for active individuals
                      </p>
                      <p className="text-sm font-semibold">From IDR 380,000</p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-lg text-muted-foreground mb-4">
                  Each massage can be adapted to:
                </p>
                <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                  <li>• Light pressure</li>
                  <li>• Medium pressure</li>
                  <li>• Firm pressure</li>
                </ul>
                
                <p className="text-lg text-muted-foreground">
                  When you book your <strong>near me massage</strong>, you can tell us your preference.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 md:py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Near Me Massage Pricing
                </h2>
                
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground mb-6">
                      Our pricing is transparent and simple.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Typical session lengths:</h3>
                    <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                      <li className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>60 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>90 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>120 minutes</span>
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-4">Prices include:</h3>
                    <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Therapist travel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Equipment setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Massage session</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Cleanup after treatment</span>
                      </li>
                    </ul>
                    
                    <p className="text-muted-foreground mb-4">
                      There are no hidden fees for standard service areas.
                    </p>
                    
                    <p className="text-lg font-semibold mb-4">
                      For the exact price list, availability, and current offers, please contact us directly.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Every <strong>near me massage</strong> booking is confirmed before arrival.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="text-center">
                  <Button size="lg" asChild>
                    <Link href="/pricing">
                      View Full Pricing →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Service */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Why Choose Our Near Me Massage Service?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  People choose our <strong>near me massage</strong> service because:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Professional therapists</h3>
                          <p className="text-sm text-muted-foreground">Licensed and certified professionals</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Mobile service to your location</h3>
                          <p className="text-sm text-muted-foreground">We come directly to you</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Clear pricing</h3>
                          <p className="text-sm text-muted-foreground">No hidden fees or surprises</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Fast booking</h3>
                          <p className="text-sm text-muted-foreground">Quick confirmation via WhatsApp or phone</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Wellness-focused</h3>
                          <p className="text-sm text-muted-foreground">Professional massage only</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Trusted by travelers</h3>
                          <p className="text-sm text-muted-foreground">And long-term residents</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-secondary/20 border-primary">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold mb-3">
                      We do not offer inappropriate or erotic services.
                    </p>
                    <p className="text-muted-foreground">
                      Our focus is health, relaxation, and professional massage therapy. 
                      This clarity is important for both client comfort and service quality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* For Travelers */}
          <section className="py-16 md:py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Near Me Massage for Travelers and Visitors
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Travel often causes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">• Muscle stiffness</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">• Swelling</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">• Jet lag</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">• Fatigue</p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  A <strong>near me massage</strong> allows you to recover without leaving your accommodation.
                </p>
                
                <p className="text-lg text-muted-foreground mb-4">Many guests book:</p>
                <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>A massage on arrival day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>A massage after excursions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>A massage before departure</span>
                  </li>
                </ul>
                
                <p className="text-lg text-muted-foreground mb-6">
                  This is one of the easiest ways to improve your travel experience.
                </p>
              </div>
            </div>
          </section>

          {/* Locations Served */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Near Me Massage Available in These Areas
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  Our mobile <strong>near me massage</strong> service operates throughout Bali's most popular areas.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="h-6 w-6 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href="/near-me-massage/ubud" className="hover:text-primary">
                          Near Me Massage Ubud
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Serving Ubud Centre, North, East, South, and luxury villas
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="h-6 w-6 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href="/near-me-massage/canggu" className="hover:text-primary">
                          Near Me Massage Canggu
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Including Berawa, Pererenan, and Echo Beach
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="h-6 w-6 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href="/near-me-massage/seminyak" className="hover:text-primary">
                          Near Me Massage Seminyak
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Plus Petitenget, Umalas, and Kerobokan
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="h-6 w-6 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href="/near-me-massage/sanur" className="hover:text-primary">
                          Near Me Massage Sanur
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Peaceful beachside area with easy access
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="h-6 w-6 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href="/near-me-massage/nusa-dua" className="hover:text-primary">
                          Near Me Massage Nusa Dua
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Resort area with premium villa service
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="h-6 w-6 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href="/near-me-massage/locations" className="hover:text-primary">
                          View All Locations
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        See our complete service area coverage
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* How to Book */}
          <section className="py-16 md:py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  How to Book Near Me Massage
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Booking your <strong>near me massage</strong> is simple.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          1
                        </div>
                        <CardTitle>Contact Us</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Use phone or WhatsApp for the fastest response.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          2
                        </div>
                        <CardTitle>Share Details</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">Tell us:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Your location</li>
                        <li>• Preferred time</li>
                        <li>• Massage duration</li>
                        <li>• Any special requests</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          3
                        </div>
                        <CardTitle>Confirmation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">We confirm:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Therapist availability</li>
                        <li>• Arrival time</li>
                        <li>• Total price</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          4
                        </div>
                        <CardTitle>Relax</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Your therapist arrives and sets up everything.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={handleWhatsAppClick}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`tel:${WHATSAPP_NUMBER_FORMATTED}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call {WHATSAPP_NUMBER_FORMATTED}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Frequently Asked Questions About Near Me Massage
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Is near me massage safe?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Yes. We only work with trained, professional therapists and provide wellness-focused massage services. 
                        All therapists are licensed and certified.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Do I need special equipment?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        No. The therapist brings everything needed: professional massage table, linens, towels, oils, and hygiene supplies.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Can I book near me massage for couples?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Yes, depending on therapist availability. We send two therapists for simultaneous couple's massage treatments.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Is same-day booking possible?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Often yes. Availability depends on time and location. Contact us as early as possible for same-day bookings.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>What areas do you serve?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We serve Ubud, Canggu, Seminyak, Sanur, Nusa Dua, and surrounding areas throughout Bali.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How long does near me massage take?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Sessions typically last 60, 90, or 120 minutes. Setup and breakdown take about 10-15 minutes each.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/near-me-massage/knowledge">
                      View Knowledge Center →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Book Your Near Me Massage Now
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  If you are looking for <strong>near me massage</strong> that is professional, reliable, and easy to book, 
                  this service is designed for you.
                </p>
                
                <Card className="mb-8 max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <p className="text-lg mb-4">Contact us now to:</p>
                    <ul className="text-lg text-muted-foreground mb-6 space-y-2">
                      <li className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Check availability near you</span>
                      </li>
                      <li className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Confirm pricing</span>
                      </li>
                      <li className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Book your massage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" onClick={handleWhatsAppClick}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`tel:${WHATSAPP_NUMBER_FORMATTED}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
                
                <p className="text-lg text-muted-foreground italic">
                  <strong>Near me massage</strong> means comfort, convenience, and professional care – right where you are.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="py-16 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Explore More About Near Me Massage
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">By Location</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/near-me-massage/ubud" className="text-primary hover:underline">
                          Near Me Massage Ubud
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/canggu" className="text-primary hover:underline">
                          Near Me Massage Canggu
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/seminyak" className="text-primary hover:underline">
                          Near Me Massage Seminyak
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/sanur" className="text-primary hover:underline">
                          Near Me Massage Sanur
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/nusa-dua" className="text-primary hover:underline">
                          Near Me Massage Nusa Dua
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/locations" className="text-primary hover:underline">
                          All Locations →
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">By Need</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/near-me-massage/at-home" className="text-primary hover:underline">
                          At Home Massage
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/hotel" className="text-primary hover:underline">
                          Hotel Massage
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/same-day" className="text-primary hover:underline">
                          Same Day Booking
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/tonight" className="text-primary hover:underline">
                          Tonight Availability
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/couples" className="text-primary hover:underline">
                          Couples Massage
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/services" className="text-primary hover:underline">
                          All Services →
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Learn More</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/near-me-massage/knowledge/what-is-near-me-massage" className="text-primary hover:underline">
                          What Is Near Me Massage?
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/knowledge/is-near-me-massage-safe" className="text-primary hover:underline">
                          Is It Safe?
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/knowledge/how-google-decides-near-me" className="text-primary hover:underline">
                          How Google Decides
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/knowledge/how-fast-can-massage-arrive" className="text-primary hover:underline">
                          How Fast Can We Arrive?
                        </Link>
                      </li>
                      <li>
                        <Link href="/near-me-massage/knowledge" className="text-primary hover:underline">
                          Knowledge Center →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
