#!/usr/bin/env tsx

/**
 * Batch Processor for Multiple Landing Pages
 * 
 * Processes 10+ pages in sequence or parallel:
 * - Queue management
 * - Parallel execution with limits
 * - Progress tracking across all pages
 * - Error handling and retries
 * - Resource optimization
 * - Completion reports
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// ============================================================================
// TYPES
// ============================================================================

interface BatchJob {
  id: string;
  configPath: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  startedAt?: string;
  completedAt?: string;
  error?: string;
  outputDir?: string;
}

interface BatchConfig {
  jobs: BatchJob[];
  parallel: number; // max parallel jobs
  retryFailures: boolean;
  outputBaseDir: string;
}

interface BatchProgress {
  totalJobs: number;
  completed: number;
  failed: number;
  pending: number;
  running: number;
  startTime: string;
  estimatedCompletion?: string;
}

// ============================================================================
// BATCH CONFIGURATION
// ============================================================================

function createBatchConfig(configDir: string, parallel: number = 2): BatchConfig {
  const configs = fs.readdirSync(configDir)
    .filter(f => f.endsWith('.yaml'))
    .map(f => path.join(configDir, f));
  
  const jobs: BatchJob[] = configs.map((configPath, idx) => ({
    id: `job_${idx + 1}`,
    configPath,
    status: 'pending'
  }));
  
  return {
    jobs,
    parallel,
    retryFailures: true,
    outputBaseDir: 'generated-content'
  };
}

// ============================================================================
// JOB EXECUTION
// ============================================================================

async function executeJob(job: BatchJob, config: BatchConfig): Promise<void> {
  job.status = 'running';
  job.startedAt = new Date().toISOString();
  
  try {
    console.log(`\n🚀 Starting ${job.id}: ${path.basename(job.configPath)}`);
    
    // Run multi-agent generator
    const command = `npx tsx scripts/multi-agent-content-generator.ts "${job.configPath}"`;
    execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    job.status = 'completed';
    job.completedAt = new Date().toISOString();
    
    // Determine output directory
    const pageName = path.basename(job.configPath, '.yaml');
    job.outputDir = path.join(config.outputBaseDir, pageName);
    
    console.log(`✅ Completed ${job.id}`);
    
  } catch (error) {
    job.status = 'failed';
    job.error = error instanceof Error ? error.message : String(error);
    job.completedAt = new Date().toISOString();
    
    console.error(`❌ Failed ${job.id}: ${job.error}`);
    
    if (config.retryFailures) {
      console.log(`   Will retry after other jobs complete`);
    }
  }
}

// ============================================================================
// BATCH PROCESSING
// ============================================================================

async function processBatch(config: BatchConfig): Promise<BatchProgress> {
  const startTime = new Date().toISOString();
  
  console.log('🎯 Batch Processor for Landing Pages');
  console.log('='.repeat(60));
  console.log(`Total jobs: ${config.jobs.length}`);
  console.log(`Parallel limit: ${config.parallel}`);
  console.log(`Retry failures: ${config.retryFailures}`);
  console.log('');
  
  // Process jobs in batches
  let processedCount = 0;
  
  while (config.jobs.some(j => j.status === 'pending')) {
    // Get next batch of jobs
    const availableSlots = config.parallel;
    const pendingJobs = config.jobs.filter(j => j.status === 'pending');
    const batchJobs = pendingJobs.slice(0, availableSlots);
    
    if (batchJobs.length === 0) break;
    
    // Execute batch
    await Promise.all(
      batchJobs.map(job => executeJob(job, config))
    );
    
    processedCount += batchJobs.length;
    
    // Print progress
    printBatchProgress(config);
    
    // Small delay between batches
    if (pendingJobs.length > batchJobs.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  // Retry failed jobs if configured
  if (config.retryFailures) {
    const failedJobs = config.jobs.filter(j => j.status === 'failed');
    
    if (failedJobs.length > 0) {
      console.log(`\n🔄 Retrying ${failedJobs.length} failed jobs...`);
      
      for (const job of failedJobs) {
        job.status = 'pending';
        job.error = undefined;
        await executeJob(job, config);
      }
    }
  }
  
  // Generate final progress
  const completed = config.jobs.filter(j => j.status === 'completed').length;
  const failed = config.jobs.filter(j => j.status === 'failed').length;
  
  return {
    totalJobs: config.jobs.length,
    completed,
    failed,
    pending: 0,
    running: 0,
    startTime,
    estimatedCompletion: new Date().toISOString()
  };
}

// ============================================================================
// PROGRESS DISPLAY
// ============================================================================

function printBatchProgress(config: BatchConfig): void {
  const completed = config.jobs.filter(j => j.status === 'completed').length;
  const failed = config.jobs.filter(j => j.status === 'failed').length;
  const running = config.jobs.filter(j => j.status === 'running').length;
  const pending = config.jobs.filter(j => j.status === 'pending').length;
  const total = config.jobs.length;
  
  const progressPct = ((completed + failed) / total) * 100;
  
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Progress: ${completed}/${total} completed, ${failed} failed, ${running} running, ${pending} pending`);
  console.log(`[${progressBar(progressPct, 40)}] ${progressPct.toFixed(1)}%`);
  console.log(`${'═'.repeat(60)}`);
}

function progressBar(percent: number, width: number): string {
  const filled = Math.floor((percent / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

// ============================================================================
// REPORT GENERATION
// ============================================================================

function generateBatchReport(config: BatchConfig, progress: BatchProgress, outputPath: string): void {
  const report = `
# Batch Processing Report

**Generated:** ${new Date().toLocaleString()}

## Summary

- **Total Jobs:** ${progress.totalJobs}
- **Completed:** ${progress.completed} ✅
- **Failed:** ${progress.failed} ❌
- **Success Rate:** ${((progress.completed / progress.totalJobs) * 100).toFixed(1)}%
- **Start Time:** ${new Date(progress.startTime).toLocaleString()}
- **End Time:** ${progress.estimatedCompletion ? new Date(progress.estimatedCompletion).toLocaleString() : 'N/A'}

## Job Details

| Job ID | Config File | Status | Output Directory | Duration |
|--------|-------------|--------|------------------|----------|
${config.jobs.map(j => {
  const duration = j.startedAt && j.completedAt 
    ? `${Math.round((new Date(j.completedAt).getTime() - new Date(j.startedAt).getTime()) / 60000)} min`
    : 'N/A';
  const status = j.status === 'completed' ? '✅' : j.status === 'failed' ? '❌' : '⏳';
  return `| ${j.id} | ${path.basename(j.configPath)} | ${status} ${j.status} | ${j.outputDir || 'N/A'} | ${duration} |`;
}).join('\n')}

## Failed Jobs

${config.jobs.filter(j => j.status === 'failed').map(j => 
  `### ${j.id} - ${path.basename(j.configPath)}\n**Error:** ${j.error}`
).join('\n\n') || 'None'}

## Next Steps

${progress.completed > 0 ? `
1. Review generated content in output directories
2. For each completed page:
   - Run content assembly: \`npm run landing:assemble <output-dir>\`
   - Validate keyword density: \`npm run landing:validate <output-dir>\`
   - Render production HTML: \`npm run landing:render <output-dir>\`
3. Deploy pages to production
` : 'Fix failed jobs and retry.'}

---

*Generated by batch processor*
`;

  fs.writeFileSync(outputPath, report);
  console.log(`\n📄 Batch report saved: ${outputPath}`);
}

// ============================================================================
// MAIN FUNCTION
// ============================================================================

async function runBatchProcessor(configDir: string, options: Partial<BatchConfig> = {}): Promise<void> {
  if (!fs.existsSync(configDir)) {
    throw new Error(`Config directory not found: ${configDir}`);
  }
  
  // Create batch configuration
  const config = createBatchConfig(configDir, options.parallel || 2);
  
  if (config.jobs.length === 0) {
    console.error('No YAML config files found in directory');
    process.exit(1);
  }
  
  // Save batch config
  const batchConfigPath = path.join(config.outputBaseDir, 'batch_config.json');
  fs.mkdirSync(config.outputBaseDir, { recursive: true });
  fs.writeFileSync(batchConfigPath, JSON.stringify(config, null, 2));
  
  // Process batch
  const progress = await processBatch(config);
  
  // Generate report
  const reportPath = path.join(config.outputBaseDir, 'batch_report.md');
  generateBatchReport(config, progress, reportPath);
  
  // Print summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('🎉 BATCH PROCESSING COMPLETE');
  console.log(`${'='.repeat(60)}`);
  console.log(`\n✅ Successfully completed: ${progress.completed}/${progress.totalJobs}`);
  console.log(`❌ Failed: ${progress.failed}/${progress.totalJobs}`);
  console.log(`📊 Success rate: ${((progress.completed / progress.totalJobs) * 100).toFixed(1)}%`);
  
  if (progress.failed > 0) {
    console.log(`\n⚠️  Some jobs failed. Check the report for details.`);
    console.log(`   Report: ${reportPath}`);
  }
  
  console.log(`\n📁 Output directories:`);
  config.jobs
    .filter(j => j.status === 'completed' && j.outputDir)
    .forEach(j => console.log(`   ${j.outputDir}`));
  
  console.log(`\n🚀 Next: Run content assembly on each completed page`);
  console.log(`   npm run landing:assemble <output-dir>`);
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx batch-processor.ts <config-directory> [options]');
    console.log('');
    console.log('Options:');
    console.log('  --parallel=N    Max parallel jobs (default: 2)');
    console.log('  --no-retry      Do not retry failed jobs');
    console.log('');
    console.log('Examples:');
    console.log('  tsx scripts/batch-processor.ts page-configs');
    console.log('  tsx scripts/batch-processor.ts page-configs --parallel=4');
    process.exit(1);
  }
  
  const configDir = args[0];
  const options: Partial<BatchConfig> = {};
  
  args.slice(1).forEach(arg => {
    if (arg.startsWith('--parallel=')) {
      options.parallel = parseInt(arg.split('=')[1]);
    } else if (arg === '--no-retry') {
      options.retryFailures = false;
    }
  });
  
  await runBatchProcessor(configDir, options);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { runBatchProcessor, createBatchConfig, processBatch };
