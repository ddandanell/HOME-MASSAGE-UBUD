import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';

export default function VillaMassageCanggu() {
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
        title="Villa Massage Canggu | Professional Service at Your Villa"
        description="Professional villa massage in Canggu. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Canggu</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Canggu
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional villa massage in Canggu's vibrant surf community. Licensed therapists bring spa treatments to your villa after days at the beach.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Canggu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Canggu */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Canggu</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Canggu has become essential for the area's active community of surfers, digital nomads, and wellness enthusiasts. This coastal village has transformed into one of Bali's most dynamic destinations, known for world-class surf breaks, trendy cafes, and a laid-back lifestyle. Our professional therapists bring spa-quality treatments directly to your villa, whether you're staying near Echo Beach, in the rice fields of Padonan, or close to the shops and restaurants of Batu Bolong. Villa massage in Canggu provides the perfect recovery solution after long surf sessions, yoga classes, or days exploring the area's vibrant scene.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Canggu is particularly valuable for surfers dealing with shoulder tension, back strain, and muscle fatigue from hours in the water. Our therapists specialize in sports massage and deep tissue work that targets the specific muscle groups used in surfing. Whether you need pre-surf preparation to warm up muscles or post-session recovery to prevent soreness, villa massage in Canggu can be scheduled around the tides and swell conditions that dictate daily routines. This flexibility makes villa massage the ideal wellness solution for the active Canggu lifestyle.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Canggu serves all neighborhoods in this rapidly growing area, from the coastal strip along Echo Beach and Batu Bolong to the inland rice field communities of Tumbak Bayuh and Padonan. Many villas in Canggu feature beautiful outdoor spaces with garden views, rooftop terraces, or poolside pavilions where villa massage takes on an extra dimension of relaxation. Our therapists arrive with professional massage tables, organic aromatherapy oils, and all necessary equipment, transforming your chosen space into a private wellness sanctuary. Same-day booking is available throughout Canggu.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The digital nomad community in Canggu particularly appreciates villa massage for addressing the physical challenges of laptop work combined with an active lifestyle. Many remote workers spend mornings surfing or practicing yoga, afternoons working from cafes or co-working spaces, and evenings exploring the social scene. Villa massage provides essential relief from this combination of physical activity and desk work, helping prevent the chronic tension that can develop from repetitive movements and poor posture. Evening villa massage sessions are especially popular for unwinding after busy days.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Canggu reflects the area's overall approach to wellness—accessible, unpretentious, and integrated into daily life rather than being a special occasion luxury. Our service caters to everyone from budget-conscious backpackers sharing villa accommodations to families renting large properties and couples staying in boutique guesthouses. All treatments maintain the same professional standards regardless of accommodation type. The combination of expert technique, quality products, and the comfort of your own space makes villa massage in Canggu an essential part of the local experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Canggu</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Complete villa massage treatments available throughout Canggu. All services include professional therapist, equipment, and organic oils.
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

          {/* Why Choose Our Villa Massage in Canggu */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Canggu</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Surfer Recovery</h3>
                      <p className="text-muted-foreground">Villa massage therapists skilled in sports recovery for surf-related muscle fatigue and tension.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Timing</h3>
                      <p className="text-muted-foreground">Book villa massage in Canggu around surf sessions and work schedules with same-day availability.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Area-Wide Service</h3>
                      <p className="text-muted-foreground">Villa massage available from Echo Beach to Pererenan throughout all Canggu neighborhoods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Professional Quality</h3>
                      <p className="text-muted-foreground">Licensed therapists bring spa-standard treatments to your villa at competitive prices.</p>
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
                  <Link href="/villa-massage/cities/ubud"><a className="text-primary hover:underline">Villa Massage Ubud</a></Link>
                  <Link href="/villa-massage/cities/seminyak"><a className="text-primary hover:underline">Villa Massage Seminyak</a></Link>
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
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Canggu Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Professional therapists deliver recovery treatments to your villa throughout Canggu. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Canggu"
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
