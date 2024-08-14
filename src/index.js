import { initLogger } from './logger.js';
import * as scraper from './scraper/index.js';

export default async (url, options = {}) => {
  const logger = initLogger(!!options.quiet, destination);
  await scraper.scrapeImages(url, logger);
};

export const downloadImages = async (url, options = {}) => {
  const logger = initLogger(!!options.quiet, destination);
  const destination = options.output || './images/';
  await scraper.downloadImages(url, destination, logger);
};
