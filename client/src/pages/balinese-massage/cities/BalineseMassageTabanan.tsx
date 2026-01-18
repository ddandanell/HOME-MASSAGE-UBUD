import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageTabanan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Tabanan | Professional Massage Services"
        description="Authentic Balinese massage in Tabanan delivered to your rice terrace villa. Traditional healing amid UNESCO World Heritage rice fields and mountain serenity."
        keywords="balinese massage tabanan, massage tabanan, rice terrace massage, jatiluwih massage, traditional healing"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Tabanan</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Tabanan
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Tabanan Regency encompasses Bali's most spectacular rice terraces, including UNESCO World Heritage Jatiluwih, volcanic mountain slopes, and traditional villages untouched by mass tourism. This agricultural heartland offers the island's most authentic rural experience, where ancient Subak irrigation systems still govern rice cultivation and traditional Balinese life continues largely unchanged. Our massage service in Tabanan brings healing treatments to your rice field villa or mountain retreat, complementing the area's natural tranquility with traditional wellness practices. Perfect for those seeking deep relaxation in Bali's most peaceful and culturally authentic setting.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Tabanan
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Services</h2>
          <p className="text-neutral-700">
            Serve Jatiluwih, Bedugul, coastal areas. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Traditional Balinese</Link>, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700">Aromatherapy</Link>, <Link href="/balinese-massage/hot-stone" className="text-amber-600 hover:text-amber-700">Hot Stone</Link>, all 15 treatments. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Full list</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Tabanan</h2>
          <p className="text-neutral-700">
            UNESCO rice terraces, mountain views, authentic villages, Tanah Lot Temple nearby. Most peaceful Bali setting. Ideal for meditation retreats, nature immersion, cultural exploration.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Pricing</h2>
          <p className="text-neutral-700">
            60min 350K, 90min 500K, 120min 650K. All Tabanan areas same price. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Details</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Book</h2>
          <p className="text-neutral-700">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Location details important for remote areas. Daily 9 AM-11 PM.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby</h3>
          <p className="text-neutral-700">
            <Link href="/balinese-massage/canggu" className="text-amber-600 hover:text-amber-700">Canggu</Link>, <Link href="/balinese-massage/ubud" className="text-amber-600 hover:text-amber-700">Ubud</Link>, <Link href="/balinese-massage/seminyak" className="text-amber-600 hover:text-amber-700">Seminyak</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "How do Tabanan's rice terraces influence Balinese massage healing energy?",
          answer: "Tabanan's UNESCO rice terraces create powerful healing environments for authentic Balinese massage. Traditional Balinese philosophy recognizes that agricultural landscapes blessed through Subak water temple rituals carry sacred energy beneficial for treatments. The terraces' geometric patterns and irrigation systems reflect cosmic order that Balinese massage seeks to restore in human bodies. Our therapists working in Tabanan retreat areas incorporate this peaceful agricultural energy into treatments, finding that guests experience deeper Balinese massage relaxation surrounded by blessed rice fields than in commercial settings. The spiritual connection between land stewardship and body care makes Tabanan Balinese massage uniquely profound."
        },
        {
          question: "Can meditation retreat participants enhance practices with Balinese massage?",
          answer: "Absolutely! Tabanan's meditation centers increasingly integrate Balinese massage into wellness programs. Traditional Balinese massage facilitates meditation by releasing physical tension that prevents stillness and clearing energy blockages that distract the mind. The acupressure points in authentic Balinese massage open channels that meditation then activates more powerfully. Many retreat participants schedule Balinese massage mid-program when accumulated sitting creates body resistance, finding that treatments break through meditation plateaus. The holistic Balinese healing approach complements contemplative practices by addressing the body-mind connection that both traditions recognize as essential for spiritual development and inner peace."
        },
        {
          question: "Why is quiet mountain atmosphere ideal for traditional Balinese massage?",
          answer: "Tabanan's peaceful mountain setting creates optimal conditions for deep Balinese massage healing. Traditional Balinese medicine emphasizes that treatments work best in calm environments where nervous systems can fully release into parasympathetic states. Mountain silence allows guests to hear their own breathing and heartbeat during Balinese massage—this body awareness deepens therapeutic effects. The cooler Tabanan temperatures make oil-based Balinese massage more comfortable than coastal heat while fresh mountain air enhances aromatherapy benefits. Many guests report that Balinese massage in Tabanan's tranquil atmosphere produces more profound results than the same techniques in busier, hotter beach locations."
        },
        {
          question: "Do Tabanan's traditional villages offer authentic Balinese massage lineages?",
          answer: "Yes! Tabanan's remote villages preserve Balinese massage knowledge passed through family generations for centuries. Our therapists often learned authentic Balinese healing from elders who never worked in commercial spas—maintaining techniques unchanged by tourist demands for lighter, faster treatments. Traditional Balinese massage in Tabanan includes spiritual elements and specific herb combinations that commercialized versions omit. The area's strong Hindu-Balinese culture ensures that massage remains connected to its sacred origins rather than becoming mere bodywork. Visitors seeking genuinely traditional Balinese massage find that Tabanan offers access to healing lineages preserved through isolation from mass tourism."
        },
        {
          question: "Can Balinese massage support creative inspiration in Tabanan's artistic atmosphere?",
          answer: "Yes! Tabanan attracts writers, artists, and creators who find Balinese massage enhances creative processes. Traditional Balinese massage clears mental clutter and energy stagnation that blocks creativity, while stimulating specific acupressure points believed to open intuition. The deep relaxation from authentic Balinese massage allows subconscious insights to surface—many creative professionals report breakthrough ideas emerging during or after treatments. Tabanan's inspiring mountain landscapes combined with Balinese massage's energy balancing creates powerful conditions for artistic work. The traditional Balinese understanding that physical, mental, and spiritual health interconnect supports the holistic wellness needed for sustained creative output."
        },
        {
          question: "How does Tabanan's agricultural calendar affect Balinese massage availability?",
          answer: "Tabanan's rice farming cycles and temple ceremonies do influence local therapist schedules, though we maintain consistent Balinese massage availability. During major harvest festivals and temple anniversary ceremonies (odalan), some therapists participate in community rituals—this connection to living culture ensures their Balinese massage remains spiritually authentic. We coordinate multiple therapists to guarantee service even during ceremonial periods. Many guests appreciate this integration of Balinese massage practice with actual Balinese religious life rather than commercialized treatments divorced from cultural roots. Understanding that your therapist may have just returned from temple offerings adds meaningful depth to traditional Balinese healing experiences."
        }
      ]} />

      <Footer />
    </div>
  );
}
