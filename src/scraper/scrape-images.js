const thumbSelector = 'a.image.lightbox';
const sourceSelector = '#LightboxModal .see-full-size-link';

const findImages = (page) => page.evaluate(
  (selector) => {
    return Array.from(document.querySelectorAll(selector))
      .map(anchor => anchor.href);
  },
  thumbSelector
);

const scrapeLightbox = async (page) => {
  await page.waitForSelector(sourceSelector, { timeout: 8000 });
  return page.evaluate(
    (selector) => document.querySelector(selector)?.href,
    sourceSelector
  );
};

export const scrapeImages = async (browser, url) => {
  const page = await browser.newPage();
  await page.goto(url);

  console.log('Fetching images...');
  const imagePaths = await findImages(page);

  const sources = [];

  for (const path of imagePaths) {
    console.log(`Fetching source for image '${path}'...`);
    await page.goto(path);
    try {
      const source = await scrapeLightbox(page);
      sources.push(source);
    }
    catch (error) {
      console.error(`Couldn't fetch source for image '${path}'!`);
      console.error('Error: ' + error.toString());
      continue;
    }
  }
  await page.close();

  return sources;
};
