import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Star, Sparkles, Heart, Leaf } from 'lucide-react';
import VillaMassageFAQ from '@/components/villa-massage/VillaMassageFAQ';

export default function BalineseVillaMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Villa Massage | Traditional Healing at Your Private Villa"
        description="Professional Balinese villa massage delivered to your private villa in Bali. Experience authentic traditional techniques with aromatic oils. Same-day booking available."
        keywords="balinese villa massage, villa balinese massage, private balinese massage, traditional villa massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Balinese Villa Massage in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Experience authentic traditional Balinese healing with our professional villa massage service delivered to your private accommodation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg">
                    <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                      Book Your Villa Massage Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/villa-massage">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What is Balinese Villa Massage */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Balinese Villa Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Balinese villa massage is an authentic traditional healing therapy that combines ancient Indonesian techniques with the modern convenience of in-villa service. This distinctive villa massage treatment brings centuries-old Balinese healing practices directly to your private accommodation, allowing you to experience genuine cultural wellness without leaving the comfort of your villa. Our professional therapists specialize in delivering this traditional villa massage using time-honored methods passed down through generations of Balinese healers.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The Balinese villa massage technique is characterized by its unique combination of gentle stretches, acupressure points, reflexology, and aromatherapy using traditional essential oils. Unlike standard relaxation treatments, this villa massage style incorporates skin rolling, kneading, and stroking movements that follow the flow of blood toward the heart. Our therapists use their palms, thumbs, and forearms to apply varying degrees of pressure, creating a deeply therapeutic experience that addresses both physical tension and energetic imbalances.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    When you book our Balinese villa massage service, you're choosing more than just a treatment—you're embracing an authentic cultural experience. Each villa massage session begins with a consultation to understand your specific needs and preferences. Our professional therapists arrive at your villa with premium massage oils infused with frangipani, sandalwood, and other traditional Balinese aromatics that enhance the healing properties of the massage. The convenience of having this traditional villa massage delivered to your location means you can fully relax without the stress of traveling to a spa.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    The Balinese villa massage tradition emphasizes holistic healing, viewing the body as an interconnected system where physical, mental, and spiritual wellness are inseparable. Our therapists apply this philosophy to every villa massage session, working to restore balance and harmony throughout your entire being. The technique incorporates elements of traditional Chinese medicine and Indian Ayurveda, reflecting Bali's rich cultural heritage as a crossroads of Asian healing traditions. This comprehensive approach makes Balinese villa massage one of the most effective treatments for addressing stress, muscle tension, and overall wellness.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    What sets our Balinese villa massage apart is the authentic training and expertise of our therapists. Each practitioner has studied traditional Balinese healing techniques and understands the cultural significance behind every movement. When providing villa massage services, they don't simply perform a routine—they channel generations of healing wisdom into therapeutic touch that truly transforms. The aromatic oils used during each villa massage session are carefully selected based on traditional formulations that Balinese healers have refined over centuries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Benefits of Balinese Villa Massage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Deep Relaxation</h3>
                    <p className="text-muted-foreground">
                      Experience profound relaxation as traditional techniques release tension and promote complete body-mind harmony in your villa.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Improved Circulation</h3>
                    <p className="text-muted-foreground">
                      Stimulate blood flow and lymphatic drainage with massage movements that follow natural body rhythms.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Leaf className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Stress Relief</h3>
                    <p className="text-muted-foreground">
                      Reduce cortisol levels and anxiety through therapeutic touch combined with aromatic traditional oils.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Muscle Pain Relief</h3>
                    <p className="text-muted-foreground">
                      Address chronic pain and muscle stiffness with targeted acupressure and deep tissue techniques.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Better Sleep Quality</h3>
                    <p className="text-muted-foreground">
                      Enjoy improved sleep patterns as the massage calms your nervous system and promotes relaxation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Check className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Energy Balance</h3>
                    <p className="text-muted-foreground">
                      Restore energetic harmony through traditional Balinese healing principles that address your whole being.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Villa Massage Pricing
                </h2>
                <Card className="border-2 border-primary">
                  <CardContent className="pt-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Balinese Villa Massage</h3>
                      <p className="text-muted-foreground mb-4">Traditional healing delivered to your villa</p>
                      <div className="text-4xl font-bold text-primary mb-2">Rp 380,000</div>
                      <p className="text-sm text-muted-foreground">per person / 90 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Professional certified therapist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Premium traditional aromatic oils</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Professional massage table and linens</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Same-day booking available</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>Flexible scheduling 8 AM - 10 PM</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                        Book Balinese Villa Massage
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  What to Expect During Your Villa Massage
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">1. Booking Confirmation</h3>
                      <p className="text-muted-foreground">
                        Contact us via WhatsApp to schedule your Balinese villa massage. We confirm your booking, location, and preferred time within minutes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Therapist Arrival</h3>
                      <p className="text-muted-foreground">
                        Our professional therapist arrives at your villa with all necessary equipment including massage table, oils, and linens.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Consultation</h3>
                      <p className="text-muted-foreground">
                        Brief health consultation to customize your villa massage treatment according to your needs and preferences.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. Massage Session</h3>
                      <p className="text-muted-foreground">
                        Enjoy 90 minutes of authentic Balinese villa massage using traditional techniques and aromatic oils.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">5. Relaxation Time</h3>
                      <p className="text-muted-foreground">
                        After your villa massage, take time to rest and absorb the benefits. Herbal tea is provided upon request.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Experience Authentic Balinese Villa Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Book your traditional healing session now and discover why Balinese villa massage is cherished worldwide
                </p>
                <Button size="lg" className="text-lg" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book on WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VillaMassageFAQ items={[
            {
              question: "What pressure level is used in Balinese villa massage?",
              answer: "Balinese villa massage uses medium to firm pressure with long flowing strokes. Villa massage therapists adjust pressure based on your preferences and muscle tension. Traditional Balinese villa massage combines gentle stretching with deeper acupressure, making it ideal for relaxation and therapeutic benefits at your villa."
            },
            {
              question: "How does traditional Balinese villa massage differ from other styles?",
              answer: "Balinese villa massage uniquely combines techniques including deep tissue, reflexology, and aromatherapy in one treatment. Villa massage therapists use palm pressure, thumb work, and gentle stretches. Traditional Balinese villa massage treats the whole body systematically, making it the most comprehensive villa massage style available."
            },
            {
              question: "Can Balinese villa massage help with jet lag and travel fatigue?",
              answer: "Yes! Balinese villa massage is excellent for jet lag recovery with its circulation-boosting strokes and relaxing aromatherapy. Villa massage therapists focus on tension points that tighten during flights. Post-travel Balinese villa massage helps reset your body clock and eases you into vacation mode."
            },
            {
              question: "What essential oils are used in Balinese villa massage?",
              answer: "Balinese villa massage traditionally uses frangipani, sandalwood, and coconut oils with natural aromatherapy benefits. Villa massage therapists bring organic Balinese oils that nourish skin while providing therapeutic scents. The essential oils used in villa massage enhance relaxation and connect you to authentic Balinese healing traditions."
            },
            {
              question: "Is Balinese villa massage suitable for first-time massage recipients?",
              answer: "Absolutely! Balinese villa massage is perfect for beginners with its balanced pressure and flowing rhythm. Villa massage therapists communicate throughout the session and adjust techniques for comfort. Many people choose Balinese as their first villa massage because it's deeply relaxing without being too intense."
            },
            {
              question: "How long should I wait between Balinese villa massage sessions?",
              answer: "Most people enjoy Balinese villa massage every 3-5 days during Bali visits for optimal benefits. Villa massage therapists can provide treatments more frequently for specific issues. Regular Balinese villa massage throughout your stay maintains relaxation and addresses cumulative travel stress effectively."
            }
          ]} />

          {/* Internal Links */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Explore More Villa Massage Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage" className="text-primary hover:underline">
                          Villa Massage Bali Hub
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Explore all our professional villa massage services delivered throughout Bali
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/services" className="text-primary hover:underline">
                          All Villa Massage Services
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Browse our complete range of specialized villa massage treatments
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/cities/ubud" className="text-primary hover:underline">
                          Villa Massage Ubud
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional villa massage services in Ubud's tranquil surroundings
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/cities/seminyak" className="text-primary hover:underline">
                          Villa Massage Seminyak
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Luxury villa massage treatments in Seminyak's beachside villas
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/blog" className="text-primary hover:underline">
                          Villa Massage Blog
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Tips, guides, and insights about villa massage in Bali
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        <Link href="/villa-massage/cities/canggu" className="text-primary hover:underline">
                          Villa Massage Canggu
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Convenient villa massage service for Canggu's surf community
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
