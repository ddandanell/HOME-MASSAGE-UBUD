import { Link } from "wouter";
import { MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassageLegian() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Legian | Professional Massage Services"
        description="Authentic Balinese massage in Legian delivered to your beachfront hotel. The perfect balance between Kuta's energy and Seminyak's sophistication."
        keywords="balinese massage legian, massage legian, spa legian, beach massage, hotel massage legian"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Legian</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Legian
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Legian bridges the gap between Kuta's vibrant energy and Seminyak's upscale sophistication, offering the best of both worlds. This lively beach area attracts travelers who want easy beach access, good nightlife, and quality accommodations without Seminyak's premium prices or Kuta's overwhelming crowds. Our Balinese massage service fits perfectly into Legian's balanced atmosphere, bringing professional healing treatments to your beachfront hotel or guesthouse. Whether you're recovering from Legian's famous nightlife, soothing sun-soaked skin, or preparing for another day of beach activities, our mobile massage provides authentic Balinese wellness in the comfort of your accommodation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Legian
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/balinese-massage/locations">
                View All Locations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Legian</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Legian from Padma Beach to Double Six. Popular: relaxing <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link>, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy Massage</Link> for beach recovery, <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link> for romantic getaways. <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link> and <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700 font-medium">Deep Tissue</Link> great for active beach vacationers.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { href: "/balinese-massage/deep-tissue", name: "Deep Tissue Massage", desc: "Muscle tension relief" },
              { href: "/balinese-massage/hot-stone", name: "Hot Stone Massage", desc: "Heated stone therapy" },
              { href: "/balinese-massage/aromatherapy", name: "Aromatherapy Massage", desc: "Essential oil healing" },
              { href: "/balinese-massage/reflexology", name: "Reflexology", desc: "Foot pressure points" },
              { href: "/balinese-massage/sports-massage", name: "Sports Massage", desc: "Active recovery" },
              { href: "/balinese-massage/prenatal", name: "Prenatal Massage", desc: "Pregnancy wellness" }
            ].map(service => (
              <Card key={service.href}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <Link href={service.href} className="font-medium text-neutral-900 hover:text-amber-600">{service.name}</Link>
                      <p className="text-sm text-neutral-600">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-neutral-700">
            More: <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700">Body Scrubs</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link>. All <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">services here</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Legian</h2>
          <p className="text-neutral-700 mb-6">
            Legian's wide sandy beach is perfect for swimming and surfing, with beachfront bars creating a social atmosphere. The area offers quality restaurants, good shopping, and active nightlife without overwhelming intensity. Our massage service adds wellness to this fun beach lifestyle, providing professional treatments in your private space. Perfect after long beach days, before evening activities, or for recovery mornings. The location between Kuta and Seminyak means you're central to everything. Nearby: Legian Beach, Double Six Beach, Sky Garden nightclub, endless bars and restaurants, great surf breaks, beach clubs.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Legian</h2>
          <p className="text-neutral-700 mb-6">
            Legian massage pricing: 60min 350K IDR, 90min 500K IDR, 120min 650K IDR. Includes travel, equipment, quality oils throughout Legian. Better value than hotel spas. <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">Full pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Legian</h2>
          <p className="text-neutral-700 mb-6">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a>. Share hotel/location, time preference, service type. We know all Legian properties. Daily 9 AM-11 PM. Same-day usually available.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Legian Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our Legian therapists balance professionalism with the area's relaxed beach vibe. Experienced with beachfront hotels and understand guests' active vacation needs. All certified, reliable, and trained in authentic Balinese techniques. We bring spa-quality treatments to your room at accessible prices.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Legian</h2>
          <div className="space-y-6">
            {[
              { q: "Can you help with hangover recovery massage?", a: "Yes! Gentle Balinese or aromatherapy massage with hydrating oils helps hangover recovery. Many Legian guests book morning-after sessions. Reflexology also excellent for detox support." },
              { q: "Do you serve beachfront hotels like Padma?", a: "Yes, we service all Legian beachfront properties including Padma Resort, All Seasons, and all hotels along the beach road. Familiar with all major properties." },
              { q: "What's the difference between Legian and Seminyak massage?", a: "Same quality service and therapists. Legian offers more affordable accommodation so the overall experience costs less, but massage quality is identical throughout our service areas." },
              { q: "Can we book poolside massage?", a: "Yes! Many Legian hotels have nice pool areas. We can set up poolside if your accommodation allows. Perfect for resort-style relaxation." },
              { q: "Is evening massage available after clubbing?", a: "Yes, we're open until 11 PM. Many guests book late evening sessions for post-party recovery. We can usually accommodate requests up to 10:30 PM for 60-minute sessions." }
            ].map((faq, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2 text-neutral-900">{faq.q}</h3>
                  <p className="text-neutral-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700">
            Also serving: <Link href="/balinese-massage/seminyak" className="text-amber-600 hover:text-amber-700 font-medium">Seminyak</Link>, <Link href="/balinese-massage/kuta" className="text-amber-600 hover:text-amber-700 font-medium">Kuta</Link>, <Link href="/balinese-massage/canggu" className="text-amber-600 hover:text-amber-700 font-medium">Canggu</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Legian Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Perfect beach vacation massage in the heart of Legian.
          </p>
          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
