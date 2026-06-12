import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Shield, MapPin, Calendar, Star, Home, Sparkles, Users, Heart } from 'lucide-react';
import CrossSiloLinks from '@/components/CrossSiloLinks';

export default function VillaMassageHub() {
  const faqData = [
    { question: "What is villa massage?", answer: "Villa massage is a premium in-villa spa service where licensed therapists bring premium oils, aromatherapy, and fresh linens to your private villa." },
    { question: "How much does villa massage cost in Bali?", answer: "Our villa massage treatments start from IDR 320,000 for a 60-minute Traditional Balinese Massage. Deep Tissue starts at IDR 380,000 and Aromatherapy at IDR 350,000. Four-hands and couples packages are also available." },
    { question: "Do I need to provide anything for the massage?", answer: "Just provide a quiet space with a comfortable surface — a bed or floor mat works perfectly. Our therapists bring premium organic oils, fresh towels and linens, aromatherapy diffuser, and relaxing music." },
    { question: "Which villa areas do you serve in Bali?", answer: "We serve all major villa areas including Ubud, Seminyak, Canggu, Sanur, Nusa Dua, Uluwatu, Jimbaran, Kuta, Legian, and Pererenan. Same-day booking is often available in central areas." }
  ];

  return (
    <>
      <SEOHead 
        title="Villa Massage Bali | Premium Spa Treatment at Your Villa"
        description="Professional villa massage service in Bali. Licensed therapists deliver luxury spa treatments directly to your private villa. Book same-day villa massage now."
        keywords="villa massage, villa massage bali, massage at villa, private villa massage, luxury villa massage, villa spa service"
      />
      <SchemaMarkup
        type="service"
        data={{
          name: "Villa Massage Bali",
          description: "Premium villa massage service delivered to your private accommodation in Bali. Licensed therapists bring luxury spa treatments, premium oils, and complete setup to your villa.",
          url: "https://homemassageubud.com/villa-massage",
          areaServed: ["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua", "Uluwatu", "Jimbaran", "Kuta", "Legian", "Pererenan"],
          offers: [
            { name: "Traditional Balinese Villa Massage 60min", price: "320000", description: "Authentic Balinese massage in your villa" },
            { name: "Deep Tissue Villa Massage 60min", price: "380000", description: "Intensive therapeutic villa massage" },
            { name: "Couples Villa Massage 90min", price: "850000", description: "Romantic couples massage at your villa" }
          ]
        }}
      />
      <SchemaMarkup type="faq" data={faqData} />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              ⭐ From Rp 320,000 | Licensed Therapists | Same-Day Booking
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Villa Massage in Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Experience professional villa massage delivered directly to your private accommodation – 
              all equipment included.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Now via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Villa Massage */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Is Villa Massage?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Villa massage represents the pinnacle of convenience and luxury in Bali's wellness industry. Rather than traveling to a crowded spa, 
                villa massage brings certified professional therapists with full spa equipment directly to your private villa accommodation. Each villa 
                massage session transforms your personal space into a premium spa environment, complete with premium oils, fresh linens, and soothing ambiance.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The villa massage experience eliminates all the hassles of traditional spa visits. No traffic jams through Bali's busy streets, no 
                waiting in lobbies, no sharing space with strangers. Your villa massage takes place in complete privacy, allowing you to fully relax 
                before, during, and after your treatment. When your villa massage concludes, you can shower in your own bathroom, rest in your own bed, 
                and continue your day or evening without any transition.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Every villa massage we provide maintains the same professional standards as Bali's finest luxury spas. Our therapists arrive 30 minutes 
                early to set up a complete spa environment in your villa. This includes arranging aromatherapy
                elements, preparing warm oil, and creating the perfect atmosphere for your villa massage experience.
              </p>
              <p className="text-lg text-muted-foreground">
                Villa massage services are available throughout all major Bali destinations. Whether your villa is located in the rice terraces of Ubud, 
                the beachfront estates of Seminyak, the surf culture of Canggu, or the luxury resorts of Nusa Dua, professional villa massage therapists 
                reach your location daily. This flexibility makes villa massage the preferred choice for tourists, expatriates, and locals seeking 
                premium wellness treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Villa Massage Is Better Than Spa Visits */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Villa Massage Over Traditional Spas?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Complete Privacy</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Villa massage provides total privacy in your own space. No shared facilities, no strangers nearby, just you and your professional 
                    therapist. Perfect for couples seeking intimate relaxation or individuals who value personal space during treatments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Zero Travel Time</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Villa massage eliminates travel entirely. No navigating traffic, no finding parking, no commuting. Your therapist comes to you, 
                    saving valuable vacation time and allowing you to maximize relaxation before and after your villa massage treatment.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Hygiene Control</h3>
                  </div>
                  <p className="text-muted-foreground">
                    With villa massage, you control your environment. Use your own shower, towels, and facilities. Each villa massage includes fresh 
                    professional linens, but you have complete control over your space and can maintain your own hygiene standards throughout.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Villa massage offers unmatched flexibility. Book early morning sessions before breakfast, late evening treatments before bed, 
                    or anything in between. Same-day villa massage booking is available, accommodating even last-minute wellness needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Perfect for Couples</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Couples villa massage creates unforgettable bonding experiences. Two therapists work simultaneously in your private villa space, 
                    allowing you to share this wellness journey. Enjoy romantic ambiance without the constraints of spa scheduling or shared facilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Customizable Experience</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Your villa massage adapts to your preferences. Control room temperature, lighting, music, and ambiance. Some clients prefer their 
                    villa pool area for open-air villa massage, while others choose bedroom privacy. The choice is entirely yours.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground">
                These advantages make villa massage the superior choice for discerning wellness seekers. Traditional spa visits involve logistical 
                planning, travel coordination, and time management. Villa massage removes all complications, delivering premium treatments directly 
                to your doorstep. You invest time only in the treatment itself, not in preparation, travel, or recovery logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Villa Massage Works */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How Does Villa Massage Booking Work?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Booking villa massage services is remarkably simple. The entire process takes less than five minutes from initial contact to confirmed 
                appointment. Here's exactly how villa massage booking works from start to finish:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact Via WhatsApp</h3>
                    <p className="text-muted-foreground">
                      Send a message through WhatsApp with your villa massage preferences. Include your preferred service, desired time, and villa 
                      location. Our team responds immediately during business hours (8 AM - 10 PM daily), confirming therapist availability for your 
                      requested villa massage time slot.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Confirm Villa Details</h3>
                    <p className="text-muted-foreground">
                      Provide your exact villa address and any access instructions. Some villa massage locations require security codes, gate access 
                      procedures, or specific navigation details. This ensures your therapist arrives smoothly and your villa massage begins on time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Therapist Arrival & Setup</h3>
                    <p className="text-muted-foreground">
                      Your villa massage therapist arrives 30 minutes before your scheduled treatment time. They bring professional equipment including 
                      fresh linens, premium aromatherapy oils, and all necessary accessories. Setup transforms your villa
                      space into a professional spa environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enjoy Your Villa Massage</h3>
                    <p className="text-muted-foreground">
                      Your therapist conducts a brief consultation about pressure preferences, problem areas, and health considerations. Then your 
                      villa massage begins. Full 60-minute or 90-minute treatments deliver complete therapeutic benefits in the comfort and privacy 
                      of your own villa.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Post-Treatment Relaxation</h3>
                    <p className="text-muted-foreground">
                      After your villa massage concludes, take your time transitioning back. Shower in your own bathroom, rest in your own bed, or 
                      continue your evening without any rush. Your therapist packs all equipment quietly, leaving your villa exactly as they found it.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mt-6">
                Payment for villa massage services happens after treatment completion. We accept cash (IDR or major currencies) or digital payment 
                through local transfer. Tips are appreciated but never mandatory. Many villa massage clients add gratuity to recognize exceptional 
                service, but the choice remains entirely personal.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Check Villa Massage Availability
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Massage Services Preview */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Available Villa Massage Services
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Professional villa massage from <span className="font-bold text-primary">Rp 320,000</span> | <Link href="/pricing" className="text-primary hover:underline">View All Pricing</Link>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Balinese Villa Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 320,000</p>
                <p className="text-muted-foreground mb-4">
                  Traditional Balinese techniques with long flowing strokes and gentle stretching.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/villa-massage/services/balinese">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deep Tissue Villa Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 380,000</p>
                <p className="text-muted-foreground mb-4">
                  Therapeutic massage targeting chronic tension and muscle knots.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/villa-massage/services/deep-tissue">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Couples Villa Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 640,000</p>
                <p className="text-muted-foreground mb-4">
                  Romantic massage for two with simultaneous treatments.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/villa-massage/services/couples">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Relaxation Villa Massage</h3>
                <p className="text-lg font-bold text-primary mb-3">From Rp 320,000</p>
                <p className="text-muted-foreground mb-4">
                  Gentle, soothing massage focusing on stress relief.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/villa-massage/services/relaxation">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/villa-massage/services">
                View All Villa Massage Services →
              </Link>
            </Button>
            <Button size="lg" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book Now via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Professionalism */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Professional Standards for Villa Massage
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Every villa massage therapist in our network maintains strict professional standards. All practitioners hold valid massage therapy 
                licenses issued by Indonesian authorities. They complete minimum 300-hour training programs covering anatomy, physiology, traditional 
                techniques, and modern therapeutic methods. Villa massage therapists undergo regular continuing education to maintain certification 
                and stay current with industry best practices.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Safety remains paramount in villa massage services. Each therapist carries personal liability insurance and health certifications. 
                They follow strict hygiene protocols including hand washing, fresh linen usage, and equipment sanitization between every villa massage 
                appointment. During consultations, therapists screen for contraindications and adjust villa massage techniques accordingly for client 
                safety and comfort.
              </p>
              <p className="text-lg text-muted-foreground">
                Professional behavior standards govern all villa massage interactions. Therapists maintain appropriate boundaries, communicate clearly 
                about treatment plans, and respect client privacy completely. They arrive punctually, dress professionally, and conduct themselves 
                with utmost professionalism throughout every villa massage session. This commitment to excellence separates professional villa massage 
                services from informal alternatives.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Licensed Therapists</h3>
                  <p className="text-sm text-muted-foreground">
                    All villa massage practitioners hold valid Indonesian massage therapy licenses
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">300+ Hours Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimum training requirements ensure expert villa massage delivery
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Insured Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Full liability coverage protects every villa massage appointment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Transparent Villa Massage Pricing
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Villa massage pricing reflects fair compensation for professional therapists while remaining accessible to various budgets. Standard 
                60-minute villa massage treatments start from Rp 320,000, with 90-minute extended sessions from Rp 450,000. Specialized treatments 
                like hot stone villa massage or prenatal villa massage carry slightly higher rates due to additional equipment and specialized training 
                requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                All villa massage prices include therapist transportation, professional equipment, premium oils, fresh linens, and full setup service. 
                No hidden fees surprise you after treatment. The quoted price for your villa massage covers everything needed for a complete spa 
                experience. Some villa locations in remote areas may incur small additional transportation fees, but we confirm all costs before 
                booking confirmation.
              </p>
              <p className="text-lg text-muted-foreground">
                Couples villa massage packages offer excellent value, typically priced at less than double the single treatment rate. Group bookings 
                for three or more people receiving simultaneous villa massage treatments qualify for volume discounts. Regular clients booking weekly 
                villa massage sessions access loyalty pricing structures that reward ongoing wellness commitment.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  View Complete Pricing →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Villa Massage Locations Across Bali
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Our villa massage service network covers all major Bali destinations. Therapists travel daily to villa locations throughout the island, 
                ensuring premium treatments reach you wherever your accommodation is situated. From mountain villa massage in Ubud to beachfront villa 
                massage in Seminyak, professional service reaches all regions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Central Bali Villa Massage</h3>
                  <p className="text-muted-foreground mb-3">
                    Ubud villa massage services reach rice terrace properties, jungle villas, and mountain retreats. Our most popular region for 
                    villa massage bookings, with daily appointments from early morning through late evening.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/villa-massage/cities/ubud">
                      Ubud Villa Massage →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">South Bali Villa Massage</h3>
                  <p className="text-muted-foreground mb-3">
                    Seminyak, Canggu, and surrounding areas receive comprehensive villa massage coverage. Beach villas, sunset estates, and luxury 
                    compounds all access professional treatments with minimal booking notice.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="link" className="p-0 text-sm" asChild>
                      <Link href="/villa-massage/cities/seminyak">Seminyak →</Link>
                    </Button>
                    <Button variant="link" className="p-0 text-sm" asChild>
                      <Link href="/villa-massage/cities/canggu">Canggu →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">East Coast Villa Massage</h3>
                  <p className="text-muted-foreground mb-3">
                    Sanur villa massage and Nusa Dua villa massage serve the quieter, more family-friendly eastern coastline. Resort villas, 
                    beachfront properties, and golf estate accommodations all receive regular service.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="link" className="p-0 text-sm" asChild>
                      <Link href="/villa-massage/cities/sanur">Sanur →</Link>
                    </Button>
                    <Button variant="link" className="p-0 text-sm" asChild>
                      <Link href="/villa-massage/cities/nusa-dua">Nusa Dua →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Bukit Peninsula Villa Massage</h3>
                  <p className="text-muted-foreground mb-3">
                    Uluwatu villa massage reaches clifftop properties and luxury estates. Despite remote locations, professional villa massage 
                    therapists navigate the peninsula daily for bookings.
                  </p>
                  <Button variant="link" className="p-0 text-sm" asChild>
                    <Link href="/villa-massage/cities/uluwatu">Uluwatu →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/villa-massage/cities">
                  View All Villa Massage Locations →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Learn More About Villa Massage
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Explore our comprehensive guides about villa massage services, benefits, and booking procedures. Each article provides detailed 
              insights to help you make informed decisions about villa massage treatments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Villa Massage Blog</h3>
                  <p className="text-muted-foreground mb-4">
                    Read expert articles about villa massage benefits, preparation tips, and wellness advice. Our blog covers everything from 
                    first-time villa massage experiences to advanced treatment protocols.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/villa-massage/blog">
                      Read Villa Massage Articles →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Villa Massage Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse detailed descriptions of every villa massage treatment we offer. Learn about techniques, benefits, pricing, and booking 
                    procedures for each specific villa massage service type.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/villa-massage/services">
                      Explore Services →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Silo Links */}
      <CrossSiloLinks currentSilo="villa-massage" />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Villa Massage?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us now via WhatsApp to check availability for villa massage at your location. Same-day villa massage appointments available. 
              Professional therapists ready to deliver premium treatments directly to your private villa.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book Villa Massage Now
              </a>
            </Button>
          </div>
        </div>
      </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
