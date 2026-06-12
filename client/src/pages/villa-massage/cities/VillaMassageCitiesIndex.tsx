import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Users, Shield } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function VillaMassageCitiesIndex() {
  const cities = [
    { 
      name: 'Ubud', 
      slug: 'ubud',
      description: 'Experience villa massage in Ubud surrounded by lush rice terraces and cultural heritage.',
      highlights: ['Rice Terrace Views', 'Cultural Heart', 'Wellness Retreats']
    },
    { 
      name: 'Seminyak', 
      slug: 'seminyak',
      description: 'Premium villa massage in Seminyak, Bali\'s most sophisticated beachside destination.',
      highlights: ['Luxury Villas', 'Beach Access', 'Fine Dining']
    },
    { 
      name: 'Canggu', 
      slug: 'canggu',
      description: 'Villa massage service in Canggu, perfect for surfers and digital nomads.',
      highlights: ['Surf Spots', 'Modern Cafes', 'Relaxed Vibe']
    },
    { 
      name: 'Sanur', 
      slug: 'sanur',
      description: 'Peaceful villa massage in Sanur, ideal for families and peaceful beach holidays.',
      highlights: ['Calm Beach', 'Family Friendly', 'Sunrise Views']
    },
    { 
      name: 'Nusa Dua', 
      slug: 'nusa-dua',
      description: 'Five-star villa massage service in Nusa Dua\'s exclusive resort area.',
      highlights: ['Luxury Resorts', 'White Beaches', 'Golf Courses']
    },
    { 
      name: 'Uluwatu', 
      slug: 'uluwatu',
      description: 'Clifftop villa massage in Uluwatu with stunning ocean panoramas.',
      highlights: ['Cliff Views', 'World-Class Surf', 'Sunset Temple']
    },
    { 
      name: 'Jimbaran', 
      slug: 'jimbaran',
      description: 'Beachfront villa massage in Jimbaran, famous for seafood and sunsets.',
      highlights: ['Seafood Dining', 'Quiet Beach', 'Airport Close']
    },
    { 
      name: 'Kuta', 
      slug: 'kuta',
      description: 'Convenient villa massage in Kuta, close to the airport and vibrant nightlife.',
      highlights: ['Airport Access', 'Shopping', 'Nightlife']
    },
    { 
      name: 'Legian', 
      slug: 'legian',
      description: 'Beachside villa massage in Legian, between Kuta and Seminyak.',
      highlights: ['Beach Clubs', 'Sunset Spot', 'Central Location']
    },
    { 
      name: 'Pererenan', 
      slug: 'pererenan',
      description: 'Tranquil villa massage in Pererenan, Canggu\'s peaceful neighbor.',
      highlights: ['Rice Fields', 'Quiet Area', 'Local Feel']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Villa Massage Locations | All Bali Areas Covered"
        description="Villa massage service available across all major Bali destinations. Professional therapists deliver treatments to your private villa in Ubud, Seminyak, Canggu, and more."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Villa Massage Across All Bali Locations
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional villa massage service delivered to your private accommodation throughout Bali. From Ubud's cultural heart to Seminyak's luxury beachfront, we bring spa-quality treatments directly to you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/villa-massage">
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                      View All Services
                    </a>
                  </Link>
                  <a 
                    href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Villa Massage Service Everywhere in Bali</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Our villa massage service covers every major destination across Bali, bringing professional spa treatments directly to your accommodation. Whether you're staying in a luxury villa in Seminyak, a peaceful retreat in Ubud, or a beachfront property in Uluwatu, our licensed therapists travel to you with everything needed for an authentic Balinese spa experience.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Villa massage has become the preferred choice for travelers who value convenience, privacy, and personalized service. Instead of traveling to a spa, you can enjoy treatments in the comfort of your own space, whether that's your villa's outdoor pavilion, bedroom, or poolside area. Our therapists arrive with premium oils, fresh linens, and all necessary supplies.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We serve all ten major areas of Bali, from the cultural highland of Ubud to the southern beach destinations of Seminyak, Canggu, Sanur, Nusa Dua, Uluwatu, Jimbaran, Kuta, Legian, and Pererenan. Each location has its unique character, and our villa massage service adapts to suit the atmosphere of your chosen destination.
                  </p>
                  <p className="text-muted-foreground">
                    Our villa massage offerings include traditional Balinese massage, deep tissue therapy, couples massage, aromatherapy, hot stone treatments, prenatal massage, Thai massage, sports massage, and reflexology. All treatments are performed by certified therapists with years of experience in luxury spas and wellness centers. Same-day booking is available across all locations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Villa Massage */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Villa Massage Service</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <MapPin className="h-12 w-12 text-primary mb-4" />
                      <h3 className="font-semibold text-xl mb-2">Island-Wide Coverage</h3>
                      <p className="text-muted-foreground">Villa massage service available in all 10 major Bali destinations with consistent quality.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Clock className="h-12 w-12 text-primary mb-4" />
                      <h3 className="font-semibold text-xl mb-2">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">Same-day booking available. Choose morning, afternoon, or evening appointments.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Users className="h-12 w-12 text-primary mb-4" />
                      <h3 className="font-semibold text-xl mb-2">Expert Therapists</h3>
                      <p className="text-muted-foreground">All therapists are licensed, experienced professionals trained in multiple modalities.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Shield className="h-12 w-12 text-primary mb-4" />
                      <h3 className="font-semibold text-xl mb-2">Premium Quality</h3>
                      <p className="text-muted-foreground">Professional equipment and organic massage oils used for every treatment.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Cities Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Villa Massage in Every Bali Location</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Link key={city.slug} href={`/villa-massage/cities/${city.slug}`}>
                      <a>
                        <Card className="hover:shadow-lg transition-shadow h-full">
                          <CardContent className="pt-6">
                            <div className="flex items-start mb-4">
                              <MapPin className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                              <div>
                                <h3 className="font-semibold text-xl mb-2">{city.name}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{city.description}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {city.highlights.map((highlight, idx) => (
                                <div key={idx} className="text-sm text-muted-foreground flex items-center">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Complete Villa Massage Services</h2>
                <p className="text-muted-foreground mb-8">
                  All treatments available across every location. Our villa massage menu includes traditional techniques and modern therapies, all performed in the privacy of your accommodation.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                  <div className="bg-background p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Balinese Massage - Rp 320,000</h3>
                    <p className="text-sm text-muted-foreground">Traditional long-stroke technique</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Deep Tissue - Rp 380,000</h3>
                    <p className="text-sm text-muted-foreground">Targeted muscle therapy</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Couples Massage - Rp 640,000</h3>
                    <p className="text-sm text-muted-foreground">Side-by-side treatment</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Aromatherapy - Rp 350,000</h3>
                    <p className="text-sm text-muted-foreground">Essential oils therapy</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Hot Stone - Rp 420,000</h3>
                    <p className="text-sm text-muted-foreground">Heated stone therapy</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Prenatal Massage - Rp 390,000</h3>
                    <p className="text-sm text-muted-foreground">Safe pregnancy treatment</p>
                  </div>
                </div>
                <Link href="/villa-massage/services">
                  <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                    View All Services
                  </a>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "How do I choose the right villa massage location in Bali?",
              answer: "Villa massage is available across all major Bali locations—each area offers unique benefits. Coastal villa massage in Seminyak and Canggu suits beach lovers, while Ubud villa massage provides jungle tranquility. Villa massage service quality remains consistent across all Bali regions regardless of your chosen location."
            },
            {
              question: "Can I book villa massage in multiple Bali cities during my trip?",
              answer: "Absolutely! Many visitors book villa massage in different locations as they explore Bali. Our villa massage service operates island-wide so you can enjoy treatments in Ubud, then Seminyak, then Uluwatu. Villa massage follows you throughout your Bali journey with consistent professional quality."
            },
            {
              question: "Which Bali locations offer the best value for villa massage services?",
              answer: "Villa massage pricing is consistent across Bali, but areas like Sanur and Ubud offer exceptional value with peaceful settings. Beach locations provide villa massage with ocean ambiance while inland areas feature rice field views. Villa massage delivers great value everywhere with location-specific atmosphere enhancing each treatment."
            },
            {
              question: "Do villa massage therapists understand different neighborhood characteristics?",
              answer: "Yes! Villa massage therapists are trained for each area's unique features—surf culture in Canggu, luxury standards in Seminyak, wellness focus in Ubud. Our villa massage service adapts to neighborhood character while maintaining professional treatment quality. Villa massage reflects the distinct personality of each Bali location."
            },
            {
              question: "Can families book villa massage across different Bali locations simultaneously?",
              answer: "Definitely! If your family is split between villa locations, we coordinate villa massage appointments across multiple areas. Our villa massage network allows simultaneous bookings in different cities. Villa massage service flexibility supports families exploring various parts of Bali together."
            }
          ]} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Book Your Villa Massage Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Available across all Bali locations with same-day booking. Professional therapists deliver spa-quality treatments to your villa.
                </p>
                <a 
                  href="https://wa.me/628112656869?text=Hi%2C%20I%20would%20like%20to%20book%20a%20villa%20massage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-primary hover:bg-background/90 h-11 px-8"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
