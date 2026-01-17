import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageDenpasar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Denpasar | Professional Massage Services"
        description="Authentic Balinese massage in Denpasar, Bali's capital city. Traditional healing in the heart of local culture, markets, and authentic Balinese life."
        keywords="balinese massage denpasar, massage denpasar, spa denpasar, city massage, authentic balinese treatment"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Denpasar</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Denpasar
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Denpasar is Bali's bustling capital, where authentic local life thrives amid traditional markets, Hindu temples, museums, and government centers. Far from tourist beaches, Denpasar offers genuine Balinese culture and the island's administrative heart. Our massage service here connects you with traditional healing in its most authentic form, delivered to your city hotel, business accommodation, or residential area. Whether visiting for business, cultural exploration, or family connections, professional Balinese massage brings wellness to Denpasar's urban energy, offering relaxation amid the capital's vibrant daily rhythm.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Denpasar
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Available Services</h2>
          <p className="text-neutral-700 mb-6">
            All Denpasar areas: Renon, Sanglah, Sesetan, Tohpati. Full service range: <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Traditional Balinese</Link>, <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700 font-medium">Deep Tissue</Link>, <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link>, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy</Link>, and more. See all <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">15 services</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Denpasar</h2>
          <p className="text-neutral-700">
            Authentic Balinese culture, traditional markets (Badung, Kumbasari), temples, museums. Perfect for cultural travelers and business visitors. Nearby: Bajra Sandhi Monument, Museum Bali, traditional markets, temples, authentic local experiences.
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
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Address, time, service. Daily 9 AM-11 PM.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby</h3>
          <p className="text-neutral-700">
            <Link href="/balinese-massage/sanur" className="text-amber-600 hover:text-amber-700">Sanur</Link>, <Link href="/balinese-massage/ubud" className="text-amber-600 hover:text-amber-700">Ubud</Link>, <Link href="/balinese-massage/kuta" className="text-amber-600 hover:text-amber-700">Kuta</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "How does authentic Balinese culture in Denpasar enhance massage experiences?",
          answer: "Denpasar as Bali's cultural capital provides the most authentic context for traditional Balinese massage. Our therapists in Denpasar often come from families with generations of Balinese healing knowledge, practicing techniques rooted in Hindu-Balinese ceremonies and Usada healing texts. Unlike tourist areas where Balinese massage becomes commercialized, Denpasar maintains cultural integrity—treatments may include traditional prayers, specific oil blessing rituals, and energy work connected to actual Balinese spiritual practice. The city's temples, ceremonies, and traditional life infuse Balinese massage with genuine cultural depth that makes treatments more meaningful than simplified spa versions."
        },
        {
          question: "Can business travelers in Denpasar benefit from Balinese massage stress relief?",
          answer: "Absolutely! Denpasar's business district creates unique stress patterns that Balinese massage effectively addresses. The acupressure techniques in traditional Balinese massage target tension from meetings, negotiations, and travel between appointments. Unlike quick spa treatments, authentic Balinese massage provides comprehensive stress relief—physical relaxation plus energy balancing that supports mental clarity for business decisions. Many corporate visitors schedule Balinese massage at hotel rooms after work hours, finding that traditional healing methods reduce jetlag, improve sleep quality, and enhance professional performance. The holistic Balinese approach addresses both body and mind exhaustion from business travel."
        },
        {
          question: "Why should visitors explore Balinese massage in Denpasar versus tourist areas?",
          answer: "Denpasar offers genuine Balinese massage experiences without tourist inflation or commercialization. Local therapists charge fair prices reflecting actual Balinese economy rather than inflated resort rates. The traditional Balinese massage in Denpasar maintains authentic techniques—longer sessions, proper acupressure sequences, and spiritual elements often abbreviated in beach area spas. Visitors wanting to understand real Balinese culture find that authentic Balinese massage in the capital provides insights into traditional healing wisdom that tourist-focused treatments don't convey. Denpasar represents where Balinese people actually receive Balinese massage for health rather than vacation entertainment."
        },
        {
          question: "Do Denpasar's temples and ceremonies influence nearby Balinese massage quality?",
          answer: "Yes! Denpasar's concentration of important temples—Pura Jagatnatha, Pura Maospahit—creates spiritual energy that enhances Balinese massage effectiveness. Traditional Balinese healing philosophy recognizes that treatments near sacred sites benefit from accumulated spiritual power. Many Denpasar therapists participate in temple ceremonies, maintaining the spiritual practice that makes Balinese massage more than physical manipulation. Their regular involvement in Hindu-Balinese rituals ensures that the energy channeling and prayer elements of authentic Balinese massage remain genuine rather than performative additions for tourists. This creates profoundly deeper healing experiences rooted in living tradition."
        },
        {
          question: "Can Balinese massage help visitors navigate Denpasar's urban intensity?",
          answer: "Yes! Denpasar's city energy—traffic, noise, commercial activity—creates tension that Balinese massage specifically addresses. Traditional Balinese massage includes techniques for clearing environmental stress from energy bodies, particularly relevant in urban settings where overstimulation accumulates. The deep relaxation induced by authentic Balinese massage counterbalances city stimulation, helping visitors process the cultural intensity of real Balinese life versus resort bubbles. Many travelers schedule Balinese massage after exploring Denpasar's markets and temples, finding that treatments help integrate powerful cultural experiences while releasing the physical fatigue from navigating authentic urban Bali."
        },
        {
          question: "How does mobile Balinese massage serve Denpasar's diverse neighborhoods?",
          answer: "Our mobile service brings professional Balinese massage to all Denpasar areas—business hotels, residential homestays, and mid-range accommodations throughout the capital. Traditional Balinese massage accessibility shouldn't require luxury settings. We provide certified therapists and authentic Balinese massage techniques regardless of location, making traditional healing available to business travelers, cultural explorers, and budget visitors. This reflects traditional Balinese values where healing serves entire communities, not just wealthy elites. Mobile Balinese massage in Denpasar honors the democratic spirit of Balinese culture where wellness practices belong to everyone, maintaining authentic healing traditions in modern urban contexts."
        }
      ]} />

      <Footer />
    </div>
  );
}
