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

const scrapeImage = async (page, path) => {
  await page.goto(path);
  try {
    const source = await scrapeLightbox(page);
    return {
      type: 'success',
      data: source,
    };
  }
  catch (error) {
    return {
      type: 'error',
      message: `Couldn't fetch source for image '${path}'!`,
      error: error,
    };
  }
};

export const scrapeImages = async (browser, url, logger) => {
  const page = await browser.newPage();
  await page.goto(url);

  logger.info('Fetching images...');
  const imagePaths = await findImages(page);

  for (const path of imagePaths) {
    logger.info(`Fetching image '${path}'...`);
    const result = await scrapeImage(page, path);

    if (result.type === 'success') {
      sources.push(result.data);
    }
    else if (result.type === 'error') {
      logger.error(result.message);
      logger.error(result.error.toString());
    }
  }
  await page.close();

  return sources;
};
