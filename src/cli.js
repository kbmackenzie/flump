import { Command } from 'commander';
import { scraper } from './scraper.js';

export const run = () => {
  const program = new Command();

  program
    .name('flump')
    .description('Fandom wiki image scraper.')
    .version('1.0.0');

  program
    .argument('<url>', 'The URL of the Fandom wiki page you want to scrape.')
    .option('-o, --output <path>', 'The path where images should be dumped.')
    .action(async (url, options) => {
      const outputDir = options.output || './images/';
      await scraper(url, outputDir);
    });

  program.parse();
}
