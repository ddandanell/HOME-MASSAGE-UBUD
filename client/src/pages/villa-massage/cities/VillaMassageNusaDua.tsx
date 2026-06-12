import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageNusaDua() {
  const services = [
    { name: 'Balinese Massage', price: 'Rp 450,000', duration: '90 minutes', description: 'Traditional long-stroke technique' },
    { name: 'Deep Tissue Massage', price: 'Rp 540,000', duration: '90 minutes', description: 'Intensive muscle therapy' },
    { name: 'Couples Massage', price: 'Rp 900,000', duration: '90 minutes', description: 'Side-by-side treatment' },
    { name: 'Relaxation Massage', price: 'Rp 450,000', duration: '90 minutes', description: 'Gentle stress relief' },
    { name: 'Aromatherapy Massage', price: 'Rp 490,000', duration: '90 minutes', description: 'Essential oils therapy' },
    { name: 'Hot Stone Massage', price: 'Rp 590,000', duration: '90 minutes', description: 'Heated stone treatment' },
    { name: 'Prenatal Massage', price: 'Rp 490,000', duration: '90 minutes', description: 'Safe pregnancy massage' },
    { name: 'Thai Massage', price: 'Rp 550,000', duration: '90 minutes', description: 'Stretching and pressure points' },
    { name: 'Sports Massage', price: 'Rp 540,000', duration: '90 minutes', description: 'Athletic recovery therapy' },
    { name: 'Reflexology', price: 'Rp 380,000', duration: '60 minutes', description: 'Foot pressure point therapy' }
  ];

  return (
    <>
      <SEOHead 
        title="Villa Massage Nusa Dua | Professional Service at Your Villa"
        description="Professional villa massage in Nusa Dua. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Nusa Dua</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Nusa Dua
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Five-star villa massage in Nusa Dua's exclusive resort area. Professional therapists bring luxury spa treatments to your private villa.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Nusa%20Dua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Nusa Dua */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Nusa Dua</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Nusa Dua caters to Bali's most exclusive resort enclave, where pristine white-sand beaches, championship golf courses, and five-star hotels define the landscape. This purpose-built tourism area attracts discerning travelers who expect the highest levels of service and luxury. Our professional therapists bring spa-quality treatments directly to private villas throughout Nusa Dua, maintaining the premium standards this prestigious destination demands. Villa massage in Nusa Dua offers convenience without compromising on quality, allowing guests to enjoy world-class treatments in the privacy of their own accommodation.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Nusa Dua is characterized by attention to detail and premium service delivery. Many properties in this area feature magnificent outdoor spaces with ocean views, manicured gardens, and resort-style amenities. Our therapists arrive punctually with luxury linens and organic aromatherapy oils, setting up treatment spaces that rival the area's renowned hotel spas. Villa massage in Nusa Dua provides the ultimate in convenience for guests who prefer privacy over communal spa facilities, whether staying in a beachfront villa, a golf course residence, or a luxury property near the convention center.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Nusa Dua is particularly popular with couples celebrating special occasions, families seeking coordinated treatments, and business travelers recovering from conferences at the Bali International Convention Centre. The flexibility of villa massage allows treatments to be scheduled around golf tee times, beach activities, and dining reservations at the area's numerous upscale restaurants. Evening villa massage sessions are especially sought-after, providing relaxation after days spent enjoying Nusa Dua's protected beaches, water sports facilities, and cultural attractions like the Museum Pasifika.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our villa massage service covers the entire Nusa Dua peninsula, from the exclusive Nusa Dua Resort Collection hotels to private villas in surrounding neighborhoods including Sawangan and Benoa. We work with guests staying in standalone luxury villas, resort residences, and boutique properties throughout the area. All our therapists are experienced professionals who have worked in Nusa Dua's premium spa facilities and understand the service expectations of international luxury travelers. Same-day booking is available for villa massage in Nusa Dua, though advance reservation is recommended during peak holiday periods.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Nusa Dua represents a seamless extension of the area's luxury lifestyle, combining professional expertise with the convenience of in-villa service. Our pricing remains consistent across all Bali locations, making villa massage in Nusa Dua exceptional value compared to the premium rates charged by resort spas. Whether you're seeking traditional Balinese massage, deep tissue therapy for golf-related muscle tension, couples treatments for anniversaries, or prenatal massage in a safe and comfortable environment, villa massage in Nusa Dua delivers five-star results in the privacy of your own space.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Nusa Dua</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Luxury villa massage treatments available throughout Nusa Dua. All services include professional therapist, equipment, and premium oils.
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

          {/* Why Choose Our Villa Massage in Nusa Dua */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Nusa Dua</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Luxury Standards</h3>
                      <p className="text-muted-foreground">Villa massage therapists trained to meet Nusa Dua's five-star service expectations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Exclusive Privacy</h3>
                      <p className="text-muted-foreground">Enjoy villa massage in your private space without traveling to resort spas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Premium Equipment</h3>
                      <p className="text-muted-foreground">Premium organic luxury oils and fresh linens for every villa massage.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">Book villa massage in Nusa Dua around golf, beach, and dining plans with same-day availability.</p>
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
                  <Link href="/villa-massage/cities/uluwatu"><a className="text-primary hover:underline">Villa Massage Uluwatu</a></Link>
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
              question: "Do resort villas in Nusa Dua allow outside villa massage services?",
              answer: "Most private villas in Nusa Dua welcome villa massage services. While integrated resort compounds may have restrictions, standalone villa rentals and villa complexes fully accommodate villa massage therapists. We coordinate villa massage access with security and property management for seamless service in Nusa Dua."
            },
            {
              question: "Can I book villa massage near Nusa Dua's gated communities?",
              answer: "Yes! Villa massage service covers all Nusa Dua gated communities and villa estates. Our therapists are familiar with villa massage protocol for security checkpoints and property regulations. Villa massage appointments in Nusa Dua include coordination with villa staff for smooth, discreet arrivals."
            },
            {
              question: "Is villa massage available for golf resort villas in Nusa Dua?",
              answer: "Absolutely! Villa massage in Nusa Dua is popular with golf villa guests needing sports recovery. Our villa massage therapists specialize in golf-related tension relief for shoulders, back, and legs. Villa massage sessions can be scheduled after morning tee times for optimal relaxation."
            },
            {
              question: "How does villa massage work with Nusa Dua's luxury villa standards?",
              answer: "Villa massage service in Nusa Dua maintains the same luxury standards as premium resort spas. Our villa massage therapists bring high-end equipment, premium oils, and five-star service directly to your villa. Villa massage in Nusa Dua matches the area's upscale expectations."
            },
            {
              question: "Can families book multiple villa massage sessions for MICE events?",
              answer: "Definitely! Villa massage in Nusa Dua serves corporate groups and conference attendees at villa properties. We provide multiple therapists for simultaneous villa massage treatments at meetings or incentive group villas. Villa massage is an excellent addition to Nusa Dua's MICE offerings."
            },
            {
              question: "What makes beachfront villa massage special in Nusa Dua?",
              answer: "Beachfront villa massage in Nusa Dua combines pristine white sand beaches with private villa comfort. Many villas have beachside pavilions perfect for villa massage with ocean views and breezes. Villa massage on Nusa Dua Beach offers unmatched tranquility in Bali's most exclusive coastal area."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Nusa Dua Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Five-star therapists deliver luxury treatments to your villa throughout Nusa Dua. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Nusa%20Dua"
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
