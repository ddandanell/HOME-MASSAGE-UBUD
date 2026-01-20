#!/usr/bin/env tsx

/**
 * CMS Integration Module
 * 
 * Integrates generated landing pages with CMS platforms:
 * - WordPress REST API
 * - Custom headless CMS
 * - Automatic page creation
 * - Meta data sync
 * - Media upload
 * - Schema injection
 */

import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

// ============================================================================
// TYPES
// ============================================================================

interface CMSConfig {
  platform: 'wordpress' | 'custom';
  endpoint: string;
  auth: {
    username?: string;
    password?: string;
    token?: string;
  };
}

interface PageData {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  status: 'draft' | 'publish';
  meta: {
    description: string;
    keywords: string[];
    schema: any;
  };
  featuredImage?: string;
}

// ============================================================================
// WORDPRESS INTEGRATION
// ============================================================================

class WordPressIntegration {
  private config: CMSConfig;
  
  constructor(config: CMSConfig) {
    this.config = config;
  }
  
  async createPage(data: PageData): Promise<any> {
    try {
      console.log(`📤 Creating WordPress page: ${data.title}`);
      
      // WordPress REST API endpoint
      const endpoint = `${this.config.endpoint}/wp-json/wp/v2/pages`;
      
      // Prepare WordPress page data
      const wpData = {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        slug: data.slug,
        status: data.status,
        meta: {
          _yoast_wpseo_metadesc: data.meta.description,
          _yoast_wpseo_focuskw: data.meta.keywords[0] || ''
        }
      };
      
      // Make request with basic auth
      const response = await axios.post(endpoint, wpData, {
        auth: {
          username: this.config.auth.username!,
          password: this.config.auth.password!
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`✅ Page created: ${response.data.link}`);
      
      // Inject schema via custom field
      if (data.meta.schema) {
        await this.updateCustomField(response.data.id, 'schema_json', JSON.stringify(data.meta.schema));
      }
      
      return response.data;
      
    } catch (error) {
      console.error('❌ WordPress API error:', error);
      throw error;
    }
  }
  
  async updateCustomField(pageId: number, key: string, value: string): Promise<void> {
    const endpoint = `${this.config.endpoint}/wp-json/wp/v2/pages/${pageId}`;
    
    await axios.post(endpoint, {
      meta: {
        [key]: value
      }
    }, {
      auth: {
        username: this.config.auth.username!,
        password: this.config.auth.password!
      }
    });
    
    console.log(`✅ Custom field updated: ${key}`);
  }
  
  async uploadMedia(filePath: string): Promise<string> {
    const endpoint = `${this.config.endpoint}/wp-json/wp/v2/media`;
    
    // Note: Media upload requires the 'form-data' package for Node.js
    // npm install form-data
    // const FormData = require('form-data');
    // const form = new FormData();
    // form.append('file', fs.createReadStream(filePath));
    
    console.log(`📤 Uploading media: ${filePath}`);
    console.log(`⚠️  Media upload requires 'form-data' package: npm install form-data`);
    
    return 'https://example.com/placeholder.jpg';
  }
}

// ============================================================================
// CUSTOM CMS INTEGRATION
// ============================================================================

class CustomCMSIntegration {
  private config: CMSConfig;
  
  constructor(config: CMSConfig) {
    this.config = config;
  }
  
  async createPage(data: PageData): Promise<any> {
    try {
      console.log(`📤 Creating custom CMS page: ${data.title}`);
      
      const response = await axios.post(`${this.config.endpoint}/api/pages`, data, {
        headers: {
          'Authorization': `Bearer ${this.config.auth.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`✅ Page created: ${response.data.id}`);
      return response.data;
      
    } catch (error) {
      console.error('❌ Custom CMS API error:', error);
      throw error;
    }
  }
}

// ============================================================================
// MAIN INTEGRATION FUNCTION
// ============================================================================

async function integrateCMS(contentDir: string, cmsConfig: CMSConfig): Promise<void> {
  console.log('🔌 CMS Integration');
  console.log('='.repeat(60));
  console.log(`Platform: ${cmsConfig.platform}`);
  console.log(`Endpoint: ${cmsConfig.endpoint}`);
  
  // Load assembled HTML
  const htmlPath = path.join(contentDir, '7_landing_page.html');
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Assembled HTML not found: ${htmlPath}`);
  }
  
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  // Load meta data
  const planPath = path.join(contentDir, 'generation_plan.json');
  const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
  const config = plan.config;
  
  // Extract title from HTML
  const titleMatch = html.match(/<title>(.+?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : config.service_focus;
  
  // Extract meta description
  const descMatch = html.match(/<meta name="description" content="(.+?)">/);
  const description = descMatch ? descMatch[1] : '';
  
  // Prepare page data
  const pageData: PageData = {
    title,
    content: html,
    excerpt: description.substring(0, 150),
    slug: path.basename(contentDir),
    status: 'draft', // Create as draft for review
    meta: {
      description,
      keywords: config.primary_keywords,
      schema: {} // Load from schema pack if available
    }
  };
  
  // Load schema if available
  const schemaPath = path.join(contentDir, '6_schema_pack.json');
  if (fs.existsSync(schemaPath)) {
    pageData.meta.schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  }
  
  // Select integration
  let integration: WordPressIntegration | CustomCMSIntegration;
  
  if (cmsConfig.platform === 'wordpress') {
    integration = new WordPressIntegration(cmsConfig);
  } else {
    integration = new CustomCMSIntegration(cmsConfig);
  }
  
  // Create page
  const result = await integration.createPage(pageData);
  
  // Save integration results
  const resultsPath = path.join(contentDir, 'cms_integration.json');
  fs.writeFileSync(resultsPath, JSON.stringify({
    platform: cmsConfig.platform,
    pageId: result.id,
    url: result.link || result.url,
    createdAt: new Date().toISOString(),
    status: 'success'
  }, null, 2));
  
  console.log(`\n✅ Integration complete!`);
  console.log(`📁 Results saved: ${resultsPath}`);
  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Review page in CMS (currently in draft)`);
  console.log(`   2. Preview and test`);
  console.log(`   3. Publish when ready`);
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx cms-integration.ts <content-directory> --platform=<wp|custom> --endpoint=<url> [options]');
    console.log('');
    console.log('WordPress Options:');
    console.log('  --platform=wordpress');
    console.log('  --endpoint=https://yoursite.com');
    console.log('  --username=admin');
    console.log('  --password=app_password');
    console.log('');
    console.log('Custom CMS Options:');
    console.log('  --platform=custom');
    console.log('  --endpoint=https://api.yoursite.com');
    console.log('  --token=your_api_token');
    console.log('');
    console.log('Example:');
    console.log('  tsx scripts/cms-integration.ts generated-content/massage-to-hotel \\');
    console.log('    --platform=wordpress \\');
    console.log('    --endpoint=https://homemassageubud.com \\');
    console.log('    --username=admin \\');
    console.log('    --password=xxxx-xxxx-xxxx-xxxx');
    process.exit(1);
  }
  
  const contentDir = args[0];
  const cmsConfig: CMSConfig = {
    platform: 'wordpress',
    endpoint: '',
    auth: {}
  };
  
  args.slice(1).forEach(arg => {
    if (arg.startsWith('--platform=')) {
      cmsConfig.platform = arg.split('=')[1] as 'wordpress' | 'custom';
    } else if (arg.startsWith('--endpoint=')) {
      cmsConfig.endpoint = arg.split('=')[1];
    } else if (arg.startsWith('--username=')) {
      cmsConfig.auth.username = arg.split('=')[1];
    } else if (arg.startsWith('--password=')) {
      cmsConfig.auth.password = arg.split('=')[1];
    } else if (arg.startsWith('--token=')) {
      cmsConfig.auth.token = arg.split('=')[1];
    }
  });
  
  if (!cmsConfig.endpoint) {
    console.error('Error: --endpoint is required');
    process.exit(1);
  }
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Error: Content directory not found: ${contentDir}`);
    process.exit(1);
  }
  
  await integrateCMS(contentDir, cmsConfig);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { integrateCMS, WordPressIntegration, CustomCMSIntegration };
