import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function CouplesMobileMassage() {
  return (
    <>
      <SEOHead 
        title="Couples Mobile Massage | Side-by-Side Massage at Your Villa"
        description="Romantic couples mobile massage experience at your accommodation. Two therapists deliver synchronized treatments. Perfect for honeymoons and romantic getaways."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Couples Mobile Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Side-by-side relaxation delivered as romantic mobile massage experience
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book This Mobile Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Couples Mobile Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Couples mobile massage brings two professional therapists to your villa for synchronized side-by-side treatments. 
                This romantic mobile massage service transforms your private space into an intimate spa retreat. You and your 
                partner enjoy simultaneous massages in the same room, creating a shared wellness experience without leaving 
                your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our couples mobile massage includes coordinated aromatherapy and calming music to create
                spa ambiance. Both therapists work in harmony, matching rhythm and pressure so you experience relaxation 
                together. This mobile massage format strengthens connection while delivering professional therapeutic benefits.
              </p>
              <p className="text-lg text-muted-foreground">
                Each couples mobile massage can be customized with different techniques for each partner. One may prefer deep 
                tissue while the other chooses Balinese relaxation. Our mobile massage service accommodates individual preferences 
                within the couples experience, ensuring both receive their ideal treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Couples Mobile Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Honeymooners</h3>
                  <p className="text-muted-foreground">
                    Create romantic memories with intimate couples mobile massage in your honeymoon villa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Anniversary Celebrations</h3>
                  <p className="text-muted-foreground">
                    Mark special occasions with luxury couples mobile massage without leaving your retreat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Busy Couples</h3>
                  <p className="text-muted-foreground">
                    Reconnect through shared mobile massage experience that fits your vacation schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Privacy Seekers</h3>
                  <p className="text-muted-foreground">
                    Enjoy intimate couples mobile massage away from public spa environments.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Couples Mobile Massage Pricing
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
                    <span className="text-2xl font-bold">Rp 480,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    One hour couples mobile massage with two therapists
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
                    <span className="text-2xl font-bold">Rp 720,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Extended couples mobile massage for complete relaxation together
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
                    <span className="text-2xl font-bold">Rp 960,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Luxury couples mobile massage spa ritual for special occasions
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
              Why Couples Mobile Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Privacy</h3>
                  <p className="text-muted-foreground">
                    Couples mobile massage in your own villa means absolute intimacy without other spa guests nearby.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Romantic Continuity</h3>
                  <p className="text-muted-foreground">
                    Continue your couples mobile massage experience with champagne, music, or rest in your own romantic setting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Scheduling Stress</h3>
                  <p className="text-muted-foreground">
                    Book couples mobile massage at your convenience without coordinating spa appointments or transport.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Your Own Ambiance</h3>
                  <p className="text-muted-foreground">
                    Set your preferred lighting, temperature, and atmosphere for couples mobile massage in familiar surroundings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MobileMassageFAQ items={[
        {
          question: "How does couples mobile massage work with two therapists?",
          answer: "Couples mobile massage sends two professional therapists to your location. The therapists work simultaneously in synchronized rhythm, creating a shared relaxation experience. Each partner receives full attention from their own dedicated mobile massage therapist while enjoying the experience together in your private villa space."
        },
        {
          question: "Can we customize pressure and styles for each partner during couples mobile massage?",
          answer: "Absolutely! In couples mobile massage, each therapist adapts independently to their client's preferences. One partner might prefer deep tissue mobile massage while the other chooses gentle relaxation. This flexibility makes couples mobile massage perfect for partners with different massage preferences, ensuring both enjoy optimal mobile massage experience simultaneously."
        },
        {
          question: "What space is needed for couples mobile massage setup?",
          answer: "Couples mobile massage requires a comfortable space for two people side-by-side (approximately 2m x 3m total). Most villa bedrooms, living rooms, or covered outdoor areas work perfectly for couples mobile massage. Our therapists can assess your space via photos before arrival if you're unsure."
        },
        {
          question: "Is couples mobile massage suitable for honeymoons and anniversaries?",
          answer: "Yes! Couples mobile massage is extremely popular for romantic occasions. We can enhance your couples mobile massage with aromatherapy candles, rose petals, and romantic music. The intimate privacy of mobile massage in your villa creates perfect honeymoon or anniversary experience without leaving your romantic accommodation."
        },
        {
          question: "How much does couples mobile massage cost compared to individual sessions?",
          answer: "Couples mobile massage is priced per person, essentially two individual mobile massage sessions occurring simultaneously. There's no significant premium for couples mobile massage service. The value comes from sharing the relaxation experience together and having professional mobile massage delivered to your private space with complete romantic setup."
        },
        {
          question: "Can we book couples mobile massage for same-day appointments?",
          answer: "Couples mobile massage often has same-day availability, though we recommend booking 24 hours ahead when possible since it requires coordinating two therapists' schedules. Contact us via WhatsApp in the morning for best same-day couples mobile massage availability, especially during peak seasons when mobile massage appointments fill quickly."
        }
      ]} />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Couples Mobile Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Romantic side-by-side mobile massage experience delivered to your villa
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book This Mobile Massage
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Mobile Massage Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage">
                    ← All Mobile Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/services/relaxation">
                    Relaxation Mobile Massage →
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/cities/seminyak">
                    Mobile Massage in Seminyak
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/knowledge/safety">
                    Safety Standards
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mobile-massage/blog/how-to-book-mobile-massage">
                    Booking Guide
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
