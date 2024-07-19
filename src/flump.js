#!/usr/bin/env node
import { Command } from 'commander';
import { scraper } from './scraper.js';
import { initLogger } from './logger.js';

const program = new Command();

program
  .name('flump')
  .description('Fandom wiki gallery scraper.')
  .version('1.0.0');

program
  .argument('<url>', 'URL of a Fandom wiki page to scrape')
  .option('-o, --output <path>', 'directory where images should be dumped')
  .option('-q, --quiet', 'silence log messages')
  .action(async (url, options) => {
    const destination = options.output || './images/';
    const logger      = initLogger(!!options.quiet);
    await scraper(url, destination, logger);
  });

program.parse();
