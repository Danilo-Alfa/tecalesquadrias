import { MapPin } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectPlaceholder } from "@/components/ui/ProjectPlaceholder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GALLERY } from "@/content/gallery";

export function Gallery() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="scroll-mt-20 bg-prata-50 py-16 md:py-24"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Projetos realizados</SectionEyebrow>
          <h2
            id="projetos-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-grafite-900 md:text-5xl"
          >
            Trabalho que fala por nós
          </h2>
          <p className="mt-4 text-base leading-relaxed text-grafite-600 md:text-lg">
            Uma amostra do que sai da nossa fábrica e chega à obra: esquadrias
            instaladas com precisão e acabamento de alto padrão.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08}>
              <figure className="group hairline-light overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,23,51,0.35)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectPlaceholder
                    variant={item.placeholder}
                    idPrefix={`galeria-${item.id}`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
                  />
                </div>
                <figcaption className="p-5">
                  <span className="block text-sm font-medium text-grafite-900">
                    {item.caption}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1 text-xs text-grafite-600">
                    <MapPin aria-hidden="true" className="size-3.5" />
                    {item.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
