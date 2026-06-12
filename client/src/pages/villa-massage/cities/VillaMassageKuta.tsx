import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageKuta() {
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
        title="Villa Massage Kuta | Professional Service at Your Villa"
        description="Professional villa massage in Kuta. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Kuta</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Kuta
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Convenient villa massage in Kuta's vibrant center. Professional therapists bring spa treatments to your villa near the beach and airport.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Kuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Kuta */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Kuta</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Kuta brings professional wellness services to Bali's most accessible and energetic beach destination. Located minutes from the international airport, Kuta serves as the entry point for millions of visitors and remains a hub of activity with its famous surf beach, shopping streets, and vibrant nightlife. Our professional therapists deliver villa massage services throughout Kuta, from beachfront hotels to residential neighborhoods and guest accommodations in every corner of this bustling area. Villa massage in Kuta provides a peaceful sanctuary within the island's most dynamic tourist center.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Kuta is particularly valuable for combating travel fatigue and the overstimulation that can come from this busy environment. After long flights, jet lag, and the sensory intensity of Kuta's shopping districts and nightlife venues, villa massage offers essential restoration without requiring additional travel. Many travelers schedule villa massage for their first day in Bali to help bodies adjust to the new time zone and climate. Others book evening sessions after busy days of beach activities, shopping, and exploring. Villa massage in Kuta transforms standard hotel rooms and villa accommodations into personal wellness retreats.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Kuta serves diverse clientele, from budget travelers in guesthouses to families in beachfront hotels and surfers in shared villas. Our professional standards remain consistent regardless of accommodation type—every villa massage includes the same licensed therapists, professional equipment, organic oils, and expert techniques. This accessibility makes villa massage in Kuta a democratizing wellness option where quality treatments are available to everyone, not just luxury resort guests. Many first-time visitors to Bali experience their introduction to traditional massage through villa massage in Kuta.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our villa massage service covers all neighborhoods in Kuta, from the beachfront strip along Jalan Pantai Kuta to the shopping areas around Beachwalk and Discovery Mall, extending to quieter residential sections near Tuban and the airport. We work with guests in all types of accommodation, adapting to various space constraints while maintaining treatment quality. Kuta's dense urban environment means many properties have limited outdoor space, but villa massage works effectively in air-conditioned rooms, hotel suites, and any comfortable private area. Same-day booking is available throughout Kuta.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Kuta reflects practical wellness for modern travelers—efficient, accessible, and results-focused. Whether you need deep tissue work for surf-related soreness, relaxation massage after long flights, sports therapy for active beach holidays, or simply stress relief from Kuta's energetic atmosphere, villa massage delivers professional treatments where you're staying. The combination of convenience, consistent quality, and competitive pricing makes villa massage in Kuta essential for travelers who want to maintain wellness routines without sacrificing time or breaking budgets during their Bali adventures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Kuta</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Complete villa massage treatments available throughout Kuta. All services include professional therapist, equipment, and organic oils.
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

          {/* Why Choose Our Villa Massage in Kuta */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Kuta</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Airport Proximity</h3>
                      <p className="text-muted-foreground">Villa massage in Kuta perfect for arrival and departure days near the international airport.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Central Location</h3>
                      <p className="text-muted-foreground">Villa massage service throughout Kuta from beach hotels to residential neighborhoods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Accessible Pricing</h3>
                      <p className="text-muted-foreground">Professional villa massage at competitive rates suitable for all budgets.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Same-Day Booking</h3>
                      <p className="text-muted-foreground">Villa massage in Kuta available with flexible scheduling including same-day appointments.</p>
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
                  <Link href="/villa-massage/cities/jimbaran"><a className="text-primary hover:underline">Villa Massage Jimbaran</a></Link>
                  <Link href="/villa-massage/cities/legian"><a className="text-primary hover:underline">Villa Massage Legian</a></Link>
                  <Link href="/villa-massage/cities/pererenan"><a className="text-primary hover:underline">Villa Massage Pererenan</a></Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "Is villa massage popular with budget travelers staying in Kuta?",
              answer: "Yes! Villa massage in Kuta offers affordable spa quality perfect for budget-conscious travelers. Many guesthouses and shared villas in Kuta welcome villa massage services. Villa massage provides premium treatments at accessible prices that fit Kuta's backpacker-friendly atmosphere."
            },
            {
              question: "Can I book villa massage after arriving at Ngurah Rai Airport?",
              answer: "Absolutely! Villa massage in Kuta is convenient for immediate airport arrival recovery. We offer same-day villa massage booking for travelers landing at nearby Ngurah Rai Airport. Villa massage helps you recover from long flights without leaving your Kuta accommodation."
            },
            {
              question: "How does villa massage work with Kuta's busy nightlife schedule?",
              answer: "Villa massage in Kuta can be scheduled for late morning or afternoon before nightlife begins. Many partygoers book villa massage for hangover recovery and energy restoration. Villa massage helps you stay active through Kuta's famous party scene with strategic timing and rejuvenation."
            },
            {
              question: "Do villa massage therapists navigate Kuta's congested streets easily?",
              answer: "Yes! Villa massage therapists in Kuta know shortcuts through back alleys and side streets to avoid main road traffic. Our scooter-based villa massage delivery ensures reliable arrivals despite Kuta congestion. Villa massage service reaches every Kuta neighborhood efficiently."
            },
            {
              question: "Can surfing beginners book villa massage for Kuta Beach soreness?",
              answer: "Definitely! Villa massage in Kuta specializes in beginner surfer recovery from Kuta Beach lessons. Our villa massage therapists understand paddling fatigue and wipeout impact. Villa massage with sports therapy techniques helps surf school students recover faster between Kuta sessions."
            },
            {
              question: "What makes villa massage better than Kuta's street massage parlors?",
              answer: "Villa massage in Kuta provides private, hygienic, professional treatments away from street noise and pushy vendors. Unlike sidewalk massage shops, villa massage offers peaceful environment with licensed therapists. Villa massage eliminates Kuta's overwhelming street scene while delivering superior therapeutic value."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Kuta Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Professional therapists deliver convenient treatments to your villa throughout Kuta. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Kuta"
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
