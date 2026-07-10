import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'images');

const svgBuffer = readFileSync(join(outDir, 'icon-heart.svg'));
const svgStr = svgBuffer.toString();

async function generate(size, name) {
  const png = await sharp(svgBuffer).resize(size, size).png().toBuffer();
  writeFileSync(join(outDir, `${name}.png`), png);

  const maskableSvg = svgStr.replace('rx="96"', '');
  const maskablePng = await sharp(Buffer.from(maskableSvg)).resize(size, size).png().toBuffer();
  writeFileSync(join(outDir, `${name}-maskable.png`), maskablePng);

  console.log(`Created ${name}.png (${size}x${size})`);
}

await generate(192, 'icon-192');
await generate(512, 'icon-512');
console.log('Done!');
