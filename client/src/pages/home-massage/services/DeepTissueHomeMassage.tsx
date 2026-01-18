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

export default function DeepTissueHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Deep Tissue Home Massage | Ubud Luxury Villas"
        description="Professional deep tissue home massage at your villa. Call or WhatsApp for therapeutic home massage targeting chronic pain. Licensed therapists available daily."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Deep Tissue Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Therapeutic deep pressure delivered as professional home massage
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
        { id: 'what-is', label: 'What Is Deep Tissue Home Massage?' },
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
              What Is Deep Tissue Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Deep tissue home massage uses firm, focused pressure to reach deeper muscle layers and fascia. This therapeutic 
                <Link href="/home-massage" className="text-primary hover:underline">home massage</Link> targets chronic tension, muscle knots, and injury recovery while you remain in the comfort of your 
                villa or hotel. Our specialized therapists bring clinical expertise directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike lighter relaxation techniques, deep tissue <Link href="/home-massage/services" className="text-primary hover:underline">home massage services</Link> apply sustained pressure across muscle grain 
                to break down adhesions and restore mobility. This approach combines trigger point therapy, 
                myofascial release, and deep stripping strokes to address underlying muscle dysfunction.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Your deep tissue home massage session begins with assessment of problem areas, followed by progressive pressure 
                application. The therapist adjusts intensity throughout to maintain therapeutic benefit without excessive discomfort. 
                This targeted <Link href="/home-massage/knowledge/benefits" className="text-primary hover:underline">home massage treatment</Link> delivers measurable relief for chronic pain and restricted movement.
              </p>
              <p className="text-lg text-muted-foreground">
                Recovery-focused travelers appreciate how <Link href="/home-massage/cities" className="text-primary hover:underline">home massage</Link> eliminates post-treatment travel. Deep tissue work 
                can cause temporary soreness, making immediate rest essential. With <Link href="/home-massage/services/deep-tissue" className="text-primary hover:underline">deep tissue home massage</Link>, you 
                transition directly from treatment table to your own bed, applying ice from your accommodation's facilities and 
                hydrating without navigating traffic. This convenience supports optimal recovery and makes regular therapeutic 
                sessions more practical during your vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-benefits" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Deep Tissue Home Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Athletes & Active Travelers</h3>
                  <p className="text-muted-foreground">
                    Recovery-focused home massage for hiking, surfing, or yoga intensive activities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Chronic Pain Sufferers</h3>
                  <p className="text-muted-foreground">
                    Therapeutic home massage addressing long-term muscle tension and restriction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Desk Workers</h3>
                  <p className="text-muted-foreground">
                    Target shoulder, neck, and back tension from prolonged sitting with home massage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Injury Recovery</h3>
                  <p className="text-muted-foreground">
                    Rehabilitative home massage supporting healing from strains and overuse injuries.
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
              Deep Tissue Home Massage Pricing
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
                    <span className="text-2xl font-bold">Rp 270,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focused deep tissue home massage for specific problem areas
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
                    Full body deep tissue home massage with comprehensive treatment
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
                    <span className="text-2xl font-bold">Rp 510,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Extended therapeutic home massage for complex muscle patterns
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
              Why Deep Tissue Home Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Rest Immediately After</h3>
                  <p className="text-muted-foreground">
                    Deep tissue home massage can cause temporary soreness. Rest in your own bed instead of traveling post-treatment. 
                    The body continues releasing tension for hours after deep tissue work, and immediate rest enhances recovery. 
                    Your own comfortable environment supports this healing process better than navigating traffic or public spaces.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Privacy for Therapy</h3>
                  <p className="text-muted-foreground">
                    Discuss pain openly and adjust pressure freely during home massage without spa environment concerns. Therapeutic 
                    massage requires honest communication about discomfort levels. Your private space encourages this dialogue, 
                    helping therapists calibrate pressure precisely to your needs without time pressure or other clients nearby.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Consistent Follow-Up</h3>
                  <p className="text-muted-foreground">
                    Schedule regular deep tissue home massage sessions without travel barrier affecting commitment. Chronic pain 
                    responds best to consistent treatment. When massage comes to you, maintaining a therapeutic schedule becomes 
                    effortless rather than requiring motivation to leave your accommodation repeatedly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ice & Heat Access</h3>
                  <p className="text-muted-foreground">
                    Apply ice or heat from your own facilities before or after deep tissue home massage as needed. Complementary 
                    therapies like ice packs reduce inflammation, while heat preparation loosens muscles before treatment. Having 
                    your accommodation's resources immediately available optimizes therapeutic outcomes.
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
      <SpiderLinksBlock currentPage="/home-massage/services/deep-tissue" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <section id="faq">
        <HomeMassageFAQ 
          items={[
            {
              question: "Is deep tissue home massage painful?",
              answer: "Deep tissue home massage should produce therapeutic discomfort, not pain. Our therapists communicate constantly and adjust pressure to stay within your tolerance. You should feel intense but bearable pressure that helps release chronic tension."
            },
            {
              question: "How is deep tissue home massage different from regular massage?",
              answer: "Deep tissue home massage uses slower, firmer strokes to reach deeper muscle layers and fascia. While relaxation massage uses light pressure for stress relief, deep tissue home massage targets specific problem areas with therapeutic intent."
            },
            {
              question: "Will I be sore after deep tissue home massage?",
              answer: "Mild soreness for 24-48 hours is normal after deep tissue home massage, similar to post-workout muscle fatigue. This indicates effective tissue work. Drinking water and gentle stretching help minimize discomfort. The soreness gives way to improved mobility."
            },
            {
              question: "Can deep tissue home massage help with chronic back pain?",
              answer: "Yes, deep tissue home massage is highly effective for chronic back pain caused by muscle tension, poor posture, or overuse. Regular sessions combined with stretching and posture awareness provide long-term relief for many clients."
            },
            {
              question: "How often should I get deep tissue home massage?",
              answer: "For chronic issues, weekly or bi-weekly deep tissue home massage sessions yield best results. For maintenance, monthly sessions suffice. Your therapist will assess your condition during the first home massage and recommend a treatment schedule."
            },
            {
              question: "Can I request focus areas for my deep tissue home massage?",
              answer: "Absolutely. During the consultation, tell your therapist which areas need the most attention. We can spend the entire session on problem zones like shoulders, lower back, or legs, or combine focused work with full-body treatment."
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
