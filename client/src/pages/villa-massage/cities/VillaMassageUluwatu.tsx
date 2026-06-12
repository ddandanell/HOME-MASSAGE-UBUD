import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageUluwatu() {
  const services = [
    { name: 'Balinese Massage', price: 'Rp 380,000', duration: '90 minutes', description: 'Traditional long-stroke technique' },
    { name: 'Deep Tissue Massage', price: 'Rp 380,000', duration: '90 minutes', description: 'Intensive muscle therapy' },
    { name: 'Couples Massage', price: 'Rp 550,000', duration: '90 minutes', description: 'Side-by-side treatment' },
    { name: 'Relaxation Massage', price: 'Rp 380,000', duration: '90 minutes', description: 'Gentle stress relief' },
    { name: 'Aromatherapy Massage', price: 'Rp 390,000', duration: '90 minutes', description: 'Essential oils therapy' },
    { name: 'Hot Stone Massage', price: 'Rp 390,000', duration: '90 minutes', description: 'Heated stone treatment' },
    { name: 'Prenatal Massage', price: 'Rp 390,000', duration: '90 minutes', description: 'Safe pregnancy massage' },
    { name: 'Thai Massage', price: 'Rp 390,000', duration: '90 minutes', description: 'Stretching and pressure points' },
    { name: 'Sports Massage', price: 'Rp 380,000', duration: '90 minutes', description: 'Athletic recovery therapy' },
    { name: 'Reflexology', price: 'Rp 380,000', duration: '60 minutes', description: 'Foot pressure point therapy' }
  ];

  return (
    <>
      <SEOHead 
        title="Villa Massage Uluwatu | Professional Service at Your Villa"
        description="Professional villa massage in Uluwatu. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Uluwatu</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Uluwatu
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Clifftop villa massage in Uluwatu's stunning ocean setting. Professional therapists bring spa treatments to your villa with panoramic views.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Uluwatu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Uluwatu */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Uluwatu</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Uluwatu offers a uniquely dramatic setting where limestone cliffs meet the Indian Ocean in one of Bali's most spectacular coastal regions. This southern peninsula is renowned for world-class surf breaks, clifftop venues with sunset views, and the iconic Uluwatu Temple perched above crashing waves. Our professional therapists bring spa-quality treatments directly to villas throughout Uluwatu, from the clifftop properties overlooking Padang Padang Beach to residential areas near Pecatu and Bingin. Villa massage in Uluwatu combines the convenience of in-villa service with surroundings that naturally inspire relaxation and awe.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Uluwatu is particularly magical when enjoyed on clifftop terraces or outdoor pavilions where the sound of waves echoes up from below and ocean breezes provide natural cooling. Many luxury villas in Uluwatu feature infinity pools that seem to merge with the horizon, outdoor living spaces with panoramic views, and architectural designs that maximize the spectacular setting. Villa massage treatments in these environments become more than therapeutic sessions—they're immersive experiences that connect body, mind, and nature. Our therapists arrive with professional equipment and organic oils, enhancing rather than competing with the natural beauty.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Uluwatu is especially popular with surfers who spend hours paddling through powerful swells at breaks like Uluwatu, Padang Padang, and Impossibles. The physical demands of surfing these challenging waves create specific patterns of muscle tension and fatigue that our sports massage and deep tissue specialists understand well. Many surfers schedule villa massage sessions for late afternoon after morning surf sessions, allowing time for post-treatment relaxation before sunset viewing at venues like Single Fin or Rock Bar. Villa massage in Uluwatu provides essential recovery that enables surfers to return to the water refreshed.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our villa massage service covers the entire Uluwatu area, from the northern neighborhoods near Dreamland Beach to the southern tip near the temple and extending inland to Pecatu Indah Resort and surrounding villages. We work with guests staying in clifftop luxury estates, surf villas near the beaches, boutique guesthouses, and resort properties throughout the peninsula. Same-day booking is available for villa massage in Uluwatu, making it easy to add professional treatments to your itinerary whenever muscle soreness, travel fatigue, or the simple desire for relaxation calls.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Uluwatu reflects the area's unique character—dramatic, natural, and connected to the raw power of the ocean. Whether you're recovering from surf sessions, unwinding after temple visits and cultural exploration, or simply seeking to enhance your clifftop villa experience with professional wellness treatments, villa massage in Uluwatu delivers expert therapy in one of Bali's most inspiring settings. The combination of skilled technique, quality products, and the spectacular Uluwatu environment creates wellness experiences that resonate long after your holiday ends.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Uluwatu</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Complete villa massage treatments available throughout Uluwatu. All services include professional therapist, equipment, and organic oils.
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

          {/* Why Choose Our Villa Massage in Uluwatu */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Uluwatu</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Clifftop Setting</h3>
                      <p className="text-muted-foreground">Villa massage with spectacular ocean views and natural sounds of waves on limestone cliffs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Surfer Recovery</h3>
                      <p className="text-muted-foreground">Villa massage therapists skilled in sports therapy for surf-related muscle tension.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Peninsula Coverage</h3>
                      <p className="text-muted-foreground">Villa massage service throughout Uluwatu from clifftop estates to beach neighborhoods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">Book villa massage in Uluwatu around surf sessions and sunset viewing with same-day availability.</p>
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
                  <Link href="/villa-massage/cities/canggu"><a className="text-primary hover:underline">Villa Massage Canggu</a></Link>
                  <Link href="/villa-massage/cities/sanur"><a className="text-primary hover:underline">Villa Massage Sanur</a></Link>
                  <Link href="/villa-massage/cities/nusa-dua"><a className="text-primary hover:underline">Villa Massage Nusa Dua</a></Link>
                  <Link href="/villa-massage/cities/jimbaran"><a className="text-primary hover:underline">Villa Massage Jimbaran</a></Link>
                  <Link href="/villa-massage/cities/kuta"><a className="text-primary hover:underline">Villa Massage Kuta</a></Link>
                  <Link href="/villa-massage/cities/legian"><a className="text-primary hover:underline">Villa Massage Legian</a></Link>
                  <Link href="/villa-massage/cities/pererenan"><a className="text-primary hover:underline">Villa Massage Pererenan</a></Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "Can villa massage therapists reach clifftop villas in Uluwatu?",
              answer: "Yes! Villa massage therapists in Uluwatu navigate steep cliff roads to reach spectacular ocean-view properties. Our villa massage service includes villas perched on Uluwatu's dramatic limestone cliffs. Villa massage brings professional treatments to even the most breathtaking elevated locations in Uluwatu."
            },
            {
              question: "Is villa massage available near Uluwatu's famous surf breaks?",
              answer: "Absolutely! Villa massage in Uluwatu serves surfers staying near Padang Padang, Bingin, Impossibles, and other breaks. Our villa massage therapists understand surf injuries and wave-riding fatigue. Villa massage provides essential recovery for surfers tackling Uluwatu's world-class reef breaks."
            },
            {
              question: "How does villa massage help with Uluwatu Temple visit fatigue?",
              answer: "Villa massage in Uluwatu offers perfect recovery after climbing temple stairs and exploring cliffside paths. Our villa massage therapists focus on leg and foot relief from temple walking. Villa massage helps you recover from cultural sightseeing while enjoying your clifftop villa views."
            },
            {
              question: "Can I book sunset villa massage overlooking Uluwatu coastline?",
              answer: "Definitely! Sunset villa massage in Uluwatu is magical on clifftop terraces with ocean panoramas. We time villa massage appointments to coincide with golden hour views over the Indian Ocean. Villa massage during Uluwatu sunsets creates unforgettable wellness experiences."
            },
            {
              question: "What makes villa massage ideal for Uluwatu's luxury villa market?",
              answer: "Villa massage in Uluwatu matches the area's ultra-premium villa standards with professional service and equipment. Our villa massage therapists are experienced with high-end properties and discerning guests. Villa massage enhances Uluwatu's luxury lifestyle with spa-quality treatments in private clifftop settings."
            },
            {
              question: "Do villa massage therapists know Uluwatu's winding roads and directions?",
              answer: "Yes! Villa massage therapists in Uluwatu are familiar with complex cliff road networks and villa directions. Our team knows every gang and villa location throughout Uluwatu's Pecatu area. Villa massage service ensures reliable arrivals despite Uluwatu's challenging navigation."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Uluwatu Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Professional therapists deliver clifftop treatments to your villa throughout Uluwatu. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Uluwatu"
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
