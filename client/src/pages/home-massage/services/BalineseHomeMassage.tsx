import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';

export default function BalineseHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Home Massage | Traditional Massage at Your Villa"
        description="Experience authentic Balinese home massage at your villa or hotel. Traditional techniques delivered by licensed therapists. Book your home massage today."
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

      {/* Block 2: What this home massage does */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Balinese Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Balinese home massage combines traditional Indonesian healing techniques with the convenience of in-villa service. 
                This home massage style uses long, flowing strokes, gentle stretching, and acupressure points to promote deep 
                relaxation and energy balance. Our therapists bring centuries-old Balinese tradition directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The treatment begins with aromatic oil warming, followed by rhythmic palm and thumb pressure along energy lines. 
                Your Balinese home massage incorporates gentle joint mobilization and skin rolling techniques that stimulate 
                circulation while maintaining a deeply meditative pace. This traditional approach to home massage creates both 
                physical relief and mental calm.
              </p>
              <p className="text-lg text-muted-foreground">
                Each Balinese home massage session adapts to your needs while honoring authentic techniques. Whether you seek 
                stress relief, muscle tension release, or cultural immersion, this home massage delivers the full Balinese 
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
      <section className="py-16 md:py-20 bg-background">
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
                    <span className="text-2xl font-bold">Rp 240,000</span>
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
                    <span className="text-2xl font-bold">Rp 360,000</span>
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
                    <span className="text-2xl font-bold">Rp 480,000</span>
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
      <section className="py-16 md:py-20 bg-secondary/20">
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
                    Enjoy your Balinese home massage in your own space without shared facilities or strangers nearby.
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
                    Schedule your Balinese home massage around your activities, not spa hours. Same-day booking available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: CTA and Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Balinese Home Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience authentic Balinese tradition delivered as professional home massage service
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book This Home Massage
                </a>
              </Button>
            </div>

            {/* Mandatory Links - UP, SIDE, DOWN within home massage silo only */}
            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Home Massage Services & Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage">
                    ← All Home Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/services/deep-tissue">
                    Deep Tissue Home Massage →
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/cities/ubud">
                    Home Massage in Ubud
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage/knowledge/what-to-expect">
                    What to Expect from Home Massage
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
