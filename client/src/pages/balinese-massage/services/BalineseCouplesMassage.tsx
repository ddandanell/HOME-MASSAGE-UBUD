import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Heart } from 'lucide-react';

export default function BalineseCouplesMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Couples Massage | Romantic Spa Experience for Two"
        description="Experience Balinese couples massage together in your villa. Traditional massage for two with synchronized techniques and romantic ambiance. Perfect for honeymoons and anniversaries."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Couples Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Share traditional Balinese healing together in romantic side-by-side treatment
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Couples Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Couples Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese couples massage delivers authentic Indonesian healing techniques to both partners simultaneously in the same room. Two skilled therapists work in synchronized rhythm, creating a shared wellness experience that deepens connection while providing individual therapeutic benefits. This intimate treatment combines traditional Balinese massage with romantic ambiance, allowing you to relax together without separating for spa treatments.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Both partners receive complete traditional Balinese treatment including aromatic oil massage, acupressure, gentle stretching, and energy balancing. The therapists coordinate their movements to create harmonious flow throughout your session. You can choose matching techniques for shared experience or different styles based on individual needs—perhaps one partner prefers deep tissue while the other enjoys gentler relaxation massage.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese couples massage transforms your villa into a private spa sanctuary with two massage tables positioned side-by-side. The shared experience creates lasting memories while delivering authentic therapeutic benefits. Perfect for honeymoons, anniversaries, or simply reconnecting through the healing power of traditional Balinese touch therapy enjoyed together.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Couples Massage Pricing
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
                        <span className="text-2xl font-bold">Rp 700,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Two therapists, complete traditional treatment for both
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
                        <span className="text-2xl font-bold">Rp 1,000,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Extended couples session for deeper relaxation
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
                        <span className="text-2xl font-bold">Rp 1,300,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Complete couples ritual with comprehensive treatment
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
                  Why Choose Balinese Couples Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Shared Experience</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Create lasting memories together while both receiving authentic therapeutic treatment in complete privacy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Romantic Ambiance</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Your villa transforms into an intimate spa sanctuary with candles, aromatics, and traditional Balinese music.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Individual Attention</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Each partner receives personalized treatment from a dedicated therapist, with techniques adjusted to individual needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Perfect Timing</h3>
                      </div>
                      <p className="text-muted-foreground">
                        No waiting separately for spa appointments. Relax together, finish together, and continue your day or evening together.
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
                      <h3 className="font-semibold text-lg mb-2">Can we choose different massage types during couples massage?</h3>
                      <p className="text-muted-foreground">
                        Yes, each partner can select their preferred style. One might choose deep tissue while the other enjoys aromatherapy or relaxation massage. Just communicate your preferences when booking.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">How much space is needed for Balinese couples massage?</h3>
                      <p className="text-muted-foreground">
                        We need space for two massage tables side-by-side, approximately 12 feet by 8 feet. Most villa bedrooms, living areas, or covered outdoor pavilions work perfectly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Are both therapists male or female?</h3>
                      <p className="text-muted-foreground">
                        We can arrange same-gender or mixed-gender therapist teams based on your preference. Just let us know your comfort level when booking.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is Balinese couples massage appropriate for friends or family members?</h3>
                      <p className="text-muted-foreground">
                        Absolutely. While popular with romantic couples, friends, siblings, or parents and adult children often enjoy sharing the experience together.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What should we wear during couples massage?</h3>
                      <p className="text-muted-foreground">
                        Most clients undress to comfort level and use provided linens. Therapists are professionally trained in proper draping for complete privacy and modesty throughout treatment.
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
                    Book Your Balinese Couples Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Create unforgettable wellness memories together
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
                      <Link href="/balinese-massage/services/aromatherapy">
                        Balinese Aromatherapy Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/hot-stone">
                        Balinese Hot Stone Massage
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
                      <Link href="/balinese-massage/services/2-hour-package">
                        Balinese 2 Hour Package
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
