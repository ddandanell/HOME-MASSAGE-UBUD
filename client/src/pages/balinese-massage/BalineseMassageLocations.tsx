import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const locations = [
  { name: "Seminyak", path: "/balinese-massage/seminyak", description: "Upscale beach resort area with luxury villas" },
  { name: "Canggu", path: "/balinese-massage/canggu", description: "Trendy surf town with digital nomad scene" },
  { name: "Ubud", path: "/balinese-massage/ubud", description: "Cultural heart of Bali surrounded by rice terraces" },
  { name: "Sanur", path: "/balinese-massage/sanur", description: "Relaxed beachfront with family-friendly atmosphere" },
  { name: "Nusa Dua", path: "/balinese-massage/nusa-dua", description: "Premium resort enclave on pristine beaches" },
  { name: "Jimbaran", path: "/balinese-massage/jimbaran", description: "Fishing village known for seafood and sunset" },
  { name: "Kuta", path: "/balinese-massage/kuta", description: "Vibrant beach town near the airport" },
  { name: "Legian", path: "/balinese-massage/legian", description: "Lively beach area between Kuta and Seminyak" },
  { name: "Uluwatu", path: "/balinese-massage/uluwatu", description: "Dramatic clifftop area with world-class surf" },
  { name: "Denpasar", path: "/balinese-massage/denpasar", description: "Capital city with authentic local culture" },
  { name: "Tabanan", path: "/balinese-massage/tabanan", description: "Rice terrace region with UNESCO heritage sites" },
  { name: "Amed", path: "/balinese-massage/amed", description: "East coast diving paradise with black sand beaches" },
  { name: "Lovina", path: "/balinese-massage/lovina", description: "North coast retreat famous for dolphin watching" },
  { name: "Candidasa", path: "/balinese-massage/candidasa", description: "Quiet coastal town on the east coast" },
  { name: "Padangbai", path: "/balinese-massage/padangbai", description: "Small port town with excellent snorkeling" },
];

export default function BalineseMassageLocations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage Locations in Bali | Island-Wide Service"
        description="Professional Balinese massage available throughout Bali. From Seminyak to Ubud, Canggu to Nusa Dua - traditional healing delivered to your villa or hotel across 15+ locations."
        keywords="balinese massage locations, massage Bali, spa services Bali, mobile massage Bali, villa massage, hotel massage service"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Island-Wide Coverage</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage Available Throughout Bali
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Experience authentic Balinese massage in the comfort of your villa or hotel. Professional therapists serving 15+ locations across the island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/balinese-massage">
                Learn About Balinese Massage
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl mb-8 text-neutral-900">
            Why Location Matters for Your Balinese Massage Experience
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              Bali's diverse landscape creates unique massage experiences across the island. From the bustling beaches of Seminyak to the tranquil rice terraces of Ubud, from the cultural richness of Denpasar to the untouched beauty of Amed, each location offers its own ambiance and energy. Understanding how location influences your massage experience helps you maximize the therapeutic benefits of this ancient healing art.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4 text-neutral-900">The Importance of Environment in Healing</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Traditional Balinese massage is deeply connected to the concept of Tri Hita Karana—harmony with God, nature, and fellow humans. Your physical location plays a crucial role in achieving this balance. A massage in Ubud, surrounded by jungle sounds and rice field breezes, offers different energy than a beachside treatment in Sanur with ocean waves as your soundtrack. Both are authentic, both are healing, but each location brings its own spiritual dimension to the experience.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              The air quality, ambient sounds, climate conditions, and overall atmosphere of your chosen location directly impact your relaxation depth. Coastal areas like Nusa Dua and Jimbaran offer the therapeutic benefits of sea air, which is naturally rich in negative ions that promote relaxation and improve breathing. Mountain and rice terrace regions like Ubud and Tabanan provide cooler temperatures and the grounding energy of earth elements, ideal for deep meditation and introspection during your massage.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4 text-neutral-900">What to Expect at Different Locations</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              <strong>Beach Resort Areas (Seminyak, Canggu, Sanur, Nusa Dua):</strong> These locations typically feature luxury accommodations with spacious villas, pools, and ocean views. Massage sessions here often incorporate the relaxing rhythm of the ocean and benefit from sea breezes. The atmosphere is resort-oriented, making these areas perfect for vacation-mode relaxation. Our therapists are experienced in navigating high-end resort environments and creating spa-quality experiences in your private space.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              <strong>Cultural and Mountain Areas (Ubud, Tabanan):</strong> Expect cooler temperatures, lush greenery, and a more meditative atmosphere. These locations are ideal for those seeking deeper spiritual connection alongside physical healing. The natural sounds of jungle wildlife, flowing water, and rustling bamboo create an organic soundtrack for your massage. Many visitors find that treatments in these areas feel more connected to traditional Balinese healing practices.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              <strong>Coastal Villages and Quieter Areas (Amed, Lovina, Candidasa, Padangbai):</strong> These less-touristed locations offer authentic Balinese atmosphere with fewer distractions. The pace is slower, the energy more grounded. Massage experiences here often feel more intimate and connected to local tradition. These areas are perfect for those seeking to escape tourist crowds while still receiving professional, high-quality treatment.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4 text-neutral-900">Our Complete Coverage Across Bali</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              We proudly serve 15 major locations across Bali, ensuring that wherever your accommodation is, authentic Balinese massage is within reach. Our service network spans from the vibrant south coast to the peaceful north shore, from the cultural heartland to the dramatic eastern coastline. This extensive coverage means you never have to compromise on quality or convenience, regardless of where you choose to stay on the island.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Each location in our network maintains the same high standards of therapist training, product quality, and service excellence. We employ only certified therapists who have completed rigorous training in traditional Balinese massage techniques. Whether you book a session in the heart of Seminyak or the remote shores of Amed, you receive the same professional, authentic experience.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4 text-neutral-900">Professional Service at Your Villa or Hotel</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Our mobile massage service transforms your private accommodation into a professional spa environment. We arrive with everything needed: professional massage table, premium oils and lotions, fresh linens, and aromatic elements to create the perfect ambiance. This eliminates the need to travel to a spa, find parking, or interrupt your relaxation schedule. You simply prepare your space, and we handle the rest.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              The convenience factor is particularly valuable in Bali, where traffic can be unpredictable and traveling to spas often involves navigating busy streets on motorbikes or in taxis. By bringing the spa to you, we save you time, reduce stress, and allow you to maximize your vacation relaxation. After your massage, you can continue relaxing by your pool, take a leisurely shower in your own bathroom, or even drift into a nap without needing to go anywhere.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              We understand that different accommodations present different environments. Whether you're staying in a beachfront villa in Jimbaran, a jungle bungalow in Ubud, a high-rise hotel in Denpasar, or a boutique guesthouse in Candidasa, our therapists adapt to your space while maintaining professional standards. We work with your environment to create the optimal massage experience, respecting your privacy and the unique character of your accommodation.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-neutral-900">
              Choose Your Location
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Select your area to view specific information, local benefits, and booking details for Balinese massage services in your location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link key={location.path} href={location.path}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <MapPin className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl mb-2 text-neutral-900">
                          {location.name}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-4">
                          {location.description}
                        </p>
                        <div className="text-amber-600 font-medium text-sm flex items-center gap-2">
                          View Services
                          <Navigation className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl mb-12 text-center text-neutral-900">
            Location Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-heading text-xl mb-3 text-neutral-900">Convenient Scheduling</h3>
                <p className="text-neutral-600">
                  Available across all 15 locations with flexible booking times from 9 AM to 11 PM. We work around your vacation schedule, not the other way around.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-heading text-xl mb-3 text-neutral-900">Consistent Quality</h3>
                <p className="text-neutral-600">
                  Same high standards of training, hygiene, and professionalism across every location. All therapists are certified and experienced.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-heading text-xl mb-3 text-neutral-900">Local Expertise</h3>
                <p className="text-neutral-600">
                  Our therapists know each area intimately and can adapt your massage experience to complement your location's unique energy and atmosphere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Experience Authentic Balinese Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Book your massage session in any of our 15 locations across Bali. Professional therapists, premium service, unbeatable convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
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
      </section>

      <Footer />
    </div>
  );
}
