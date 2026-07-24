import { Check } from "lucide-react";

import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const HERO_BADGES = [
  "Produção própria",
  "100% sob medida",
  "Prazo cumprido",
  "Instalação profissional",
] as const;

/*
 * Secao inteiramente estatica com entrada via CSS (sem JS no caminho
 * critico): o texto pinta imediatamente, preservando o LCP.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-navy-900"
    >
      {/* Camadas de fundo: brilho radial e reflexos diagonais da identidade */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-azul-500/15 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-navy-700/40 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-px -skew-x-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-y-0 left-[62%] w-px -skew-x-12 bg-gradient-to-b from-transparent via-azul-400/20 to-transparent" />
      </div>

      <Container className="relative grid items-center gap-14 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="animate-rise">
            <SectionEyebrow tone="dark">
              Fábrica de esquadrias de alumínio
            </SectionEyebrow>
          </div>

          <h1
            id="hero-heading"
            className="font-display animate-rise-solid mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white [animation-delay:60ms] md:text-6xl lg:text-[4.25rem]"
          >
            Esquadrias de alumínio sob medida,{" "}
            <span className="text-metallic animate-sheen">
              direto da fábrica
            </span>
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-prata-300 [animation-delay:140ms] md:text-lg">
            Janelas, portas, portões, fachadas e vidros produzidos com precisão
            milimétrica — do projeto à instalação, com garantia de quem
            fabrica. Atendemos {SITE.region}.
          </p>

          <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:220ms] sm:flex-row sm:items-center">
            <ButtonLink
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              waSource="hero"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon />
              Solicitar orçamento no WhatsApp
            </ButtonLink>
            <ButtonLink
              href="#projetos"
              variant="outline-dark"
              size="lg"
              className="w-full sm:w-auto"
            >
              Ver projetos realizados
            </ButtonLink>
          </div>

          <p className="animate-rise mt-4 text-sm text-prata-400 [animation-delay:280ms]">
            Resposta rápida em horário comercial · Orçamento gratuito e sem
            compromisso
          </p>

          <ul className="animate-rise mt-10 grid grid-cols-2 gap-3 [animation-delay:340ms] md:grid-cols-4">
            {HERO_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
              >
                <Check aria-hidden="true" className="size-4 shrink-0 text-azul-400" />
                <span className="text-[0.8125rem] font-medium text-prata-100">
                  {badge}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise hidden [animation-delay:300ms] lg:col-span-5 lg:block">
          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}
