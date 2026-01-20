#!/usr/bin/env tsx

/**
 * Progress Tracker for Multi-Day Generation
 * 
 * Tracks progress across 12 content clusters over 5 days:
 * - Visual progress dashboard
 * - Cluster status tracking
 * - Word count monitoring
 * - Time estimates
 * - Daily goals
 * - Completion percentage
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// TYPES
// ============================================================================

interface ClusterProgress {
  id: string;
  name: string;
  targetWords: string;
  status: 'not_started' | 'in_progress' | 'completed';
  actualWords: number;
  completedAt?: string;
  timeSpent?: number; // minutes
}

interface ProgressState {
  projectName: string;
  startDate: string;
  targetCompletionDate: string;
  totalTargetWords: number;
  actualWords: number;
  clusters: ClusterProgress[];
  completedClusters: number;
  totalClusters: number;
  overallProgress: number;
  estimatedTimeRemaining: number; // hours
  dailyGoals: DailyGoal[];
}

interface DailyGoal {
  day: number;
  date: string;
  clusters: string[];
  targetWords: number;
  completed: boolean;
}

// ============================================================================
// PROGRESS INITIALIZATION
// ============================================================================

function initializeProgress(contentDir: string): ProgressState {
  const planPath = path.join(contentDir, 'generation_plan.json');
  if (!fs.existsSync(planPath)) {
    throw new Error(`Generation plan not found: ${planPath}`);
  }
  
  const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
  const startDate = new Date().toISOString().split('T')[0];
  
  // Create cluster progress tracking
  const clusters: ClusterProgress[] = plan.clusters.map((c: any) => ({
    id: c.id,
    name: c.name,
    targetWords: c.targetWords,
    status: 'not_started',
    actualWords: 0
  }));
  
  // Create daily goals (5-day plan)
  const dailyGoals: DailyGoal[] = [
    {
      day: 1,
      date: addDays(startDate, 0),
      clusters: ['cluster_01', 'cluster_05', 'cluster_09'],
      targetWords: 11000,
      completed: false
    },
    {
      day: 2,
      date: addDays(startDate, 1),
      clusters: ['cluster_02', 'cluster_07', 'cluster_10'],
      targetWords: 10000,
      completed: false
    },
    {
      day: 3,
      date: addDays(startDate, 2),
      clusters: ['cluster_04', 'cluster_03'],
      targetWords: 12000,
      completed: false
    },
    {
      day: 4,
      date: addDays(startDate, 3),
      clusters: ['cluster_06', 'cluster_08', 'cluster_11'],
      targetWords: 8000,
      completed: false
    },
    {
      day: 5,
      date: addDays(startDate, 4),
      clusters: ['cluster_12'],
      targetWords: 5000,
      completed: false
    }
  ];
  
  return {
    projectName: path.basename(contentDir),
    startDate,
    targetCompletionDate: addDays(startDate, 4),
    totalTargetWords: plan.totalTargetWords,
    actualWords: 0,
    clusters,
    completedClusters: 0,
    totalClusters: clusters.length,
    overallProgress: 0,
    estimatedTimeRemaining: 10, // initial estimate: 10 hours
    dailyGoals
  };
}

function addDays(date: string, days: number): string {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// ============================================================================
// PROGRESS UPDATE
// ============================================================================

function updateProgress(contentDir: string): ProgressState {
  const progressPath = path.join(contentDir, 'progress.json');
  
  let state: ProgressState;
  if (fs.existsSync(progressPath)) {
    state = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
  } else {
    state = initializeProgress(contentDir);
  }
  
  // Check each cluster for content
  state.clusters.forEach(cluster => {
    const contentPath = path.join(contentDir, `${cluster.id}_content.md`);
    
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, 'utf8');
      cluster.actualWords = content.split(/\s+/).length;
      
      if (cluster.status !== 'completed') {
        cluster.status = 'completed';
        cluster.completedAt = new Date().toISOString();
      }
    } else if (cluster.status === 'not_started') {
      // Check if there's a partial/in-progress file
      const inProgressPath = path.join(contentDir, `${cluster.id}_draft.md`);
      if (fs.existsSync(inProgressPath)) {
        cluster.status = 'in_progress';
        const draft = fs.readFileSync(inProgressPath, 'utf8');
        cluster.actualWords = draft.split(/\s+/).length;
      }
    }
  });
  
  // Update overall stats
  state.completedClusters = state.clusters.filter(c => c.status === 'completed').length;
  state.actualWords = state.clusters.reduce((sum, c) => sum + c.actualWords, 0);
  state.overallProgress = (state.completedClusters / state.totalClusters) * 100;
  
  // Update daily goals
  state.dailyGoals.forEach(goal => {
    const goalClusters = state.clusters.filter(c => goal.clusters.includes(c.id));
    goal.completed = goalClusters.every(c => c.status === 'completed');
  });
  
  // Estimate time remaining
  const avgWordsPerHour = 4000; // average generation rate
  const wordsRemaining = state.totalTargetWords - state.actualWords;
  state.estimatedTimeRemaining = Math.ceil(wordsRemaining / avgWordsPerHour);
  
  // Save updated state
  fs.writeFileSync(progressPath, JSON.stringify(state, null, 2));
  
  return state;
}

// ============================================================================
// VISUAL DASHBOARD
// ============================================================================

function printDashboard(state: ProgressState): void {
  console.clear();
  console.log('╔' + '═'.repeat(68) + '╗');
  console.log('║' + ' '.repeat(16) + 'LANDING PAGE PROGRESS TRACKER' + ' '.repeat(23) + '║');
  console.log('╚' + '═'.repeat(68) + '╝');
  
  // Project info
  console.log(`\n📊 Project: ${state.projectName}`);
  console.log(`📅 Started: ${state.startDate} → Target: ${state.targetCompletionDate}`);
  console.log(`📝 Progress: ${state.completedClusters}/${state.totalClusters} clusters (${state.overallProgress.toFixed(1)}%)`);
  console.log(`📖 Words: ${state.actualWords.toLocaleString()}/${state.totalTargetWords.toLocaleString()}`);
  console.log(`⏱️  Estimated time remaining: ${state.estimatedTimeRemaining} hours`);
  
  // Progress bar
  const progressBarWidth = 50;
  const filled = Math.floor((state.overallProgress / 100) * progressBarWidth);
  const empty = progressBarWidth - filled;
  console.log(`\n[${'█'.repeat(filled)}${' '.repeat(empty)}] ${state.overallProgress.toFixed(1)}%`);
  
  // Cluster status
  console.log(`\n━━━ CLUSTER STATUS ━━━`);
  state.clusters.forEach(cluster => {
    const statusIcon = cluster.status === 'completed' ? '✅' : 
                       cluster.status === 'in_progress' ? '🔄' : '⬜';
    const wordProgress = cluster.actualWords > 0 ? ` (${cluster.actualWords} words)` : '';
    console.log(`${statusIcon} ${cluster.id}: ${cluster.name}${wordProgress}`);
  });
  
  // Daily goals
  console.log(`\n━━━ DAILY GOALS ━━━`);
  state.dailyGoals.forEach(goal => {
    const icon = goal.completed ? '✅' : '⏳';
    const clustersStatus = goal.clusters.map(id => {
      const cluster = state.clusters.find(c => c.id === id);
      return cluster?.status === 'completed' ? '✓' : 
             cluster?.status === 'in_progress' ? '○' : '☐';
    }).join(' ');
    console.log(`${icon} Day ${goal.day} (${goal.date}): ${clustersStatus} - ${goal.clusters.length} clusters, ${goal.targetWords} words`);
  });
  
  // Today's goal
  const today = new Date().toISOString().split('T')[0];
  const todayGoal = state.dailyGoals.find(g => g.date === today);
  if (todayGoal && !todayGoal.completed) {
    console.log(`\n🎯 TODAY'S GOAL (Day ${todayGoal.day}):`);
    todayGoal.clusters.forEach(clusterId => {
      const cluster = state.clusters.find(c => c.id === clusterId);
      if (cluster) {
        console.log(`   • ${cluster.name} (${cluster.targetWords} words)`);
      }
    });
  }
  
  // Next steps
  const nextCluster = state.clusters.find(c => c.status === 'not_started');
  if (nextCluster) {
    console.log(`\n💡 NEXT: Work on ${nextCluster.name}`);
  } else {
    console.log(`\n🎉 All clusters completed! Run assembly script.`);
  }
  
  console.log(`\n${'─'.repeat(70)}`);
  console.log(`Last updated: ${new Date().toLocaleString()}`);
  console.log(`Run 'npm run landing:progress <dir>' to refresh\n`);
}

// ============================================================================
// MARK CLUSTER AS STARTED
// ============================================================================

function startCluster(contentDir: string, clusterId: string): void {
  const state = updateProgress(contentDir);
  const cluster = state.clusters.find(c => c.id === clusterId);
  
  if (!cluster) {
    console.error(`Cluster not found: ${clusterId}`);
    return;
  }
  
  if (cluster.status === 'not_started') {
    cluster.status = 'in_progress';
    const progressPath = path.join(contentDir, 'progress.json');
    fs.writeFileSync(progressPath, JSON.stringify(state, null, 2));
    console.log(`✓ Started ${cluster.name}`);
  }
}

// ============================================================================
// GENERATE PROGRESS REPORT
// ============================================================================

function generateReport(state: ProgressState, outputPath: string): void {
  const report = `
# Landing Page Generation Progress Report

**Project:** ${state.projectName}  
**Generated:** ${new Date().toLocaleString()}

## Overview

- **Overall Progress:** ${state.overallProgress.toFixed(1)}%
- **Completed Clusters:** ${state.completedClusters}/${state.totalClusters}
- **Total Words Generated:** ${state.actualWords.toLocaleString()}/${state.totalTargetWords.toLocaleString()}
- **Estimated Time Remaining:** ${state.estimatedTimeRemaining} hours

## Cluster Status

| Cluster | Name | Target Words | Actual Words | Status |
|---------|------|--------------|--------------|--------|
${state.clusters.map(c => 
  `| ${c.id} | ${c.name} | ${c.targetWords} | ${c.actualWords} | ${c.status} |`
).join('\n')}

## Daily Goals

${state.dailyGoals.map(g => 
  `### Day ${g.day} - ${g.date} ${g.completed ? '✅' : '⏳'}\n` +
  `- Clusters: ${g.clusters.join(', ')}\n` +
  `- Target: ${g.targetWords} words\n` +
  `- Status: ${g.completed ? 'Completed' : 'In Progress'}`
).join('\n\n')}

## Progress Timeline

${state.clusters
  .filter(c => c.completedAt)
  .map(c => `- **${c.name}**: Completed on ${new Date(c.completedAt!).toLocaleString()}`)
  .join('\n')}

---

*This report is auto-generated by the progress tracker.*
`;

  fs.writeFileSync(outputPath, report);
  console.log(`📄 Progress report saved: ${outputPath}`);
}

// ============================================================================
// MAIN FUNCTION
// ============================================================================

async function trackProgress(contentDir: string, command?: string, args?: string[]): Promise<void> {
  if (command === 'start' && args && args[0]) {
    startCluster(contentDir, args[0]);
    return;
  }
  
  if (command === 'report') {
    const state = updateProgress(contentDir);
    const reportPath = path.join(contentDir, 'progress_report.md');
    generateReport(state, reportPath);
    return;
  }
  
  // Default: show dashboard
  const state = updateProgress(contentDir);
  printDashboard(state);
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx progress-tracker.ts <content-directory> [command] [args]');
    console.log('');
    console.log('Commands:');
    console.log('  (none)                Show progress dashboard');
    console.log('  start <cluster_id>    Mark cluster as started');
    console.log('  report                Generate progress report');
    console.log('');
    console.log('Examples:');
    console.log('  tsx scripts/progress-tracker.ts generated-content/massage-to-hotel');
    console.log('  tsx scripts/progress-tracker.ts generated-content/massage-to-hotel start cluster_01');
    console.log('  tsx scripts/progress-tracker.ts generated-content/massage-to-hotel report');
    process.exit(1);
  }
  
  const contentDir = args[0];
  const command = args[1];
  const cmdArgs = args.slice(2);
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Error: Content directory not found: ${contentDir}`);
    process.exit(1);
  }
  
  await trackProgress(contentDir, command, cmdArgs);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { trackProgress, updateProgress, generateReport };
