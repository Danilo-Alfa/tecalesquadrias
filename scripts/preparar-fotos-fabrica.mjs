#!/usr/bin/env node
/*
 * Prepara as fotos de produto tiradas na fabrica para virarem foto de catalogo.
 *
 * As fotos chegam em 4:3, tiradas contra a lona verde de chroma key, com
 * etiqueta de producao no vidro. Duas coisas precisam acontecer antes de
 * entrar no site:
 *
 * 1. NEUTRALIZAR O VERDE. A lona verde briga com a paleta navy/prata. Em vez
 *    de recortar o fundo (o vidro e transparente e vazaria), o matiz verde e
 *    deslocado para o cinza-azulado da paleta, preservando forma, sombra e a
 *    leitura do vidro. O clareamento do fundo e travado abaixo de L=0.38
 *    porque o aluminio PRETO reflete o verde da lona e cai na mesma faixa de
 *    matiz — clarea-lo serrilhava o perfil.
 *
 * 2. COMPOR EM 1:1. Os cards de produto sao quadrados e a foto e 4:3, entao
 *    object-cover cortaria o marco da janela. A foto entra inteira e o quadro
 *    cresce ao redor dela, replicando a linha de borda (extendWith "copy"),
 *    que na lona quase uniforme nao deixa emenda visivel.
 *
 * Uso:
 *   node scripts/preparar-fotos-fabrica.mjs <arquivo-de-entrada> <nome-da-chave> [--proporcao 1:1]
 *
 * Exemplo:
 *   node scripts/preparar-fotos-fabrica.mjs ~/Downloads/41.jpeg janela-de-correr
 *
 * Grava em fotos-originais/<nome-da-chave>.jpg. Depois rode `npm run imagens`
 * e atualize a entrada em src/content/photos.ts.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DESTINO = "fotos-originais";
// Matiz do azul metalico da paleta: evita que o cinza fique morto.
const MATIZ_DESTINO = 218;
// Faixa de matiz da lona, incluindo o esverdeado que atravessa o vidro.
const VERDE_MIN = 80;
const VERDE_MAX = 195;

function rgbParaHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h * 360, s, l];
}

function hslParaRgb(h, s, l) {
  h /= 360;
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const canal = (t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [canal(h + 1 / 3), canal(h), canal(h - 1 / 3)].map((v) => Math.round(v * 255));
}

async function neutralizarVerde(entrada) {
  const { data, info } = await sharp(entrada).rotate().raw().toBuffer({ resolveWithObject: true });
  const canais = info.channels;
  const saida = Buffer.from(data);

  for (let i = 0; i < data.length; i += canais) {
    const [h, s, l] = rgbParaHsl(data[i], data[i + 1], data[i + 2]);
    if (h < VERDE_MIN || h > VERDE_MAX || s < 0.06) continue;
    // Quanto mais saturado, mais e lona; quanto menos, mais e reflexo no vidro.
    const peso = Math.min(1, s / 0.45);
    // Rampa que protege o perfil escuro do clareamento.
    const rampaLuz = Math.max(0, Math.min(1, (l - 0.38) / 0.24));
    const [r, g, b] = hslParaRgb(
      h + (MATIZ_DESTINO - h) * peso,
      s * (1 - 0.94 * peso),
      Math.min(0.94, l + (0.8 - l) * peso * rampaLuz * 0.55),
    );
    saida[i] = r;
    saida[i + 1] = g;
    saida[i + 2] = b;
  }

  return sharp(saida, { raw: { width: info.width, height: info.height, channels: canais } })
    .jpeg({ quality: 94 })
    .toBuffer();
}

async function comporNaProporcao(buffer, proporcao) {
  if (!proporcao) return buffer;
  const [pw, ph] = proporcao.split(":").map(Number);
  if (!pw || !ph) throw new Error(`--proporcao invalida: "${proporcao}". Use W:H.`);

  const { width, height } = await sharp(buffer).metadata();
  const alvo = pw / ph;
  if (Math.abs(width / height - alvo) < 0.01) return buffer;

  // A foto entra inteira e o quadro cresce ao redor dela: assim o marco da
  // janela nunca e cortado. A extensao replica a linha de borda
  // (extendWith "copy") em vez de pintar cor solida ou desfoque, porque a
  // lona e quase uniforme e a copia nao deixa emenda visivel.
  let extend;
  if (width / height > alvo) {
    const total = Math.round(width / alvo) - height;
    const topo = Math.round(total / 2);
    extend = { top: topo, bottom: total - topo, left: 0, right: 0 };
  } else {
    const total = Math.round(height * alvo) - width;
    const esquerda = Math.round(total / 2);
    extend = { top: 0, bottom: 0, left: esquerda, right: total - esquerda };
  }

  return sharp(buffer)
    .extend({ ...extend, extendWith: "copy" })
    .jpeg({ quality: 94 })
    .toBuffer();
}

async function run() {
  const [entrada, chave, ...resto] = process.argv.slice(2);
  if (!entrada || !chave) {
    console.error(
      "Uso: node scripts/preparar-fotos-fabrica.mjs <entrada> <chave> [--proporcao 1:1]",
    );
    process.exit(1);
  }
  const i = resto.indexOf("--proporcao");
  const proporcao = i === -1 ? null : resto[i + 1];

  const neutra = await neutralizarVerde(path.resolve(entrada));
  const final = await comporNaProporcao(neutra, proporcao);

  await mkdir(DESTINO, { recursive: true });
  const destino = path.join(DESTINO, `${chave}.jpg`);
  await writeFile(destino, final);

  const m = await sharp(final).metadata();
  console.log(`${destino}  ${m.width}x${m.height}  ${(final.length / 1024).toFixed(0)}KB`);
  console.log("Proximo: npm run imagens, e atualizar src/content/photos.ts");
}

run().catch((erro) => {
  console.error("Falha ao preparar a foto:", erro.message);
  process.exit(1);
});
