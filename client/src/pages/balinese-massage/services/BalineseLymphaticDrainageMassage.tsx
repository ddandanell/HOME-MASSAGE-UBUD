import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Droplets } from 'lucide-react';

export default function BalineseLymphaticDrainageMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Lymphatic Drainage Massage | Detox & Wellness"
        description="Experience Balinese lymphatic drainage massage for detoxification and immune support. Gentle traditional techniques promoting natural healing at your villa."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Lymphatic Drainage Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Gentle traditional techniques for detoxification and immune wellness
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Lymphatic Drainage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Lymphatic Drainage Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese lymphatic drainage massage combines traditional Indonesian healing wisdom with specialized gentle techniques that stimulate lymph flow throughout your body. This therapeutic treatment uses light, rhythmic strokes following lymphatic pathways to encourage natural detoxification, reduce fluid retention, and support immune function. The exceptionally gentle pressure distinguishes this massage from standard bodywork while delivering profound cleansing benefits.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist applies delicate pumping motions and feather-light pressure in specific directions that match lymphatic flow patterns. The treatment systematically addresses major lymph node clusters—neck, underarms, abdomen, and groin—while working along limbs toward these drainage points. Traditional Balinese energy work complements the lymphatic techniques, creating holistic treatment that supports your body's natural cleansing and healing processes.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese lymphatic drainage massage session proves particularly beneficial after travel, during illness recovery, or for managing swelling and inflammation. The treatment helps reduce puffiness, supports immune response, and promotes overall wellness through enhanced lymphatic circulation. This specialized approach delivers therapeutic detoxification benefits through remarkably gentle touch that feels deeply relaxing while working powerfully beneath the surface.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Lymphatic Drainage Pricing
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
                        <span className="text-2xl font-bold">Rp 320,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Full body lymphatic drainage treatment
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
                        <span className="text-2xl font-bold">Rp 450,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive lymphatic and energy work
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
                        <span className="text-2xl font-bold">Rp 590,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Deep detox ritual with extended techniques
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
                  Why Choose Balinese Lymphatic Drainage Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Natural Detoxification</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Gentle techniques stimulate lymph flow to eliminate toxins, excess fluid, and metabolic waste naturally through your body's own systems.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Reduced Swelling</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Effectively addresses fluid retention, post-travel puffiness, and inflammation through improved lymphatic circulation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Immune Support</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Enhanced lymph flow supports immune function by improving circulation of white blood cells and antibodies throughout your body.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Gentle Healing</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Exceptionally gentle pressure makes this treatment ideal for sensitive conditions, post-surgery recovery, or those preferring softer touch.
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
                      <h3 className="font-semibold text-lg mb-2">How gentle is lymphatic drainage massage?</h3>
                      <p className="text-muted-foreground">
                        Lymphatic drainage uses very light pressure—about the weight of a nickel. The touch is gentle and rhythmic, designed to stimulate superficial lymph vessels without deep muscle work.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What conditions benefit from Balinese lymphatic drainage massage?</h3>
                      <p className="text-muted-foreground">
                        This treatment helps with edema, post-travel swelling, sinus congestion, sluggish immunity, cellulite reduction, and post-surgical recovery (with doctor approval). It's also beneficial for general wellness and detoxification.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How soon will I see results from lymphatic drainage?</h3>
                      <p className="text-muted-foreground">
                        Many clients notice reduced puffiness immediately after treatment. Optimal results develop over 24-48 hours as your lymphatic system continues processing. Regular sessions provide cumulative benefits.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Should I drink water after lymphatic drainage massage?</h3>
                      <p className="text-muted-foreground">
                        Yes, drinking plenty of water after treatment helps flush released toxins through your system. Hydration supports the detoxification process initiated by the massage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Are there any contraindications for lymphatic drainage?</h3>
                      <p className="text-muted-foreground">
                        Avoid lymphatic drainage if you have active infection, blood clots, congestive heart failure, or kidney problems. Consult your doctor if you have any medical conditions before receiving treatment.
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
                    Book Your Balinese Lymphatic Drainage Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Support your body's natural detoxification and healing
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
                      <Link href="/balinese-massage/services/relaxation">
                        Balinese Relaxation Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/aromatherapy">
                        Balinese Aromatherapy Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/pregnancy">
                        Balinese Pregnancy Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/reflexology">
                        Balinese Reflexology Massage
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
