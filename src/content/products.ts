export interface Product {
  id: string;
  title: string;
  description: string;
  /** Rotulo usado na mensagem pre-preenchida do WhatsApp */
  waLabel: string;
  /** Variante visual do placeholder ate as fotos reais chegarem */
  placeholder:
    | "janela"
    | "porta"
    | "portao"
    | "fachada"
    | "vidro"
    | "projeto"
    | "grade";
}

// TODO(cliente): substituir placeholders por fotos reais dos produtos
export const PRODUCTS: readonly Product[] = [
  {
    id: "janela-de-correr",
    title: "Janela de correr",
    description: "2, 3 ou 4 folhas, com vidro liso, fumê ou temperado.",
    waLabel: "janela de correr sob medida",
    placeholder: "janela",
  },
  {
    id: "janela-maxim-ar",
    title: "Janela maxim-ar",
    description: "Ventilação com segurança para banheiros e cozinhas.",
    waLabel: "janela maxim-ar sob medida",
    placeholder: "janela",
  },
  {
    id: "porta-de-correr",
    title: "Porta de correr",
    description: "Integra ambientes com deslizamento suave e vedação.",
    waLabel: "porta de correr sob medida",
    placeholder: "porta",
  },
  {
    id: "porta-pivotante",
    title: "Porta pivotante",
    description: "Entrada social imponente, no tamanho do seu vão.",
    waLabel: "porta pivotante sob medida",
    placeholder: "porta",
  },
  {
    id: "portao",
    title: "Portão de alumínio",
    description: "Social e garagem: leve, seguro e sem ferrugem.",
    waLabel: "portão de alumínio sob medida",
    placeholder: "portao",
  },
  {
    id: "fachada",
    title: "Fachada e pele de vidro",
    description: "Presença arquitetônica para comércios e edifícios.",
    waLabel: "fachada em pele de vidro",
    placeholder: "fachada",
  },
  {
    id: "vidros",
    title: "Box e vidros temperados",
    description: "Box, guarda-corpos, espelhos e fechamentos.",
    waLabel: "box e vidros temperados",
    placeholder: "vidro",
  },
  {
    id: "grade",
    title: "Grade de alumínio",
    description: "Proteção com design — e zero manutenção.",
    waLabel: "grade de alumínio sob medida",
    placeholder: "grade",
  },
] as const;
