import { initLogger } from './logger.js';
import * as scraper from './scraper/index.js';

export default async (url, options = {}) => {
  const destination = options.output || './images/';
  const logger      = initLogger(!!options.quiet, destination);
  await scraper.scrapeImages(url, destination, logger);
};

export const downloadImages = async (url, options = {}) => {
  const destination = options.output || './images/';
  const logger      = initLogger(!!options.quiet, destination);
  await scraper.downloadImages(url, destination, logger);
};
