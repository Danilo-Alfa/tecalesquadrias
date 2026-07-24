import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

/* Bloco escuro de conversao no mesmo slot visual do bloco de destaque da referencia */
export function CtaBanner() {
  return (
    <section aria-label="Peça seu orçamento" className="bg-white pb-12 md:pb-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-10 md:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-azul-500/20 blur-3xl" />
              <div className="absolute inset-y-0 left-[30%] w-px -skew-x-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Receba seu orçamento{" "}
                  <span className="text-metallic">sem sair do WhatsApp</span>
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-prata-300 md:text-base">
                  Mande as medidas ou uma foto do seu projeto e nossa equipe
                  responde com o valor sob medida, sem compromisso.
                </p>
              </div>
              <ButtonLink
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                waSource="cta-banner"
                className="w-full shrink-0 md:w-auto"
              >
                <WhatsAppIcon />
                Pedir orçamento
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
