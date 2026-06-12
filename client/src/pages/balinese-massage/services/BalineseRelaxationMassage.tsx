import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Wind } from 'lucide-react';

export default function BalineseRelaxationMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Relaxation Massage | Gentle Stress Relief Therapy"
        description="Experience Balinese relaxation massage with gentle techniques for deep stress relief. Pure calm and tranquility through traditional Indonesian massage at your villa."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Relaxation Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Gentle traditional techniques for pure stress relief and tranquility
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Relaxation Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Relaxation Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese relaxation massage emphasizes the gentler aspects of traditional Indonesian healing, using light to medium pressure with flowing strokes designed purely for stress relief and mental calm. This treatment prioritizes deep relaxation over therapeutic muscle work, creating meditative experience that quiets the mind while soothing the body. The unhurried pace and gentle touch induce profound tranquility and peace.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist applies aromatic oil through long, continuous strokes that follow natural body contours, maintaining consistent contact and rhythmic flow. The gentle pressure, combined with traditional Balinese techniques like soft acupressure and light stretching, calms the nervous system without triggering any discomfort. Soothing music, aromatherapy, and the therapist's meditative presence enhance the deeply peaceful experience.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese relaxation massage session creates sanctuary from stress, allowing complete mental and physical letting go. The treatment proves ideal for those new to massage, recovering from illness, or simply seeking pure relaxation without therapeutic intensity. This nurturing approach delivers the restorative power of traditional Balinese healing through gentle, caring touch that honors your need for complete rest.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Relaxation Massage Pricing
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
                        Complete gentle treatment for stress relief
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
                        Extended session for profound relaxation
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
                        Ultimate relaxation ritual for complete peace
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
                  Why Choose Balinese Relaxation Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Wind className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Pure Stress Relief</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Gentle techniques specifically designed to calm nervous system and dissolve mental stress without any discomfort.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Wind className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Better Sleep</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Deep relaxation improves sleep quality by reducing stress hormones and promoting parasympathetic nervous system activation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Wind className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Mental Clarity</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Quieting the mind through gentle bodywork creates mental space, improved focus, and emotional balance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Wind className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Gentle Introduction</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Perfect for first-time massage recipients or those who prefer lighter pressure without sacrificing therapeutic benefits.
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
                      <h3 className="font-semibold text-lg mb-2">How gentle is Balinese relaxation massage?</h3>
                      <p className="text-muted-foreground">
                        Relaxation massage uses light to medium pressure focused on comfort and calm. The touch is soothing and flowing, designed to never cause discomfort or tension.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Will relaxation massage help with muscle tension?</h3>
                      <p className="text-muted-foreground">
                        Yes, gentle massage releases muscle tension through relaxation rather than force. As your nervous system calms, muscles naturally release their holding patterns.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is it okay to fall asleep during relaxation massage?</h3>
                      <p className="text-muted-foreground">
                        Absolutely! Falling asleep indicates deep relaxation and is perfectly normal. Your body continues receiving therapeutic benefits whether awake or sleeping.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How does relaxation massage differ from traditional Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Relaxation massage uses lighter pressure and slower pace than traditional treatment. The focus is purely on stress relief and calm rather than addressing specific muscle issues.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How will I feel after Balinese relaxation massage?</h3>
                      <p className="text-muted-foreground">
                        Most clients feel deeply calm, peaceful, and sometimes slightly drowsy. This relaxed state continues for hours after treatment, promoting better sleep and reduced stress levels.
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
                    Book Your Balinese Relaxation Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience pure tranquility through gentle traditional healing
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
                      <Link href="/balinese-massage/services/aromatherapy">
                        Balinese Aromatherapy Massage
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
                      <Link href="/balinese-massage/services/couples">
                        Balinese Couples Massage
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
