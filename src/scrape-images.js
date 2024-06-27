const thumbSelector  = 'a.image.lightbox';
const sourceSelector = '#LightboxModal .see-full-size-link';

const findImages = (page) => page.evaluate(() => {
  return Array.from(
    document.querySelectorAll(thumbSelector)
  ).map(anchor => anchor.href);
});

const scrapeLightbox = async (page) => {
  await page.waitForSelector(sourceSelector, { timeout: 8000 });
  return page.evaluate(() => document.querySelector(sourceSelector)?.href);
};

export const scrapeImages = async (browser, url) => {
  const page = await browser.newPage();

  await page.goto(url);
  const imagePaths = await findImages(page);

  const sources = [];

  for (const path of imagePaths) {
    await page.goto(path);
    const source = await scrapeLightbox(page);
    sources.push(source);
  }
  await page.close();

  return sources;
};
