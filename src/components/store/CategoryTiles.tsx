import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { CATEGORIES } from "@/content/categories";
import { PRODUCTS } from "@/content/products";

/*
 * Cards de categoria como ferramenta de consulta: mostram o que existe
 * em cada grupo e, ao clicar, filtram a grade de produtos ([data-filter])
 * e rolam ate ela (ancora #produtos).
 */
export function CategoryTiles() {
  return (
    <section
      id="categorias"
      aria-labelledby="categorias-heading"
      className="scroll-mt-24 bg-white py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="categorias-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Categorias
          </h2>
          <p className="mt-2 text-sm text-grafite-600 md:text-base">
            Toque em uma categoria para ver os produtos e pedir seu orçamento.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, index) => {
            const produtos = PRODUCTS.filter(
              (product) => product.category === category.id,
            );

            return (
              <Reveal key={category.id} delay={index * 0.06}>
                <a
                  href="#produtos"
                  data-filter={category.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,23,51,0.6)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-12 size-36 rounded-full bg-azul-500/15 blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
                  />

                  <span className="relative inline-flex size-12 items-center justify-center rounded-xl border border-azul-400/30 bg-azul-500/15">
                    <category.icon
                      aria-hidden="true"
                      className="size-6 text-azul-400"
                      strokeWidth={1.4}
                    />
                  </span>

                  <h3 className="font-display relative mt-4 text-lg font-bold text-white">
                    {category.label}
                  </h3>
                  <p className="relative mt-1 flex-1 text-xs leading-relaxed text-prata-400">
                    {produtos.map((product) => product.title).join(" · ")}
                  </p>

                  <span className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-azul-400 transition-colors group-hover:text-white">
                    Ver {produtos.length} produtos
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
