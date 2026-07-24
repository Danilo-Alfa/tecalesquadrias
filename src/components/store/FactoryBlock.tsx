import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function FactoryBlock() {
  return (
    <section
      id="fabrica"
      aria-labelledby="fabrica-heading"
      className="scroll-mt-24 bg-prata-50 py-12 md:py-16"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <h2
            id="fabrica-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Quer conhecer um pouco da nossa fábrica?
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-grafite-600 md:text-base">
            <p>
              A TEC ALUMI produz as próprias esquadrias em {SITE.address.city},
              no bairro {SITE.address.district}. Do corte do perfil de alumínio
              à colocação do vidro, cada etapa passa pelo nosso controle de
              qualidade — sem intermediários e sem revenda.
            </p>
            <p>
              É por isso que conseguimos entregar janelas, portas, portões e
              fachadas 100% sob medida, com prazo definido no orçamento e
              instalação feita por equipe própria. Qualidade que reflete em
              cada detalhe.
            </p>
          </div>
          <a
            href={whatsappUrl(
              "Olá! Quero conhecer a fábrica da TEC ALUMI e conversar sobre um projeto.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-wa="fabrica"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800 active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-4 text-verde-500" />
            Falar com a fábrica
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
