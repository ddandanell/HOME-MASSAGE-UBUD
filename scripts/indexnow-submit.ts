import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

/**
 * IndexNow URL Submission Script
 * 
 * This script reads URLs from sitemap.xml and submits them to IndexNow API
 * for instant indexing on Bing, Yandex, and other supported search engines.
 * 
 * Usage:
 * 1. Set your INDEXNOW_API_KEY environment variable
 * 2. Run: npm run indexnow:submit
 */

const INDEXNOW_API_ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 100; // Submit 100 URLs at a time
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds delay between batches

interface IndexNowRequest {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

async function readSitemap(): Promise<string[]> {
  const sitemapPath = path.join(process.cwd(), 'client/public/sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Sitemap not found at: ${sitemapPath}`);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const parsed = await parseStringPromise(sitemapContent);

  const urls: string[] = [];
  if (parsed.urlset && parsed.urlset.url) {
    for (const url of parsed.urlset.url) {
      if (url.loc && url.loc[0]) {
        urls.push(url.loc[0]);
      }
    }
  }

  return urls;
}

async function submitToIndexNow(urls: string[], apiKey: string): Promise<void> {
  const host = 'homemassageubud.com';
  const keyLocation = `https://${host}/${apiKey}.txt`;

  const request: IndexNowRequest = {
    host,
    key: apiKey,
    keyLocation,
    urlList: urls
  };

  console.log(`\n📤 Submitting ${urls.length} URLs to IndexNow...`);

  try {
    const response = await fetch(INDEXNOW_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
    });

    if (response.ok) {
      console.log(`✅ Successfully submitted ${urls.length} URLs`);
      console.log(`   Status: ${response.status} ${response.statusText}`);
    } else {
      console.error(`❌ Submission failed: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error(`   Error: ${errorText}`);
    }
  } catch (error) {
    console.error(`❌ Network error:`, error);
    throw error;
  }
}

function splitIntoBatches<T>(array: T[], batchSize: number): T[][] {
  const batches: T[][] = [];
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }
  return batches;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('\n🚀 IndexNow URL Submission Script\n');
  console.log('='.repeat(50));

  // Check for API key
  const apiKey = process.env.INDEXNOW_API_KEY;
  
  if (!apiKey) {
    console.error('\n❌ Error: INDEXNOW_API_KEY environment variable not set\n');
    console.log('Setup instructions:');
    console.log('1. Generate a UUID at https://www.uuidgenerator.net/');
    console.log('2. Create file: client/public/{UUID}.txt');
    console.log('3. Add your UUID to the file content');
    console.log('4. Set environment variable: export INDEXNOW_API_KEY={UUID}');
    console.log('5. Run this script again\n');
    console.log('See INDEXNOW_SETUP_GUIDE.md for detailed instructions.\n');
    process.exit(1);
  }

  console.log(`\n✅ API Key found: ${apiKey.substring(0, 8)}...`);

  // Check if API key file exists
  const keyFilePath = path.join(process.cwd(), `client/public/${apiKey}.txt`);
  if (!fs.existsSync(keyFilePath)) {
    console.error(`\n❌ Error: API key file not found at: ${keyFilePath}\n`);
    console.log('Please create the file with your API key as content.\n');
    process.exit(1);
  }

  console.log(`✅ API Key file exists`);

  // Read sitemap
  console.log(`\n📖 Reading sitemap.xml...`);
  const urls = await readSitemap();
  console.log(`✅ Found ${urls.length} URLs in sitemap`);

  // Split into batches
  const batches = splitIntoBatches(urls, BATCH_SIZE);
  console.log(`\n📦 Split into ${batches.length} batches of up to ${BATCH_SIZE} URLs`);

  // Submit batches
  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`\n📤 Submitting batch ${i + 1}/${batches.length}...`);
    
    try {
      await submitToIndexNow(batch, apiKey);
      successCount += batch.length;
      
      // Wait between batches (except for the last one)
      if (i < batches.length - 1) {
        console.log(`⏳ Waiting ${DELAY_BETWEEN_BATCHES / 1000}s before next batch...`);
        await delay(DELAY_BETWEEN_BATCHES);
      }
    } catch (error) {
      failureCount += batch.length;
      console.error(`❌ Batch ${i + 1} failed:`, error);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Submission Summary:');
  console.log(`   Total URLs: ${urls.length}`);
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${failureCount}`);
  console.log('\n✨ Done!\n');

  // Log to file
  interface LogEntry {
    timestamp: string;
    total_urls: number;
    successful: number;
    failed: number;
    batches: number;
  }

  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    total_urls: urls.length,
    successful: successCount,
    failed: failureCount,
    batches: batches.length
  };

  const logPath = path.join(process.cwd(), 'indexnow-submission-log.json');
  let logData: LogEntry[] = [];
  
  if (fs.existsSync(logPath)) {
    const existingLog = fs.readFileSync(logPath, 'utf-8');
    logData = JSON.parse(existingLog);
  }
  
  logData.push(logEntry);
  fs.writeFileSync(logPath, JSON.stringify(logData, null, 2));
  
  console.log(`📝 Logged to: ${logPath}\n`);

  // Next steps
  console.log('📋 Next steps:');
  console.log('1. Check Bing Webmaster Tools for submission status');
  console.log('2. Monitor indexing in Bing Search Console');
  console.log('3. Re-run this script when you update content\n');
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
