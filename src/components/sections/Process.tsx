import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { STEPS } from "@/content/steps";
import { whatsappUrl } from "@/lib/whatsapp";

export function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="scroll-mt-20 bg-white py-16 md:py-24"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2
            id="como-funciona-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-grafite-900 md:text-5xl"
          >
            Do orçamento à instalação em 4 passos
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Linha de conexao entre os passos no desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-prata-200 via-azul-500/40 to-prata-200 lg:block"
          />
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <Reveal
                  delay={index * 0.1}
                  className="relative flex h-full flex-col items-center text-center lg:px-2"
                >
                  <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-xl border border-prata-200 bg-white shadow-sm">
                    <step.icon aria-hidden="true" className="size-6 text-azul-500" strokeWidth={1.5} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display mt-5 text-sm font-bold tracking-[0.2em] text-prata-300"
                  >
                    {`0${index + 1}`}
                  </span>
                  <h3 className="font-display mt-2 text-lg font-semibold text-grafite-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-grafite-600">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 text-center">
          <ButtonLink
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            waSource="como-funciona"
          >
            <WhatsAppIcon />
            Começar meu orçamento
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
