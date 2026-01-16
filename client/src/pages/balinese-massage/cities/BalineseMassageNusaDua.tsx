import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassageNusaDua() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Nusa Dua | Professional Massage Services"
        description="Luxury Balinese massage in Nusa Dua delivered to your premium resort or villa. Five-star wellness on pristine beaches in Bali's most exclusive resort area."
        keywords="balinese massage nusa dua, massage nusa dua, spa nusa dua, luxury villa massage, resort massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Nusa Dua</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Nusa Dua
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Nusa Dua represents Bali's pinnacle of luxury resort living, where pristine white-sand beaches meet world-class hospitality. Our premium Balinese massage service matches this five-star environment, delivering authentic healing treatments to your resort, luxury villa, or exclusive accommodation. As Bali's most carefully planned resort enclave, Nusa Dua attracts discerning travelers who expect excellence in every aspect of their vacation. We meet this standard by providing professional, certified therapists who bring spa-quality experiences directly to your private space, allowing you to enjoy traditional Balinese wellness without leaving your beautiful resort setting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Nusa Dua
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
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Nusa Dua</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Nusa Dua resort areas including BTDC complex, Tanjung Benoa, and surrounding luxury villas. Popular treatments include signature <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link>, premium <Link href="/balinese-massage/hot-stone" className="text-amber-600 hover:text-amber-700 font-medium">Hot Stone Massage</Link>, and romantic <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link> for honeymoons. <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy Massage</Link> and <Link href="/balinese-massage/lymphatic-drainage" className="text-amber-600 hover:text-amber-700 font-medium">Lymphatic Drainage</Link> are also highly requested in this wellness-focused area.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Intensive therapeutic work</p>
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
                    <p className="text-sm text-neutral-600">Premium stone therapy</p>
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
                    <p className="text-sm text-neutral-600">Luxury essential oils</p>
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
                    <p className="text-sm text-neutral-600">Traditional foot therapy</p>
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
                    <p className="text-sm text-neutral-600">Expectant mother care</p>
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
                    <p className="text-sm text-neutral-600">Athletic recovery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-neutral-700">
            Additional services: <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700">Body Scrubs</Link>, <Link href="/balinese-massage/body-wrap" className="text-amber-600 hover:text-amber-700">Body Wraps</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link>. Full service list at <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Nusa Dua</h2>
          <p className="text-neutral-700 mb-6">
            Nusa Dua's pristine beaches, protected reef, and manicured resort grounds create an atmosphere of refined relaxation. The area's careful planning ensures quiet, safety, and beauty at every turn. Our mobile massage service enhances this premium experience by eliminating the need to leave your resort for spa treatments. Whether you're staying at a major resort like St. Regis, Mulia, or Grand Hyatt, or in a private luxury villa, we bring five-star massage quality to your location. After your treatment, enjoy Nusa Dua's calm swimming beaches, world-class golf, the Bali Collection shopping complex, and easy access to cultural attractions. Popular nearby: Waterblow, Pasifika Museum, Bali Collection, Geger Beach, and numerous resort beach clubs.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Nusa Dua</h2>
          <p className="text-neutral-700 mb-6">
            Our Nusa Dua pricing delivers exceptional value for luxury resort guests: 60-minute sessions at 350,000 IDR, 90-minute treatments at 500,000 IDR, and 120-minute experiences at 650,000 IDR. These rates include transportation throughout Nusa Dua and Tanjung Benoa, professional equipment, and premium products—often at a fraction of resort spa prices. No hidden fees. Detailed pricing at <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">our pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Nusa Dua</h2>
          <p className="text-neutral-700 mb-6">
            Book via WhatsApp at <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a> with your resort or villa name, room/villa number, preferred time, and service type. We're experienced working with resort security and staff, ensuring smooth coordination. Available daily 9:00 AM to 11:00 PM. Advanced booking recommended during peak seasons (July-August, December-January), though same-day appointments often available during quieter periods.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Nusa Dua Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our therapists are specially trained for luxury resort environments, understanding the high service standards expected in Nusa Dua. They're professional, discreet, and experienced in coordinating with resort staff and security protocols. We use only premium oils, maintain immaculate presentation, and deliver experiences that meet or exceed resort spa quality. All therapists are certified, background-checked, and trained in five-star hospitality standards. Many have years of experience servicing Nusa Dua's most prestigious properties.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Nusa Dua</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you access gated resort communities?</h3>
                <p className="text-neutral-700">Yes, we regularly service guests at all major Nusa Dua resorts and are familiar with security procedures. Simply provide your resort name and room number, and we'll coordinate entry with resort staff.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">How does your service compare to resort spa pricing?</h3>
                <p className="text-neutral-700">We typically offer 30-50% savings compared to resort spa prices while maintaining equivalent quality. You receive the same professional treatment, premium products, and authentic techniques at significantly better value.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can we book beachfront or poolside massage at our villa?</h3>
                <p className="text-neutral-700">Absolutely! Many Nusa Dua villas have beautiful outdoor spaces perfect for massage. We can set up wherever you prefer—bedroom, living area, poolside cabana, or beachfront pavilion.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you serve Tanjung Benoa as well as BTDC Nusa Dua?</h3>
                <p className="text-neutral-700">Yes, we service all of Nusa Dua including the main BTDC resort area and the entire Tanjung Benoa peninsula at the same pricing.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you provide massage for a private event or celebration?</h3>
                <p className="text-neutral-700">Yes! We frequently service private events, villa parties, and celebrations in Nusa Dua. We can arrange multiple therapists for group experiences. Contact us for event pricing and coordination.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/jimbaran" className="text-amber-600 hover:text-amber-700 font-medium">Jimbaran</Link>, <Link href="/balinese-massage/uluwatu" className="text-amber-600 hover:text-amber-700 font-medium">Uluwatu</Link>, and <Link href="/balinese-massage/sanur" className="text-amber-600 hover:text-amber-700 font-medium">Sanur</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Nusa Dua Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Five-star Balinese massage delivered to your Nusa Dua resort or villa.
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
