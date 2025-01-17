import * as flump from '../src/index.js';
import assert from 'node:assert';
import test from 'node:test';

const examplePage = 'https://jojo.fandom.com/wiki/Ball_Breaker';

test('fetch image urls', async () => {
  const urls = await flump.scrapeImages(examplePage);
  assert(urls);
  assert.notEqual(urls.length, 0);
});
