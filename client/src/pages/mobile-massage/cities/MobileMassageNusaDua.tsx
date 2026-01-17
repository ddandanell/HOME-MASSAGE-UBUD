import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Check } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function MobileMassageNusaDua() {
  return (
    <>
      <SEOHead 
        title="Mobile Massage in Nusa Dua | Professional Villa & Resort Massage Service"
        description="Professional mobile massage service throughout Nusa Dua. Licensed therapists deliver spa-quality treatments to luxury resorts, villas, and hotels. Same-day booking available. Perfect for pristine beach resort area."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* H1: Mobile Massage in [City] */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Nusa Dua, Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Massage in Nusa Dua
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional mobile massage delivered to any Nusa Dua accommodation
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 2: Why mobile massage fits this city */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Mobile Massage Fits Nusa Dua Perfectly
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Nusa Dua's pristine beaches and international resort environment make mobile massage the ultimate luxury convenience. 
                This manicured paradise attracts discerning travelers who expect premium service without compromise. Our mobile massage 
                service integrates seamlessly with Nusa Dua's five-star resorts and private villas, delivering spa-quality treatments 
                that match the exceptional standards of your accommodation. Whether you're staying at a beachfront resort or gated 
                estate, mobile massage brings professional therapeutic care directly to your luxurious retreat.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The gated resort complex of Nusa Dua creates an exclusive environment where privacy and personalized service reign 
                supreme. Home massage perfectly complements this atmosphere—licensed therapists arrive discreetly to your villa or 
                suite, bringing professional equipment and expertise that rivals the resort spas themselves. After championship golf, 
                water sports at pristine beaches, or exploring the nearby cultural sites, mobile massage provides therapeutic recovery 
                without leaving your private sanctuary. Our mobile massage service understands the elevated expectations of Nusa Dua 
                guests and delivers accordingly.
              </p>
              <p className="text-lg text-muted-foreground">
                Nusa Dua's international resort area attracts luxury travelers, corporate groups, and wellness-focused visitors who 
                value efficiency and excellence. Home massage eliminates coordination with resort spa schedules and allows you to 
                integrate therapeutic treatment into your vacation itinerary on your terms. Whether you need pre-event relaxation, 
                post-travel recovery, or daily wellness maintenance, mobile massage adapts to your sophisticated lifestyle. From the 
                manicured gardens of luxury estates to oceanfront suites with private pools, our professional mobile massage service 
                reaches every prestigious property throughout the Nusa Dua peninsula.
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
              Mobile Massage Throughout Nusa Dua Accommodations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">International Five-Star Resorts</h3>
                  <p className="text-muted-foreground">
                    World-class resort properties throughout Nusa Dua welcome mobile massage therapists for luxury in-room and private villa treatments with professional spa equipment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Private Gated Villas</h3>
                  <p className="text-muted-foreground">
                    Exclusive gated estates and luxury villas receive full mobile massage service with complete privacy, professional setup, and attention to premium standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Beachfront Luxury Hotels</h3>
                  <p className="text-muted-foreground">
                    Premium beachfront properties along Nusa Dua's pristine coastline coordinate seamlessly with our mobile massage service for oceanview treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Resort Suites & Penthouses</h3>
                  <p className="text-muted-foreground">
                    Luxury suites and penthouse accommodations in Nusa Dua's finest resorts receive professional mobile massage service with personalized attention.
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
              Mobile Massage Availability in Nusa Dua
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
                  Most Nusa Dua mobile massage requests accommodated within 1-3 hours of contact via WhatsApp
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
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mobile Massage Services Available in Nusa Dua
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/mobile-massage/services/relaxation">
                      <span className="hover:text-primary cursor-pointer">Relaxation Mobile Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Gentle, stress-relieving mobile massage delivered to your Nusa Dua resort or villa. Perfect for unwinding in paradise with professional care.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/mobile-massage/services/relaxation">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/mobile-massage/services/couples">
                      <span className="hover:text-primary cursor-pointer">Couples Mobile Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Romantic side-by-side mobile massage in your Nusa Dua beachfront villa or suite. Ideal for honeymoons, anniversaries, and luxury getaways.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/mobile-massage/services/couples">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/mobile-massage/services/balinese">
                      <span className="hover:text-primary cursor-pointer">Balinese Mobile Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Traditional Balinese techniques delivered as mobile massage in your luxury accommodation. Experience authentic healing traditions with resort-quality service.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/mobile-massage/services/balinese">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    <Link href="/mobile-massage/services/deep-tissue">
                      <span className="hover:text-primary cursor-pointer">Deep Tissue Mobile Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Therapeutic mobile massage for post-golf recovery and active vacation muscle tension. Professional treatment matching five-star resort spa standards.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/mobile-massage/services/deep-tissue">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Mobile Massage Pricing in Nusa Dua
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Home massage pricing in Nusa Dua reflects the premium service standards and resort-area convenience. Our rates 
                  include professional therapist travel throughout the gated resort complex, complete spa equipment setup in your 
                  accommodation, and quality oils and treatment materials. Nusa Dua mobile massage typically ranges from 350,000 IDR 
                  to 650,000 IDR for single treatments, with couples mobile massage starting around 650,000 IDR.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The pricing for mobile massage in Nusa Dua considers the exclusive nature of the area and coordination required 
                  with international resort properties. Unlike walk-in spa pricing, mobile massage rates incorporate therapist 
                  transportation to your specific villa or suite, flexible scheduling that accommodates your itinerary, and the 
                  convenience of not leaving your luxurious accommodation. Extended mobile massage sessions and specialty treatments 
                  are priced accordingly, with full pricing details provided when you contact us via WhatsApp.
                </p>
                <p className="text-lg text-muted-foreground">
                  Many Nusa Dua guests book mobile massage as part of their daily wellness routine, taking advantage of the 
                  convenience and privacy that in-villa treatments provide. Whether you need a single relaxation mobile massage 
                  after arrival, daily deep tissue sessions throughout your stay, or a special couples mobile massage for a romantic 
                  evening, our flexible pricing accommodates both individual treatments and multiple-session arrangements. Contact 
                  us directly for exact mobile massage pricing tailored to your specific Nusa Dua accommodation and treatment preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: Detailed Benefits Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Nusa Dua Mobile Massage Experience
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Nusa Dua's reputation as Bali's premier luxury resort destination means guests expect exceptional service in every 
                aspect of their stay. Home massage delivers exactly this level of excellence—professional licensed therapists who 
                understand the elevated standards of Nusa Dua's international clientele arrive punctually to your accommodation with 
                complete professional equipment. The mobile massage experience begins with a courtesy coordination call to confirm your 
                preferred treatment time and any specific therapeutic needs or preferences.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mobile massage therapists navigate Nusa Dua's gated resort complexes with established professional relationships, 
                ensuring smooth access to your villa or hotel room. Whether you're staying at the prestigious properties along Pantai 
                Geger, the beachfront resorts of the BTDC complex, or private estates in the surrounding area, mobile massage service 
                reaches you reliably. Each mobile massage session includes treatment consultation, professional draping and positioning, 
                premium organic oils, and post-treatment wellness recommendations—all delivered with the discretion and professionalism 
                that Nusa Dua guests expect.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The pristine beaches and manicured gardens of Nusa Dua create an ideal backdrop for mobile massage treatments. Many 
                guests schedule mobile massage on private terraces overlooking tropical gardens or in villa spaces with ocean breezes, 
                enhancing the therapeutic experience with Nusa Dua's natural beauty. Home massage allows you to fully experience the 
                tranquility of your luxury accommodation—after treatment, you can transition immediately to your private pool, continue 
                relaxing in your suite, or prepare for evening activities without the disruption of leaving the property.
              </p>
              <p className="text-lg text-muted-foreground">
                For corporate groups, wedding parties, and family gatherings in Nusa Dua, mobile massage provides flexible scheduling 
                that accommodates multiple treatments throughout the day. Our service can coordinate simultaneous mobile massage sessions 
                for groups staying in multi-bedroom villas, or schedule sequential treatments for wedding parties preparing for 
                ceremonies. This level of coordination and flexibility makes mobile massage an integral part of the luxury Nusa Dua 
                experience, whether you're visiting for business, celebration, or pure relaxation in one of Bali's most exclusive 
                resort areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MobileMassageFAQ items={[
        {
          question: "Can mobile massage therapists access luxury resorts in Nusa Dua's gated area?",
          answer: "Yes! Our mobile massage therapists are experienced working with Nusa Dua's luxury resort security protocols. We coordinate professionally with hotel management for seamless access to your room or villa. Many Nusa Dua resort guests prefer mobile massage for the privacy and personalized attention compared to resort spa facilities."
        },
        {
          question: "How does mobile massage pricing compare to Nusa Dua resort spas?",
          answer: "Mobile massage in Nusa Dua offers exceptional value compared to resort spa prices. Our rates are transparent with no hidden fees or resort markups. You receive the same professional quality treatment in your private space at a fraction of resort spa costs, making mobile massage very popular with budget-conscious Nusa Dua visitors."
        },
        {
          question: "Is mobile massage available for Nusa Dua convention center and MICE event participants?",
          answer: "Absolutely! Mobile massage is popular among business travelers attending events at Nusa Dua's BTDC convention center. We serve hotels throughout the BTDC complex and can accommodate group bookings for corporate wellness. Post-conference mobile massage helps business travelers recover from long meetings and travel fatigue."
        },
        {
          question: "What areas in and around Nusa Dua does mobile massage cover?",
          answer: "Mobile massage covers all Nusa Dua including the BTDC (Bali Tourism Development Center) gated area, all luxury resorts along the beach, Tanjung Benoa water sports area, and nearby neighborhoods. We serve the entire Nusa Dua peninsula from The Mulia to Club Med, including private villas and residential areas."
        },
        {
          question: "Can I book mobile massage on Nusa Dua beach or at beach clubs?",
          answer: "While we primarily serve private accommodations, some Nusa Dua beach clubs and beach areas allow mobile massage setups. Contact us to discuss your specific beach location. Most Nusa Dua resort guests prefer mobile massage in their private beachfront villas or hotel rooms for comfort and privacy."
        },
        {
          question: "How far in advance should I book mobile massage in Nusa Dua during peak season?",
          answer: "During Nusa Dua's peak season (July-August, December-January), we recommend booking mobile massage 24-48 hours in advance, especially for couples treatments or evening appointments. Morning and midday slots are easier to arrange same-day. For high-season guarantee, book as early as possible."
        }
      ]} />

      {/* Block 7: CTA and Links */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Mobile Massage in Nusa Dua
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional mobile massage service delivered throughout Nusa Dua's luxury resort area
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Check Availability
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Mobile Massage Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage">
                    ← All Mobile Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/services/couples">
                    Couples Mobile Massage
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/cities/seminyak">
                    Mobile Massage in Seminyak →
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/blog/how-to-book-mobile-massage">
                    Booking Guide
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/knowledge/safety">
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
