import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function BalineseHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Home Massage | Ubud Luxury Villas"
        description="Experience authentic Balinese home massage at your villa. Call or WhatsApp for same-day booking. Licensed therapists deliver traditional home massage to your accommodation."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* H1: [Service] Home Massage */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Balinese Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Traditional Balinese techniques delivered as a professional home massage service
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book This Home Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <TableOfContents items={[
        { id: 'what-is', label: 'What Is Balinese Home Massage?' },
        { id: 'who-benefits', label: 'Who Benefits?' },
        { id: 'pricing', label: 'Pricing & Duration' },
        { id: 'advantages', label: 'Why Home Massage?' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'FAQ' }
      ]} />

      {/* Block 2: What this home massage does */}
      <section id="what-is" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Balinese Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Balinese home massage combines traditional Indonesian healing techniques with the convenience of in-villa service. 
                This <Link href="/home-massage" className="text-primary hover:underline">home massage</Link> style uses long, flowing strokes, gentle stretching, and acupressure points to promote deep 
                relaxation and energy balance. Our therapists bring centuries-old Balinese tradition directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The treatment begins with aromatic oil warming, followed by rhythmic palm and thumb pressure along energy lines. 
                Your Balinese <Link href="/home-massage/services" className="text-primary hover:underline">home massage service</Link> incorporates gentle joint mobilization and skin rolling techniques that stimulate 
                circulation while maintaining a deeply meditative pace. This traditional approach creates both 
                physical relief and mental calm.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Each Balinese home massage session adapts to your needs while honoring authentic techniques. Whether you seek 
                stress relief, muscle tension release, or cultural immersion, this <Link href="/home-massage/knowledge/benefits" className="text-primary hover:underline">home massage treatment</Link> delivers the full Balinese 
                spa experience in your private space.
              </p>
              <p className="text-lg text-muted-foreground">
                The convenience of receiving authentic Balinese techniques through <Link href="/home-massage/cities" className="text-primary hover:underline">home massage</Link> means you maintain 
                the relaxed state achieved during treatment. Many guests book <Link href="/home-massage/services/balinese" className="text-primary hover:underline">Balinese home massage</Link> sessions 
                multiple times during their stay, creating a consistent wellness routine without travel disruption. This accessibility 
                makes traditional healing practices part of your daily vacation rhythm rather than a special excursion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Who it's for */}
      <section id="who-benefits" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Balinese Home Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">First-Time Visitors</h3>
                  <p className="text-muted-foreground">
                    Experience authentic Balinese culture through traditional home massage without navigating unfamiliar spa locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Stressed Travelers</h3>
                  <p className="text-muted-foreground">
                    Let the meditative pace of Balinese home massage dissolve vacation stress and travel fatigue.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Wellness Seekers</h3>
                  <p className="text-muted-foreground">
                    Discover holistic balance through home massage that addresses body, mind, and energy flow.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Privacy Lovers</h3>
                  <p className="text-muted-foreground">
                    Enjoy traditional Balinese treatment in the complete privacy of your villa with home massage service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Duration & Pricing */}
      <section id="pricing" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Balinese Home Massage Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">60 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Rp 380,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Essential Balinese home massage with full traditional techniques
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">90 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Rp 390,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Extended Balinese home massage for deeper relaxation and healing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">120 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Rp 450,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete Balinese home massage ritual with extended techniques
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Why at home is better than spa */}
      <section id="advantages" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Balinese Home Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Travel Required</h3>
                  <p className="text-muted-foreground">
                    Skip the journey to a spa. Your Balinese home massage comes to you, saving time and preserving your relaxed state. 
                    Bali's traffic can be unpredictable, especially during peak tourist seasons. Home massage eliminates this stress 
                    entirely, letting you allocate travel time to actual relaxation instead.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Privacy</h3>
                  <p className="text-muted-foreground">
                    Enjoy your Balinese home massage in your own space without shared facilities or strangers nearby. Many guests 
                    prefer the intimacy of their own villa, where they can fully relax without concern about spa etiquette or 
                    time constraints that public facilities impose.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Immediate Rest</h3>
                  <p className="text-muted-foreground">
                    After your Balinese home massage, step directly into your own shower and bed. No need to dress up and travel back. 
                    The therapeutic benefits of massage continue for hours after treatment, and staying in your comfortable environment 
                    maximizes these effects without interruption.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flexible Timing</h3>
                  <p className="text-muted-foreground">
                    Schedule your Balinese home massage around your activities, not spa hours. Same-day booking available. Whether you 
                    want early morning massage before sightseeing or late evening relaxation after dinner, home massage adapts to your 
                    vacation schedule rather than forcing you to work around spa operating hours.
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
      <SpiderLinksBlock currentPage="/home-massage/services/balinese" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ 
          items={[
            {
              question: "How long does a Balinese home massage session take?",
              answer: "Balinese home massage sessions are available in 60, 90, or 120-minute durations. The 90-minute session is most popular as it allows time for full-body treatment with traditional Balinese techniques including stretching and acupressure."
            },
            {
              question: "What should I prepare for my Balinese home massage?",
              answer: "Simply provide a quiet space with room for a massage table. Our therapists bring all equipment including the table, linens, oils, and music. You just need to ensure access to your villa and a comfortable room temperature."
            },
            {
              question: "Is Balinese home massage suitable for first-time massage recipients?",
              answer: "Yes! Balinese home massage uses gentle to moderate pressure and is perfect for beginners. The therapist will adjust pressure to your comfort level and explain techniques throughout your home massage session."
            },
            {
              question: "Can I request specific aromatherapy oils for my Balinese home massage?",
              answer: "Absolutely. Our therapists carry a selection of traditional Balinese oils including frangipani, coconut, and essential oil blends. Let us know your preference when booking your home massage."
            },
            {
              question: "How far in advance should I book Balinese home massage?",
              answer: "We offer same-day booking for Balinese home massage throughout Ubud, Canggu, Seminyak, Sanur, and Nusa Dua. For guaranteed availability at your preferred time, we recommend booking 24 hours ahead via WhatsApp."
            },
            {
              question: "What's the difference between Balinese home massage and spa treatment?",
              answer: "The techniques are identical, but home massage eliminates travel time, provides complete privacy, and allows you to rest immediately after. You receive the same professional Balinese treatment in your own comfortable space."
            }
          ]}
        />
      </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
