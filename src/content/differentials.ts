import {
  CalendarCheck,
  Factory,
  Gem,
  MessagesSquare,
  Ruler,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

// TODO(cliente): confirmar garantia, prazos e diferenciais reais
export const DIFFERENTIALS: readonly Differential[] = [
  {
    icon: Factory,
    title: "Produção própria",
    description:
      "Fabricamos suas esquadrias na nossa própria estrutura, sem intermediários.",
  },
  {
    icon: Ruler,
    title: "Sob medida de verdade",
    description:
      "Medição técnica no local e produção milimétrica para o seu vão.",
  },
  {
    icon: CalendarCheck,
    title: "Prazo cumprido",
    description:
      "Cronograma claro do orçamento à instalação, sem surpresas.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de fábrica",
    description:
      "Materiais de primeira linha e garantia direta de quem fabrica.",
  },
  {
    icon: Gem,
    title: "Acabamento premium",
    description:
      "Perfis, vidros e ferragens selecionados, com acabamento impecável.",
  },
  {
    icon: MessagesSquare,
    title: "Atendimento direto",
    description:
      "Você fala com quem entende do produto, do primeiro contato à entrega.",
  },
] as const;
