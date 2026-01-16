import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Check } from 'lucide-react';

export default function HomeMassageSeminyak() {
  return (
    <>
      <SEOHead 
        title="Home Massage in Seminyak | Professional Villa Massage Service"
        description="Professional home massage service throughout Seminyak. Licensed therapists deliver spa-quality treatments to your villa, resort, or apartment. Same-day booking available. Perfect for luxury accommodations."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* H1: Home Massage in [City] */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Seminyak, Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage in Seminyak
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage delivered to any Seminyak accommodation
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 2: Why home massage fits this city */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Home Massage Fits Seminyak Perfectly
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Seminyak's luxury resort culture makes home massage the ultimate convenience for high-end travelers and resort 
                guests. Rather than navigating the busy beach clubs and crowded spas, home massage delivers premium therapeutic 
                treatment directly to your private villa or resort suite. Our home massage service seamlessly coordinates with 
                Seminyak's luxury properties, ensuring professional treatment that matches your accommodation's standards.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Guests at Seminyak's most exclusive resorts and beachfront villas expect personalized service without 
                compromising privacy. Home massage provides exactly that—therapists arrive discreetly to your villa or room, 
                bringing professional spa equipment and delivering treatments at the comfort level you prefer. Whether you're 
                experiencing jet lag or simply seeking relaxation between beach club outings, home massage fits the Seminyak 
                lifestyle perfectly.
              </p>
              <p className="text-lg text-muted-foreground">
                Seminyak's high-end visitor base values time and convenience above all. Home massage eliminates transportation, 
                parking concerns, and scheduling conflicts with other activities. After dinner at a beachfront restaurant or 
                during your morning wellness routine, home massage adapts to your schedule. Our professional home massage service 
                reaches every prestigious property in Seminyak, from five-star resorts to private beachfront villas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Common accommodations */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Throughout Seminyak Accommodations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Five-Star Resorts</h3>
                  <p className="text-muted-foreground">
                    Premium beachfront resorts throughout Seminyak welcome home massage therapists for luxury in-room and terrace treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Private Beachfront Villas</h3>
                  <p className="text-muted-foreground">
                    Exclusive beach villas and luxury properties receive full home massage service with complete privacy and professional spa setup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Boutique Hotels</h3>
                  <p className="text-muted-foreground">
                    Design-focused boutique accommodations in Seminyak coordinate seamlessly with our home massage service for personalized treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Luxury Apartments</h3>
                  <p className="text-muted-foreground">
                    High-end serviced apartments and condominiums in Seminyak receive professional home massage service with premium equipment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Availability & Response Time */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Home Massage Availability in Seminyak
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily 7 AM - 11 PM</h3>
                <p className="text-muted-foreground">
                  Home massage service available throughout Seminyak every day including weekends and holidays
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Same-Day Booking</h3>
                <p className="text-muted-foreground">
                  Most Seminyak home massage requests accommodated within 1-3 hours of contact via WhatsApp
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">All Seminyak Areas</h3>
                <p className="text-muted-foreground">
                  Home massage reaching beachfront properties, beach clubs, residential zones, and all Seminyak neighborhoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Services available in this city */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Services Available in Seminyak
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/home-massage/services/relaxation">
                      <span className="hover:text-primary cursor-pointer">Relaxation Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Gentle, stress-relieving home massage at your Seminyak resort or villa. Perfect for unwinding between activities.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/relaxation">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/home-massage/services/couples">
                      <span className="hover:text-primary cursor-pointer">Couples Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Romantic side-by-side home massage in your beachfront villa or suite. Ideal for honeymoons and special occasions.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/couples">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/home-massage/services/balinese">
                      <span className="hover:text-primary cursor-pointer">Balinese Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Traditional Balinese techniques delivered as home massage for authentic wellness experiences in Seminyak.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/balinese">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/home-massage/services/deep-tissue">
                      <span className="hover:text-primary cursor-pointer">Deep Tissue Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Therapeutic home massage for tension and muscle recovery. Premium treatment delivered with professional expertise.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/deep-tissue">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: CTA and Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Home Massage in Seminyak
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional home massage service delivered throughout Seminyak area
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Check Availability
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Home Massage Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage">
                    ← All Home Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/services/couples">
                    Couples Home Massage
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/cities/sanur">
                    Home Massage in Sanur →
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage/blog/how-to-book-home-massage">
                    Booking Guide
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/knowledge/safety">
                    Safety Standards
                  </Link>
                </Button>
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
