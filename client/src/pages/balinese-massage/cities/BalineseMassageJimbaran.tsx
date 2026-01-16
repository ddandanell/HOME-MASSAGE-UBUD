import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassageJimbaran() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Jimbaran | Professional Massage Services"
        description="Authentic Balinese massage in Jimbaran delivered to your beachfront villa. Traditional healing in Bali's famous fishing village with spectacular sunset views."
        keywords="balinese massage jimbaran, massage jimbaran, spa jimbaran, beach massage, seafood village massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Jimbaran</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Jimbaran
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Jimbaran combines authentic Balinese fishing village charm with upscale beachfront accommodations, creating a unique atmosphere for healing and relaxation. Famous for spectacular sunsets, fresh seafood restaurants lining the beach, and a more local feel than neighboring resort areas, Jimbaran attracts travelers seeking both luxury and authenticity. Our Balinese massage service perfectly complements this balance, bringing traditional healing treatments to your beachfront villa or hotel. Whether you're staying near the fish market in the village center or in a clifftop resort overlooking the bay, we deliver professional massage that enhances Jimbaran's naturally peaceful coastal energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Jimbaran
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
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Jimbaran</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Jimbaran areas from the beach seafood cafes to Bukit Permai, including Four Seasons and InterContinental. Popular treatments include traditional <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link>, ocean-view <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link>, and sunset-timed <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy Massage</Link>. Many guests also enjoy <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link> after beach walks and <Link href="/balinese-massage/hot-stone" className="text-amber-600 hover:text-amber-700 font-medium">Hot Stone Massage</Link> for deep relaxation.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Therapeutic relief</p>
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
                    <p className="text-sm text-neutral-600">Volcanic stone treatment</p>
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
                    <p className="text-sm text-neutral-600">Essential oil therapy</p>
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
                    <p className="text-sm text-neutral-600">Foot healing therapy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/prenatal" className="font-medium text-neutral-900 hover:text-amber-600">Prenatal Massage</Link>
                    <p className="text-sm text-neutral-600">Pregnancy wellness</p>
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
                    <p className="text-sm text-neutral-600">Active recovery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-neutral-700">
            Also: <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700">Body Scrubs</Link>, <Link href="/balinese-massage/body-wrap" className="text-amber-600 hover:text-amber-700">Body Wraps</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/lymphatic-drainage" className="text-amber-600 hover:text-amber-700">Lymphatic Drainage</Link>. See all <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">services</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Jimbaran</h2>
          <p className="text-neutral-700 mb-6">
            Jimbaran's crescent bay creates stunning sunset backdrops and calm waters perfect for relaxation. The area maintains strong fishing village roots alongside luxury development, offering authentic Balinese culture with modern comforts. Our massage service enhances your Jimbaran experience by providing professional treatments in your private space, letting you fully unwind before sunset seafood dinners on the beach or simply enjoy your villa's ocean views. The bay's protected waters keep the atmosphere peaceful, and the local community brings genuine warmth to this special corner of Bali. Popular nearby: Jimbaran Beach seafood restaurants, fish market, Jimbaran Puri Temple, Uluwatu Temple (15 minutes), stunning sunset views over the Indian Ocean.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Jimbaran</h2>
          <p className="text-neutral-700 mb-6">
            Jimbaran massage pricing: 60-minute sessions at 350,000 IDR, 90-minute at 500,000 IDR, 120-minute at 650,000 IDR. All prices include travel throughout Jimbaran, professional setup, and premium oils. Sunset-timed massages especially popular—book your session to end as the sun sets over the bay. Details at <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Jimbaran</h2>
          <p className="text-neutral-700 mb-6">
            Book via WhatsApp <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a> with your Jimbaran location, service choice, and preferred time. We know all Jimbaran areas from beachfront to hillside. Available 9:00 AM to 11:00 PM daily. Evening bookings popular for post-sunset relaxation after beach dining.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Jimbaran Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our Jimbaran therapists understand the area's unique blend of traditional village life and modern luxury. They're experienced with both local guesthouses and five-star resorts, adapting professional service to any setting. All certified, professionally trained, and familiar with Jimbaran's geography and accommodations. We respect both the local community and visiting guests' need for quality, authentic experiences.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Jimbaran</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you time the massage to end at sunset?</h3>
                <p className="text-neutral-700">Absolutely! Many Jimbaran guests request sunset-timed sessions. We'll schedule your massage to end perfectly for sunset viewing from your villa or for walking to beach restaurants at golden hour.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you serve both beachfront and hillside properties?</h3>
                <p className="text-neutral-700">Yes, we service all Jimbaran areas including beachfront villas, village-center guesthouses, and hillside/clifftop resorts overlooking the bay. Same pricing throughout Jimbaran.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can we have massage before going to seafood restaurants?</h3>
                <p className="text-neutral-700">Perfect timing! Many guests book afternoon or early evening massage, then walk to the beach restaurants fully relaxed for sunset dining. We can recommend ideal timing for your dinner plans.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you know where Four Seasons and InterContinental are?</h3>
                <p className="text-neutral-700">Yes, we regularly service both properties and are familiar with their locations and access procedures. We also serve Belmond Jimbaran Puri and all other Jimbaran accommodations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Is Jimbaran quieter than Seminyak for massage?</h3>
                <p className="text-neutral-700">Yes, Jimbaran maintains a more peaceful, village-like atmosphere. The bay's protected waters, local fishing community, and less dense development create a calmer energy perfect for deep relaxation and healing work.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/nusa-dua" className="text-amber-600 hover:text-amber-700 font-medium">Nusa Dua</Link>, <Link href="/balinese-massage/uluwatu" className="text-amber-600 hover:text-amber-700 font-medium">Uluwatu</Link>, and <Link href="/balinese-massage/kuta" className="text-amber-600 hover:text-amber-700 font-medium">Kuta</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Jimbaran Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Traditional Balinese massage with spectacular Jimbaran sunset views.
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
