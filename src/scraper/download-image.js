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

export async function downloadImage(url, destination) {
  const response = await fetch(url);
  if (!response.ok) {
    return {
      type: 'error',
      message: `Couldn't fetch image "${url}"! Response status: ${response.status}`
    };
  }
  const imageStream = response.body;

  const contentType = response.headers.get('Content-Type');
  if (!contentType || !imageTypes.has(contentType.toLowerCase())) {
    return {
      type: 'error',
      message: `Response's MIME type isn't a valid image type! | url: ${url}`,
    };
  }

  const contentDisposition = response.headers.get('Content-Disposition');
  if (!contentDisposition) {
    return {
      type: 'error',
      message: `Response is missing 'Content-Disposition' header! | url: ${url}`,
    };
  }

  const filename   = parseContentDisposition(contentDisposition).parameters.filename;
  const targetPath = joinPath(destination, filename);

  await pipeline(
    imageStream,
    createWriteStream(targetPath),
  );

  return {
    type: 'success',
    message: `Downloaded image '${filename}' successfully!`,
  };
};
