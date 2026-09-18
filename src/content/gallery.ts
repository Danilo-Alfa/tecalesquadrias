import type { PhotoKey } from "@/content/photos";

export interface GalleryItem {
  id: string;
  caption: string;
  photo: PhotoKey;
}

/*
 * Obras entregues, com foto real da fabrica.
 *
 * TODO(cliente): confirmar a cidade de cada obra — a legenda ganha o local
 * assim que a informacao chegar. Enquanto nao chega, nao inventamos: local
 * errado numa galeria de obras e pior do que local nenhum.
 */
export const GALLERY: readonly GalleryItem[] = [
  {
    id: "maxim-ar-porcelanato",
    caption: "Maxim-ar em alumínio preto, banheiro em porcelanato",
    photo: "obra-maxim-ar-porcelanato",
  },
  {
    id: "maxim-ar-pastilhas",
    caption: "Maxim-ar em alumínio preto, parede de pastilhas",
    photo: "obra-maxim-ar-pastilhas",
  },
] as const;
