export async function promiseBatch(task, items, chunkSize = 4) {
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  for (const chunk of chunks) {
    await Promise.all(chunk.map(x => task(x)));
  }
}
