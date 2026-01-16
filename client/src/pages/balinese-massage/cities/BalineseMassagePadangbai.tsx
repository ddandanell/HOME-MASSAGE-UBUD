import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassagePadangbai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Padangbai | Professional Massage Services"
        description="Authentic Balinese massage in Padangbai delivered to your guesthouse near the port. Perfect recovery massage for travelers and divers in this charming harbor town."
        keywords="balinese massage padangbai, massage padangbai, port massage, diving massage, harbor massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Padangbai</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Padangbai
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Padangbai is a small harbor town serving as Bali's gateway to Lombok and the Gili Islands. This charming port village offers excellent snorkeling, diving, budget-friendly accommodations, and authentic local atmosphere. Popular with backpackers, divers, and travelers in transit, Padangbai maintains a relaxed, community feel. Our Balinese massage service brings professional healing to your guesthouse or hotel, perfect for recovery after diving, relaxation before ferry journeys, or simply unwinding in this unpretentious seaside village.
          </p>

          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book in Padangbai
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Services in Padangbai</h2>
          <p className="text-neutral-700">
            Full service throughout Padangbai: <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Traditional Balinese</Link>, <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700">Deep Tissue</Link>, <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700">Reflexology</Link>, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700">Aromatherapy</Link>, all 15 treatments. <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700">Complete service list</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Why Padangbai</h2>
          <p className="text-neutral-700">
            Excellent snorkeling (Blue Lagoon, Bias Tugel Beach), diving, ferry port to Gili Islands and Lombok, backpacker-friendly, authentic local vibe, small-town charm. Perfect stopover or diving base. Nearby: Blue Lagoon, Secret Beach, dive sites, local warungs, ferry terminal.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Pricing</h2>
          <p className="text-neutral-700">
            60min 350K, 90min 500K, 120min 650K IDR. Budget-friendly professional massage. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Full pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">Book</h2>
          <p className="text-neutral-700">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700">+62 811-2656-869</a>. Guesthouse name, time, service. Daily 9 AM-11 PM.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6">FAQ - Padangbai</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Can we book between ferry schedules?</h3>
                <p className="text-neutral-700">Yes! Many transit travelers book massage during Padangbai stopovers. Quick 60-minute sessions popular for ferry wait times. Just let us know your schedule.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">Do you serve budget guesthouses?</h3>
                <p className="text-neutral-700">Absolutely! Padangbai is known for budget accommodations. We serve all guesthouses and small hotels. Same professional service regardless of accommodation type.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Nearby</h3>
          <p className="text-neutral-700">
            <Link href="/balinese-massage/candidasa" className="text-amber-600 hover:text-amber-700">Candidasa</Link>, <Link href="/balinese-massage/amed" className="text-amber-600 hover:text-amber-700">Amed</Link>, <Link href="/balinese-massage/sanur" className="text-amber-600 hover:text-amber-700">Sanur</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
