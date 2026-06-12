import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageUbud() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Ubud | Professional Massage Services"
        description="Authentic Balinese massage in Ubud's cultural heart. Traditional healing delivered to your villa surrounded by rice terraces, jungle, and spiritual energy."
        keywords="balinese massage ubud, massage ubud, spa ubud, villa massage ubud, traditional massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Ubud</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Ubud
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Ubud is Bali's spiritual and cultural heartland, where ancient healing traditions thrive amid rice terraces, sacred temples, and verdant jungle. Our Balinese massage service in Ubud connects you with this authentic healing heritage, delivering traditional treatments to your villa, guesthouse, or resort. Surrounded by the energy of Ubud's artists, healers, and spiritual seekers, your massage becomes more than physical therapy—it's a gateway to the deeper wellness practices that have defined Balinese culture for centuries. Whether you're staying in the town center near the Monkey Forest or nestled in rice field villas in Tegallalang, we bring traditional massage wisdom to your peaceful sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Ubud
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
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Ubud</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Ubud areas from the town center to Tegallalang, Penestanan to Nyuh Kuning. The traditional <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link> is our most authentic offering here, deeply rooted in Ubud's healing culture. <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy Massage</Link> using local essential oils and <Link href="/balinese-massage/hot-stone" className="text-amber-600 hover:text-amber-700 font-medium">Hot Stone Massage</Link> with volcanic stones are popular choices. Many wellness retreat guests also choose <Link href="/balinese-massage/lymphatic-drainage" className="text-amber-600 hover:text-amber-700 font-medium">Lymphatic Drainage</Link> and <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700 font-medium">Body Scrubs</Link>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Deep muscle release</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/hot-stone" className="font-medium text-neutral-900 hover:text-amber-600">Hot Stone Massage</Link>
                    <p className="text-sm text-neutral-600">Volcanic stone healing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/aromatherapy" className="font-medium text-neutral-900 hover:text-amber-600">Aromatherapy Massage</Link>
                    <p className="text-sm text-neutral-600">Local essential oils</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/reflexology" className="font-medium text-neutral-900 hover:text-amber-600">Reflexology</Link>
                    <p className="text-sm text-neutral-600">Traditional pressure points</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/couples-massage" className="font-medium text-neutral-900 hover:text-amber-600">Couples Massage</Link>
                    <p className="text-sm text-neutral-600">Romantic rice field setting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/prenatal" className="font-medium text-neutral-900 hover:text-amber-600">Prenatal Massage</Link>
                    <p className="text-sm text-neutral-600">Gentle pregnancy care</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-neutral-700">
            Additional services: <Link href="/balinese-massage/body-wrap" className="text-amber-600 hover:text-amber-700">Body Wraps</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/sports-massage" className="text-amber-600 hover:text-amber-700">Sports Massage</Link>, <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link>. View all <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage services</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Ubud</h2>
          <p className="text-neutral-700 mb-6">
            Ubud's cooler mountain climate, natural jungle sounds, and spiritual atmosphere create the ideal environment for deep healing work. Many visitors come to Ubud specifically for wellness, yoga, and spiritual growth, making massage a natural complement to meditation retreats, yoga practice, and cultural exploration. Our service allows you to experience authentic Balinese healing without leaving your peaceful villa overlooking rice terraces or your jungle bungalow. After your treatment, explore Ubud's renowned yoga studios, visit ancient temples like Tirta Empul, or simply rest in the tranquility of your accommodation. Popular nearby: Sacred Monkey Forest, Tegallalang Rice Terraces, Campuhan Ridge Walk, Ubud Palace, countless yoga studios and art galleries.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Ubud</h2>
          <p className="text-neutral-700 mb-6">
            Our Ubud pricing reflects the authentic healing traditions of this sacred area: 60-minute sessions at 320,000 IDR, 90-minute treatments at 450,000 IDR, and 120-minute immersive experiences at 590,000 IDR. These rates include travel throughout Ubud's various neighborhoods, from town center to outlying rice field villas. No additional charges for distance. Complete pricing on our <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Ubud</h2>
          <p className="text-neutral-700 mb-6">
            Contact us via WhatsApp at <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a>. Include your location (many Ubud addresses are similar, so villa names help), preferred time, and service choice. We're experienced navigating Ubud's winding roads and can find even remote jungle locations. Open daily 9:00 AM to 11:00 PM, with morning sessions especially popular to start your day with intention and evening sessions perfect for unwinding after temple visits and cultural activities.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Ubud Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our Ubud therapists are often born and raised in this healing center, trained in traditional techniques passed through generations. They understand the spiritual dimension of massage and bring genuine Balinese healing wisdom to their work. We respect Ubud's sacred atmosphere and the intentional wellness journey many visitors undertake here. All therapists are certified, experienced with retreat guests and spiritual seekers, and trained to honor the deep relaxation and meditation that Ubud naturally inspires.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Ubud</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you find remote rice field villas in Tegallalang or Sayan?</h3>
                <p className="text-neutral-700">Yes, we regularly service villas throughout Ubud's surrounding areas including Tegallalang, Sayan, Keliki, and Payangan. Our therapists know these areas well and can navigate to remote locations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Are your Ubud therapists trained in traditional methods?</h3>
                <p className="text-neutral-700">Yes, many of our Ubud therapists come from families with generations of healing tradition. They're trained in both ancient techniques and modern professional standards, offering truly authentic Balinese massage.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">I'm on a yoga retreat. Can you accommodate group bookings?</h3>
                <p className="text-neutral-700">Absolutely! We frequently work with yoga retreats, wellness groups, and transformation programs. We can coordinate multiple therapists for simultaneous treatments. Contact us for group rates and scheduling.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">What makes Ubud massage different from beach areas?</h3>
                <p className="text-neutral-700">Ubud's mountain energy, cooler temperature, and spiritual atmosphere create a different healing experience. The natural sounds, sacred geography, and concentration of healers make Ubud massage feel more connected to ancient tradition.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you work with specific accommodations regularly?</h3>
                <p className="text-neutral-700">Yes, we have ongoing relationships with many Ubud guesthouses, boutique hotels, and villa complexes. If you're staying at a well-known property, we're likely familiar with it and can coordinate with staff if needed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/denpasar" className="text-amber-600 hover:text-amber-700 font-medium">Denpasar</Link>, <Link href="/balinese-massage/tabanan" className="text-amber-600 hover:text-amber-700 font-medium">Tabanan</Link>, and <Link href="/balinese-massage/sanur" className="text-amber-600 hover:text-amber-700 font-medium">Sanur</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "Why is Ubud the best place to experience authentic Balinese massage?",
          answer: "Ubud is Bali's cultural heart where traditional Balinese massage techniques have been preserved for generations. Balinese massage therapists in Ubud often train in traditional healing villages nearby, learning ancient methods passed down through families. The spiritual atmosphere of Ubud enhances Balinese massage healing benefits, combining authentic techniques with the area's natural wellness energy and proximity to sacred temples."
        },
        {
          question: "How does the cooler Ubud climate affect my Balinese massage experience?",
          answer: "Ubud's mountain climate creates ideal conditions for Balinese massage. The cooler temperatures allow for deeper pressure work without overheating, while the natural jungle sounds enhance relaxation. Traditional Balinese massage uses warming oils and techniques that feel especially therapeutic in Ubud's fresh air, creating a perfectly balanced healing experience that differs from coastal Balinese massage sessions."
        },
        {
          question: "Can Balinese massage complement my yoga retreat in Ubud?",
          answer: "Absolutely! Balinese massage is the perfect complement to yoga practice in Ubud. Traditional Balinese massage techniques release muscle tension from yoga poses, improve flexibility, and deepen the mind-body connection cultivated in yoga. Many Ubud wellness retreats incorporate Balinese massage as it shares yoga's holistic philosophy, addressing physical, energetic, and spiritual wellbeing through traditional Balinese healing methods."
        },
        {
          question: "What makes Balinese massage in Ubud different from beach locations?",
          answer: "Balinese massage in Ubud connects to the island's spiritual heartland. Unlike beach areas focused on tourism, Ubud's Balinese massage tradition is embedded in daily healing practices and cultural ceremonies. The mountain energy, sacred temple proximity, and concentration of traditional healers make Ubud Balinese massage feel more authentic and spiritually grounded, reflecting centuries of Balinese healing wisdom preserved in this cultural center."
        },
        {
          question: "Do Ubud Balinese massage therapists understand traditional healing philosophy?",
          answer: "Yes, our Ubud-based Balinese massage therapists are often raised in families with generational healing traditions. They understand Balinese massage as part of a larger wellness system that includes herbal medicine, energy work, and spiritual balance. This deeper knowledge makes Ubud Balinese massage more than just physical therapy—it's an authentic experience of traditional Balinese healing culture practiced in its birthplace."
        },
        {
          question: "Can you provide Balinese massage to remote rice field villas around Ubud?",
          answer: "Yes, we provide Balinese massage services throughout all Ubud areas, including remote rice field villas in Tegallalang, Sayan, Keliki, and Payangan. Our therapists know Ubud's winding roads and can navigate to secluded jungle locations. Whether you're staying in town center or a distant rice terrace villa, you'll receive the same authentic Balinese massage experience delivered to your peaceful sanctuary."
        }
      ]} />

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Ubud Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Experience authentic Balinese healing in Ubud's sacred landscape.
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
