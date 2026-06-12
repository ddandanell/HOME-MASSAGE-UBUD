import { Link } from "wouter";
import { MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

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
            60min 320K, 90min 450K, 120min 590K IDR. All Uluwatu areas covered. <Link href="/pricing" className="text-amber-600 hover:text-amber-700">Pricing details</Link>.
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

      <BalineseMassageFAQ items={[
        {
          question: "Can clifftop villa Balinese massage incorporate Uluwatu's dramatic ocean views?",
          answer: "Yes! Uluwatu's spectacular clifftop settings enhance Balinese massage through powerful natural energy. Traditional Balinese healing philosophy recognizes that dramatic landscapes amplify treatment effectiveness—the meeting of earth, sky, and ocean creates potent spiritual energy. Our therapists position the treatment area to capture views when possible, allowing the Balinese massage relaxation to merge with Uluwatu's breathtaking beauty. Many guests report that Balinese massage with crashing wave sounds and endless horizons creates transcendent experiences, connecting ancient Balinese healing wisdom with the raw power of nature in ways that enclosed spa rooms simply cannot achieve."
        },
        {
          question: "Do Uluwatu surfers need specialized Balinese massage for intense wave riding?",
          answer: "Absolutely! Uluwatu's world-class waves demand serious physical performance, making Balinese massage essential recovery. Traditional Balinese massage deep tissue techniques address paddling shoulder stress, pop-up explosiveness requirements, and wipeout impact trauma specific to powerful reef breaks. The stretching in authentic Balinese massage maintains flexibility critical for maneuvering in hollow Uluwatu barrels. Many professional surfers incorporate regular Balinese massage into training regimens because traditional methods effectively prevent chronic injuries while accelerating recovery. The holistic Balinese approach balances physical repair with mental focus needed for challenging Uluwatu surf conditions."
        },
        {
          question: "How does Uluwatu Temple's sacred energy influence nearby Balinese massage?",
          answer: "Uluwatu Temple's ancient spiritual power infuses the entire peninsula, enhancing Balinese massage performed in its proximity. Traditional Balinese healing recognizes that sacred sites radiate energy beneficial for treatments—temples amplify the spiritual cleansing aspects of authentic Balinese massage. Therapists often incorporate prayers honoring the temple's protective deities, connecting treatments to centuries of ritual practice. Many visitors specifically choose Uluwatu for Balinese massage because the area's spiritual atmosphere facilitates deeper healing states. The combination of Balinese massage techniques with temple-blessed energy creates profound transformative experiences rooted in genuine Balinese Hindu wisdom."
        },
        {
          question: "Can sunset timing enhance Uluwatu Balinese massage experiences?",
          answer: "Yes! Scheduling Balinese massage during Uluwatu's legendary sunsets creates magical healing moments. Traditional Balinese medicine considers sunset a sacred transition time when energy shifts from active (day) to receptive (night)—ideal for Balinese massage absorption. The golden light and dramatic sky colors deepen relaxation responses, making treatments more effective. Many luxury villa guests time Balinese massage to finish at sunset, emerging refreshed to watch the sky's transformation with heightened awareness. This alignment of natural beauty, spiritual timing, and authentic Balinese massage creates holistic experiences that honor traditional healing's connection to cosmic rhythms."
        },
        {
          question: "Why is luxury villa privacy important for authentic Uluwatu Balinese massage?",
          answer: "Uluwatu's exclusive villas provide the private sanctuary where traditional Balinese massage achieves maximum effectiveness. Authentic Balinese healing requires trust and vulnerability—exposing body and energy to therapeutic manipulation. Crowded spas create tension that inhibits this openness, while private villa Balinese massage allows complete relaxation necessary for deep healing. Uluwatu's clifftop isolation naturally supports the meditative state where Balinese massage addresses not just physical pain but emotional and spiritual blockages. The combination of dramatic natural setting, luxurious privacy, and certified therapists creates optimal conditions for experiencing traditional Balinese massage's full transformative potential."
        },
        {
          question: "Can Balinese massage complement Uluwatu's luxury resort lifestyle?",
          answer: "Absolutely! Uluwatu attracts discerning travelers who appreciate premium experiences, and authentic Balinese massage fits perfectly into this luxury lifestyle. Traditional Balinese healing methods offer sophistication that modern spa trends cannot match—centuries-old techniques refined through generations provide depth that fashionable treatments lack. Our certified therapists understand high-end hospitality standards while maintaining genuine Balinese massage authenticity. Many luxury villa guests find that in-villa Balinese massage surpasses resort spas because treatments combine traditional healing wisdom with complete privacy and personalized attention. The intersection of authentic Balinese massage with Uluwatu's exclusive atmosphere creates wellness experiences as exceptional as the location itself."
        }
      ]} />

      <Footer />
    </div>
  );
}
