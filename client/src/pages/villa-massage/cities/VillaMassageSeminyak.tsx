import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageSeminyak() {
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
        title="Villa Massage Seminyak | Professional Service at Your Villa"
        description="Professional villa massage in Seminyak. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Seminyak</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Seminyak
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Luxury villa massage in Seminyak's most sophisticated beachside destination. Professional therapists bring premium spa treatments to your private villa.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Seminyak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Seminyak */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Seminyak</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Seminyak represents the pinnacle of luxury wellness experiences in Bali. This sophisticated beachside destination is known for its upscale boutiques, world-class restaurants, and stunning beach clubs, making it the perfect setting for premium villa massage services. Our professional therapists bring spa-quality treatments directly to your private accommodation, whether you're staying in a beachfront villa, a stylish residence near Eat Street, or a luxury property in the exclusive Petitenget area. Villa massage in Seminyak combines convenience with the high-end service standards this neighborhood is famous for.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Seminyak is particularly appealing for guests who value privacy and personalized attention. After days spent exploring designer boutiques along Jalan Kayu Aya, enjoying sunset cocktails at beach clubs, or dining at celebrity chef restaurants, villa massage provides the perfect way to unwind without leaving your accommodation. Our therapists arrive with professional equipment, organic aromatherapy oils, and everything needed to transform your villa's outdoor pavilion, bedroom, or poolside area into a private sanctuary. Villa massage in Seminyak isn't just a treatment—it's a lifestyle choice that reflects the area's sophisticated approach to wellness.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Many luxury villas in Seminyak feature stunning outdoor spaces with ocean views, tropical gardens, and infinity pools. Villa massage takes full advantage of these beautiful settings, allowing you to enjoy treatments while listening to the sound of waves or feeling the ocean breeze. Whether you prefer morning sessions before hitting the beach, afternoon treatments during the hottest part of the day, or evening relaxation after sunset, villa massage in Seminyak adapts to your schedule. Same-day booking is available, making it easy to add professional spa treatments to your itinerary whenever desired.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Seminyak serves all areas of this popular destination, from Double Six Beach in the south to Petitenget and Batu Belig in the north. We work with guests staying in beachfront estates, boutique villa complexes, and private residences throughout the neighborhood. Our therapists are experienced professionals who understand the high service expectations of Seminyak's international clientele. Each villa massage session includes a consultation to customize the treatment to your specific needs, whether that's deep tissue work after surfing, relaxation therapy to combat travel stress, or couples massage for a romantic experience.
                  </p>
                  <p className="text-muted-foreground">
                    The popularity of villa massage in Seminyak reflects the broader trend toward private, personalized wellness experiences. Rather than traveling to a spa and working around their schedule, villa massage brings expert therapists to you at times that suit your lifestyle. This is especially valuable in Seminyak, where traffic can make getting around time-consuming. Villa massage in Seminyak offers complete flexibility, professional quality, and the ultimate in privacy and convenience, all delivered with the sophisticated service approach this neighborhood demands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Seminyak</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Premium villa massage treatments available throughout Seminyak. All services include professional therapist, equipment, and organic oils.
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

          {/* Why Choose Our Villa Massage in Seminyak */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Seminyak</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Beachfront Luxury</h3>
                      <p className="text-muted-foreground">Enjoy villa massage in Seminyak's sophisticated setting with ocean views and tropical gardens.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Premium Service</h3>
                      <p className="text-muted-foreground">Villa massage therapists trained to meet the high standards of Seminyak's luxury market.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Complete Privacy</h3>
                      <p className="text-muted-foreground">Villa massage provides intimate treatments in your own space without traveling to busy spas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Timing</h3>
                      <p className="text-muted-foreground">Book villa massage in Seminyak around beach activities and dining plans with same-day availability.</p>
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

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "Do luxury villas in Seminyak allow villa massage services?",
              answer: "Yes! Most luxury villas in Seminyak welcome villa massage services. Our villa massage therapists work with properties along Jalan Kayu Aya, Jalan Laksmana, and beachfront estates. Villa massage is a standard amenity expected by guests in Seminyak's upscale accommodations."
            },
            {
              question: "Is villa massage available near Seminyak Beach and Petitenget?",
              answer: "Absolutely! Villa massage service covers all Seminyak neighborhoods including beachfront areas, Petitenget Temple vicinity, and Oberoi district. Our therapists bring villa massage treatments to boutique villas and luxury estates throughout Seminyak with reliable same-day availability."
            },
            {
              question: "Can I book couples villa massage for anniversary celebrations in Seminyak?",
              answer: "Definitely! Couples villa massage is popular in Seminyak for special occasions. We provide synchronized villa massage with two therapists, romantic aromatherapy, and premium service that matches Seminyak's luxury standards. Perfect villa massage experience for anniversaries, honeymoons, or romantic getaways."
            },
            {
              question: "How does villa massage pricing compare to Seminyak spa resorts?",
              answer: "Villa massage in Seminyak offers exceptional value compared to resort spas. Our villa massage rates are 30-40% lower than beachfront spa resorts while maintaining professional standards. You receive the same quality villa massage in your private space without resort premiums or service charges."
            },
            {
              question: "What makes villa massage ideal for Seminyak's shopping district visitors?",
              answer: "After exploring Seminyak's boutiques and galleries, villa massage provides perfect recovery for tired feet and shopping fatigue. Our villa massage therapists understand retail exhaustion and focus on foot reflexology and leg relief. Evening villa massage sessions help you relax before enjoying Seminyak's dining scene."
            },
            {
              question: "Can villa massage therapists navigate Seminyak's busy traffic?",
              answer: "Yes! Villa massage therapists in Seminyak are experienced with the area's traffic patterns and peak hours. We schedule villa massage appointments accounting for Seminyak congestion. Our therapists use scooters for reliable villa massage arrivals regardless of traffic conditions on main roads."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Seminyak Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Premium therapists deliver luxury spa treatments to your villa throughout Seminyak. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Seminyak"
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
