import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Baby } from 'lucide-react';

export default function BalinesePregnancyMassage() {
  return (
    <>
      <SEOHead 
        title="Balinese Pregnancy Massage | Safe Prenatal Massage"
        description="Experience safe Balinese pregnancy massage adapted for expectant mothers. Gentle traditional techniques relieve pregnancy discomfort at your villa in Bali."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Balinese Pregnancy Massage
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Gentle traditional massage specially adapted for expectant mothers
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    Book Pregnancy Massage
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  What Is Balinese Pregnancy Massage?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Balinese pregnancy massage adapts traditional Indonesian techniques specifically for expectant mothers, providing safe relief from common pregnancy discomforts. This specialized treatment uses gentle pressure, side-lying positions, and supportive cushioning to protect mother and baby while addressing back pain, swollen ankles, and muscle tension. Our therapists receive specific training in prenatal massage safety and modifications.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    The treatment focuses on areas most affected by pregnancy—lower back, hips, legs, and feet—while avoiding pressure points contraindicated during pregnancy. Your therapist positions you comfortably on your side with body pillows for support, allowing safe access to tense muscles without pressure on your abdomen. Gentle flowing strokes improve circulation, reduce swelling, and promote relaxation using pregnancy-safe oils.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Each Balinese pregnancy massage session honors your changing body with techniques that provide comfort without risk. The treatment helps manage stress, improves sleep quality, and reduces common pregnancy complaints including sciatic pain, leg cramps, and shoulder tension. This nurturing therapy supports your wellness throughout pregnancy while maintaining traditional Balinese healing principles adapted for maternal safety.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Pregnancy Massage Pricing
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold">60 Minutes</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold">Rp 320,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Complete prenatal treatment with safe positioning
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary border-2">
                    <CardContent className="p-6">
                      <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold">90 Minutes</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold">Rp 450,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Extended prenatal session for maximum comfort
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold">120 Minutes</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold">Rp 590,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive pregnancy wellness treatment
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-center text-muted-foreground">
                  * Suitable for second and third trimester (after 12 weeks with doctor approval)
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose Balinese Pregnancy Massage?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Baby className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Safe & Specialized</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Therapists trained in prenatal massage safety use only appropriate techniques, positions, and pressure levels for pregnancy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Baby className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Pain Relief</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Effectively addresses common pregnancy discomforts including lower back pain, hip tension, swollen ankles, and leg cramps.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Baby className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Improved Circulation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Gentle massage reduces swelling by improving blood flow and lymphatic drainage without deep pressure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Baby className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Stress Reduction</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Promotes relaxation and better sleep quality, supporting both maternal wellness and healthy pregnancy outcomes.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">When during pregnancy is Balinese massage safe?</h3>
                      <p className="text-muted-foreground">
                        Pregnancy massage is safest during second and third trimesters (after 12-14 weeks). We require doctor approval before providing massage during first trimester or for high-risk pregnancies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">What position will I be in during pregnancy massage?</h3>
                      <p className="text-muted-foreground">
                        You'll lie comfortably on your side supported by body pillows and cushions. We avoid face-down positions to protect your abdomen and ensure proper circulation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Are the massage oils safe during pregnancy?</h3>
                      <p className="text-muted-foreground">
                        We use only pregnancy-safe carrier oils and avoid essential oils contraindicated during pregnancy. Our therapists are trained in appropriate product selection for expectant mothers.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Can pregnancy massage help with swelling in my feet and ankles?</h3>
                      <p className="text-muted-foreground">
                        Yes, gentle massage and lymphatic drainage techniques effectively reduce pregnancy-related edema by improving circulation and fluid movement.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Do I need to bring anything for pregnancy massage?</h3>
                      <p className="text-muted-foreground">
                        We bring all necessary equipment including specialized pregnancy pillows and cushions. Just have your doctor's approval available if you're in first trimester or have pregnancy complications.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Book Your Balinese Pregnancy Massage
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Nurturing wellness for you and your growing baby
                  </p>
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                      Book Now via WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="border-t pt-12">
                  <h3 className="text-xl font-semibold mb-6">Related Balinese Massage Services</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage">
                        ← All Balinese Massage Services
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/relaxation">
                        Balinese Relaxation Massage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/aromatherapy">
                        Balinese Aromatherapy Massage
                      </Link>
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/lymphatic-drainage">
                        Balinese Lymphatic Drainage
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/balinese-massage/services/couples">
                        Balinese Couples Massage
                      </Link>
                    </Button>
                  </div>
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
