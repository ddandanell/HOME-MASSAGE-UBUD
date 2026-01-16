import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Flame } from 'lucide-react';

export default function BalineseHotStoneMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Hot Stone Massage | Heated Stone Therapy"
        description="Experience Balinese hot stone massage combining traditional techniques with heated volcanic stones. Deep relaxation and muscle relief at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Hot Stone Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Traditional Balinese techniques enhanced with heated volcanic stones
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Hot Stone Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Hot Stone Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese hot stone massage elevates traditional Indonesian techniques by incorporating smooth, heated volcanic stones placed on strategic energy points. The therapeutic warmth penetrates deep into muscles while your therapist uses additional stones as massage tools, combining heat therapy with classic Balinese flowing strokes. This fusion creates exceptional relaxation and accelerated healing.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Smooth basalt stones are heated to optimal temperature and positioned along your spine, between toes, and on key energy meridians. Your therapist then uses warm stones to deliver traditional Balinese massage strokes, allowing heat to soften tight muscles while pressure releases deeper tension. The combination of thermal therapy and skilled manipulation creates profound physical relief and mental calm.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese hot stone massage session balances active stone work with stationary placement, creating continuous warmth throughout treatment. The heated stones expand blood vessels, improve circulation, and help release chronic muscle tension more effectively than hands alone. This specialized treatment delivers traditional Balinese benefits enhanced by therapeutic heat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Hot Stone Massage Pricing
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
                        Essential hot stone treatment with Balinese techniques
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
                        Extended session with comprehensive stone placement
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
                        Complete hot stone ritual with full body treatment
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
                  Why Choose Balinese Hot Stone Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flame className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Deep Muscle Relief</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Heated stones penetrate deeper than hands alone, releasing chronic tension and knots more effectively through thermal therapy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flame className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Enhanced Circulation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Therapeutic heat expands blood vessels, improving circulation and oxygen delivery to tissues for faster healing and recovery.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flame className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Profound Relaxation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        The soothing warmth combined with Balinese techniques creates exceptional mental calm and stress relief beyond standard massage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flame className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Pain Management</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Particularly effective for chronic pain, arthritis, and muscle stiffness through the combination of heat and pressure therapy.
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
                      <h3 className="font-semibold text-lg mb-2">How hot are the stones in Balinese hot stone massage?</h3>
                      <p className="text-muted-foreground">
                        Stones are heated to approximately 130-145°F (54-63°C), warm enough for therapeutic benefit but comfortable on skin. Your therapist tests temperature before application and adjusts if needed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Will the hot stones burn my skin?</h3>
                      <p className="text-muted-foreground">
                        No, properly heated stones feel pleasantly warm, not burning. Therapists use oil barriers and constantly monitor temperature. You can always request cooler stones if needed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What types of stones are used in hot stone massage?</h3>
                      <p className="text-muted-foreground">
                        We use smooth basalt volcanic stones that retain heat exceptionally well. These stones are naturally formed and polished for comfortable skin contact during treatment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can I get Balinese hot stone massage if I have sensitive skin?</h3>
                      <p className="text-muted-foreground">
                        Yes, with adjustments. Inform your therapist about skin sensitivity, and they'll use slightly cooler stones with extra oil protection. The treatment can be safely adapted to your needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What should I do after my hot stone massage?</h3>
                      <p className="text-muted-foreground">
                        Drink plenty of water to help flush released toxins. Avoid cold showers immediately after treatment. Rest and allow the therapeutic effects to continue working through your body.
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
                    Book Your Balinese Hot Stone Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience therapeutic warmth combined with traditional Balinese healing
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
                      <Link href="/balinese-massage/services/deep-tissue">
                        Balinese Deep Tissue Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/aromatherapy">
                        Balinese Aromatherapy Massage
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
