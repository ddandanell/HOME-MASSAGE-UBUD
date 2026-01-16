import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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

      <Footer />
    </div>
  );
}
