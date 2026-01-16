import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Cloud, Wind, Waves } from 'lucide-react';

export default function RelaxationVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Relaxation Villa Massage | Pure Serenity at Your Private Villa"
        description="Professional relaxation villa massage delivered to your private villa in Bali. Experience gentle Swedish techniques for complete stress relief. Same-day booking available."
        keywords="relaxation villa massage, villa relaxation massage, swedish villa massage, stress relief villa massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Relaxation Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Discover pure tranquility with professional relaxation villa massage delivered to your private accommodation for ultimate stress relief
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

          {/* What is Relaxation Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Relaxation Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Relaxation villa massage is a gentle, soothing treatment designed to calm your mind, release tension, and restore inner peace through the art of therapeutic touch. This villa massage style focuses primarily on comfort and tranquility rather than addressing specific pain points or muscle injuries. Our professional therapists bring this serene experience directly to your villa, creating a peaceful sanctuary where you can completely disconnect from stress and immerse yourself in pure relaxation. The convenience of receiving this villa massage at your private accommodation enhances the calming effect, as you remain in familiar, comfortable surroundings throughout your treatment.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The techniques used in relaxation villa massage are rooted in Swedish massage traditions, featuring long, flowing strokes that glide smoothly across your body. Our therapists apply gentle to moderate pressure using their palms and fingertips, creating rhythmic movements that encourage deep breathing and mental quietude. This villa massage approach stimulates circulation without causing discomfort, promotes lymphatic drainage, and activates your parasympathetic nervous system—the body's natural relaxation response. Unlike therapeutic or deep tissue villa massage, the goal here is not to work out stubborn knots but rather to induce a meditative state of calm.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our relaxation villa massage, your therapist arrives with everything needed to transform any room in your villa into a tranquil spa environment. Soft music, aromatic essential oils, and professional linens contribute to an atmosphere of complete serenity. The villa massage session begins with a brief consultation where you discuss any areas of tension or sensitivity. Your therapist then guides you through the treatment, maintaining consistent, soothing pressure that allows your mind to drift while your muscles gradually release their grip. The beauty of this villa massage style is that it requires no effort from you—simply surrender to the experience.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Relaxation villa massage is particularly beneficial for travelers experiencing jet lag, vacation fatigue, or simply seeking a peaceful interlude during their Bali adventure. The treatment significantly reduces cortisol levels—your body's primary stress hormone—while increasing serotonin and dopamine, neurotransmitters associated with happiness and wellbeing. Many clients report improved sleep quality after their villa massage session, as the deep relaxation carries over into the evening hours. The gentle nature of this villa massage makes it suitable for almost everyone, including those who find deeper pressure uncomfortable or those new to massage therapy.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What distinguishes our relaxation villa massage is the mindful presence our therapists bring to each session. They understand that true relaxation requires not just technique but also intuitive awareness of your body's responses. Throughout your villa massage, the therapist maintains a steady, meditative pace that helps quiet mental chatter and promotes present-moment awareness. The flowing transitions between body areas feel seamless and unhurried. After your villa massage concludes, you're encouraged to rest quietly, allowing the profound sense of calm to deepen before gradually returning to your activities. This complete approach ensures your relaxation villa massage provides lasting benefits well beyond the treatment itself.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Relaxation Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Cloud className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Reduction</h3>
                    <p className="text-muted-foreground">
                      Lower cortisol levels and achieve deep mental calm through gentle, soothing villa massage techniques.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Wind className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Mental Clarity</h3>
                    <p className="text-muted-foreground">
                      Clear your mind and improve focus as the villa massage quiets mental chatter and promotes presence.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Waves className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Improved Sleep</h3>
                    <p className="text-muted-foreground">
                      Experience deeper, more restful sleep following your relaxing villa massage session.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Anxiety Relief</h3>
                    <p className="text-muted-foreground">
                      Calm nervous tension and reduce anxiety through gentle touch and peaceful villa massage environment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Enhanced Circulation</h3>
                    <p className="text-muted-foreground">
                      Boost blood flow and oxygen delivery throughout your body with flowing villa massage strokes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Immune Support</h3>
                    <p className="text-muted-foreground">
                      Strengthen your immune system as relaxation villa massage reduces stress hormones.
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
                      <h3 className="text-2xl font-bold mb-2">Relaxation Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Pure serenity delivered to your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 280,000</div>
                      <p className="text-sm text-muted-foreground">per person / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Expert relaxation massage therapist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Calming essential oils included</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Professional table and soft linens</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Peaceful ambient music</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day availability</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Relaxation Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Peaceful Setup</h3>
                      <p className="text-muted-foreground">
                        Your therapist creates a tranquil spa environment in your villa with soft music and aromatic oils.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Gentle Consultation</h3>
                      <p className="text-muted-foreground">
                        Brief discussion about your preferences ensures your relaxation villa massage meets your needs perfectly.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Flowing Strokes</h3>
                      <p className="text-muted-foreground">
                        Experience long, smooth movements across your body during the villa massage, promoting deep calm.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Meditative State</h3>
                      <p className="text-muted-foreground">
                        Allow yourself to drift into peaceful relaxation as the rhythmic villa massage quiets your mind.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Extended Rest Period</h3>
                      <p className="text-muted-foreground">
                        Remain in your peaceful state after the villa massage, continuing to absorb the benefits in your villa.
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
                  Ready to Experience Pure Relaxation Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your serene session now and discover complete tranquility at your private villa
                </p>
                <Button size="lg" className="text-lg" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book on WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </section>

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
                        Discover all professional villa massage services throughout Bali
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
                        Browse complete range of villa massage treatments available
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
                        Peaceful relaxation villa massage in serene Ubud surroundings
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
                        Luxury relaxation villa massage at Seminyak beach villas
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
                        Wellness tips and relaxation guides for villa massage experiences
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
                        Tranquil relaxation villa massage service in laid-back Canggu
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
