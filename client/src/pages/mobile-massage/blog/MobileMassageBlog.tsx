import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function MobileMassageBlog() {
  return (
    <>
      <SEOHead 
        title="Mobile Massage Blog | Expert Guides & Tips"
        description="Complete guides about mobile massage in Bali. Learn everything about booking, benefits, safety, and choosing the right mobile massage service."
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
              <span className="text-lg font-semibold text-primary">Mobile Massage Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Massage Guides & Resources
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Everything you need to know about professional mobile massage services in Bali
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured Mobile Massage Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1: What Is Mobile Massage */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Essential Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/mobile-massage/blog/what-is-mobile-massage">
                      <span className="hover:text-primary cursor-pointer">
                        What Is Mobile Massage?
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete introduction to mobile massage services. Discover what mobile massage means, how it works, and why tourists 
                    across <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, 
                    <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu</span></Link>, and 
                    <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link> choose 
                    mobile massage over traditional spas.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Learn about different mobile massage types including <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link>, 
                    <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue mobile massage</span></Link>, and more. 
                    Understand common myths and when mobile massage is the best choice for your Bali vacation.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/what-is-mobile-massage">
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
                    <Link href="/mobile-massage/blog/why-tourists-prefer-mobile-massage">
                      <span className="hover:text-primary cursor-pointer">
                        Why Tourists Prefer Mobile Massage
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the 6 major reasons travelers choose mobile massage over spa visits. From convenience and privacy to cost 
                    savings and flexibility, learn why mobile massage has become the preferred option for visitors in 
                    <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link> and throughout Bali.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Real testimonials from couples enjoying <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link>, 
                    solo travelers booking <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link>, 
                    and active guests choosing therapeutic treatments. Plus cost comparisons showing mobile massage value.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/why-tourists-prefer-mobile-massage">
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
                    <Link href="/mobile-massage/blog/how-to-book-mobile-massage">
                      <span className="hover:text-primary cursor-pointer">
                        How to Book Mobile Massage
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Step-by-step guide to booking mobile massage in Bali. Learn the complete process from initial contact to therapist 
                    arrival, what information to provide, and how to prepare your accommodation for mobile massage service.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Covers timing tips, communication guidelines, payment methods, and troubleshooting common issues. Whether booking 
                    <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline"> Balinese mobile massage</span></Link> in 
                    <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud</span></Link> or 
                    <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue mobile massage</span></Link> elsewhere, 
                    this guide ensures smooth booking.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/how-to-book-mobile-massage">
                      View Booking Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Articles Row */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              {/* Article 4: Mobile Massage vs Spa */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Comparison Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/mobile-massage/blog/mobile-massage-vs-spa">
                      <span className="hover:text-primary cursor-pointer">
                        Mobile Massage vs Spa Massage
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive comparison between mobile massage and spa massage. Discover differences in convenience, cost, privacy, 
                    quality, and flexibility to make the best choice for your Bali wellness experience.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/mobile-massage-vs-spa">
                      Read Comparison <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Article 5: Is Mobile Massage Safe */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Safety Guide</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/mobile-massage/blog/is-mobile-massage-safe">
                      <span className="hover:text-primary cursor-pointer">
                        Is Mobile Massage Safe?
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Everything about mobile massage safety standards, therapist verification, red flags to watch for, and how professional 
                    mobile massage services protect clients. Essential reading before your first booking.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/is-mobile-massage-safe">
                      Read Safety Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Read Our Blog */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Our Mobile Massage Blog Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Knowledge</h3>
                <p className="text-muted-foreground">
                  Every mobile massage article draws from years of delivering professional mobile massage services throughout Bali. 
                  Our guides reflect real experiences with <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link>, 
                  <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation mobile massage</span></Link>, and therapeutic treatments 
                  in <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, 
                  <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, and beyond.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Practical Information</h3>
                <p className="text-muted-foreground">
                  Our mobile massage blog provides actionable guidance you can use immediately. From understanding what to expect during 
                  mobile massage sessions to navigating booking logistics, each article solves real problems tourists face when choosing 
                  mobile massage services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Location-Specific Details</h3>
                <p className="text-muted-foreground">
                  Home massage in <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link> differs from 
                  mobile massage in <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>. Our blog addresses 
                  these regional differences, helping you understand mobile massage availability, therapist specialties, and accommodation 
                  considerations for each area.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Safety & Standards</h3>
                <p className="text-muted-foreground">
                  Understanding <Link href="/mobile-massage/knowledge/safety"><span className="text-primary hover:underline">mobile massage safety standards</span></Link> and 
                  <Link href="/mobile-massage/knowledge/what-to-expect"><span className="text-primary hover:underline"> what to expect</span></Link> protects your 
                  wellness experience. Our blog educates readers on professional mobile massage protocols, helping you distinguish quality 
                  mobile massage services from unregulated options.
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
              Mobile Massage Topics We Cover
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Service Types</h3>
                  <p className="text-muted-foreground mb-3">
                    Detailed guides on <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link>, 
                    <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue mobile massage</span></Link>, 
                    <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline"> couples mobile massage</span></Link>, and 
                    <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation mobile massage</span></Link>. 
                    Learn which mobile massage type suits your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Location Guides</h3>
                  <p className="text-muted-foreground mb-3">
                    Area-specific mobile massage information for <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, 
                    <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline"> Canggu</span></Link>, 
                    <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline"> Seminyak</span></Link>, and 
                    <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link>. Discover how 
                    mobile massage service operates in each area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Booking Process</h3>
                  <p className="text-muted-foreground mb-3">
                    Complete mobile massage booking instructions, from initial WhatsApp contact through therapist arrival. Our 
                    <Link href="/mobile-massage/blog/how-to-book-mobile-massage"><span className="text-primary hover:underline"> booking guide</span></Link> eliminates 
                    confusion and ensures smooth mobile massage experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Safety & Expectations</h3>
                  <p className="text-muted-foreground mb-3">
                    Understanding <Link href="/mobile-massage/knowledge/safety"><span className="text-primary hover:underline">mobile massage safety</span></Link> and 
                    <Link href="/mobile-massage/knowledge/what-to-expect"><span className="text-primary hover:underline"> expectations</span></Link> ensures 
                    comfortable, professional mobile massage sessions. Learn therapist standards and client boundaries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Comparisons & Benefits</h3>
                  <p className="text-muted-foreground mb-3">
                    Why choose mobile massage over spa visits? Our 
                    <Link href="/mobile-massage/blog/why-tourists-prefer-mobile-massage"><span className="text-primary hover:underline"> benefits guide</span></Link> compares 
                    mobile massage advantages including convenience, privacy, cost, and flexibility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Practical Tips</h3>
                  <p className="text-muted-foreground mb-3">
                    Home massage preparation, timing recommendations, communication strategies, and troubleshooting common issues. 
                    Practical advice ensuring successful mobile massage experiences throughout your Bali stay.
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
              Ready to Experience Mobile Massage?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Now that you understand mobile massage services, book your professional mobile massage treatment in Bali
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Mobile Massage Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/mobile-massage">
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
              Explore Mobile Massage Services & Locations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Services Column */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Mobile Massage Services</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/services/balinese">
                      → Balinese Mobile Massage
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/services/deep-tissue">
                      → Deep Tissue Mobile Massage
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/services/couples">
                      → Couples Mobile Massage
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/services/relaxation">
                      → Relaxation Mobile Massage
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Cities Column */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Mobile Massage by City</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/cities/ubud">
                      → Mobile Massage in Ubud
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/cities/canggu">
                      → Mobile Massage in Canggu
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/cities/seminyak">
                      → Mobile Massage in Seminyak
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/cities/sanur">
                      → Mobile Massage in Sanur
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Knowledge & Blog Column */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Learn More</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage">
                      → Mobile Massage Hub
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/knowledge/safety">
                      → Safety Standards
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/knowledge/what-to-expect">
                      → What to Expect
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/mobile-massage/blog">
                      → Mobile Massage Blog
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
