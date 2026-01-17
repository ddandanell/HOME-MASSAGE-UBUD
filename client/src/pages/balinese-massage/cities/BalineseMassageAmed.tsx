import { Link } from "wouter";
import { MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageAmed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Amed | Professional Massage Services"
        description="Authentic Balinese massage in Amed delivered to your beachfront bungalow. Healing treatments in Bali's peaceful diving paradise on the stunning east coast."
        keywords="balinese massage amed, massage amed, diving massage, east bali massage, beachfront massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Amed</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Amed
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Amed stretches along Bali's peaceful east coast, offering black sand beaches, world-class diving and snorkeling, and stunning views of Mount Agung. This laid-back fishing village area attracts divers, snorkelers, and travelers seeking authentic Bali away from tourist crowds. Our Balinese massage service enhances Amed's tranquil atmosphere, bringing traditional healing to your beachfront bungalow or dive resort. Perfect for recovery after diving, soothing sun exposure, or simply embracing the peaceful energy of east Bali's most beautiful coastline.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Amed
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Available Services in Amed</h2>
          <p className="text-neutral-700 mb-6">
            We serve entire Amed coast from Jemeluk to Bunutan. Popular: <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Traditional Balinese</Link>, <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700 font-medium">Deep Tissue</Link> for dive recovery, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy</Link>, <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link>. All 15 treatments available. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Full service list</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Choose Amed</h2>
          <p className="text-neutral-700">
            World-class diving, black sand beaches, Mount Agung views, traditional fishing villages. Peaceful, authentic, uncrowded. Perfect for diving holidays and quiet getaways. Nearby: USS Liberty shipwreck, Japanese Shipwreck, coral gardens, salt making villages, sunset views of Mount Agung.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Pricing</h2>
          <p className="text-neutral-700">
            60min 350K, 90min 500K, 120min 650K IDR. All Amed coast same price. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Pricing details</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">How to Book</h2>
          <p className="text-neutral-700">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Resort/bungalow name, village area, time, service. 9 AM-11 PM daily.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Choose Our Amed Service</h2>
          <p className="text-neutral-700">
            Our therapists understand Amed's diving community and peaceful vibe. Experienced with beachfront properties and dive resort guests. Certified, professional, familiar with the entire east coast.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">FAQ - Amed</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Is massage safe after diving?</h3>
                <p className="text-neutral-700">Wait at least 4-6 hours after diving before massage. Gentle treatments best. Deep tissue not recommended same day as diving. Many divers book morning-after sessions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Do you serve all villages along the coast?</h3>
                <p className="text-neutral-700">Yes, entire Amed area from Jemeluk to Bunutan, Lipah, Selang, and beyond. Just provide your accommodation name and village.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Can we book beachfront massage?</h3>
                <p className="text-neutral-700">Yes! Many Amed bungalows have beautiful beachfront locations. We can set up by the beach if conditions allow. Perfect with ocean sounds and Mount Agung views.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby Locations</h3>
          <p className="text-neutral-700">
            Also serving: <Link href="/balinese-massage/candidasa" className="text-amber-600 hover:text-amber-700">Candidasa</Link>, <Link href="/balinese-massage/padangbai" className="text-amber-600 hover:text-amber-700">Padangbai</Link>, <Link href="/balinese-massage/ubud" className="text-amber-600 hover:text-amber-700">Ubud</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "Can Balinese massage help divers recover in Amed's diving community?",
          answer: "Absolutely! Amed's diving scene creates specific body stress that Balinese massage effectively addresses. The deep tissue techniques in traditional Balinese massage target shoulder fatigue from equipment carrying, lower back strain from tank weight, and neck tension from regulator positioning. Balinese massage also supports decompression by improving circulation and lymphatic drainage—helping the body process nitrogen safely after deep dives. Many dive instructors and dedicated divers incorporate regular Balinese massage into their routines, finding that traditional healing methods prevent chronic injuries while maintaining flexibility essential for diving safety. The holistic Balinese approach supports both physical recovery and the calm mental state required for safe diving."
        },
        {
          question: "How does Amed's quiet east coast atmosphere enhance Balinese massage?",
          answer: "Amed's peaceful, unhurried energy creates ideal conditions for deep Balinese massage healing. Traditional Balinese medicine recognizes that healing accelerates in calm environments where nervous systems fully relax—Amed's lack of traffic, nightlife, and tourist crowds provides this sanctuary. The sound of gentle waves and fishing boats enhances Balinese massage's meditative quality, allowing treatments to address not just physical tension but energetic and emotional blockages. Many guests report that Balinese massage in Amed produces more profound results than busier areas because the entire environment supports the relaxation response that traditional healing requires for optimal effectiveness and long-lasting benefits."
        },
        {
          question: "Do Amed beachfront bungalows provide ideal settings for Balinese massage?",
          answer: "Yes! Amed's traditional beachfront bungalows offer perfect environments for authentic Balinese massage. The open-air Balinese architecture, ocean breezes, and natural sounds create conditions where traditional Balinese massage originated—outdoors in nature rather than enclosed spas. Many bungalows have massage pavilions or beachside platforms where treatments capture Mount Agung views and sea air. The traditional Balinese healing philosophy emphasizes connection to natural elements during treatment, making Amed's simple beachfront settings more aligned with authentic Balinese massage practice than luxury hotel rooms. The combination of skilled therapists, proper techniques, and natural beauty creates deeply healing experiences without unnecessary commercial amenities."
        },
        {
          question: "Can traditional fishing village culture influence Balinese massage authenticity?",
          answer: "Yes! Amed's fishing village heritage preserves authentic Balinese healing practices better than developed tourist areas. Local therapists often learned Balinese massage from family elders who treated fishing communities for generations, maintaining techniques designed for ocean-related body stress. Traditional Balinese massage in fishing villages includes specific methods for shoulder and back problems from boat work—knowledge applicable to modern tension patterns. The spiritual elements of Balinese massage remain connected to ocean ceremonies and fishing traditions still practiced in Amed, ensuring treatments honor complete cultural context. This living tradition makes Amed Balinese massage more authentic than commercialized spa versions."
        },
        {
          question: "Why is sunrise timing special for Balinese massage in Amed?",
          answer: "Amed's east coast location makes sunrise treatments uniquely powerful for traditional Balinese massage. Balinese philosophy considers dawn a sacred time when spiritual energy peaks—scheduling treatments around sunrise aligns with natural rhythms that enhance healing. The cool morning temperature makes oil-based Balinese massage comfortable while fresh sea air amplifies aromatherapy benefits. Many guests book early Balinese massage sessions (7-8 AM) to capture this special energy, finding that treatments at dawn produce deeper relaxation and more lasting benefits. The combination of traditional Balinese healing techniques with Amed's spectacular sunrise energy creates transformative wellness experiences rooted in natural and cultural wisdom."
        },
        {
          question: "How does budget-friendly Amed accommodate authentic Balinese massage?",
          answer: "Amed's affordable accommodations don't compromise Balinese massage quality—authentic healing depends on therapist skill and traditional techniques, not luxury settings. Our mobile service brings the same certified practitioners and professional Balinese massage methods to simple bungalows as to upscale villas. This accessibility reflects traditional Balinese values where healing serves entire communities, not just wealthy tourists. Many budget travelers specifically choose Amed because they can afford regular Balinese massage sessions, experiencing consistent traditional healing that produces cumulative benefits. The democratic spirit of authentic Balinese massage—available to all who seek wellness—thrives in Amed's unpretentious, community-focused atmosphere better than exclusive resort environments."
        }
      ]} />

      <Footer />
    </div>
  );
}
