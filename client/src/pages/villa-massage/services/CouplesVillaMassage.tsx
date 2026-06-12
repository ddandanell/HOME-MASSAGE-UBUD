import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Heart, Users, Sparkles } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function CouplesVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Couples Villa Massage | Romantic Massage for Two at Your Villa"
        description="Professional couples villa massage delivered to your private villa in Bali. Enjoy side-by-side relaxation with your partner. Perfect for honeymoons and romantic getaways. Same-day booking available."
        keywords="couples villa massage, villa couples massage, romantic villa massage, massage for two villa"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Couples Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Share a romantic wellness experience with professional couples villa massage delivered to your private accommodation
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

          {/* What is Couples Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Couples Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Couples villa massage is a shared wellness experience where you and your partner receive simultaneous massages from two professional therapists in the comfort of your private villa. This intimate villa massage service allows couples to relax together, creating a memorable bonding experience while enjoying the therapeutic benefits of professional massage. Our therapists bring everything needed to your villa so you and your partner can share the experience while each receiving individualized attention and treatment tailored to your personal preferences.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The beauty of couples villa massage lies in the shared intimacy and convenience. Unlike visiting a spa where you might be separated or feel rushed, our villa massage service creates a private sanctuary within your own accommodation. You choose the ambiance—whether that's your villa's open-air pavilion with garden views, your bedroom with soft music, or your poolside deck under the stars. The flexibility of couples villa massage means you schedule it around your day, whether that's a morning treatment before exploring Bali, an afternoon session between activities, or a romantic evening villa massage as the sun sets.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Each couples villa massage session is customized for both individuals. One partner might prefer a gentle relaxation massage while the other needs deep tissue work for muscle tension. Our professional therapists discuss preferences with each person separately, ensuring your villa massage experience addresses individual needs while maintaining the synchronized rhythm that makes couples treatments special. The massage techniques can include traditional Balinese, aromatherapy, Swedish relaxation, or therapeutic deep tissue—whatever combination suits you both best.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Booking a couples villa massage is particularly popular for honeymoons, anniversaries, and romantic getaways. The experience creates lasting memories and provides a meaningful way to prioritize wellness together. Many couples tell us that their villa massage session becomes a highlight of their Bali vacation. The treatment promotes connection and relaxation simultaneously, as you both release tension and stress while sharing the peaceful atmosphere. After your villa massage, you can continue relaxing together without the need to dress, travel, or interact with others—the privacy of your accommodation enhances the romantic intimacy of the experience.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What sets our couples villa massage apart is the professional quality and attention to detail. Our therapists arrive as a coordinated team, bringing two complete massage setups including tables, linens, aromatic oils, and ambient music. They work in harmony, beginning and ending simultaneously so your experience feels perfectly synchronized. The villa massage session includes consultation time to understand both partners' needs, 90 minutes of hands-on treatment, and post-massage relaxation time with herbal tea if desired. This comprehensive approach ensures your couples villa massage becomes more than just a treatment—it's a shared journey into deep relaxation and renewed connection.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Couples Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Romantic Bonding</h3>
                    <p className="text-muted-foreground">
                      Strengthen your connection through shared relaxation and wellness in the intimate privacy of your villa.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Synchronized Experience</h3>
                    <p className="text-muted-foreground">
                      Enjoy perfectly timed treatment with two therapists working in harmony for a unified villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Complete Privacy</h3>
                    <p className="text-muted-foreground">
                      Relax together without distractions in your private villa setting, away from crowded spa environments.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Customized Treatments</h3>
                    <p className="text-muted-foreground">
                      Each partner receives personalized villa massage addressing individual needs and preferences.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Relief Together</h3>
                    <p className="text-muted-foreground">
                      Release tension simultaneously, creating a shared sense of peace and renewed energy as a couple.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Memorable Experience</h3>
                    <p className="text-muted-foreground">
                      Create lasting vacation memories with a special couples villa massage during your Bali stay.
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
                      <h3 className="text-2xl font-bold mb-2">Couples Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Romantic massage for two at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 550,000</div>
                      <p className="text-sm text-muted-foreground">for two people / 90 minutes each</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Two professional certified therapists</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Side-by-side treatment for two</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Premium aromatic oils and linens</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Customized massage for each person</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Romantic ambiance and music</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Couples Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Team Arrival & Setup</h3>
                      <p className="text-muted-foreground">
                        Two therapists arrive at your villa with complete equipment to create side-by-side massage stations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Individual Consultations</h3>
                      <p className="text-muted-foreground">
                        Each therapist discusses preferences separately to customize your villa massage experience perfectly.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Synchronized Treatment</h3>
                      <p className="text-muted-foreground">
                        Enjoy simultaneous 90-minute massages while holding hands or simply relaxing together during your villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Personalized Techniques</h3>
                      <p className="text-muted-foreground">
                        Each partner receives their preferred villa massage style—from gentle to therapeutic pressure.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Post-Treatment Relaxation</h3>
                      <p className="text-muted-foreground">
                        Continue enjoying privacy together at your villa after the massage with herbal tea and continued relaxation.
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
                  Ready for a Romantic Couples Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your intimate wellness experience now and create beautiful memories together in Bali
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
              question: "Do both partners receive couples villa massage simultaneously?",
              answer: "Yes! Couples villa massage uses two therapists working side-by-side so you and your partner receive synchronized treatments. Villa massage therapists coordinate techniques and timing for a shared experience. Couples villa massage allows you to relax together at your villa in perfect harmony."
            },
            {
              question: "Can couples with different pressure preferences book villa massage together?",
              answer: "Absolutely! Each couples villa massage therapist customizes their technique to individual preferences. One partner might enjoy deep tissue villa massage while the other prefers gentle relaxation. Couples villa massage accommodates different needs while maintaining the shared experience."
            },
            {
              question: "What makes couples villa massage romantic for anniversaries?",
              answer: "Couples villa massage creates intimate bonding through shared relaxation in your private villa space. Villa massage therapists can incorporate romantic aromatherapy and coordinate with special touches like flowers or champagne. Couples villa massage turns your anniversary into a memorable wellness celebration."
            },
            {
              question: "Is couples villa massage more expensive than two individual sessions?",
              answer: "No! Couples villa massage is typically the same total price as booking two separate individual villa massage appointments. You pay for two therapists and two treatments combined into one synchronized couples villa massage session. Many villas offer the perfect romantic setting at no additional cost."
            },
            {
              question: "Can unmarried partners or friends book couples villa massage?",
              answer: "Definitely! Couples villa massage welcomes any two people wanting to share the experience—partners, spouses, friends, or family members. Villa massage therapists focus on professional treatment regardless of relationship type. Couples villa massage is simply side-by-side treatments for any two people."
            },
            {
              question: "How much space is needed for couples villa massage at our villa?",
              answer: "Couples villa massage requires a comfortable space for two people side-by-side with therapist movement space. Most villa bedrooms, living rooms, or poolside pavilions work perfectly for couples villa massage. Villa massage therapists help determine the best villa space during booking."
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
                        Explore all professional villa massage services for couples and individuals
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
                        Romantic couples villa massage in Ubud's peaceful surroundings
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
                        Luxury couples villa massage at Seminyak's finest accommodations
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
                        Tips for planning the perfect couples villa massage experience
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
                        Beachside couples villa massage service in trendy Canggu
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
