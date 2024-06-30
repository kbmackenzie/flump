import puppeteer from 'puppeteer';
import { scrapeImages } from './scraper/scrape-images.js';
import { downloadImage } from './scraper/download-image.js';
import { mkdir } from 'node:fs/promises';

export const scraper = async (url, destination) => {
  const browser = await puppeteer.launch();
  const images = await scrapeImages(browser, url);
  await browser.close();

  await mkdir(destination, { recursive: true });

  const promises = images.map(url => downloadImage(url, destination));
  return Promise.all(promises);
};
