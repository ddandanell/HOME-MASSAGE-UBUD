import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassagePererenan() {
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
        title="Villa Massage Pererenan | Professional Service at Your Villa"
        description="Professional villa massage in Pererenan. Licensed therapists deliver spa treatments to your private villa. Same-day booking available."
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
                  <span className="text-primary font-semibold">Pererenan</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage in Pererenan
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Tranquil villa massage in Pererenan's peaceful rice field setting. Professional therapists bring spa treatments to your quiet villa near Canggu.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Pererenan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Book Your Villa Massage Now
                </a>
              </div>
            </div>
          </section>

          {/* About Villa Massage in Pererenan */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service in Pererenan</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Pererenan offers a peaceful alternative to Canggu's increasingly busy atmosphere, serving guests who seek tranquility without sacrificing proximity to surf breaks, cafes, and beach clubs. This quiet coastal area north of Canggu maintains a more traditional Balinese character, with rice paddies, local villages, and a slower pace that appeals to those wanting to escape tourist crowds. Our professional therapists bring villa massage services throughout Pererenan, from beachfront properties overlooking the black sand coast to inland villas surrounded by emerald rice fields. Villa massage in Pererenan perfectly complements this area's serene, authentic environment.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The villa massage experience in Pererenan is particularly special when enjoyed in outdoor settings surrounded by nature. Many properties in this area feature beautiful gardens, rice field views, and open-air pavilions where the sounds of tropical birds, rustling palms, and distant waves create a naturally meditative atmosphere. Villa massage treatments in these environments become more than physical therapy—they're immersive wellness experiences that connect body, mind, and the natural world. Our therapists arrive with professional equipment and organic oils, enhancing rather than competing with Pererenan's peaceful beauty. The absence of traffic noise and urban bustle allows for deeper relaxation during villa massage sessions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage in Pererenan serves a growing community of wellness-focused travelers, digital nomads, and families who have discovered this area as Canggu's quieter neighbor. Many guests appreciate being close enough to access Canggu's amenities while returning each evening to Pererenan's tranquility. Morning yoga sessions followed by afternoon villa massage have become a popular routine for those staying in Pererenan, creating balanced days of movement and restoration. Surfers also value villa massage in Pererenan after sessions at Pererenan Beach or nearby Canggu breaks, finding the peaceful environment ideal for recovery.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our villa massage service covers all areas of Pererenan, from beachfront properties along the coast to inland rice field villas and residential neighborhoods. We work with guests staying in boutique hotels, private villas, guesthouses, and villa complexes throughout the area. Pererenan's more spacious layout compared to dense Canggu means properties often have generous outdoor areas perfect for villa massage treatments. Same-day booking is available for villa massage in Pererenan, making it easy to add professional treatments to your wellness routine whenever needed. The area's peaceful character means therapists often face less traffic delays than in busier destinations.
                  </p>
                  <p className="text-muted-foreground">
                    Villa massage in Pererenan represents wellness in harmony with nature—professional treatments delivered in settings that naturally support healing and relaxation. Whether you seek traditional Balinese massage surrounded by rice terraces, deep tissue therapy after surf sessions, couples massage in a garden pavilion, or prenatal care in a peaceful environment, villa massage in Pererenan provides expert service within an authentically Balinese setting. The combination of skilled therapists, quality products, and Pererenan's inherent tranquility creates experiences that remind guests why they chose Bali for their wellness journey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Villa Massage Services in Pererenan</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Complete villa massage treatments available throughout Pererenan. All services include professional therapist, equipment, and organic oils.
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

          {/* Why Choose Our Villa Massage in Pererenan */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why Choose Villa Massage in Pererenan</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Natural Tranquility</h3>
                      <p className="text-muted-foreground">Villa massage surrounded by rice fields and authentic village atmosphere.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Wellness Focus</h3>
                      <p className="text-muted-foreground">Villa massage in Pererenan's peaceful environment perfect for holistic healing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Canggu Access</h3>
                      <p className="text-muted-foreground">Villa massage close to Canggu amenities while maintaining quiet residential character.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Outdoor Settings</h3>
                      <p className="text-muted-foreground">Villa massage in garden pavilions and outdoor spaces with natural soundscapes.</p>
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
                  <Link href="/villa-massage/cities/kuta"><a className="text-primary hover:underline">Villa Massage Kuta</a></Link>
                  <Link href="/villa-massage/cities/legian"><a className="text-primary hover:underline">Villa Massage Legian</a></Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "Is villa massage available in Pererenan's developing neighborhoods?",
              answer: "Yes! Villa massage service in Pererenan covers both established areas and new developments. Our therapists bring villa massage to rice field villas and beachfront properties throughout expanding Pererenan. Villa massage reaches every corner of this growing community between Canggu and Tanah Lot."
            },
            {
              question: "Can I book villa massage near Pererenan Beach and black sand coast?",
              answer: "Absolutely! Villa massage in Pererenan serves beachfront villas along the dramatic black sand coastline. Our villa massage service includes properties near Pererenan Beach and neighboring surf spots. Villa massage brings relaxation to villas with authentic coastal Pererenan character."
            },
            {
              question: "How does villa massage work with Pererenan's quieter atmosphere?",
              answer: "Villa massage in Pererenan perfectly suits the area's peaceful, less-developed vibe compared to busy Canggu. Our villa massage service respects Pererenan's tranquil environment and local community. Villa massage enhances the calm, authentic Balinese experience that draws visitors to Pererenan."
            },
            {
              question: "Do villa massage therapists navigate Pererenan's rural roads and rice fields?",
              answer: "Yes! Villa massage therapists in Pererenan know the back roads through rice paddies and village areas. Our team navigates villa massage appointments on narrow lanes and developing infrastructure. Villa massage service reliably reaches remote Pererenan villas surrounded by agricultural land."
            },
            {
              question: "Can digital nomads book flexible villa massage in Pererenan co-living spaces?",
              answer: "Definitely! Villa massage in Pererenan serves co-living communities and villa-share arrangements popular with remote workers. Our villa massage service accommodates flexible scheduling for digital nomad routines. Villa massage provides wellness support for Pererenan's growing remote work community."
            },
            {
              question: "What makes villa massage special for Pererenan's authentic Bali experience?",
              answer: "Villa massage in Pererenan combines professional service with authentic village atmosphere and natural surroundings. Our villa massage treatments often take place with rice field views and traditional Bali sounds. Villa massage in Pererenan offers genuine Balinese wellness away from tourist crowds."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Villa Massage in Pererenan Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Professional therapists deliver peaceful treatments to your villa throughout Pererenan. Same-day booking available.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage%20in%20Pererenan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-primary hover:bg-background/90 h-11 px-8"
                  >
                    Book on WhatsApp
                  </a>
                  <Link href="/villa-massage/blog">
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground h-11 px-8">
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
