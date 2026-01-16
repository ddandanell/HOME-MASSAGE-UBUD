import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, User } from 'lucide-react';

export default function BalineseFullBodyMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Full Body Massage | Complete Traditional Treatment"
        description="Experience Balinese full body massage with comprehensive traditional techniques from head to toe. Complete therapeutic treatment at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Full Body Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Comprehensive traditional treatment from head to toe
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Full Body Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Full Body Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese full body massage delivers complete traditional Indonesian treatment addressing every major muscle group from scalp to feet. This comprehensive approach combines long flowing strokes, acupressure, gentle stretching, and energy balancing techniques applied systematically across your entire body. The treatment ensures no area is overlooked, creating thorough therapeutic benefits and balanced relaxation throughout.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist works methodically beginning with back and shoulders, progressing through legs and feet, then addressing arms, hands, neck, and head. Each body region receives appropriate attention using traditional Balinese techniques adapted to that area's needs. The full body approach balances your entire system rather than isolating specific problems, following the holistic philosophy central to Indonesian healing traditions.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese full body massage session creates complete wellness experience, leaving no tension points untouched. The comprehensive treatment proves ideal for those seeking thorough relaxation, travelers recovering from long journeys, or anyone wanting the complete traditional Balinese massage experience. This all-inclusive approach delivers maximum therapeutic value through systematic attention to your entire body.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Full Body Massage Pricing
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
                        <span className="text-2xl font-bold">Rp 350,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Complete head-to-toe traditional treatment
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
                        <span className="text-2xl font-bold">Rp 500,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Extended full body session with extra attention
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
                        <span className="text-2xl font-bold">Rp 650,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive full body ritual with deep work
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Balinese Full Body Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Complete Treatment</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Every major muscle group receives attention, ensuring balanced relaxation and no tension areas are missed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Holistic Balance</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Full body approach addresses your entire system, promoting overall wellness rather than isolated symptom relief.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Maximum Value</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Receive comprehensive therapeutic benefits in one session through systematic treatment of all body regions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Traditional Experience</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Experience authentic Balinese massage as traditionally practiced—comprehensive treatment honoring the whole person.
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
                      <h3 className="font-semibold text-lg mb-2">What body areas are included in full body massage?</h3>
                      <p className="text-muted-foreground">
                        Full body massage includes back, shoulders, neck, arms, hands, legs, feet, and can include head and face. Essentially every major muscle group from head to toe receives attention.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How much time is spent on each body area?</h3>
                      <p className="text-muted-foreground">
                        Time is distributed based on body size and needs. Larger areas like back and legs receive more time, but the therapist can adjust to spend extra time on problem areas if requested.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can I request the therapist focus on specific areas during full body massage?</h3>
                      <p className="text-muted-foreground">
                        Yes, communicate your needs at the start. The therapist will ensure all areas are addressed while spending extra time on regions needing more attention.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is 60 minutes enough for full body massage?</h3>
                      <p className="text-muted-foreground">
                        Yes, 60 minutes provides complete coverage of all major areas. However, 90 or 120 minutes allows more thorough work on each region and deeper relaxation benefits.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What should I wear during Balinese full body massage?</h3>
                      <p className="text-muted-foreground">
                        Most clients undress to their comfort level. Therapists use professional draping techniques to ensure only the area being worked on is exposed, maintaining complete modesty.
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
                    Book Your Balinese Full Body Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience complete traditional treatment from head to toe
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
                      <Link href="/balinese-massage/services/traditional">
                        Traditional Balinese Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/90-minute">
                        Balinese 90 Minute Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/deep-tissue">
                        Balinese Deep Tissue Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/relaxation">
                        Balinese Relaxation Massage
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
