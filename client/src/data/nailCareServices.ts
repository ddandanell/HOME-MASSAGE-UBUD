// Shared nail care service data for use across all pages
// This ensures consistency in pricing and service descriptions

export interface NailCareService {
  name: string;
  description: string;
  priceFrom: string;
  priceTo?: string;
  duration: string;
  category: 'basic' | 'art' | 'extensions' | 'tips';
  popular?: boolean;
}

export const NAIL_CARE_SERVICES: NailCareService[] = [
  // Basic Nail Care
  {
    name: 'Basic Manicure',
    description: 'Professional nail shaping, cuticle care, and hand massage',
    priceFrom: 'Rp 200,000',
    duration: '45 min',
    category: 'basic'
  },
  {
    name: 'Basic Pedicure',
    description: 'Foot soak, nail care, exfoliation, and relaxing foot massage',
    priceFrom: 'Rp 250,000',
    duration: '60 min',
    category: 'basic'
  },
  {
    name: 'Manicure + Pedicure Package',
    description: 'Complete hand and foot care package',
    priceFrom: 'Rp 420,000',
    duration: '90 min',
    category: 'basic',
    popular: true
  },
  {
    name: 'Manicure + Gel Polish',
    description: 'Professional manicure with long-lasting gel polish',
    priceFrom: 'Rp 350,000',
    duration: '75 min',
    category: 'basic'
  },
  {
    name: 'Pedicure + Gel Polish',
    description: 'Complete pedicure with durable gel polish',
    priceFrom: 'Rp 400,000',
    duration: '90 min',
    category: 'basic'
  },
  {
    name: 'Manicure + Pedicure + Gel Polish',
    description: 'Ultimate package with gel polish on hands and feet',
    priceFrom: 'Rp 700,000',
    duration: '120 min',
    category: 'basic',
    popular: true
  },
  // Nail Art
  {
    name: 'Simple Nail Art',
    description: 'Basic designs on 2-4 nails',
    priceFrom: 'Rp 50,000',
    priceTo: 'Rp 100,000',
    duration: '15-30 min',
    category: 'art'
  },
  {
    name: 'Medium Nail Art',
    description: 'Detailed designs with multiple colors',
    priceFrom: 'Rp 150,000',
    priceTo: 'Rp 250,000',
    duration: '30-45 min',
    category: 'art',
    popular: true
  },
  {
    name: 'Full Nail Art',
    description: 'Intricate designs on all nails',
    priceFrom: 'Rp 300,000',
    priceTo: 'Rp 500,000',
    duration: '45-60 min',
    category: 'art'
  },
  // Extensions
  {
    name: 'Full Set Nail Extension',
    description: 'Complete set of professional extensions',
    priceFrom: 'Rp 600,000',
    priceTo: 'Rp 900,000',
    duration: '120-180 min',
    category: 'extensions',
    popular: true
  },
  {
    name: 'Extension Refill',
    description: 'Maintenance for existing extensions',
    priceFrom: 'Rp 400,000',
    priceTo: 'Rp 600,000',
    duration: '90-120 min',
    category: 'extensions'
  },
  {
    name: 'Extension Removal',
    description: 'Safe removal of nail extensions',
    priceFrom: 'Rp 150,000',
    duration: '30-45 min',
    category: 'extensions'
  },
  // Tips
  {
    name: 'Nail Tips + Gel Polish',
    description: 'Nail tips with durable gel polish',
    priceFrom: 'Rp 350,000',
    priceTo: 'Rp 550,000',
    duration: '90-150 min',
    category: 'tips'
  },
  {
    name: 'Nail Tips + Gel + Art',
    description: 'Complete package with nail art',
    priceFrom: 'Rp 500,000',
    priceTo: 'Rp 650,000',
    duration: '150-180 min',
    category: 'tips'
  },
  {
    name: 'Nail Tip Removal',
    description: 'Safe nail tip removal',
    priceFrom: 'Rp 100,000',
    priceTo: 'Rp 150,000',
    duration: '30 min',
    category: 'tips'
  }
];

// Popular services for quick display
export const FEATURED_NAIL_SERVICES: NailCareService[] = NAIL_CARE_SERVICES.filter(
  service => service.popular
);

// Transport fees by location
export interface TransportFee {
  area: string;
  fee: string;
}

export const TRANSPORT_FEES: TransportFee[] = [
  { area: 'Gianyar', fee: 'FREE – Rp 30,000' },
  { area: 'Ubud', fee: 'Rp 50,000 – 75,000' },
  { area: 'Seminyak', fee: 'Rp 150,000 – 180,000' },
  { area: 'Canggu', fee: 'Rp 180,000 – 220,000' },
  { area: 'Jimbaran', fee: 'Rp 200,000 – 250,000' },
  { area: 'Uluwatu', fee: 'Rp 200,000 – 250,000' },
  { area: 'Sanur', fee: 'Rp 100,000 – 150,000' },
  { area: 'Nusa Dua', fee: 'Rp 150,000 – 200,000' },
  { area: 'Kuta', fee: 'Rp 120,000 – 150,000' },
  { area: 'Legian', fee: 'Rp 120,000 – 150,000' }
];

// Get transport fee for specific area
export function getTransportFeeForArea(areaName: string): string {
  const area = TRANSPORT_FEES.find(
    t => t.area.toLowerCase().includes(areaName.toLowerCase()) ||
       areaName.toLowerCase().includes(t.area.toLowerCase())
  );
  return area?.fee || 'Rp 50,000 – 250,000';
}

// Format price display
export function formatNailServicePrice(service: NailCareService): string {
  if (service.priceTo) {
    return `${service.priceFrom} – ${service.priceTo}`;
  }
  return service.priceFrom;
}
