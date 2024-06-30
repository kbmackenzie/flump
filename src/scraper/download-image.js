import fetch from 'node-fetch';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { parse as parseContentDisposition } from 'content-disposition';
import { join as joinPath } from 'node:path';

const imageTypes = new Set([
  'image/apng',
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg',
  'image/webp',
]);

export const downloadImage = async (url, destination) => {
  const response = await fetch(url);
  const imageStream = response.body;

  const contentType = response.headers.get('Content-Type');
  if (!contentType || !imageTypes.has(contentType.toLowerCase())) {
    throw new Error(`Response's MIME type isn't a valid image type! | url: ${url}`);
  }

  const contentDisposition = response.headers.get('Content-Disposition');
  if (!contentDisposition) {
    throw new Error(`Response is missing 'Content-Disposition' header! | url: ${url}`);
  }
  const filename   = parseContentDisposition(contentDisposition).parameters.filename;
  const targetPath = joinPath(destination, filename);

  console.log(`Downloading image '${filename}'...`);

  await pipeline(
    imageStream,
    createWriteStream(targetPath),
  );

  console.log(`Downloaded image '${filename}' successfully!`);
};
