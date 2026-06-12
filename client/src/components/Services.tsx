import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateGeneralInquiryMessage, openWhatsApp, CTA_TEXT } from "@/lib/whatsapp";
import { Link } from "wouter";
import {
  balineseMassage as balineseImage,
  balineseMassageWebp as balineseImageWebp,
  deepTissueMassage as deepTissueImage,
  deepTissueMassageWebp as deepTissueImageWebp,
  aromatherapyMassage as aromatherapyImage,
  aromatherapyMassageWebp as aromatherapyImageWebp,
  lymphaticDrainage as lymphaticImage,
  lymphaticDrainageWebp as lymphaticImageWebp,
  thaiMassage as thaiImage,
  thaiMassageWebp as thaiImageWebp,
  fourHandsMassage as fourHandsImage,
  fourHandsMassageWebp as fourHandsImageWebp,
  womanBaliMassage as hotStoneImage,
  womanBaliMassageWebp as hotStoneImageWebp,
} from "@/assets";

const services = [
  {
    id: 'traditional-balinese',
    name: 'Traditional Balinese Massage',
    image: balineseImage,
    imageWebp: balineseImageWebp,
    link: '/ubud/traditional-balinese-massage',
    description: 'Authentic Balinese massage — traditional full-body treatment combining palm pressure, acupressure, and stretching with aromatic oils. Our most popular massage for stress relief, muscle tension release, and deep relaxation at your villa.',
    pricing: [
      { duration: '60 Min', price: 'IDR 320K' },
      { duration: '90 Min', price: 'IDR 450K' },
      { duration: '120 Min', price: 'IDR 590K' }
    ]
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    image: deepTissueImage,
    imageWebp: deepTissueImageWebp,
    link: '/ubud/deep-tissue-massage',
    description: 'Intensive deep tissue massage targeting chronic muscle tension and deep knots using firm therapeutic pressure. Ideal for sports recovery, chronic pain relief, and work-related tension at your villa.',
    pricing: [
      { duration: '60 Min', price: 'IDR 380K' },
      { duration: '90 Min', price: 'IDR 540K' },
      { duration: '120 Min', price: 'IDR 700K' }
    ]
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy Massage',
    image: aromatherapyImage,
    imageWebp: aromatherapyImageWebp,
    link: '/ubud/aromatherapy-massage',
    description: 'Relaxing aromatherapy massage using premium essential oils — lavender, lemongrass, eucalyptus. Light to medium pressure for deep relaxation, better sleep, and stress relief at your villa.',
    pricing: [
      { duration: '60 Min', price: 'IDR 350K' },
      { duration: '90 Min', price: 'IDR 490K' },
      { duration: '120 Min', price: 'IDR 640K' }
    ]
  },
  {
    id: 'thai-massage',
    name: 'Thai Massage',
    image: thaiImage,
    imageWebp: thaiImageWebp,
    link: '/ubud/thai-massage',
    description: 'Authentic Thai massage combining yoga-like stretches with pressure along energy lines. Performed fully clothed, improves flexibility and relieves stiffness. Great after hiking or yoga.',
    pricing: [
      { duration: '60 Min', price: 'IDR 390K' },
      { duration: '90 Min', price: 'IDR 550K' },
      { duration: '120 Min', price: 'IDR 720K' }
    ]
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    image: hotStoneImage,
    imageWebp: hotStoneImageWebp,
    link: '/ubud/hot-stone-massage',
    description: 'Therapeutic hot stone massage using smooth heated volcanic stones placed on key body points. Warmth penetrates deep into muscles for ultimate relaxation. Perfect for muscle stiffness and stress relief.',
    pricing: [
      { duration: '60 Min', price: 'IDR 420K' },
      { duration: '90 Min', price: 'IDR 590K' },
      { duration: '120 Min', price: 'IDR 760K' }
    ]
  },
  {
    id: 'lymphatic-drainage',
    name: 'Lymphatic Drainage Massage',
    image: lymphaticImage,
    imageWebp: lymphaticImageWebp,
    link: '/ubud/lymphatic-drainage-massage',
    description: 'Specialized lymphatic drainage massage — gentle rhythmic treatment that stimulates the lymphatic system to reduce swelling and boost immunity. Perfect for post-flight recovery and detox.',
    pricing: [
      { duration: '60 Min', price: 'IDR 450K' },
      { duration: '90 Min', price: 'IDR 630K' },
      { duration: '120 Min', price: 'IDR 820K' }
    ]
  },
  {
    id: 'four-hands',
    name: 'Four Hands Massage',
    image: fourHandsImage,
    imageWebp: fourHandsImageWebp,
    link: '/ubud/couples-wellness-ritual',
    description: 'Luxury four hands massage with two synchronized therapists working in harmony. Ultimate relaxation with complete body coverage. Perfect for special occasions and couples seeking a premium experience.',
    pricing: [
      { duration: '60 Min', price: 'IDR 620K' },
      { duration: '90 Min', price: 'IDR 860K' },
      { duration: '120 Min', price: 'IDR 1,100K' }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0" data-testid="services-title">
            Our Massage Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4" data-testid="services-description">
            Premium in-villa massage treatments delivered by certified Balinese therapists. 
            Choose from traditional healing arts to modern therapeutic techniques — all at your villa, on your schedule.
          </p>
          
          {/* English Communication Badge */}
          <div className="inline-flex items-center bg-emerald-100 text-gray-900 px-3 sm:px-4 py-2 rounded-full mt-3 sm:mt-4 mx-2 sm:mx-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm">Expert English consultation & booking coordination available</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-card rounded-2xl overflow-hidden hover-scale border-border" data-testid={`service-card-${service.id}`}>
              <picture>
                {service.imageWebp && <source srcSet={service.imageWebp} type="image/webp" />}
                <img 
                  src={service.image}
                  alt={`${service.name} — professional in-villa massage treatment by certified Balinese therapists`}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover object-center"
                  loading="lazy"
                  width="400"
                  height="300"
                  decoding="async"
                />
              </picture>
              <CardContent className="p-3 sm:p-4 md:p-6">
                <h3 className="serif text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-black leading-tight" data-testid={`service-name-${service.id}`}>
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
                
                {/* Pricing Options */}
                <div className="mb-3 sm:mb-4">
                  <div className="space-y-1 sm:space-y-2">
                    {service.pricing.map((option, index) => (
                      <div key={index} className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-muted-foreground">{option.duration}:</span>
                        <span className="font-semibold text-accent">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link href={service.link} className="flex-1">
                    <Button 
                      variant="outline"
                      className="w-full text-sm sm:text-base py-2 sm:py-3"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    className="flex-1 font-semibold text-sm sm:text-base py-2 sm:py-3"
                    data-testid={`button-book-${service.id}`}
                  >
                    {CTA_TEXT.PRIMARY}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}