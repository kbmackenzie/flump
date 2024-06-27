import puppeteer from 'puppeteer';
import { scrapeImages } from './src/scrape-images';
import { downloadImage } from './src/download-image';
import { existsSync, mkdirSync } from 'node:fs';

export default async function(url, destination)  {
  const browser = await puppeteer.launch();
  const images = await scrapeImages(browser, url);
  await browser.close();

  if (!existsSync(destination)) {
    mkdirSync(destination);
  }

  const promises = images.map(url => downloadImage(url, destination));
  return Promise.all(promises);
};
