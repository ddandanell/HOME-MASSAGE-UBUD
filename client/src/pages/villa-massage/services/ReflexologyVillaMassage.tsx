import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Footprints, Sparkles, Target } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function ReflexologyVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Reflexology Villa Massage | Foot Massage Therapy at Your Villa"
        description="Professional reflexology villa massage delivered to your private villa in Bali. Experience therapeutic foot massage and pressure point healing. Same-day booking available."
        keywords="reflexology villa massage, villa reflexology massage, foot villa massage, pressure point villa massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Reflexology Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Experience healing through your feet with professional reflexology villa massage delivered to your private accommodation
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

          {/* What is Reflexology Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Reflexology Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Reflexology villa massage is a specialized therapeutic practice based on the principle that specific points on your feet, hands, and ears correspond to different organs and systems throughout your body. This ancient healing villa massage technique brings professional reflexology care directly to your private accommodation, where our trained therapists apply targeted pressure to these reflex points to promote healing, reduce stress, and restore balance throughout your entire body. The convenience of receiving reflexology villa massage at your villa is particularly appealing after a long day of walking or exploring, when your feet are tired and you want immediate relief without traveling anywhere.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The foundation of reflexology villa massage lies in the concept of energy zones that run vertically through the body, with each zone represented on the feet. Our therapists use detailed foot maps showing which areas correspond to specific organs—for example, the ball of the foot relates to the chest and lungs, the arch corresponds to internal organs, and the heel connects to the lower back and intestines. During your villa massage, the therapist applies firm pressure using thumb-walking techniques, finger pressure, and hand manipulation to stimulate these reflex points. When a point feels tender or granular, it indicates potential imbalance or congestion in the corresponding body part. Working these areas during villa massage helps clear energy blockages and restore proper function.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our reflexology villa massage, your therapist arrives with everything needed for a complete session—a comfortable foot stool or reclining chair setup, aromatic foot soak, exfoliating scrub, and specialized massage oils or lotions. Your villa massage typically begins with a relaxing foot soak using warm water infused with essential oils and herbs, which softens the skin and prepares your feet for treatment. The therapist then performs a gentle foot exfoliation before beginning the reflexology work. Throughout your villa massage, they systematically work through all reflex points on both feet, spending extra time on tender areas that indicate potential imbalances needing attention.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Reflexology villa massage is remarkably effective for a wide range of conditions beyond just tired feet. The treatment reduces stress and promotes deep relaxation, improves circulation throughout your body, supports immune function, aids digestion, and helps balance hormones. Many clients report that reflexology villa massage alleviates headaches, improves sleep quality, reduces sinus congestion, and even helps with chronic conditions like arthritis or digestive issues. The non-invasive nature of this villa massage makes it suitable for almost everyone, including those who may be uncomfortable with full-body massage or who prefer to remain clothed during treatment. The foot focus means you only need to remove your shoes and socks for your villa massage session.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What sets our reflexology villa massage apart is our therapists' extensive training in foot anatomy and reflex point mapping. They understand not just where to apply pressure but also how to interpret what they feel beneath their fingers. During your villa massage, they may identify areas of concern and provide feedback about potential health imbalances. The pressure applied in reflexology villa massage can range from gentle to quite firm, depending on your tolerance and the sensitivity of specific points. Many clients find the experience deeply relaxing despite occasional tender moments when congested reflex points are addressed. After your villa massage, your feet will feel lighter and more energized, while your entire body experiences a sense of renewed balance and wellbeing. The convenience of receiving this treatment at your villa means you can immediately rest and allow the healing benefits to continue working throughout your system.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Reflexology Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Footprints className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Whole Body Healing</h3>
                    <p className="text-muted-foreground">
                      Address health concerns throughout your body by treating corresponding reflex points during villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Reduction</h3>
                    <p className="text-muted-foreground">
                      Activate deep relaxation response through focused foot work during reflexology villa massage sessions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Improved Circulation</h3>
                    <p className="text-muted-foreground">
                      Enhance blood flow and oxygen delivery throughout your entire body via villa massage therapy.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Pain Relief</h3>
                    <p className="text-muted-foreground">
                      Reduce headaches, migraines, and chronic pain through targeted pressure points in villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Better Sleep</h3>
                    <p className="text-muted-foreground">
                      Promote restful sleep by calming the nervous system through reflexology villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Digestive Support</h3>
                    <p className="text-muted-foreground">
                      Improve digestion and relieve bloating by working intestinal reflex points during villa massage.
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
                      <h3 className="text-2xl font-bold mb-2">Reflexology Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Therapeutic foot massage at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 380,000</div>
                      <p className="text-sm text-muted-foreground">per person / 60 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Certified reflexology specialist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Aromatic foot soak included</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Foot exfoliation treatment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Complete reflex point mapping</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Reflexology Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Aromatic Foot Soak</h3>
                      <p className="text-muted-foreground">
                        Begin your reflexology villa massage with relaxing warm water infused with essential oils and herbs.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Gentle Exfoliation</h3>
                      <p className="text-muted-foreground">
                        Foot scrub removes dead skin and prepares your feet for effective reflexology villa massage treatment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Systematic Pressure Points</h3>
                      <p className="text-muted-foreground">
                        Therapist works through all reflex zones on both feet during your comprehensive villa massage session.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Tender Area Focus</h3>
                      <p className="text-muted-foreground">
                        Extra attention to sensitive points that indicate potential imbalances needing healing during villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Whole Body Benefits</h3>
                      <p className="text-muted-foreground">
                        Experience systemic wellness effects throughout your body after reflexology villa massage treatment.
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
                  Ready for Healing Reflexology Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your therapeutic foot treatment now and experience whole-body wellness at your villa
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
              question: "How does foot reflexology villa massage work?",
              answer: "Reflexology villa massage applies pressure to specific foot points corresponding to body organs and systems through nerve pathways. Villa massage therapists use thumb and finger techniques on reflex zones for therapeutic effects. Foot reflexology villa massage treats whole-body conditions through targeted foot work."
            },
            {
              question: "Will reflexology villa massage hurt my sensitive feet?",
              answer: "Reflexology villa massage pressure is firm but should never hurt—discomfort indicates blocked energy or health issues in corresponding areas. Villa massage therapists adjust pressure for sensitive feet while maintaining effectiveness. Most people find reflexology villa massage deeply satisfying rather than painful despite firm pressure."
            },
            {
              question: "Can reflexology villa massage help with digestive problems?",
              answer: "Yes! Reflexology villa massage includes specific foot zones linked to digestive organs that therapists target for gastrointestinal relief. Villa massage therapists work liver, stomach, and intestine reflex points systematically. Regular reflexology villa massage often improves digestion, bloating, and elimination issues through foot therapy."
            },
            {
              question: "How long does a reflexology villa massage session take?",
              answer: "Reflexology villa massage typically runs 60 minutes, focusing exclusively on feet, ankles, and lower legs. Villa massage therapists work systematically through all reflex zones for comprehensive treatment. Shorter reflexology villa massage sessions concentrate on specific health concerns rather than full-body reflexology protocols."
            },
            {
              question: "Is reflexology villa massage different from regular foot massage?",
              answer: "Yes! Reflexology villa massage follows specific reflex zone maps and therapeutic protocols, while foot massage provides general relaxation. Villa massage therapists trained in reflexology understand organ correspondence and systematic techniques. Reflexology villa massage delivers targeted health benefits beyond simple foot relaxation."
            },
            {
              question: "Can reflexology villa massage detect health problems?",
              answer: "Reflexology villa massage therapists identify tender reflex points that may indicate imbalances in corresponding body areas. Villa massage practitioners note sensitivity patterns during treatment. While reflexology villa massage supports wellness, it complements rather than replaces medical diagnosis—consult doctors for health concerns."
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
                        Explore all healing villa massage services including reflexology therapy
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
                        Browse reflexology and other specialized villa massage treatments
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
                        Reflexology villa massage in holistic healing Ubud environment
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
                        Professional reflexology villa massage at Seminyak villas
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
                        Learn about reflexology benefits and villa massage wellness tips
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
                        Restorative reflexology villa massage service in Canggu
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
