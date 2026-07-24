export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

/*
 * ATENCAO: os depoimentos abaixo sao PLACEHOLDERS de layout.
 * TODO(cliente): substituir por depoimentos reais (ou avaliacoes do Google)
 * antes de publicar. Depoimentos inventados violam as politicas do
 * Google Ads e do Meta Ads e podem suspender a conta de anuncios.
 */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "[Depoimento real do cliente entra aqui — experiência com orçamento, prazo e instalação.]",
    name: "Nome do cliente",
    location: "Bairro, Cidade",
    rating: 5,
  },
  {
    quote:
      "[Depoimento real do cliente entra aqui — qualidade do acabamento e atendimento.]",
    name: "Nome do cliente",
    location: "Bairro, Cidade",
    rating: 5,
  },
  {
    quote:
      "[Depoimento real do cliente entra aqui — resultado final e recomendação.]",
    name: "Nome do cliente",
    location: "Bairro, Cidade",
    rating: 5,
  },
] as const;
