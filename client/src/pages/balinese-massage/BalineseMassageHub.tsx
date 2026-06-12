import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Shield, MapPin, Heart, Star, Users, Sparkles } from 'lucide-react';

export default function BalineseMassageHub() {
  return (
    <>
      <SEOHead 
        title="Balinese Massage Bali | Traditional Indonesian Massage Therapy"
        description="Experience authentic Balinese massage in Bali. Traditional techniques, professional therapists, and premium service at your villa or hotel. Book your Balinese massage today."
        keywords="Balinese massage, traditional Balinese massage, Balinese massage Bali, authentic Balinese massage, Indonesian massage"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Balinese Massage in Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Experience the healing power of authentic Balinese massage with traditional techniques passed down through generations. Professional therapists bring this ancient Indonesian therapy to your villa or hotel.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Your Balinese Massage
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/balinese-massage/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What is Balinese Massage? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What is Balinese Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Balinese massage is a traditional Indonesian healing therapy that combines gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of energy throughout your body. This ancient practice has been refined over centuries in Bali, creating a unique therapeutic experience that addresses both physical tension and emotional stress.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike other massage modalities, Balinese massage uses a combination of firm but gentle pressure, skin rolling, and kneading techniques along with aromatic essential oils. The treatment works on multiple levels - relieving muscle tension, improving blood circulation, calming the nervous system, and restoring balance to your body's energy pathways.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Each Balinese massage session incorporates traditional techniques including long, flowing strokes combined with palm and thumb pressure along meridian lines. Therapists may also use percussion, kneading, and gentle stretching to release deep-seated tension. The rhythmic application of pressure promotes deep relaxation while the aromatic oils enhance the therapeutic benefits.
              </p>
              <p className="text-lg text-muted-foreground">
                What sets Balinese massage apart is its holistic approach. It doesn't just address physical symptoms but treats the whole person - body, mind, and spirit. This makes it particularly effective for those seeking both physical relief and emotional rejuvenation during their time in Bali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits of Balinese Massage */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Benefits of Balinese Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Stress Relief & Relaxation</h3>
                  <p className="text-muted-foreground">
                    Balinese massage calms the nervous system, reduces cortisol levels, and promotes deep relaxation through gentle, rhythmic techniques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Sparkles className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Improved Circulation</h3>
                  <p className="text-muted-foreground">
                    The flowing strokes and pressure techniques enhance blood flow, delivering oxygen and nutrients throughout your body.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Pain & Tension Relief</h3>
                  <p className="text-muted-foreground">
                    Acupressure and deep tissue techniques target muscle knots, releasing chronic tension and alleviating pain.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Star className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Enhanced Sleep Quality</h3>
                  <p className="text-muted-foreground">
                    Regular Balinese massage treatments help regulate sleep patterns and improve overall sleep quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Check className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Lymphatic Drainage</h3>
                  <p className="text-muted-foreground">
                    Specific techniques support the lymphatic system, helping to remove toxins and reduce water retention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Energy Balance</h3>
                  <p className="text-muted-foreground">
                    Working on energy meridians, Balinese massage restores balance and vitality to your entire system.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground">
              Beyond these primary benefits, Balinese massage can also help boost immune function, improve skin tone, reduce anxiety, and enhance overall well-being. Many clients report feeling lighter, more centered, and deeply rejuvenated after their treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Traditional Techniques Used */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Traditional Techniques Used in Balinese Massage
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Acupressure</h3>
                <p className="text-muted-foreground">
                  Therapists apply firm pressure to specific points along energy meridians, releasing blockages and stimulating the body's natural healing response. This technique targets both physical tension and energy imbalances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Long Gliding Strokes</h3>
                <p className="text-muted-foreground">
                  Continuous, flowing movements using palms and forearms warm the muscles, improve circulation, and create a meditative rhythm that calms the mind. These strokes are the foundation of authentic Balinese massage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Skin Rolling</h3>
                <p className="text-muted-foreground">
                  A unique technique where the therapist gently lifts and rolls the skin to stimulate blood flow, release fascial restrictions, and promote lymphatic drainage. This feels both invigorating and deeply therapeutic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Reflexology</h3>
                <p className="text-muted-foreground">
                  Focused pressure on reflex points in the feet and hands corresponds to different organs and systems, promoting whole-body healing through these micro-systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Gentle Stretching</h3>
                <p className="text-muted-foreground">
                  Passive stretching movements increase flexibility, release joint tension, and enhance range of motion. These yoga-inspired stretches are performed with care and attention to your comfort.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Aromatherapy Integration</h3>
                <p className="text-muted-foreground">
                  Traditional Balinese essential oils like frangipani, sandalwood, and lemongrass enhance the therapeutic effects while creating a deeply sensory experience that connects you to Bali's natural healing traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What to Expect During Your Session */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What to Expect During Your Balinese Massage Session
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Your Balinese massage experience begins the moment our therapist arrives at your villa or hotel. They'll bring all necessary equipment including a professional massage table, fresh linens, premium oils, and traditional aromatherapy blends.
              </p>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Session Timeline:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong>Setup (5-10 minutes):</strong> Your therapist arranges the space, prepares oils, and discusses any specific concerns or areas of focus.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong>Treatment (60-120 minutes):</strong> The massage begins with warm oil application, followed by long strokes to warm muscles, then deeper acupressure work, and finally gentle stretching and energy balancing.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong>Closing (5 minutes):</strong> Your therapist will slowly bring you back to awareness, provide aftercare advice, and leave you to rest.
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground">
                Throughout the session, you're encouraged to communicate your comfort level. The pressure can be adjusted from gentle to firm based on your preferences. Most guests find the rhythm so relaxing that they drift into a meditative or even sleep state - this is completely normal and encouraged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who Should Try Balinese Massage? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Should Try Balinese Massage?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">First-Time Visitors</h3>
                  <p className="text-muted-foreground">
                    Experience authentic Balinese culture through its most celebrated healing tradition. Perfect introduction to traditional Indonesian therapy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Stressed Professionals</h3>
                  <p className="text-muted-foreground">
                    Release work tension, mental fatigue, and the accumulated stress of daily life through deeply therapeutic touch.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Active Travelers</h3>
                  <p className="text-muted-foreground">
                    Recover from hiking, surfing, or yoga with massage that addresses both muscle fatigue and energy depletion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Couples</h3>
                  <p className="text-muted-foreground">
                    Share a bonding experience with side-by-side Balinese massage treatments in the privacy of your accommodation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Wellness Enthusiasts</h3>
                  <p className="text-muted-foreground">
                    Deepen your holistic health practice with massage that addresses physical, emotional, and energetic well-being.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Anyone Seeking Balance</h3>
                  <p className="text-muted-foreground">
                    Whether you need relaxation, pain relief, or just time for yourself, Balinese massage adapts to your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Balinese Massage Services */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Balinese Massage Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer a comprehensive range of Balinese massage treatments, each tailored to specific needs and preferences. Every service maintains authentic traditional techniques while adapting to modern comfort and convenience.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/traditional">
                  Traditional Balinese Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/hot-stone">
                  Balinese Hot Stone Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/deep-tissue">
                  Balinese Deep Tissue Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/aromatherapy">
                  Balinese Aromatherapy Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/couples">
                  Balinese Couples Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/pregnancy">
                  Balinese Pregnancy Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/reflexology">
                  Balinese Reflexology Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/sports">
                  Balinese Sports Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/relaxation">
                  Balinese Relaxation Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/full-body">
                  Balinese Full Body Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/head-shoulder">
                  Balinese Head & Shoulder Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/lymphatic-drainage">
                  Balinese Lymphatic Drainage Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/60-minute">
                  60-Minute Balinese Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/90-minute">
                  90-Minute Balinese Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4" asChild>
                <Link href="/balinese-massage/services/2-hour-package">
                  2-Hour Balinese Massage Package
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Pricing Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Balinese Massage Pricing Overview
            </h2>
            <div className="bg-secondary/20 p-8 rounded-lg mb-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">320K IDR</div>
                  <div className="text-muted-foreground">60 Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">450K IDR</div>
                  <div className="text-muted-foreground">90 Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">590K IDR</div>
                  <div className="text-muted-foreground">120 Minutes</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Prices include professional therapist, premium oils, all equipment, and transportation to your location
              </p>
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/balinese-massage/pricing">
                  View Complete Pricing & Packages
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: How Balinese Massage Differs */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How Balinese Massage Differs from Other Massage Styles
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Balinese vs Swedish Massage</h3>
                <p className="text-muted-foreground">
                  While Swedish massage focuses primarily on muscle relaxation through kneading and long strokes, Balinese massage incorporates acupressure, reflexology, and aromatherapy. It's more holistic, addressing energy flow alongside physical tension.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Balinese vs Thai Massage</h3>
                <p className="text-muted-foreground">
                  Thai massage uses no oils and focuses heavily on deep stretching and yoga-like movements. Balinese massage uses aromatic oils, combines gentler stretching with flowing strokes, and creates a more meditative, relaxing experience.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Balinese vs Deep Tissue Massage</h3>
                <p className="text-muted-foreground">
                  Deep tissue targets chronic muscle tension with intense pressure. Balinese massage uses varied pressure levels and combines physical techniques with energy work, making it effective for tension relief without being overly intense.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">The Balinese Difference</h3>
                <p className="text-muted-foreground">
                  What truly sets Balinese massage apart is its integration of physical, mental, and spiritual healing. It's not just about releasing muscle knots - it's about restoring balance to your entire being through time-honored Indonesian wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Preparation Tips */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How to Prepare for Your Balinese Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Before Your Appointment</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Avoid heavy meals 1-2 hours before treatment</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Stay hydrated throughout the day</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Choose comfortable, loose-fitting clothing</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Shower before your session for maximum oil absorption</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Setting Up Your Space</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Clear a quiet room with space for the massage table</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Ensure room temperature is comfortable</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Dim lighting helps create ambiance (optional)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Our therapist brings all equipment and supplies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Communicate Your Needs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Mention any injuries or health conditions</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Share preferred pressure level</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Indicate areas needing extra attention</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Speak up during treatment if anything feels uncomfortable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What to Bring</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Nothing - we provide all essentials</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Optional: Your preferred music or playlist</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Optional: Candles for ambiance</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span>Have water available for after your treatment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Health & Safety */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Health & Safety Guidelines for Balinese Massage
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Professional Standards
                </h3>
                <p className="text-muted-foreground">
                  All our therapists are fully licensed, trained in traditional Balinese techniques, and maintain the highest hygiene standards. We use only premium, hypoallergenic oils and fresh, sanitized linens for every treatment.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">When to Avoid Balinese Massage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fever, infections, or contagious conditions</li>
                  <li>• Recent surgery or open wounds</li>
                  <li>• Severe osteoporosis or bone conditions</li>
                  <li>• Certain cardiovascular conditions (consult your doctor)</li>
                  <li>• First trimester of pregnancy (pregnancy massage available for second and third trimesters)</li>
                  <li>• Acute inflammation or severe pain</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Safe for Most People</h3>
                <p className="text-muted-foreground mb-3">
                  Balinese massage is generally safe and beneficial for most healthy adults. However, always inform your therapist about:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Any current medications</li>
                  <li>• Recent injuries or chronic pain conditions</li>
                  <li>• Pregnancy status</li>
                  <li>• Skin sensitivities or allergies</li>
                  <li>• Any medical conditions or concerns</li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground">
                When in doubt, consult with your healthcare provider before booking a Balinese massage. Our therapists will also conduct a brief health consultation before each session to ensure your safety and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Frequency Recommendations */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How Often Should You Get Balinese Massage?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                The ideal frequency for Balinese massage depends on your goals, lifestyle, and current physical condition. Here's what we recommend for different situations:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">For Relaxation & Prevention</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Once per month:</strong> Maintains stress management, prevents tension buildup, and supports overall wellness.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">For Chronic Stress or Tension</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Twice per month:</strong> More frequent sessions help manage ongoing stress and prevent chronic muscle tension.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">For Specific Conditions</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Weekly sessions:</strong> If addressing chronic pain, recovering from injury, or managing high stress levels.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">For Vacation Wellness</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Every 3-4 days:</strong> Perfect for travelers wanting regular relaxation throughout their Bali stay.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Listen to Your Body</h3>
                <p className="text-muted-foreground">
                  The best guide is how you feel. Some people thrive on weekly massages, while others find monthly sessions sufficient. Pay attention to when tension returns, when sleep quality declines, or when stress levels rise - these are good indicators it's time for another Balinese massage treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Available Locations in Bali */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Balinese Massage Available Throughout Bali
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We bring authentic Balinese massage directly to your location anywhere in Bali. Our therapists serve all major tourist areas and residential zones, ensuring you can experience traditional massage without leaving your accommodation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/seminyak">
                  Seminyak
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/canggu">
                  Canggu
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/ubud">
                  Ubud
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/sanur">
                  Sanur
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/nusa-dua">
                  Nusa Dua
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/jimbaran">
                  Jimbaran
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/kuta">
                  Kuta
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/legian">
                  Legian
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/uluwatu">
                  Uluwatu
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/denpasar">
                  Denpasar
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/tabanan">
                  Tabanan
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/balinese-massage/cities/amed">
                  Amed
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/balinese-massage/locations">
                  View All Locations & Coverage Areas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Booking Information */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How to Book Your Balinese Massage
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary/20 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Quick & Easy Booking</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Us on WhatsApp</h4>
                      <p className="text-muted-foreground">
                        Message +62 811 2656 869 with your preferred date, time, and location
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Choose Your Service</h4>
                      <p className="text-muted-foreground">
                        Select from our range of Balinese massage options and duration
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Confirm Your Booking</h4>
                      <p className="text-muted-foreground">
                        Receive confirmation with therapist details and arrival time
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Enjoy Your Treatment</h4>
                      <p className="text-muted-foreground">
                        Relax as your therapist arrives and provides your Balinese massage
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Same-Day Available</h3>
                    <p className="text-muted-foreground">
                      Book and enjoy your massage on the same day (subject to availability)
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Island-Wide Service</h3>
                    <p className="text-muted-foreground">
                      Available at hotels, villas, resorts, and private residences
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Licensed Therapists</h3>
                    <p className="text-muted-foreground">
                      All practitioners certified in traditional Balinese massage
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Your Balinese Massage Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Customer Experience */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Our Clients Say About Balinese Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The most authentic Balinese massage I've experienced. The therapist was incredibly skilled and the convenience of having it at our villa made it even more special. We booked three more sessions during our stay!"
                  </p>
                  <p className="font-semibold">- Sarah & Mark, Australia</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I was skeptical about in-villa massage, but this exceeded all expectations. The quality was spa-level, the oils were divine, and I fell asleep during the treatment. Woke up feeling like a new person."
                  </p>
                  <p className="font-semibold">- Jennifer L., United States</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Perfect for our honeymoon. The couples massage was synchronized beautifully, and the therapists created such a romantic atmosphere. The traditional techniques were genuine and effective."
                  </p>
                  <p className="font-semibold">- Lisa & David, United Kingdom</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As someone who gets regular massages at home, I can say this was truly exceptional. The combination of acupressure, aromatherapy, and flowing strokes was unlike anything I've tried before. Highly recommend."
                  </p>
                  <p className="font-semibold">- Michael R., Singapore</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: Learn More */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Learn More About Balinese Massage
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Deepen your understanding of this ancient healing art with our comprehensive knowledge center. Discover the history, science, and cultural significance behind Balinese massage traditions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/history">
                  History of Balinese Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/techniques">
                  Traditional Techniques Explained
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/health-benefits">
                  Health Benefits: Scientific Evidence
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/comparison">
                  Balinese vs Thai vs Swedish Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/essential-oils">
                  Essential Oils Used in Balinese Massage
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/preparation">
                  How to Prepare for Your First Session
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/aftercare">
                  Post-Massage Care & Tips
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/pressure-points">
                  Understanding Pressure Points
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/specific-conditions">
                  Balinese Massage for Specific Conditions
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                <Link href="/balinese-massage/learn/choosing-therapist">
                  Choosing the Right Therapist
                </Link>
              </Button>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/balinese-massage/learn">
                  Visit Knowledge Center
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Frequently Asked Questions About Balinese Massage
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What should I wear during a Balinese massage?</h3>
                <p className="text-muted-foreground">
                  Most people undress to their comfort level and are draped with fresh linens throughout the treatment. The therapist only undrapes the area being worked on. You can keep underwear on if preferred. Discuss any concerns with your therapist before the session begins.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How long does a typical Balinese massage last?</h3>
                <p className="text-muted-foreground">
                  Balinese massage sessions typically range from 60 to 120 minutes. A 90-minute session is most popular as it allows time for full-body treatment with attention to problem areas. First-timers often start with 60 minutes, while those seeking deep relaxation prefer the 2-hour package.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Will Balinese massage hurt or be uncomfortable?</h3>
                <p className="text-muted-foreground">
                  Balinese massage uses varied pressure from gentle to firm, but should never be painful. Some acupressure points may feel tender, and deeper work might cause brief discomfort, but this should never exceed your tolerance. Always communicate with your therapist about pressure preferences.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Can I get Balinese massage if I'm pregnant?</h3>
                <p className="text-muted-foreground">
                  Balinese massage can be adapted for pregnancy, but we recommend waiting until the second trimester. Our therapists are trained in prenatal modifications, avoiding certain pressure points and using side-lying positions. Always consult your healthcare provider first and inform your therapist of your pregnancy.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How soon can I shower after a Balinese massage?</h3>
                <p className="text-muted-foreground">
                  You can shower immediately after your Balinese massage if desired. Some people prefer to leave the oils on for a few hours to maximize skin benefits, while others shower right away. There's no wrong choice - do what feels most comfortable for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Authentic Balinese Massage?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your traditional Balinese massage today and discover why this ancient healing art has been treasured for centuries. Professional therapists, premium service, delivered to your location in Bali.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book on WhatsApp - +62 811 2656 869
              </a>
            </Button>
          </div>
        </div>
      </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
