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

export default function HomeMassageNusaDua() {
  return (
    <>
      <SEOHead 
        title="Home Massage in Nusa Dua | Ubud Luxury Villas"
        description="Professional home massage service throughout Nusa Dua. Licensed therapists deliver spa-quality treatments to luxury resorts, villas, and hotels. Same-day booking available via call or WhatsApp."
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
              <span className="text-lg font-semibold text-primary">Nusa Dua, Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage in Nusa Dua
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage delivered to any Nusa Dua accommodation
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
        { id: 'why-nusa-dua', label: 'Why Home Massage Fits Nusa Dua' },
        { id: 'accommodations', label: 'Nusa Dua Accommodations' },
        { id: 'availability', label: 'Availability & Response Time' },
        { id: 'services', label: 'Services Available in Nusa Dua' },
        { id: 'experience', label: 'The Nusa Dua Experience' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'Frequently Asked Questions' }
      ]} />

      {/* Block 2: Why home massage fits this city */}
      <section id="why-nusa-dua" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Home Massage Fits Nusa Dua Perfectly
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Nusa Dua's pristine beaches and international resort environment make home massage the ultimate luxury convenience. 
                This manicured paradise attracts discerning travelers who expect premium service without compromise. Our home massage 
                service integrates seamlessly with Nusa Dua's five-star resorts and private villas, delivering spa-quality treatments 
                that match the exceptional standards of your accommodation. Whether you're staying at a beachfront resort or gated 
                estate, home massage brings professional therapeutic care directly to your luxurious retreat.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The gated resort complex of Nusa Dua creates an exclusive environment where privacy and personalized service reign 
                supreme. Home massage perfectly complements this atmosphere—licensed therapists arrive discreetly to your villa or 
                suite, bringing professional equipment and expertise that rivals the resort spas themselves. After championship golf, 
                water sports at pristine beaches, or exploring the nearby cultural sites, home massage provides therapeutic recovery 
                without leaving your private sanctuary. Our home massage service understands the elevated expectations of Nusa Dua 
                guests and delivers accordingly.
              </p>
              <p className="text-lg text-muted-foreground">
                Nusa Dua's international resort area attracts luxury travelers, corporate groups, and wellness-focused visitors who 
                value efficiency and excellence. Home massage eliminates coordination with resort spa schedules and allows you to 
                integrate therapeutic treatment into your vacation itinerary on your terms. Whether you need pre-event relaxation, 
                post-travel recovery, or daily wellness maintenance, home massage adapts to your sophisticated lifestyle. From the 
                manicured gardens of luxury estates to oceanfront suites with private pools, our professional home massage service 
                reaches every prestigious property throughout the Nusa Dua peninsula.
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
              Home Massage Throughout Nusa Dua Accommodations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">International Five-Star Resorts</h3>
                  <p className="text-muted-foreground">
                    World-class resort properties throughout Nusa Dua welcome home massage therapists for luxury in-room and private villa treatments with professional spa equipment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Private Gated Villas</h3>
                  <p className="text-muted-foreground">
                    Exclusive gated estates and luxury villas receive full home massage service with complete privacy, professional setup, and attention to premium standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Beachfront Luxury Hotels</h3>
                  <p className="text-muted-foreground">
                    Premium beachfront properties along Nusa Dua's pristine coastline coordinate seamlessly with our home massage service for oceanview treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Resort Suites & Penthouses</h3>
                  <p className="text-muted-foreground">
                    Luxury suites and penthouse accommodations in Nusa Dua's finest resorts receive professional home massage service with personalized attention.
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
              Home Massage Availability in Nusa Dua
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily 7 AM - 11 PM</h3>
                <p className="text-muted-foreground">
                  Home massage service available throughout Nusa Dua every day including weekends and holidays
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Same-Day Booking</h3>
                <p className="text-muted-foreground">
                  Most Nusa Dua home massage requests accommodated within 1-3 hours of contact via WhatsApp
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">All Nusa Dua Areas</h3>
                <p className="text-muted-foreground">
                  Home massage reaching BTDC resort complex, gated estates, beachfront properties, and all Nusa Dua neighborhoods
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
              Home Massage Services Available in Nusa Dua
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
                    Gentle, stress-relieving home massage delivered to your Nusa Dua resort or villa. Perfect for unwinding in paradise with professional care.
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
                    Romantic side-by-side home massage in your Nusa Dua beachfront villa or suite. Ideal for honeymoons, anniversaries, and luxury getaways.
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
                    Traditional Balinese techniques delivered as home massage in your luxury accommodation. Experience authentic healing traditions with resort-quality service.
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
                    Therapeutic home massage for post-golf recovery and active vacation muscle tension. Professional treatment matching five-star resort spa standards.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/home-massage/services/deep-tissue">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Home Massage Pricing in Nusa Dua
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Home massage pricing in Nusa Dua reflects the premium service standards and resort-area convenience. Our rates 
                  include professional therapist travel throughout the gated resort complex, complete spa equipment setup in your 
                  accommodation, and quality oils and treatment materials. Nusa Dua home massage typically ranges from 320,000 IDR 
                  to 590,000 IDR for single treatments, with couples home massage starting around 850,000 IDR.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The pricing for home massage in Nusa Dua considers the exclusive nature of the area and coordination required 
                  with international resort properties. Unlike walk-in spa pricing, home massage rates incorporate therapist 
                  transportation to your specific villa or suite, flexible scheduling that accommodates your itinerary, and the 
                  convenience of not leaving your luxurious accommodation. Extended home massage sessions and specialty treatments 
                  are priced accordingly, with full pricing details provided when you contact us via WhatsApp.
                </p>
                <p className="text-lg text-muted-foreground">
                  Many Nusa Dua guests book home massage as part of their daily wellness routine, taking advantage of the 
                  convenience and privacy that in-villa treatments provide. Whether you need a single relaxation home massage 
                  after arrival, daily deep tissue sessions throughout your stay, or a special couples home massage for a romantic 
                  evening, our flexible pricing accommodates both individual treatments and multiple-session arrangements. Contact 
                  us directly for exact home massage pricing tailored to your specific Nusa Dua accommodation and treatment preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: Detailed Benefits Section */}
      <section id="experience" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Nusa Dua Home Massage Experience
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Nusa Dua's reputation as Bali's premier luxury resort destination means guests expect exceptional service in every 
                aspect of their stay. Home massage delivers exactly this level of excellence—professional licensed therapists who 
                understand the elevated standards of Nusa Dua's international clientele arrive punctually to your accommodation with 
                complete professional equipment. The home massage experience begins with a courtesy coordination call to confirm your 
                preferred treatment time and any specific therapeutic needs or preferences.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our home massage therapists navigate Nusa Dua's gated resort complexes with established professional relationships, 
                ensuring smooth access to your villa or hotel room. Whether you're staying at the prestigious properties along Pantai 
                Geger, the beachfront resorts of the BTDC complex, or private estates in the surrounding area, home massage service 
                reaches you reliably. Each home massage session includes treatment consultation, professional draping and positioning, 
                premium organic oils, and post-treatment wellness recommendations—all delivered with the discretion and professionalism 
                that Nusa Dua guests expect.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The pristine beaches and manicured gardens of Nusa Dua create an ideal backdrop for home massage treatments. Many 
                guests schedule home massage on private terraces overlooking tropical gardens or in villa spaces with ocean breezes, 
                enhancing the therapeutic experience with Nusa Dua's natural beauty. Home massage allows you to fully experience the 
                tranquility of your luxury accommodation—after treatment, you can transition immediately to your private pool, continue 
                relaxing in your suite, or prepare for evening activities without the disruption of leaving the property.
              </p>
              <p className="text-lg text-muted-foreground">
                For corporate groups, wedding parties, and family gatherings in Nusa Dua, home massage provides flexible scheduling 
                that accommodates multiple treatments throughout the day. Our service can coordinate simultaneous home massage sessions 
                for groups staying in multi-bedroom villas, or schedule sequential treatments for wedding parties preparing for 
                ceremonies. This level of coordination and flexibility makes home massage an integral part of the luxury Nusa Dua 
                experience, whether you're visiting for business, celebration, or pure relaxation in one of Bali's most exclusive 
                resort areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <SafetyStandards />

      {/* Spider Links Block */}
      <SpiderLinksBlock currentPage="/home-massage/cities/nusa-dua" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ items={[
          {
            question: "How quickly can I get home massage in Nusa Dua?",
            answer: "Most home massage requests in Nusa Dua are accommodated within 1-3 hours of contact via WhatsApp. We offer same-day booking throughout Nusa Dua, including five-star resorts, gated villas, and luxury hotels. Contact us early for best availability."
          },
          {
            question: "What areas in Nusa Dua do you serve for home massage?",
            answer: "Our home massage service covers all of Nusa Dua including the BTDC resort complex, Pantai Geger, gated estates, beachfront properties, and all Nusa Dua neighborhoods. We reach every prestigious property throughout the peninsula."
          },
          {
            question: "Do you provide home massage to hotels in Nusa Dua?",
            answer: "Yes, we deliver home massage to all Nusa Dua accommodations including international five-star resorts, luxury hotels, beachfront properties, and private gated villas. Our therapists coordinate seamlessly with high-end resort properties."
          },
          {
            question: "What types of home massage are available in Nusa Dua?",
            answer: "Nusa Dua home massage includes relaxation massage, couples massage, traditional Balinese massage, and deep tissue massage. All treatments are delivered with professional equipment and premium oils matching five-star resort spa standards."
          },
          {
            question: "How do I book home massage in Nusa Dua?",
            answer: "Book home massage in Nusa Dua by contacting us via WhatsApp at +62 811-2656-869. Provide your resort or villa name, preferred time, and massage type. We confirm availability and arrange therapist arrival to your luxury Nusa Dua location."
          },
          {
            question: "Is home massage in Nusa Dua suitable for resort guests?",
            answer: "Absolutely! Home massage is ideal for resort guests in Nusa Dua. We coordinate with resort security and staff to provide seamless in-room or villa treatments that match the premium service standards you expect from luxury accommodations."
          }
        ]} />
      </section>

      {/* Block 7: CTA and Links */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Home Massage in Nusa Dua
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional home massage service delivered throughout Nusa Dua's luxury resort area
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
