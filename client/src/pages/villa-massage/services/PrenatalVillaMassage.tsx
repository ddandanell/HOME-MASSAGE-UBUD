import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Baby, Heart, Sparkles } from 'lucide-react';

export default function PrenatalVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Prenatal Villa Massage | Pregnancy Massage at Your Villa"
        description="Professional prenatal villa massage delivered to your private villa in Bali. Safe, specialized pregnancy massage for expectant mothers. Same-day booking available."
        keywords="prenatal villa massage, pregnancy villa massage, maternity villa massage, villa prenatal massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Prenatal Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Nurturing care for expectant mothers with professional prenatal villa massage delivered to your private accommodation
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

          {/* What is Prenatal Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Prenatal Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Prenatal villa massage is a specialized therapeutic treatment designed specifically for expectant mothers, addressing the unique physical and emotional needs of pregnancy. This gentle villa massage modality brings expert pregnancy care directly to your private accommodation, where you can relax in familiar surroundings without the stress of traveling to a spa. Our certified prenatal therapists understand the anatomical and physiological changes occurring during pregnancy and modify techniques accordingly to ensure complete safety while providing maximum relief. The convenience of receiving prenatal villa massage at your villa is especially valuable for pregnant women who may find travel uncomfortable or exhausting.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The techniques used in prenatal villa massage differ significantly from standard massage. Our therapists are trained in safe positioning, typically using specially designed pregnancy cushions or side-lying positions that protect your growing belly while allowing access to areas experiencing the most discomfort—particularly the lower back, hips, legs, and feet. This villa massage approach avoids pressure points that could potentially stimulate contractions and steers clear of deep abdominal work. Instead, the treatment focuses on gentle, flowing strokes that promote circulation, reduce swelling, and alleviate the muscle tension that commonly accompanies pregnancy's postural changes.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our prenatal villa massage, your therapist arrives with specialized equipment including pregnancy cushions or bolsters that ensure your comfort throughout the session. Before your villa massage begins, there's a thorough consultation about your pregnancy stage, any complications or concerns, and specific areas of discomfort. Our therapists are trained to recognize when massage is contraindicated and will always prioritize your safety and your baby's wellbeing. The villa massage uses pregnancy-safe oils without strong essential oils that could be problematic during pregnancy, ensuring every aspect of your treatment supports your maternal health.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Prenatal villa massage provides remarkable benefits for expectant mothers beyond physical relief. The treatment significantly reduces pregnancy-related anxiety and stress by lowering cortisol levels and increasing feel-good neurotransmitters like serotonin and dopamine. Many pregnant women experience improved sleep quality after their villa massage sessions, which is particularly valuable given the sleep disruptions common in pregnancy. The gentle touch and nurturing attention provided during villa massage helps mothers-to-be connect with their changing bodies and their babies, creating a mindful space for bonding and preparation for motherhood. Research shows that regular prenatal villa massage can even improve birth outcomes and newborn health.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What distinguishes our prenatal villa massage is our therapists' specialized training and compassionate approach. They understand that every pregnancy is unique and tailor each villa massage session to your specific trimester, concerns, and comfort level. Whether you're dealing with first-trimester fatigue, second-trimester sciatic pain, or third-trimester swelling and discomfort, your villa massage will address these issues safely and effectively. After your treatment, you can continue resting in the comfort of your villa without needing to dress or travel. Many expectant mothers make prenatal villa massage a regular part of their self-care routine throughout pregnancy, experiencing cumulative benefits that support their wellbeing and prepare them for a positive birth experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Prenatal Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Baby className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Reduces Swelling</h3>
                    <p className="text-muted-foreground">
                      Gentle villa massage techniques improve lymphatic drainage, reducing pregnancy-related edema in legs and feet.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Back Pain Relief</h3>
                    <p className="text-muted-foreground">
                      Alleviates lower back discomfort caused by postural changes and additional weight during your villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Reduction</h3>
                    <p className="text-muted-foreground">
                      Lower anxiety and cortisol levels through nurturing touch during prenatal villa massage sessions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Better Sleep</h3>
                    <p className="text-muted-foreground">
                      Improve sleep quality and reduce insomnia common in pregnancy with relaxing villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Improved Circulation</h3>
                    <p className="text-muted-foreground">
                      Enhance blood flow to both mother and baby during gentle prenatal villa massage treatment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Hormone Regulation</h3>
                    <p className="text-muted-foreground">
                      Balance pregnancy hormones, reducing mood swings through therapeutic villa massage.
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
                      <h3 className="text-2xl font-bold mb-2">Prenatal Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Safe pregnancy massage at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 336,000</div>
                      <p className="text-sm text-muted-foreground">per session / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Certified prenatal massage specialist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Pregnancy positioning cushions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Pregnancy-safe oils and techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Complete safety protocols</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Prenatal Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Pregnancy Assessment</h3>
                      <p className="text-muted-foreground">
                        Detailed consultation about your trimester, health concerns, and specific needs for your prenatal villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Comfortable Positioning</h3>
                      <p className="text-muted-foreground">
                        Specialized cushions ensure safe, comfortable side-lying positions throughout your villa massage session.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Gentle Techniques</h3>
                      <p className="text-muted-foreground">
                        Receive nurturing, pregnancy-safe strokes designed to relieve common discomforts during your villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Focus on Problem Areas</h3>
                      <p className="text-muted-foreground">
                        Special attention to back, hips, legs, and feet where pregnancy discomfort is greatest during villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Extended Rest Time</h3>
                      <p className="text-muted-foreground">
                        Relax in your villa as long as needed after the massage, no pressure to move or dress quickly.
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
                  Ready for Nurturing Prenatal Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your pregnancy massage now and experience safe, specialized care at your private villa
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
                        Discover all specialized villa massage services including prenatal care
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
                        Browse complete range of prenatal and other villa massage treatments
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
                        Prenatal villa massage in peaceful Ubud for expectant mothers
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
                        Professional prenatal villa massage at Seminyak accommodations
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
                        Pregnancy wellness tips and prenatal villa massage information
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
                        Safe prenatal villa massage service for Canggu mothers-to-be
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
