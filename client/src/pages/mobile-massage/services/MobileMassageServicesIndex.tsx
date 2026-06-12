import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Check, ArrowRight, Star } from 'lucide-react';

export default function MobileMassageServicesIndex() {
  return (
    <>
      <SEOHead 
        title="Mobile Massage Services | All Treatments at Your Villa"
        description="Browse all mobile massage services available at your villa or hotel in Bali. Balinese, deep tissue, relaxation, and couples mobile massage. Professional therapists, same-day booking."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Massage Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional mobile massage treatments delivered to your villa or hotel in Bali
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Check Availability for Mobile Massage
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
              Why Choose Our Mobile Massage Services?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Every mobile massage service we offer brings professional spa-quality treatment directly to your accommodation. 
                Our licensed therapists arrive with all necessary equipment, oils, and expertise to deliver a complete mobile 
                massage experience without you leaving your villa or hotel room.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you seek the traditional healing of Balinese mobile massage, the therapeutic depth of deep tissue mobile 
                massage, the gentle relaxation of our relaxation mobile massage, or the shared experience of couples mobile massage, 
                each service maintains the same professional standards you'd find in Bali's finest spas.
              </p>
              <p className="text-lg text-muted-foreground">
                All mobile massage services include same-day booking, flexible scheduling, and can be delivered throughout 
                <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud</span></Link>, 
                <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu</span></Link>, 
                <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, 
                <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link>, and 
                <Link href="/mobile-massage/cities/nusa-dua"><span className="text-primary hover:underline"> Nusa Dua</span></Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Available Mobile Massage Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Balinese Mobile Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/services/balinese-mobile-massage">
                        <span className="hover:text-primary cursor-pointer">
                          Balinese Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Traditional Balinese techniques delivered as a professional mobile massage service. Long flowing strokes, 
                    gentle stretching, and acupressure combine to create the authentic Balinese mobile massage experience 
                    at your villa. Perfect for cultural immersion and deep relaxation.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Traditional Balinese techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Gentle stretching & acupressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Aromatic oils included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/mobile-massage/services/balinese-mobile-massage">
                      View Balinese Mobile Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Deep Tissue Mobile Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/services/deep-tissue-mobile-massage">
                        <span className="hover:text-primary cursor-pointer">
                          Deep Tissue Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Therapeutic deep tissue mobile massage targeting chronic tension and muscle knots. This mobile massage 
                    service uses firm pressure and slow strokes to access deeper muscle layers, perfect for athletes, 
                    active travelers, or anyone with persistent muscle tension.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Targets deep muscle layers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Releases chronic tension</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Therapeutic techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">90 minutes recommended</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/mobile-massage/services/deep-tissue-mobile-massage">
                      View Deep Tissue Mobile Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Relaxation Mobile Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/services/relaxation-mobile-massage">
                        <span className="hover:text-primary cursor-pointer">
                          Relaxation Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Pure relaxation delivered as mobile massage. Gentle, flowing techniques with light to medium pressure 
                    create deep calm without intensity. This mobile massage service focuses on stress relief, mental 
                    relaxation, and creating a peaceful spa atmosphere in your villa.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Gentle, flowing techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Light to medium pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Calming aromatherapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/mobile-massage/services/relaxation-mobile-massage">
                      View Relaxation Mobile Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Couples Mobile Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/mobile-massage/services/couples-mobile-massage">
                        <span className="hover:text-primary cursor-pointer">
                          Couples Mobile Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Shared relaxation with couples mobile massage. Two therapists provide simultaneous treatments in your 
                    private space. Perfect for romantic getaways, this mobile massage service creates an intimate spa 
                    experience you can enjoy together without leaving your villa.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Two therapists simultaneously</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Side-by-side setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Romantic atmosphere</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/mobile-massage/services/couples-mobile-massage">
                      View Couples Mobile Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What's Included in Every Mobile Massage Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Professional Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Licensed therapist arrives with fresh linens, towels, and premium oils for complete mobile massage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground text-sm">
                    Book mobile massage from 7 AM to 10 PM, seven days a week, including same-day availability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed Therapists</h3>
                  <p className="text-muted-foreground text-sm">
                    Every mobile massage delivered by certified therapists with minimum 5 years professional experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Privacy & Comfort</h3>
                  <p className="text-muted-foreground text-sm">
                    Enjoy your mobile massage in complete privacy at your villa, hotel, or private accommodation
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
              Ready to Book Mobile Massage?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your mobile massage service and experience professional spa treatments in your private space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Mobile Massage Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mobile-massage">
                  Back to Mobile Massage Hub
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>📞 Phone/WhatsApp: +62 811-2656-869</p>
              <p>📧 Email: hello@homemassageubud.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Links to Knowledge */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Learn More About Mobile Massage
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore our knowledge base to understand mobile massage safety, benefits, and what to expect
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge/is-mobile-massage-safe">
                  Mobile Massage Safety
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge/how-to-prepare-mobile-massage">
                  How to Prepare
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mobile-massage/knowledge/what-to-expect-mobile-massage">
                  What to Expect
                </Link>
              </Button>
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
