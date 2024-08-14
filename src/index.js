import { initLogger } from './logger.js';
import * as scraper from './scraper/index.js';

export async function scrapeImages(url, options = {}) {
  const logger = initLogger(!!options.quiet, destination);
  await scraper.scrapeImages(url, logger);
};

export async function downloadImages(url, options = {}) {
  const logger = initLogger(!!options.quiet, destination);
  const destination = options.output || './images/';
  await scraper.downloadImages(url, destination, logger);
};
