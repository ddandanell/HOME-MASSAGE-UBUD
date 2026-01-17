import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageCandidasa() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Candidasa | Professional Massage Services"
        description="Peaceful Balinese massage in Candidasa delivered to your east coast resort. Traditional healing in this quiet coastal town perfect for relaxation and diving."
        keywords="balinese massage candidasa, massage candidasa, east bali massage, quiet beach massage, diving massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Candidasa</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Candidasa
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Candidasa offers a quiet alternative to Bali's busier beach areas, with relaxed coastal atmosphere, good diving and snorkeling, and easy access to east Bali temples and attractions. This small town attracts travelers seeking peace, authentic local interaction, and value accommodations. Our Balinese massage service enhances Candidasa's tranquil setting, bringing professional treatments to your beachfront hotel or guesthouse. Perfect for unwinding in this peaceful corner of east Bali, recovering from temple tours, or complementing diving adventures.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Candidasa
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Services</h2>
          <p className="text-neutral-700">
            All Candidasa area. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Traditional Balinese</Link>, <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700">Deep Tissue</Link>, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700">Aromatherapy</Link>, <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700">Couples</Link>, all 15 treatments. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Full list</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Candidasa</h2>
          <p className="text-neutral-700">
            Quiet beaches, good diving, authentic atmosphere, value accommodations. Gateway to east Bali temples and Amlapura palace. Peaceful alternative to busy areas. Nearby: Lotus Lagoon, snorkeling, Tenganan traditional village, water palaces.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Pricing</h2>
          <p className="text-neutral-700">
            60min 350K, 90min 500K, 120min 650K. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Details</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Book</h2>
          <p className="text-neutral-700">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Hotel, time, service. 9 AM-11 PM.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby</h3>
          <p className="text-neutral-700">
            <Link href="/balinese-massage/padangbai" className="text-amber-600 hover:text-amber-700">Padangbai</Link>, <Link href="/balinese-massage/amed" className="text-amber-600 hover:text-amber-700">Amed</Link>, <Link href="/balinese-massage/sanur" className="text-amber-600 hover:text-amber-700">Sanur</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "Can Balinese massage help divers recover in Candidasa's diving scene?",
          answer: "Absolutely! Candidasa's excellent diving sites create physical demands that traditional Balinese massage effectively addresses. The deep tissue techniques in authentic Balinese massage target shoulder fatigue from equipment handling, back strain from tank weight, and neck tension from regulator positioning. Balinese massage improves circulation essential for safe nitrogen processing after dives while relieving muscle soreness from finning and buoyancy control. Many dive professionals and enthusiasts incorporate regular Balinese massage into their routines, finding that traditional healing methods prevent chronic injuries common in diving communities. The holistic Balinese approach supports both physical recovery and mental clarity needed for dive safety."
        },
        {
          question: "How does Candidasa's quiet atmosphere enhance Balinese massage benefits?",
          answer: "Candidasa's peaceful, uncrowded environment creates ideal conditions for deep Balinese massage healing. Traditional Balinese medicine recognizes that calm surroundings accelerate therapeutic results by allowing complete nervous system relaxation. Unlike busy south Bali, Candidasa's tranquility means treatments can be profoundly meditative, with only ocean sounds and tropical birds accompanying authentic Balinese massage strokes. Many guests report that Balinese massage in Candidasa produces more lasting effects than treatments in tourist-heavy areas because the entire setting supports the parasympathetic state where traditional healing works most effectively. The village's unhurried pace mirrors Balinese massage philosophy of gradual, sustained wellness."
        },
        {
          question: "Do Candidasa's ancient temples influence nearby Balinese massage energy?",
          answer: "Yes! Candidasa's proximity to sacred sites like Pura Candidasa temple enhances Balinese massage through accumulated spiritual energy. Traditional Balinese healing philosophy recognizes that temples radiate power beneficial for treatments—ancient prayer and ceremony create energetic fields that support the spiritual cleansing aspects of authentic Balinese massage. Therapists working in Candidasa often participate in local temple ceremonies, maintaining the religious practice that makes Balinese massage more than physical manipulation. This living connection to Hindu-Balinese spirituality ensures treatments honor traditional healing wisdom rather than becoming simplified spa services divorced from sacred origins that give Balinese massage its unique depth."
        },
        {
          question: "Can Balinese massage serve as gateway exploration before temple visits?",
          answer: "Yes! Many Candidasa visitors use Balinese massage as preparation before visiting east Bali's important temples—Besakih, Tenganan, Tirta Gangga. Traditional Balinese massage clears energy blockages and calms the mind, creating receptive states for experiencing sacred sites' spiritual power. The purification aspects of authentic Balinese massage align with traditional practices of cleansing before temple entry. Many culturally-minded travelers schedule Balinese massage in Candidasa as intentional preparation for deeper Bali exploration, finding that treatments enhance their ability to feel and understand the spiritual energy at ancient temples. This traditional use of Balinese healing supports meaningful cultural engagement."
        },
        {
          question: "Why is authentic Balinese massage well-preserved in less-touristed Candidasa?",
          answer: "Candidasa's quieter tourism profile allows Balinese massage to maintain traditional authenticity better than commercialized areas. Local therapists practice genuine techniques without pressure to adapt for rapid tourist turnover or preferences for lighter, faster treatments. Traditional Balinese massage in Candidasa includes proper spiritual elements—prayers, offerings, energy channeling—that busy resort spas often abbreviate or eliminate. The strong Balinese Hindu culture in east Bali ensures massage remains connected to its healing origins rather than becoming merely bodywork entertainment. Visitors seeking truly authentic Balinese massage often specifically choose Candidasa for this preservation of traditional methods and cultural integrity."
        },
        {
          question: "How does budget-friendly Candidasa make regular Balinese massage accessible?",
          answer: "Candidasa's affordable accommodations allow travelers to experience regular Balinese massage sessions rather than one-time treatments. Traditional Balinese healing philosophy emphasizes cumulative benefits—weekly treatments produce deeper results than occasional spa visits. The area's reasonable prices make this sustained approach financially viable for budget-conscious travelers who want genuine wellness, not just vacation indulgence. Our mobile Balinese massage service brings the same certified therapists and authentic techniques to modest guesthouses as luxury hotels, reflecting traditional Balinese values where healing serves all community members. This accessibility in Candidasa allows more people to experience how traditional Balinese massage transforms health over time."
        }
      ]} />

      <Footer />
    </div>
  );
}
