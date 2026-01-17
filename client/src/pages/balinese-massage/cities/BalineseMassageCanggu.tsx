import { Link } from "wouter";
import { MapPin, Clock, Shield, Star, Phone, Check, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BalineseMassageFAQ from "@/components/balinese-massage/BalineseMassageFAQ";

export default function BalineseMassageCanggu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <SEOHead 
        title="Balinese Massage in Canggu | Professional Massage Services"
        description="Authentic Balinese massage in Canggu delivered to your villa or hotel. Perfect for surfers, digital nomads, and wellness seekers in Bali's trendiest coastal village."
        keywords="balinese massage canggu, massage canggu, spa canggu, villa massage canggu, surf massage"
      />
      <Header />

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Canggu</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900">
            Balinese Massage in Canggu
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Canggu has evolved from a quiet surf village into Bali's coolest wellness destination, attracting surfers, yogis, digital nomads, and health-conscious travelers. Our Balinese massage service fits perfectly into Canggu's laid-back yet intentional lifestyle, providing authentic healing treatments to your villa, guesthouse, or co-living space. Whether you're recovering from dawn surf sessions at Echo Beach, need relief from long hours at laptop-friendly cafes, or simply want to embrace Canggu's wellness culture, our mobile massage brings traditional Balinese healing directly to you in this vibrant coastal community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Book in Canggu
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
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Available Balinese Massage Services in Canggu</h2>
          <p className="text-neutral-700 mb-6">
            We serve all Canggu areas from Berawa to Pererenan, Echo Beach to Batu Bolong. Our most requested treatments here include <Link href="/balinese-massage/sports-massage" className="text-amber-600 hover:text-amber-700 font-medium">Sports Massage</Link> for surfers and athletes, classic <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage</Link> for full-body relaxation, and <Link href="/balinese-massage/deep-tissue" className="text-amber-600 hover:text-amber-700 font-medium">Deep Tissue Massage</Link> for desk workers dealing with computer posture. <Link href="/balinese-massage/lymphatic-drainage" className="text-amber-600 hover:text-amber-700 font-medium">Lymphatic Drainage</Link> is popular among wellness-focused long-term visitors.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <Link href="/balinese-massage/deep-tissue" className="font-medium text-neutral-900 hover:text-amber-600">Deep Tissue Massage</Link>
                    <p className="text-sm text-neutral-600">Perfect for chronic tension</p>
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
                    <p className="text-sm text-neutral-600">Surfer recovery specialist</p>
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
                    <p className="text-sm text-neutral-600">Volcanic stone therapy</p>
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
                    <p className="text-sm text-neutral-600">Essential oil wellness</p>
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
                    <p className="text-sm text-neutral-600">Romantic villa sessions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-neutral-700">
            Also available: <Link href="/balinese-massage/body-scrub" className="text-amber-600 hover:text-amber-700">Body Scrubs</Link>, <Link href="/balinese-massage/body-wrap" className="text-amber-600 hover:text-amber-700">Body Wraps</Link>, <Link href="/balinese-massage/facial" className="text-amber-600 hover:text-amber-700">Facials</Link>, <Link href="/balinese-massage/prenatal" className="text-amber-600 hover:text-amber-700">Prenatal Massage</Link>, and <Link href="/balinese-massage/foot-massage" className="text-amber-600 hover:text-amber-700">Foot Massage</Link>. See all <Link href="/balinese-massage" className="text-amber-600 hover:text-amber-700 font-medium">Balinese Massage services</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Balinese Massage in Canggu</h2>
          <p className="text-neutral-700 mb-6">
            Canggu's unique blend of surf culture, wellness focus, and digital nomad community creates specific massage needs. Surfers need recovery treatments for paddling shoulders and surf injuries. Remote workers need relief from laptop neck and seated posture issues. Long-term visitors want consistent, quality treatments they can trust. Our service addresses all these needs while you stay in your accommodation, whether that's a luxury villa in Pererenan, a co-living space in Batu Bolong, or a guesthouse near Old Man's. After your massage, enjoy Canggu's incredible cafe scene, hit the beach, or continue your wellness routine at one of many yoga studios. Popular nearby: Echo Beach, Batu Bolong Beach, Old Man's, The Lawn, Deus Ex Machina.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Pricing for Balinese Massage in Canggu</h2>
          <p className="text-neutral-700 mb-6">
            Canggu massage pricing remains affordable: 60-minute treatments at 350,000 IDR, 90-minute sessions at 500,000 IDR, and 120-minute luxury experiences at 650,000 IDR. All prices include transportation throughout Canggu, professional equipment, and premium oils. For digital nomads and long-term visitors, ask about package discounts. Full pricing details available on our <Link href="/pricing" className="text-amber-600 hover:text-amber-700 font-medium">pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">How to Book Your Massage in Canggu</h2>
          <p className="text-neutral-700 mb-6">
            Simply message us on WhatsApp at <a href="https://wa.me/628112656869" className="text-amber-600 hover:text-amber-700 font-medium">+62 811-2656-869</a> with your location, preferred time, and service type. We're familiar with all Canggu neighborhoods and can find you easily. Available daily from 9:00 AM to 11:00 PM, with flexible scheduling to accommodate your surf sessions, work schedule, or social plans. Same-day bookings often available outside peak season.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Why Choose Our Canggu Massage Service</h2>
          <p className="text-neutral-700 mb-6">
            We understand Canggu's vibe and community. Our therapists are experienced in treating surf-related issues, computer posture problems, and general travel fatigue. Many are familiar with Canggu's geography and can navigate the area's winding roads with ease. We bring everything needed to transform your accommodation into a professional spa environment, respecting the relaxed but quality-focused culture that makes Canggu special. All therapists certified, professional, and reliable.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl mb-6 text-neutral-900">Frequently Asked Questions - Canggu</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Do you know where all the co-living spaces are?</h3>
                <p className="text-neutral-700">Yes! We regularly service guests at Outpost, Tribal, Zin, and other popular co-living spaces. Just tell us which one you're at and your room details.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you recommend massage for surf recovery?</h3>
                <p className="text-neutral-700">Absolutely. Sports massage or deep tissue massage work best for surf-related muscle fatigue and paddling shoulders. Many surfers book 90-minute sessions focusing on shoulders, back, and neck.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">I'm a digital nomad here for 3 months. Do you offer packages?</h3>
                <p className="text-neutral-700">Yes! We offer package discounts for regular bookings. Many long-term Canggu residents book weekly or bi-weekly sessions. Contact us via WhatsApp to discuss long-term arrangements.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">What if I'm staying in Pererenan or North Canggu?</h3>
                <p className="text-neutral-700">We cover all Canggu areas including Pererenan, Nelayan, Padonan, and the northern reaches. Distance is not an issue—we service the entire Canggu region at the same price.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2 text-neutral-900">Can you come to smaller guesthouses or budget accommodations?</h3>
                <p className="text-neutral-700">Absolutely! We serve all types of accommodations from luxury villas to budget guesthouses. As long as you have a private room with space for a massage table, we can provide our services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl mb-4 text-neutral-900">Explore Nearby Locations</h3>
          <p className="text-neutral-700 mb-4">
            Also serving: <Link href="/balinese-massage/seminyak" className="text-amber-600 hover:text-amber-700 font-medium">Seminyak</Link>, <Link href="/balinese-massage/tabanan" className="text-amber-600 hover:text-amber-700 font-medium">Tabanan</Link>, and <Link href="/balinese-massage/ubud" className="text-amber-600 hover:text-amber-700 font-medium">Ubud</Link>
          </p>
        </div>
      </section>

      <BalineseMassageFAQ items={[
        {
          question: "Can Balinese massage help with surf-related muscle soreness in Canggu?",
          answer: "Absolutely! Balinese massage is perfect for surfers dealing with paddling fatigue and wave-riding injuries. The deep tissue techniques in traditional Balinese massage target shoulder tension, lower back strain, and neck stiffness common after surf sessions at Echo Beach or Batu Bolong. Many Canggu surfers schedule Balinese massage after dawn patrol to accelerate recovery. The ancient Balinese massage healing methods include stretches that improve flexibility and circulation, helping you get back in the water faster while preventing chronic injuries."
        },
        {
          question: "Do Canggu digital nomads benefit from regular Balinese massage?",
          answer: "Yes! Digital nomads working from Canggu's cafes and co-working spaces find Balinese massage essential for managing desk-related tension. Hours at laptops create neck, shoulder, and wrist problems that traditional Balinese massage effectively addresses through acupressure and energy balancing. Regular Balinese massage sessions—weekly or bi-weekly—help remote workers maintain productivity while preventing repetitive strain injuries. The holistic nature of Balinese massage also reduces stress and improves mental clarity, supporting the balanced lifestyle Canggu nomads seek."
        },
        {
          question: "What makes Balinese massage authentic in Canggu's modern wellness scene?",
          answer: "Despite Canggu's trendy evolution, authentic Balinese massage maintains its traditional roots through centuries-old healing techniques. Our therapists practice genuine Balinese massage methods passed down through generations, using aromatic oils, acupressure points, and energy channeling unique to Balinese culture. While Canggu offers many wellness options, traditional Balinese massage connects you to Bali's spiritual heritage. The treatment's holistic approach—addressing physical, mental, and energetic health—reflects the Balinese philosophy of balance, offering deeper healing than modern spa trends."
        },
        {
          question: "Can I book Balinese massage at my Canggu guesthouse or villa?",
          answer: "Yes, our mobile Balinese massage service comes to any Canggu accommodation—from budget guesthouses to luxury villas. We bring professional massage tables, organic oils, and everything needed for authentic Balinese massage in your space. Canggu's diverse lodging options all work perfectly for in-room treatments. Many guests prefer villa Balinese massage because you can relax by your pool afterward, shower immediately, or even nap without navigating Canggu's traffic. The convenience enhances the Balinese massage healing experience significantly."
        },
        {
          question: "How does Balinese massage incorporate traditional Balinese healing wisdom?",
          answer: "Traditional Balinese massage is rooted in Usada healing texts and Hindu-Balinese philosophy. The treatment channels prana (life force energy) through specific pressure points while releasing blocked energy that causes disease according to Balinese medicine. Each Balinese massage stroke follows ancient patterns designed to harmonize body, mind, and spirit. Therapists often incorporate Balinese prayers or mantras, connecting the physical treatment to spiritual cleansing. This makes Balinese massage more than bodywork—it's a complete healing ceremony that modern Canggu wellness enthusiasts increasingly appreciate."
        },
        {
          question: "What's the ideal frequency for Balinese massage during a Canggu stay?",
          answer: "For short visits (1-2 weeks), book Balinese massage every 3-4 days to maintain wellness benefits without overstimulating muscles. Long-term Canggu residents benefit from weekly Balinese massage sessions as preventive healthcare, especially if surfing or working at computers daily. Athletes and digital nomads with chronic issues may start with twice-weekly Balinese massage treatments, then reduce frequency as conditions improve. Traditional Balinese massage works cumulatively—regular sessions deepen healing effects, improve body awareness, and provide consistent stress relief essential for Canggu's active lifestyle."
        }
      ]} />

      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-neutral-900">
            Ready to Book Your Canggu Massage?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Professional Balinese massage delivered to your Canggu accommodation.
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
