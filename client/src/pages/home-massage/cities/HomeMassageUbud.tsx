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

export default function HomeMassageUbud() {
  return (
    <>
      <SEOHead 
        title="Home Massage in Ubud | Ubud Luxury Villas"
        description="Professional home massage service throughout Ubud. Licensed therapists deliver spa-quality treatments to your villa, hotel, or guesthouse. Same-day booking available via call or WhatsApp."
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
              <span className="text-lg font-semibold text-primary">Ubud, Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage in Ubud
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage delivered to any Ubud accommodation
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
        { id: 'why-ubud', label: 'Why Home Massage Fits Ubud' },
        { id: 'accommodations', label: 'Ubud Accommodations' },
        { id: 'availability', label: 'Availability & Response Time' },
        { id: 'services', label: 'Services Available in Ubud' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'Frequently Asked Questions' }
      ]} />

      {/* Block 2: Why home massage fits this city */}
      <section id="why-ubud" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Home Massage Fits Ubud Perfectly
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Ubud's spread-out geography makes home massage the ideal spa solution. Rice terrace villas, jungle retreats, 
                and hilltop accommodations often sit far from town center spas. Our home massage service navigates Ubud's 
                winding roads so you don't have to, delivering professional treatments directly to your peaceful villa location.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The wellness culture in Ubud means visitors seek authentic healing experiences. Home massage allows you to 
                maintain the tranquil energy of your accommodation while receiving traditional Balinese techniques. After 
                yoga sessions or meditation, home massage continues your wellness journey without disrupting your centered state.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Ubud's humid afternoons and evening rain make leaving your villa inconvenient. Home massage eliminates weather 
                concerns and transportation logistics. Whether you're staying in central Ubud, the monkey forest area, Tegallalang, 
                or surrounding villages, our home massage therapists reach you reliably and punctually.
              </p>
              <p className="text-lg text-muted-foreground">
                The growing demand for home massage in Ubud reflects changing tourist preferences toward convenience and privacy. 
                Visitors increasingly value experiences that fit their accommodation-centered lifestyle rather than requiring 
                additional travel. Home massage meets this need perfectly, delivering spa-quality treatments without disrupting 
                the peaceful retreat atmosphere that draws people to Ubud in the first place.
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
              Home Massage Throughout Ubud Accommodations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Private Villas</h3>
                  <p className="text-muted-foreground">
                    Rice field villas and jungle retreats receive full home massage service with complete privacy and spa setup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Boutique Hotels</h3>
                  <p className="text-muted-foreground">
                    Ubud's design hotels welcome home massage therapists to deliver treatments in your room or private terrace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Luxury Resorts</h3>
                  <p className="text-muted-foreground">
                    High-end properties throughout Ubud coordinate seamlessly with our home massage service for in-room treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Guesthouses & Homestays</h3>
                  <p className="text-muted-foreground">
                    Budget-friendly Ubud accommodations receive the same professional home massage service and equipment.
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
              Home Massage Availability in Ubud
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily 8 AM - 10 PM</h3>
                <p className="text-muted-foreground">
                  Home massage service available throughout Ubud every day including weekends and holidays
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Same-Day Booking</h3>
                <p className="text-muted-foreground">
                  Most Ubud home massage requests accommodated within 2-4 hours of contact via WhatsApp
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">All Ubud Areas</h3>
                <p className="text-muted-foreground">
                  Home massage reaching Central Ubud, Tegallalang, Sayan, Penestanan, and surrounding villages
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
              Home Massage Services Available in Ubud
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/home-massage/services/balinese">
                      <span className="hover:text-primary cursor-pointer">Balinese Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Traditional Balinese techniques delivered as home massage in your Ubud villa. Perfect for cultural immersion.
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
                    Therapeutic home massage for hikers and active travelers throughout Ubud. Target muscle tension effectively.
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
                    <Link href="/home-massage/services/couples">
                      <span className="hover:text-primary cursor-pointer">Couples Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Romantic side-by-side home massage in your Ubud retreat. Perfect for honeymoons and wellness getaways.
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
                    Gentle, stress-relieving home massage that complements Ubud's wellness atmosphere with pure relaxation.
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
      <SpiderLinksBlock currentPage="/home-massage/cities/ubud" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ faqs={[
          {
            question: "How quickly can I get home massage in Ubud?",
            answer: "Most home massage requests in Ubud are accommodated within 2-4 hours of contact via WhatsApp. We offer same-day booking throughout Ubud, including rice terrace villas, jungle retreats, and central accommodations. Contact us early for best availability."
          },
          {
            question: "What areas in Ubud do you serve for home massage?",
            answer: "Our home massage service covers all of Ubud including Central Ubud, Tegallalang, Sayan, Penestanan, Monkey Forest area, and surrounding villages. Whether you're staying in a remote rice field villa or town center hotel, we reach your location."
          },
          {
            question: "Do you provide home massage to hotels in Ubud?",
            answer: "Yes, we deliver home massage to all types of Ubud accommodations including boutique hotels, luxury resorts, guesthouses, and private villas. Our therapists coordinate with hotel staff to ensure smooth access to your room or private terrace."
          },
          {
            question: "What types of home massage are available in Ubud?",
            answer: "Ubud home massage includes Balinese massage, deep tissue massage, relaxation massage, and couples massage. All treatments are delivered with professional equipment and premium oils directly to your accommodation."
          },
          {
            question: "How do I book home massage in Ubud?",
            answer: "Book home massage in Ubud by contacting us via WhatsApp at +62 811-2656-869. Provide your accommodation name, preferred time, and massage type. We confirm availability and arrange therapist arrival to your Ubud location."
          },
          {
            question: "Is home massage in Ubud suitable after yoga retreats?",
            answer: "Absolutely! Home massage is perfect after yoga sessions or meditation. Our therapists deliver treatments that complement Ubud's wellness culture, helping you maintain the centered state achieved during your spiritual practices."
          }
        ]} />
      </section>

      {/* Block 6: CTA and Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Home Massage in Ubud
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional home massage service delivered throughout Ubud area
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
                  <Link href="/home-massage/services/balinese">
                    Balinese Home Massage
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/cities/canggu">
                    Home Massage in Canggu →
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
