import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Calendar, MapPin, DollarSign, Users, Clock } from 'lucide-react';

export default function HomeMassageGuideBali() {
  return (
    <>
      <SEOHead 
        title="Home Massage Bali: Complete 2025 Guide | Home Massage Ubud"
        description="Home massage in Bali: benefits, booking process, pricing ($50-150), and what to expect. Professional therapists to your villa. Book today. 500+ happy clients."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-primary">Ultimate Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Home Massage in Bali: The Complete Guide to At-Home Spa Services
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Everything you need to know about booking professional home massage services in Bali
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    When you're in Bali, relaxation should be effortless. Home massage brings professional spa therapy directly to your villa, hotel, or accommodation—eliminating travel stress and maximizing your vacation time. This complete guide covers everything you need to know about <Link href="/home-massage"><span className="text-primary hover:underline">home massage services</span></Link> in Bali, from booking to pricing to what to expect during your session.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Whether you're staying in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, or <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, home massage offers unmatched convenience and privacy. You'll discover why thousands of visitors choose home massage over traditional spa visits—and how to book the perfect session for your needs.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    In this guide, you'll learn about different massage styles, pricing ranges, booking procedures, and expert tips for getting the most from your home massage experience. Let's dive in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What is Home Massage */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What is Home Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Home massage is professional massage therapy delivered by licensed therapists at your chosen location. Instead of traveling to a spa, the therapist brings oils, towels, linens, and music directly to you. You provide a comfortable surface — your bed or a floor mat works perfectly. The service offers the same quality and professionalism as traditional spa massage, with added convenience and privacy.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 mt-8">How Home Massage Works</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    The process is simple: you book your preferred massage type and time, confirm your location, and a certified therapist arrives at your door. They set up in your room, perform the massage, and clean up afterward. The entire experience is designed to be hassle-free, allowing you to relax before, during, and after your treatment.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Most home massage services operate throughout Bali's main tourist areas, typically offering same-day or next-day appointments. Services include traditional <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese massage</span></Link>, <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue massage</span></Link>, aromatherapy, and specialized treatments.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 mt-8">Benefits vs Spa Visits</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Home massage eliminates travel time, waiting in reception areas, and navigating unfamiliar facilities. You maintain complete privacy in your own space, can schedule treatments around your vacation activities, and often save money compared to high-end spa resorts. For couples and groups, home massage offers exceptional value since you're not paying premium spa facility fees.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 mt-8">Who Home Massage is Perfect For</h3>
                  <p className="text-lg text-muted-foreground">
                    Home massage suits travelers who value convenience, couples seeking romantic experiences, families with children who can't easily visit spas, busy professionals with limited time, and anyone preferring privacy. If you're staying at a villa or vacation rental, home massage transforms your accommodation into a personal spa retreat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Home Massage Services */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Types of Home Massage Services in Bali
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Traditional Balinese Massage</span></Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        The signature style of Bali combines gentle stretching, acupressure, aromatherapy, and reflexology. Balinese massage uses long, flowing strokes combined with rolling and kneading techniques to relieve tension and improve circulation. This is Bali's most popular home massage choice, offering an authentic cultural experience that promotes deep relaxation and energy balance.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Best for relaxation and stress relief</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>60-90 minute sessions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>$50-80 average price</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep Tissue & Sports Massage</span></Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Intensive therapy targeting deeper muscle layers using firmer pressure and focused techniques. Deep tissue massage addresses chronic pain, muscle injuries, and persistent tension. Popular with athletes, surfers, and anyone with specific problem areas. This home massage style requires therapists with advanced training and experience.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Targets chronic pain and tension</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>60-90 minute sessions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>$60-90 average price</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">Aromatherapy & Relaxation Massage</span></Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Gentle, soothing massage using essential oils and lighter pressure. Aromatherapy massage focuses on stress relief and mental relaxation through calming touch and therapeutic scents. Perfect for those new to massage, sensitive to pressure, or seeking pure pampering. This home massage style creates a spa-like sensory experience in your accommodation.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Gentle pressure, pure relaxation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>60-90 minute sessions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>$55-85 average price</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples Massage at Home</span></Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Two therapists provide synchronized massage to two people simultaneously in the same room. Couples massage creates a shared relaxation experience perfect for honeymoons, anniversaries, or romantic getaways. Each person can choose their preferred massage style and pressure level. This home massage option offers exceptional value and intimate bonding time.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Perfect for couples and friends</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>60-90 minute sessions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>$110-150 for two people</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Prenatal & Postnatal Massage</h3>
                      <p className="text-muted-foreground mb-4">
                        Specialized massage for pregnant and postpartum women using techniques adapted for safety and comfort. Prenatal massage helps reduce pregnancy discomfort, swelling, and stress. Postnatal massage aids recovery and supports new mothers. Therapists trained in pregnancy massage understand proper positioning and pressure points to avoid. This home massage service offers privacy and comfort during a sensitive time.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Safe for pregnancy and postpartum</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>60 minute sessions recommended</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>$65-95 average price</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Benefits of Booking Home Massage
                </h2>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-4">Convenience & Time Savings</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Skip Bali's notorious traffic entirely. No need to arrange transportation, navigate unfamiliar streets, or coordinate schedules around spa hours. Home massage comes to you on your schedule. You can book a session before exploring temples, after a day at the beach, or even during your children's nap time. The time you save translates directly to more vacation enjoyment.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Privacy & Comfort</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Enjoy massage in your personal space without encountering strangers in robes or making small talk in waiting areas. Your accommodation becomes a private spa where you control the environment—temperature, lighting, music, and atmosphere. After your massage, you can rest undisturbed, shower in your own bathroom, and continue relaxing without rushing to leave a facility.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Customized Experience</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Home massage services adapt to your preferences more easily than spa facilities. Want two massages in one day? Need to reschedule by 30 minutes? Prefer your session on your balcony overlooking rice fields? Home massage therapists accommodate special requests that spas often can't match. You receive personalized attention focused entirely on your needs.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Better Value for Groups</h3>
                  <p className="text-lg text-muted-foreground">
                    When booking for couples, families, or friend groups, home massage offers exceptional value. You're not paying markup for spa facilities, reception staff, and premium real estate. Multiple therapists can work simultaneously at your villa, creating a private spa party experience. The per-person cost often drops significantly compared to booking individual spa appointments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Book */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  How to Book Home Massage in Bali
                </h2>
                
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Step 1: Choose Your Service</h3>
                      <p className="text-muted-foreground mb-4">
                        Start by selecting your massage type based on your needs. Want relaxation? Choose Balinese or aromatherapy. Need therapeutic work? Select deep tissue or sports massage. Traveling with a partner? Book <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples massage</span></Link>. Most services offer 60, 90, or 120-minute sessions.
                      </p>
                      <p className="text-muted-foreground">
                        Consider any special requirements: pregnancy-safe techniques, specific pressure preferences, or add-ons like foot reflexology or aromatherapy upgrades. Reputable home massage providers clearly describe each service and help you choose the right option.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Step 2: Schedule & Location</h3>
                      <p className="text-muted-foreground mb-4">
                        Provide your preferred date, time, and exact location. Include your villa name, hotel, or detailed address. Many services operate in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, and <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, but confirm coverage for your specific area.
                      </p>
                      <p className="text-muted-foreground">
                        Popular time slots include late morning (10am-12pm), afternoon (2pm-4pm), and evening (6pm-8pm). Same-day booking is often available, though advance reservations ensure your preferred time and therapist.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Step 3: Confirm Booking</h3>
                      <p className="text-muted-foreground mb-4">
                        You'll receive confirmation with therapist details, arrival time, total price, and any preparation instructions. Some services require deposit payment; others accept payment after treatment. Confirm the cancellation policy—most allow free cancellation up to 24 hours before your appointment.
                      </p>
                      <p className="text-muted-foreground">
                        Good home massage services send reminders via WhatsApp or SMS, including the therapist's name and photo for your security and peace of mind.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Step 4: Prepare Your Space</h3>
                      <p className="text-muted-foreground mb-4">
                        Clear a comfortable space approximately 2 meters by 3 meters. Bedrooms work perfectly, but balconies, living rooms, or garden pavilions are also great options. The therapist brings everything needed—linens, oils, and music.
                      </p>
                      <p className="text-muted-foreground">
                        You simply need space and perhaps dimmed lighting. Many guests enjoy opening balcony doors for fresh air or setting up in garden areas. Your therapist will adapt to whatever comfortable space you provide.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Home Massage Pricing in Bali
                </h2>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-4">Standard Pricing Ranges</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Home massage in Bali typically costs $50-150 depending on massage type, duration, and location. A standard 60-minute Balinese massage averages $50-70. Deep tissue or specialty massages range $60-90. Couples massage for two people costs $110-150. These prices include therapist travel, equipment, and often complimentary bottled water.
                  </p>
                  
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-4">Typical Price Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="font-medium">60-min Balinese Massage</span>
                          <span className="text-primary font-bold">$50-70</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="font-medium">90-min Balinese Massage</span>
                          <span className="text-primary font-bold">$70-95</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="font-medium">60-min Deep Tissue Massage</span>
                          <span className="text-primary font-bold">$60-90</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="font-medium">90-min Deep Tissue Massage</span>
                          <span className="text-primary font-bold">$85-120</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="font-medium">60-min Couples Massage (2 people)</span>
                          <span className="text-primary font-bold">$110-140</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium">90-min Couples Massage (2 people)</span>
                          <span className="text-primary font-bold">$150-180</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-2xl font-bold mb-4">Factors Affecting Cost</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Location plays a role in pricing. Services in remote areas may charge extra for therapist travel time. Peak season (July-August, December-January) sometimes sees slight price increases. Specialty services like prenatal massage or hot stone treatments often cost 10-20% more than standard massage. Late-night appointments (after 9pm) may incur additional fees.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Package Deals & Discounts</h3>
                  <p className="text-lg text-muted-foreground">
                    Many home massage providers offer package discounts for multiple bookings. Book 3 sessions, save 10%. Book 5 sessions, save 15%. Group bookings (4+ people) often qualify for reduced rates. Returning customers frequently receive loyalty discounts. Always ask about current promotions—villa owners sometimes have special arrangements with local massage services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What to Expect During Your Home Massage
                </h2>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-4">Therapist Arrival & Setup</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Your therapist arrives punctually with fresh linens, massage oils, and calming music. Setup takes 5-10 minutes. They'll ask about your preferred music volume, room temperature, and massage pressure. This is your opportunity to communicate any injuries, sensitive areas, or special requests.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">The Treatment Experience</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    You'll undress to your comfort level (typically to underwear) and lie comfortably under a sheet. The therapist maintains professional draping throughout, exposing only the area being worked on. They use techniques appropriate to your chosen massage style—flowing strokes for Balinese, firmer pressure for deep tissue, gentle touch for aromatherapy. Feel free to request pressure adjustments or ask questions during the session.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">After Your Massage</h3>
                  <p className="text-lg text-muted-foreground">
                    The therapist will leave the room briefly so you can dress in privacy. They'll pack up their equipment efficiently. Most guests tip 10-20% for excellent service (though not mandatory). After the therapist leaves, you can shower, nap, or simply rest. Many people report deep relaxation lasting several hours. Drink plenty of water to help flush released toxins from massage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Preparation Section */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Preparing for Your Home Massage
                </h2>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-4">Space Requirements</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    You need approximately 2 meters by 3 meters of flat, obstacle-free space. Your bed or a floor mat serves as the treatment surface. Bedrooms work perfectly, but consider other options: balconies with privacy, pavilions, covered outdoor areas, or spacious living rooms. Ensure there's enough room for the therapist to move comfortably.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">What to Have Ready</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    The therapist brings everything needed for your massage. However, you might want to prepare: dimmed lighting or candles, opened windows for fresh air (if desired), and access to bathroom facilities. Have your payment ready if you're paying cash. Ensure pets are secured in another area. Turn your phone on silent to maximize relaxation.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Timing Your Appointment</h3>
                  <p className="text-lg text-muted-foreground">
                    Schedule your home massage when you have time to relax afterward. Many guests book late afternoon sessions so they can shower and nap before dinner. Avoid booking immediately before activities requiring alertness—massage deeply relaxes both body and mind. Allow 15 minutes before and after your scheduled time for setup and cleanup.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Common Questions About Home Massage
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Do I need to provide anything?</h3>
                      <p className="text-muted-foreground">
                        Just provide a comfortable surface — your bed or a floor mat works perfectly. Professional home massage services bring everything else: fresh linens, quality oils, towels, and music. Some guests enjoy providing their own music playlist, but this is optional. The therapist arrives fully equipped for your session.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Can I request male/female therapists?</h3>
                      <p className="text-muted-foreground">
                        Yes. Most home massage services allow you to specify therapist gender when booking. This is a common request, especially for solo female travelers or conservative clients. Reputable services accommodate this preference without question or extra charge.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
                      <p className="text-muted-foreground">
                        Same-day booking is often available, especially outside peak season. However, booking 24-48 hours ahead ensures your preferred time slot and therapist. During high season (July-August, December-January) or for specific therapists, book 2-3 days in advance. Popular evening slots fill quickly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">What about tipping?</h3>
                      <p className="text-muted-foreground">
                        Tipping is appreciated but not mandatory in Bali. For excellent service, 10-20% is customary. Many clients tip 50,000-120,000 IDR ($3-8 USD) for standard sessions. If your therapist went above and beyond—arrived early, accommodated special requests, or provided exceptional treatment—consider tipping on the higher end. Carry cash for tipping, as digital tips rarely reach therapists directly.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Book Your Home Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Experience professional massage therapy in the comfort of your Bali accommodation. Our certified therapists bring spa-quality treatments directly to your villa, hotel, or vacation rental.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" asChild>
                    <Link href="/contact">Book Your Session</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <Card>
                    <CardContent className="p-6">
                      <MapPin className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Service Areas</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, and surrounding areas
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <Users className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Certified Therapists</h3>
                      <p className="text-sm text-muted-foreground">
                        All therapists are licensed, experienced, and background-checked for your safety
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <CheckCircle className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                      <p className="text-sm text-muted-foreground">
                        500+ five-star reviews from happy clients. Your relaxation is our priority
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
