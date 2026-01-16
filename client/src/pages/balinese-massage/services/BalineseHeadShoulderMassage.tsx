import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Brain } from 'lucide-react';

export default function BalineseHeadShoulderMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Head & Shoulder Massage | Upper Body Tension Relief"
        description="Experience Balinese head and shoulder massage targeting upper body tension. Traditional techniques for neck, shoulders, and scalp at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Head & Shoulder Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Focused traditional treatment for upper body tension and stress
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Head & Shoulder Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Head & Shoulder Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese head and shoulder massage concentrates traditional Indonesian techniques on the upper body region where most people hold stress and tension. This focused treatment addresses neck, shoulders, upper back, arms, and scalp using firm pressure, acupressure points, and traditional Balinese strokes specifically adapted for these areas. The concentrated approach delivers powerful relief for technology-related tension, travel strain, and stress-induced tightness.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist begins with shoulders and upper back, using thumbs and palms to release knots and tight muscles. Treatment progresses to neck with careful attention to delicate structures, then addresses scalp through traditional Balinese head massage techniques that stimulate circulation and promote relaxation. Arms and hands receive attention to complete the upper body treatment, ensuring comprehensive relief from shoulder to fingertips.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese head and shoulder massage session proves ideal for those with limited time, specific upper body concerns, or anyone seeking relief from desk work, phone use, or driving tension. The treatment effectively addresses tension headaches, stiff neck, and shoulder pain through concentrated therapeutic work. This targeted approach delivers significant benefits in shorter sessions than full body massage requires.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Head & Shoulder Massage Pricing
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
                        Comprehensive upper body and head treatment
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
                        Extended upper body session with deeper work
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
                        Complete upper body ritual plus lower body
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
                  Why Choose Balinese Head & Shoulder Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Headache Relief</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Effectively addresses tension headaches by releasing trigger points in neck, shoulders, and scalp that contribute to head pain.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Tech Neck Solution</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Counteracts forward head posture and shoulder rounding from phone and computer use through targeted muscle release.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Stress Concentration</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Most people hold stress in upper body. Focused treatment on these areas provides efficient stress relief in less time.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Mental Clarity</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Scalp massage improves blood flow to the brain while releasing muscle tension that can affect mental function and mood.
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
                      <h3 className="font-semibold text-lg mb-2">What areas are included in head and shoulder massage?</h3>
                      <p className="text-muted-foreground">
                        Treatment covers shoulders, upper back, neck, arms, hands, scalp, and sometimes face. Essentially the entire upper body receives focused attention.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can head and shoulder massage help with tension headaches?</h3>
                      <p className="text-muted-foreground">
                        Yes, many tension headaches originate from tight neck and shoulder muscles. Releasing these trigger points often provides immediate headache relief and prevents future occurrences.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Will my hair get messy during scalp massage?</h3>
                      <p className="text-muted-foreground">
                        Scalp massage uses dry techniques without oil on hair itself. Your hairstyle may become slightly mussed but won't be oily or require washing afterward.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is head and shoulder massage suitable for office workers?</h3>
                      <p className="text-muted-foreground">
                        Absolutely ideal. This treatment specifically addresses the upper body tension patterns common in desk workers, providing targeted relief for computer-related muscle strain.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How often should I get head and shoulder massage?</h3>
                      <p className="text-muted-foreground">
                        Weekly sessions benefit those with chronic upper body tension. Bi-weekly or monthly treatments provide good maintenance for moderate stress. Even occasional sessions offer significant relief.
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
                    Book Your Balinese Head & Shoulder Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience targeted relief for upper body stress and tension
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
                      <Link href="/balinese-massage/services/full-body">
                        Balinese Full Body Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/deep-tissue">
                        Balinese Deep Tissue Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/reflexology">
                        Balinese Reflexology Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/60-minute">
                        Balinese 60 Minute Massage
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
