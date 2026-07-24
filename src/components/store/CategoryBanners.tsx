import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectPlaceholder } from "@/components/ui/ProjectPlaceholder";
import { productWhatsappUrl } from "@/lib/whatsapp";

/* Dois banners de categoria em destaque, logo abaixo do hero */
export function CategoryBanners() {
  return (
    <section aria-label="Destaques" className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <Banner
            title="Janelas"
            waLabel="janelas de alumínio sob medida"
            waSource="banner-janelas"
            placeholder="janela"
            className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950"
          />
          <Banner
            title="Portas"
            waLabel="portas de alumínio sob medida"
            waSource="banner-portas"
            placeholder="porta"
            className="bg-gradient-to-br from-azul-500 via-navy-700 to-navy-900"
          />
        </div>
      </Container>
    </section>
  );
}

interface BannerProps {
  title: string;
  waLabel: string;
  waSource: string;
  placeholder: "janela" | "porta";
  className?: string;
}

function Banner({ title, waLabel, waSource, placeholder, className }: BannerProps) {
  return (
    <Reveal>
      <a
        href={productWhatsappUrl(waLabel)}
        target="_blank"
        rel="noopener noreferrer"
        data-wa={waSource}
        className={`group relative flex h-48 items-center overflow-hidden rounded-2xl p-7 md:h-56 ${className ?? ""}`}
      >
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-60 transition-transform duration-500 group-hover:scale-105">
          <div className="relative h-full w-full">
            <ProjectPlaceholder variant={placeholder} idPrefix={`banner-${waSource}`} />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
        />
        <div className="relative">
          <h3 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h3>
          <span className="mt-3 inline-block rounded-md bg-navy-950 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">
            Sob medida
          </span>
          <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
            Pedir orçamento
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}
