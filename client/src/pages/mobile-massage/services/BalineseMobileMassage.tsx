import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function BalineseMobileMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Mobile Massage | Traditional Massage at Your Villa"
        description="Experience authentic Balinese mobile massage at your villa or hotel. Traditional techniques delivered by licensed therapists. Book your mobile massage today."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* H1: [Service] Mobile Massage */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Balinese Mobile Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Traditional Balinese techniques delivered as a professional mobile massage service
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book This Mobile Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 2: What this mobile massage does */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Balinese Mobile Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Balinese mobile massage combines traditional Indonesian healing techniques with the convenience of in-villa service. 
                This mobile massage style uses long, flowing strokes, gentle stretching, and acupressure points to promote deep 
                relaxation and energy balance. Our therapists bring centuries-old Balinese tradition directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The treatment begins with aromatic oil warming, followed by rhythmic palm and thumb pressure along energy lines. 
                Your Balinese mobile massage incorporates gentle joint mobilization and skin rolling techniques that stimulate 
                circulation while maintaining a deeply meditative pace. This traditional approach to mobile massage creates both 
                physical relief and mental calm.
              </p>
              <p className="text-lg text-muted-foreground">
                Each Balinese mobile massage session adapts to your needs while honoring authentic techniques. Whether you seek 
                stress relief, muscle tension release, or cultural immersion, this mobile massage delivers the full Balinese 
                spa experience in your private space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Who it's for */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Balinese Mobile Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">First-Time Visitors</h3>
                  <p className="text-muted-foreground">
                    Experience authentic Balinese culture through traditional mobile massage without navigating unfamiliar spa locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Stressed Travelers</h3>
                  <p className="text-muted-foreground">
                    Let the meditative pace of Balinese mobile massage dissolve vacation stress and travel fatigue.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Wellness Seekers</h3>
                  <p className="text-muted-foreground">
                    Discover holistic balance through mobile massage that addresses body, mind, and energy flow.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Privacy Lovers</h3>
                  <p className="text-muted-foreground">
                    Enjoy traditional Balinese treatment in the complete privacy of your villa with mobile massage service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Duration & Pricing */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Balinese Mobile Massage Pricing
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
                    Essential Balinese mobile massage with full traditional techniques
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
                    Extended Balinese mobile massage for deeper relaxation and healing
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
                    Complete Balinese mobile massage ritual with extended techniques
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Why at home is better than spa */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Balinese Mobile Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Travel Required</h3>
                  <p className="text-muted-foreground">
                    Skip the journey to a spa. Your Balinese mobile massage comes to you, saving time and preserving your relaxed state.
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
                    Enjoy your Balinese mobile massage in your own space without shared facilities or strangers nearby.
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
                    After your Balinese mobile massage, step directly into your own shower and bed. No need to dress up and travel back.
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
                    Schedule your Balinese mobile massage around your activities, not spa hours. Same-day booking available.
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
          question: "What makes Balinese mobile massage different from other mobile massage styles?",
          answer: "Balinese mobile massage uniquely combines gentle flowing strokes, acupressure, stretching, and aromatherapy with traditional Indonesian healing philosophy. Unlike Swedish or deep tissue mobile massage, Balinese technique focuses on energy flow and holistic wellbeing. Our mobile massage therapists bring authentic Balinese essential oils and traditional methods directly to your location."
        },
        {
          question: "How long does a typical Balinese mobile massage session last?",
          answer: "Balinese mobile massage typically runs 60, 90, or 120 minutes. The 90-minute session is most popular as it allows full-body coverage with proper attention to each area. During mobile massage setup (10 minutes), therapists prepare aromatherapy and equipment. The treatment itself follows traditional Balinese sequence from back to feet, ensuring comprehensive mobile massage experience."
        },
        {
          question: "Can Balinese mobile massage help with specific health conditions?",
          answer: "Balinese mobile massage helps with stress, muscle tension, poor circulation, and sleep issues. The technique's combination of acupressure and gentle stretching makes this mobile massage style suitable for managing chronic pain and promoting relaxation. However, please inform us of specific conditions when booking mobile massage so therapists can adapt techniques appropriately."
        },
        {
          question: "What should I prepare before my Balinese mobile massage arrives?",
          answer: "Simply ensure a quiet, private space with room for the mobile massage table. Our therapists bring everything needed for Balinese mobile massage: professional table, organic oils, aromatherapy, fresh linens, and relaxation music. Having shower access nearby enhances the post-mobile massage experience, but isn't required. We handle all mobile massage setup and cleanup."
        },
        {
          question: "Is Balinese mobile massage suitable for first-time massage recipients?",
          answer: "Absolutely! Balinese mobile massage is perfect for beginners due to its gentle, flowing nature. The pressure is moderate and soothing rather than intense, making this mobile massage style very approachable. Our therapists explain each Balinese mobile massage technique and adjust pressure based on comfort, ensuring positive first-time mobile massage experience."
        },
        {
          question: "How often should I book Balinese mobile massage for wellness maintenance?",
          answer: "For wellness maintenance, weekly or bi-weekly Balinese mobile massage is ideal. Regular mobile massage helps manage ongoing stress and maintains flexibility. Monthly Balinese mobile massage works for general wellbeing. Many clients start with weekly mobile massage during Bali visits, then maintain routine at home with local therapists using similar Balinese mobile massage techniques."
        }
      ]} />

      {/* Block 6: CTA and Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Balinese Mobile Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience authentic Balinese tradition delivered as professional mobile massage service
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book This Mobile Massage
                </a>
              </Button>
            </div>

            {/* Mandatory Links - UP, SIDE, DOWN within mobile massage silo only */}
            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Mobile Massage Services & Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage">
                    ← All Mobile Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/services/deep-tissue">
                    Deep Tissue Mobile Massage →
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/cities/ubud">
                    Mobile Massage in Ubud
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/knowledge/what-to-expect">
                    What to Expect from Mobile Massage
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
