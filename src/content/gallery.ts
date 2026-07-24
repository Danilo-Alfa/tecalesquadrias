export interface GalleryItem {
  id: string;
  caption: string;
  location: string;
  placeholder: "janela" | "porta" | "portao" | "fachada" | "vidro" | "projeto";
}

// TODO(cliente): substituir por fotos reais de obras com legenda e cidade
export const GALLERY: readonly GalleryItem[] = [
  {
    id: "fachada-comercial",
    caption: "Fachada comercial em pele de vidro",
    location: "São Paulo, SP",
    placeholder: "fachada",
  },
  {
    id: "janelas-residenciais",
    caption: "Janelas de correr em residência",
    location: "São Paulo, SP",
    placeholder: "janela",
  },
  {
    id: "porta-de-correr",
    caption: "Porta de correr integrando área gourmet",
    location: "São Paulo, SP",
    placeholder: "porta",
  },
  {
    id: "portao-social",
    caption: "Portão social com perfis de alumínio",
    location: "São Paulo, SP",
    placeholder: "portao",
  },
  {
    id: "box-vidro",
    caption: "Box e fechamentos em vidro temperado",
    location: "São Paulo, SP",
    placeholder: "vidro",
  },
  {
    id: "projeto-sob-medida",
    caption: "Projeto sob medida do desenho à instalação",
    location: "São Paulo, SP",
    placeholder: "projeto",
  },
] as const;
