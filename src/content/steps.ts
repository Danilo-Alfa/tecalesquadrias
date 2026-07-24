import {
  ClipboardCheck,
  Hammer,
  MessageCircle,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const STEPS: readonly Step[] = [
  {
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    description:
      "Conte o que você precisa. Se tiver fotos ou medidas, melhor ainda.",
  },
  {
    icon: PencilRuler,
    title: "Medição e projeto",
    description:
      "Visita técnica para medidas exatas e orçamento detalhado, sem compromisso.",
  },
  {
    icon: Hammer,
    title: "Produção na fábrica",
    description:
      "Perfis e vidros cortados sob medida, com controle de qualidade em cada etapa.",
  },
  {
    icon: ClipboardCheck,
    title: "Instalação profissional",
    description:
      "Equipe especializada, obra limpa e entrega no prazo combinado.",
  },
] as const;
