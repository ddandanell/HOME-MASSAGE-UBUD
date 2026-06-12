import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Shield, MapPin, Calendar, Star } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';
import CrossSiloLinks from '@/components/CrossSiloLinks';

export default function HomeMassageHub() {
  const faqData = [
    { question: "What is home massage?", answer: "Home massage is a professional massage service where licensed therapists travel to your accommodation — villa, hotel, or guesthouse — bringing premium oils, towels, and linens. You provide a comfortable surface such as your bed or a floor mat." },
    { question: "How do I book a home massage in Bali?", answer: "Simply message us on WhatsApp at +62 811-2656-869 with your location, preferred treatment, and preferred time. We confirm availability within minutes and can often accommodate same-day bookings." },
    { question: "What areas in Bali do you serve?", answer: "We provide home massage throughout Ubud, Seminyak, Canggu, Sanur, Nusa Dua, Uluwatu, Jimbaran, Kuta, Legian, and surrounding areas. Travel fees may apply for locations outside central areas." },
    { question: "Is home massage safe?", answer: "Yes, all our therapists are licensed, background-checked, and follow strict hygiene protocols. We use fresh linens for every client and sanitize all equipment between sessions." }
  ];

  return (
    <>
      <SEOHead 
        title="Home Massage in Bali | Ubud Luxury Villas"
        description="Book home massage in Bali today! Licensed therapists deliver professional home massage to your villa. Call +62 811-2656-869 or WhatsApp for same-day home massage availability."
      />
      <SchemaMarkup
        type="service"
        data={{
          name: "Home Massage Bali",
          description: "Professional home massage service delivered to your villa or hotel in Bali. Licensed therapists bring spa-quality treatments to your accommodation.",
          url: "https://homemassageubud.com/home-massage",
          areaServed: ["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua", "Uluwatu", "Jimbaran", "Kuta", "Legian"],
          offers: [
            { name: "Traditional Balinese Massage 60min", price: "320000", description: "Authentic Balinese massage at your villa" },
            { name: "Deep Tissue Massage 60min", price: "380000", description: "Therapeutic deep tissue treatment" },
            { name: "Aromatherapy Massage 60min", price: "350000", description: "Relaxing aromatherapy massage" }
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
              Home Massage in Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage at your villa or hotel – all equipment included
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

      {/* Table of Contents */}
      <TableOfContents items={[
        { id: 'what-is-home-massage', label: 'What is Home Massage?' },
        { id: 'services', label: 'Home Massage Services' },
        { id: 'why-choose', label: 'Why Choose Home Massage' },
        { id: 'locations', label: 'Service Areas' },
        { id: 'booking', label: 'How to Book' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'pricing', label: 'Pricing & FAQ' },
        { id: 'full-spider-links', label: 'Explore More' }
      ]} />

      {/* Block 2: What Home Massage Is (Education) */}
      <section id="what-is-home-massage" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Is Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Home massage brings professional spa treatments directly to your accommodation. Instead of traveling to a spa, 
                our licensed therapists arrive at your villa or hotel with all equipment needed for a complete massage experience.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike traditional spa visits, home massage eliminates travel stress and traffic concerns. You enjoy your treatment 
                in the privacy and comfort of your own space. After your home massage, you can shower immediately, rest in your 
                own bed, and continue relaxing without any journey back.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our home massage service operates throughout Bali, serving private villas, hotels, resorts, and guesthouses. 
                Each therapist brings professional equipment, premium oils, fresh linens, and years of training to deliver 
                spa-quality home massage treatments.
              </p>
              <p className="text-lg text-muted-foreground">
                The convenience factor makes <Link href="/home-massage/services" className="text-primary hover:underline">home massage services</Link> increasingly 
                popular among tourists. You control your environment, schedule flexibility improves, and the post-massage relaxation 
                remains uninterrupted. Whether you prefer <Link href="/home-massage/services/balinese" className="text-primary hover:underline">traditional Balinese techniques</Link> or 
                modern therapeutic approaches, home massage adapts to your needs while you stay comfortable in familiar surroundings.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/home-massage/blog/what-is-home-massage">
                  Learn More About Home Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home-massage/knowledge/what-to-expect">
                  What to Expect
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Services Preview (Decision) */}
      <section id="services" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Home Massage Services
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Professional home massage from <span className="font-bold text-primary">Rp 320,000</span> | <Link href="/pricing" className="text-primary hover:underline">View All Pricing</Link>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Balinese Home Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 320,000</p>
                <p className="text-muted-foreground mb-4">
                  Traditional techniques for deep relaxation
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/home-massage/services/balinese">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deep Tissue Home Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 380,000</p>
                <p className="text-muted-foreground mb-4">
                  Therapeutic pressure for muscle tension
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/home-massage/services/deep-tissue">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Couples Home Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 640,000</p>
                <p className="text-muted-foreground mb-4">
                  Side-by-side relaxation for two
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/home-massage/services/couples">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Relaxation Home Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 380,000</p>
                <p className="text-muted-foreground mb-4">
                  Gentle strokes for ultimate calm
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/home-massage/services/relaxation">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/home-massage/services">
                View All Home Massage Services →
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

      {/* Block 4: Why Tourists Choose Home Massage (Sales Psychology) */}
      <section id="why-choose" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Tourists Choose Home Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Transport Stress</h3>
                  <p className="text-muted-foreground">
                    Skip the traffic and navigation. Your home massage therapist comes to you.
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
                    Book your home massage service within hours, not days in advance.
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
                    Enjoy your home massage in complete privacy and comfort.
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
                    All home massage practitioners are professionally trained and certified.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/home-massage/blog/why-tourists-prefer-home-massage">
                  Read Why Tourists Prefer Home Massage
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
      </section>

      {/* Block 5: Cities Coverage (Local Proof) */}
      <section id="locations" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Home Massage Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/home-massage/cities/ubud">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Home Massage in Ubud
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/home-massage/cities/canggu">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Home Massage in Canggu
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/home-massage/cities/seminyak">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Home Massage in Seminyak
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/home-massage/cities/sanur">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Home Massage in Sanur
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <Link href="/home-massage/cities/nusa-dua">
                  <span className="font-semibold hover:text-primary cursor-pointer">
                    Home Massage in Nusa Dua
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/home-massage/cities">
                View All Service Areas →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 6: How Booking Works (Friction Removal) */}
      <section id="booking" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Home Massage Booking Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Service</h3>
                <p className="text-sm text-muted-foreground">
                  Select your preferred home massage treatment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Time</h3>
                <p className="text-sm text-muted-foreground">
                  Pick a convenient time for your home massage
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
                <h3 className="font-semibold mb-2">Enjoy Home Massage</h3>
                <p className="text-sm text-muted-foreground">
                  Relax and enjoy professional treatment at home
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/home-massage/blog/how-to-book-home-massage">
                  Complete Booking Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: Trust & Safety */}
      <section id="safety" className="py-16 md:py-20 bg-secondary/20">
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
                  All home massage therapists undergo background checks and certification verification
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hygiene Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Fresh linens, sanitized equipment, and premium oils for every home massage
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Professional Conduct</h3>
                <p className="text-sm text-muted-foreground">
                  Clear boundaries and professional behavior in every home massage session
                </p>
              </div>
            </div>
            <div className="text-center flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/home-massage/knowledge/safety">
                  Read Full Safety Guidelines
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home-massage/knowledge">
                  Explore All Knowledge Topics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Silo Links */}
      <CrossSiloLinks currentSilo="home-massage" />

      {/* Spider Links Block */}
      <section id="full-spider-links">
        <SpiderLinksBlock currentPage="/home-massage" />
      </section>

      {/* SafetyStandards Component */}
      <SafetyStandards />

      {/* Block 8: FAQ (Objection Killer) */}
      <section id="pricing" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Home Massage Frequently Asked Questions
            </h2>
            <HomeMassageFAQ items={[
              {
                question: "What is home massage in Bali?",
                answer: "Home massage in Bali is a professional spa service delivered directly to your villa, hotel, or accommodation. Licensed therapists bring premium oils, fresh linens, and music to provide a complete spa experience in the comfort and privacy of your own space. You provide a comfortable surface — your bed or a floor mat works perfectly."
              },
              {
                question: "How do I book a home massage?",
                answer: "Booking a home massage is simple: contact us via WhatsApp at +62 811-2656-869 or call directly. Choose your preferred service, select a time slot, and provide your location. We often accommodate same-day home massage bookings, though advance booking ensures your preferred time is available."
              },
              {
                question: "What areas do you cover for home massage?",
                answer: "Our home massage service covers all major areas in Bali including Ubud, Canggu, Seminyak, Sanur, Nusa Dua, Uluwatu, and surrounding regions. We serve private villas, hotels, resorts, and guesthouses throughout the island. Contact us to confirm availability in your specific location."
              },
              {
                question: "Are your home massage therapists licensed?",
                answer: "Yes, all our home massage therapists are professionally trained, certified, and licensed. They undergo thorough background checks and must demonstrate expertise in their specialties. We maintain strict vetting standards to ensure you receive safe, professional home massage treatment."
              },
              {
                question: "Can I get same-day home massage?",
                answer: "Yes! We frequently accommodate same-day home massage bookings throughout Bali. Availability depends on therapist schedules and your location. For best results, contact us a few hours in advance, but we'll do our best to meet urgent requests for home massage service."
              },
              {
                question: "What do I need to prepare for home massage?",
                answer: "Very little! Our home massage therapists bring everything needed: professional table, oils, linens, and music. You only need to provide a space of approximately 2x3 meters (bedroom, living room, or terrace work well) and access to a power outlet. We handle all setup and cleanup."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* BookingCTA Component */}
      <BookingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
