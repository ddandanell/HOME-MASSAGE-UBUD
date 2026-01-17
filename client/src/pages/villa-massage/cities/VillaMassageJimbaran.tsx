import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageJimbaran() {
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
        title="Villa Massage Jimbaran | Professional Service at Your Villa"
        description="Professional villa massage in Jimbaran. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Jimbaran</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Jimbaran
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Beachfront villa massage in Jimbaran's serene bay setting. Professional therapists bring spa treatments to your villa near famous seafood restaurants.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Jimbaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Jimbaran */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Jimbaran</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Jimbaran brings professional spa treatments to one of Bali's most charming beachside communities, famous for its curved bay, fresh seafood dining, and spectacular sunsets. This former fishing village has evolved into a sophisticated yet relaxed destination that attracts families, couples, and travelers seeking a quieter alternative to busier beach areas. Our professional therapists deliver villa massage services throughout Jimbaran, from beachfront properties along the golden sand to hillside villas with ocean views and residential neighborhoods near the airport. Villa massage in Jimbaran combines convenience with the peaceful atmosphere this special area provides.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Jimbaran is enhanced by this location's natural tranquility and beauty. Many properties feature gardens filled with frangipani and bougainvillea, outdoor living spaces with sea breezes, and pools where the sound of waves provides a soothing backdrop. Villa massage treatments enjoyed on open-air pavilions or beachfront terraces connect guests to Jimbaran's essence—unhurried, authentic, and naturally healing. Our therapists arrive with professional massage tables, luxury linens, and organic aromatherapy oils, creating spa-quality experiences without requiring travel to commercial facilities.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Jimbaran is particularly popular in the evening hours, with many guests scheduling treatments after watching the sunset from the beach or enjoying early dinners at the famous seafood restaurants that line the shore. The combination of fresh ocean air, the day's accumulated warmth, and professional massage creates profound relaxation. Couples massage is especially sought-after in Jimbaran, where the romantic atmosphere of candlelit beach dining extends naturally to shared villa massage experiences. Many couples celebrate anniversaries and special occasions with villa massage followed by sunset seafood dinners.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our villa massage service covers all neighborhoods in Jimbaran, from the northern beachfront near Kedonganan to the southern sections near the Four Seasons and extending inland to residential areas near Uluwatu Street. We work with guests staying in luxury beachfront resorts, private villas, boutique hotels, and guesthouses throughout the area. Jimbaran's proximity to the airport makes villa massage especially convenient for travelers arriving or departing—scheduling treatments for arrival day helps combat jet lag, while pre-departure sessions ensure you leave Bali completely relaxed. Same-day booking is available throughout Jimbaran.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Jimbaran reflects the area's overall character—warm, welcoming, and focused on authentic experiences rather than commercial tourism. Whether you need deep tissue work after long flights, relaxation massage to complement beach holidays, prenatal care for expectant mothers, or sports therapy for active travelers, villa massage in Jimbaran delivers professional results in settings that naturally enhance wellness. The combination of skilled therapists, quality products, and Jimbaran's inherently peaceful atmosphere creates treatments that address both physical tension and mental stress.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Jimbaran</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Complete villa massage treatments available throughout Jimbaran. All services include professional therapist, equipment, and organic oils.
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

          {/* Why Choose Our Villa Massage in Jimbaran */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Jimbaran</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Beachside Serenity</h3>
                      <p className="text-muted-foreground">Villa massage in Jimbaran's peaceful bay setting with natural ocean sounds and breezes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Airport Convenience</h3>
                      <p className="text-muted-foreground">Villa massage perfect for arrival and departure days with Jimbaran's proximity to the airport.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Sunset Setting</h3>
                      <p className="text-muted-foreground">Evening villa massage complementing Jimbaran's famous sunset and seafood dining experiences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Professional Quality</h3>
                      <p className="text-muted-foreground">Licensed therapists deliver villa massage with expertise and authentic Balinese technique.</p>
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
                  <Link href="/villa-massage/cities/uluwatu"><a className="text-primary hover:underline">Villa Massage Uluwatu</a></Link>
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
              question: "Can I book villa massage before sunset dinner on Jimbaran Beach?",
              answer: "Yes! Villa massage in Jimbaran perfectly complements beachfront dining plans. Our villa massage sessions can be timed so you finish relaxed and refreshed before heading to famous Jimbaran seafood restaurants. Villa massage therapists know how to schedule around sunset dinner reservations."
            },
            {
              question: "Is villa massage available near Jimbaran's fish market area?",
              answer: "Absolutely! Villa massage service covers all Jimbaran neighborhoods from the fish market to hillside villa estates. Our therapists bring villa massage to beachside properties and elevated villas with bay views. Villa massage in Jimbaran reaches every location in this scenic fishing village."
            },
            {
              question: "How does villa massage help with Bali airport arrival fatigue?",
              answer: "Villa massage in Jimbaran is ideal for airport recovery since Jimbaran is closest to Ngurah Rai Airport. Many travelers book villa massage upon arrival to ease long-flight stiffness and jet lag. Villa massage helps you transition smoothly into vacation mode in your Jimbaran villa."
            },
            {
              question: "Can villa massage therapists reach hilltop villas in Jimbaran?",
              answer: "Yes! Villa massage therapists in Jimbaran navigate steep hill roads to reach clifftop properties with spectacular views. Our villa massage service includes villas on Jimbaran's ridges overlooking the bay. Villa massage brings spa treatments to even the most elevated locations in Jimbaran."
            },
            {
              question: "What's the best time for villa massage in Jimbaran's hot climate?",
              answer: "Late afternoon villa massage in Jimbaran is most popular when temperatures cool and sea breezes strengthen. Many guests enjoy villa massage during the golden hour before sunset. Evening villa massage in Jimbaran provides perfect relaxation after beach time and before dinner."
            },
            {
              question: "Do villa massage therapists understand local fishing village schedules?",
              answer: "Yes! Villa massage service in Jimbaran respects the peaceful fishing village atmosphere and timing. Our therapists schedule villa massage around local routines and villa neighborhood quiet times. Villa massage in Jimbaran harmonizes with the area's traditional coastal lifestyle."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Jimbaran Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Professional therapists deliver beachside treatments to your villa throughout Jimbaran. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Jimbaran"
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
