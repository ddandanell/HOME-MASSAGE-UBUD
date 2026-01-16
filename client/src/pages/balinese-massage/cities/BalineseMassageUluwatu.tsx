import { Link } from "wouter";
import { MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassageUluwatu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Uluwatu | Professional Massage Services"
        description="Premium Balinese massage in Uluwatu delivered to your clifftop villa. Healing treatments in Bali's most dramatic coastal location with world-class surf and sunsets."
        keywords="balinese massage uluwatu, massage uluwatu, clifftop massage, surf massage uluwatu, luxury villa massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Uluwatu</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Uluwatu
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Uluwatu perches dramatically on Bali's southwestern cliffs, offering breathtaking ocean vistas, world-famous surf breaks, and luxury villa accommodations. This spectacular peninsula attracts surfers seeking legendary waves, couples celebrating special occasions, and travelers who appreciate natural beauty and exclusive settings. Our Balinese massage service complements Uluwatu's dramatic landscape by delivering professional healing treatments to your clifftop villa or boutique hotel. Whether recovering from surf sessions at Padang Padang, unwinding in your infinity pool overlooking the ocean, or preparing for sunset at Uluwatu Temple, our mobile massage brings traditional Balinese wellness to one of the island's most stunning locations.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Uluwatu
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Services in Uluwatu</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Uluwatu from Bingin to Suluban, Padang Padang to Balangan. Top requests: <Link href="/balinese-massage/sports-massage" className="text-amber-600 hover:text-amber-700 font-medium">Sports Massage</Link> for surfers, romantic <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link> with sunset views, <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Traditional Balinese</Link>, premium <Link href="/balinese-massage/hot-stone" className="text-amber-600 hover:text-amber-700 font-medium">Hot Stone</Link>. All 15 services available. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Full list</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Uluwatu</h2>
          <p className="text-neutral-700">
            Clifftop infinity pools, legendary surf, dramatic sunsets, Uluwatu Temple. Perfect for luxury wellness experiences. Our massage enhances this premium setting. Nearby: Single Fin, Uluwatu Temple, Padang Padang Beach, world-class surf breaks, beach clubs.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing</h2>
          <p className="text-neutral-700">
            60min 350K, 90min 500K, 120min 650K IDR. All Uluwatu areas covered. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Pricing details</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Book</h2>
          <p className="text-neutral-700">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Villa name, time, service. 9 AM-11 PM daily.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby</h3>
          <p className="text-neutral-700">
            <Link href="/balinese-massage/jimbaran" className="text-amber-600 hover:text-amber-700">Jimbaran</Link>, <Link href="/balinese-massage/nusa-dua" className="text-amber-600 hover:text-amber-700">Nusa Dua</Link>, <Link href="/balinese-massage/canggu" className="text-amber-600 hover:text-amber-700">Canggu</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
