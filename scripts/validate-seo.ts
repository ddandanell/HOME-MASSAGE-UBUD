import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

/**
 * SEO Validation Script
 * 
 * Pre-deployment validation checklist:
 * - Sitemap exists and is valid
 * - Robots.txt is configured
 * - All sitemap URLs are canonical
 * - No duplicate URLs
 * - Core Web Vitals considerations documented
 */

interface ValidationResult {
  passed: boolean;
  message: string;
  details?: string[];
}

const REQUIRED_FILES = [
  'client/public/sitemap.xml',
  'client/public/sitemap-index.xml',
  'client/public/robots.txt',
];

async function checkFileExists(filepath: string): Promise<ValidationResult> {
  const fullPath = path.join(process.cwd(), filepath);
  const exists = fs.existsSync(fullPath);
  
  return {
    passed: exists,
    message: `File ${filepath} ${exists ? 'exists' : 'is missing'}`,
  };
}

async function validateSitemap(): Promise<ValidationResult> {
  const sitemapPath = path.join(process.cwd(), 'client/public/sitemap.xml');
  
  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const parsed = await parseStringPromise(sitemapContent);
    
    const urls: string[] = [];
    const issues: string[] = [];
    
    if (parsed.urlset && parsed.urlset.url) {
      for (const url of parsed.urlset.url) {
        if (url.loc && url.loc[0]) {
          const loc = url.loc[0];
          urls.push(loc);
          
          // Check for canonical URL format (no query params, proper https)
          if (!loc.startsWith('https://')) {
            issues.push(`Non-HTTPS URL: ${loc}`);
          }
          if (loc.includes('?')) {
            issues.push(`Query parameters in URL: ${loc}`);
          }
        }
      }
    }
    
    // Check for duplicates
    const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
    if (duplicates.length > 0) {
      issues.push(`Duplicate URLs found: ${duplicates.join(', ')}`);
    }
    
    if (issues.length > 0) {
      return {
        passed: false,
        message: `Sitemap validation failed with ${issues.length} issues`,
        details: issues,
      };
    }
    
    return {
      passed: true,
      message: `Sitemap is valid with ${urls.length} URLs`,
    };
  } catch (error) {
    return {
      passed: false,
      message: `Failed to parse sitemap: ${error}`,
    };
  }
}

async function validateRobotsTxt(): Promise<ValidationResult> {
  const robotsPath = path.join(process.cwd(), 'client/public/robots.txt');
  
  try {
    const content = fs.readFileSync(robotsPath, 'utf-8');
    const issues: string[] = [];
    
    // Check for required directives
    if (!content.includes('User-agent: *')) {
      issues.push('Missing "User-agent: *" directive');
    }
    if (!content.includes('Allow: /')) {
      issues.push('Missing "Allow: /" directive');
    }
    if (!content.includes('Sitemap:')) {
      issues.push('Missing "Sitemap:" directive');
    }
    
    if (issues.length > 0) {
      return {
        passed: false,
        message: 'Robots.txt validation failed',
        details: issues,
      };
    }
    
    return {
      passed: true,
      message: 'Robots.txt is properly configured',
    };
  } catch (error) {
    return {
      passed: false,
      message: `Failed to read robots.txt: ${error}`,
    };
  }
}

async function validateIndexHtml(): Promise<ValidationResult> {
  const indexPath = path.join(process.cwd(), 'client/index.html');
  
  try {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const issues: string[] = [];
    
    // Check for canonical link
    if (!content.includes('rel="canonical"')) {
      issues.push('Missing canonical link tag');
    }
    
    // Check for meta description
    if (!content.includes('name="description"')) {
      issues.push('Missing meta description');
    }
    
    // Check for Open Graph tags
    if (!content.includes('property="og:')) {
      issues.push('Missing Open Graph tags');
    }
    
    // Check for structured data
    if (!content.includes('application/ld+json')) {
      issues.push('Missing structured data (JSON-LD)');
    }
    
    // Check for breadcrumb schema
    if (!content.includes('@type": "BreadcrumbList') && !content.includes("@type': 'BreadcrumbList")) {
      issues.push('Warning: Breadcrumb schema may be missing from index.html');
    }
    
    if (issues.length > 0) {
      return {
        passed: issues.every(i => i.startsWith('Warning')),
        message: `index.html validation ${issues.every(i => i.startsWith('Warning')) ? 'passed with warnings' : 'failed'}`,
        details: issues,
      };
    }
    
    return {
      passed: true,
      message: 'index.html SEO tags are properly configured',
    };
  } catch (error) {
    return {
      passed: false,
      message: `Failed to read index.html: ${error}`,
    };
  }
}

async function main() {
  console.log('\n🔍 SEO Validation Script\n');
  console.log('='.repeat(50));
  console.log('\n📋 Running pre-deployment checks...\n');
  
  const results: ValidationResult[] = [];
  
  // Check required files
  console.log('1️⃣  Checking required files...\n');
  for (const file of REQUIRED_FILES) {
    const result = await checkFileExists(file);
    results.push(result);
    console.log(`   ${result.passed ? '✅' : '❌'} ${result.message}`);
  }
  
  // Validate sitemap
  console.log('\n2️⃣  Validating sitemap...\n');
  const sitemapResult = await validateSitemap();
  results.push(sitemapResult);
  console.log(`   ${sitemapResult.passed ? '✅' : '❌'} ${sitemapResult.message}`);
  if (sitemapResult.details) {
    sitemapResult.details.forEach(detail => console.log(`      - ${detail}`));
  }
  
  // Validate robots.txt
  console.log('\n3️⃣  Validating robots.txt...\n');
  const robotsResult = await validateRobotsTxt();
  results.push(robotsResult);
  console.log(`   ${robotsResult.passed ? '✅' : '❌'} ${robotsResult.message}`);
  if (robotsResult.details) {
    robotsResult.details.forEach(detail => console.log(`      - ${detail}`));
  }
  
  // Validate index.html
  console.log('\n4️⃣  Validating index.html SEO tags...\n');
  const indexResult = await validateIndexHtml();
  results.push(indexResult);
  console.log(`   ${indexResult.passed ? '✅' : '⚠️ '} ${indexResult.message}`);
  if (indexResult.details) {
    indexResult.details.forEach(detail => console.log(`      - ${detail}`));
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  const allPassed = results.every(r => r.passed);
  const passedCount = results.filter(r => r.passed).length;
  
  console.log(`\n📊 Validation Summary: ${passedCount}/${results.length} checks passed`);
  
  if (allPassed) {
    console.log('\n✅ All validation checks passed! Ready for deployment.\n');
    console.log('📋 Deployment Checklist:');
    console.log('   ✅ Sitemap generated and valid');
    console.log('   ✅ Robots.txt configured');
    console.log('   ✅ SEO meta tags present');
    console.log('   ✅ Canonical URLs configured');
    console.log('   ⚠️  Remember to check Core Web Vitals after deployment');
    console.log('   ⚠️  Remember to verify HTTPS is active');
    console.log('   ⚠️  Remember to submit sitemap to Google Search Console\n');
    process.exit(0);
  } else {
    console.log('\n❌ Some validation checks failed. Please fix issues before deploying.\n');
    process.exit(1);
  }
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
