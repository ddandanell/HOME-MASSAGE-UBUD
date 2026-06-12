import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageKuta() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Kuta | Professional Massage Services"
        description="Convenient Balinese massage in Kuta delivered to your hotel near the airport. Perfect recovery from travel and beach activities in Bali's most accessible location."
        keywords="balinese massage kuta, massage kuta, spa kuta, hotel massage kuta, airport area massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Kuta</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Kuta
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Kuta is Bali's original tourist beach, conveniently located near the airport and packed with energy. As the island's most accessible beach destination, Kuta attracts first-time visitors, surfers, budget travelers, and anyone seeking vibrant beach town atmosphere. Our Balinese massage service provides a peaceful wellness oasis amid Kuta's bustle, delivering authentic healing treatments to your hotel or guesthouse. Whether you're recovering from long flights, soothing surf-tired muscles, or simply need relaxation before diving into Kuta's nightlife and shopping, our mobile massage brings traditional Balinese healing directly to your accommodation, saving you time and enhancing your stay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Kuta
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/balinese-massage/locations">
                View All Locations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Kuta</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Kuta areas from Tuban near the airport to Kuta Beach and beyond. Most requested are recovery-focused <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link> for jet lag relief, <Link href="/balinese-massage/sports-massage" className="text-amber-600 hover:text-amber-700 font-medium">Sports Massage</Link> for surfers, and <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700 font-medium">Deep Tissue Massage</Link> for travel tension. <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link> and <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link> popular after long shopping walks.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Travel tension relief</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/sports-massage" className="font-medium text-neutral-900 hover:text-amber-600">Sports Massage</Link>
                    <p className="text-sm text-neutral-600">Surf recovery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/aromatherapy" className="font-medium text-neutral-900 hover:text-amber-600">Aromatherapy Massage</Link>
                    <p className="text-sm text-neutral-600">Calming treatment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/reflexology" className="font-medium text-neutral-900 hover:text-amber-600">Reflexology</Link>
                    <p className="text-sm text-neutral-600">Foot pressure therapy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/couples-massage" className="font-medium text-neutral-900 hover:text-amber-600">Couples Massage</Link>
                    <p className="text-sm text-neutral-600">Partner relaxation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/hot-stone" className="font-medium text-neutral-900 hover:text-amber-600">Hot Stone Massage</Link>
                    <p className="text-sm text-neutral-600">Deep warmth therapy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-neutral-700">
            Plus: <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700">Body Scrubs</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/prenatal" className="text-amber-600 hover:text-amber-700">Prenatal</Link>. All <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">services listed here</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Kuta</h2>
          <p className="text-neutral-700 mb-6">
            Kuta's main advantages are convenience and accessibility. Minutes from the airport, steps from famous surf breaks, and surrounded by shopping and dining, Kuta keeps you in the action. Our massage service enhances this by bringing quality wellness to your room, eliminating the need to navigate busy streets for spa treatments. Perfect for jet lag recovery after arrival, muscle relief after surf sessions, or pre-departure relaxation before flights home. The area may be busy, but your massage provides a private sanctuary. Popular nearby: Kuta Beach, Waterbom Bali, Beachwalk Shopping Center, surf breaks, vibrant nightlife, countless restaurants and bars.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Kuta</h2>
          <p className="text-neutral-700 mb-6">
            Kuta pricing: 60-minute 320,000 IDR, 90-minute 450,000 IDR, 120-minute 590,000 IDR. All include travel throughout Kuta and Tuban, professional equipment, quality oils. Great value compared to hotel spa prices. See <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">pricing page</Link> for packages.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Kuta</h2>
          <p className="text-neutral-700 mb-6">
            WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a> with hotel name, preferred time, service. We know all Kuta accommodations. Open 9 AM-11 PM daily. Same-day bookings usually available. Perfect for jet lag—book upon arrival!
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Kuta Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our Kuta therapists are efficient, professional, and experienced with the fast pace of this tourist hub. They understand travelers' needs—quick booking, reliable timing, quality treatments. All certified and trained. We bring professional spa experience to budget and mid-range accommodations, making authentic Balinese massage accessible to all travelers.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Kuta</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can I book same-day after landing?</h3>
                <p className="text-neutral-700">Yes! Many Kuta visitors book massage immediately after airport arrival for jet lag relief. We often accommodate same-day requests, especially during non-peak periods. Message us as soon as you land.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you serve budget hostels and guesthouses?</h3>
                <p className="text-neutral-700">Absolutely! We serve all accommodation types in Kuta from hostels to luxury hotels. As long as you have a private room with space for a massage table, we can provide service.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Is massage good for surf recovery?</h3>
                <p className="text-neutral-700">Yes! Sports massage or deep tissue work excellently for surf-related muscle fatigue, especially shoulders and back. Many Kuta surfers book regular sessions for recovery and injury prevention.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you serve Tuban near the airport?</h3>
                <p className="text-neutral-700">Yes, Tuban is part of our Kuta service area. Same pricing for all Kuta/Tuban locations regardless of distance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can I book before my departure flight?</h3>
                <p className="text-neutral-700">Yes! Pre-departure massage is popular for starting the journey home relaxed. We can time it perfectly so you finish, shower, and head to the airport stress-free.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/legian" className="text-amber-600 hover:text-amber-700 font-medium">Legian</Link>, <Link href="/balinese-massage/seminyak" className="text-amber-600 hover:text-amber-700 font-medium">Seminyak</Link>, and <Link href="/balinese-massage/jimbaran" className="text-amber-600 hover:text-amber-700 font-medium">Jimbaran</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "Can Balinese massage help with jet lag after landing at Ngurah Rai Airport?",
          answer: "Yes! Kuta's proximity to the airport makes it perfect for immediate jet lag relief through Balinese massage. Traditional Balinese massage techniques improve circulation and lymphatic drainage, helping your body adjust to time zone changes faster. The acupressure points targeted in authentic Balinese massage specifically address fatigue and disorientation from long flights. Many travelers book Balinese massage within hours of Kuta hotel check-in to accelerate recovery. The deep relaxation induced by traditional Balinese massage helps reset sleep patterns, ensuring you enjoy your Bali vacation from day one rather than losing days to exhaustion."
        },
        {
          question: "Do budget travelers in Kuta have access to authentic Balinese massage?",
          answer: "Absolutely! Kuta's diverse accommodation options—from hostels to guesthouses—all work for our mobile Balinese massage service. We bring professional equipment and certified therapists to any Kuta location, making authentic Balinese massage accessible regardless of budget. Traditional Balinese massage techniques remain the same whether in luxury hotels or modest guesthouses—the healing wisdom doesn't change. Many backpackers appreciate that quality Balinese massage is affordable in Bali, offering genuine therapeutic benefits at prices far lower than Western countries, making traditional healing accessible to all travelers."
        },
        {
          question: "How does Balinese massage benefit surfers at Kuta Beach?",
          answer: "Kuta's famous surf breaks create demand for Balinese massage among wave riders. Traditional Balinese massage deep tissue work targets paddling-related shoulder tension, lower back strain from pop-ups, and neck stiffness from duck dives. The stretching techniques in authentic Balinese massage improve flexibility crucial for surf performance while preventing injury. Many surf schools recommend Balinese massage for students dealing with beginner soreness. Regular Balinese massage sessions help dedicated surfers maintain body conditioning throughout their Kuta stay, extending surf days rather than sitting out due to muscle fatigue and strain."
        },
        {
          question: "Can Kuta party-goers use Balinese massage for hangover recovery?",
          answer: "Yes! Balinese massage is surprisingly effective for post-party recovery in Kuta's nightlife scene. Traditional Balinese massage techniques improve liver function and toxin elimination through acupressure on detoxification points. The increased circulation from authentic Balinese massage helps clear alcohol metabolites faster while reducing headache severity. Aromatherapy oils used in Balinese massage soothe nausea and restore balance. Many Sky Garden and Bounty regulars schedule late-morning Balinese massage sessions to recover before evening activities resume, making traditional Balinese healing an essential part of Kuta's party-and-recovery lifestyle."
        },
        {
          question: "Why is quick-booking Balinese massage important in busy Kuta?",
          answer: "Kuta's constant activity makes spontaneous Balinese massage availability crucial. Our mobile service offers same-day Balinese massage bookings throughout Kuta, accommodating travelers' unpredictable schedules. Traditional Balinese massage doesn't require lengthy spa appointments—we come to you when you're ready. Whether you suddenly need relief after unexpected surf wipeouts or want relaxation between shopping at Beachwalk Mall and dinner, flexible Balinese massage scheduling fits Kuta's fast-paced environment. This convenience ensures you experience authentic Balinese healing whenever your body needs it, not just when spas have openings."
        },
        {
          question: "What makes traditional Balinese massage authentic despite Kuta's tourism?",
          answer: "While Kuta is heavily commercialized, authentic Balinese massage maintains its traditional integrity through properly trained therapists. Our practitioners learned genuine Balinese massage techniques from Balinese masters, not abbreviated spa training programs. Traditional Balinese massage includes specific acupressure sequences, energy channeling, and stretches rooted in centuries-old healing wisdom—these fundamentals never change regardless of location. We ensure Balinese massage in Kuta honors traditional methods rather than simplified tourist versions. The healing power of authentic Balinese massage transcends Kuta's commercial atmosphere when performed by therapists committed to preserving cultural heritage."
        }
      ]} />

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Kuta Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Convenient Balinese massage in central Kuta, perfect after flights and surf.
          </p>
          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
