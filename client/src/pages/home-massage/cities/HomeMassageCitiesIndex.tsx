import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Check, ArrowRight, Clock } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function HomeMassageCitiesIndex() {
  return (
    <>
      <SEOHead 
        title="Home Massage Cities | Ubud Luxury Villas"
        description="Home massage service available throughout Bali. Professional treatments delivered to your villa in Ubud, Canggu, Seminyak, Sanur, and Nusa Dua. Same-day booking via call or WhatsApp."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage Across Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage delivered to your villa or hotel in Bali's most popular destinations
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability for Home Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <TableOfContents items={[
        { id: 'introduction', label: 'Home Massage Throughout Bali' },
        { id: 'cities', label: 'Cities We Serve' },
        { id: 'features', label: 'Universal Service Features' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'Frequently Asked Questions' }
      ]} />

      {/* Introduction */}
      <section id="introduction" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Home Massage Service Throughout Bali
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Our home massage service operates across Bali's most popular tourist destinations. Whether you're staying 
                in the cultural heart of Ubud, the beachside energy of Canggu, the upscale charm of Seminyak, the peaceful 
                shores of Sanur, or the luxury resorts of Nusa Dua, professional home massage comes directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Each location offers the full range of home massage services including 
                <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline"> Balinese home massage</span></Link>, 
                <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue home massage</span></Link>, 
                <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation home massage</span></Link>, and 
                <Link href="/home-massage/services/couples"><span className="text-primary hover:underline"> couples home massage</span></Link>. 
                Same professional standards apply regardless of your location.
              </p>
              <p className="text-lg text-muted-foreground">
                Every home massage booking includes same-day availability, flexible scheduling from 9 AM to 9 PM, and licensed 
                therapists who arrive with complete equipment for spa-quality treatments in your private space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Cards */}
      <section id="cities" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Home Massage Available In These Cities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Ubud */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/cities/ubud">
                        <span className="hover:text-primary cursor-pointer">
                          Home Massage in Ubud
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Bali's cultural and wellness capital. Home massage in Ubud reaches jungle villas, rice terrace 
                    accommodations, and central hotels. Perfect complement to yoga retreats and spiritual exploration.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>All villa types</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Rice field locations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Town center hotels</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/home-massage/cities/ubud">
                      View Ubud Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Canggu */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/cities/canggu">
                        <span className="hover:text-primary cursor-pointer">
                          Home Massage in Canggu
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Surf, beach clubs, and digital nomad culture. Home massage in Canggu serves beachfront villas, 
                    co-living spaces, and boutique hotels. Ideal for active lifestyles needing recovery.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Beachfront properties</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Co-living spaces</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Boutique hotels</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/home-massage/cities/canggu">
                      View Canggu Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Seminyak */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/cities/seminyak">
                        <span className="hover:text-primary cursor-pointer">
                          Home Massage in Seminyak
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Upscale dining, luxury shopping, sophisticated beach scene. Home massage in Seminyak reaches 
                    luxury villas, high-end hotels, and beachfront residences with five-star service standards.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Luxury villas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>5-star hotels</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Beachfront estates</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/home-massage/cities/seminyak">
                      View Seminyak Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Sanur */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/cities/sanur">
                        <span className="hover:text-primary cursor-pointer">
                          Home Massage in Sanur
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Peaceful beaches, family-friendly atmosphere, laid-back elegance. Home massage in Sanur serves 
                    beachside resorts, family villas, and quiet guesthouses with relaxed, professional service.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Beachside resorts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Family villas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Boutique hotels</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/home-massage/cities/sanur">
                      View Sanur Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Nusa Dua */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/cities/nusa-dua">
                        <span className="hover:text-primary cursor-pointer">
                          Home Massage in Nusa Dua
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Pristine beaches, international resorts, manicured paradise. Home massage in Nusa Dua delivers 
                    to luxury resort villas, gated estates, and premium accommodations with white-glove service.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Resort villas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Gated estates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Luxury hotels</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/home-massage/cities/nusa-dua">
                      View Nusa Dua Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Universal Features */}
      <section id="features" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Every Location Gets the Same Quality Home Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Same-Day Booking</h3>
                  <p className="text-muted-foreground text-sm">
                    Book home massage with as little as 2 hours notice across all cities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed Therapists</h3>
                  <p className="text-muted-foreground text-sm">
                    Every home massage delivered by certified professionals with 5+ years experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Complete Equipment</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional massage table, linens, oils, and towels included in every home massage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Flexible Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Home massage available 9 AM to 9 PM daily in all locations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <SafetyStandards />

      {/* Spider Links Block */}
      <SpiderLinksBlock currentPage="/home-massage/cities" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ items={[
          {
            question: "Which cities in Bali offer home massage services?",
            answer: "We provide home massage throughout Bali's most popular destinations including Ubud, Canggu, Seminyak, Sanur, and Nusa Dua. All cities receive the same professional service with licensed therapists and complete equipment."
          },
          {
            question: "How do I book home massage in different cities?",
            answer: "Book home massage in any Bali city by contacting us via WhatsApp at +62 811-2656-869. Provide your city, accommodation name, preferred time, and massage type. We confirm availability and arrange therapist arrival."
          },
          {
            question: "Is home massage pricing the same in all cities?",
            answer: "Home massage pricing is consistent across all cities we serve. Rates include therapist travel, professional equipment, premium oils, and flexible scheduling. Contact us for exact pricing for your location and preferred treatment."
          },
          {
            question: "What types of home massage are available in all cities?",
            answer: "All cities receive the full range of home massage services including Balinese massage, deep tissue massage, relaxation massage, and couples massage. Same professional standards apply regardless of location."
          },
          {
            question: "Can I get home massage in remote villa locations?",
            answer: "Yes! Our home massage service reaches all accommodation types including remote rice field villas in Ubud, beachfront properties in Canggu, and gated estates in Nusa Dua. We navigate to your exact location."
          },
          {
            question: "How quickly can I get home massage in different cities?",
            answer: "Most home massage requests are accommodated within 1-4 hours depending on the city. Canggu and Seminyak typically have 1-3 hour response times, while Ubud and Sanur average 2-4 hours. Same-day booking available in all locations."
          }
        ]} />
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Home Massage in Your City?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your location and experience professional home massage at your villa or hotel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Order Home Massage
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/home-massage">
                  Back to Home Massage Hub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Browse Home Massage Services
            </h2>
            <p className="text-muted-foreground mb-8">
              All services available in every city listed above
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/home-massage/services/balinese">
                  Balinese Home Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home-massage/services/deep-tissue">
                  Deep Tissue Home Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home-massage/services/relaxation">
                  Relaxation Home Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home-massage/services/couples">
                  Couples Home Massage
                </Link>
              </Button>
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
