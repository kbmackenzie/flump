import puppeteer from 'puppeteer';
import { mkdir } from 'node:fs/promises';
import { getImageURLs } from './find-images.js';
import { downloadImage } from './download-image.js';
import { promiseBatch } from '../utils/promise-batch.js';

export async function scrapeImages(url, logger) {
  const browser = await puppeteer.launch();
  const images  = await getImageURLs(browser, url, logger);
  await browser.close();
  return images;
};

export async function downloadImages(url, destination, logger) {
  const images = await scrapeImages(url, logger);
  await mkdir(destination, { recursive: true });

  /* q: 'Why run these Promises in batches?'
   * a: https://github.com/node-fetch/node-fetch/issues/449#issuecomment-472353510 */
  return promiseBatch(
    async (url) => {
      logger?.info(`Downloading image from URL '${url}'...`);
      const result = await downloadImage(url, destination);

      if (result.type === 'success') {
        logger?.info(result.message);
      }
      else if (result.type === 'error') {
        logger?.error(result.message);
      }
    },
    images,
  );
};
