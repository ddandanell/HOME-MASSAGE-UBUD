import fs from 'fs';
import path from 'path';

/**
 * Dynamic Sitemap Generator
 * 
 * Automatically generates sitemap.xml based on routes in the application
 * Run this script whenever pages are added, edited, or deleted
 */

const DOMAIN = 'https://homemassageubud.com';
const OUTPUT_DIR = path.join(process.cwd(), 'client/public');
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');
const SITEMAP_INDEX_PATH = path.join(OUTPUT_DIR, 'sitemap-index.xml');

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

interface SitemapSection {
  name: string;
  filename: string;
  urls: SitemapUrl[];
}

// Get current date in YYYY-MM-DD format
function getCurrentDate(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

// Main pages configuration
const mainPages: SitemapUrl[] = [
  { loc: `${DOMAIN}/`, lastmod: getCurrentDate(), changefreq: 'weekly', priority: 1.0 },
  { loc: `${DOMAIN}/services`, lastmod: getCurrentDate(), changefreq: 'weekly', priority: 0.9 },
  { loc: `${DOMAIN}/treatments`, lastmod: getCurrentDate(), changefreq: 'weekly', priority: 0.9 },
  { loc: `${DOMAIN}/service-areas`, lastmod: getCurrentDate(), changefreq: 'weekly', priority: 0.9 },
  { loc: `${DOMAIN}/sitemap`, lastmod: getCurrentDate(), changefreq: 'monthly', priority: 0.5 },
  { loc: `${DOMAIN}/about`, lastmod: getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
  { loc: `${DOMAIN}/contact`, lastmod: getCurrentDate(), changefreq: 'monthly', priority: 0.9 },
  { loc: `${DOMAIN}/pricing`, lastmod: getCurrentDate(), changefreq: 'weekly', priority: 0.9 },
  { loc: `${DOMAIN}/testimonials`, lastmod: getCurrentDate(), changefreq: 'monthly', priority: 0.7 },
  { loc: `${DOMAIN}/blog`, lastmod: getCurrentDate(), changefreq: 'weekly', priority: 0.7 },
  { loc: `${DOMAIN}/sustainability`, lastmod: getCurrentDate(), changefreq: 'monthly', priority: 0.6 },
  { loc: `${DOMAIN}/villa-partnerships`, lastmod: getCurrentDate(), changefreq: 'monthly', priority: 0.6 },
];

// Treatment pages
const treatmentPages: SitemapUrl[] = [
  'traditional-balinese-massage',
  'deep-tissue-massage',
  'aromatherapy-massage',
  'hot-stone-massage',
  'thai-massage',
  'lymphatic-drainage-massage',
  'pregnancy-massage',
  'foot-reflexology',
  'post-hike-recovery-massage',
  'yoga-stretch-massage',
  'detox-wellness-massage',
  'couples-wellness-ritual',
  'herbal-bamboo-massage',
].map(slug => ({
  loc: `${DOMAIN}/ubud/${slug}`,
  lastmod: getCurrentDate(),
  changefreq: 'monthly',
  priority: 0.8
}));

// Area pages - Ubud
const ubudAreaPages: SitemapUrl[] = [
  'ubud-centre',
  'ubud-north',
  'ubud-east',
  'ubud-south',
  'ubud-luxury-villas',
  'sidemen',
].map(slug => ({
  loc: `${DOMAIN}/${slug}`,
  lastmod: getCurrentDate(),
  changefreq: 'monthly',
  priority: 0.8
}));

// Area pages - South Bali
const southBaliAreaPages: SitemapUrl[] = [
  'seminyak',
  'petitenget',
  'canggu',
  'berawa',
  'pererenan',
  'umalas',
  'kerobokan',
  'legian',
  'kuta',
  'sanur',
  'nusa-dua',
  'jimbaran',
  'uluwatu',
  'ungasan',
].map(slug => ({
  loc: `${DOMAIN}/${slug}`,
  lastmod: getCurrentDate(),
  changefreq: 'monthly',
  priority: 0.7
}));

// Area pages - North & East Bali
const northEastBaliAreaPages: SitemapUrl[] = [
  'lovina',
  'amed',
  'candidasa',
].map(slug => ({
  loc: `${DOMAIN}/${slug}`,
  lastmod: getCurrentDate(),
  changefreq: 'monthly',
  priority: 0.7
}));

// Service landing pages
const serviceLandingPages: SitemapUrl[] = [
  'massage',
  'spa-massage',
  'deep-tissue-massage',
  'full-body-massage',
  'couples-massage',
  'traditional-massage',
  'aromatherapy-massage',
  'hot-stone-massage',
  'relaxing-massage',
  'body-massage',
  'foot-massage',
  'reflexology',
  'sports-massage',
  'prenatal-massage',
  'pregnancy-massage',
  'postnatal-massage',
  'home-massage',
  'mobile-massage',
  'at-home-massage',
  'professional-massage',
  'body-therapy-massage',
  'wellness-massage',
  'therapeutic-massage',
  'luxury-massage',
  'best-massage-services',
].map(slug => ({
  loc: `${DOMAIN}/services/${slug}`,
  lastmod: getCurrentDate(),
  changefreq: 'monthly',
  priority: 0.8
}));

function generateSitemapXML(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlElements}
</urlset>`;
}

function generateSitemapIndexXML(sections: SitemapSection[]): string {
  const sitemapElements = sections.map(section => `  <sitemap>
    <loc>${DOMAIN}/${section.filename}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapElements}
</sitemapindex>`;
}

async function pingGoogle(sitemapUrl: string): Promise<void> {
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  console.log(`\n🔔 Pinging Google: ${pingUrl}`);
  
  try {
    const response = await fetch(pingUrl);
    if (response.ok) {
      console.log('✅ Successfully pinged Google');
    } else {
      console.log(`⚠️  Google ping returned status: ${response.status}`);
    }
  } catch (error) {
    console.log('⚠️  Could not ping Google (this is optional):', error);
  }
}

async function main() {
  console.log('\n🚀 Sitemap Generator\n');
  console.log('='.repeat(50));
  
  // Define sitemap sections
  const sections: SitemapSection[] = [
    { name: 'Main Pages', filename: 'sitemap-pages.xml', urls: mainPages },
    { name: 'Treatments', filename: 'sitemap-treatments.xml', urls: treatmentPages },
    { name: 'Ubud Areas', filename: 'sitemap-areas-ubud.xml', urls: ubudAreaPages },
    { name: 'South Bali Areas', filename: 'sitemap-areas-south.xml', urls: southBaliAreaPages },
    { name: 'North/East Bali Areas', filename: 'sitemap-areas-north-east.xml', urls: northEastBaliAreaPages },
    { name: 'Service Landing Pages', filename: 'sitemap-services.xml', urls: serviceLandingPages },
  ];

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Generate individual sitemap files
  console.log('\n📝 Generating sitemap files...\n');
  
  let totalUrls = 0;
  for (const section of sections) {
    const xml = generateSitemapXML(section.urls);
    const filepath = path.join(OUTPUT_DIR, section.filename);
    fs.writeFileSync(filepath, xml, 'utf-8');
    console.log(`✅ ${section.name}: ${section.urls.length} URLs → ${section.filename}`);
    totalUrls += section.urls.length;
  }

  // Generate sitemap index
  const sitemapIndexXML = generateSitemapIndexXML(sections);
  fs.writeFileSync(SITEMAP_INDEX_PATH, sitemapIndexXML, 'utf-8');
  console.log(`\n✅ Sitemap Index: ${sections.length} sitemaps → sitemap-index.xml`);

  // Generate main sitemap.xml with all URLs (for backwards compatibility)
  const allUrls = sections.flatMap(s => s.urls);
  const mainSitemapXML = generateSitemapXML(allUrls);
  fs.writeFileSync(SITEMAP_PATH, mainSitemapXML, 'utf-8');
  console.log(`✅ Main Sitemap: ${totalUrls} URLs → sitemap.xml`);

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Generation Summary:');
  console.log(`   Total URLs: ${totalUrls}`);
  console.log(`   Sitemap sections: ${sections.length}`);
  console.log(`   Output directory: ${OUTPUT_DIR}`);
  console.log('\n✨ Done!\n');

  // Ping Google (optional)
  if (process.env.PING_GOOGLE === 'true') {
    await pingGoogle(`${DOMAIN}/sitemap.xml`);
  } else {
    console.log('💡 Tip: Set PING_GOOGLE=true to automatically notify Google of sitemap updates\n');
  }
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
