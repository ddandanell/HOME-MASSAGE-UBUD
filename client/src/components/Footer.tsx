import { Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

const footerSections = [
  {
    title: 'Our Services',
    links: [
      { name: 'Browse All Massage Treatments', href: '/treatments' },
      { name: 'Traditional Balinese Massage', href: '/ubud/traditional-balinese-massage' },
      { name: 'Deep Tissue Massage', href: '/ubud/deep-tissue-massage' },
      { name: 'Aromatherapy Massage', href: '/ubud/aromatherapy-massage' },
      { name: 'Hot Stone Massage', href: '/ubud/hot-stone-massage' }
    ]
  },
  {
    title: 'Service Areas',
    links: [
      { name: 'View All Service Areas', href: '/service-areas' },
      { name: 'Massage in Ubud Centre', href: '/ubud-centre' },
      { name: 'Massage in Seminyak', href: '/seminyak' },
      { name: 'Massage in Canggu', href: '/canggu' },
      { name: 'Massage in Sanur', href: '/sanur' }
    ]
  },
  {
    title: 'Other Locations',
    links: [
      { name: 'In-villa massage in Kuta', href: 'https://www.homemassagekuta.com/', external: true },
      { name: 'Massage service in South Bali', href: 'https://www.homemassagekuta.com/', external: true },
      { name: 'Home massage Seminyak area', href: 'https://www.homemassagekuta.com/seminyak', external: true }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Sustainability', href: '/sustainability' }
    ]
  },
  {
    title: 'Booking',
    links: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Villa Partnerships', href: '/villa-partnerships' },
      { name: 'WhatsApp Book', href: 'https://wa.me/628112656869', external: true }
    ]
  }
];

export default function Footer() {
  const handleScrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = (link: any) => {
    if (link.external) {
      window.open(link.href, '_blank');
    } else if (link.href.startsWith('/#')) {
      handleScrollToSection(link.href);
    }
    // Regular navigation links will be handled by Link component
  };

  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          <div data-testid="footer-brand">
            <div className="serif text-xl md:text-2xl font-bold text-primary mb-4" data-testid="footer-logo">
              Home Massage Ubud
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4" data-testid="footer-description">
              Authentic Balinese massage delivered to your villa in Ubud. Professional therapists bring traditional healing and modern wellness directly to you.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p className="font-semibold text-primary">homemassageubud.com</p>
              <p>hello@homemassageubud.com</p>
            </div>
            <div className="flex space-x-3 md:space-x-4">
              <button className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-instagram">
                <Instagram size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-facebook">
                <Facebook size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-tripadvisor">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} data-testid={`footer-section-${sectionIndex}`}>
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4" data-testid={`footer-section-title-${sectionIndex}`}>
                {section.title}
              </h4>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <button 
                        onClick={() => handleLinkClick(link)}
                        className="hover:text-primary transition-colors text-left text-sm md:text-base"
                        data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith('/#') ? (
                      <button 
                        onClick={() => handleLinkClick(link)}
                        className="hover:text-primary transition-colors text-left text-sm md:text-base"
                        data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href}>
                        <span className="hover:text-primary transition-colors text-sm md:text-base">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-muted-foreground">
          <div className="mb-4">
            <Link href="/sitemap">
              <span className="text-primary hover:underline text-sm">View Sitemap</span>
            </Link>
          </div>
          <p className="text-xs md:text-sm" data-testid="footer-copyright">
            &copy; 2024 Home Massage Ubud | homemassageubud.com | Licensed Spa Services Ubud, Bali
          </p>
        </div>
      </div>
    </footer>
  );
}
