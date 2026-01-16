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

export default function CouplesHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Couples Home Massage | Ubud Luxury Villas"
        description="Romantic couples home massage at your villa. Call or WhatsApp for side-by-side treatments. Two therapists deliver synchronized home massage to your accommodation."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Couples Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Side-by-side relaxation delivered as romantic home massage experience
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
        { id: 'what-is', label: 'What Is Couples Home Massage?' },
        { id: 'who-benefits', label: 'Who Benefits?' },
        { id: 'pricing', label: 'Pricing & Duration' },
        { id: 'advantages', label: 'Why Home Massage?' },
        { id: 'safety', label: 'Safety Standards' },
        { id: 'faq', label: 'FAQ' }
      ]} />

      <section id="what-is" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Couples Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Couples home massage brings two professional therapists to your villa for synchronized side-by-side treatments. 
                This romantic home massage service transforms your private space into an intimate spa retreat. You and your 
                partner enjoy simultaneous massages in the same room, creating a shared wellness experience without leaving 
                your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our couples home massage includes two massage tables, coordinated aromatherapy, and calming music to create 
                spa ambiance. Both therapists work in harmony, matching rhythm and pressure so you experience relaxation 
                together. This home massage format strengthens connection while delivering professional therapeutic benefits.
              </p>
              <p className="text-lg text-muted-foreground">
                Each couples home massage can be customized with different techniques for each partner. One may prefer deep 
                tissue while the other chooses Balinese relaxation. Our home massage service accommodates individual preferences 
                within the couples experience, ensuring both receive their ideal treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-benefits" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Couples Home Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Honeymooners</h3>
                  <p className="text-muted-foreground">
                    Create romantic memories with intimate couples home massage in your honeymoon villa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Anniversary Celebrations</h3>
                  <p className="text-muted-foreground">
                    Mark special occasions with luxury couples home massage without leaving your retreat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Busy Couples</h3>
                  <p className="text-muted-foreground">
                    Reconnect through shared home massage experience that fits your vacation schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Privacy Seekers</h3>
                  <p className="text-muted-foreground">
                    Enjoy intimate couples home massage away from public spa environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Couples Home Massage Pricing
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
                    <span className="text-2xl font-bold">Rp 480,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    One hour couples home massage with two therapists
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
                    <span className="text-2xl font-bold">Rp 720,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Extended couples home massage for complete relaxation together
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
                    <span className="text-2xl font-bold">Rp 960,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Luxury couples home massage spa ritual for special occasions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Couples Home Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Privacy</h3>
                  <p className="text-muted-foreground">
                    Couples home massage in your own villa means absolute intimacy without other spa guests nearby.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Romantic Continuity</h3>
                  <p className="text-muted-foreground">
                    Continue your couples home massage experience with champagne, music, or rest in your own romantic setting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Scheduling Stress</h3>
                  <p className="text-muted-foreground">
                    Book couples home massage at your convenience without coordinating spa appointments or transport.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Your Own Ambiance</h3>
                  <p className="text-muted-foreground">
                    Set your preferred lighting, temperature, and atmosphere for couples home massage in familiar surroundings.
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
      <SpiderLinksBlock currentPage="/home-massage/services/couples" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ 
          items={[
            {
              question: "Do both people receive the same type of massage during couples home massage?",
              answer: "No, each person can choose their preferred style. One partner might select deep tissue home massage while the other prefers relaxation massage. Our therapists coordinate to ensure both treatments happen simultaneously with appropriate techniques for each person."
            },
            {
              question: "How much space do we need for couples home massage?",
              answer: "You need a room large enough for two massage tables side-by-side with space for therapists to work around them. Most hotel rooms or villa bedrooms work perfectly. Our team can assess your space when you book your couples home massage."
            },
            {
              question: "Can we book couples home massage for different durations?",
              answer: "Both treatments must be the same duration for synchronized couples home massage. However, you can book different lengths for separate sessions if you prefer individual treatments at different times rather than side-by-side home massage."
            },
            {
              question: "Is couples home massage more expensive than two individual massages?",
              answer: "Couples home massage pricing reflects two simultaneous treatments with two therapists. The per-person cost is the same as individual home massage sessions. You save time and create a shared experience while paying the same total amount."
            },
            {
              question: "Can we talk during couples home massage?",
              answer: "Absolutely. Some couples prefer peaceful silence during home massage, while others enjoy quiet conversation. Let your therapists know your preference. They'll adjust music volume and work quietly to accommodate whatever experience you want."
            },
            {
              question: "What if one person needs to stop the couples home massage early?",
              answer: "If one partner needs to end their session, both therapists will conclude professionally. The other partner can continue if desired while the first therapist leaves. We understand that comfort levels vary, and our home massage service adapts to your needs."
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
