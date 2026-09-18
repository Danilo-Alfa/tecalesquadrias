#!/usr/bin/env node
/*
 * Confere se cada degrau declarado em src/content/photos.ts existe de fato
 * em public/images, nos dois formatos.
 *
 * O site exporta estatico e o <picture> monta o caminho por string
 * (`${base}-${width}.${ext}`), entao um degrau errado no catalogo nao
 * quebra o build nem o TypeScript: quebra na cara do visitante, com o alt
 * no lugar da foto. Este check e a rede que falta.
 *
 * Uso: npm run checar-imagens
 */
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const CATALOGO = "src/content/photos.ts";
const PUBLIC_DIR = "public";
const EXTENSIONS = ["webp", "avif"];

const existe = async (arquivo) =>
  access(arquivo).then(
    () => true,
    () => false,
  );

async function main() {
  const fonte = await readFile(CATALOGO, "utf8");

  // Cada entrada do catalogo: a chave, seu base e seus degraus de largura.
  const entradas = [
    ...fonte.matchAll(
      /"([\w-]+)": \{\s*\n\s*base: "([^"]+)",\s*\n\s*widths: \[([^\]]*)\]/g,
    ),
  ].map(([, chave, base, larguras]) => ({
    chave,
    base,
    larguras: larguras
      .split(",")
      .map((largura) => largura.trim())
      .filter(Boolean),
  }));

  if (entradas.length === 0) {
    console.error(`Nenhuma foto encontrada em ${CATALOGO}. O formato mudou?`);
    process.exit(1);
  }

  const faltando = [];
  for (const { chave, base, larguras } of entradas) {
    for (const largura of larguras) {
      for (const extension of EXTENSIONS) {
        const arquivo = path.join(PUBLIC_DIR, `${base}-${largura}.${extension}`);
        if (!(await existe(arquivo))) faltando.push({ chave, arquivo });
      }
    }
  }

  if (faltando.length > 0) {
    console.error("Degraus declarados que nao existem no disco:\n");
    for (const { chave, arquivo } of faltando) {
      console.error(`  ${chave} -> ${arquivo}`);
    }
    console.error(
      `\nRode \`npm run imagens\` e ajuste o widths de ${CATALOGO}.`,
    );
    process.exit(1);
  }

  const degraus = entradas.reduce((total, { larguras }) => total + larguras.length, 0);
  console.log(`ok: ${entradas.length} fotos, ${degraus} degraus, todos no disco.`);
}

main().catch((error) => {
  console.error("Falha ao checar as imagens:", error);
  process.exit(1);
});
