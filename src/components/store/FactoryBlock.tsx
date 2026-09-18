import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/site";

export function FactoryBlock() {
  return (
    <section
      id="fabrica"
      aria-labelledby="fabrica-heading"
      className="scroll-mt-24 bg-prata-50 py-12 md:py-16"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <Reveal>
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
              É por isso que conseguimos entregar janelas, portas e grades
              100% sob medida, com prazo definido no orçamento e
              instalação feita por equipe própria. Qualidade que reflete em
              cada detalhe.
            </p>
          </div>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800 active:scale-[0.98]"
          >
            <InstagramIcon className="text-azul-400" />
            Ver a fábrica no Instagram
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="hairline-light overflow-hidden rounded-2xl bg-navy-900">
            <div className="relative aspect-video">
              <ProjectImage
                photo="fabrica-detalhe"
                fallback="projeto"
                idPrefix="fabrica"
                sizes="(max-width: 1024px) 100vw, 26rem"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-prata-300">
              Acabamento de uma porta de correr saída da nossa fábrica
            </figcaption>
          </figure>
        </Reveal>
        </div>
      </Container>
    </section>
  );
}
