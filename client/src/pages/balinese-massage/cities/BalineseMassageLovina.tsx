import { Link } from "wouter";
import { MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageLovina() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Lovina | Professional Massage Services"
        description="Relaxing Balinese massage in Lovina delivered to your north coast resort. Traditional healing in Bali's famous dolphin watching area with calm black sand beaches."
        keywords="balinese massage lovina, massage lovina, north bali massage, dolphin beach massage, calm beach massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Lovina</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Lovina
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Lovina graces Bali's north coast with calm black sand beaches, famous dolphin watching, and a refreshingly different atmosphere from the south. This laid-back area attracts travelers seeking peaceful beaches, authentic local culture, and escape from tourist crowds. Our Balinese massage service complements Lovina's tranquil energy, bringing professional healing treatments to your beachfront hotel or guesthouse. Perfect after early morning dolphin trips, for relaxing between waterfall explorations, or simply embracing the slower pace of north Bali life.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Lovina
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Services in Lovina</h2>
          <p className="text-neutral-700 mb-6">
            All Lovina beach area covered. Full range: <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Traditional Balinese</Link>, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy</Link>, <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link>, <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link>, all 15 treatments. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Complete list</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Lovina</h2>
          <p className="text-neutral-700">
            Famous dolphin watching, calm waters, black sand beaches, Buddhist monastery, hot springs nearby. Peaceful, authentic, family-friendly. Different vibe from south Bali. Nearby: Dolphin trips, Gitgit Waterfalls, Brahma Vihara Arama temple, Banjar hot springs, local markets.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Pricing</h2>
          <p className="text-neutral-700">
            60min 350K, 90min 500K, 120min 650K IDR. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Full pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Book</h2>
          <p className="text-neutral-700">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Hotel name, time, service. Daily 9 AM-11 PM.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">FAQ - Lovina</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Can we book after early dolphin trips?</h3>
                <p className="text-neutral-700">Yes! Many guests book 9-10 AM sessions after returning from sunrise dolphin watching. Perfect for relaxing after the early start.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Is Lovina very different from south Bali?</h3>
                <p className="text-neutral-700">Yes, much quieter and more local. Massage quality identical, but setting more peaceful with authentic north Bali character.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby</h3>
          <p className="text-neutral-700">
            <Link href="/balinese-massage/ubud" className="text-amber-600 hover:text-amber-700">Ubud</Link>, <Link href="/balinese-massage/amed" className="text-amber-600 hover:text-amber-700">Amed</Link>, <Link href="/balinese-massage/canggu" className="text-amber-600 hover:text-amber-700">Canggu</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "Can Balinese massage help early risers recover from dolphin watching trips?",
          answer: "Yes! Lovina's famous dolphin tours start at 5-6 AM, creating fatigue that Balinese massage effectively addresses. Traditional Balinese massage techniques relieve neck strain from boat riding and telescope scanning while restoring energy depleted by early waking. Many guests book Balinese massage around 9-10 AM after returning from dolphin trips, finding that treatments help them enjoy the rest of their day rather than napping away precious vacation time. The circulation-boosting effects of authentic Balinese massage combat drowsiness while the relaxation response doesn't cause sedation, perfectly balancing recovery with continued activity for Lovina's peaceful beach atmosphere."
        },
        {
          question: "How does Lovina's quiet north coast character affect Balinese massage experiences?",
          answer: "Lovina's peaceful atmosphere creates ideal conditions for deep Balinese massage healing. Unlike south Bali's tourist intensity, Lovina's calm allows nervous systems to fully release into the parasympathetic state where traditional Balinese massage achieves maximum effectiveness. The absence of traffic noise and nightlife means treatments can be profoundly meditative, with only ocean sounds accompanying the rhythmic strokes of authentic Balinese massage. Many guests report that Balinese massage in Lovina produces more lasting relaxation than busier areas because the entire environment supports the healing process. The traditional Balinese philosophy of balance thrives in Lovina's unhurried setting."
        },
        {
          question: "Do Lovina's local therapists maintain traditional Balinese massage authenticity?",
          answer: "Absolutely! Lovina's distance from mass tourism preserves authentic Balinese massage lineages better than southern resort areas. Our north coast therapists often learned traditional Balinese massage from family elders who never adapted techniques for tourist preferences. The spiritual elements and specific acupressure sequences in genuine Balinese massage remain intact in Lovina—including prayers, proper oil blessings, and energy channeling that commercialized spas omit. Local Balinese Hindu culture remains strong in north Bali, ensuring that Balinese massage stays connected to its sacred healing origins. Visitors seeking truly traditional treatments often prefer Lovina specifically for this cultural authenticity unavailable in commercialized areas."
        },
        {
          question: "Can Balinese massage complement Lovina's laid-back vacation pace?",
          answer: "Yes! Lovina attracts travelers seeking genuine relaxation, making Balinese massage a perfect wellness addition. The area's slow pace aligns beautifully with traditional Balinese massage philosophy emphasizing gradual, sustained healing rather than quick fixes. Unlike rushed south Bali schedules, Lovina allows proper time for Balinese massage benefits to develop—you can rest after treatment, swim in calm waters, or simply absorb the peaceful energy without feeling pressured to rush to next activities. This unhurried approach mirrors how traditional Balinese healing was always practiced: integrated into natural daily rhythms, not squeezed between tours and restaurant reservations."
        },
        {
          question: "Why is beachfront Balinese massage special in Lovina's calm waters?",
          answer: "Lovina's uniquely calm north coast waters create serene beach conditions perfect for oceanside Balinese massage. Unlike south Bali's crashing waves, Lovina's gentle lapping provides soothing background sounds that enhance traditional Balinese massage's meditative quality. Many beachfront accommodations allow treatments directly by the water, where sea breezes naturally complement aromatherapy oils used in authentic Balinese massage. The traditional Balinese healing philosophy recognizes ocean energy as purifying and balancing—Lovina's peaceful waters provide this benefit without the intensity that can sometimes overwhelm sensitive systems. This gentle coastal energy makes Balinese massage in Lovina especially effective for deep nervous system restoration."
        },
        {
          question: "How does Lovina's authentic Balinese village life enhance massage treatments?",
          answer: "Lovina's functioning village communities provide cultural context that deepens Balinese massage meaning and effectiveness. Therapists live within traditional Balinese social structures—participating in temple ceremonies, banjar meetings, and family compounds—maintaining the spiritual practice that makes Balinese massage more than physical bodywork. The traditional Balinese belief systems underlying authentic massage techniques remain living practices in Lovina, not historical artifacts. Many guests appreciate that their Balinese massage therapist may arrive after morning temple offerings or discuss local ceremonies, connecting treatments to actual Balinese life. This integration of wellness practice with authentic culture makes Lovina Balinese massage profoundly different from tourist-area spa treatments."
        }
      ]} />

      <Footer />
    </div>
  );
}
