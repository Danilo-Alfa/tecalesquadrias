export interface FaqItem {
  question: string;
  answer: string;
}

// TODO(cliente): confirmar prazos, garantia, pagamento e regiao atendida
export const FAQ: readonly FaqItem[] = [
  {
    question: "Vocês fazem projetos totalmente sob medida?",
    answer:
      "Sim. Todas as esquadrias são produzidas na nossa fábrica a partir das medidas exatas do seu vão, incluindo cor, tipo de vidro e acabamento. Você não se adapta a medidas padrão: o produto é feito para o seu projeto.",
  },
  {
    question: "Como funciona a medição?",
    answer:
      "Após o primeiro contato pelo WhatsApp, agendamos uma visita técnica para conferir as medidas no local. Isso garante encaixe perfeito e evita retrabalho na instalação.",
  },
  {
    question: "Qual o prazo de produção e instalação?",
    answer:
      "O prazo varia conforme o tipo e a quantidade de esquadrias, e é informado junto com o orçamento. Você recebe um cronograma claro e acompanhamos cada etapa até a entrega.",
  },
  {
    question: "As esquadrias têm garantia?",
    answer:
      "Sim. Por fabricarmos nossos próprios produtos, oferecemos garantia direta de fábrica sobre materiais e instalação. Os detalhes constam na proposta.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Trabalhamos com as principais formas de pagamento e condições facilitadas. Consulte as opções disponíveis no momento do orçamento.",
  },
  {
    question: "Vocês atendem quais regiões?",
    answer:
      "Atendemos São Paulo e região. Se você estiver em outra cidade, chame no WhatsApp e verificamos a disponibilidade para o seu endereço.",
  },
  {
    question: "Alumínio exige muita manutenção?",
    answer:
      "Não. O alumínio não enferruja, não empena e não precisa de pintura periódica. A limpeza com água e detergente neutro é suficiente para manter o acabamento por muitos anos.",
  },
] as const;
