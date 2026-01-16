import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Check } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function HomeMassageCanggu() {
  return (
    <>
      <SEOHead 
        title="Home Massage in Canggu | Ubud Luxury Villas"
        description="Professional home massage service throughout Canggu. Licensed therapists deliver spa-quality treatments to your villa, hotel, or apartment. Same-day booking available via call or WhatsApp."
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
              <span className="text-lg font-semibold text-primary">Canggu, Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage in Canggu
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage delivered to any Canggu accommodation
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <TableOfContents items={[
        { id: 'why-canggu', label: 'Why Home Massage Fits Canggu' },
        { id: 'accommodations', label: 'Canggu Accommodations' },
        { id: 'availability', label: 'Availability & Response Time' },
        { id: 'services', label: 'Services Available in Canggu' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'Frequently Asked Questions' }
      ]} />

      {/* Block 2: Why home massage fits this city */}
      <section id="why-canggu" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Home Massage Fits Canggu Perfectly
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Canggu's vibrant yoga and wellness culture makes home massage the perfect complement to your beach lifestyle. 
                After surfing or morning yoga sessions at one of the area's studios, home massage delivers therapeutic recovery 
                directly to your villa or apartment. Our home massage service reaches every corner of Canggu, from the beachfront 
                areas to the residential neighborhoods beyond Jl. Pantai Berawa.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The Canggu expat community values convenience and quality wellness services. Home massage eliminates the need 
                to navigate traffic or find parking at busy spa centers. Whether you're staying in a modern beach villa, boutique 
                apartment, or beachfront hotel, home massage allows you to integrate professional therapeutic treatment into your 
                daily wellness routine without disrupting your schedule.
              </p>
              <p className="text-lg text-muted-foreground">
                Canggu's diverse visitor base—from digital nomads to surfers to corporate retreats—means varied scheduling needs. 
                Home massage accommodates early morning treatments for surfers, midday sessions for office workers, and evening 
                relaxation for travelers. Our flexible home massage service adapts to your routine, whether you're staying short-term 
                or settling into the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Common accommodations */}
      <section id="accommodations" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Throughout Canggu Accommodations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Beachfront Villas</h3>
                  <p className="text-muted-foreground">
                    Modern beachfront properties receive home massage service in private pools or villas with ocean views and complete spa setup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Modern Apartments</h3>
                  <p className="text-muted-foreground">
                    Contemporary apartments and condominiums in Canggu welcome home massage therapists for in-room treatments with professional equipment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Boutique Hotels</h3>
                  <p className="text-muted-foreground">
                    Design-focused hotels throughout Canggu coordinate seamlessly with our home massage service for in-room or terrace treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Co-living Spaces</h3>
                  <p className="text-muted-foreground">
                    Digital nomad communities and co-living arrangements receive professional home massage service for individual guests and groups.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Availability & Response Time */}
      <section id="availability" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Home Massage Availability in Canggu
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily 7 AM - 11 PM</h3>
                <p className="text-muted-foreground">
                  Home massage service available throughout Canggu every day including weekends and holidays
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Same-Day Booking</h3>
                <p className="text-muted-foreground">
                  Most Canggu home massage requests accommodated within 1-3 hours of contact via WhatsApp
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">All Canggu Areas</h3>
                <p className="text-muted-foreground">
                  Home massage reaching beachfront, Pantai Berawa, residential neighborhoods, and surrounding Canggu zones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Services available in this city */}
      <section id="services" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Services Available in Canggu
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/home-massage/services/deep-tissue">
                      <span className="hover:text-primary cursor-pointer">Deep Tissue Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Therapeutic home massage for surfers targeting sore shoulders and back muscles. Perfect post-session recovery.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/deep-tissue">
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
                    Traditional Balinese techniques delivered as home massage for cultural wellness experiences in your Canggu villa.
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
                    <Link href="/home-massage/services/couples">
                      <span className="hover:text-primary cursor-pointer">Couples Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Romantic side-by-side home massage in your Canggu beachfront retreat. Perfect for couples and wellness getaways.
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
                    <Link href="/home-massage/services/relaxation">
                      <span className="hover:text-primary cursor-pointer">Relaxation Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Gentle, stress-relieving home massage that complements Canggu's yoga culture with pure relaxation and recovery.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/relaxation">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <SafetyStandards />

      {/* Spider Links Block */}
      <SpiderLinksBlock currentPage="/home-massage/cities/canggu" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ faqs={[
          {
            question: "How quickly can I get home massage in Canggu?",
            answer: "Most home massage requests in Canggu are accommodated within 1-3 hours of contact via WhatsApp. We offer same-day booking throughout Canggu, including beachfront villas, apartments, and boutique hotels. Contact us early for best availability."
          },
          {
            question: "What areas in Canggu do you serve for home massage?",
            answer: "Our home massage service covers all of Canggu including beachfront areas, Pantai Berawa, Echo Beach, Batu Bolong, and residential neighborhoods. Whether you're in a modern villa or co-living space, we reach your location."
          },
          {
            question: "Do you provide home massage to hotels in Canggu?",
            answer: "Yes, we deliver home massage to all types of Canggu accommodations including boutique hotels, beachfront properties, modern apartments, and co-living spaces. Our therapists coordinate seamlessly with your accommodation."
          },
          {
            question: "What types of home massage are available in Canggu?",
            answer: "Canggu home massage includes deep tissue massage (perfect for surfers), Balinese massage, relaxation massage, and couples massage. All treatments are delivered with professional equipment directly to your accommodation."
          },
          {
            question: "How do I book home massage in Canggu?",
            answer: "Book home massage in Canggu by contacting us via WhatsApp at +62 811-2656-869. Provide your accommodation name, preferred time, and massage type. We confirm availability and arrange therapist arrival."
          },
          {
            question: "Is home massage in Canggu good for surfers?",
            answer: "Absolutely! Home massage is ideal for post-surf recovery. Our deep tissue treatments target sore shoulders and back muscles from paddling. Schedule treatments after your surf sessions for optimal recovery."
          }
        ]} />
      </section>

      {/* Block 6: CTA and Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Home Massage in Canggu
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional home massage service delivered throughout Canggu area
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
                  <Link href="/home-massage/services/deep-tissue">
                    Deep Tissue Home Massage
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/cities/seminyak">
                    Home Massage in Seminyak →
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
