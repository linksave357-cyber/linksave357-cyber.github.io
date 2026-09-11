#!/usr/bin/env node

/**
 * Adsterra Revenue & Traffic Analytics CLI
 * Usage:
 *   node scripts/adsterra-stats.js
 *   node scripts/adsterra-stats.js --today
 *   node scripts/adsterra-stats.js --days 14
 *   node scripts/adsterra-stats.js --placement
 */

import fs from 'fs';
import path from 'path';

// Helper to load .env / .env.local files
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    const filePath = path.resolve(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      content.split(/\r?\n/).forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...vals] = trimmed.split('=');
          if (key && !process.env[key.trim()]) {
            process.env[key.trim()] = vals.join('=').trim().replace(/^["']|["']$/g, '');
          }
        }
      });
    }
  }
}

loadEnv();

const API_KEY = process.env.ADSTERRA_API_KEY;
const BASE_URL = 'https://api3.adsterratools.com/publisher/stats.json';

// Terminal ANSI Color Helpers
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  dim: '\x1b[2m'
};

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function parseArgs() {
  const args = process.argv.slice(2);
  let days = 7;
  let groupBy = 'date';
  let isToday = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--today' || arg === '-t') {
      isToday = true;
    } else if (arg === '--placement' || arg === '-p') {
      groupBy = 'placement';
    } else if (arg === '--days' || arg === '-d') {
      const parsedDays = parseInt(args[i + 1], 10);
      if (!isNaN(parsedDays) && parsedDays > 0) {
        days = parsedDays;
        i++;
      }
    }
  }

  const finishDateObj = new Date();
  const startDateObj = new Date();

  if (isToday) {
    // Only today
  } else {
    startDateObj.setDate(finishDateObj.getDate() - (days - 1));
  }

  return {
    startDate: isToday ? formatDate(finishDateObj) : formatDate(startDateObj),
    finishDate: formatDate(finishDateObj),
    groupBy,
    isToday,
    days
  };
}

async function fetchAdsterraStats() {
  if (!API_KEY) {
    console.error(`\n${colors.red}${colors.bold}Error: ADSTERRA_API_KEY is not set.${colors.reset}`);
    console.log(`Please add ${colors.yellow}ADSTERRA_API_KEY=your_token${colors.reset} to your ${colors.cyan}.env.local${colors.reset} file.\n`);
    process.exit(1);
  }

  const { startDate, finishDate, groupBy, isToday, days } = parseArgs();

  console.log(`\n${colors.bold}${colors.cyan}=== Adsterra Publisher Analytics CLI ===${colors.reset}`);
  console.log(`${colors.dim}Period:${colors.reset} ${colors.bold}${startDate}${colors.reset} to ${colors.bold}${finishDate}${colors.reset} ${isToday ? '(Today)' : `(${days} days)`} | ${colors.dim}Group By:${colors.reset} ${colors.magenta}${groupBy}${colors.reset}\n`);

  const url = `${BASE_URL}?start_date=${startDate}&finish_date=${finishDate}${groupBy !== 'date' ? `&group_by=${groupBy}` : ''}`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-API-Key': API_KEY,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const items = data.items || [];

    if (items.length === 0) {
      console.log(`${colors.yellow}No traffic stats found for the specified period.${colors.reset}\n`);
      return;
    }

    let totalImpressions = 0;
    let totalClicks = 0;
    let totalRevenue = 0;

    const formattedRows = items.map((item) => {
      const impression = item.impression || 0;
      const clicks = item.clicks || 0;
      const cpm = (item.cpm || 0).toFixed(4);
      const revenue = (item.revenue || 0).toFixed(4);
      const ctr = (item.ctr || 0).toFixed(2) + '%';

      totalImpressions += impression;
      totalClicks += clicks;
      totalRevenue += (item.revenue || 0);

      if (groupBy === 'placement') {
        return {
          'Placement ID': item.placement,
          'Impressions': impression,
          'Clicks': clicks,
          'CTR': ctr,
          'CPM ($)': `$${cpm}`,
          'Revenue ($)': `$${revenue}`
        };
      } else {
        return {
          'Date': item.date,
          'Impressions': impression,
          'Clicks': clicks,
          'CTR': ctr,
          'CPM ($)': `$${cpm}`,
          'Revenue ($)': `$${revenue}`
        };
      }
    });

    console.table(formattedRows);

    const avgCpm = totalImpressions > 0 ? (totalRevenue / totalImpressions * 1000).toFixed(4) : '0.0000';

    console.log(`\n${colors.bold}${colors.green}--- TOTAL SUMMARY ---${colors.reset}`);
    console.log(`${colors.bold}Total Impressions:${colors.reset} ${totalImpressions.toLocaleString()}`);
    console.log(`${colors.bold}Total Clicks:${colors.reset}      ${totalClicks.toLocaleString()}`);
    console.log(`${colors.bold}Average CPM:${colors.reset}       ${colors.yellow}$${avgCpm}${colors.reset}`);
    console.log(`${colors.bold}Total Revenue:${colors.reset}     ${colors.green}$${totalRevenue.toFixed(4)}${colors.reset}\n`);

  } catch (error) {
    console.error(`\n${colors.red}Error fetching Adsterra statistics:${colors.reset}`, error.message);
  }
}

fetchAdsterraStats();
