import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public/assets');
let before = 0, after = 0, count = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === 'optimized') continue;
    const source = path.join(directory, entry.name);
    if (entry.isDirectory()) { await walk(source); continue; }
    if (!/\.(png|jpe?g)$/i.test(entry.name)) continue;
    const info = await stat(source);
    before += info.size;
    for (const width of [640, 1600]) {
      const relative = path.relative(root, source).replace(/\.[^.]+$/, `-${width}.webp`);
      const output = path.join(root, 'optimized', relative);
      const existing = await stat(output).catch(() => null);
      if (!existing || existing.mtimeMs < info.mtimeMs) {
        await mkdir(path.dirname(output), { recursive: true });
        await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(output);
      }
      if (width === 1600) after += (await stat(output)).size;
    }
    count++;
  }
}
await walk(root);
console.log(`${count} images: original ${(before / 1048576).toFixed(1)} MB → 1600px WebP ${(after / 1048576).toFixed(1)} MB. Originals preserved.`);
