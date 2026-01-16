import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BalineseMassageSanur() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Sanur | Professional Massage Services"
        description="Relaxing Balinese massage in Sanur delivered to your beachfront villa or hotel. Family-friendly wellness in Bali's most peaceful coastal town."
        keywords="balinese massage sanur, massage sanur, spa sanur, villa massage sanur, family massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Sanur</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Sanur
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Sanur offers Bali's most relaxed beach experience, making it the perfect setting for restorative Balinese massage. As the island's original tourist area, Sanur maintains a gentler pace than newer beach resorts—calm waters, tree-lined beachfront paths, and a strong sense of local community. Our mobile massage service fits beautifully into Sanur's peaceful atmosphere, bringing professional treatments to your beachfront villa, family-friendly hotel, or guesthouse. Whether you're here for a quiet family vacation, extended stay, or peaceful retirement getaway, authentic Balinese healing enhances Sanur's naturally therapeutic environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Sanur
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
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Sanur</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Sanur areas from north to south beach road, including Sindhu, Segara, and Mertasari. Popular choices include gentle <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link> for relaxation, <Link href="/balinese-massage/aromatherapy" className="text-amber-600 hover:text-amber-700 font-medium">Aromatherapy Massage</Link> with calming oils, and <Link href="/balinese-massage/couples-massage" className="text-amber-600 hover:text-amber-700 font-medium">Couples Massage</Link> for romantic beachfront moments. Families often book <Link href="/balinese-massage/reflexology" className="text-amber-600 hover:text-amber-700 font-medium">Reflexology</Link> and <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link> as introductions to spa experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Therapeutic muscle work</p>
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
                    <p className="text-sm text-neutral-600">Warm stone therapy</p>
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
                    <p className="text-sm text-neutral-600">Relaxing essential oils</p>
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
                    <Link href="/balinese-massage/prenatal" className="font-medium text-neutral-900 hover:text-amber-600">Prenatal Massage</Link>
                    <p className="text-sm text-neutral-600">Safe pregnancy care</p>
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
            Also available: <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700">Body Scrubs</Link>, <Link href="/balinese-massage/body-wrap" className="text-amber-600 hover:text-amber-700">Body Wraps</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/lymphatic-drainage" className="text-amber-600 hover:text-amber-700">Lymphatic Drainage</Link>. Complete list on our <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Sanur</h2>
          <p className="text-neutral-700 mb-6">
            Sanur's calm beach, shallow waters, and family-friendly atmosphere make it ideal for wellness and relaxation. The area attracts those seeking peace over party, making it perfect for therapeutic massage. Many visitors choose Sanur for extended stays, allowing for regular massage treatments as part of a wellness routine. The beachfront path is excellent for morning walks, the sunrise is spectacular, and the local community offers authentic Balinese culture without overwhelming tourist crowds. Our service complements this lifestyle by providing convenient, professional massage in your private space. After treatment, enjoy Sanur's excellent restaurants, quiet beach, art markets, and proximity to cultural sites. Popular nearby: Le Mayeur Museum, Sanur Beach, Bali Orchid Garden, and numerous beachfront warungs.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Sanur</h2>
          <p className="text-neutral-700 mb-6">
            Sanur massage pricing offers excellent value: 60-minute sessions at 350,000 IDR, 90-minute treatments at 500,000 IDR, and 120-minute packages at 650,000 IDR. All services include travel throughout Sanur, professional equipment, and quality oils. For long-term guests and regular bookings, inquire about package rates. Full details on our <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Sanur</h2>
          <p className="text-neutral-700 mb-6">
            Book easily via WhatsApp at <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a>. Share your Sanur location, preferred treatment, and timing. We're familiar with all Sanur hotels, villas, and guesthouses. Available daily 9:00 AM to 11:00 PM with flexible scheduling. Morning sessions are popular before beach walks, evening treatments perfect after sunset dinners. Same-day booking often available.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Sanur Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            Our Sanur therapists understand the area's peaceful vibe and the needs of families, couples, and long-term guests. Many have worked in Sanur for years and bring local knowledge alongside professional expertise. We're experienced with all accommodation types from luxury beachfront resorts to comfortable guesthouses. All therapists are certified, gentle in approach, and trained to adapt to different client needs from deep therapeutic work to purely relaxation-focused treatments.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Sanur</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Is Balinese massage suitable for older adults?</h3>
                <p className="text-neutral-700">Absolutely! Many Sanur visitors are retirees and mature travelers. We adjust pressure and techniques for comfort. Balinese massage can be very gentle while still providing therapeutic benefits. Inform us of any health concerns when booking.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can children receive massage?</h3>
                <p className="text-neutral-700">Yes, we offer gentle massage for children and teenagers. Reflexology and foot massage are great introductions for younger clients. Many Sanur families include massage in their vacation wellness routine.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">We're staying for a month. Can we book weekly sessions?</h3>
                <p className="text-neutral-700">Yes! Many Sanur long-term guests establish regular massage schedules. We offer package discounts for multiple bookings. Weekly or bi-weekly sessions are popular with extended-stay visitors.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you serve guesthouses on the quieter southern end?</h3>
                <p className="text-neutral-700">Yes, we service all of Sanur from north to south, including the quieter Mertasari Beach area. Distance within Sanur doesn't affect pricing or availability.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you accommodate early morning bookings before sunrise?</h3>
                <p className="text-neutral-700">While our standard hours start at 9:00 AM, we can sometimes accommodate earlier requests for special circumstances. Contact us to discuss your specific timing needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/denpasar" className="text-amber-600 hover:text-amber-700 font-medium">Denpasar</Link>, <Link href="/balinese-massage/ubud" className="text-amber-600 hover:text-amber-700 font-medium">Ubud</Link>, and <Link href="/balinese-massage/nusa-dua" className="text-amber-600 hover:text-amber-700 font-medium">Nusa Dua</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Sanur Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Peaceful Balinese massage in Sanur's most relaxing beach setting.
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
