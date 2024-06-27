import fetch from "node-fetch";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { parse as parseContentDisposition } from "content-disposition";
import { join as joinPath } from "node:path";

export const downloadImage = async (url, destination) => {
  const response = await fetch(url);
  const imageStream = response.body;

  const contentDisposition = response.headers.get('Content-Disposition');
  if (!contentDisposition) {
    throw new Error(`Response is missing 'Content-Disposition' header! | url: '${url}'`);
  }
  const filename   = parseContentDisposition(contentDisposition).parameters.filename;
  const targetPath = joinPath(destination, filename);

  await pipeline(
    imageStream,
    createWriteStream(targetPath),
  );
};
