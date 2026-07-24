#!/usr/bin/env node
/*
 * Otimiza as fotos reais para a web.
 *
 * Uso:
 *   1. Coloque as fotos originais (JPG/PNG) em fotos-originais/
 *   2. npm run imagens
 *   3. As versoes otimizadas (WebP + AVIF, 800px e 1200px) saem em
 *      public/images/, prontas para os cards e a galeria.
 */
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT_DIR = "fotos-originais";
const OUTPUT_DIR = "public/images";
const WIDTHS = [800, 1200];
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function main() {
  let files;
  try {
    files = await readdir(INPUT_DIR);
  } catch {
    console.error(`Pasta "${INPUT_DIR}/" nao encontrada. Crie e coloque as fotos nela.`);
    process.exit(1);
  }

  const images = files.filter((file) => EXTENSIONS.has(path.extname(file).toLowerCase()));
  if (images.length === 0) {
    console.error(`Nenhuma imagem encontrada em "${INPUT_DIR}/".`);
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const file of images) {
    const base = path
      .parse(file)
      .name.toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const source = sharp(path.join(INPUT_DIR, file)).rotate();

    for (const width of WIDTHS) {
      const resized = source.clone().resize({ width, withoutEnlargement: true });
      await resized
        .webp({ quality: 78 })
        .toFile(path.join(OUTPUT_DIR, `${base}-${width}.webp`));
      await resized
        .avif({ quality: 55 })
        .toFile(path.join(OUTPUT_DIR, `${base}-${width}.avif`));
    }
    console.log(`ok: ${file} -> ${base}-{${WIDTHS.join(",")}}.{webp,avif}`);
  }

  console.log(`\n${images.length} imagem(ns) otimizada(s) em ${OUTPUT_DIR}/`);
}

main().catch((error) => {
  console.error("Falha ao otimizar imagens:", error);
  process.exit(1);
});
