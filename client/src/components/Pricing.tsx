import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

const pricingPackages = [
  {
    id: 'signature-60min',
    title: '60 Minute Treatments',
    treatments: [
      { name: 'Traditional Balinese Massage', price: 'IDR 320,000' },
      { name: 'Aromatherapy Massage', price: 'IDR 350,000' },
      { name: 'Deep Tissue Massage', price: 'IDR 380,000' },
      { name: 'Thai Massage', price: 'IDR 390,000' },
      { name: 'Hot Stone Massage', price: 'IDR 420,000' },
      { name: 'Lymphatic Drainage', price: 'IDR 450,000' }
    ],
    buttonText: 'Book 60 Min',
    buttonVariant: 'secondary' as const,
    featured: false
  },
  {
    id: 'signature-90min',
    title: '90 Minute Treatments',
    treatments: [
      { name: 'Traditional Balinese Massage', price: 'IDR 450,000' },
      { name: 'Aromatherapy Massage', price: 'IDR 490,000' },
      { name: 'Deep Tissue Massage', price: 'IDR 540,000' },
      { name: 'Thai Massage', price: 'IDR 550,000' },
      { name: 'Hot Stone Massage', price: 'IDR 590,000' },
      { name: 'Lymphatic Drainage', price: 'IDR 630,000' }
    ],
    note: 'Extended sessions for deeper relaxation and complete rejuvenation',
    buttonText: 'Book 90 Min',
    buttonVariant: 'default' as const,
    featured: true
  },
  {
    id: 'signature-120min',
    title: '120 Minute Treatments',
    treatments: [
      { name: 'Traditional Balinese Massage', price: 'IDR 590,000' },
      { name: 'Aromatherapy Massage', price: 'IDR 640,000' },
      { name: 'Deep Tissue Massage', price: 'IDR 700,000' },
      { name: 'Thai Massage', price: 'IDR 720,000' },
      { name: 'Hot Stone Massage', price: 'IDR 760,000' },
      { name: 'Lymphatic Drainage', price: 'IDR 820,000' }
    ],
    note: 'Ultimate wellness experience — complete full-body treatment',
    buttonText: 'Book 120 Min',
    buttonVariant: 'secondary' as const,
    featured: false
  },
  {
    id: 'specialty',
    title: 'Four Hands Massage',
    treatments: [
      { name: 'Four Hands Massage (60 min)', price: 'IDR 620,000' },
      { name: 'Four Hands Massage (90 min)', price: 'IDR 860,000' },
      { name: 'Four Hands Massage (120 min)', price: 'IDR 1,100,000' }
    ],
    note: 'Two synchronized therapists — the ultimate luxury experience',
    buttonText: 'Book Four Hands',
    buttonVariant: 'secondary' as const,
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0" data-testid="pricing-title">
            Ubud Massage Prices | Affordable Massage Ubud Packages
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4" data-testid="pricing-description">
            Transparent pricing for professional Ubud massage services. Best value massage in Ubud with competitive rates. All home massage Ubud treatments include consultation, premium organic products, therapist travel, and complete setup at your villa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`bg-card rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 hover-scale ${
                pkg.featured 
                  ? 'border-2 border-primary golden-glow' 
                  : 'border border-border'
              }`}
              data-testid={`pricing-card-${pkg.id}`}
            >
              {pkg.featured && (
                <div className="text-center mb-6">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold" data-testid="most-popular-badge">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="serif text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-primary" data-testid={`package-title-${pkg.id}`}>
                {pkg.title}
              </h3>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {pkg.treatments.map((treatment, index) => (
                  <div key={index} className="flex justify-between" data-testid={`treatment-${pkg.id}-${index}`}>
                    <span className="text-xs md:text-sm" data-testid={`treatment-name-${pkg.id}-${index}`}>
                      {treatment.name}
                    </span>
                    <span className="text-xs md:text-sm text-accent font-semibold" data-testid={`treatment-price-${pkg.id}-${index}`}>
                      {treatment.price}
                    </span>
                  </div>
                ))}
                {pkg.note && (
                  <div className="text-muted-foreground text-xs md:text-sm mt-3 md:mt-4" data-testid={`package-note-${pkg.id}`}>
                    {pkg.note}
                  </div>
                )}
              </div>
              
              <Button 
                variant={pkg.buttonVariant}
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                className={`w-full py-2 md:py-3 font-semibold text-sm md:text-base ${
                  pkg.buttonVariant === 'default' 
                    ? 'bg-primary text-primary-foreground hover:bg-accent' 
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
                data-testid={`button-book-${pkg.id}`}
              >
                Book via WhatsApp
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 px-4" data-testid="pricing-note">
            All prices are in Indonesian Rupiah (IDR) and include premium organic products, consultation, and refreshments. Group discounts available for 4+ people.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground px-4" data-testid="payment-policy">
            Payment accepted: Cash (IDR/USD), Indonesian Bank Transfer, Credit Card, PayPal. 24-hour cancellation policy applies.
          </p>
        </div>
      </div>
    </section>
  );
}
