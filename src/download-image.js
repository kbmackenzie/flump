import fetch from "node-fetch";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

export const downloadImage = async (url, outputPath) => {
  const response = await fetch(url);
  const imageStream = response.body;

  await pipeline(
    imageStream,
    createWriteStream(outputPath),
  );
};
