import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectImage } from "@/components/ui/ProjectImage";
import type { CategoryId } from "@/content/categories";
import type { PhotoKey } from "@/content/photos";

/*
 * Banners de categoria em destaque: clicar filtra a grade de produtos
 * ([data-filter]) e rola ate ela (ancora #produtos).
 *
 * Os dois gradientes ficam na mesma familia navy, variando so o tom de
 * partida: sao categorias de mesmo peso e nao devem parecer de niveis
 * diferentes. O banner de Portas usava azul-500 como fundo, o que contraria
 * docs/design-system.md ("azul-500 [...] reservado a detalhes de marca") —
 * era a maior superficie azul do site.
 */
export function CategoryBanners() {
  return (
    <section aria-label="Destaques" className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <Banner
            title="Janelas"
            filterId="janelas"
            photo="janela-banner"
            placeholder="janela"
            className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950"
          />
          <Banner
            title="Portas"
            filterId="portas"
            photo="porta-banner"
            placeholder="porta"
            className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950"
          />
        </div>
      </Container>
    </section>
  );
}

interface BannerProps {
  title: string;
  filterId: CategoryId;
  photo: PhotoKey;
  placeholder: "janela" | "porta";
  className?: string;
}

function Banner({ title, filterId, photo, placeholder, className }: BannerProps) {
  return (
    <Reveal>
      <a
        href="#produtos"
        data-filter={filterId}
        aria-label={`Ver produtos de ${title}`}
        className={`group relative flex h-48 items-center overflow-hidden rounded-2xl p-7 md:h-56 ${className ?? ""}`}
      >
        <div
          /*
           * O titulo e largo e transborda a metade escura do card (medido:
           * 35px a 1024px). Em vez de encolher a tipografia, que e a forca
           * do banner, a foto se dissolve na borda esquerda: o texto cai
           * sobre o gradiente do card, nao sobre a foto, e nao ha emenda
           * dura entre os dois.
           */
          className="absolute inset-y-0 right-0 w-1/2 opacity-60 transition-transform duration-500 [mask-image:linear-gradient(to_right,transparent_0%,black_38%)] group-hover:scale-105"
        >
          <div className="relative h-full w-full">
            <ProjectImage
              photo={photo}
              fallback={placeholder}
              idPrefix={`banner-${filterId}`}
              /* metade da largura de um card que ocupa metade do container */
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
        />
        <div className="relative">
          <h3 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-4xl lg:text-6xl">
            {title}
          </h3>
          <span className="mt-3 inline-block rounded-md bg-navy-950 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">
            Sob medida
          </span>
          <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
            Ver produtos
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}
