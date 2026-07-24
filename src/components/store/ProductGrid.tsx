"use client";

import { useEffect, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { CalcularButton } from "@/components/store/CalculadoraSobMedida";
import { Container } from "@/components/ui/Container";
import { ProjectPlaceholder } from "@/components/ui/ProjectPlaceholder";
import { CATEGORIES, type CategoryId } from "@/content/categories";
import { PRODUCTS } from "@/content/products";
import { cn } from "@/lib/utils";

type Filter = CategoryId | "todos";

const formatMetros = (value: number): string =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

/*
 * Grade com filtro real por categoria. Alem dos chips locais, qualquer
 * elemento da pagina com [data-filter] (tiles de categoria, links do
 * rodape) aciona o filtro — a navegacao por ancora cuida do scroll.
 */
export function ProductGrid() {
  const [filtro, setFiltro] = useState<Filter>("todos");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const trigger = target?.closest?.("[data-filter]");
      const categoria = trigger?.getAttribute("data-filter") as CategoryId | null;
      if (categoria) setFiltro(categoria);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const produtos =
    filtro === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === filtro);

  return (
    <section
      id="produtos"
      aria-labelledby="produtos-heading"
      className="scroll-mt-24 bg-prata-50 py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="produtos-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Produtos sob medida para o seu projeto
          </h2>
          <p className="mt-2 text-sm text-grafite-600 md:text-base">
            Tudo produzido na nossa fábrica, nas medidas exatas do seu vão.
          </p>
        </Reveal>

        <div
          role="group"
          aria-label="Filtrar produtos por categoria"
          className="mt-6 flex flex-wrap gap-2"
        >
          <FilterChip
            active={filtro === "todos"}
            onClick={() => setFiltro("todos")}
          >
            Todos
          </FilterChip>
          {CATEGORIES.map((category) => (
            <FilterChip
              key={category.id}
              active={filtro === category.id}
              onClick={() => setFiltro(category.id)}
            >
              {category.label}
            </FilterChip>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {produtos.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 0.06}>
              <article className="group hairline-light flex h-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(10,23,51,0.35)]">
                <div className="relative aspect-square overflow-hidden border-b border-prata-100">
                  <ProjectPlaceholder
                    variant={product.placeholder}
                    idPrefix={`produto-${product.id}`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-grafite-600">
                    {product.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-grafite-600/80">
                    {product.description}
                  </p>
                  <div className="mt-3 border-t border-prata-100 pt-3">
                    <p className="text-xs text-grafite-600">Orçamento gratuito:</p>
                    <p className="font-display text-xl font-bold text-azul-500">
                      Sob medida
                    </p>
                    <p className="mt-0.5 text-[0.6875rem] text-grafite-600/80">
                      Medidas a partir de{" "}
                      {formatMetros(product.medidas.larguraMin)} x{" "}
                      {formatMetros(product.medidas.alturaMin)} m
                    </p>
                  </div>
                  <CalcularButton product={product} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface FilterChipProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterChip({ active, onClick, children }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "h-9 rounded-full border px-4 text-[0.8125rem] font-semibold transition-all",
        active
          ? "border-navy-900 bg-navy-900 text-white"
          : "border-prata-200 bg-white text-grafite-600 hover:border-prata-300 hover:text-grafite-900",
      )}
    >
      {children}
    </button>
  );
}
