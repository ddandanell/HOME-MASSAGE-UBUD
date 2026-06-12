import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Zap } from 'lucide-react';

export default function Balinese60MinuteMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese 60 Minute Massage | One Hour Traditional Treatment"
        description="Experience Balinese 60 minute massage with complete traditional techniques in one hour. Perfect introduction to authentic Indonesian healing at your villa."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese 60 Minute Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Complete traditional treatment in one efficient hour
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book 60 Minute Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese 60 Minute Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese 60 minute massage delivers complete traditional Indonesian healing treatment in one efficient hour. This time-tested session length provides full body coverage using authentic Balinese techniques including flowing strokes, acupressure, gentle stretching, and aromatherapy. The therapist works systematically through all major muscle groups, creating comprehensive therapeutic benefits without extended time commitment.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your one-hour session follows traditional Balinese massage structure beginning with back and shoulders, progressing through legs and feet, then addressing arms and neck. Each area receives appropriate attention using techniques suited to that region. The therapist maintains steady pace ensuring thorough treatment while respecting time constraints, delivering authentic Balinese experience in the most common massage duration worldwide.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese 60 minute massage session proves ideal for first-time recipients, those with busy schedules, or anyone seeking quality massage within standard hour timeframe. The treatment provides significant stress relief, muscle tension release, and circulation improvement in time-efficient format. This classic duration offers perfect introduction to Balinese healing or regular maintenance for ongoing wellness.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  60 Minute Massage Pricing
                </h2>
                <div className="grid md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
                  <Card className="border-primary border-2">
                    <CardContent className="p-8 text-center">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Clock className="w-6 h-6 text-primary" />
                        <span className="font-semibold text-xl">60 Minutes</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <DollarSign className="w-6 h-6 text-primary" />
                        <span className="text-3xl font-bold">Rp 320,000</span>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Complete traditional Balinese massage with all authentic techniques
                      </p>
                      <Button size="lg" asChild>
                        <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                          Book 60 Minute Session
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-center text-muted-foreground">
                  Looking for longer sessions? Check out our 90-minute or 2-hour packages below.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Balinese 60 Minute Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Time Efficient</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Get complete therapeutic benefits in standard one-hour timeframe that fits easily into your schedule without sacrificing quality.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Complete Coverage</h3>
                      </div>
                      <p className="text-muted-foreground">
                        All major muscle groups receive attention through efficient pacing and traditional techniques that work systematically.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Perfect Introduction</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Ideal first Balinese massage experience that demonstrates authentic techniques without overwhelming time commitment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Great Value</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Receive authentic traditional treatment at accessible price point perfect for regular maintenance sessions.
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
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is 60 minutes enough for full body Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Yes, 60 minutes provides complete full body coverage. While longer sessions allow more time on each area, one hour delivers all traditional techniques across your entire body with therapeutic effectiveness.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What's included in a 60 minute Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Your session includes aromatic oil massage, traditional flowing strokes, acupressure on key points, gentle stretching, and work on back, shoulders, legs, feet, arms, neck, and head following authentic Balinese protocols.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Should I choose 60, 90, or 120 minutes?</h3>
                      <p className="text-muted-foreground">
                        Choose 60 minutes for first sessions, regular maintenance, or time constraints. Select 90 minutes for deeper work and relaxation. Pick 120 minutes for comprehensive treatment with extended techniques on problem areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can the therapist focus on specific areas during 60 minutes?</h3>
                      <p className="text-muted-foreground">
                        Yes, communicate your needs. The therapist can spend extra time on problem areas while ensuring other regions still receive basic treatment within the hour timeframe.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How often should I get 60 minute Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Weekly sessions provide excellent stress management and muscle maintenance. Bi-weekly or monthly treatments support ongoing wellness. Even occasional 60-minute sessions deliver significant benefits.
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
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Book Your Balinese 60 Minute Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience complete traditional treatment in one efficient hour
                  </p>
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                      Book Now via WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="border-t pt-12">
                  <h3 className="text-xl font-semibold mb-6">Related Balinese Massage Services</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage">
                        ← All Balinese Massage Services
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/90-minute">
                        Balinese 90 Minute Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/2-hour-package">
                        Balinese 2 Hour Package
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/traditional">
                        Traditional Balinese Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/full-body">
                        Balinese Full Body Massage
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
