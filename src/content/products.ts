import type { CategoryId } from "@/content/categories";
import type { PhotoKey } from "@/content/photos";

export interface ProductMeasures {
  /** Faixas em metros */
  larguraMin: number;
  larguraMax: number;
  alturaMin: number;
  alturaMax: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  /** Rotulo usado na mensagem pre-preenchida do WhatsApp */
  waLabel: string;
  /** Foto do catalogo; ausente, cai no placeholder vetorial */
  photo?: PhotoKey;
  /** Variante visual do placeholder ate as fotos reais chegarem */
  placeholder:
    | "janela"
    | "porta"
    | "portao"
    | "projeto"
    | "grade";
  medidas: ProductMeasures;
  category: CategoryId;
}

// TODO(cliente): as fotos atuais sao de banco de imagem e ilustram o tipo de
// produto — trocar por fotos reais da fabrica. Confirmar tambem as faixas de
// medidas (min/max) praticadas em cada produto.
export const PRODUCTS: readonly Product[] = [
  {
    id: "janela-de-correr",
    photo: "janela-de-correr",
    title: "Janela de correr",
    description: "2, 3 ou 4 folhas, com vidro liso, fumê ou temperado.",
    waLabel: "janela de correr sob medida",
    placeholder: "janela",
    medidas: { larguraMin: 0.8, larguraMax: 3, alturaMin: 0.8, alturaMax: 1.6 },
    category: "janelas",
  },
  {
    id: "janela-maxim-ar",
    photo: "janela-maxim-ar",
    title: "Janela maxim-ar",
    description: "Ventilação com segurança para banheiros e cozinhas.",
    waLabel: "janela maxim-ar sob medida",
    placeholder: "janela",
    medidas: { larguraMin: 0.4, larguraMax: 1.5, alturaMin: 0.4, alturaMax: 1.2 },
    category: "janelas",
  },
  {
    id: "porta-de-correr",
    photo: "porta-de-correr",
    title: "Porta de correr",
    description: "Integra ambientes com deslizamento suave e vedação.",
    waLabel: "porta de correr sob medida",
    placeholder: "porta",
    medidas: { larguraMin: 1.5, larguraMax: 4, alturaMin: 2, alturaMax: 2.4 },
    category: "portas",
  },
  {
    id: "porta-pivotante",
    photo: "porta-pivotante",
    title: "Porta pivotante",
    description: "Entrada social imponente, no tamanho do seu vão.",
    waLabel: "porta pivotante sob medida",
    placeholder: "porta",
    medidas: { larguraMin: 0.8, larguraMax: 1.5, alturaMin: 2.1, alturaMax: 2.5 },
    category: "portas",
  },
  {
    id: "portao",
    photo: "portao",
    title: "Portão de alumínio",
    description: "Social e garagem: leve, seguro e sem ferrugem.",
    waLabel: "portão de alumínio sob medida",
    placeholder: "portao",
    medidas: { larguraMin: 2, larguraMax: 6, alturaMin: 1.5, alturaMax: 2.5 },
    category: "portoes-grades",
  },
  {
    id: "grade",
    photo: "grade",
    title: "Grade de alumínio",
    description: "Proteção com design — e zero manutenção.",
    waLabel: "grade de alumínio sob medida",
    placeholder: "grade",
    medidas: { larguraMin: 0.4, larguraMax: 3, alturaMin: 0.4, alturaMax: 2.2 },
    category: "portoes-grades",
  },
] as const;

// TODO(cliente): confirmar cores de aluminio disponiveis
export const ALUMINUM_COLORS = [
  "Branco",
  "Preto",
  "Bronze",
  "Alumínio natural",
  "Outra cor / ainda não sei",
] as const;
