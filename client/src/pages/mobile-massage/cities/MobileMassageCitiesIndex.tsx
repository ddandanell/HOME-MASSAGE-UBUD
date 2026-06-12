import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Check, ArrowRight, Clock } from 'lucide-react';

export default function MobileMassageCitiesIndex() {
  return (
    <>
      <SEOHead 
        title="Mobile Massage by City | Service Areas Across Bali"
        description="Home massage service available throughout Bali. Professional treatments delivered to your villa in Ubud, Canggu, Seminyak, Sanur, and Nusa Dua. Same-day booking across all locations."
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
              Mobile Massage Across Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional mobile massage delivered to your villa or hotel in Bali's most popular destinations
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability for Mobile Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Mobile Massage Service Throughout Bali
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Our mobile massage service operates across Bali's most popular tourist destinations. Whether you're staying 
                in the cultural heart of Ubud, the beachside energy of Canggu, the upscale charm of Seminyak, the peaceful 
                shores of Sanur, or the luxury resorts of Nusa Dua, professional mobile massage comes directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Each location offers the full range of mobile massage services including 
                <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline"> Balinese mobile massage</span></Link>, 
                <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue mobile massage</span></Link>, 
                <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation mobile massage</span></Link>, and 
                <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline"> couples mobile massage</span></Link>. 
                Same professional standards apply regardless of your location.
              </p>
              <p className="text-lg text-muted-foreground">
                Every mobile massage booking includes same-day availability, flexible scheduling from 9 AM to 9 PM, and licensed 
                therapists who arrive with complete equipment for spa-quality treatments in your private space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Cards */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Mobile Massage Available In These Cities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Ubud */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/cities/ubud">
                        <span className="hover:text-primary cursor-pointer">
                          Mobile Massage in Ubud
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
                    <Link href="/mobile-massage/cities/ubud">
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
                      <Link href="/mobile-massage/cities/canggu">
                        <span className="hover:text-primary cursor-pointer">
                          Mobile Massage in Canggu
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
                    <Link href="/mobile-massage/cities/canggu">
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
                      <Link href="/mobile-massage/cities/seminyak">
                        <span className="hover:text-primary cursor-pointer">
                          Mobile Massage in Seminyak
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
                    <Link href="/mobile-massage/cities/seminyak">
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
                      <Link href="/mobile-massage/cities/sanur">
                        <span className="hover:text-primary cursor-pointer">
                          Mobile Massage in Sanur
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
                    <Link href="/mobile-massage/cities/sanur">
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
                      <Link href="/mobile-massage/cities/nusa-dua">
                        <span className="hover:text-primary cursor-pointer">
                          Mobile Massage in Nusa Dua
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
                    <Link href="/mobile-massage/cities/nusa-dua">
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Every Location Gets the Same Quality Mobile Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Same-Day Booking</h3>
                  <p className="text-muted-foreground text-sm">
                    Book mobile massage with as little as 2 hours notice across all cities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed Therapists</h3>
                  <p className="text-muted-foreground text-sm">
                    Every mobile massage delivered by certified professionals with 5+ years experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">All Supplies Included</h3>
                  <p className="text-muted-foreground text-sm">
                    Fresh linens, oils, and towels included in every mobile massage
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Mobile Massage in Your City?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your location and experience professional mobile massage at your villa or hotel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Order Mobile Massage
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mobile-massage">
                  Back to Mobile Massage Hub
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
              Browse Mobile Massage Services
            </h2>
            <p className="text-muted-foreground mb-8">
              All services available in every city listed above
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/balinese">
                  Balinese Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/deep-tissue">
                  Deep Tissue Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/relaxation">
                  Relaxation Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/couples">
                  Couples Mobile Massage
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
