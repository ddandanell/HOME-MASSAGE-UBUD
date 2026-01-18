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

export default function RelaxationHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Relaxation Home Massage | Ubud Luxury Villas"
        description="Gentle relaxation home massage at your villa. Call or WhatsApp for same-day booking. Stress relief delivered to your accommodation by licensed therapists."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Relaxation Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Gentle, calming strokes delivered as soothing home massage service
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
        { id: 'what-is', label: 'What Is Relaxation Home Massage?' },
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
              What Is Relaxation Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Relaxation home massage focuses on gentle, flowing movements designed purely for stress relief and mental calm. 
                This <Link href="/home-massage" className="text-primary hover:underline">home massage</Link> style uses light to moderate pressure with long, rhythmic strokes that soothe the nervous 
                system. Our therapists create a tranquil experience directly in your villa, transforming your space into a 
                peaceful sanctuary.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike therapeutic massage, relaxation <Link href="/home-massage/services" className="text-primary hover:underline">home massage services</Link> prioritize comfort over treatment. The pace is slow and 
                meditative, using effleurage techniques and gentle kneading. This approach allows complete mental 
                release, often leading to deep relaxation or sleep during the session. Aromatherapy enhances the calming 
                effect throughout your treatment.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Your relaxation home massage adapts to your sensitivity and preferences. The therapist maintains consistent, 
                soothing rhythm while you drift into complete ease. This <Link href="/home-massage/knowledge/benefits" className="text-primary hover:underline">home massage treatment</Link> delivers pure stress reduction without 
                any discomfort, making it ideal for first-time massage recipients or those seeking gentle care.
              </p>
              <p className="text-lg text-muted-foreground">
                The familiar environment of <Link href="/home-massage/cities" className="text-primary hover:underline">home massage</Link> enhances relaxation effectiveness significantly. Your own bedroom 
                or terrace feels safer than an unfamiliar spa room, allowing deeper nervous system release. After your 
                <Link href="/home-massage/services/relaxation" className="text-primary hover:underline">relaxation home massage</Link> ends, you remain in this peaceful state without jarring transitions. 
                Many guests drift directly into naps or nighttime sleep, maximizing the stress relief benefits. This seamless 
                continuation of calm makes home massage particularly valuable for anxiety management and mental health support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-benefits" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Relaxation Home Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Stressed Professionals</h3>
                  <p className="text-muted-foreground">
                    Release work tension through gentle relaxation home massage that calms mental overactivity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">First-Time Recipients</h3>
                  <p className="text-muted-foreground">
                    Experience massage in the comfortable, non-intimidating format of home massage service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sensitive Individuals</h3>
                  <p className="text-muted-foreground">
                    Enjoy massage benefits through gentle relaxation home massage that respects physical sensitivity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sleep-Deprived Travelers</h3>
                  <p className="text-muted-foreground">
                    Reset your nervous system with calming home massage that often leads to deep, restorative sleep.
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
              Relaxation Home Massage Pricing
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
                    <span className="text-2xl font-bold">Rp 240,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    One hour gentle relaxation home massage for stress relief
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
                    <span className="text-2xl font-bold">Rp 360,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Extended relaxation home massage for complete mental reset
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
                    <span className="text-2xl font-bold">Rp 480,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ultimate relaxation home massage spa experience
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
              Why Relaxation Home Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Preserve Calm State</h3>
                  <p className="text-muted-foreground">
                    Avoid disrupting your relaxation home massage benefits by traveling through traffic back to accommodation. 
                    The parasympathetic nervous system activation achieved during massage continues for hours afterward. Any stress 
                    from navigation, driving, or public spaces counteracts these benefits. Home massage protects your calm state completely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Familiar Environment</h3>
                  <p className="text-muted-foreground">
                    Maximize relaxation home massage effectiveness in your own comfortable, known space versus unfamiliar spa. 
                    Research shows people relax more deeply in environments they know and control. Your villa's familiar sounds, 
                    scents, and comfort level create ideal conditions for nervous system release that unfamiliar locations cannot match.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Sleep Immediately</h3>
                  <p className="text-muted-foreground">
                    Many fall asleep during relaxation home massage. Transition directly to nap or night rest in your own bed. 
                    This seamless flow from treatment to sleep maximizes restorative benefits. Spa visits require dressing, traveling, 
                    and navigating back to your room, disrupting the drowsy state that signals deep nervous system recovery.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Time Pressure</h3>
                  <p className="text-muted-foreground">
                    After relaxation home massage, remain in peaceful state without rushing to check out or leave spa facility. 
                    Spas operate on schedules, often booking the same room immediately after your session. Home massage eliminates 
                    this pressure entirely. Take as long as you need to emerge from relaxation, perhaps staying on the table, 
                    meditating, or simply lying still.
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
      <SpiderLinksBlock currentPage="/home-massage/services/relaxation" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ 
          items={[
            {
              question: "What pressure level is used in relaxation home massage?",
              answer: "Relaxation home massage uses light to moderate pressure designed purely for comfort and stress relief. The therapist maintains consistent, gentle strokes that soothe without causing any discomfort. You can request lighter or slightly firmer touch as needed."
            },
            {
              question: "Can I fall asleep during relaxation home massage?",
              answer: "Yes! Many clients fall asleep during relaxation home massage, which indicates deep nervous system calming. Your therapist will continue working and gently wake you when the session ends. Falling asleep is a sign the home massage is working effectively."
            },
            {
              question: "Is relaxation home massage good for anxiety?",
              answer: "Absolutely. Relaxation home massage activates the parasympathetic nervous system, reducing cortisol and promoting calm. The combination of gentle touch, aromatherapy, and familiar surroundings makes home massage particularly effective for anxiety relief."
            },
            {
              question: "How does relaxation home massage differ from Balinese massage?",
              answer: "Balinese home massage incorporates acupressure and stretching with varied pressure. Relaxation home massage maintains consistently gentle pressure throughout, focusing purely on stress reduction. Both are effective; choose based on whether you prefer traditional techniques or pure gentleness."
            },
            {
              question: "Should I book 60 or 90 minutes for relaxation home massage?",
              answer: "The 90-minute relaxation home massage allows deeper nervous system reset and is most popular. If you're new to massage or have limited time, 60 minutes provides effective stress relief. For vacation pampering, consider the 120-minute luxury session."
            },
            {
              question: "Can I request specific focus areas in relaxation home massage?",
              answer: "Yes. While relaxation home massage is typically full-body, you can request extra time on shoulders, back, or any tense area. The therapist will maintain the gentle, flowing style while giving more attention to your preferred zones."
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
