import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Check, AlertCircle, Users } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function HomeMassageSafety() {
  return (
    <>
      <SEOHead 
        title="Safety | Home Massage"
        description="Comprehensive home massage safety standards. Learn about therapist credentials, hygiene protocols, and how to identify professional home massage services. Call or WhatsApp to book."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Safety First</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Home Massage Safety Standards
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional protocols that make home massage safe, trustworthy, and comfortable
            </p>
          </div>
        </div>
      </section>

      <TableOfContents items={[
        { id: 'what-is-safety', title: 'What Safety Means in Home Massage' },
        { id: 'therapist-standards', title: 'Home Massage Therapist Standards' },
        { id: 'client-boundaries', title: 'Client Boundaries in Home Massage' },
        { id: 'normal-vs-concerning', title: 'Normal vs Concerning Behavior' },
        { id: 'why-safer', title: 'Why Home Massage Exceeds Spa Safety' },
      ]} />

      {/* Block 1: What safety means in home massage */}
      <section id="what-is-safety" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Safety Means in Home Massage
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Safety in home massage encompasses therapist verification, professional conduct, hygiene standards, and clear 
                communication protocols. When you book <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> or any 
                <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue home massage</span></Link>, you deserve confidence that the therapist 
                arriving at your <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud accommodation</span></Link> or <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak villa</span></Link> meets 
                rigorous professional standards.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our home massage safety framework protects both clients and therapists. Whether you choose <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link> or 
                <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline"> relaxation home massage</span></Link>, every session follows identical safety protocols. This consistency 
                means home massage in <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link> maintains the same standards as home massage in 
                <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link> or any other location.
              </p>
              <p className="text-lg text-muted-foreground">
                Understanding home massage safety helps you recognize professional service versus unregulated offerings. Our 
                <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline"> what to expect guide</span></Link> complements these safety standards, ensuring you know exactly how 
                professional home massage operates from booking through completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Therapist Standards */}
      <section id="therapist-standards" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Therapist Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Certification Verification</h3>
                      <p className="text-muted-foreground">
                        Every home massage therapist holds valid Indonesian massage certification. We verify credentials before 
                        any therapist delivers <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> or other services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Background Screening</h3>
                      <p className="text-muted-foreground">
                        All home massage practitioners undergo background checks. This applies whether providing <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link> in 
                        <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud</span></Link> or <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link> in <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Experience Requirements</h3>
                      <p className="text-muted-foreground">
                        Minimum 3 years professional experience required. Our home massage team serves clients from <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak resorts</span></Link> to 
                        <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur villas</span></Link> with proven expertise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Ongoing Training</h3>
                      <p className="text-muted-foreground">
                        Regular skill updates ensure quality. Whether delivering <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link> or therapeutic 
                        treatments, our home massage professionals maintain current expertise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Client Boundaries */}
      <section id="client-boundaries" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Client Boundaries in Home Massage
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Draping Protocol</h3>
                  <p className="text-muted-foreground">
                    Professional draping maintains modesty throughout every home massage session. This standard applies to all services, from 
                    <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline"> Balinese home massage</span></Link> to <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>, ensuring 
                    comfort whether you receive home massage in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link> or elsewhere.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Communication Guidelines</h3>
                  <p className="text-muted-foreground">
                    Clear communication before and during home massage prevents misunderstandings. Discuss pressure preferences for your 
                    <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline"> deep tissue home massage</span></Link> or timing concerns for your <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu villa</span></Link> appointment. 
                    Our <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">what to expect guide</span></Link> details typical interactions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Privacy Respect</h3>
                  <p className="text-muted-foreground">
                    Your home massage therapist respects your space completely. They arrive, set up, deliver treatment, then depart promptly. 
                    Whether providing <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link> in <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link> or 
                    <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline"> Sanur</span></Link>, professionalism defines every home massage interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: What is normal / not normal */}
      <section id="normal-vs-concerning" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Normal vs Concerning in Home Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">✓ Professional Home Massage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Therapist arrives with ID, equipment, and professional appearance for your home massage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Discussion of pressure and treatment areas before <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Consistent draping throughout every home massage session in any <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link> or <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link> location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Professional boundaries during <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link> or individual treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Clean linens and sanitized equipment for every home massage appointment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">✗ Inappropriate Behavior</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Arriving without proper identification or equipment for home massage service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Inappropriate suggestions or conduct during any home massage treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Inadequate draping or privacy violations during home massage sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Requesting payment changes or personal contact beyond home massage booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Reusing linens or using questionable hygiene in home massage delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Why this makes home massage safer than random spas */}
      <section id="why-safer" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Professional Home Massage Exceeds Random Spa Safety
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Reputable home massage services maintain stricter standards than many street-level spas. When you book <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link> through 
                verified providers, you access therapist profiles, verified credentials, and established reputation systems. Random spas 
                offering massage in <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link> or <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link> often lack this transparency.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Professional home massage creates accountability through booking systems, client reviews, and direct communication. Before 
                your <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link> or <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> arrives, you 
                know the therapist's name, credentials, and client history. This visibility exceeds anonymous spa environments where therapist 
                information remains unknown until treatment begins.
              </p>
              <p className="text-lg text-muted-foreground">
                The home massage model also empowers clients. You control the environment whether receiving treatment in your 
                <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline"> Ubud villa</span></Link> or <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu accommodation</span></Link>. Your partner, 
                family, or friends remain nearby if desired. This situational control makes home massage inherently safer than traveling to 
                unfamiliar spa locations, especially for solo travelers or women seeking <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link> or individual treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SpiderLinksBlock currentPage="/home-massage/knowledge/safety" />

      <BookingCTA />

      <HomeMassageFAQ questions={[
        {
          question: "How do I verify a home massage therapist is licensed?",
          answer: "Professional home massage services provide therapist credentials before arrival. Ask for certification numbers, years of experience, and client reviews. Legitimate home massage providers willingly share this information."
        },
        {
          question: "What safety equipment should a home massage therapist bring?",
          answer: "Expect clean linens, professional oils, sanitized massage tools, and proper identification. Home massage therapists should arrive fully equipped—you provide only clean space and basic amenities."
        },
        {
          question: "Are there background checks for home massage therapists?",
          answer: "Reputable home massage services conduct background screening on all therapists. This includes criminal checks, reference verification, and skills assessment before any home massage provider enters client accommodations."
        },
        {
          question: "What if I feel uncomfortable during home massage?",
          answer: "You can stop any home massage session at any time. Professional therapists respect boundaries and adjust based on your comfort. Your safety and comfort are the top priorities in home massage."
        },
        {
          question: "Is home massage safe for solo travelers?",
          answer: "Yes, when booking through verified providers. Home massage through reputable services includes therapist tracking, client communication protocols, and professional accountability that makes it safe for anyone."
        },
        {
          question: "What's the difference between spa massage and home massage safety?",
          answer: "Professional home massage maintains identical or superior safety standards to spas. The advantage of home massage is you control the environment while accessing verified, trackable therapists with transparent credentials."
        }
      ]} />

      {/* Soft CTA and extensive linking */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Safe, Professional Home Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                This is why many clients choose home massage instead of visiting random spas
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Safe Home Massage
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Explore Home Massage Services & Locations</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-muted-foreground">Home Massage Services:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/services/balinese">Balinese</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/services/deep-tissue">Deep Tissue</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/services/couples">Couples</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/services/relaxation">Relaxation</Link>
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-muted-foreground">Home Massage Cities:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/cities/ubud">Ubud</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/cities/canggu">Canggu</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/cities/seminyak">Seminyak</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/home-massage/cities/sanur">Sanur</Link>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-muted-foreground">More Information:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/home-massage">← All Home Massage</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/knowledge/what-to-expect">What to Expect</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/how-to-book-home-massage">Booking Guide</Link>
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
