/*
 * Registro das fotos otimizadas em public/images.
 *
 * Os arquivos sao gerados por `npm run imagens` a partir de fotos-originais/
 * (WebP + AVIF em 400, 800 e 1200px). Para trocar uma foto, basta colocar o
 * original em fotos-originais/ com o MESMO nome desta chave e rodar o script:
 * os caminhos abaixo continuam validos.
 *
 * As fotos atuais sao de banco de imagem (Pexels) e ilustram o tipo de produto.
 * TODO(cliente): substituir por fotos reais das obras da TEC ALUMI.
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
  credit: PhotoCredit;
}

export type PhotoKey =
  | "janela-de-correr"
  | "janela-maxim-ar"
  | "porta-de-correr"
  | "porta-pivotante"
  | "portao"
  | "fachada"
  | "vidros"
  | "grade"
  | "hero-fachada"
  | "fabrica-corte";

export const PHOTOS: Record<PhotoKey, Photo> = {
  "janela-de-correr": {
    base: "/images/janela-de-correr",
    widths: [400, 800, 1200],
    width: 1200,
    height: 800,
    alt: "Janela de correr de duas folhas com perfil de alumínio escuro em parede clara",
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoQAAsAA4BaJZACdAELz5oWqT+QAPz925nyXCN8dqrWlfMZRWv5jmVg2uKpkwJl31tzNvlY1YPI53pTFSMM6wAA",
    credit: { author: "Sóc Năng Động", url: "https://www.pexels.com/photo/modern-window-with-blue-frosted-glass-32248256/" },
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
    height: 800,
    alt: "Sala integrada ao quintal por porta de correr de vidro com perfil escuro",
    blurDataURL:
      "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAQCdASoQAAsAA4BaJYwCdAEJ7dmCtoAA/fBPU4OPQD+70asCcxd0cuURMrM8/pl4UWdvbT0xZhUloxlLbhHFx1qujOpmeCvCzIwkDNx3XcgC2UU91geip56YwWwAAAA=",
    credit: { author: "Pew Nguyen", url: "https://www.pexels.com/photo/a-sliding-door-with-white-curtains-13600834/" },
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
    alt: "Painéis de veneziana de alumínio branco sobre parede azul",
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoQAAsAA4BaJZACdAEU2z6AAP6NI0IIQroXKLEcaFFNT4psXcxWJPRgANAkLgAA",
    credit: { author: "Jan van der Wolf", url: "https://www.pexels.com/photo/minimalist-blue-wall-with-aluminum-shutters-30728904/" },
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
  "fabrica-corte": {
    base: "/images/fabrica-corte",
    widths: [400, 800, 1200],
    width: 1200,
    height: 800,
    alt: "Serra de corte em operação sobre perfil metálico, com faíscas",
    blurDataURL:
      "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAwAgCdASoQAAsAA4BaJQBWAB8wnnICo4EHAAD+81L/ZmfWqNQQTm6iNlyWMaTILrKHAQc2AY9zQwOW4oV0/lSQlOU9pj0AgTZEqrZ7+iWacRM3VQFh6s5BeAAAAA==",
    credit: { author: "Critical Smith", url: "https://www.pexels.com/photo/industrial-metal-cutting-with-circular-saw-sparks-29386091/" },
  },
};

/** Fonte unica para a lista de creditos do rodape, sem autor repetido */
export const PHOTO_CREDITS: readonly PhotoCredit[] = Object.values(PHOTOS)
  .map((photo) => photo.credit)
  .filter(
    (credit, index, all) =>
      all.findIndex((other) => other.author === credit.author) === index,
  );
