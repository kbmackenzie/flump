import { scraper } from './scraper.js';
import { initLogger } from './logger.js';

export default async (url, options = {}) => {
  const destination = options.output || './images/';
  const logger      = initLogger(!!options.quiet);
  await scraper(url, destination, logger);
};
