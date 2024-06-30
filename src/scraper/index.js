import puppeteer from 'puppeteer';
import { scrapeImages } from './scrape-images.js';
import { downloadImage } from './download-image.js';
import { mkdir } from 'node:fs/promises';

export const scraper = async (url, destination) => {
  const browser = await puppeteer.launch();
  const images = await scrapeImages(browser, url);
  await browser.close();

  destination = destination || './images/';
  await mkdir(destination, { recursive: true });

  const promises = images.map(url => downloadImage(url, destination));
  return Promise.all(promises);
};
