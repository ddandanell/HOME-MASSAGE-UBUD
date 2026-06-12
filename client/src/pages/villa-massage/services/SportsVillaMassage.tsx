import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Activity, Trophy, Zap } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function SportsVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Sports Villa Massage | Athletic Recovery at Your Villa"
        description="Professional sports villa massage delivered to your private villa in Bali. Specialized athletic recovery and performance massage. Same-day booking available."
        keywords="sports villa massage, villa sports massage, athletic villa massage, recovery villa massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Sports Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Professional athletic recovery with specialized sports villa massage delivered to your private accommodation
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

          {/* What is Sports Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Sports Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Sports villa massage is a specialized therapeutic treatment designed specifically for athletes and active individuals, focusing on preventing injuries, enhancing performance, and accelerating recovery from physical exertion. This targeted villa massage modality brings professional athletic care directly to your private accommodation, where our expert therapists use a combination of techniques including deep tissue work, trigger point therapy, stretching, and muscle manipulation to address the unique demands that athletic activity places on your body. The convenience of receiving sports villa massage at your villa is particularly valuable after intense training sessions, competitions, or adventure activities when traveling to a spa would be impractical or uncomfortable.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The techniques employed in sports villa massage differ significantly from relaxation massage. Our therapists focus on specific muscle groups used in your sport or activity, applying deeper pressure to release adhesions, break down scar tissue, and flush out metabolic waste products like lactic acid that accumulate during exercise. This villa massage approach combines various modalities—deep tissue work to reach underlying muscle layers, myofascial release to address connective tissue restrictions, and dynamic stretching to improve flexibility and range of motion. The treatment can be tailored for pre-event preparation to warm up muscles and prevent injury, or post-event recovery to reduce soreness and expedite healing after your villa massage session.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our sports villa massage, your session begins with a detailed consultation about your athletic activities, training schedule, current injuries or pain points, and whether you need pre-event preparation or post-event recovery. Your therapist arrives at your villa fully equipped with professional massage oils, stretching aids, and the expertise to create a customized treatment plan. The villa massage may include rapid percussion movements to warm tissues, cross-fiber friction to break down adhesions, compression techniques to improve circulation, and assisted stretching to enhance flexibility. Our therapists understand athletic biomechanics and can identify muscle imbalances or areas of compensation that might lead to injury if left unaddressed.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Sports villa massage is invaluable for surfing enthusiasts, yoga practitioners, runners, cyclists, adventure travelers, and anyone maintaining an active lifestyle during their Bali vacation. The treatment significantly reduces delayed onset muscle soreness (DOMS), speeds recovery between training sessions, and helps prevent overuse injuries. Regular sports villa massage increases flexibility and range of motion, which directly translates to improved athletic performance. The deep work involved in this villa massage also helps identify potential problem areas before they develop into serious injuries, making it an essential component of any serious athlete's training regimen. Many professional athletes worldwide incorporate regular sports massage into their training schedules for these exact benefits.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What distinguishes our sports villa massage is our therapists' specialized training in athletic care and injury prevention. They understand not just anatomy but also the specific demands various sports place on the body. During your villa massage, they'll assess muscle condition, identify areas of tightness or compensation, and provide feedback about your body's condition. The intensity of sports villa massage is typically higher than other styles, with pressure customized to your tolerance and the treatment goals. After your villa massage, your therapist may provide stretching exercises or self-care recommendations to maintain the benefits between sessions. The privacy of receiving this specialized treatment at your villa allows you to ice affected areas, rest immediately, or continue with gentle movement—whatever your recovery needs require for optimal athletic performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Sports Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Activity className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Faster Recovery</h3>
                    <p className="text-muted-foreground">
                      Accelerate muscle repair and reduce recovery time between training sessions with targeted villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Trophy className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Injury Prevention</h3>
                    <p className="text-muted-foreground">
                      Identify and address muscle imbalances before they lead to injuries during sports villa massage.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Enhanced Performance</h3>
                    <p className="text-muted-foreground">
                      Improve flexibility, range of motion, and muscle function through regular villa massage sessions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Reduced Muscle Soreness</h3>
                    <p className="text-muted-foreground">
                      Minimize DOMS and post-workout discomfort with post-event sports villa massage treatment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Better Circulation</h3>
                    <p className="text-muted-foreground">
                      Flush metabolic waste and deliver oxygen-rich blood to muscles during villa massage therapy.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Increased Flexibility</h3>
                    <p className="text-muted-foreground">
                      Improve muscle pliability and joint mobility through stretching techniques in villa massage.
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
                      <h3 className="text-2xl font-bold mb-2">Sports Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Athletic recovery at your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 380,000</div>
                      <p className="text-sm text-muted-foreground">per person / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Certified sports massage specialist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Targeted muscle group treatment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Deep tissue and stretching techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Pre or post-event customization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Sports Villa Massage
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
                      <h3 className="text-xl font-semibold mb-3">1. Athletic Assessment</h3>
                      <p className="text-muted-foreground">
                        Discuss your sport, training schedule, and specific muscle concerns for personalized villa massage treatment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Targeted Approach</h3>
                      <p className="text-muted-foreground">
                        Focus on muscle groups most used in your activity during the specialized villa massage session.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Deep Tissue Work</h3>
                      <p className="text-muted-foreground">
                        Experience intensive pressure to reach deep muscle layers and release adhesions during villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Active Stretching</h3>
                      <p className="text-muted-foreground">
                        Therapist assists with dynamic stretches to improve flexibility as part of your villa massage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Recovery Guidance</h3>
                      <p className="text-muted-foreground">
                        Receive post-treatment care recommendations to maximize benefits between villa massage sessions.
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
                  Ready for Professional Sports Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your athletic recovery session now and optimize your performance with expert villa massage
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
              question: "How does sports villa massage differ from regular massage?",
              answer: "Sports villa massage uses targeted techniques for athletic performance and injury prevention, focusing on sport-specific muscle groups. Villa massage therapists understand biomechanics and training stress patterns. Sports villa massage combines deep tissue, stretching, and trigger point work specifically designed for active individuals."
            },
            {
              question: "When should I book sports villa massage—before or after activity?",
              answer: "Pre-activity sports villa massage uses lighter, warming strokes to prepare muscles and prevent injury. Post-activity sports villa massage focuses on recovery with deeper pressure to reduce soreness. Villa massage therapists adjust sports techniques based on timing relative to your training or competition schedule."
            },
            {
              question: "Can sports villa massage help prevent running injuries?",
              answer: "Yes! Sports villa massage identifies and releases tight areas before they cause running injuries like IT band syndrome or plantar fasciitis. Villa massage therapists work calves, hamstrings, hip flexors, and feet systematically. Regular sports villa massage maintains muscle balance essential for injury-free running."
            },
            {
              question: "Is sports villa massage suitable for weekend warriors and recreational athletes?",
              answer: "Absolutely! Sports villa massage benefits anyone engaging in physical activity, not just professional athletes. Villa massage therapists adapt techniques for various fitness levels and sports. Weekend warriors often need sports villa massage more than pros due to less-consistent training and higher injury risk."
            },
            {
              question: "Can sports villa massage improve surfing performance?",
              answer: "Definitely! Sports villa massage addresses surfing-specific issues like shoulder rotation, paddling endurance, and pop-up flexibility. Villa massage therapists familiar with surf culture understand wave-riding biomechanics. Regular sports villa massage helps surfers maintain performance throughout extended Bali surf trips."
            },
            {
              question: "How often should athletes receive sports villa massage?",
              answer: "Serious athletes benefit from weekly sports villa massage during training periods and bi-weekly during maintenance phases. Villa massage therapists recommend frequency based on training intensity and recovery needs. Consistent sports villa massage prevents overuse injuries and optimizes athletic performance over time."
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
                        Discover all professional villa massage services for athletic recovery
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
                        Browse sports massage and other villa massage treatment options
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
                        Sports villa massage for active Ubud adventurers and athletes
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
                        Athletic recovery villa massage at Seminyak beach villas
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
                        Athletic performance tips and sports villa massage insights
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
                        Essential sports villa massage for Canggu surfers and athletes
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
