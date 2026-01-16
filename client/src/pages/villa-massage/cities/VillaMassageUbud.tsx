import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';

export default function VillaMassageUbud() {
  const services = [
    { name: 'Balinese Massage', price: 'Rp 280,000', duration: '90 minutes', description: 'Traditional long-stroke technique' },
    { name: 'Deep Tissue Massage', price: 'Rp 320,000', duration: '90 minutes', description: 'Intensive muscle therapy' },
    { name: 'Couples Massage', price: 'Rp 520,000', duration: '90 minutes', description: 'Side-by-side treatment' },
    { name: 'Relaxation Massage', price: 'Rp 280,000', duration: '90 minutes', description: 'Gentle stress relief' },
    { name: 'Aromatherapy Massage', price: 'Rp 304,000', duration: '90 minutes', description: 'Essential oils therapy' },
    { name: 'Hot Stone Massage', price: 'Rp 360,000', duration: '90 minutes', description: 'Heated stone treatment' },
    { name: 'Prenatal Massage', price: 'Rp 336,000', duration: '90 minutes', description: 'Safe pregnancy massage' },
    { name: 'Thai Massage', price: 'Rp 304,000', duration: '90 minutes', description: 'Stretching and pressure points' },
    { name: 'Sports Massage', price: 'Rp 320,000', duration: '90 minutes', description: 'Athletic recovery therapy' },
    { name: 'Reflexology', price: 'Rp 240,000', duration: '60 minutes', description: 'Foot pressure point therapy' }
  ];

  return (
    <>
      <SEOHead 
        title="Villa Massage Ubud | Professional Service at Your Villa"
        description="Professional villa massage in Ubud. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-primary font-semibold">Ubud</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Ubud
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Experience professional villa massage in Ubud's tranquil rice terrace setting. Licensed therapists bring spa-quality treatments to your private villa.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Ubud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Ubud */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Ubud</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Ubud offers a unique opportunity to combine Bali's cultural heartland with the convenience of in-villa spa treatments. As you stay surrounded by emerald rice terraces, traditional temples, and lush jungle valleys, our professional therapists travel directly to your accommodation with everything needed for an authentic healing experience. Villa massage has become the preferred choice for visitors to Ubud who want to maximize their wellness retreat without sacrificing the comfort of their private space.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Ubud is renowned worldwide as a center for yoga, meditation, and holistic healing. Our villa massage service complements this wellness-focused atmosphere by bringing traditional Balinese techniques directly to where you're staying. Whether your villa overlooks the Campuhan Ridge, sits among the rice paddies of Tegallalang, or nestles in the jungle near the Monkey Forest, villa massage in Ubud allows you to enjoy professional treatments in harmony with the natural surroundings that make this area so special.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Ubud is particularly magical when enjoyed on an open-air pavilion or poolside terrace. The sound of tropical birdsong, the rustle of palm fronds, and the distant chanting from nearby temples create an ambiance that no spa can replicate. Our therapists arrive with professional massage tables, organic aromatherapy oils, and fresh linens, setting up your treatment space to maximize the natural beauty of your villa environment. Villa massage in Ubud isn't just a convenience—it's an immersive experience that connects you to the island's healing traditions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Many visitors choose villa massage in Ubud after active days of exploring temples, hiking through rice terraces, or practicing yoga. The flexibility of villa massage means you can schedule treatments around your activities rather than being constrained by spa operating hours. Early morning villa massage can prepare your body for a day of adventure, while evening sessions help you unwind and process the day's experiences. Our therapists understand the physical demands of Ubud's hilly terrain and tailor treatments accordingly.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Ubud is available across all neighborhoods, from the central area near the Royal Palace to outlying villages like Mas, Peliatan, and Penestanan. We serve guests staying in luxury wellness resorts, boutique guesthouses, and private villas alike. Same-day booking is available for villa massage in Ubud, making it easy to add professional treatments to your itinerary whenever the mood strikes. All our therapists are licensed professionals with extensive experience in Ubud's renowned spa industry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Ubud</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Complete range of villa massage treatments available throughout Ubud. All services include professional therapist, equipment, and organic oils.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-xl mb-2">{service.name}</h3>
                        <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Link href="/villa-massage/services">
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                      View Detailed Service Information
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Villa Massage in Ubud */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Ubud</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Authentic Ubud Setting</h3>
                      <p className="text-muted-foreground">Enjoy villa massage surrounded by rice terraces, jungle, and the spiritual energy that makes Ubud unique.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Licensed Professionals</h3>
                      <p className="text-muted-foreground">All villa massage therapists are certified and experienced in Ubud's renowned wellness industry.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Complete Privacy</h3>
                      <p className="text-muted-foreground">Villa massage provides intimate, private treatments in your own space without traveling to crowded spas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">Book villa massage in Ubud at times that suit your itinerary, with same-day appointments available.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Locations */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Villa Massage in Other Bali Locations</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/villa-massage/cities/seminyak"><a className="text-primary hover:underline">Villa Massage Seminyak</a></Link>
                  <Link href="/villa-massage/cities/canggu"><a className="text-primary hover:underline">Villa Massage Canggu</a></Link>
                  <Link href="/villa-massage/cities/sanur"><a className="text-primary hover:underline">Villa Massage Sanur</a></Link>
                  <Link href="/villa-massage/cities/nusa-dua"><a className="text-primary hover:underline">Villa Massage Nusa Dua</a></Link>
                  <Link href="/villa-massage/cities/uluwatu"><a className="text-primary hover:underline">Villa Massage Uluwatu</a></Link>
                  <Link href="/villa-massage/cities/jimbaran"><a className="text-primary hover:underline">Villa Massage Jimbaran</a></Link>
                  <Link href="/villa-massage/cities/kuta"><a className="text-primary hover:underline">Villa Massage Kuta</a></Link>
                  <Link href="/villa-massage/cities/legian"><a className="text-primary hover:underline">Villa Massage Legian</a></Link>
                  <Link href="/villa-massage/cities/pererenan"><a className="text-primary hover:underline">Villa Massage Pererenan</a></Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Ubud Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Professional therapists deliver spa-quality treatments to your villa throughout Ubud. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Ubud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-primary hover:bg-background/90 h-11 px-8"
                  >
                    Book on WhatsApp
                  </a>
                  <Link href="/villa-massage/blog">
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground h-11 px-8">
                      Read Villa Massage Blog
                    </a>
                  </Link>
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
