import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Footprints } from 'lucide-react';

export default function BalineseReflexologyMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Reflexology Massage | Foot Pressure Point Therapy"
        description="Experience Balinese reflexology massage combining traditional foot massage with pressure point therapy. Healing through foot reflexology at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Reflexology Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Traditional foot massage with therapeutic pressure point therapy
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Reflexology Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Reflexology Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese reflexology massage combines traditional Indonesian foot massage with pressure point therapy based on the principle that specific areas on feet correspond to organs and systems throughout the body. By applying targeted pressure to these reflex zones, therapists stimulate healing responses in related body parts while providing deeply relaxing foot treatment. This ancient practice offers full-body benefits through focused foot work.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist begins with aromatic foot soaking using traditional Balinese herbs and flowers, preparing feet for treatment. The reflexology work uses thumb and finger pressure on precise points across soles, toes, and ankles, systematically addressing each reflex zone. The treatment often extends to lower legs with traditional Balinese massage strokes, creating comprehensive lower body therapy that influences whole-body wellness.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese reflexology massage session can be enjoyed as standalone treatment or combined with full body massage for enhanced benefits. The focused foot work proves particularly effective for those who spend long days walking, standing, or experiencing stress-related conditions. This therapeutic approach delivers profound relaxation and healing through the powerful connection between feet and overall health.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Reflexology Massage Pricing
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
                        Complete foot reflexology with traditional techniques
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
                        Extended reflexology plus upper body massage
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
                        Full body massage with comprehensive reflexology
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
                  Why Choose Balinese Reflexology Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Footprints className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Whole Body Benefits</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Foot pressure points correspond to organs and systems throughout your body, providing full-body healing through focused foot work.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Footprints className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Stress Relief</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Reflexology triggers deep relaxation responses, reducing stress hormones and promoting overall calm and wellbeing.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Footprints className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Improved Circulation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Foot massage enhances blood flow to extremities and throughout the body, supporting healing and energy levels.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Footprints className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Pain Management</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Particularly effective for headaches, digestive issues, and chronic pain through stimulation of corresponding reflex points.
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
                      <h3 className="font-semibold text-lg mb-2">How does Balinese reflexology massage work?</h3>
                      <p className="text-muted-foreground">
                        Reflexology is based on the principle that specific points on your feet correspond to organs and systems in your body. Applying pressure to these points stimulates healing responses in related areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Will reflexology hurt?</h3>
                      <p className="text-muted-foreground">
                        Some points may feel tender, especially if corresponding body areas have issues. The pressure should feel therapeutic, not painful. Your therapist adjusts pressure based on your comfort level.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can reflexology help with specific health conditions?</h3>
                      <p className="text-muted-foreground">
                        Reflexology may help with headaches, digestive issues, stress, insomnia, and pain management. It's complementary therapy, not a replacement for medical treatment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What's included in a Balinese reflexology massage session?</h3>
                      <p className="text-muted-foreground">
                        Treatment includes aromatic foot soaking, complete foot reflexology covering all reflex zones, and typically lower leg massage. Longer sessions include upper body massage as well.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How often should I receive reflexology massage?</h3>
                      <p className="text-muted-foreground">
                        Weekly sessions provide cumulative benefits for chronic conditions. Monthly maintenance treatments support ongoing wellness. Even single sessions offer significant relaxation and therapeutic effects.
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
                    Book Your Balinese Reflexology Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience full-body healing through therapeutic foot treatment
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
                      <Link href="/balinese-massage/services/head-shoulder">
                        Balinese Head & Shoulder Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/full-body">
                        Balinese Full Body Massage
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
