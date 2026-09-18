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
 * janela de correr, maxim-ar, porta pivotante, portao
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
  | "janela-banner"
  | "janelas-integradas"
  | "janela-maxim-ar"
  | "porta-de-correr"
  | "porta-de-correr-detalhes"
  | "porta-banner"
  | "porta-pivotante"
  | "grade"
  | "fabrica-detalhe";

export const PHOTOS: Record<PhotoKey, Photo> = {
  /* Foto de obra do cliente, recortada em quadrado para o card. */
  "janela-de-correr": {
    base: "/images/janela-de-correr",
    widths: [400, 800, 1200],
    width: 1120,
    height: 1120,
    alt: "Janela de correr de duas folhas em alumínio branco com puxadores escuros, em banheiro de porcelanato cinza",
    blurDataURL:
      "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAgCdASoQABAAAoBCJZACdGaA2wF2kgpdOA2bxG8t4AD+TSnEJgBaA1wbvTAIB1JzsBk2Rbj6lbUHmfpKKyQAhbJbZmwwTTqpn2vRLf8aXa3JsunBPhrky+3JfsYLhDDjoDmGngWMdVTlbmePeMzEAAA=",
    propria: true,
  },
  /* Foto de obra do cliente: a tela integrada aparece na folha da esquerda. */
  "janelas-integradas": {
    base: "/images/janelas-integradas",
    widths: [400, 800, 1200],
    width: 900,
    height: 900,
    alt: "Duas janelas maxim-ar de alumínio preto abertas, com tela integrada, sobre parede de mármore claro",
    blurDataURL:
      "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAQAgCdASoQABAAAoBCJQBOj+ADBxDfVEuAAP7zVZFOLgGemEGUHPxeTu49vR1l8M/Eod+3vEVfEJ9MYAlkW7tse4O7d/qfTWZmxuJ2NLyqnAuFQOvQKFbt87Tu2hNvx1aqBTRLnjm2HGoo6XCXE0yBmKVaXhIIAAA=",
    propria: true,
  },
  /* Ambiente usado so no banner de Janelas: fundo branco nao funciona la. */
  "janela-banner": {
    base: "/images/janela-banner",
    widths: [400, 800, 1200],
    width: 1200,
    height: 801,
    alt: "Sala clara com janela de correr de perfil escuro na parede e janela em fita acima",
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoQAAsAA4BaJaQAAu16WnfxXWAA/usqIpcsefOaEUt8Vo53fKSVAPHHEOKkIvWGX4Cbx4G4q2HUej8gAAA=",
    credit: { author: "Max Vakhtbovych", url: "https://www.pexels.com/photo/empty-room-of-modern-apartment-7031599/" },
  },
  /* Foto de obra do cliente: mostra o maxim-ar aberto. */
  "janela-maxim-ar": {
    base: "/images/janela-maxim-ar",
    widths: [400, 800, 1200],
    width: 700,
    height: 700,
    alt: "Janela maxim-ar de alumínio preto aberta, em banheiro de porcelanato claro",
    blurDataURL:
      "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoQABAAAoBCJaQAAxaTq8Sl/Am2AP7sW6s/w7/gh9ektw+WFgd1PbWqnH7+l/u3Rb7hqqNIHmIn3aWIk9CFd/zp7aaD/7YPXoWJ1Qt+71haF5v8MSEDAh3i8LbH1BwA",
    propria: true,
  },
  "porta-de-correr": {
    base: "/images/porta-de-correr",
    widths: [400, 800, 1200],
    width: 1200,
    height: 900,
    alt: "Porta de correr de duas folhas em alumínio branco, vista da área externa, com a sala ao fundo",
    blurDataURL:
      "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAwAgCdASoQAAwAAoBCJYgCdAYwTjBXncemAAD+1zKlGZ6AA4+T7+Zb1Nm/rmvfbOK5cMKD7Rtxx0+rucXqSriUhBdm1dxVXtZT+JpnDxy+pRUC2mY3xW3CybNusrfm5K22EAAA",
    propria: true,
  },
  /*
   * Infografico com os detalhes construtivos da porta de correr. O texto
   * vem gravado na imagem, entao o alt carrega as seis chamadas na integra
   * — e a unica forma de leitor de tela e busca alcancarem esse conteudo.
   */
  "porta-de-correr-detalhes": {
    base: "/images/porta-de-correr-detalhes",
    widths: [400, 800, 1200],
    width: 1200,
    height: 900,
    alt:
      "Porta de correr de alumínio branco com seis detalhes ampliados: trilho superior, para deslizamento suave e silencioso; puxador e fechadura, para mais segurança e praticidade; perfil em alumínio, resistente e com acabamento impecável; trilho inferior, para mais estabilidade; e vidro temperado, para mais resistência, segurança e conforto térmico.",
    blurDataURL:
      "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABwAgCdASoQAAwAAoBCJYwCdH8AgoDF7NYJSuAAAP7ts6vBNVjW+49NXLhQeGzwDpR3K6wOvYQV9Xc9AG6vkBp8xg2T/oEz/Ieku9UAGrEYbvQAp54fxJrcFLqbwxU/4XCRT8YEJbuL5MXqwcYaGAAA",
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
