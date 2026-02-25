import sharp from "sharp";
import { existsSync } from "fs";
import { join } from "path";

const publicDir = "./public";

const images = [
  { input: "cover.jpeg", output: "cover.webp", quality: 82 },
  { input: "foto.jpg", output: "foto.webp", quality: 85 },
  { input: "profli.png", output: "profli.webp", quality: 85 },
  { input: "logo.png", output: "logo.webp", quality: 90 },
];

for (const img of images) {
  const inputPath = join(publicDir, img.input);
  const outputPath = join(publicDir, img.output);

  if (!existsSync(inputPath)) {
    console.log(`⚠️  Not found: ${img.input}`);
    continue;
  }

  const info = await sharp(inputPath)
    .webp({ quality: img.quality })
    .toFile(outputPath);

  console.log(
    `✅  ${img.input} → ${img.output}  (${(info.size / 1024).toFixed(0)} KB)`,
  );
}

console.log("\n🎉 Done! All images converted to WebP.");
