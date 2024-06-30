import puppeteer from 'puppeteer';
import { scrapeImages } from './scraper/scrape-images.js';
import { downloadImage } from './scraper/download-image.js';
import { mkdir } from 'node:fs/promises';
import { promiseBatch } from './utils/promise-batch.js';

export const scraper = async (url, destination) => {
  const browser = await puppeteer.launch();
  const images = await scrapeImages(browser, url);
  await browser.close();

  await mkdir(destination, { recursive: true });

  /* q: 'Why run these Promises in batches?'
   * a: So it doesn't overwhelm node-fetch's request queue! */
  return promiseBatch(
    url => downloadImage(url, destination),
    images,
  );
};
