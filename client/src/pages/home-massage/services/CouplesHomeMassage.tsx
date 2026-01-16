import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';

export default function CouplesHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Couples Home Massage | Side-by-Side Massage at Your Villa"
        description="Romantic couples home massage experience at your accommodation. Two therapists deliver synchronized treatments. Perfect for honeymoons and romantic getaways."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Couples Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Side-by-side relaxation delivered as romantic home massage experience
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book This Home Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Couples Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Couples home massage brings two professional therapists to your villa for synchronized side-by-side treatments. 
                This romantic home massage service transforms your private space into an intimate spa retreat. You and your 
                partner enjoy simultaneous massages in the same room, creating a shared wellness experience without leaving 
                your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our couples home massage includes two massage tables, coordinated aromatherapy, and calming music to create 
                spa ambiance. Both therapists work in harmony, matching rhythm and pressure so you experience relaxation 
                together. This home massage format strengthens connection while delivering professional therapeutic benefits.
              </p>
              <p className="text-lg text-muted-foreground">
                Each couples home massage can be customized with different techniques for each partner. One may prefer deep 
                tissue while the other chooses Balinese relaxation. Our home massage service accommodates individual preferences 
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
              Who Benefits from Couples Home Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Honeymooners</h3>
                  <p className="text-muted-foreground">
                    Create romantic memories with intimate couples home massage in your honeymoon villa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Anniversary Celebrations</h3>
                  <p className="text-muted-foreground">
                    Mark special occasions with luxury couples home massage without leaving your retreat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Busy Couples</h3>
                  <p className="text-muted-foreground">
                    Reconnect through shared home massage experience that fits your vacation schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Privacy Seekers</h3>
                  <p className="text-muted-foreground">
                    Enjoy intimate couples home massage away from public spa environments.
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
              Couples Home Massage Pricing
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
                    One hour couples home massage with two therapists
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
                    Extended couples home massage for complete relaxation together
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
                    Luxury couples home massage spa ritual for special occasions
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
              Why Couples Home Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Privacy</h3>
                  <p className="text-muted-foreground">
                    Couples home massage in your own villa means absolute intimacy without other spa guests nearby.
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
                    Continue your couples home massage experience with champagne, music, or rest in your own romantic setting.
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
                    Book couples home massage at your convenience without coordinating spa appointments or transport.
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
                    Set your preferred lighting, temperature, and atmosphere for couples home massage in familiar surroundings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Couples Home Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Romantic side-by-side home massage experience delivered to your villa
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book This Home Massage
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Home Massage Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage">
                    ← All Home Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/services/relaxation">
                    Relaxation Home Massage →
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/cities/seminyak">
                    Home Massage in Seminyak
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage/knowledge/safety">
                    Safety Standards
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/blog/how-to-book-home-massage">
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
