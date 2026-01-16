import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { Heart, MapPin, FileText, Home as HomeIcon, Smartphone, Building2, BookOpen } from 'lucide-react';

// Sitemap data structure
const sitemapData = {
  mainPages: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/treatments', label: 'All Treatments' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/recommended-services', label: 'Recommended Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/villa-partnerships', label: 'Villa Partnerships' },
  ],
  homeMassage: {
    hub: { href: '/home-massage', label: 'Home Massage Hub' },
    services: [
      { href: '/home-massage/services', label: 'All Services' },
      { href: '/home-massage/services/balinese', label: 'Balinese' },
      { href: '/home-massage/services/deep-tissue', label: 'Deep Tissue' },
      { href: '/home-massage/services/couples', label: 'Couples' },
      { href: '/home-massage/services/relaxation', label: 'Relaxation' },
    ],
    cities: [
      { href: '/home-massage/cities', label: 'All Cities' },
      { href: '/home-massage/cities/ubud', label: 'Ubud' },
      { href: '/home-massage/cities/canggu', label: 'Canggu' },
      { href: '/home-massage/cities/seminyak', label: 'Seminyak' },
      { href: '/home-massage/cities/sanur', label: 'Sanur' },
      { href: '/home-massage/cities/nusa-dua', label: 'Nusa Dua' },
    ],
    knowledge: [
      { href: '/home-massage/knowledge', label: 'All Knowledge' },
      { href: '/home-massage/knowledge/safety', label: 'Safety' },
      { href: '/home-massage/knowledge/benefits', label: 'Benefits' },
      { href: '/home-massage/knowledge/aftercare', label: 'Aftercare' },
      { href: '/home-massage/knowledge/what-to-expect', label: 'What to Expect' },
    ],
    blog: [
      { href: '/home-massage/blog', label: 'All Blog Posts' },
      { href: '/home-massage/blog/what-is-home-massage', label: 'What is Home Massage' },
      { href: '/home-massage/blog/home-massage-vs-spa', label: 'Home Massage vs Spa' },
      { href: '/home-massage/blog/is-home-massage-safe', label: 'Is Home Massage Safe' },
      { href: '/home-massage/blog/why-tourists-prefer-home-massage', label: 'Why Tourists Prefer' },
      { href: '/home-massage/blog/how-to-book-home-massage', label: 'How to Book' },
    ],
  },
  mobileMassage: {
    hub: { href: '/mobile-massage', label: 'Mobile Massage Hub' },
    services: [
      { href: '/mobile-massage/services', label: 'All Services' },
      { href: '/mobile-massage/services/balinese-mobile-massage', label: 'Balinese' },
      { href: '/mobile-massage/services/deep-tissue-mobile-massage', label: 'Deep Tissue' },
      { href: '/mobile-massage/services/couples-mobile-massage', label: 'Couples' },
      { href: '/mobile-massage/services/relaxation-mobile-massage', label: 'Relaxation' },
    ],
    cities: [
      { href: '/mobile-massage/cities', label: 'All Cities' },
      { href: '/mobile-massage/cities/ubud', label: 'Ubud' },
      { href: '/mobile-massage/cities/canggu', label: 'Canggu' },
      { href: '/mobile-massage/cities/seminyak', label: 'Seminyak' },
      { href: '/mobile-massage/cities/sanur', label: 'Sanur' },
      { href: '/mobile-massage/cities/nusa-dua', label: 'Nusa Dua' },
    ],
    knowledge: [
      { href: '/mobile-massage/knowledge', label: 'All Knowledge' },
      { href: '/mobile-massage/knowledge/is-mobile-massage-safe', label: 'Safety' },
      { href: '/mobile-massage/knowledge/how-to-prepare-mobile-massage', label: 'How to Prepare' },
      { href: '/mobile-massage/knowledge/aftercare-after-mobile-massage', label: 'Aftercare' },
      { href: '/mobile-massage/knowledge/what-to-expect-mobile-massage', label: 'What to Expect' },
    ],
    blog: [
      { href: '/mobile-massage/blog', label: 'All Blog Posts' },
      { href: '/mobile-massage/blog/what-is-mobile-massage', label: 'What is Mobile Massage' },
      { href: '/mobile-massage/blog/mobile-massage-vs-spa', label: 'Mobile Massage vs Spa' },
      { href: '/mobile-massage/blog/mobile-massage-for-travelers', label: 'For Travelers' },
      { href: '/mobile-massage/blog/how-to-book-mobile-massage', label: 'How to Book' },
    ],
  },
  villaMassage: {
    hub: { href: '/villa-massage', label: 'Villa Massage Hub' },
    services: [
      { href: '/villa-massage/services', label: 'All Services' },
      { href: '/villa-massage/services/balinese', label: 'Balinese' },
      { href: '/villa-massage/services/deep-tissue', label: 'Deep Tissue' },
      { href: '/villa-massage/services/couples', label: 'Couples' },
      { href: '/villa-massage/services/relaxation', label: 'Relaxation' },
      { href: '/villa-massage/services/aromatherapy', label: 'Aromatherapy' },
      { href: '/villa-massage/services/hot-stone', label: 'Hot Stone' },
      { href: '/villa-massage/services/prenatal', label: 'Prenatal' },
      { href: '/villa-massage/services/thai', label: 'Thai' },
      { href: '/villa-massage/services/sports', label: 'Sports' },
      { href: '/villa-massage/services/reflexology', label: 'Reflexology' },
    ],
    cities: [
      { href: '/villa-massage/cities', label: 'All Cities' },
      { href: '/villa-massage/cities/ubud', label: 'Ubud' },
      { href: '/villa-massage/cities/seminyak', label: 'Seminyak' },
      { href: '/villa-massage/cities/canggu', label: 'Canggu' },
      { href: '/villa-massage/cities/sanur', label: 'Sanur' },
      { href: '/villa-massage/cities/nusa-dua', label: 'Nusa Dua' },
      { href: '/villa-massage/cities/uluwatu', label: 'Uluwatu' },
      { href: '/villa-massage/cities/jimbaran', label: 'Jimbaran' },
      { href: '/villa-massage/cities/kuta', label: 'Kuta' },
      { href: '/villa-massage/cities/legian', label: 'Legian' },
      { href: '/villa-massage/cities/pererenan', label: 'Pererenan' },
    ],
    blog: [
      { href: '/villa-massage/blog', label: 'All Blog Posts' },
      { href: '/villa-massage/blog/benefits-bali', label: 'Benefits in Bali' },
      { href: '/villa-massage/blog/vs-spa', label: 'Villa Massage vs Spa' },
      { href: '/villa-massage/blog/prepare-villa', label: 'Prepare Your Villa' },
      { href: '/villa-massage/blog/best-couples', label: 'Best for Couples' },
    ],
  },
  treatments: [
    { href: '/ubud/traditional-balinese-massage', label: 'Traditional Balinese Massage' },
    { href: '/ubud/deep-tissue-massage', label: 'Deep Tissue Massage' },
    { href: '/ubud/aromatherapy-massage', label: 'Aromatherapy Massage' },
    { href: '/ubud/hot-stone-massage', label: 'Hot Stone Massage' },
    { href: '/ubud/thai-massage', label: 'Thai Massage' },
    { href: '/ubud/lymphatic-drainage-massage', label: 'Lymphatic Drainage Massage' },
    { href: '/ubud/pregnancy-massage', label: 'Pregnancy Massage' },
    { href: '/ubud/foot-reflexology', label: 'Foot Reflexology' },
    { href: '/ubud/post-hike-recovery-massage', label: 'Post-Hike Recovery Massage' },
    { href: '/ubud/yoga-stretch-massage', label: 'Yoga Stretch & Massage' },
    { href: '/ubud/detox-wellness-massage', label: 'Detox & Wellness Massage' },
    { href: '/ubud/couples-wellness-ritual', label: 'Couples Wellness Ritual' },
    { href: '/ubud/herbal-bamboo-massage', label: 'Herbal & Bamboo Massage' },
  ],
  ubudAreas: [
    { href: '/ubud-centre', label: 'Ubud Centre' },
    { href: '/ubud-north', label: 'Ubud North (Penestanan & Sayan)' },
    { href: '/ubud-east', label: 'Ubud East (Campuhan Ridge)' },
    { href: '/ubud-south', label: 'Ubud South (Lodtunduh)' },
    { href: '/ubud-luxury-villas', label: 'Ubud Luxury Villas' },
    { href: '/sidemen', label: 'Sidemen' },
  ],
  southBaliAreas: [
    { href: '/seminyak', label: 'Seminyak' },
    { href: '/petitenget', label: 'Petitenget' },
    { href: '/canggu', label: 'Canggu' },
    { href: '/berawa', label: 'Berawa' },
    { href: '/pererenan', label: 'Pererenan' },
    { href: '/umalas', label: 'Umalas' },
    { href: '/kerobokan', label: 'Kerobokan' },
    { href: '/legian', label: 'Legian' },
    { href: '/kuta', label: 'Kuta' },
    { href: '/sanur', label: 'Sanur' },
    { href: '/nusa-dua', label: 'Nusa Dua' },
    { href: '/jimbaran', label: 'Jimbaran' },
    { href: '/uluwatu', label: 'Uluwatu' },
    { href: '/ungasan', label: 'Ungasan' },
  ],
  northEastBaliAreas: [
    { href: '/lovina', label: 'Lovina' },
    { href: '/amed', label: 'Amed' },
    { href: '/candidasa', label: 'Candidasa' },
  ],
  servicePages: [
    { href: '/services/massage', label: 'Massage' },
    { href: '/services/massage-bali', label: 'Massage Bali' },
    { href: '/services/spa-massage', label: 'Spa Massage' },
    { href: '/services/deep-tissue-massage', label: 'Deep Tissue Massage' },
    { href: '/services/full-body-massage', label: 'Full Body Massage' },
    { href: '/services/couples-massage', label: 'Couples Massage' },
    { href: '/services/traditional-massage', label: 'Traditional Massage' },
    { href: '/services/aromatherapy-massage', label: 'Aromatherapy Massage' },
    { href: '/services/hot-stone-massage', label: 'Hot Stone Massage' },
    { href: '/services/relaxing-massage', label: 'Relaxing Massage' },
    { href: '/services/body-massage', label: 'Body Massage' },
    { href: '/services/foot-massage', label: 'Foot Massage' },
    { href: '/services/reflexology', label: 'Reflexology' },
    { href: '/services/sports-massage', label: 'Sports Massage' },
    { href: '/services/prenatal-massage', label: 'Prenatal Massage' },
    { href: '/services/pregnancy-massage', label: 'Pregnancy Massage' },
    { href: '/services/postnatal-massage', label: 'Postnatal Massage' },
    { href: '/services/home-massage', label: 'Home Massage' },
    { href: '/services/mobile-massage', label: 'Mobile Massage' },
    { href: '/services/at-home-massage', label: 'At-Home Massage' },
    { href: '/services/professional-massage', label: 'Professional Massage' },
    { href: '/services/body-therapy-massage', label: 'Body Therapy Massage' },
    { href: '/services/wellness-massage', label: 'Wellness Massage' },
    { href: '/services/therapeutic-massage', label: 'Therapeutic Massage' },
    { href: '/services/luxury-massage', label: 'Luxury Massage' },
    { href: '/services/best-massage-services', label: 'Best Massage Services' },
  ],
  blogArticles: [
    { href: '/blog/premium-home-massage-kuta', label: 'Premium Home Massage Kuta' },
  ],
};

// Reusable link component
const SitemapLink = ({ href, label, color = 'amber' }: { href: string; label: string; color?: string }) => (
  <li>
    <Link href={href}>
      <span className={`text-${color}-600 hover:text-${color}-700 hover:underline`}>{label}</span>
    </Link>
  </li>
);

// Reusable section component
const SitemapSection = ({ 
  title, 
  icon: Icon, 
  links, 
  color = 'amber' 
}: { 
  title: string; 
  icon: React.ElementType; 
  links: Array<{ href: string; label: string }>; 
  color?: string 
}) => (
  <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
    <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
      <Icon className="w-6 h-6 text-amber-600" />
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <ul className="space-y-2">
      {links.map(link => (
        <SitemapLink key={link.href} {...link} color={color} />
      ))}
    </ul>
  </div>
);

// Silo section with expandable subsections
const SiloSection = ({ 
  title, 
  icon: Icon, 
  hub,
  services,
  cities,
  knowledge,
  blog,
  color 
}: { 
  title: string; 
  icon: React.ElementType; 
  hub: { href: string; label: string };
  services: Array<{ href: string; label: string }>;
  cities: Array<{ href: string; label: string }>;
  knowledge?: Array<{ href: string; label: string }>;
  blog: Array<{ href: string; label: string }>;
  color: string;
}) => (
  <>
    {/* Hub */}
    <div className={`bg-gradient-to-br from-${color}-50 to-white rounded-xl p-6 shadow-md border border-gray-200`}>
      <div className={`flex items-center gap-2 mb-4 pb-2 border-b-2 border-${color}-600`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <ul className="space-y-2">
        <SitemapLink {...hub} color={color} />
      </ul>
    </div>
    
    {/* Services */}
    <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        {title} - Services
      </h3>
      <ul className="space-y-2">
        {services.map(link => (
          <SitemapLink key={link.href} {...link} color={color} />
        ))}
      </ul>
    </div>
    
    {/* Cities */}
    <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        {title} - Cities
      </h3>
      <ul className="space-y-2">
        {cities.map(link => (
          <SitemapLink key={link.href} {...link} color={color} />
        ))}
      </ul>
    </div>
    
    {/* Knowledge (if available) */}
    {knowledge && (
      <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
          {title} - Knowledge
        </h3>
        <ul className="space-y-2">
          {knowledge.map(link => (
            <SitemapLink key={link.href} {...link} color={color} />
          ))}
        </ul>
      </div>
    )}
    
    {/* Blog */}
    <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        {title} - Blog
      </h3>
      <ul className="space-y-2">
        {blog.map(link => (
          <SitemapLink key={link.href} {...link} color={color} />
        ))}
      </ul>
    </div>
  </>
);

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEOHead
        title="Sitemap | Home Massage Ubud - All Pages"
        description="Complete sitemap of Home Massage Ubud website. Browse all pages including treatments, service areas, and information pages."
        canonical="https://homemassageubud.com/sitemap"
        keywords="sitemap, home massage ubud, site navigation, all pages"
      />
      
      <Header />
      
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600">
              Complete directory of all pages on Home Massage Ubud
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <SitemapSection title="Main Pages" icon={FileText} links={sitemapData.mainPages} />
            
            {/* Blog Articles */}
            <SitemapSection title="Blog Articles" icon={BookOpen} links={sitemapData.blogArticles} />
            
            {/* Home Massage Silo */}
            <SiloSection 
              title="Home Massage" 
              icon={HomeIcon} 
              hub={sitemapData.homeMassage.hub}
              services={sitemapData.homeMassage.services}
              cities={sitemapData.homeMassage.cities}
              knowledge={sitemapData.homeMassage.knowledge}
              blog={sitemapData.homeMassage.blog}
              color="blue"
            />
            
            {/* Mobile Massage Silo */}
            <SiloSection 
              title="Mobile Massage" 
              icon={Smartphone} 
              hub={sitemapData.mobileMassage.hub}
              services={sitemapData.mobileMassage.services}
              cities={sitemapData.mobileMassage.cities}
              knowledge={sitemapData.mobileMassage.knowledge}
              blog={sitemapData.mobileMassage.blog}
              color="green"
            />
            
            {/* Villa Massage Silo */}
            <SiloSection 
              title="Villa Massage" 
              icon={Building2} 
              hub={sitemapData.villaMassage.hub}
              services={sitemapData.villaMassage.services}
              cities={sitemapData.villaMassage.cities}
              blog={sitemapData.villaMassage.blog}
              color="purple"
            />
            
            {/* Treatments */}
            <SitemapSection title="Massage Treatments" icon={Heart} links={sitemapData.treatments} />
            
            {/* Ubud Areas */}
            <SitemapSection title="Ubud Areas" icon={MapPin} links={sitemapData.ubudAreas} />
            
            {/* South Bali Areas - Part 1 */}
            <SitemapSection 
              title="South Bali (Part 1)" 
              icon={MapPin} 
              links={sitemapData.southBaliAreas.slice(0, 7)} 
            />
            
            {/* South Bali Areas - Part 2 */}
            <SitemapSection 
              title="South Bali (Part 2)" 
              icon={MapPin} 
              links={sitemapData.southBaliAreas.slice(7)} 
            />
            
            {/* North & East Bali Areas */}
            <SitemapSection title="North & East Bali" icon={MapPin} links={sitemapData.northEastBaliAreas} />
            
            {/* Service Pages - Part 1 */}
            <SitemapSection 
              title="Services (Part 1)" 
              icon={Heart} 
              links={sitemapData.servicePages.slice(0, 9)} 
            />
            
            {/* Service Pages - Part 2 */}
            <SitemapSection 
              title="Services (Part 2)" 
              icon={Heart} 
              links={sitemapData.servicePages.slice(9, 18)} 
            />
            
            {/* Service Pages - Part 3 */}
            <SitemapSection 
              title="Services (Part 3)" 
              icon={Heart} 
              links={sitemapData.servicePages.slice(18)} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
