import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Check, ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageServicesIndex() {
  return (
    <>
      <SEOHead 
        title="Villa Massage Services | All Treatments at Your Private Villa"
        description="Complete villa massage services delivered to your private accommodation in Bali. Balinese, deep tissue, couples, and specialty villa massage treatments. Professional therapists, premium equipment."
        keywords="villa massage services, villa massage treatments, private villa massage, villa spa services"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Villa Massage Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional villa massage treatments delivered directly to your private accommodation throughout Bali
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book Your Villa Massage Service
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
              Complete Villa Massage Treatment Menu
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Our comprehensive villa massage services catalog includes traditional Balinese healing, modern therapeutic techniques, and specialty 
                treatments designed specifically for private villa environments. Each villa massage service delivers professional spa-quality results 
                in the complete privacy and comfort of your own accommodation. Whether you seek deep therapeutic work, gentle relaxation, or romantic 
                couples experiences, our villa massage menu provides the perfect treatment for every wellness need.
              </p>
              <p className="text-lg text-muted-foreground">
                Every villa massage service includes professional therapist arrival 30 minutes early for complete setup, premium organic oils, fresh 
                linens, and all necessary equipment. Treatments are available throughout <Link href="/villa-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, 
                <Link href="/villa-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, 
                <Link href="/villa-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, 
                <Link href="/villa-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, 
                <Link href="/villa-massage/cities/nusa-dua"><span className="text-primary hover:underline">Nusa Dua</span></Link>, and beyond.
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
              Available Villa Massage Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Balinese Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/balinese">
                        <span className="hover:text-primary cursor-pointer">
                          Balinese Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Traditional Balinese healing techniques delivered as premium villa massage service. Ancient acupressure, flowing strokes, 
                    and gentle stretching combine to create the authentic Balinese villa massage experience. Our most requested villa massage 
                    treatment, perfect for cultural immersion and deep relaxation at your private villa.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Traditional Balinese acupressure techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Flowing long strokes with aromatherapy oils</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Gentle stretching and joint mobilization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 320,000 (60 min) | Rp 450,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/balinese">
                      Book Balinese Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Deep Tissue Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/deep-tissue">
                        <span className="hover:text-primary cursor-pointer">
                          Deep Tissue Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Therapeutic villa massage targeting chronic muscle tension and deep-seated knots. Intensive pressure and specialized techniques 
                    address problem areas effectively. Ideal villa massage service for athletes, active travelers, or anyone experiencing persistent 
                    muscle discomfort requiring professional therapeutic intervention.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Intensive therapeutic pressure techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Chronic tension and knot release</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Injury recovery and mobility improvement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 380,000 (60 min) | Rp 540,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/deep-tissue">
                      Book Deep Tissue Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Couples Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/couples">
                        <span className="hover:text-primary cursor-pointer">
                          Couples Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Romantic villa massage experience for partners, friends, or family members. Two professional therapists work simultaneously, 
                    allowing both guests to enjoy treatments together. Perfect villa massage option for honeymoons, anniversaries, or simply sharing 
                    wellness moments in your private villa setting.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Two therapists working simultaneously</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Synchronized treatment experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Choice of massage techniques for each person</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 550,000 (60 min) | Rp 760,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/couples">
                      Book Couples Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Relaxation Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/relaxation">
                        <span className="hover:text-primary cursor-pointer">
                          Relaxation Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Gentle, stress-relieving villa massage focusing on pure relaxation and mental calm. Light to medium pressure with flowing 
                    movements and aromatherapy creates ultimate serenity. Perfect villa massage choice for first-time recipients, stress relief, 
                    or simply unwinding completely in your private villa sanctuary.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Light to medium pressure techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Premium aromatherapy oil blends</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Stress relief and mental relaxation focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 380,000 (60 min) | Rp 450,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/relaxation">
                      Book Relaxation Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Aromatherapy Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/aromatherapy">
                        <span className="hover:text-primary cursor-pointer">
                          Aromatherapy Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Therapeutic villa massage enhanced with premium essential oils for mind-body wellness. Custom oil blends address specific needs 
                    like stress, sleep, energy, or emotional balance. This villa massage service combines physical therapy with aromatherapy healing 
                    for comprehensive wellness benefits at your private villa.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Premium essential oil selections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Custom blends for specific wellness goals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Mind-body healing integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 350,000 (60 min) | Rp 490,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/aromatherapy">
                      Book Aromatherapy Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Hot Stone Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/hot-stone">
                        <span className="hover:text-primary cursor-pointer">
                          Hot Stone Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Luxurious villa massage combining volcanic stones with therapeutic techniques. Heated stones penetrate deep muscle layers while 
                    therapist hands deliver traditional massage. Premium villa massage experience requiring additional equipment and setup, offering 
                    ultimate muscle relaxation and circulation improvement.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Heated volcanic stone therapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Deep muscle penetration and relaxation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Improved circulation and pain relief</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 420,000 (60 min) | Rp 590,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/hot-stone">
                      Book Hot Stone Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Prenatal Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/prenatal">
                        <span className="hover:text-primary cursor-pointer">
                          Prenatal Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Specialized villa massage for expecting mothers after 12 weeks pregnancy. Gentle techniques address pregnancy discomforts while 
                    ensuring complete safety. Our prenatal-certified therapists bring special positioning cushions for comfortable villa massage 
                    treatment during all pregnancy stages.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Pregnancy-safe techniques (after 12 weeks)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Special positioning cushions included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Certified prenatal massage therapists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 75 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 390,000 (60 min) | Rp 490,000 (75 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/prenatal">
                      Book Prenatal Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Thai Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/thai">
                        <span className="hover:text-primary cursor-pointer">
                          Thai Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Active villa massage combining stretching, acupressure, and compression techniques. Performed on floor mat rather than table, 
                    this dynamic villa massage service improves flexibility and energy flow. Clients remain clothed in comfortable attire during 
                    this traditional Thai yoga-massage villa treatment.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Traditional Thai stretching techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Acupressure and compression methods</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Flexibility and energy improvement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 390,000 (60 min) | Rp 550,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/thai">
                      Book Thai Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Sports Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/sports">
                        <span className="hover:text-primary cursor-pointer">
                          Sports Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Performance-focused villa massage for athletes and active individuals. Combines deep tissue, stretching, and targeted techniques 
                    to address sports-related muscle issues. Ideal villa massage service after surfing, hiking, cycling, or any physical activities 
                    during your Bali adventure.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Athletic performance and recovery focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Deep tissue and stretching integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Injury prevention and mobility work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">60 or 90 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 380,000 (60 min) | Rp 490,000 (90 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/sports">
                      Book Sports Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Reflexology Villa Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <Link href="/villa-massage/services/reflexology">
                        <span className="hover:text-primary cursor-pointer">
                          Reflexology Villa Massage
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Specialized villa massage focusing on feet, hands, and reflex points. Ancient healing technique stimulating specific zones 
                    connected to body organs and systems. Perfect standalone villa massage treatment or addition to full-body services for 
                    comprehensive wellness benefits.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Foot and hand reflex point therapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Organ and system stimulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">Standalone or combination treatment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">45 or 60 minutes</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Villa Massage Pricing:</p>
                    <p className="font-semibold text-lg">Rp 380,000 (45 min) | Rp 380,000 (60 min)</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/villa-massage/services/reflexology">
                      Book Reflexology Villa Massage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <VillaMassageFAQ items={[
        {
          question: "Which villa massage service is best for first-time clients?",
          answer: "Balinese villa massage is ideal for first-time clients with its balanced pressure and comprehensive technique. Villa massage therapists combine relaxation with therapeutic benefits in traditional Balinese style. Most people find Balinese villa massage provides the perfect introduction to professional massage therapy."
        },
        {
          question: "Can I combine different villa massage services in one session?",
          answer: "Yes! Villa massage therapists can blend techniques like aromatherapy with deep tissue or hot stone with relaxation. Hybrid villa massage sessions customize treatments to your specific needs and preferences. Discuss combination options when booking villa massage for personalized therapeutic experiences."
        },
        {
          question: "How do I choose between relaxation and deep tissue villa massage?",
          answer: "Choose relaxation villa massage for stress relief and mental calm, deep tissue for chronic pain and muscle knots. Villa massage therapists help determine which service matches your primary goal. Many clients alternate between villa massage types depending on their current physical and emotional needs."
        },
        {
          question: "Are all villa massage services the same price?",
          answer: "Most villa massage services cost the same, except couples treatments (two therapists) and shorter reflexology sessions. Villa massage pricing reflects therapist expertise and session duration rather than technique complexity. Premium services like hot stone include all equipment at no additional villa massage cost."
        },
        {
          question: "Can villa massage therapists recommend the right service for me?",
          answer: "Absolutely! Villa massage therapists assess your needs and suggest appropriate treatments during booking consultations. They consider your goals, health conditions, and preferences when recommending villa massage services. Professional guidance ensures you select the most beneficial villa massage style."
        }
      ]} />

      {/* Booking Information */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Book Villa Massage Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us via WhatsApp to book any villa massage service. All treatments available throughout Bali with same-day booking. 
              Our team confirms therapist availability, coordinates timing, and ensures your villa massage experience exceeds expectations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Villa Massage via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/villa-massage">
                  Back to Villa Massage Hub
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
