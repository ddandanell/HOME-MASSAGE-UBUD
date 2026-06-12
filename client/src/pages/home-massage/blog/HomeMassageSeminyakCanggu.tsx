import { Link } from 'wouter';
import { MapPin, Clock, Users, CheckCircle, Calendar, TrendingUp, Waves, Mountain, Home, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function HomeMassageSeminyakCanggu() {
  const serviceAreas = [
    {
      name: 'Seminyak',
      icon: Star,
      description: 'Premium home massage service to luxury villas and hotels',
      time: '30-45 mins'
    },
    {
      name: 'Canggu',
      icon: Waves,
      description: 'Mobile massage for surfers and digital nomads',
      time: '45-60 mins'
    },
    {
      name: 'Ubud',
      icon: Mountain,
      description: 'Wellness-focused treatments in jungle villa settings',
      time: '45-60 mins'
    },
    {
      name: 'Other Areas',
      icon: MapPin,
      description: 'Sanur, Nusa Dua, Jimbaran & surrounding areas',
      time: '60+ mins'
    }
  ];

  const seminyakBenefits = [
    {
      title: 'Skip the Traffic',
      description: 'Avoid notorious Seminyak gridlock—therapists come to your villa'
    },
    {
      title: 'Villa Privacy',
      description: 'Perfect for luxury accommodation guests who value discretion'
    },
    {
      title: 'Beach Day Recovery',
      description: 'Post-beach relaxation without leaving your comfortable space'
    },
    {
      title: 'Pre-Night Out Prep',
      description: 'Rejuvenate before exploring Seminyak\'s dining and nightlife scene'
    }
  ];

  const cangguTreatments = [
    {
      title: 'Sports Massage',
      description: 'Deep tissue work targeting surf-related muscle tension and shoulder fatigue'
    },
    {
      title: 'Mobility Sessions',
      description: 'Stretching and recovery treatments for active lifestyles'
    },
    {
      title: 'Desk Work Relief',
      description: 'Focused neck and back treatments for remote workers'
    },
    {
      title: 'Family Packages',
      description: 'Multiple therapists for villa groups and families'
    }
  ];

  const ubudExperiences = [
    {
      title: 'Traditional Balinese',
      description: 'Authentic healing ceremonies in your jungle villa'
    },
    {
      title: 'Couples Retreats',
      description: 'Side-by-side massage experiences with rice field views'
    },
    {
      title: 'Wellness Intensive',
      description: 'Multi-day packages for yoga retreat participants'
    }
  ];

  const pricingByArea = [
    {
      area: 'Seminyak',
      rate: 'From 320K IDR',
      note: 'Standard rates apply for central Seminyak locations'
    },
    {
      area: 'Canggu',
      rate: 'From 320K IDR',
      note: 'Competitive pricing for all Canggu neighborhoods'
    },
    {
      area: 'Ubud',
      rate: 'From 450K IDR',
      note: 'Slightly higher rates due to travel time and location'
    }
  ];

  const popularVillas = [
    'The Legian Seminyak',
    'Villa Sungai Canggu',
    'Komaneka at Bisma Ubud',
    'Potato Head Beach Club Area',
    'Echo Beach Accommodations',
    'Campuhan Ridge Villas'
  ];

  return (
    <>
      <SEOHead
        title="Home Massage Seminyak & Canggu: Book Villa Spa Service"
        description="Home massage in Seminyak, Canggu & Ubud. Professional therapists to your villa within 60 mins. Traditional Balinese & deep tissue. Book same-day service."
        keywords="home massage Seminyak, Canggu mobile massage, Ubud villa spa, Seminyak massage service, Canggu home massage, Ubud at-home massage, villa massage Bali"
        canonicalUrl="/home-massage/blog/home-massage-seminyak-canggu"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-neutral-700">
                    Serving Seminyak, Canggu & Ubud
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Home Massage Services in Seminyak, Canggu & Popular Bali Areas
                </h1>
                <p className="text-xl text-neutral-600 mb-8">
                  Professional mobile massage service bringing authentic Balinese treatments directly to your villa, hotel, or private accommodation across Bali's most popular destinations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Book Your Location</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/home-massage">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Finding the perfect massage experience in Bali shouldn't mean battling traffic, navigating unfamiliar streets, or leaving the comfort of your beautiful accommodation. Our <strong>home massage service</strong> brings professional, licensed therapists directly to your location across Bali's most visited areas—Seminyak, Canggu, and Ubud.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed mt-4">
                  Whether you're staying in a luxury Seminyak villa, a beachside Canggu rental, or a jungle retreat in Ubud, we provide the same high-quality treatments you'd find in Bali's top spas, delivered to your doorstep. Our therapists arrive with professional massage tables, premium organic oils, and everything needed for an authentic Balinese spa experience—all you need to provide is the space.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed mt-4">
                  With same-day availability, flexible scheduling, and transparent pricing, we've made <strong>mobile massage in Bali</strong> simple, reliable, and accessible. From post-surf recovery in Canggu to romantic couples treatments in Ubud, we cater to the unique needs of each location and clientele.
                </p>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Home Massage Service Areas in Bali
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    We provide professional at-home massage services across Bali's most popular tourist and residential areas, with travel times optimized for quick, convenient service.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {serviceAreas.map((area, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                          <area.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {area.name}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-3">
                          {area.description}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                          <Clock className="h-4 w-4" />
                          <span>{area.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Seminyak Home Massage</h3>
                  <p className="text-neutral-700 mb-4">
                    <strong>Seminyak</strong> is Bali's most upscale beach resort area, known for luxury villas, designer boutiques, and world-class dining. Our <Link href="/home-massage/cities/seminyak" className="text-primary-600 hover:text-primary-700 font-medium">Seminyak home massage service</Link> caters to travelers staying in premium accommodations who value convenience and privacy. We serve all Seminyak neighborhoods including Oberoi, Laksmana, Kayu Aya, and Double Six, typically arriving within 30-45 minutes of booking.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-6 mt-8">Canggu Mobile Massage</h3>
                  <p className="text-neutral-700 mb-4">
                    <strong>Canggu</strong> has evolved from a quiet surf village into Bali's hub for digital nomads, fitness enthusiasts, and creative travelers. Our <Link href="/home-massage/cities/canggu" className="text-primary-600 hover:text-primary-700 font-medium">Canggu mobile massage</Link> responds to the area's active lifestyle, offering sports massage, recovery treatments, and wellness sessions perfect for surfers and remote workers. We serve Echo Beach, Batu Bolong, Berawa, Pererenan, and surrounding neighborhoods.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-6 mt-8">Ubud Villa Spa Services</h3>
                  <p className="text-neutral-700 mb-4">
                    <strong>Ubud</strong> is Bali's cultural and wellness heart, surrounded by rice terraces, jungle valleys, and spiritual energy. Our <Link href="/home-massage/cities/ubud" className="text-primary-600 hover:text-primary-700 font-medium">Ubud villa spa services</Link> complement the area's wellness-focused atmosphere, offering traditional Balinese healing treatments, couples ceremonies, and retreat-style packages. We serve central Ubud, Campuhan, Penestanan, Tegallalang, and nearby villages.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-6 mt-8">Additional Areas We Serve</h3>
                  <p className="text-neutral-700">
                    Beyond our primary service areas, we also provide <strong>home massage services</strong> to Sanur, Nusa Dua, Jimbaran, Uluwatu, and parts of Denpasar. Travel times may be slightly longer (60-90 minutes), and location-based surcharges may apply. Contact us to confirm service availability and timing for your specific location.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Seminyak Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Why Home Massage is Popular in Seminyak
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Seminyak's unique characteristics make mobile massage services particularly valuable for visitors and residents alike.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {seminyakBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-neutral-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-neutral-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Seminyak Traffic & Convenience
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Anyone who has spent time in Seminyak knows that traffic congestion, especially during high season and evenings, can turn a short spa visit into a frustrating hour-long journey. Our <strong>home massage Seminyak</strong> service eliminates this problem entirely. Therapists arrive at your villa with minimal delay, and you never waste precious vacation time sitting in traffic. This convenience factor alone makes home massage the preferred choice for many Seminyak visitors.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Villa Scene & Luxury Accommodations
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Seminyak is renowned for its impressive collection of private villas featuring pools, gardens, and dedicated relaxation spaces. Many guests book these luxurious accommodations specifically to enjoy privacy and comfort—why leave that environment for a massage? Our service transforms your villa's outdoor bale, poolside cabana, or air-conditioned bedroom into a private spa suite. The combination of your familiar surroundings and professional treatment creates an unmatched relaxation experience.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Popular Treatment Requests
                  </h3>
                  <p className="text-neutral-700">
                    Seminyak clients frequently request our signature <Link href="/home-massage/services/balinese" className="text-primary-600 hover:text-primary-700 font-medium">traditional Balinese massage</Link>, couples packages for romantic getaways, and pre-event beauty treatments before weddings or special celebrations. Deep tissue and aromatherapy sessions are also highly popular. We customize pressure, oil selection, and session focus to match your preferences, whether you need deep muscle work after travel or gentle relaxation before an evening out.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Canggu Guide */}
          <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Canggu Home Massage Guide
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Canggu's active lifestyle and wellness culture create unique massage service needs we're perfectly positioned to meet.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {cangguTreatments.map((treatment, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {treatment.title}
                        </h3>
                        <p className="text-neutral-600">{treatment.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Surf & Recovery Treatments
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Canggu's world-class surf breaks attract wave riders from around the globe. Hours spent paddling and popping up create specific muscle tension patterns in shoulders, lower back, and legs. Our <strong>Canggu home massage</strong> therapists understand surf-specific bodywork, delivering focused deep tissue treatments that target paddling muscles, release hip flexors, and restore mobility. Many surfers book regular sessions as part of their training and recovery routine, with evening appointments particularly popular after dawn patrol sessions.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Digital Nomad Wellness
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Canggu's thriving coworking scene and long-term visitor community means many clients work remotely from villas or guesthouses. Extended hours at laptops create neck strain, shoulder tension, and postural issues. We offer targeted treatments addressing desk work discomfort, including focused neck and upper back massage, stretching protocols, and trigger point therapy. Many digital nomads schedule weekly or bi-weekly sessions as preventative wellness maintenance.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Family Villa Services
                  </h3>
                  <p className="text-neutral-700">
                    Canggu increasingly attracts families and groups renting larger villas. We accommodate multi-person bookings by coordinating multiple therapists arriving simultaneously, enabling everyone to enjoy treatments together. Family packages are available with age-appropriate massage for teens and gentle sessions for older adults. This synchronized service transforms your villa into a group spa experience, perfect for special occasions or simply maximizing quality time together.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ubud Experiences */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Ubud At-Home Spa Experiences
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Ubud's spiritual energy and natural beauty create the perfect backdrop for transformative massage experiences.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {ubudExperiences.map((experience, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-full mb-4">
                          <Mountain className="h-6 w-6 text-accent-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-neutral-600 text-sm">{experience.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-neutral-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Jungle Villa Settings
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Ubud accommodations often feature stunning natural settings—open-air pavilions overlooking rice fields, jungle-edge balconies with bird song, or villa decks with valley views. Our <strong>Ubud villa spa services</strong> leverage these environments, conducting treatments in spaces where nature becomes part of the therapy. The combination of professional massage technique, premium organic oils, and Ubud's natural ambiance creates profound relaxation impossible to replicate in enclosed spa rooms.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Wellness-Focused Treatments
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Ubud attracts wellness-conscious travelers seeking authentic healing experiences. We respond with traditional Balinese techniques passed down through generations, including boreh body scrubs, flower baths, and energy balancing practices. Our therapists understand the spiritual context of Balinese healing and can explain the philosophy behind treatments. Many clients appreciate this cultural authenticity, which connects their massage experience to Ubud's broader wellness traditions.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Couples & Retreat Groups
                  </h3>
                  <p className="text-neutral-700">
                    Ubud is Bali's premier destination for couples retreats, honeymoons, and yoga teacher trainings. We accommodate these needs with synchronized couples massage sessions and small group bookings for retreat participants. Our therapists coordinate timing and technique to ensure shared experiences, whether that's side-by-side treatments for romantic partners or sequential sessions for yoga retreat groups. Multi-day packages with progressive treatments are available for extended stays.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Booking Home Massage by Location
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Our streamlined booking process makes scheduling professional massage services simple, regardless of your Bali location.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Same-Day Availability
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    We maintain a team of licensed therapists positioned across Bali, enabling same-day service in most cases. For Seminyak and Canggu locations, we often accommodate bookings with just 2-3 hours notice, subject to therapist availability. Ubud bookings typically require slightly more advance notice due to travel time from coastal areas. For guaranteed service during peak season (July-August, December-January), we recommend booking at least 24 hours in advance.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Timing & Therapist Travel
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    When you <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">book your home massage</Link>, we provide realistic arrival time estimates based on your specific location and current traffic conditions. Seminyak central locations see 30-45 minute arrival times, Canggu ranges from 45-60 minutes, and Ubud typically requires 45-60 minutes from our coastal dispatch points. We communicate directly via WhatsApp to provide real-time updates as your therapist travels, ensuring you're never left wondering about arrival status.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
                    Multi-Session Packages
                  </h3>
                  <p className="text-neutral-700">
                    For guests staying multiple days or weeks, we offer package deals combining multiple sessions at discounted rates. Three-session packages save 10%, five-session packages save 15%, and ten-session packages (popular with long-term Canggu residents) save 20%. Packages can be used for single guests or shared among villa occupants, providing flexibility for families and groups. Check our <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-medium">pricing page</Link> for current package rates and terms.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-neutral-900 mb-2">Book Anytime</h3>
                      <p className="text-sm text-neutral-600">
                        Online booking and WhatsApp available 7am-10pm daily
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-neutral-900 mb-2">Fast Response</h3>
                      <p className="text-sm text-neutral-600">
                        Therapist arrival within 30-90 minutes depending on location
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-neutral-900 mb-2">Group Service</h3>
                      <p className="text-sm text-neutral-600">
                        Multiple therapists for simultaneous treatments
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Area-Specific Pricing
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Transparent pricing based on location, with no hidden fees or surprise charges.
                  </p>
                </div>

                <div className="space-y-6 mb-12">
                  {pricingByArea.map((pricing, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-neutral-900">
                            {pricing.area}
                          </h3>
                          <span className="text-2xl font-bold text-primary-600">
                            {pricing.rate}
                          </span>
                        </div>
                        <p className="text-neutral-600 text-sm">{pricing.note}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-neutral-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Seminyak Rates</h3>
                  <p className="text-neutral-700 mb-4">
                    Standard 60-minute massage sessions in Seminyak start at 320,000 IDR for traditional Balinese or aromatherapy massage. Deep tissue, sports massage, and prenatal treatments are 450,000 IDR. 90-minute extended sessions add 180,000 IDR to base rates. Couples packages (two therapists, simultaneous treatment) start at 590,000 IDR for 60 minutes.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">Canggu Pricing</h3>
                  <p className="text-neutral-700 mb-4">
                    Canggu rates mirror Seminyak pricing at 320,000 IDR for standard 60-minute sessions and 450,000 IDR for specialized treatments. No travel surcharges apply to Echo Beach, Batu Bolong, Berawa, or Pererenan. Remote Canggu locations like Seseh or Padonan may incur small travel fees (50,000-120,000 IDR) depending on distance from main areas.
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">Ubud & Other Areas</h3>
                  <p className="text-neutral-700">
                    Ubud pricing starts at 450,000 IDR for 60-minute sessions, reflecting longer therapist travel time from coastal areas. Central Ubud locations near the market and palace area have no additional fees, while outlying areas like Tegallalang, Payangan, or Sayan may include modest travel surcharges. Sanur, Nusa Dua, and Jimbaran follow standard 320,000 IDR rates, while Uluwatu and Pecatu start at 450,000 IDR.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Villas */}
          <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Popular Villas We Serve
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    We regularly provide services to guests staying at Bali's premier accommodations across all service areas.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                  <p className="text-neutral-700 mb-6">
                    Our therapists are familiar with access procedures, parking situations, and layouts at many of Bali's well-known properties. Whether you're staying at a major hotel, boutique resort, or private villa rental, we coordinate smoothly with property staff and security to ensure seamless service delivery.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {popularVillas.map((villa, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Home className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-neutral-700">{villa}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                  <p className="text-neutral-700">
                    <strong>Note:</strong> Villa and hotel names listed are for reference only. We serve all properties in our service areas, including Airbnb rentals, private villas, guesthouses, and resorts. Contact us with your specific address for confirmation of service availability and timing estimates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Book Your Area Home Massage
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Experience professional Balinese massage in the comfort of your Seminyak villa, Canggu accommodation, or Ubud retreat. Same-day availability across all service areas.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                    <Link href="/home-massage">View Services</Link>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Licensed Therapists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>All Equipment Provided</span>
                  </div>
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
