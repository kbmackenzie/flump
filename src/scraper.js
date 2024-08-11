import puppeteer from 'puppeteer';
import { scrapeImages } from './scraper/scrape-images.js';
import { downloadImage } from './scraper/download-image.js';
import { mkdir } from 'node:fs/promises';
import { promiseBatch } from './utils/promise-batch.js';

export const scraper = async (url, destination, logger) => {
  const browser = await puppeteer.launch();
  const images  = await scrapeImages(browser, url, logger);
  await browser.close();

  await mkdir(destination, { recursive: true });

  /* q: 'Why run these Promises in batches?'
   * a: https://github.com/node-fetch/node-fetch/issues/449#issuecomment-472353510 */
  return promiseBatch(
    async (url) => {
      logger.info(`Downloading image from URL '${url}'...`);

      const result = await downloadImage(url, destination);
      if (result.type === 'success') {
        logger.info(result.message);
      }
      else if (result.type === 'error') {
        logger.error(result.message);
      }
    },
    images,
  );
};
