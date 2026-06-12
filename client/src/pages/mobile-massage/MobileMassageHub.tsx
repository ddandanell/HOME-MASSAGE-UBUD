import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Shield, MapPin, Calendar, Star } from 'lucide-react';
import CrossSiloLinks from '@/components/CrossSiloLinks';

export default function MobileMassageHub() {
  const faqData = [
    { question: "What is mobile massage?", answer: "Mobile massage is a professional massage service where therapists travel to your location — villa, hotel, or guesthouse — bringing all equipment including massage table, oils, and linens." },
    { question: "How quickly can a mobile massage therapist arrive?", answer: "In central Ubud, Seminyak, and Canggu areas, we can often have a therapist at your door within 60-90 minutes. For other areas, we recommend booking 2-4 hours in advance." },
    { question: "Is mobile massage available everywhere in Bali?", answer: "We cover all major tourist areas including Ubud, Seminyak, Canggu, Sanur, Nusa Dua, Uluwatu, Jimbaran, Kuta, and Legian. Remote areas may require advance booking and travel fees." },
    { question: "What should I prepare for a mobile massage?", answer: "Just provide a quiet, private space approximately 2x3 meters. Our therapists bring the massage table, oils, towels, and everything else needed. Wear comfortable clothing." }
  ];

  return (
    <>
      <SEOHead 
        title="Mobile Massage in Bali | Professional Massage at Your Villa"
        description="Professional mobile massage service delivered to your villa or hotel in Bali. Licensed therapists bring spa-quality treatments to your accommodation. Same-day booking available."
      />
      <SchemaMarkup
        type="service"
        data={{
          name: "Mobile Massage Bali",
          description: "Professional mobile massage service delivered to your villa or hotel anywhere in Bali. Licensed therapists travel to your accommodation with complete spa setup.",
          url: "https://homemassageubud.com/mobile-massage",
          areaServed: ["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua", "Uluwatu", "Jimbaran", "Kuta", "Legian"],
          offers: [
            { name: "Mobile Balinese Massage 60min", price: "320000", description: "Traditional massage at your location" },
            { name: "Mobile Deep Tissue 60min", price: "380000", description: "Therapeutic mobile massage" },
            { name: "Mobile Aromatherapy 60min", price: "350000", description: "Relaxing mobile aromatherapy" }
          ]
        }}
      />
      <SchemaMarkup type="faq" data={faqData} />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Block 1: Hero (Conversion) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              ⭐ From Rp 320,000 | Licensed Therapists | Same-Day Booking
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Massage in Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional mobile massage at your villa or hotel – all equipment included
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Now via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: What Mobile Massage Is (Education) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Is Mobile Massage?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Mobile massage brings professional spa treatments directly to your accommodation. Instead of traveling to a spa, 
                our licensed therapists arrive at your villa or hotel with all equipment needed for a complete massage experience.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike traditional spa visits, mobile massage eliminates travel stress and traffic concerns. You enjoy your treatment 
                in the privacy and comfort of your own space. After your mobile massage, you can shower immediately, rest in your 
                own bed, and continue relaxing without any journey back.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mobile massage service operates throughout Bali, serving private villas, hotels, resorts, and guesthouses. 
                Each therapist brings professional equipment, premium oils, fresh linens, and years of training to deliver 
                spa-quality mobile massage treatments.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/blog/what-is-mobile-massage">
                  Learn More About Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge/what-to-expect-mobile-massage">
                  What to Expect
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Services Preview (Decision) */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Mobile Massage Services
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Professional mobile massage from <span className="font-bold text-primary">Rp 320,000</span> | <Link href="/pricing" className="text-primary hover:underline">View All Pricing</Link>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Balinese Mobile Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 320,000</p>
                <p className="text-muted-foreground mb-4">
                  Traditional techniques for deep relaxation
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/mobile-massage/services/balinese-mobile-massage">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deep Tissue Mobile Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 320,000</p>
                <p className="text-muted-foreground mb-4">
                  Therapeutic pressure for muscle tension
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/mobile-massage/services/deep-tissue-mobile-massage">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Couples Mobile Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 520,000</p>
                <p className="text-muted-foreground mb-4">
                  Side-by-side relaxation for two
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/mobile-massage/services/couples-mobile-massage">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Relaxation Mobile Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 320,000</p>
                <p className="text-muted-foreground mb-4">
                  Gentle strokes for ultimate calm
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/mobile-massage/services/relaxation-mobile-massage">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/mobile-massage/services">
                View All Mobile Massage Services →
              </Link>
            </Button>
            <Button size="lg" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book Now via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 4: Why Tourists Choose Mobile Massage (Sales Psychology) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Tourists Choose Mobile Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Transport Stress</h3>
                  <p className="text-muted-foreground">
                    Skip the traffic and navigation. Your mobile massage therapist comes to you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Same-Day Availability</h3>
                  <p className="text-muted-foreground">
                    Book your mobile massage service within hours, not days in advance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Private Setting</h3>
                  <p className="text-muted-foreground">
                    Enjoy your mobile massage in complete privacy and comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Licensed Therapists</h3>
                  <p className="text-muted-foreground">
                    All mobile massage practitioners are professionally trained and certified.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/blog/mobile-massage-for-travelers">
                  Read Why Tourists Prefer Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge/is-mobile-massage-safe">
                  Safety Standards
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Cities Coverage (Local Proof) */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mobile Massage Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/mobile-massage/cities/ubud">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Mobile Massage in Ubud
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/mobile-massage/cities/canggu">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Mobile Massage in Canggu
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/mobile-massage/cities/seminyak">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Mobile Massage in Seminyak
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/mobile-massage/cities/sanur">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Mobile Massage in Sanur
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/mobile-massage/cities/nusa-dua">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Mobile Massage in Nusa Dua
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/mobile-massage/cities">
                View All Service Areas →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 6: How Booking Works (Friction Removal) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Mobile Massage Booking Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Service</h3>
                <p className="text-sm text-muted-foreground">
                  Select your preferred mobile massage treatment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Time</h3>
                <p className="text-sm text-muted-foreground">
                  Pick a convenient time for your mobile massage
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Therapist Arrives</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed therapist arrives with all equipment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Enjoy Mobile Massage</h3>
                <p className="text-sm text-muted-foreground">
                  Relax and enjoy professional treatment at home
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/blog/how-to-book-mobile-massage">
                  Complete Booking Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: Trust & Safety */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Trust & Safety Standards
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Therapist Vetting</h3>
                <p className="text-sm text-muted-foreground">
                  All mobile massage therapists undergo background checks and certification verification
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hygiene Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Fresh linens, sanitized equipment, and premium oils for every mobile massage
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Professional Conduct</h3>
                <p className="text-sm text-muted-foreground">
                  Clear boundaries and professional behavior in every mobile massage session
                </p>
              </div>
            </div>
            <div className="text-center flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge/is-mobile-massage-safe">
                  Read Full Safety Guidelines
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge">
                  Explore All Knowledge Topics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 8: FAQ (Objection Killer) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Mobile Massage Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">
                  What do I need to prepare for mobile massage?
                </h3>
                <p className="text-muted-foreground">
                  Nothing! Our mobile massage therapists bring everything: professional table, oils, linens, and music. 
                  You just need a space of about 2x3 meters and a power outlet.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">
                  How far in advance should I book mobile massage?
                </h3>
                <p className="text-muted-foreground">
                  We often accommodate same-day mobile massage bookings. However, booking a few hours in advance 
                  ensures your preferred time slot is available.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">
                  Is mobile massage more expensive than spa?
                </h3>
                <p className="text-muted-foreground">
                  Our mobile massage rates are competitive with quality spas, and you save on transportation time 
                  and costs while enjoying added privacy and convenience.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">
                  Which areas do you serve for mobile massage?
                </h3>
                <p className="text-muted-foreground">
                  Our mobile massage service covers Ubud, Canggu, Seminyak, Sanur, and surrounding areas throughout Bali. 
                  Contact us to confirm availability in your specific location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Silo Links */}
      <CrossSiloLinks currentSilo="mobile-massage" />

      {/* Block 9: Final CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Mobile Massage Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Professional mobile massage delivered to your villa or hotel. Same-day availability throughout Bali.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability on WhatsApp
              </a>
            </Button>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>📞 Phone/WhatsApp: +62 811-2656-869</p>
              <p>📧 Email: hello@homemassageubud.com</p>
              <p>🕐 Hours: 7am-10pm daily</p>
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
