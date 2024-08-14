import { initLogger } from './logger.js';
import * as scraper from './scraper/index.js';

/**
 * Fandom wiki gallery scraper.
 * @module flump 
 * */

/** 
 * Additional options passed to {@link module:flump.downloadImages}.
 * @typedef {Object} FlumpOptions
 * @prop {boolean} quiet - Silence log messages.
 * @prop {string} output - The output folder for images.
 */

/**
 * Scrape a Fandom wiki page for gallery images and get their URLs.
 * @param {string} url - URL to a Fandom wiki page.
 * @returns {Promise<string[]>} A list of image URLs as strings.
 */
export async function scrapeImages(url) {
  return scraper.scrapeImages(url, null);
};

/**
 * Scrape a Fandom wiki page for gallery images and download all of them.
 * @param {string} url - URL to a Fandom wiki page.
 * @param {FlumpOptions} options - Additional options. See {@link module:flump~FlumpOptions}.
 * @returns {Promise<void>}
 */
export async function downloadImages(url, options = {}) {
  const logger = initLogger(!!options.quiet, destination);
  const destination = options.output || './images/';
  await scraper.downloadImages(url, destination, logger);
};
