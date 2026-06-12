import { Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

// ─── COMPREHENSIVE FOOTER NAVIGATION ───
// Every page on the site is reachable from the footer — this is the
// backbone of our internal linking architecture for SEO.

const footerSections = [
  {
    title: 'Massage Services',
    links: [
      { name: 'Home Massage', href: '/home-massage' },
      { name: 'Mobile Massage', href: '/mobile-massage' },
      { name: 'Villa Massage', href: '/villa-massage' },
      { name: 'All Treatments', href: '/treatments' },
      { name: 'View Pricing', href: '/pricing' },
      { name: 'Nail Care Services', href: '/nail-care' }
    ]
  },
  {
    title: 'Popular Treatments',
    links: [
      { name: 'Traditional Balinese', href: '/ubud/traditional-balinese-massage' },
      { name: 'Deep Tissue', href: '/ubud/deep-tissue-massage' },
      { name: 'Aromatherapy', href: '/ubud/aromatherapy-massage' },
      { name: 'Hot Stone', href: '/ubud/hot-stone-massage' },
      { name: 'Thai Massage', href: '/ubud/thai-massage' },
      { name: 'Couples Ritual', href: '/ubud/couples-wellness-ritual' },
      { name: 'Lymphatic Drainage', href: '/ubud/lymphatic-drainage-massage' },
      { name: 'Pregnancy Massage', href: '/ubud/pregnancy-massage' }
    ]
  },
  {
    title: 'Service Areas — Ubud',
    links: [
      { name: 'Ubud Centre', href: '/ubud-centre' },
      { name: 'Ubud North', href: '/ubud-north' },
      { name: 'Ubud East', href: '/ubud-east' },
      { name: 'Ubud South', href: '/ubud-south' },
      { name: 'Luxury Villas', href: '/ubud-luxury-villas' },
      { name: 'Sidemen Valley', href: '/sidemen' }
    ]
  },
  {
    title: 'Service Areas — South Bali',
    links: [
      { name: 'Seminyak', href: '/seminyak' },
      { name: 'Canggu', href: '/canggu' },
      { name: 'Berawa', href: '/berawa' },
      { name: 'Pererenan', href: '/pererenan' },
      { name: 'Petitenget', href: '/petitenget' },
      { name: 'Umalas', href: '/umalas' },
      { name: 'Kerobokan', href: '/kerobokan' },
      { name: 'Legian', href: '/legian' }
    ]
  },
  {
    title: 'Service Areas — All Bali',
    links: [
      { name: 'Kuta', href: '/kuta' },
      { name: 'Sanur', href: '/sanur' },
      { name: 'Nusa Dua', href: '/nusa-dua' },
      { name: 'Jimbaran', href: '/jimbaran' },
      { name: 'Uluwatu', href: '/uluwatu' },
      { name: 'Ungasan', href: '/ungasan' },
      { name: 'Lovina', href: '/lovina' },
      { name: 'Amed', href: '/amed' },
      { name: 'Candidasa', href: '/candidasa' },
      { name: 'View All Areas', href: '/service-areas' }
    ]
  },
  {
    title: 'Service Landing Pages',
    links: [
      { name: 'Massage', href: '/services/massage' },
      { name: 'Spa Massage', href: '/services/spa-massage' },
      { name: 'Full Body Massage', href: '/services/full-body-massage' },
      { name: 'Traditional Massage', href: '/services/traditional-massage' },
      { name: 'Relaxing Massage', href: '/services/relaxing-massage' },
      { name: 'Sports Massage', href: '/services/sports-massage' },
      { name: 'Foot Massage', href: '/services/foot-massage' },
      { name: 'Reflexology', href: '/services/reflexology' }
    ]
  },
  {
    title: 'Company & Info',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Digital Nomad Wellness', href: '/digital-nomad-wellness' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Villa Partnerships', href: '/villa-partnerships' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Sitemap', href: '/sitemap' }
    ]
  },
  {
    title: 'Book & Legal',
    links: [
      { name: 'View Pricing', href: '/pricing' },
      { name: 'WhatsApp Booking', href: 'https://wa.me/628112656869', external: true },
      { name: 'Recommended Services', href: '/recommended-services' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions' },
      { name: 'Kuta Site', href: 'https://www.homemassagekuta.com/', external: true }
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-1" data-testid="footer-brand">
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
              <button
                className="text-muted-foreground hover:text-primary transition-colors w-11 h-11 flex items-center justify-center"
                data-testid="footer-instagram"
                style={{ touchAction: 'manipulation' }}
              >
                <Instagram size={20} />
              </button>
              <button
                className="text-muted-foreground hover:text-primary transition-colors w-11 h-11 flex items-center justify-center"
                data-testid="footer-facebook"
                style={{ touchAction: 'manipulation' }}
              >
                <Facebook size={20} />
              </button>
              <button
                className="text-muted-foreground hover:text-primary transition-colors w-11 h-11 flex items-center justify-center"
                data-testid="footer-tripadvisor"
                style={{ touchAction: 'manipulation' }}
              >
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
              <ul className="space-y-2 md:space-y-3 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="hover:text-primary transition-colors text-left text-sm md:text-base py-1"
                        data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                        style={{ touchAction: 'manipulation', minHeight: '32px' }}
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith('/#') ? (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="hover:text-primary transition-colors text-left text-sm md:text-base py-1"
                        data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                        style={{ touchAction: 'manipulation', minHeight: '32px' }}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href}>
                        <span className="hover:text-primary transition-colors text-sm md:text-base block py-1" style={{ minHeight: '32px' }}>
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

        {/* ─── BOTTOM BAR ─── */}
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8">
          {/* Quick-link pills for crawlability */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Treatments', href: '/treatments' },
              { label: 'Areas', href: '/service-areas' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'Sitemap', href: '/sitemap' }
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="inline-block px-3 py-1 text-xs bg-secondary/50 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center text-muted-foreground">
            <p className="text-xs md:text-sm" data-testid="footer-copyright">
              &copy; 2026 Home Massage Ubud | homemassageubud.com | Licensed Spa Services Ubud, Bali
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Premium in-villa massage throughout Ubud, Seminyak, Canggu, Sanur, Nusa Dua & all Bali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
