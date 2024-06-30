export async function promiseBatch(promises, chunkSize = 4) {
  const chunks = [];
  for (let i = 0; i < promises.length; i += chunkSize) {
    chunks.push(promises.slice(i, i + chunkSize));
  }
  for (const chunk of chunks) {
    await Promise.all(chunk);
  }
}
