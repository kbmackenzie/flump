#!/usr/bin/env node
import { Command } from 'commander';
import { scraper } from './scraper.js';

const program = new Command();

program
  .name('flump')
  .description('Fandom wiki gallery scraper.')
  .version('1.0.0');

program
  .argument('<url>', 'URL of a Fandom wiki page to scrape')
  .option('-o, --output <path>', 'directory where images should be dumped')
  .action(async (url, options) => {
    const outputDir = options.output || './images/';
    await scraper(url, outputDir);
  });

program.parse();
