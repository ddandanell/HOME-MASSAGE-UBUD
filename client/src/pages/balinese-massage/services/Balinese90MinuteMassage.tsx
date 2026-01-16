import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Star } from 'lucide-react';

export default function Balinese90MinuteMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese 90 Minute Massage | Extended Traditional Treatment"
        description="Experience Balinese 90 minute massage with extended traditional techniques and deeper relaxation. Our most popular treatment duration at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese 90 Minute Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Extended traditional treatment for deeper healing and relaxation
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book 90 Minute Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese 90 Minute Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese 90 minute massage represents the ideal balance between comprehensive treatment and time investment, making it our most popular service duration. This extended session allows your therapist to work more thoroughly on each body region using full range of traditional Indonesian techniques without rushing. The extra thirty minutes compared to standard massage transforms good treatment into exceptional healing experience.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your ninety-minute session provides time for detailed attention to problem areas while ensuring complete full body coverage. The therapist can apply deeper pressure on tight muscles, incorporate more stretching techniques, and extend work on areas like back, shoulders, and legs that typically need extra attention. This duration allows traditional Balinese massage to deliver its full therapeutic potential through unhurried, methodical approach.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese 90 minute massage session creates profound relaxation impossible to achieve in shorter treatments. The extended time allows your nervous system to fully shift into parasympathetic state, maximizing stress relief and healing benefits. This optimal duration proves perfect for those seeking serious therapeutic results, addressing multiple concerns, or simply wanting luxurious, complete traditional Balinese experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  90 Minute Massage Pricing
                </h2>
                <div className="grid md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
                  <Card className="border-primary border-2">
                    <CardContent className="p-8 text-center">
                      <div className="text-xs font-semibold text-primary mb-4">MOST POPULAR</div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Clock className="w-6 h-6 text-primary" />
                        <span className="font-semibold text-xl">90 Minutes</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <DollarSign className="w-6 h-6 text-primary" />
                        <span className="text-3xl font-bold">Rp 500,000</span>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Extended Balinese massage with comprehensive techniques and deeper therapeutic work
                      </p>
                      <Button size="lg" asChild>
                        <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                          Book 90 Minute Session
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-center text-muted-foreground">
                  Our most popular duration—the perfect balance of therapeutic depth and time investment.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Balinese 90 Minute Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Optimal Duration</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Perfect balance between comprehensive treatment and reasonable time commitment. Not too short, not too long—just right.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Deeper Work</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Extra time allows therapist to address chronic tension, work deeper into muscles, and incorporate extended stretching techniques.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Profound Relaxation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Ninety minutes provides time for nervous system to fully relax, creating deeper stress relief and lasting therapeutic effects.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Multiple Concerns</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Address several problem areas in one session—tight shoulders, lower back pain, and leg tension without sacrificing full body coverage.
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
                      <h3 className="font-semibold text-lg mb-2">Why is 90 minutes your most popular duration?</h3>
                      <p className="text-muted-foreground">
                        Clients find 90 minutes provides comprehensive treatment without feeling too long. It allows thorough work on all areas plus extra time for problem regions—the sweet spot for therapeutic massage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How does 90 minutes differ from 60 minutes?</h3>
                      <p className="text-muted-foreground">
                        While 60 minutes covers all areas efficiently, 90 minutes allows slower pace, deeper pressure on tight spots, more stretching, and extra focus on regions needing additional attention—significantly enhanced therapeutic results.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Will I fall asleep during 90 minute massage?</h3>
                      <p className="text-muted-foreground">
                        Many clients do drift off during extended sessions—perfectly normal and indicates deep relaxation. Your body continues receiving therapeutic benefits whether awake or sleeping.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can the therapist focus on multiple problem areas in 90 minutes?</h3>
                      <p className="text-muted-foreground">
                        Absolutely. Ninety minutes provides excellent opportunity to address two or three specific concerns while maintaining full body treatment. Communicate your priorities at session start.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is 90 minutes worth the extra cost over 60 minutes?</h3>
                      <p className="text-muted-foreground">
                        Most clients feel the enhanced therapeutic results, deeper relaxation, and ability to address specific concerns make 90 minutes excellent value. It's our most requested duration for good reason.
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
                    Book Your Balinese 90 Minute Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience our most popular treatment duration for optimal results
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
                      <Link href="/balinese-massage/services/60-minute">
                        Balinese 60 Minute Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/2-hour-package">
                        Balinese 2 Hour Package
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
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
