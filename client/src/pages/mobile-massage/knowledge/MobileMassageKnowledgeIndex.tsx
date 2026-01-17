import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Check, ArrowRight, Shield } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function MobileMassageKnowledgeIndex() {
  return (
    <>
      <SEOHead 
        title="Mobile Massage Knowledge | Safety, Benefits & Expectations"
        description="Complete guide to mobile massage in Bali. Learn about safety standards, health benefits, proper aftercare, and what to expect from professional mobile massage services."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Knowledge Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Massage Knowledge
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Everything you need to know about professional mobile massage services in Bali
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book Mobile Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Understanding Mobile Massage
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Home massage represents a professional wellness service where licensed therapists deliver spa-quality 
                treatments directly to your accommodation. Before booking your first mobile massage, understanding safety 
                protocols, health benefits, proper aftercare, and realistic expectations helps you maximize the 
                therapeutic value of this convenient service.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you're considering 
                <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline"> Balinese mobile massage</span></Link>, 
                <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue mobile massage</span></Link>, 
                <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation mobile massage</span></Link>, or 
                <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline"> couples mobile massage</span></Link>, 
                the same professional standards and care practices apply across all service types.
              </p>
              <p className="text-lg text-muted-foreground">
                This knowledge center covers essential topics every mobile massage client should understand before, 
                during, and after their treatment to ensure a safe, effective, and satisfying experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Articles */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Essential Mobile Massage Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Safety */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/knowledge/safety">
                        <span className="hover:text-primary cursor-pointer">
                          Mobile Massage Safety
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive safety guide covering therapist credentials, hygiene protocols, equipment standards, 
                    and client precautions. Learn how professional mobile massage services maintain spa-level safety in 
                    private accommodations and what legitimate operations do to protect clients.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Licensed therapist requirements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Hygiene and equipment standards</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Red flags to watch for</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Medical contraindications</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/mobile-massage/knowledge/safety">
                      Read Safety Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/knowledge/benefits">
                        <span className="hover:text-primary cursor-pointer">
                          Benefits of Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Evidence-based benefits of mobile massage covering physical relief, mental wellness, convenience 
                    advantages, and long-term health impacts. Understand how regular mobile massage supports muscle 
                    recovery, stress reduction, circulation, and overall wellness during your Bali stay.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Physical health benefits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Mental wellness impacts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Convenience advantages</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Long-term wellness effects</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/mobile-massage/knowledge/benefits">
                      Read Benefits Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Aftercare */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/knowledge/aftercare">
                        <span className="hover:text-primary cursor-pointer">
                          Aftercare After Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Post-treatment care guide maximizing mobile massage benefits and preventing common issues. Learn 
                    proper hydration, rest protocols, activity restrictions, and when to schedule follow-up treatments 
                    for optimal results from your mobile massage experience.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Immediate post-treatment care</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Hydration requirements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Activity guidelines</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Treatment frequency</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/mobile-massage/knowledge/aftercare">
                      Read Aftercare Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/knowledge/what-to-expect">
                        <span className="hover:text-primary cursor-pointer">
                          What to Expect From Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Complete walkthrough of the mobile massage experience from booking to session end. Understand arrival 
                    procedures, setup process, treatment flow, therapist communication, and payment protocols so your 
                    first mobile massage feels familiar and comfortable.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Booking and confirmation process</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Therapist arrival and setup</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">During the treatment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Payment and gratuity</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/mobile-massage/knowledge/what-to-expect">
                      Read Expectations Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Mobile Massage Knowledge Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Make Informed Decisions</h3>
                  <p className="text-muted-foreground text-sm">
                    Understanding safety standards helps you identify legitimate mobile massage providers and avoid 
                    unprofessional services
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Maximize Benefits</h3>
                  <p className="text-muted-foreground text-sm">
                    Proper aftercare and understanding benefits ensures your mobile massage delivers optimal physical 
                    and mental wellness results
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Reduce Anxiety</h3>
                  <p className="text-muted-foreground text-sm">
                    Knowing what to expect eliminates first-time nervousness and lets you relax fully during your 
                    mobile massage treatment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Ensure Safety</h3>
                  <p className="text-muted-foreground text-sm">
                    Understanding contraindications and safety protocols protects your health and ensures appropriate 
                    mobile massage selection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Mobile Massage?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Now that you understand mobile massage safety, benefits, and expectations, book your professional treatment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Order Mobile Massage
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mobile-massage">
                  Back to Mobile Massage Hub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Explore Mobile Massage Options
            </h2>
            <p className="text-muted-foreground mb-8">
              Browse our services and locations available throughout Bali
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/balinese">
                  Balinese Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/deep-tissue">
                  Deep Tissue Mobile Massage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/services/couples">
                  Couples Mobile Massage
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/cities/ubud">
                  Mobile Massage in Ubud
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/cities/canggu">
                  Mobile Massage in Canggu
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/cities/seminyak">
                  Mobile Massage in Seminyak
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MobileMassageFAQ items={[
        {
          question: "What should I know before trying mobile massage for the first time?",
          answer: "Before your first mobile massage, understand that professional therapists bring all equipment to your location, the process mirrors spa quality with added convenience, and safety standards match or exceed traditional facilities. Mobile massage knowledge helps you prepare properly, communicate preferences effectively, and maximize therapeutic benefits. The mobile massage experience combines professional treatment with private-space comfort."
        },
        {
          question: "How do I choose between different mobile massage knowledge topics?",
          answer: "Start with 'What to Expect' for mobile massage process overview, then explore 'Safety Standards' for credential verification, 'Benefits' for health outcomes, 'Preparation' for pre-treatment optimization, and 'Aftercare' for recovery protocols. This mobile massage knowledge progression builds comprehensive understanding from basic concepts through advanced care strategies, helping you optimize every mobile massage session."
        },
        {
          question: "Why is mobile massage knowledge important for treatment effectiveness?",
          answer: "Mobile massage knowledge directly impacts treatment effectiveness by teaching proper preparation, realistic expectations, communication techniques, and aftercare protocols. Educated mobile massage clients achieve 30-40% better outcomes because they optimize pre-treatment conditions, communicate needs clearly, and follow proper recovery guidelines. Mobile massage knowledge transforms random relaxation into strategic therapeutic intervention."
        },
        {
          question: "How does mobile massage safety knowledge protect me as a traveler?",
          answer: "Mobile massage safety knowledge teaches credential verification, red flag identification, professional boundary expectations, and legitimate service characteristics. This mobile massage knowledge protects travelers from unprofessional practitioners while building confidence in reputable services. Understanding mobile massage safety standards helps you distinguish quality providers from questionable operations, ensuring secure, beneficial treatments throughout your Bali stay."
        },
        {
          question: "What mobile massage knowledge applies across all Bali locations?",
          answer: "Core mobile massage knowledge—safety standards, therapist qualifications, booking processes, treatment expectations, and aftercare protocols—applies uniformly across Ubud, Canggu, Seminyak, Sanur, and all Bali locations. Professional mobile massage maintains consistent quality standards regardless of city. This mobile massage knowledge universality means you can confidently book services anywhere in Bali using the same evaluation criteria."
        }
      ]} />

        </main>
        <Footer />
      </div>
    </>
  );
}
