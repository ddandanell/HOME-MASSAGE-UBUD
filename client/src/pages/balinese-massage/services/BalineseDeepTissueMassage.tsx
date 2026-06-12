import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Activity } from 'lucide-react';

export default function BalineseDeepTissueMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Deep Tissue Massage | Intense Muscle Therapy"
        description="Experience Balinese deep tissue massage combining traditional techniques with firm pressure for chronic pain and muscle tension. Professional therapists at your location."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Deep Tissue Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Firm pressure and traditional techniques for chronic tension relief
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Deep Tissue Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Deep Tissue Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese deep tissue massage combines traditional Indonesian healing methods with intensified pressure targeting the deepest muscle layers and connective tissue. This therapeutic approach addresses chronic pain, stubborn knots, and restricted mobility through firm, concentrated pressure applied along muscle fibers and fascia. The treatment maintains Balinese flow while delivering significantly stronger force than standard relaxation massage.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist uses thumbs, knuckles, forearms, and elbows to reach deep muscle layers, working slowly along problem areas to break down adhesions and release chronic tension. Traditional Balinese stretching and acupressure complement the deep work, creating comprehensive treatment that addresses both surface and deep tissue restrictions. The focused pressure may cause temporary discomfort but delivers lasting relief.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese deep tissue massage session begins with assessment of your specific tension patterns and pain points. The therapist then applies graduated pressure, starting moderately and increasing intensity as your muscles warm and release. This specialized treatment proves particularly effective for athletic recovery, repetitive strain injuries, and long-standing muscle problems that haven't responded to lighter massage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Deep Tissue Massage Pricing
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
                        Focused deep tissue work on primary problem areas
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
                        Comprehensive full body deep tissue treatment
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
                        Extended session for chronic pain and multiple areas
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
                  Why Choose Balinese Deep Tissue Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Chronic Pain Relief</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Firm pressure reaches deep muscle layers and fascia to release long-standing tension and adhesions that cause persistent pain.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Improved Mobility</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Breaking down muscle adhesions and scar tissue restores range of motion and flexibility in restricted areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Athletic Recovery</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Deep tissue work accelerates recovery from intense training, sports injuries, and repetitive strain conditions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Postural Correction</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Releasing deep muscle tension helps correct postural imbalances caused by chronic tightness and compensation patterns.
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
                      <h3 className="font-semibold text-lg mb-2">Will Balinese deep tissue massage hurt?</h3>
                      <p className="text-muted-foreground">
                        You may feel temporary discomfort when the therapist works on very tight areas, but it should feel like "good pain" that brings relief. Communicate with your therapist to keep pressure at your tolerance level.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How is Balinese deep tissue different from regular deep tissue massage?</h3>
                      <p className="text-muted-foreground">
                        Balinese deep tissue incorporates traditional Indonesian techniques like acupressure, stretching, and energy work alongside firm pressure. This holistic approach addresses both physical and energetic blockages.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Will I be sore after deep tissue massage?</h3>
                      <p className="text-muted-foreground">
                        Some muscle soreness for 24-48 hours after treatment is normal, similar to post-workout soreness. This indicates deep work and typically resolves quickly, leaving you feeling better than before.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How often should I get Balinese deep tissue massage?</h3>
                      <p className="text-muted-foreground">
                        For chronic issues, weekly or bi-weekly sessions work best initially. Once pain improves, maintenance sessions every 3-4 weeks help prevent tension from returning.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can deep tissue massage help with specific injuries?</h3>
                      <p className="text-muted-foreground">
                        Yes, deep tissue work effectively treats many conditions including lower back pain, frozen shoulder, sciatica, tennis elbow, and repetitive strain injuries. Consult your therapist about your specific condition.
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
                    Book Your Balinese Deep Tissue Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience therapeutic relief for chronic pain and tension
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
                      <Link href="/balinese-massage/services/sports">
                        Balinese Sports Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/traditional">
                        Traditional Balinese Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/hot-stone">
                        Balinese Hot Stone Massage
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
