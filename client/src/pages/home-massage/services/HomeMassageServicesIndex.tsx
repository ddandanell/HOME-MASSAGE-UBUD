import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Check, ArrowRight, Star } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function HomeMassageServicesIndex() {
  return (
    <>
      <SEOHead 
        title="Home Massage Services | Ubud Luxury Villas"
        description="Browse all home massage services in Bali. Call or WhatsApp for Balinese, deep tissue, relaxation, and couples home massage. Professional therapists deliver to your villa."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional home massage treatments delivered to your villa or hotel in Bali
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
        { id: 'why-choose', label: 'Why Choose Our Services?' },
        { id: 'services', label: 'Available Services' },
        { id: 'included', label: "What's Included" },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'FAQ' }
      ]} />

      {/* Introduction */}
      <section id="why-choose" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Our Home Massage Services?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Every home massage service we offer brings professional spa-quality treatment directly to your accommodation. 
                Our licensed therapists arrive with all necessary equipment, oils, and expertise to deliver a complete home 
                massage experience without you leaving your villa or hotel room.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you seek the traditional healing of Balinese home massage, the therapeutic depth of deep tissue home 
                massage, the gentle relaxation of our relaxation home massage, or the shared experience of couples home massage, 
                each service maintains the same professional standards you'd find in Bali's finest spas.
              </p>
              <p className="text-lg text-muted-foreground">
                All home massage services include same-day booking, flexible scheduling, and can be delivered throughout 
                <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud</span></Link>, 
                <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu</span></Link>, 
                <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, 
                <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link>, and 
                <Link href="/home-massage/cities/nusa-dua"><span className="text-primary hover:underline"> Nusa Dua</span></Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="services" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Available Home Massage Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Balinese Home Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/services/balinese">
                        <span className="hover:text-primary cursor-pointer">
                          Balinese Home Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Traditional Balinese techniques delivered as a professional home massage service. Long flowing strokes, 
                    gentle stretching, and acupressure combine to create the authentic Balinese home massage experience 
                    at your villa. Perfect for cultural immersion and deep relaxation.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Traditional Balinese techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Gentle stretching & acupressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Aromatic oils included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/home-massage/services/balinese">
                      View Balinese Home Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Deep Tissue Home Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/services/deep-tissue">
                        <span className="hover:text-primary cursor-pointer">
                          Deep Tissue Home Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Therapeutic deep tissue home massage targeting chronic tension and muscle knots. This home massage 
                    service uses firm pressure and slow strokes to access deeper muscle layers, perfect for athletes, 
                    active travelers, or anyone with persistent muscle tension.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Targets deep muscle layers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Releases chronic tension</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Therapeutic techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">90 minutes recommended</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/home-massage/services/deep-tissue">
                      View Deep Tissue Home Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Relaxation Home Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/services/relaxation">
                        <span className="hover:text-primary cursor-pointer">
                          Relaxation Home Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Pure relaxation delivered as home massage. Gentle, flowing techniques with light to medium pressure 
                    create deep calm without intensity. This home massage service focuses on stress relief, mental 
                    relaxation, and creating a peaceful spa atmosphere in your villa.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Gentle, flowing techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Light to medium pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Calming aromatherapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/home-massage/services/relaxation">
                      View Relaxation Home Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Couples Home Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/home-massage/services/couples">
                        <span className="hover:text-primary cursor-pointer">
                          Couples Home Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Shared relaxation with couples home massage. Two therapists provide simultaneous treatments in your 
                    private space. Perfect for romantic getaways, this home massage service creates an intimate spa 
                    experience you can enjoy together without leaving your villa.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Two therapists simultaneously</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Side-by-side setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Romantic atmosphere</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/home-massage/services/couples">
                      View Couples Home Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section id="included" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What's Included in Every Home Massage Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Professional Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Licensed therapist arrives with fresh linens, towels, and premium oils for complete home massage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground text-sm">
                    Book home massage from 9 AM to 9 PM, seven days a week, including same-day availability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed Therapists</h3>
                  <p className="text-muted-foreground text-sm">
                    Every home massage delivered by certified therapists with minimum 5 years professional experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Privacy & Comfort</h3>
                  <p className="text-muted-foreground text-sm">
                    Enjoy your home massage in complete privacy at your villa, hotel, or private accommodation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <SafetyStandards />

      {/* Spider Links */}
      <SpiderLinksBlock currentPage="/home-massage/services" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ 
          items={[
            {
              question: "What home massage services do you offer?",
              answer: "We offer four main home massage services: Balinese home massage (traditional techniques with acupressure), deep tissue home massage (therapeutic pressure for chronic tension), relaxation home massage (gentle stress relief), and couples home massage (side-by-side treatments with two therapists)."
            },
            {
              question: "How do I choose which home massage service is right for me?",
              answer: "Choose Balinese home massage for cultural experience and balanced treatment, deep tissue home massage for chronic pain or sports recovery, relaxation home massage for pure stress relief with gentle pressure, or couples home massage to share the experience with your partner."
            },
            {
              question: "Can I mix different home massage styles in one session?",
              answer: "Yes! Many clients request combination home massage—for example, deep tissue on the back and shoulders with relaxation massage for the rest. Discuss your preferences with the therapist at the start of your session."
            },
            {
              question: "Are all home massage services the same price?",
              answer: "Balinese and relaxation home massage have the same pricing. Deep tissue home massage costs slightly more due to specialized technique. Couples home massage is double the individual rate since two therapists work simultaneously. All pricing is listed on individual service pages."
            },
            {
              question: "Do you offer home massage services outside the listed areas?",
              answer: "Our primary service areas are Ubud, Canggu, Seminyak, Sanur, and Nusa Dua. We occasionally accommodate home massage requests in nearby areas. Contact us via WhatsApp to confirm availability for your specific location in Bali."
            },
            {
              question: "Can I book multiple home massage services for a group?",
              answer: "Absolutely! We can arrange multiple therapists for group home massage bookings. Whether you want couples home massage for multiple pairs or individual treatments happening simultaneously, contact us to coordinate scheduling and therapist availability."
            }
          ]}
        />
      </section>

      {/* Links to Knowledge */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Learn More About Home Massage
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore our knowledge base to understand home massage safety, benefits, and what to expect
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/home-massage/knowledge/safety">
                  Home Massage Safety
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home-massage/knowledge/benefits">
                  Benefits of Home Massage
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

        </main>
        <Footer />
      </div>
    </>
  );
}
