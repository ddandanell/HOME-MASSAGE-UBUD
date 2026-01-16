import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Gift } from 'lucide-react';

export default function Balinese2HourPackage() {
  return (
    <>
      <SEOHead 
        title="Balinese 2 Hour Package | Ultimate Traditional Spa Experience"
        description="Experience Balinese 2 hour massage package with comprehensive traditional treatment. Ultimate luxury spa experience at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese 2 Hour Package
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Ultimate traditional spa experience with comprehensive healing rituals
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book 2 Hour Package
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese 2 Hour Package?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese 2 hour package delivers the ultimate traditional Indonesian spa experience with comprehensive treatment combining multiple healing modalities. This luxurious session provides time for complete full body massage, extended work on problem areas, additional techniques like body scrubs or hot stones, and genuine relaxation without any rush. The two-hour format transforms your villa into authentic Balinese healing sanctuary.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Your two-hour session allows your therapist to apply the complete spectrum of traditional Balinese techniques at meditative pace. Every body region receives thorough attention with deeper pressure, extended stretching, comprehensive acupressure work, and additional modalities like scalp massage or aromatherapy foot treatment. The abundant time ensures no tension points escape attention and maximum therapeutic transformation occurs.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese 2 hour package creates transcendent wellness experience reserved for those seeking ultimate healing and relaxation. This duration proves ideal for special occasions, serious therapeutic needs, or simply indulging in complete traditional Balinese spa ritual. The extended treatment provides profound physical relief, deep mental peace, and lasting energetic balance through unhurried, comprehensive bodywork honoring authentic Indonesian healing traditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  2 Hour Package Pricing
                </h2>
                <div className="grid md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
                  <Card className="border-primary border-2">
                    <CardContent className="p-8 text-center">
                      <div className="text-xs font-semibold text-primary mb-4">ULTIMATE EXPERIENCE</div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Clock className="w-6 h-6 text-primary" />
                        <span className="font-semibold text-xl">120 Minutes</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <DollarSign className="w-6 h-6 text-primary" />
                        <span className="text-3xl font-bold">Rp 650,000</span>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Complete traditional ritual with comprehensive techniques, extended bodywork, and additional healing modalities
                      </p>
                      <Button size="lg" asChild>
                        <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                          Book 2 Hour Package
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-center text-muted-foreground">
                  Our most comprehensive treatment—perfect for special occasions or ultimate healing experience.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Balinese 2 Hour Package?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Complete Treatment</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Every traditional technique applied thoroughly with time for extended work on each body region—nothing rushed, nothing overlooked.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Multiple Modalities</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Time for combining treatments—traditional massage plus hot stones, aromatherapy, body scrub, or reflexology in one luxurious session.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Deep Transformation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Extended time allows profound physical, mental, and energetic shifts impossible to achieve in shorter sessions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Special Occasion</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Perfect for birthdays, anniversaries, honeymoons, or treating yourself to ultimate Balinese healing experience.
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
                      <h3 className="font-semibold text-lg mb-2">What's included in the Balinese 2 hour package?</h3>
                      <p className="text-muted-foreground">
                        Complete traditional full body massage with extended time on all areas, plus additional treatments based on your preferences—hot stones, aromatherapy, body scrub, reflexology, or simply more time on problem areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is 2 hours too long for massage?</h3>
                      <p className="text-muted-foreground">
                        Not at all. The time passes quickly during treatment, and the meditative pace creates deep relaxation. Most clients wish it lasted even longer. You're welcome to communicate if you need adjustments.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can I customize the 2 hour package?</h3>
                      <p className="text-muted-foreground">
                        Absolutely. Discuss your preferences with the therapist—focus entirely on traditional massage, combine multiple modalities, or spend extra time on specific concerns. The package adapts to your needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Is the 2 hour package good value compared to shorter sessions?</h3>
                      <p className="text-muted-foreground">
                        The extended duration provides exceptional value through comprehensive treatment, multiple techniques, and profound therapeutic results impossible in standard sessions. It's the ultimate Balinese healing experience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Who should book the 2 hour Balinese massage package?</h3>
                      <p className="text-muted-foreground">
                        Ideal for those with serious tension or pain, anyone celebrating special occasions, wellness enthusiasts wanting complete traditional experience, or those who simply deserve ultimate relaxation and self-care.
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
                    Book Your Balinese 2 Hour Package
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Experience the ultimate traditional Balinese healing ritual
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
                      <Link href="/balinese-massage/services/90-minute">
                        Balinese 90 Minute Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/couples">
                        Balinese Couples Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/hot-stone">
                        Balinese Hot Stone Massage
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
