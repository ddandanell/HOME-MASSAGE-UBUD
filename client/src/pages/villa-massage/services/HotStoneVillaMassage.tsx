import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Flame, Mountain, Zap } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function HotStoneVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Hot Stone Villa Massage | Volcanic Stone Therapy at Your Villa"
        description="Professional hot stone villa massage delivered to your private villa in Bali. Experience therapeutic heated basalt stones for deep muscle relaxation. Same-day booking available."
        keywords="hot stone villa massage, villa hot stone massage, volcanic stone villa massage, heated stone massage villa"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Hot Stone Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Experience the ancient healing power of volcanic hot stone villa massage delivered to your private accommodation
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

          {/* What is Hot Stone Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Hot Stone Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Hot stone villa massage is an luxurious therapeutic treatment that combines traditional massage techniques with the healing properties of smooth, heated volcanic basalt stones. This distinctive villa massage modality brings ancient healing wisdom directly to your private accommodation, where our expert therapists use carefully heated stones to penetrate deep into muscle tissue, releasing tension and promoting profound relaxation. The stones are heated to approximately 130-145 degrees Fahrenheit and placed on specific points along your body while also being used as massage tools. The convenience of receiving hot stone villa massage at your villa means you can remain in a peaceful, warm state long after the treatment concludes.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The foundation of hot stone villa massage lies in thermotherapy—the therapeutic use of heat to treat physical ailments. When heated stones are placed on your body during villa massage, the warmth penetrates deeply into muscles, causing blood vessels to dilate and increasing circulation to the treated areas. This enhanced blood flow delivers oxygen and nutrients while removing metabolic waste products, accelerating healing and reducing inflammation. The heat also makes muscles more pliable, allowing the therapist to work more deeply during your villa massage without causing discomfort. Basalt stones are chosen specifically for this treatment because they retain heat exceptionally well and have a smooth texture that glides effortlessly across skin.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our hot stone villa massage, your therapist arrives with a professional stone heating unit, a set of therapeutic basalt stones in various sizes, and premium massage oils. The stones are sanitized and heated to the perfect temperature before your villa massage begins. The session typically starts with the therapist placing larger stones along your spine, in your palms, between your toes, or on your abdomen. These "placement stones" remain stationary, transferring their therapeutic heat while the therapist uses smaller stones to perform massage strokes. The combination of heat and pressure in this villa massage technique creates a uniquely soothing experience that many clients describe as transcendent.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Hot stone villa massage is particularly effective for individuals with chronic muscle tension, arthritis, fibromyalgia, or high stress levels. The heat component makes this villa massage ideal for those who find traditional deep tissue work uncomfortable but still need significant muscle release. The warmth from the stones helps reduce muscle spasms, increase flexibility, and alleviate pain more effectively than massage alone. Many clients report that hot stone villa massage provides relief that lasts several days beyond the treatment. The meditative quality of this villa massage also makes it exceptional for mental stress relief, as the penetrating warmth encourages deep psychological relaxation alongside physical healing.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What sets our hot stone villa massage apart is the expertise and attentiveness of our therapists. They continuously monitor stone temperature, ensuring optimal therapeutic benefit without any risk of discomfort. Throughout your villa massage, stones are expertly rotated and replaced as they cool, maintaining consistent warmth. The therapist combines traditional massage strokes with the heated stones, creating flowing movements that feel both grounding and ethereal. After your hot stone villa massage concludes, you'll experience a profound sense of warmth and relaxation that can last for hours. The privacy of receiving this treatment at your villa allows you to wrap yourself in blankets and continue resting, maximizing the therapeutic benefits of this exceptional villa massage experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Hot Stone Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Flame className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Deep Muscle Relaxation</h3>
                    <p className="text-muted-foreground">
                      Penetrating heat softens tight muscles more effectively than traditional villa massage techniques alone.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Mountain className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Enhanced Circulation</h3>
                    <p className="text-muted-foreground">
                      Heat dilates blood vessels, dramatically improving circulation throughout your body during villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Pain Management</h3>
                    <p className="text-muted-foreground">
                      Therapeutic warmth reduces chronic pain from arthritis, fibromyalgia, and muscle injuries during villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Reduction</h3>
                    <p className="text-muted-foreground">
                      The grounding warmth of stones creates profound mental calm during your hot stone villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Improved Flexibility</h3>
                    <p className="text-muted-foreground">
                      Warmed muscles stretch more easily, increasing range of motion after your villa massage session.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Better Sleep Quality</h3>
                    <p className="text-muted-foreground">
                      Deep relaxation from hot stone villa massage promotes restful, rejuvenating sleep.
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
                      <h3 className="text-2xl font-bold mb-2">Hot Stone Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Volcanic stone therapy at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 390,000</div>
                      <p className="text-sm text-muted-foreground">per person / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Certified hot stone massage therapist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Professional basalt stone set</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Portable stone heating unit</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Premium massage oils</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Hot Stone Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Stone Preparation</h3>
                      <p className="text-muted-foreground">
                        Your therapist heats volcanic basalt stones to optimal temperature in a professional heating unit for your villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Initial Placement</h3>
                      <p className="text-muted-foreground">
                        Warm stones are positioned along your spine and other key points to begin the therapeutic villa massage process.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Stone Massage Technique</h3>
                      <p className="text-muted-foreground">
                        Therapist uses heated stones as tools to perform flowing strokes during your villa massage session.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Deep Heat Penetration</h3>
                      <p className="text-muted-foreground">
                        Experience profound muscle release as therapeutic heat penetrates deeply during the villa massage treatment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Extended Warmth Period</h3>
                      <p className="text-muted-foreground">
                        Continue feeling the beneficial warmth for hours after your hot stone villa massage concludes.
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
                  Ready for Luxurious Hot Stone Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your volcanic stone therapy now and experience ancient healing at your private villa
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
              question: "How hot are the stones used in hot stone villa massage?",
              answer: "Hot stone villa massage uses smooth basalt stones heated to approximately 130-145°F (54-63°C) for therapeutic warmth without burning. Villa massage therapists test stone temperature before placement and adjust heat levels throughout treatment. Hot stone villa massage heat penetrates deep into muscles for exceptional relaxation."
            },
            {
              question: "Will hot stone villa massage burn my skin?",
              answer: "No! Hot stone villa massage uses controlled temperatures and proper placement techniques to prevent burns. Villa massage therapists always test stones and place them with oil barriers on your skin. Professional hot stone villa massage feels deeply warm and soothing, never painful or dangerous."
            },
            {
              question: "Can hot stone villa massage help with chronic muscle pain?",
              answer: "Yes! Hot stone villa massage is excellent for chronic muscle tension because heat increases blood flow and tissue flexibility. Villa massage therapists use stones to warm muscles before applying deeper pressure safely. Regular hot stone villa massage provides cumulative relief for long-standing pain conditions."
            },
            {
              question: "How does hot stone villa massage differ from regular massage?",
              answer: "Hot stone villa massage combines heated stones with traditional massage strokes for enhanced muscle relaxation and circulation. Villa massage therapists use stones as tools and place them on energy points. Hot stone villa massage achieves deeper muscle release than standard techniques through therapeutic heat application."
            },
            {
              question: "Is hot stone villa massage suitable during Bali's hot weather?",
              answer: "Absolutely! Hot stone villa massage remains comfortable in tropical weather because treatments occur indoors with air conditioning at your villa. Villa massage therapists adjust stone temperature for comfort in warm climates. Many people enjoy hot stone villa massage year-round for its unique therapeutic benefits."
            },
            {
              question: "Do villa massage therapists bring their own stone heaters?",
              answer: "Yes! Hot stone villa massage includes all specialized equipment—stones, heating unit, and temperature controls brought by therapists. Villa massage setup requires only electrical access at your property. Professional hot stone villa massage delivers spa-quality results with complete portable equipment."
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
                        Explore all luxury villa massage services including hot stone therapy
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
                        Browse complete range of hot stone and other villa massage treatments
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
                        Hot stone villa massage in Ubud's tranquil healing environment
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
                        Premium hot stone villa massage at luxury Seminyak villas
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
                        Learn about hot stone therapy and villa massage healing benefits
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
                        Therapeutic hot stone villa massage service in Canggu
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
