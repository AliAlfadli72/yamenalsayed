import sharp from "sharp";
import fs from "fs";
import { join } from "path";

const pub = "./public";

const tasks = [
  { file: "cover.webp", width: 1920, quality: 80 },
  { file: "logo.webp", width: 300, quality: 85 },
  { file: "foto.webp", width: 800, quality: 82 },
  { file: "profli.webp", width: 900, quality: 82 },
];

for (const t of tasks) {
  const inputPath = join(pub, t.file);

  // 1. Read file into memory buffer first
  const inputBuffer = fs.readFileSync(inputPath);
  const meta = await sharp(inputBuffer).metadata();

  // 2. Process from buffer → output buffer
  const { data, info } = await sharp(inputBuffer)
    .resize({ width: t.width, fit: "inside", withoutEnlargement: true })
    .webp({ quality: t.quality })
    .toBuffer({ resolveWithObject: true });

  // 3. Write output buffer back to the original path
  fs.writeFileSync(inputPath, data);

  const origKB = (meta.size / 1024).toFixed(0);
  const newKB = (info.size / 1024).toFixed(0);
  console.log(
    `✅  ${t.file}  ${meta.width}×${meta.height} → ${info.width}×${info.height}   ${origKB} KB → ${newKB} KB`,
  );
}

console.log("\n🎉 Done!");
