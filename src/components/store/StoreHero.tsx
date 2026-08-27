import { ArrowRight, Factory, Gem, Ruler, Zap, type LucideIcon } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { Container } from "@/components/ui/Container";

interface HeroBadge {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HERO_BADGES: readonly HeroBadge[] = [
  {
    icon: Ruler,
    title: "Sob medida",
    description: "No tamanho exato do seu vão",
  },
  {
    icon: Zap,
    title: "Orçamento rápido",
    description: "Resposta em minutos pelo WhatsApp",
  },
  {
    icon: Factory,
    title: "Produção própria",
    description: "Fábrica em São Paulo",
  },
  {
    icon: Gem,
    title: "Qualidade total",
    description: "Acabamento e vidros de primeira",
  },
] as const;

export function StoreHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-navy-900"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Fachada ao fundo: esmaecida e coberta por gradiente para nao
            competir com o texto nem derrubar o contraste do titulo. */}
        <ProjectImage
          photo="hero-fachada"
          fallback="fachada"
          idPrefix="hero-bg"
          sizes="100vw"
          eager
          decorative
          className="absolute inset-0 size-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/80 to-navy-900" />
        <div className="absolute -top-32 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-azul-500/20 blur-3xl" />
        <div className="absolute bottom-[-40%] right-[-10%] h-[24rem] w-[24rem] rounded-full bg-navy-700/50 blur-3xl" />
        <div className="absolute inset-y-0 left-[18%] w-px -skew-x-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-y-0 right-[16%] w-px -skew-x-12 bg-gradient-to-b from-transparent via-azul-400/20 to-transparent" />
      </div>

      <Container className="relative py-14 text-center md:py-20">
        <h1
          id="hero-heading"
          className="font-display animate-rise-solid mx-auto max-w-4xl text-4xl font-bold uppercase leading-[1.08] tracking-tight text-white md:text-6xl"
        >
          Esquadrias{" "}
          <span className="text-metallic animate-sheen">sob medida</span>
        </h1>
        <p className="animate-rise mx-auto mt-4 max-w-2xl text-base font-medium uppercase tracking-[0.08em] text-prata-300 [animation-delay:100ms] md:text-lg">
          Com a precisão e o prazo de quem tem fábrica própria
        </p>

        <div className="animate-rise mx-auto mt-10 flex max-w-3xl items-center gap-4 [animation-delay:180ms]">
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-prata-400/50" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-prata-300">
            4 diferenciais da TEC ALUMI
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-prata-400/50" />
        </div>

        <ul className="animate-rise mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3.5 [animation-delay:260ms] lg:grid-cols-4">
          {HERO_BADGES.map((badge) => (
            <li
              key={badge.title}
              className="rounded-2xl border border-azul-400/25 bg-gradient-to-b from-navy-800/80 to-navy-900/80 px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_28px_-16px_rgba(5,11,26,0.9)] backdrop-blur-sm"
            >
              <span className="mx-auto flex size-11 items-center justify-center rounded-xl border border-azul-400/30 bg-azul-500/15">
                <badge.icon aria-hidden="true" className="size-5 text-azul-400" strokeWidth={1.6} />
              </span>
              <h2 className="font-display mt-3 text-sm font-bold uppercase tracking-wide text-white">
                {badge.title}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-prata-400">
                {badge.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="animate-rise mt-9 [animation-delay:340ms]">
          <ButtonLink
            href="#produtos"
            size="lg"
            className="w-full font-bold uppercase tracking-wide sm:w-auto sm:px-10"
          >
            Pedir orçamento
            <ArrowRight aria-hidden="true" className="size-5" />
          </ButtonLink>
          <p className="mt-3 text-xs text-prata-400">
            Gratuito e sem compromisso · Resposta em horário comercial
          </p>
        </div>
      </Container>
    </section>
  );
}
