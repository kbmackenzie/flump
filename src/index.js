import { initLogger } from './logger.js';
import * as scraper from './scraper/index.js';

/**
 * Fandom wiki gallery scraper.
 * @module flump 
 * */

/** 
 * @typedef {Object} FlumpOptions
 * @prop {boolean} quiet - silence log messages
 * @prop {string} output - output folder for images
 */

/**
 * Scrape a Fandom wiki page for gallery images and get their URLs.
 * @param {string} url - URL to a Fandom character page.
 * @returns {Promise<string[]>} - a list of image URLs as strings
 */
export async function scrapeImages(url) {
  await scraper.scrapeImages(url, null);
};

/**
 * Scrape a Fandom wiki page for gallery images and download all of them.
 * @param {string} url - URL to a Fandom character page.
 * @param {FlumpOptions} options - extra options
 * @returns {Promise<void>}
 */
export async function downloadImages(url, options = {}) {
  const logger = initLogger(!!options.quiet, destination);
  const destination = options.output || './images/';
  await scraper.downloadImages(url, destination, logger);
};
