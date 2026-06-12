import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Sparkles } from 'lucide-react';

export default function TraditionalBalineseMassage() {
  return (
    <>
      <SEOHead 
        title="Traditional Balinese Massage | Authentic Healing Techniques"
        description="Experience authentic traditional Balinese massage with ancient healing techniques. Licensed therapists deliver genuine Indonesian bodywork at your location in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Traditional Balinese Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Authentic Indonesian healing techniques passed down through generations
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Traditional Balinese Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Traditional Balinese Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Traditional Balinese massage represents centuries of Indonesian healing wisdom, combining acupressure, reflexology, and aromatherapy into one comprehensive treatment. This authentic technique uses gentle stretching, long flowing strokes, and firm pressure on energy points to restore balance and vitality. The treatment follows ancient protocols that harmonize body, mind, and spirit through rhythmic movements.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Each traditional Balinese massage session begins with aromatic warm oil applied through palm pressure along muscle groups and energy meridians. Therapists use thumbs, palms, and forearms to knead deep tissues while maintaining meditative flow. Skin rolling, gentle stretches, and acupressure on specific points release blocked energy and stimulate circulation throughout your entire body.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    The traditional approach emphasizes holistic healing rather than isolated symptom relief. Your therapist adjusts pressure and techniques based on your energy flow and physical needs, creating a deeply personalized experience. This time-honored Balinese practice delivers profound relaxation, pain relief, and energetic renewal through authentic Indonesian methods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Traditional Balinese Massage Pricing
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
                        Complete traditional techniques with full body treatment
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
                        Extended session with deeper energy work and healing
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
                        Full traditional ritual with comprehensive body work
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
                  Why Choose Traditional Balinese Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Authentic Techniques</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Experience genuine Indonesian healing methods practiced for centuries, delivered by therapists trained in traditional Balinese protocols.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Holistic Healing</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Address physical tension, mental stress, and energetic imbalances simultaneously through comprehensive traditional bodywork.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Deep Relaxation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        The rhythmic flow and meditative pace of traditional techniques induce profound calm and stress relief.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Cultural Experience</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Immerse yourself in Balinese healing traditions and connect with Indonesia's rich wellness heritage.
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
                      <h3 className="font-semibold text-lg mb-2">What makes traditional Balinese massage different from other massage styles?</h3>
                      <p className="text-muted-foreground">
                        Traditional Balinese massage uniquely combines acupressure, reflexology, aromatherapy, and gentle stretching into one holistic treatment. The focus on energy meridians and spiritual balance distinguishes it from purely physical massage techniques.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How much pressure is used in traditional Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Traditional techniques use medium to firm pressure that can be adjusted to your comfort. The therapist applies deeper pressure on muscle knots while maintaining gentle flow on sensitive areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What should I expect during my first traditional Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Your session begins with aromatic oil application, followed by rhythmic strokes, acupressure, and gentle stretching. The therapist works systematically through your body while you relax completely. Most clients feel deeply calm and slightly drowsy afterward.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can traditional Balinese massage help with specific pain or tension?</h3>
                      <p className="text-muted-foreground">
                        Yes, traditional techniques effectively address muscle tension, back pain, stiff shoulders, and headaches. The therapist focuses extra attention on problem areas while maintaining full-body treatment for balanced healing.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Do I need to prepare anything before my traditional Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Arrive hydrated and avoid heavy meals before your session. Our therapists bring all necessary equipment including massage table, oils, and linens. Just provide a comfortable space with room for the table setup.
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
                    Book Your Traditional Balinese Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience authentic Indonesian healing at your villa or hotel
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
                      <Link href="/balinese-massage/services/hot-stone">
                        Balinese Hot Stone Massage
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
                      <Link href="/balinese-massage/services/deep-tissue">
                        Balinese Deep Tissue Massage
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
