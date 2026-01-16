import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassageSeminyak() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Seminyak | Professional Massage Services"
        description="Premium Balinese massage in Seminyak delivered to your villa or hotel. Traditional healing meets luxury convenience in Bali's most sophisticated beach resort area."
        keywords="balinese massage seminyak, massage seminyak, spa seminyak, villa massage, hotel massage seminyak"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Seminyak</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Seminyak
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Seminyak represents the pinnacle of Bali's luxury resort experience, and our Balinese massage service matches this sophistication. As the island's most upscale beach destination, Seminyak attracts discerning travelers who appreciate quality, privacy, and authentic experiences. Our mobile massage service brings traditional Balinese healing directly to your villa or hotel, allowing you to enjoy world-class spa treatments without leaving your luxurious accommodation. With experienced therapists familiar with Seminyak's high-end properties, we deliver premium wellness experiences that complement your stay in this exclusive area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Seminyak
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
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Seminyak</h2>
          <p className="text-neutral-700 mb-6">
            We offer the complete range of traditional Balinese massage and spa services throughout Seminyak, from the Oberoi to Petitenget, Kayu Aya to Batu Belig. Our most popular treatments in this area include the classic <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link>, the detoxifying <Link href="/balinese-massage/lymphatic-drainage" className="text-amber-600 hover:text-amber-700 font-medium">Lymphatic Drainage Massage</Link>, and rejuvenating <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700 font-medium">Body Scrubs</Link>. Many Seminyak guests also love our <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link> for romantic villa experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Intensive muscle relief</p>
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
                    <p className="text-sm text-neutral-600">Heated volcanic stones</p>
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
                    <p className="text-sm text-neutral-600">Essential oil healing</p>
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
                    <p className="text-sm text-neutral-600">Pressure point therapy</p>
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
                    <p className="text-sm text-neutral-600">Athletic recovery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-neutral-700">
            Additional services include <Link href="/balinese-massage/body-wrap" className="text-amber-600 hover:text-amber-700">Body Wraps</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link>, and <Link href="/balinese-massage/chair-massage" className="text-amber-600 hover:text-amber-700">Chair Massage</Link> for events. View our complete <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage services</Link> for detailed descriptions.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Seminyak</h2>
          <p className="text-neutral-700 mb-6">
            Seminyak's villa and hotel accommodations are among Bali's finest, featuring private pools, ocean views, and spacious layouts perfect for in-room spa treatments. The area's sophisticated atmosphere attracts visitors seeking privacy and exclusivity, making our mobile massage service ideal for this location. After your treatment, you can step directly into your private pool or relax on your oceanview terrace without navigating Seminyak's busy streets. The beach is minutes away, world-class dining surrounds you, and boutique shopping lines Jalan Kayu Aya—but with our service, you don't need to leave your sanctuary for world-class massage therapy. Popular nearby: Potato Head Beach Club, La Plancha, Ku De Ta, and the famous Seminyak sunset strip.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Seminyak</h2>
          <p className="text-neutral-700 mb-6">
            Our Seminyak massage pricing is transparent and competitive: 60-minute sessions start at 350,000 IDR, 90-minute treatments at 500,000 IDR, and 120-minute luxury experiences at 650,000 IDR. These rates include all equipment, premium oils, and travel to your location throughout Seminyak. No hidden fees, no surprises. For detailed pricing on specialty treatments and package options, visit our <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Seminyak</h2>
          <p className="text-neutral-700 mb-6">
            Booking is simple via WhatsApp at <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a>. Message us with your preferred date, time, service type, and Seminyak location. We typically respond within minutes and can often accommodate same-day bookings. Our service hours are 9:00 AM to 11:00 PM daily, perfect for fitting massage into your vacation schedule whether you prefer morning wellness sessions or evening relaxation after beach days.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Seminyak Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our therapists are extensively trained in traditional Balinese techniques and experienced in servicing Seminyak's luxury properties. We understand the high standards expected in this area and consistently exceed them. All therapists are certified, background-checked, and trained in professional hospitality standards. We use only premium oils and bring spa-quality equipment to ensure your experience matches or exceeds what you'd find at Seminyak's top spas—with the added convenience of your private villa setting.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Seminyak</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you serve all areas of Seminyak?</h3>
                <p className="text-neutral-700">Yes, we cover all Seminyak areas including Oberoi, Petitenget, Kayu Aya, Batu Belig, and Dhyana Pura. From beachfront villas to properties near Eat Street, we serve the entire Seminyak region.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you accommodate couples massage in our villa?</h3>
                <p className="text-neutral-700">Absolutely! Seminyak villas are perfect for couples massage. We bring two therapists and two massage tables for simultaneous treatments. This is one of our most popular Seminyak services, especially for romantic getaways and honeymoons.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">What if I'm staying at a hotel rather than a villa?</h3>
                <p className="text-neutral-700">We serve all Seminyak accommodations, including hotels and resorts. We coordinate with hotel staff as needed and can perform treatments in your room or designated spa areas if available.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">How far in advance should I book during peak season?</h3>
                <p className="text-neutral-700">Seminyak is very busy during July-August and December-January. We recommend booking 2-3 days in advance during these periods. Same-day bookings are often available during quieter months (February-June, September-November).</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you provide massage for a villa party or event?</h3>
                <p className="text-neutral-700">Yes! We offer chair massage and short massage sessions for private events, villa parties, and wellness retreats. This is popular for bachelorette parties, yoga retreats, and corporate groups staying in Seminyak villas. Contact us for group rates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/canggu" className="text-amber-600 hover:text-amber-700 font-medium">Canggu</Link>, <Link href="/balinese-massage/legian" className="text-amber-600 hover:text-amber-700 font-medium">Legian</Link>, and <Link href="/balinese-massage/kuta" className="text-amber-600 hover:text-amber-700 font-medium">Kuta</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Seminyak Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Experience authentic Balinese massage in the comfort of your Seminyak villa or hotel.
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
