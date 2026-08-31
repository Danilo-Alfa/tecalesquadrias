/*
 * Registro das fotos otimizadas em public/images.
 *
 * Os arquivos sao gerados por `npm run imagens` a partir de fotos-originais/
 * (WebP + AVIF em 400, 800 e 1200px). Para trocar uma foto, basta colocar o
 * original em fotos-originais/ com o MESMO nome desta chave e rodar o script:
 * os caminhos abaixo continuam validos.
 *
 * Duas origens convivem aqui:
 * - `propria: true` — foto da propria TEC ALUMI, enviada pelo cliente. Sao
 *   fotos de fabrica tiradas contra lona verde; o verde foi neutralizado
 *   para o cinza da paleta preservando sombra, perfil e leitura do vidro.
 * - `credit` — foto de banco de imagem (Pexels) que ilustra o tipo de
 *   produto enquanto a foto real nao chega. Aparece nos creditos do rodape.
 *
 * TODO(cliente): substituir as entradas com `credit` por fotos reais. Faltam
 * janela de correr, maxim-ar, porta pivotante, portao, fachada, box/vidros
 * e grade. As fotos de fabrica recebidas em 2026-08-31 sao PORTAS de correr
 * (confirmado pelo cliente), nao janelas.
 */

export interface PhotoCredit {
  author: string;
  url: string;
}

export interface Photo {
  /** Caminho sem sufixo de largura nem extensao, a partir de /public */
  base: string;
  /** Larguras geradas, em px, para montar o srcset */
  widths: readonly number[];
  /** Dimensoes do maior arquivo; documentam a proporcao da fonte */
  width: number;
  height: number;
  alt: string;
  /** Placeholder de 16px embutido, exibido enquanto a foto carrega */
  blurDataURL: string;
  /** Foto da propria loja: dispensa credito de terceiro */
  propria?: boolean;
  /** Credito obrigatorio quando a foto vem de banco de imagem */
  credit?: PhotoCredit;
}

export type PhotoKey =
  | "janela-de-correr"
  | "janela-maxim-ar"
  | "porta-de-correr"
  | "porta-banner"
  | "porta-pivotante"
  | "portao"
  | "fachada"
  | "vidros"
  | "grade"
  | "hero-fachada"
  | "fabrica-detalhe";

export const PHOTOS: Record<PhotoKey, Photo> = {
  "janela-de-correr": {
    base: "/images/janela-de-correr",
    widths: [400, 800, 1200],
    width: 1200,
    height: 801,
    alt: "Sala clara com janela de correr de perfil escuro na parede e janela em fita acima",
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoQAAsAA4BaJaQAAu16WnfxXWAA/usqIpcsefOaEUt8Vo53fKSVAPHHEOKkIvWGX4Cbx4G4q2HUej8gAAA=",
    credit: { author: "Max Vakhtbovych", url: "https://www.pexels.com/photo/empty-room-of-modern-apartment-7031599/" },
  },
  "janela-maxim-ar": {
    base: "/images/janela-maxim-ar",
    widths: [400, 800, 1200],
    width: 1200,
    height: 1200,
    alt: "Banheiro claro com duas janelas altas e estreitas de ventilação",
    blurDataURL:
      "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABQAgCdASoQABAAA4BaJaQAA1WFgMG1SivIuYAA/udXlF6G5L8PTzvp+9lSkyUNjQf2eesAMZ3+GnWcVMjUzAiHc1CdFmUwK60qEBg4AAA=",
    credit: { author: "Pușcaș Adryan", url: "https://www.pexels.com/photo/modern-minimalist-bathroom-with-white-marble-28457986/" },
  },
  "porta-de-correr": {
    base: "/images/porta-de-correr",
    widths: [400, 800, 1200],
    width: 1200,
    height: 1200,
    alt: "Porta de correr de duas folhas em alumínio preto, fabricada sob medida",
    blurDataURL:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoQABAAA4BaJZwAAuXZHlcC3xAA/Apvj0RNPVK+2Fu9v/x7Gck2TEJ7qiqPn/k/WVo78V5rQ/sWp098CMz1ib+DcRuAgAAA",
    propria: true,
  },
  "porta-banner": {
    base: "/images/porta-banner",
    widths: [400, 800, 1200],
    width: 1200,
    height: 900,
    alt: "Porta de correr de duas folhas em alumínio branco com puxadores escuros",
    blurDataURL:
      "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAABQAgCdASoQAAwAA4BaJZwAFgBF4mAbpVbYIgAAzIBrHroIEoTPlU14GE++Y1+/DkQNxWMVD500/0C4DxkVuzkkwW+WWGrtMgRCvKTbIa/lP0/wgcMdCgAA",
    propria: true,
  },
  "porta-pivotante": {
    base: "/images/porta-pivotante",
    widths: [400, 800, 1200],
    width: 1200,
    height: 800,
    alt: "Entrada social de residência com porta de vidro em perfil escuro de alumínio",
    blurDataURL:
      "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoQAAsAA4BaJZQCdADG1F1Z3QAA/uz0lJEf4kZ3+4kvzCUUAxGtO6WHjHcPYi044W9VACs2lMUJE3OyYesQGnxAAAA=",
    credit: { author: "Max Vakhtbovych", url: "https://www.pexels.com/photo/modern-house-entrance-7587881/" },
  },
  "portao": {
    base: "/images/portao",
    widths: [400, 800, 1200],
    width: 1200,
    height: 801,
    alt: "Portão de garagem em lâminas horizontais ao lado de portão social e muro de tijolo",
    blurDataURL:
      "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoQAAsAA4BaJagCdGuAAsjUCsxAAP7He4EzUFDVU7fWS5ER1i13iIwIwRjoeN/Ma8YIRvjGEl0b7obbjId6PyAkLEGjVBiJEzrKrGP+eAAAAA==",
    credit: { author: "Douglas Rafael Fonseca", url: "https://www.pexels.com/photo/brown-brick-house-and-concrete-driveway-under-blue-sky-12870089/" },
  },
  "fachada": {
    base: "/images/fachada",
    widths: [400, 800, 1200],
    width: 1200,
    height: 675,
    alt: "Edifício com sacadas envidraçadas em esquadrias de alumínio",
    blurDataURL:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoQAAkAA4BaJYwCdACt8GQAAM3LqDOb2w6MMjV52jnkq/H2ktYFTiV+k83KsHqWHXGqmxnrNXJDM+tj7xclCpIZtsBgAA==",
    credit: { author: "Phát Trương", url: "https://www.pexels.com/photo/modern-glass-apartment-building-exterior-38527765/" },
  },
  "vidros": {
    base: "/images/vidros",
    widths: [400, 800, 1200],
    width: 1200,
    height: 800,
    alt: "Sacadas com guarda-corpo de vidro e janelas de perfil escuro",
    blurDataURL:
      "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoQAAsAA4BaJQAB8hE9BO732GgA/sgI/TjRdByerdLf7AnL7ev7vLnwgEgr63FQtmYPqRnE3avrurcZyFQuKD2FsJ5MnC7zfF3XdcP9Zgyinb7+uAAAAA==",
    credit: { author: "SHOX ART", url: "https://www.pexels.com/photo/modern-apartment-building-with-glass-balconies-29174533/" },
  },
  "grade": {
    base: "/images/grade",
    widths: [400, 800, 1200],
    width: 1200,
    height: 800,
    alt: "Janela protegida por grade de alumínio de barras verticais brancas",
    blurDataURL:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoQAAsAA4BaJQBOgB4Zr5H5AAD+VF8c2ZZ6gUE+ILYlIIi8U+taXWScJS+EqinzKrDCYHYAAAA=",
    credit: { author: "Jan van der Wolf", url: "https://www.pexels.com/photo/barred-window-of-a-building-made-of-corrugated-sheet-metal-20425182/" },
  },
  "hero-fachada": {
    base: "/images/hero-fachada",
    widths: [400, 800, 1200],
    width: 1200,
    height: 800,
    alt: "Torres de escritórios com fachada de vidro azul vistas de baixo",
    blurDataURL:
      "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAwAgCdASoQAAsAA4BaJbACdAEDfNey+5bhAAD+gt2b77OI1xjyioBvCXSOedJNcS0D+3E7N08be0j17Sf+RB95v4eABE2AAAA=",
    credit: { author: "Shreyaan Vashishtha", url: "https://www.pexels.com/photo/low-angle-shot-of-a-modern-office-building-16895158/" },
  },
  "fabrica-detalhe": {
    base: "/images/fabrica-detalhe",
    widths: [400, 800, 1200],
    width: 1200,
    height: 900,
    alt: "Detalhe do puxador e da fechadura de uma porta de correr em alumínio preto",
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoQAAwAA4BaJZwAAh42YONgAPw8S5/s6Rd11UkWe0HJsgNikNjq6mlbaOP3k3nNeW11hY0y5kkxsTbUIAA=",
    propria: true,
  },
};

/*
 * Creditos do rodape: so as fotos de banco entram. Foto propria da loja nao
 * gera credito, e o rodape encolhe sozinho conforme as reais substituem.
 */
export const PHOTO_CREDITS: readonly PhotoCredit[] = Object.values(PHOTOS)
  .map((photo) => photo.credit)
  .filter((credit): credit is PhotoCredit => Boolean(credit))
  .filter(
    (credit, index, all) =>
      all.findIndex((other) => other.author === credit.author) === index,
  );
