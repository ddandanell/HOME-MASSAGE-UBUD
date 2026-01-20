#!/usr/bin/env tsx

/**
 * Multi-Agent Content Generator for 40K-50K Word Landing Pages
 * 
 * This script orchestrates multiple AI agents to generate massive landing pages
 * by breaking the work into manageable chunks and jumping between topics to
 * maintain quality and avoid repetition.
 * 
 * Strategy:
 * - Break 40K-50K words into 10-12 content clusters
 * - Generate each cluster in 3K-5K word chunks
 * - Jump between clusters to maintain freshness
 * - Validate keyword density after each chunk
 * - Assemble final page with proper structure
 */

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

// ============================================================================
// TYPES
// ============================================================================

interface ContentCluster {
  id: string;
  name: string;
  targetWords: string; // e.g., "3000-4000"
  sections: string[];
  priority: number; // 1-10, determines generation order
  keywords: string[];
  generated: boolean;
  content?: string;
  wordCount?: number;
}

interface GenerationPlan {
  totalTargetWords: number;
  clusters: ContentCluster[];
  totalClusters: number;
  estimatedChunks: number;
}

interface PageConfig {
  existing_website_url: string;
  target_landing_page_url: string;
  service_focus: string;
  primary_keywords: string[];
  keyword_targets: {
    exact_match_per_keyword: { min: number; max: number };
    partial_variations_per_keyword: { min: number; max: number };
    overall_density_cap: number;
  };
  targets: {
    total_word_count: string;
    sections_min: number;
    faqs: number;
    ctas_min: number;
    internal_links_min: number;
    images_min: number;
  };
}

// ============================================================================
// CONTENT CLUSTER DEFINITIONS
// ============================================================================

function createContentClusters(config: PageConfig): ContentCluster[] {
  const serviceName = config.service_focus;
  const location = "Ubud";
  
  return [
    {
      id: "cluster_01",
      name: "Service Overview & Introduction",
      targetWords: "3000-4000",
      priority: 1,
      keywords: config.primary_keywords.slice(0, 3),
      sections: [
        `What is ${serviceName}`,
        "History and Origins",
        "How It Works - Complete Process",
        "Benefits Overview",
        "Science and Research Behind It",
        "Who This Service Is For",
        "Different Variations and Styles",
        "Why Mobile Service vs Traditional"
      ],
      generated: false
    },
    {
      id: "cluster_02",
      name: "Detailed Benefits & Use Cases",
      targetWords: "5000-6000",
      priority: 3,
      keywords: config.primary_keywords.slice(2, 5),
      sections: [
        "Physical Health Benefits (Comprehensive)",
        "Mental and Emotional Benefits",
        "Specific Conditions This Addresses",
        "Short-term vs Long-term Benefits",
        "Scientific Studies and Clinical Evidence",
        "Benefits for Different Age Groups",
        "Benefits for Different Fitness Levels",
        "Preventative Health Aspects"
      ],
      generated: false
    },
    {
      id: "cluster_03",
      name: "Service Process & Experience",
      targetWords: "4000-5000",
      priority: 2,
      keywords: config.primary_keywords.slice(1, 4),
      sections: [
        "Before Your Session - Preparation Guide",
        "During the Session - What to Expect",
        "After the Session - Post-Care Tips",
        "First-Time Experience Guide",
        "Tips for Maximizing Benefits",
        "What to Wear and Bring",
        "Setting Expectations",
        "Common Sensations and Reactions"
      ],
      generated: false
    },
    {
      id: "cluster_04",
      name: `${location} Location Coverage - Complete Guide`,
      targetWords: "6000-8000",
      priority: 5,
      keywords: config.primary_keywords,
      sections: [
        `${location} Centre - Complete Coverage`,
        "North Ubud Areas (Tegallalang, Petulu)",
        "South Ubud Areas (Mas, Peliatan)",
        "Penestanan Village Area",
        "Sayan Valley and Surroundings",
        "Tegallalang Rice Terraces Area",
        "Sanggingan Artist District",
        "Monkey Forest Area",
        "Campuhan Ridge Walk Area",
        "Nyuh Kuning Art Village",
        "Hotel and Villa Coverage Map",
        "Response Times by Area",
        "Special Arrangements for Remote Areas"
      ],
      generated: false
    },
    {
      id: "cluster_05",
      name: "Service Types & Variations Deep Dive",
      targetWords: "5000-6000",
      priority: 4,
      keywords: config.primary_keywords.slice(0, 5),
      sections: [
        "Traditional Balinese Style - Complete Guide",
        "Deep Tissue Therapy - When and Why",
        "Aromatherapy Treatment - Benefits and Oils",
        "Hot Stone Therapy - Process and Benefits",
        "Thai Massage Style - Techniques",
        "Swedish Massage Approach",
        "Comparison Between All Types",
        "Which Type for Which Need",
        "Combination Services Available",
        "Custom Blended Approaches"
      ],
      generated: false
    },
    {
      id: "cluster_06",
      name: "Practitioners & Quality Standards",
      targetWords: "3000-4000",
      priority: 6,
      keywords: config.primary_keywords.slice(3, 6),
      sections: [
        "Therapist Qualifications in Detail",
        "Training and Certification Programs",
        "Experience Levels Explained",
        "Specializations Available",
        "Quality Standards We Maintain",
        "Safety Protocols and Procedures",
        "Continuing Education Requirements",
        "How We Select Therapists"
      ],
      generated: false
    },
    {
      id: "cluster_07",
      name: "Comprehensive Pricing & Value",
      targetWords: "2000-3000",
      priority: 7,
      keywords: config.primary_keywords.slice(2, 5),
      sections: [
        "Individual Session Pricing Breakdown",
        "Package Deals and Savings",
        "Value Comparison vs Alternatives",
        "Payment Options Available",
        "Money-Back Satisfaction Guarantee",
        "Special Offers and Promotions",
        "ROI and Value Justification",
        "Hidden Costs (Spoiler: None)"
      ],
      generated: false
    },
    {
      id: "cluster_08",
      name: "Booking, Logistics & Policies",
      targetWords: "2000-2500",
      priority: 8,
      keywords: config.primary_keywords.slice(1, 4),
      sections: [
        "How to Book - Step by Step",
        "Response Times Guaranteed",
        "Same-Day Booking Process",
        "Advance Booking System",
        "Cancellation Policy Explained",
        "Rescheduling Made Easy",
        "Group Booking Procedures",
        "Corporate and Event Bookings"
      ],
      generated: false
    },
    {
      id: "cluster_09",
      name: "Comparisons & Why Choose Us",
      targetWords: "3000-4000",
      priority: 9,
      keywords: config.primary_keywords,
      sections: [
        "vs Hotel and Resort Spas",
        "vs Spa Clinics and Centers",
        "vs Warung and Street Massages",
        "vs DIY and Self-Care Methods",
        "Why Mobile Service Wins",
        "Cost-Benefit Analysis",
        "Convenience Factor Breakdown",
        "Quality Comparison Matrix"
      ],
      generated: false
    },
    {
      id: "cluster_10",
      name: "Customer Stories & Social Proof",
      targetWords: "2000-3000",
      priority: 10,
      keywords: config.primary_keywords.slice(0, 3),
      sections: [
        "Testimonial: Hotel Guest - Business Traveler",
        "Testimonial: Honeymooners Experience",
        "Testimonial: Yoga Retreat Group",
        "Testimonial: Family Vacation",
        "Testimonial: Solo Traveler",
        "Testimonial: Long-term Resident",
        "Testimonial: Chronic Pain Relief",
        "Testimonial: Post-Activity Recovery",
        "Testimonial: Special Occasion",
        "Testimonial: Regular Client",
        "Before/After Case Studies",
        "Problem-Solution Scenarios",
        "Statistics and Success Rates"
      ],
      generated: false
    },
    {
      id: "cluster_11",
      name: "Ultimate Resource & Related Topics",
      targetWords: "2000-3000",
      priority: 11,
      keywords: config.primary_keywords.slice(4, 7),
      sections: [
        "Related Wellness Topics",
        "Self-Care Tips Between Sessions",
        "Bali Wellness Culture Guide",
        "Local Landmarks and Attractions",
        "Combining with Other Activities",
        "Wellness Lifestyle Integration",
        "Stretching and Exercise Recommendations",
        "Nutrition for Muscle Health"
      ],
      generated: false
    },
    {
      id: "cluster_12",
      name: "Comprehensive FAQ (50 Questions)",
      targetWords: "4000-5000",
      priority: 12,
      keywords: config.primary_keywords,
      sections: [
        "Booking & Logistics FAQs (10 questions)",
        "Service Details FAQs (10 questions)",
        "Pricing & Payments FAQs (8 questions)",
        "Therapists & Qualifications FAQs (8 questions)",
        "Location & Coverage FAQs (8 questions)",
        "Safety & Privacy FAQs (6 questions)"
      ],
      generated: false
    }
  ];
}

// ============================================================================
// GENERATION ORCHESTRATION
// ============================================================================

function createGenerationPlan(config: PageConfig): GenerationPlan {
  const clusters = createContentClusters(config);
  const targetRange = config.targets.total_word_count.split('-');
  const totalTargetWords = parseInt(targetRange[1]) || 50000;
  
  return {
    totalTargetWords,
    clusters,
    totalClusters: clusters.length,
    estimatedChunks: Math.ceil(totalTargetWords / 5000) // 5K words per chunk
  };
}

function generateExecutionOrder(clusters: ContentCluster[]): ContentCluster[] {
  // Sort by priority, but add randomization to jump between topics
  return clusters.sort((a, b) => {
    const priorityDiff = a.priority - b.priority;
    // Add slight randomization (±0.5) to break ties and add variety
    return priorityDiff + (Math.random() - 0.5);
  });
}

async function generateClusterContent(
  cluster: ContentCluster,
  config: PageConfig,
  outputDir: string
): Promise<void> {
  console.log(`\n📝 Generating: ${cluster.name}`);
  console.log(`   Target: ${cluster.targetWords} words`);
  console.log(`   Sections: ${cluster.sections.length}`);
  console.log(`   Priority: ${cluster.priority}`);
  
  // Create prompt for this specific cluster
  const clusterPrompt = `
# Content Cluster Generation Task

## Cluster: ${cluster.name}
Target Word Count: ${cluster.targetWords}

## Context
This is ONE cluster of a comprehensive 40,000-50,000 word landing page about:
"${config.service_focus}"

## Your Task
Generate ${cluster.targetWords} words of high-quality, unique content covering these sections:

${cluster.sections.map((section, idx) => `${idx + 1}. ${section}`).join('\n')}

## Keywords to Include Naturally
${cluster.keywords.map(k => `- ${k}`).join('\n')}

## Requirements
- Write in second-person ("you")
- Warm but professional tone
- Include specific Ubud locations and landmarks
- NO generic wellness copy
- NO template phrases
- Each section should be 300-800 words
- Include examples and scenarios
- Add 2-3 CTAs naturally throughout

## Output Format
Provide clean markdown with H2 and H3 headings for each section.
`;

  // Save prompt for manual execution or AI integration
  const promptPath = path.join(outputDir, `${cluster.id}_prompt.md`);
  fs.writeFileSync(promptPath, clusterPrompt);
  
  console.log(`   ✓ Prompt saved: ${promptPath}`);
  console.log(`   → Use this prompt with your AI tool to generate content`);
  console.log(`   → Save output to: ${outputDir}/${cluster.id}_content.md`);
  
  // Mark as ready for generation
  cluster.generated = false; // Will be true once content file exists
}

async function orchestrateGeneration(configPath: string): Promise<void> {
  console.log('🎯 Multi-Agent Content Generation Orchestrator');
  console.log('=' .repeat(70));
  
  // Load config
  const configContent = fs.readFileSync(configPath, 'utf8');
  const config = yaml.load(configContent) as PageConfig;
  
  // Create generation plan
  const plan = createGenerationPlan(config);
  
  console.log(`\n📊 Generation Plan:`);
  console.log(`   Total Target: ${plan.totalTargetWords.toLocaleString()} words`);
  console.log(`   Content Clusters: ${plan.totalClusters}`);
  console.log(`   Estimated Chunks: ${plan.estimatedChunks}`);
  console.log(``);
  
  // Create output directory
  const pageName = path.basename(configPath, '.yaml');
  const outputDir = path.join(process.cwd(), 'generated-content', pageName);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Generate execution order
  const executionOrder = generateExecutionOrder([...plan.clusters]);
  
  console.log(`\n🔄 Execution Order (jumping between topics for freshness):`);
  executionOrder.forEach((cluster, idx) => {
    console.log(`   ${idx + 1}. [Priority ${cluster.priority}] ${cluster.name} (${cluster.targetWords} words)`);
  });
  
  // Save master plan
  const masterPlan = {
    config,
    plan,
    executionOrder: executionOrder.map(c => c.id),
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'generation_plan.json'),
    JSON.stringify(masterPlan, null, 2)
  );
  
  console.log(`\n✅ Generation plan saved to: ${outputDir}/generation_plan.json`);
  
  // Generate prompts for each cluster
  console.log(`\n📝 Generating individual cluster prompts...`);
  
  for (const cluster of executionOrder) {
    await generateClusterContent(cluster, config, outputDir);
    await new Promise(resolve => setTimeout(resolve, 100)); // Brief pause
  }
  
  console.log(`\n\n🎉 All cluster prompts generated!`);
  console.log(`\n📁 Find them in: ${outputDir}/`);
  console.log(`\n🚀 Next Steps:`);
  console.log(`   1. Open each *_prompt.md file`);
  console.log(`   2. Paste into your AI tool (ChatGPT, Claude, etc.)`);
  console.log(`   3. Save generated content to *_content.md`);
  console.log(`   4. Run assembly script to combine all clusters`);
  console.log(`   5. Validate keyword density and quality gates`);
  console.log(``);
  console.log(`💡 Tip: Generate clusters out of order to maintain content freshness!`);
  console.log(`   Start with clusters 1, 5, 9, then 2, 6, 10, etc.`);
}

// ============================================================================
// CLI INTERFACE
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx multi-agent-content-generator.ts <config.yaml>');
    console.log('');
    console.log('Example:');
    console.log('  tsx scripts/multi-agent-content-generator.ts page-configs/massage-to-hotel.yaml');
    console.log('');
    console.log('This will create generation prompts for all 12 content clusters.');
    process.exit(1);
  }
  
  const configPath = args[0];
  
  if (!fs.existsSync(configPath)) {
    console.error(`Error: Config file not found: ${configPath}`);
    process.exit(1);
  }
  
  await orchestrateGeneration(configPath);
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { createGenerationPlan, createContentClusters, orchestrateGeneration };
