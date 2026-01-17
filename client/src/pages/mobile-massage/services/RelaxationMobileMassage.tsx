import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function RelaxationMobileMassage() {
  return (
    <>
      <SEOHead 
        title="Relaxation Mobile Massage | Gentle Massage at Your Villa"
        description="Pure relaxation mobile massage with gentle, flowing strokes. Perfect stress relief delivered to your accommodation. Book your calming mobile massage today."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Relaxation Mobile Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Gentle, calming strokes delivered as soothing mobile massage service
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book This Mobile Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Relaxation Mobile Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Relaxation mobile massage focuses on gentle, flowing movements designed purely for stress relief and mental calm. 
                This mobile massage style uses light to moderate pressure with long, rhythmic strokes that soothe the nervous 
                system. Our therapists create a tranquil experience directly in your villa, transforming your space into a 
                peaceful sanctuary.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike therapeutic massage, relaxation mobile massage prioritizes comfort over treatment. The pace is slow and 
                meditative, using effleurage techniques and gentle kneading. This mobile massage approach allows complete mental 
                release, often leading to deep relaxation or sleep during the session. Aromatherapy enhances the calming 
                effect throughout your treatment.
              </p>
              <p className="text-lg text-muted-foreground">
                Your relaxation mobile massage adapts to your sensitivity and preferences. The therapist maintains consistent, 
                soothing rhythm while you drift into complete ease. This mobile massage delivers pure stress reduction without 
                any discomfort, making it ideal for first-time massage recipients or those seeking gentle care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Relaxation Mobile Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Stressed Professionals</h3>
                  <p className="text-muted-foreground">
                    Release work tension through gentle relaxation mobile massage that calms mental overactivity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">First-Time Recipients</h3>
                  <p className="text-muted-foreground">
                    Experience massage in the comfortable, non-intimidating format of mobile massage service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sensitive Individuals</h3>
                  <p className="text-muted-foreground">
                    Enjoy massage benefits through gentle relaxation mobile massage that respects physical sensitivity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sleep-Deprived Travelers</h3>
                  <p className="text-muted-foreground">
                    Reset your nervous system with calming mobile massage that often leads to deep, restorative sleep.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Relaxation Mobile Massage Pricing
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
                    One hour gentle relaxation mobile massage for stress relief
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
                    Extended relaxation mobile massage for complete mental reset
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
                    Ultimate relaxation mobile massage spa experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Relaxation Mobile Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Preserve Calm State</h3>
                  <p className="text-muted-foreground">
                    Avoid disrupting your relaxation mobile massage benefits by traveling through traffic back to accommodation.
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
                    Maximize relaxation mobile massage effectiveness in your own comfortable, known space versus unfamiliar spa.
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
                    Many fall asleep during relaxation mobile massage. Transition directly to nap or night rest in your own bed.
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
                    After relaxation mobile massage, remain in peaceful state without rushing to check out or leave spa facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MobileMassageFAQ items={[
        {
          question: "What makes relaxation mobile massage different from other massage types?",
          answer: "Relaxation mobile massage emphasizes gentle, flowing strokes and calming atmosphere over therapeutic manipulation. Unlike deep tissue mobile massage targeting specific problems, relaxation mobile massage provides full-body stress relief. The lighter pressure and slower pace of relaxation mobile massage induces deep calm, making this mobile massage style perfect for pure unwinding and mental rejuvenation."
        },
        {
          question: "Can relaxation mobile massage help with sleep problems?",
          answer: "Yes! Relaxation mobile massage significantly improves sleep quality by reducing stress hormones and activating the parasympathetic nervous system. Evening relaxation mobile massage sessions are particularly effective for insomnia. The calming effects of mobile massage continue hours after treatment, helping establish healthier sleep patterns. Many guests book regular relaxation mobile massage specifically for sleep improvement."
        },
        {
          question: "Is relaxation mobile massage suitable for massage beginners?",
          answer: "Absolutely! Relaxation mobile massage is perfect for first-time clients. The gentle pressure and non-intimidating approach makes this mobile massage style very accessible. Relaxation mobile massage introduces benefits of therapeutic touch without intensity that might overwhelm newcomers. It's also ideal for elderly clients or anyone preferring gentle mobile massage experience."
        },
        {
          question: "How long should a relaxation mobile massage session last?",
          answer: "Relaxation mobile massage typically runs 60 or 90 minutes. The 90-minute session is recommended for full relaxation benefits, allowing complete full-body coverage without rushing. Shorter 60-minute relaxation mobile massage works for maintenance sessions or time-constrained schedules. Longer duration mobile massage deepens relaxation effects and provides more comprehensive stress relief."
        },
        {
          question: "Can relaxation mobile massage use aromatherapy?",
          answer: "Yes! Aromatherapy enhances relaxation mobile massage significantly. We offer lavender for sleep and relaxation, chamomile for stress, and other calming essential oils during your mobile massage. The combination of gentle touch and therapeutic scents in relaxation mobile massage creates multi-sensory calming experience. Specify your aromatherapy preferences when booking mobile massage."
        },
        {
          question: "Is relaxation mobile massage effective for anxiety and stress?",
          answer: "Extremely effective! Relaxation mobile massage reduces cortisol (stress hormone) while increasing serotonin and dopamine (mood-elevating chemicals). Regular relaxation mobile massage sessions help manage chronic anxiety and work-related stress. The convenience of mobile massage in familiar surroundings further reduces anxiety compared to visiting unfamiliar spas for relaxation mobile massage treatments."
        }
      ]} />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Relaxation Mobile Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Gentle, stress-relieving mobile massage delivered to your private space
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book This Mobile Massage
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Mobile Massage Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage">
                    ← All Mobile Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/services/couples">
                    Couples Mobile Massage →
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/cities/sanur">
                    Mobile Massage in Sanur
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/knowledge/what-to-expect">
                    What to Expect
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/blog/why-tourists-prefer-mobile-massage">
                    Why Choose Mobile Massage
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
