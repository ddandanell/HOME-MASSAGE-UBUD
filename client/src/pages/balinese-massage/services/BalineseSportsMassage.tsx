import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Dumbbell } from 'lucide-react';

export default function BalineseSportsMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Sports Massage | Athletic Recovery & Performance"
        description="Experience Balinese sports massage for athletic recovery and performance enhancement. Traditional techniques adapted for active lifestyles and sports injuries in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Sports Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Traditional techniques adapted for athletic recovery and performance
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Sports Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Sports Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese sports massage adapts traditional Indonesian healing techniques specifically for active individuals, athletes, and fitness enthusiasts. This specialized treatment combines deep tissue work, stretching, and traditional Balinese flow to address sports-related muscle tension, improve recovery time, and enhance athletic performance. The approach targets muscles stressed by physical activity while maintaining holistic balance principles.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your therapist assesses your activity level, training patterns, and problem areas before applying firm pressure to overworked muscle groups. The treatment incorporates traditional Balinese stretching techniques, joint mobilization, and focused deep work on areas prone to sports injuries—hamstrings, IT bands, shoulders, and back. This combination accelerates recovery, reduces injury risk, and maintains muscle flexibility for optimal performance.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese sports massage session can be customized as pre-event preparation, post-event recovery, or maintenance therapy for regular training. The treatment proves particularly valuable for surfers, yoga practitioners, hikers, and anyone maintaining active lifestyle in Bali. This therapeutic approach supports athletic goals while preventing overuse injuries through consistent bodywork.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Sports Massage Pricing
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
                        <span className="text-2xl font-bold">Rp 350,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Focused sports recovery on primary muscle groups
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
                        <span className="text-2xl font-bold">Rp 500,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive athletic recovery and injury prevention
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
                        <span className="text-2xl font-bold">Rp 650,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Full body sports therapy with extended techniques
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
                  Why Choose Balinese Sports Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Dumbbell className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Faster Recovery</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Accelerate muscle recovery after intense training or competition through targeted deep tissue work and improved circulation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Dumbbell className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Injury Prevention</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Regular sports massage reduces overuse injury risk by maintaining muscle flexibility, identifying problem areas early, and correcting imbalances.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Dumbbell className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Enhanced Performance</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Improved range of motion, reduced muscle tension, and better recovery support peak athletic performance and training consistency.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Dumbbell className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Specialized Techniques</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Combines traditional Balinese stretching with targeted deep tissue work specifically addressing athletes' needs and common sports injuries.
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
                      <h3 className="font-semibold text-lg mb-2">When should I get Balinese sports massage—before or after activity?</h3>
                      <p className="text-muted-foreground">
                        Both are beneficial. Pre-event massage uses lighter pressure to warm muscles and improve flexibility. Post-event massage focuses on recovery with deeper work. Maintenance massage supports ongoing training.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How is sports massage different from regular Balinese massage?</h3>
                      <p className="text-muted-foreground">
                        Sports massage uses firmer pressure and focuses more on muscle groups stressed by athletic activity. It incorporates specific stretching and includes targeted work on common injury areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can sports massage help with existing injuries?</h3>
                      <p className="text-muted-foreground">
                        Sports massage can assist in rehabilitation from many soft tissue injuries once initial healing has occurred. Always consult your physician about acute injuries before receiving massage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How often should athletes receive sports massage?</h3>
                      <p className="text-muted-foreground">
                        Serious athletes benefit from weekly sessions. Recreational exercisers do well with bi-weekly or monthly maintenance. Adjust frequency based on training intensity and recovery needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Do I need to be an athlete to benefit from sports massage?</h3>
                      <p className="text-muted-foreground">
                        No, sports massage benefits anyone with active lifestyle—hikers, yoga practitioners, surfers, or those with physically demanding jobs. The techniques address muscle stress from any physical activity.
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
                    Book Your Balinese Sports Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Support your active lifestyle with specialized recovery therapy
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
                      <Link href="/balinese-massage/services/deep-tissue">
                        Balinese Deep Tissue Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/full-body">
                        Balinese Full Body Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/90-minute">
                        Balinese 90 Minute Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/traditional">
                        Traditional Balinese Massage
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
