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

export default function HomeMassageSanur() {
  return (
    <>
      <SEOHead 
        title="Home Massage in Sanur | Ubud Luxury Villas"
        description="Professional home massage service throughout Sanur. Licensed therapists deliver spa-quality treatments to your villa, hotel, or apartment. Same-day booking available via call or WhatsApp."
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
              <span className="text-lg font-semibold text-primary">Sanur, Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage in Sanur
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage delivered to any Sanur accommodation
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
        { id: 'why-sanur', label: 'Why Home Massage Fits Sanur' },
        { id: 'accommodations', label: 'Sanur Accommodations' },
        { id: 'availability', label: 'Availability & Response Time' },
        { id: 'services', label: 'Services Available in Sanur' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'Frequently Asked Questions' }
      ]} />

      {/* Block 2: Why home massage fits this city */}
      <section id="why-sanur" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Home Massage Fits Sanur Perfectly
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Sanur's family-friendly, relaxed atmosphere makes home massage the ideal wellness solution for travelers seeking 
                peace and convenience. Unlike busier beach towns, Sanur's quiet charm appeals to families, couples, and those 
                prioritizing tranquility. Our home massage service respects this peaceful environment, delivering therapeutic treatment 
                directly to your villa or family resort without disrupting the calm that attracted you to Sanur in the first place.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Sanur's traditional Balinese atmosphere and slower pace make home massage an integral part of the wellness 
                experience. Families can schedule home massage treatments around children's activities, while couples enjoy quiet 
                moments without leaving their accommodation. Home massage brings the healing traditions of Bali directly to your 
                family villa or beachfront hotel, allowing everyone to experience authentic Balinese wellness on their own schedule.
              </p>
              <p className="text-lg text-muted-foreground">
                Sanur attracts visitors seeking authentic cultural experiences and genuine relaxation away from tourist crowds. 
                Home massage perfectly complements this desire—professional therapists arrive at your convenience, bringing 
                traditional techniques to your private space. Whether you're staying in a family villa near the quiet beaches or 
                a boutique hotel overlooking the bay, home massage provides personalized wellness that honors Sanur's traditional 
                character and peaceful environment.
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
              Home Massage Throughout Sanur Accommodations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Family Villas</h3>
                  <p className="text-muted-foreground">
                    Spacious family villas throughout Sanur receive full home massage service with flexible scheduling for multi-generational groups.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Beachfront Hotels</h3>
                  <p className="text-muted-foreground">
                    Sanur's quiet beachfront hotels welcome home massage therapists for in-room and terrace treatments with ocean views.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Boutique Resorts</h3>
                  <p className="text-muted-foreground">
                    Design-conscious boutique properties in Sanur coordinate seamlessly with our home massage service for personalized treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Traditional Guesthouses</h3>
                  <p className="text-muted-foreground">
                    Family-run guesthouses and traditional accommodations throughout Sanur receive professional home massage service with care.
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
              Home Massage Availability in Sanur
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily 8 AM - 10 PM</h3>
                <p className="text-muted-foreground">
                  Home massage service available throughout Sanur every day including weekends and holidays
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Same-Day Booking</h3>
                <p className="text-muted-foreground">
                  Most Sanur home massage requests accommodated within 2-4 hours of contact via WhatsApp
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">All Sanur Areas</h3>
                <p className="text-muted-foreground">
                  Home massage reaching beachfront, residential neighborhoods, and all surrounding Sanur areas
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
              Home Massage Services Available in Sanur
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
                    Traditional Balinese techniques delivered as home massage to your Sanur villa. Experience authentic healing traditions.
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
                    <Link href="/home-massage/services/relaxation">
                      <span className="hover:text-primary cursor-pointer">Relaxation Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Gentle, stress-relieving home massage perfect for families and travelers seeking quiet wellness in Sanur.
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
                    Romantic side-by-side home massage in your Sanur villa or beachfront hotel. Perfect for couples seeking connection.
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
                    <Link href="/home-massage/services/deep-tissue">
                      <span className="hover:text-primary cursor-pointer">Deep Tissue Home Massage</span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Therapeutic home massage for muscle tension and recovery. Professional treatment in the peaceful Sanur environment.
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

      {/* Safety Standards */}
      <SafetyStandards />

      {/* Spider Links Block */}
      <SpiderLinksBlock currentPage="/home-massage/cities/sanur" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ faqs={[
          {
            question: "How quickly can I get home massage in Sanur?",
            answer: "Most home massage requests in Sanur are accommodated within 2-4 hours of contact via WhatsApp. We offer same-day booking throughout Sanur, including beachfront hotels, family villas, and boutique resorts. Contact us early for best availability."
          },
          {
            question: "What areas in Sanur do you serve for home massage?",
            answer: "Our home massage service covers all of Sanur including beachfront properties, residential neighborhoods, traditional guesthouses, and all surrounding Sanur areas. Whether you're staying near the beach or inland, we reach your location."
          },
          {
            question: "Do you provide home massage to hotels in Sanur?",
            answer: "Yes, we deliver home massage to all types of Sanur accommodations including beachfront hotels, boutique resorts, family villas, and traditional guesthouses. Our therapists coordinate seamlessly with your accommodation."
          },
          {
            question: "What types of home massage are available in Sanur?",
            answer: "Sanur home massage includes traditional Balinese massage, relaxation massage, couples massage, and deep tissue massage. All treatments are delivered with professional equipment directly to your peaceful Sanur accommodation."
          },
          {
            question: "How do I book home massage in Sanur?",
            answer: "Book home massage in Sanur by contacting us via WhatsApp at +62 811-2656-869. Provide your accommodation name, preferred time, and massage type. We confirm availability and arrange therapist arrival to your Sanur location."
          },
          {
            question: "Is home massage in Sanur suitable for families?",
            answer: "Absolutely! Home massage is perfect for families in Sanur. We can schedule multiple treatments around children's activities, and our flexible service works well with the family-friendly atmosphere of Sanur accommodations."
          }
        ]} />
      </section>

      {/* Block 6: CTA and Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Home Massage in Sanur
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional home massage service delivered throughout Sanur area
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
                  <Link href="/home-massage/cities/ubud">
                    Home Massage in Ubud →
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
