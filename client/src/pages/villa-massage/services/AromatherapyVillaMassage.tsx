import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Flower2, Droplets, Sparkles } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function AromatherapyVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Aromatherapy Villa Massage | Essential Oil Healing at Your Villa"
        description="Professional aromatherapy villa massage delivered to your private villa in Bali. Experience therapeutic essential oils combined with expert massage. Same-day booking available."
        keywords="aromatherapy villa massage, villa aromatherapy massage, essential oil villa massage, aromatic villa massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Aromatherapy Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Experience the healing power of essential oils with professional aromatherapy villa massage delivered to your private accommodation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg">
                    <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                      Book Your Villa Massage Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/villa-massage">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What is Aromatherapy Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Aromatherapy Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Aromatherapy villa massage combines the therapeutic benefits of expert massage techniques with the healing properties of pure essential oils, creating a multi-sensory wellness experience delivered directly to your villa. This specialized villa massage treatment harnesses the power of botanical extracts that have been used for centuries to promote physical, emotional, and spiritual healing. Our professional therapists bring premium-grade essential oils to your accommodation, carefully selecting blends that address your specific needs—whether that's relaxation, invigoration, pain relief, or emotional balance. The convenience of receiving aromatherapy villa massage at your private location enhances the treatment's effectiveness, as you can continue to breathe in the beneficial aromatics long after the session concludes.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The foundation of aromatherapy villa massage lies in understanding how essential oils interact with your body and mind. When diluted in carrier oils and applied during your villa massage, these concentrated plant essences are absorbed through your skin and enter your bloodstream, providing systemic therapeutic effects. Simultaneously, as you inhale the aromatic molecules, they directly influence your limbic system—the brain region that governs emotions, memory, and hormonal responses. This dual pathway makes aromatherapy villa massage uniquely powerful for addressing both physical ailments and emotional states. Our therapists are trained in selecting appropriate oil blends that complement the massage techniques being used during your villa massage session.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book aromatherapy villa massage with us, your session begins with a detailed consultation. Your therapist discusses your current physical condition, emotional state, and any specific concerns you wish to address. Based on this conversation, they create a customized essential oil blend for your villa massage. Popular choices include lavender for calming stress and promoting sleep, eucalyptus for respiratory relief and muscle tension, peppermint for mental clarity and headache relief, frankincense for grounding and meditation, and ylang-ylang for emotional balance and sensual relaxation. The selected oils are then expertly blended with carrier oils like jojoba or sweet almond before being warmed and applied during your villa massage treatment.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The massage techniques used in aromatherapy villa massage are typically gentle to moderate, designed to facilitate oil absorption while promoting relaxation. Our therapists use long, flowing Swedish-style strokes, light lymphatic drainage movements, and gentle acupressure points. This softer approach allows your nervous system to fully relax, maximizing the therapeutic benefits of both the touch and the aromatic compounds. Throughout your villa massage, the essential oils gradually warm against your skin, releasing their fragrances and creating an immersive sensory experience. Many clients describe aromatherapy villa massage as deeply meditative, with the scents triggering profound relaxation and emotional release.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What sets our aromatherapy villa massage apart is our commitment to using only pure, therapeutic-grade essential oils without synthetic fragrances or additives. We source high-quality oils that maintain their natural healing properties. After your villa massage, the essential oils continue working—you'll carry their subtle fragrance on your skin, extending the therapeutic benefits for hours. Many clients report improved mood, better sleep, and continued relaxation well into the following day after their aromatherapy villa massage. The privacy of receiving this treatment at your villa means you can shower when you choose, preserving the aromatic experience as long as desired. This holistic approach makes aromatherapy villa massage one of our most requested and transformative services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Aromatherapy Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Flower2 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Emotional Balance</h3>
                    <p className="text-muted-foreground">
                      Essential oils directly influence mood and emotions, promoting mental clarity and emotional stability during villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Droplets className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Enhanced Absorption</h3>
                    <p className="text-muted-foreground">
                      Massage techniques help therapeutic oils penetrate deeply for maximum healing benefits throughout your villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Relief</h3>
                    <p className="text-muted-foreground">
                      Calming scents like lavender reduce cortisol levels and promote deep relaxation during your villa massage session.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Skin Nourishment</h3>
                    <p className="text-muted-foreground">
                      Pure essential and carrier oils moisturize and rejuvenate your skin during the villa massage treatment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Immune Support</h3>
                    <p className="text-muted-foreground">
                      Many essential oils have antimicrobial properties that support your body's natural defenses during villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Pain Management</h3>
                    <p className="text-muted-foreground">
                      Oils like eucalyptus and peppermint provide natural pain relief when applied during villa massage therapy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Villa Massage Pricing
                </h2>
                <Card className="border-2 border-primary">
                  <CardContent className="pt-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Aromatherapy Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Essential oil healing at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 350,000</div>
                      <p className="text-sm text-muted-foreground">per person / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Certified aromatherapy specialist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Pure therapeutic-grade essential oils</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Customized oil blend selection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Premium carrier oils included</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Aromatherapy Villa Massage
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  What to Expect During Your Villa Massage
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">1. Aroma Consultation</h3>
                      <p className="text-muted-foreground">
                        Your therapist discusses your needs and preferences to create a custom essential oil blend for your villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Oil Blending</h3>
                      <p className="text-muted-foreground">
                        Watch as therapeutic essential oils are expertly blended with carrier oils for your personalized villa massage treatment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Aromatic Application</h3>
                      <p className="text-muted-foreground">
                        Warmed oils are applied with flowing strokes during your villa massage, releasing healing fragrances.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Multi-Sensory Experience</h3>
                      <p className="text-muted-foreground">
                        Breathe deeply as essential oils work through inhalation and skin absorption during the villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Extended Benefits</h3>
                      <p className="text-muted-foreground">
                        Continue enjoying aromatic benefits after your villa massage as oils remain on your skin for hours.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready for Healing Aromatherapy Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your essential oil treatment now and experience the power of aromatic healing at your villa
                </p>
                <Button size="lg" className="text-lg" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book on WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "Which essential oils are used in aromatherapy villa massage?",
              answer: "Aromatherapy villa massage typically uses lavender for relaxation, eucalyptus for respiratory relief, or lemongrass for energizing effects. Villa massage therapists bring organic essential oil blends customized to your needs. Each aromatherapy villa massage session includes consultation to select oils matching your therapeutic goals."
            },
            {
              question: "Can I request specific scents for aromatherapy villa massage?",
              answer: "Absolutely! Aromatherapy villa massage allows you to choose preferred essential oils or avoid scents you dislike. Villa massage therapists carry various oils including frangipani, peppermint, ylang-ylang, and sandalwood. Custom aromatherapy villa massage ensures you enjoy both the scent and therapeutic benefits."
            },
            {
              question: "How do essential oils enhance villa massage effectiveness?",
              answer: "Essential oils in aromatherapy villa massage absorb through skin and affect emotions via olfactory pathways to the brain. Villa massage therapists combine oils with massage strokes for synergistic benefits. Aromatherapy villa massage addresses both physical tension and emotional stress simultaneously for holistic healing."
            },
            {
              question: "Is aromatherapy villa massage safe for sensitive skin?",
              answer: "Yes! Aromatherapy villa massage uses diluted essential oils in carrier oils to prevent irritation. Villa massage therapists can adjust concentration or select gentler oils for sensitive skin. Always inform villa massage therapists about allergies so aromatherapy formulations can be customized safely."
            },
            {
              question: "Can aromatherapy villa massage help with headaches and migraines?",
              answer: "Definitely! Aromatherapy villa massage using peppermint or lavender oils effectively relieves tension headaches and migraine symptoms. Villa massage therapists focus on neck, shoulder, and temple points while aromatherapy vapors provide additional relief. Many people find aromatherapy villa massage prevents recurring headaches."
            },
            {
              question: "How long do aromatherapy scents linger after villa massage?",
              answer: "Aromatherapy villa massage leaves gentle scents on your skin for 2-4 hours, creating lasting therapeutic effects. Villa massage therapists use natural oils that fade gradually unlike synthetic fragrances. The subtle aromatherapy presence extends relaxation benefits beyond your villa massage session."
            }
          ]} />

          {/* Internal Links */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Explore More Villa Massage Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage" className="text-primary hover:underline">
                          Villa Massage Bali Hub
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Explore all professional villa massage services with essential oils and more
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/services" className="text-primary hover:underline">
                          All Villa Massage Services
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Browse complete range of aromatherapy and other villa massage treatments
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/cities/ubud" className="text-primary hover:underline">
                          Villa Massage Ubud
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Aromatherapy villa massage in Ubud's healing environment
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/cities/seminyak" className="text-primary hover:underline">
                          Villa Massage Seminyak
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Luxury aromatherapy villa massage at Seminyak accommodations
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/blog" className="text-primary hover:underline">
                          Villa Massage Blog
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Learn about essential oils and aromatherapy villa massage benefits
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/cities/canggu" className="text-primary hover:underline">
                          Villa Massage Canggu
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Aromatic villa massage service for wellness-focused Canggu visitors
                      </p>
                    </CardContent>
                  </Card>
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
