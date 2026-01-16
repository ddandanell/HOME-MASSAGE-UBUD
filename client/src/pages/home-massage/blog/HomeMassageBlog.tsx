import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function HomeMassageBlog() {
  return (
    <>
      <SEOHead 
        title="Home Massage Blog | Expert Guides & Tips"
        description="Complete guides about home massage in Bali. Learn everything about booking, benefits, safety, and choosing the right home massage service."
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
              <span className="text-lg font-semibold text-primary">Home Massage Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage Guides & Resources
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Everything you need to know about professional home massage services in Bali
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured Home Massage Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1: What Is Home Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Essential Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/what-is-home-massage">
                      <span className="hover:text-primary cursor-pointer">
                        What Is Home Massage?
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete introduction to home massage services. Discover what home massage means, how it works, and why tourists 
                    across <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, 
                    <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu</span></Link>, and 
                    <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link> choose 
                    home massage over traditional spas.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Learn about different home massage types including <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>, 
                    <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue home massage</span></Link>, and more. 
                    Understand common myths and when home massage is the best choice for your Bali vacation.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/what-is-home-massage">
                      Read Complete Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Article 2: Why Tourists Prefer */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Benefits Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/why-tourists-prefer-home-massage">
                      <span className="hover:text-primary cursor-pointer">
                        Why Tourists Prefer Home Massage
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the 6 major reasons travelers choose home massage over spa visits. From convenience and privacy to cost 
                    savings and flexibility, learn why home massage has become the preferred option for visitors in 
                    <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link> and throughout Bali.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Real testimonials from couples enjoying <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>, 
                    solo travelers booking <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link>, 
                    and active guests choosing therapeutic treatments. Plus cost comparisons showing home massage value.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/why-tourists-prefer-home-massage">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Article 3: How to Book */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Booking Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/how-to-book-home-massage">
                      <span className="hover:text-primary cursor-pointer">
                        How to Book Home Massage
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Step-by-step guide to booking home massage in Bali. Learn the complete process from initial contact to therapist 
                    arrival, what information to provide, and how to prepare your accommodation for home massage service.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Covers timing tips, communication guidelines, payment methods, and troubleshooting common issues. Whether booking 
                    <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline"> Balinese home massage</span></Link> in 
                    <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud</span></Link> or 
                    <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue home massage</span></Link> elsewhere, 
                    this guide ensures smooth booking.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/how-to-book-home-massage">
                      View Booking Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* New SEO-Optimized Articles */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Complete Home Massage Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Article 1: Ultimate Guide */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Pillar Content</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/home-massage-guide-bali">
                      <span className="hover:text-primary cursor-pointer">
                        Home Massage Bali: Complete 2025 Guide
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The ultimate guide to home massage in Bali. Learn about service types, booking procedures, pricing ($50-150), 
                    and what to expect from professional therapists. Covers everything from traditional <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese massage</span></Link> to 
                    <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue treatments</span></Link>.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Essential reading for first-time home massage guests. Includes preparation tips, FAQ, and area coverage for 
                    <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud</span></Link>, 
                    <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, and more.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/home-massage-guide-bali">
                      Read Complete Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Article 2: Benefits */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Benefits Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/benefits-home-massage-bali">
                      <span className="hover:text-primary cursor-pointer">
                        5 Benefits of Home Massage vs Spa Visits
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover why home massage beats spa visits: skip Bali traffic, save 2+ hours per session, enjoy complete privacy, 
                    and save 40-50% on costs. Real comparison data and testimonials from travelers who've tried both options.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Perfect for deciding between home massage and traditional spas. Includes time-savings calculator, price comparisons, 
                    and scenarios where each option works best. See why <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples massage</span></Link> at home 
                    offers exceptional value.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/benefits-home-massage-bali">
                      Read Benefits Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Article 3: Comparison */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Comparison Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/home-massage-vs-spa-bali">
                      <span className="hover:text-primary cursor-pointer">
                        Home Massage vs Spa: Which Should You Choose?
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive comparison of home massage versus spa visits in Bali. Compare costs, convenience, quality, privacy, 
                    and ambiance. Includes decision framework helping you choose the right option for your vacation needs.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Features real guest testimonials, side-by-side quality comparison, and scenarios for when to choose home massage 
                    versus spa facilities. Honest assessment covering pros and cons of each approach to massage therapy in Bali.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/home-massage-vs-spa-bali">
                      View Comparison <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Article 4: Location Guide */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Location Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/home-massage/blog/home-massage-seminyak-canggu">
                      <span className="hover:text-primary cursor-pointer">
                        Home Massage in Seminyak, Canggu & Ubud
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Location-specific guide to home massage in Bali's most popular areas. Learn about service availability, 
                    therapist travel times, area-specific pricing, and what makes home massage ideal for 
                    <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak villas</span></Link>, 
                    <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu surf scene</span></Link>, and 
                    <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud wellness retreats</span></Link>.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Covers same-day booking, traffic considerations, popular villa areas served, and treatment recommendations for each location. 
                    Essential reading if you're staying in Seminyak, Canggu, or Ubud.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/home-massage-seminyak-canggu">
                      Read Location Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Read Our Blog */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Our Home Massage Blog Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Knowledge</h3>
                <p className="text-muted-foreground">
                  Every home massage article draws from years of delivering professional home massage services throughout Bali. 
                  Our guides reflect real experiences with <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>, 
                  <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation home massage</span></Link>, and therapeutic treatments 
                  in <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, 
                  <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, and beyond.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Practical Information</h3>
                <p className="text-muted-foreground">
                  Our home massage blog provides actionable guidance you can use immediately. From understanding what to expect during 
                  home massage sessions to navigating booking logistics, each article solves real problems tourists face when choosing 
                  home massage services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Location-Specific Details</h3>
                <p className="text-muted-foreground">
                  Home massage in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link> differs from 
                  home massage in <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>. Our blog addresses 
                  these regional differences, helping you understand home massage availability, therapist specialties, and accommodation 
                  considerations for each area.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Safety & Standards</h3>
                <p className="text-muted-foreground">
                  Understanding <Link href="/home-massage/knowledge/safety"><span className="text-primary hover:underline">home massage safety standards</span></Link> and 
                  <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline"> what to expect</span></Link> protects your 
                  wellness experience. Our blog educates readers on professional home massage protocols, helping you distinguish quality 
                  home massage services from unregulated options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Home Massage Topics We Cover
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Service Types</h3>
                  <p className="text-muted-foreground mb-3">
                    Detailed guides on <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>, 
                    <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue home massage</span></Link>, 
                    <Link href="/home-massage/services/couples"><span className="text-primary hover:underline"> couples home massage</span></Link>, and 
                    <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation home massage</span></Link>. 
                    Learn which home massage type suits your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Location Guides</h3>
                  <p className="text-muted-foreground mb-3">
                    Area-specific home massage information for <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, 
                    <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu</span></Link>, 
                    <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, and 
                    <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link>. Discover how 
                    home massage service operates in each area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Booking Process</h3>
                  <p className="text-muted-foreground mb-3">
                    Complete home massage booking instructions, from initial WhatsApp contact through therapist arrival. Our 
                    <Link href="/home-massage/blog/how-to-book-home-massage"><span className="text-primary hover:underline"> booking guide</span></Link> eliminates 
                    confusion and ensures smooth home massage experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Safety & Expectations</h3>
                  <p className="text-muted-foreground mb-3">
                    Understanding <Link href="/home-massage/knowledge/safety"><span className="text-primary hover:underline">home massage safety</span></Link> and 
                    <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline"> expectations</span></Link> ensures 
                    comfortable, professional home massage sessions. Learn therapist standards and client boundaries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Comparisons & Benefits</h3>
                  <p className="text-muted-foreground mb-3">
                    Why choose home massage over spa visits? Our 
                    <Link href="/home-massage/blog/why-tourists-prefer-home-massage"><span className="text-primary hover:underline"> benefits guide</span></Link> compares 
                    home massage advantages including convenience, privacy, cost, and flexibility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Practical Tips</h3>
                  <p className="text-muted-foreground mb-3">
                    Home massage preparation, timing recommendations, communication strategies, and troubleshooting common issues. 
                    Practical advice ensuring successful home massage experiences throughout your Bali stay.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Home Massage?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Now that you understand home massage services, book your professional home massage treatment in Bali
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Home Massage Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/home-massage">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive Navigation */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Explore Home Massage Services & Locations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Services Column */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Home Massage Services</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/services/balinese">
                      → Balinese Home Massage
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/services/deep-tissue">
                      → Deep Tissue Home Massage
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/services/couples">
                      → Couples Home Massage
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/services/relaxation">
                      → Relaxation Home Massage
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Cities Column */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Home Massage by City</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/cities/ubud">
                      → Home Massage in Ubud
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/cities/canggu">
                      → Home Massage in Canggu
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/cities/seminyak">
                      → Home Massage in Seminyak
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/cities/sanur">
                      → Home Massage in Sanur
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Knowledge & Blog Column */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Learn More</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage">
                      → Home Massage Hub
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/knowledge/safety">
                      → Safety Standards
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/knowledge/what-to-expect">
                      → What to Expect
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/home-massage/blog">
                      → Home Massage Blog
                    </Link>
                  </Button>
                </div>
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
