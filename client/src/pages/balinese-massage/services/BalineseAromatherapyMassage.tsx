import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Flower2 } from 'lucide-react';

export default function BalineseAromatherapyMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Aromatherapy Massage | Essential Oil Therapy"
        description="Experience Balinese aromatherapy massage with therapeutic essential oils and traditional techniques. Customized blends for relaxation and healing at your villa."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Aromatherapy Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Traditional massage enhanced with therapeutic essential oils
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Aromatherapy Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Aromatherapy Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese aromatherapy massage combines traditional Indonesian healing techniques with therapeutic-grade essential oils customized to your wellness needs. This sensory treatment enhances classic Balinese massage through carefully selected aromatic blends that work through both inhalation and skin absorption. The oils amplify relaxation, reduce stress, and provide specific therapeutic benefits while you enjoy traditional bodywork.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist selects essential oils based on your needs—lavender for relaxation, eucalyptus for respiratory support, ginger for pain relief, or frangipani for emotional balance. These pure plant extracts blend with carrier oil and warm through the therapist's hands before application. As traditional Balinese strokes distribute the aromatic oil, your body absorbs healing compounds while your mind responds to the therapeutic scents.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese aromatherapy massage session creates a complete sensory experience where touch, scent, and traditional healing wisdom converge. The essential oils continue working hours after your massage, providing lasting benefits beyond the treatment itself. This holistic approach addresses physical tension, emotional stress, and energetic imbalances through the powerful combination of skilled touch and botanical medicine.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Aromatherapy Massage Pricing
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
                        Full aromatherapy treatment with custom oil blend
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
                        Extended aromatherapy session for deeper benefits
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
                        Complete aromatherapy ritual with multiple blends
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
                  Why Choose Balinese Aromatherapy Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flower2 className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Customized Healing</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Essential oils are selected specifically for your needs, whether stress relief, pain management, or emotional balance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flower2 className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Enhanced Relaxation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Therapeutic scents trigger deep relaxation responses in the brain, amplifying the calming effects of massage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flower2 className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Lasting Benefits</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Essential oils continue working after your massage, providing therapeutic effects for hours through continued inhalation and absorption.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flower2 className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Holistic Treatment</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Addresses physical, emotional, and mental wellness simultaneously through the powerful combination of touch and aromatherapy.
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
                      <h3 className="font-semibold text-lg mb-2">What essential oils are used in Balinese aromatherapy massage?</h3>
                      <p className="text-muted-foreground">
                        We offer lavender, eucalyptus, peppermint, ginger, lemongrass, frangipani, ylang-ylang, and sandalwood. Your therapist recommends blends based on your wellness goals and preferences.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can I choose my own essential oil blend?</h3>
                      <p className="text-muted-foreground">
                        Absolutely. You can select specific oils or describe your desired effects, and the therapist will create a personalized blend. We recommend professional guidance for therapeutic benefits.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Are the essential oils safe for sensitive skin?</h3>
                      <p className="text-muted-foreground">
                        We use therapeutic-grade oils properly diluted in carrier oil. Inform your therapist of any allergies or skin sensitivities, and we'll select appropriate oils or conduct a patch test.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How does aromatherapy massage differ from regular Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        The massage techniques remain the same, but aromatherapy adds therapeutic essential oils that provide additional benefits through inhalation and skin absorption, creating a multi-sensory healing experience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can pregnant women receive Balinese aromatherapy massage?</h3>
                      <p className="text-muted-foreground">
                        Some essential oils are safe during pregnancy, while others should be avoided. We offer pregnancy-safe aromatherapy blends, but please inform us of your pregnancy beforehand.
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
                    Book Your Balinese Aromatherapy Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience the healing power of touch and therapeutic scents
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
