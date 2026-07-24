export interface Product {
  id: string;
  title: string;
  description: string;
  /** Rotulo usado na mensagem pre-preenchida do WhatsApp */
  waLabel: string;
  /** Variante visual do placeholder ate as fotos reais chegarem */
  placeholder: "janela" | "porta" | "portao" | "fachada" | "vidro" | "projeto";
}

// TODO(cliente): substituir placeholders por fotos reais dos produtos
export const PRODUCTS: readonly Product[] = [
  {
    id: "janelas",
    title: "Janelas de alumínio",
    description:
      "De correr, maxim-ar e pivotantes, com vedação perfeita e deslizamento suave.",
    waLabel: "janelas de alumínio sob medida",
    placeholder: "janela",
  },
  {
    id: "portas",
    title: "Portas de alumínio",
    description:
      "De correr, pivotantes e de giro — da entrada social à área gourmet.",
    waLabel: "portas de alumínio sob medida",
    placeholder: "porta",
  },
  {
    id: "portoes",
    title: "Portões",
    description:
      "Portões sociais e de garagem que unem design, leveza e segurança.",
    waLabel: "portões de alumínio",
    placeholder: "portao",
  },
  {
    id: "fachadas",
    title: "Fachadas e pele de vidro",
    description:
      "Presença arquitetônica para comércios, escritórios e edifícios.",
    waLabel: "fachadas e pele de vidro",
    placeholder: "fachada",
  },
  {
    id: "vidros",
    title: "Vidros temperados",
    description:
      "Box, guarda-corpos, espelhos e fechamentos com instalação precisa.",
    waLabel: "vidros temperados",
    placeholder: "vidro",
  },
  {
    id: "sob-medida",
    title: "Projetos sob medida",
    description:
      "Seu projeto do papel à instalação, exatamente como foi planejado.",
    waLabel: "um projeto sob medida",
    placeholder: "projeto",
  },
] as const;
