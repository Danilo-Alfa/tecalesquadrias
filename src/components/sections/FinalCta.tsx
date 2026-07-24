import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-final-heading"
      className="relative overflow-hidden bg-navy-900 py-20 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-500/15 blur-3xl" />
        <div className="absolute inset-y-0 left-[30%] w-px -skew-x-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-y-0 right-[26%] w-px -skew-x-12 bg-gradient-to-b from-transparent via-azul-400/20 to-transparent" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionEyebrow tone="dark">Orçamento sem compromisso</SectionEyebrow>
          <h2
            id="cta-final-heading"
            className="font-display mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl"
          >
            Seu projeto merece esquadrias{" "}
            <span className="text-metallic">à altura</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-prata-300 md:text-lg">
            Mande as medidas ou uma foto do seu projeto e receba um orçamento
            rápido, direto da fábrica.
          </p>
          <div className="mt-8">
            <ButtonLink
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              waSource="cta-final"
              className="w-full sm:w-auto sm:px-10"
            >
              <WhatsAppIcon />
              Solicitar orçamento no WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-prata-400">
            Resposta rápida em horário comercial · Atendemos residências,
            comércios e construtoras
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
