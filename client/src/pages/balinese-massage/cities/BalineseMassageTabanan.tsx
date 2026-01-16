import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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

      <Footer />
    </div>
  );
}
