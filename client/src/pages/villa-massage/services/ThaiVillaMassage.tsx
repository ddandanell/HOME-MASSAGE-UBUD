import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Waves, Zap, Target } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function ThaiVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Thai Villa Massage | Traditional Thai Bodywork at Your Villa"
        description="Professional Thai villa massage delivered to your private villa in Bali. Experience ancient stretching and pressure point techniques. Same-day booking available."
        keywords="thai villa massage, villa thai massage, traditional thai villa massage, thai yoga villa massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Thai Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Experience ancient Thai healing traditions with professional villa massage delivered to your private accommodation
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

          {/* What is Thai Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Thai Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Thai villa massage is a dynamic, energizing bodywork practice that combines assisted yoga stretches, acupressure, and rhythmic compressions to create a unique therapeutic experience. This ancient villa massage tradition, sometimes called "Thai yoga massage," differs dramatically from Western massage styles—you remain fully clothed in comfortable attire while the therapist uses their hands, thumbs, elbows, knees, and feet to apply pressure and guide your body through various stretches. Our professional therapists bring this transformative practice directly to your villa, performing the treatment on a comfortable floor mat rather than a massage table, which allows for the full range of movement this villa massage requires.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The foundation of Thai villa massage lies in the concept of energy lines or "sen" that run throughout the body, similar to meridians in Chinese medicine. This villa massage technique works systematically along these energy pathways, using thumb pressure and palms to release blockages and stimulate energy flow. The therapist moves your body into yoga-like positions, providing gentle stretches that you couldn't achieve on your own while simultaneously applying pressure to specific points. This combination makes Thai villa massage particularly effective for increasing flexibility, relieving muscle tension, and promoting an overall sense of energized well-being rather than the sedated relaxation of other massage styles.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our Thai villa massage, your therapist arrives with a professional Thai massage mat, bolsters, and cushions. You'll be asked to wear loose, comfortable clothing—athletic wear or pajamas work perfectly for this villa massage style. The session follows a structured sequence, typically beginning with your feet and legs, then moving to your hips, torso, arms, hands, shoulders, neck, and head. Throughout your villa massage, the therapist maintains a meditative, rhythmic quality, rocking your body gently and using their body weight rather than muscle strength to apply pressure. This creates a flowing, almost dance-like quality that makes Thai villa massage a deeply meditative experience for both giver and receiver.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Thai villa massage is exceptionally beneficial for people who feel stiff, inflexible, or energetically depleted. The assisted stretching component of this villa massage dramatically improves range of motion and joint mobility, making it popular among athletes, yoga practitioners, and anyone dealing with flexibility limitations. The acupressure elements address pain and tension, while the overall approach balances your energy system, leaving you feeling simultaneously relaxed and invigorated. Unlike oil-based villa massage that often leaves you feeling drowsy, Thai massage typically produces an alert, energized state—many clients describe feeling "stretched out" and renewed after their villa massage session.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What sets our Thai villa massage apart is our therapists' authentic training in traditional Thai healing arts. They understand not just the physical techniques but also the meditative, compassionate presence that traditional Thai massage embodies. During your villa massage, they work mindfully, adjusting pressure and stretch intensity based on your flexibility and comfort level. The beauty of receiving Thai villa massage at your accommodation is the spacious floor area most villas provide, allowing for unrestricted movement throughout the treatment. After your villa massage, you'll feel mobile, flexible, and energized—ready to enjoy your day rather than needing extended rest time. This makes Thai villa massage perfect for morning sessions or midday revitalization during your Bali vacation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Thai Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Waves className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Improved Flexibility</h3>
                    <p className="text-muted-foreground">
                      Assisted stretches dramatically increase range of motion and joint mobility during villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Energy Boost</h3>
                    <p className="text-muted-foreground">
                      Leave feeling energized and revitalized rather than drowsy after your Thai villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Posture Improvement</h3>
                    <p className="text-muted-foreground">
                      Release postural tension and realign your body through therapeutic stretches in villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Relief</h3>
                    <p className="text-muted-foreground">
                      Calm your nervous system through rhythmic compressions and meditative villa massage flow.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Pain Reduction</h3>
                    <p className="text-muted-foreground">
                      Alleviate chronic pain through acupressure and muscle release during Thai villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Athletic Performance</h3>
                    <p className="text-muted-foreground">
                      Enhance flexibility and recovery for active lifestyles with regular villa massage sessions.
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
                      <h3 className="text-2xl font-bold mb-2">Thai Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Traditional Thai bodywork at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 350,000</div>
                      <p className="text-sm text-muted-foreground">per person / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Traditional Thai massage specialist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Professional Thai massage mat</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Assisted stretching and acupressure</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>No oil required—wear comfortable clothes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Thai Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Clothing Guidance</h3>
                      <p className="text-muted-foreground">
                        Wear loose, comfortable clothing like athletic wear for your Thai villa massage—no oil is used.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Floor Mat Setup</h3>
                      <p className="text-muted-foreground">
                        Your therapist prepares a cushioned Thai massage mat on the floor of your villa for the session.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Systematic Sequence</h3>
                      <p className="text-muted-foreground">
                        Experience rhythmic compressions and stretches following traditional Thai villa massage patterns.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Assisted Yoga Poses</h3>
                      <p className="text-muted-foreground">
                        Your therapist guides you into stretches you couldn't achieve alone during the villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Energized Feeling</h3>
                      <p className="text-muted-foreground">
                        Leave your Thai villa massage feeling flexible, energized, and ready to continue your day.
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
                  Ready for Traditional Thai Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your energizing Thai bodywork now and experience ancient healing at your villa
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
              question: "Do I wear clothes during Thai villa massage?",
              answer: "Yes! Thai villa massage is performed fully clothed in comfortable, loose-fitting garments. Villa massage therapists work through fabric using compression and stretching rather than oil. Thai villa massage requires flexibility-friendly clothing that allows full range of motion during assisted stretches."
            },
            {
              question: "How does Thai villa massage differ from oil-based massage?",
              answer: "Thai villa massage uses no oil, focuses on stretching and acupressure, and is performed on a floor mat rather than massage table. Villa massage therapists use body weight and leverage for deep stretches. Thai villa massage is often called 'lazy yoga' because therapists move your body through yoga-like positions."
            },
            {
              question: "Will Thai villa massage hurt if I'm not flexible?",
              answer: "Thai villa massage therapists adjust stretches to your flexibility level without forcing positions. Villa massage should feel challenging but never painful during stretches. Regular Thai villa massage actually improves flexibility over time, making subsequent sessions more comfortable and effective."
            },
            {
              question: "Can Thai villa massage help with lower back stiffness?",
              answer: "Yes! Thai villa massage is excellent for lower back stiffness with its combination of spinal twists, hip stretches, and pressure point work. Villa massage therapists address back pain root causes in hip flexors and hamstrings. Thai villa massage provides lasting relief by improving overall flexibility and alignment."
            },
            {
              question: "Is Thai villa massage suitable for elderly clients?",
              answer: "Thai villa massage can be modified for seniors with gentler stretching and reduced intensity. Villa massage therapists adapt techniques for limited flexibility and health conditions. Modified Thai villa massage provides excellent benefits for elderly clients when properly adjusted for individual abilities."
            },
            {
              question: "How long does Thai villa massage take?",
              answer: "Traditional Thai villa massage sessions run 90 minutes to work through the complete body systematically. Villa massage therapists can offer shorter Thai massage focusing on specific areas. Full-length Thai villa massage provides the most comprehensive benefits through complete body stretching sequences."
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
                        Explore all traditional and modern villa massage services in Bali
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
                        Browse complete range of Thai and other villa massage treatments
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
                        Traditional Thai villa massage in spiritual Ubud environment
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
                        Energizing Thai villa massage at modern Seminyak villas
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
                        Learn about Thai massage benefits and villa massage techniques
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
                        Active recovery Thai villa massage for Canggu lifestyle
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
