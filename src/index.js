import { initLogger } from './logger.js';
import * as scraper from './scraper/index.js';

/** 
 * @typedef {Object} FlumpOptions
 * @prop {boolean} quiet - silence log messages
 * @prop {string} output - output folder for images
 */

/**
 * Scrape a Fandom wiki page for the full-size URLs of gallery images.
 * @param {string} url - URL to a Fandom character page.
 * @returns {Promise<string[]>}
 */
export async function scrapeImages(url) {
  await scraper.scrapeImages(url, null);
};

/**
 * Scrape a Fandom wiki page and download all images from galleries.
 * @param {string} url - URL to a Fandom character page.
 * @param {FlumpOptions} options - extra options
 * @returns {Promise<void>}
 */
export async function downloadImages(url, options = {}) {
  const logger = initLogger(!!options.quiet, destination);
  const destination = options.output || './images/';
  await scraper.downloadImages(url, destination, logger);
};
