"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { CalcularButton } from "@/components/store/CalculadoraSobMedida";
import { BUSCA_EVENT, BUSCA_LIMPAR_EVENT } from "@/components/store/SearchWhats";
import { Container } from "@/components/ui/Container";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { CATEGORIES, type CategoryId } from "@/content/categories";
import { PRODUCTS } from "@/content/products";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";

type Filter = CategoryId | "todos";

const formatMetros = (value: number): string =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

/* Normaliza para busca: minusculas e sem acentos */
const normalizar = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

/*
 * Grade com filtro real por categoria e por busca. Alem dos chips locais,
 * qualquer elemento com [data-filter] (banners, tiles, links do rodape)
 * aciona o filtro, e a busca do header filtra por texto via BUSCA_EVENT.
 */
export function ProductGrid() {
  const [filtro, setFiltro] = useState<Filter>("todos");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const trigger = target?.closest?.("[data-filter]");
      const categoria = trigger?.getAttribute("data-filter") as CategoryId | null;
      if (categoria) {
        setFiltro(categoria);
        setBusca("");
        window.dispatchEvent(new Event(BUSCA_LIMPAR_EVENT));
      }
    };
    const handleBusca = (event: Event) => {
      const term = (event as CustomEvent<string>).detail ?? "";
      setBusca(term);
      if (term.trim()) setFiltro("todos");
    };
    document.addEventListener("click", handleClick);
    window.addEventListener(BUSCA_EVENT, handleBusca);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener(BUSCA_EVENT, handleBusca);
    };
  }, []);

  const selecionarCategoria = (novoFiltro: Filter) => {
    setFiltro(novoFiltro);
    setBusca("");
    window.dispatchEvent(new Event(BUSCA_LIMPAR_EVENT));
  };

  const buscaAtiva = busca.trim().length > 0;
  const termo = normalizar(busca.trim());

  const porCategoria =
    filtro === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === filtro);

  const produtos = buscaAtiva
    ? porCategoria.filter((product) =>
        normalizar(
          `${product.title} ${product.description} ${product.waLabel}`,
        ).includes(termo),
      )
    : porCategoria;

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
            active={filtro === "todos" && !buscaAtiva}
            onClick={() => selecionarCategoria("todos")}
          >
            Todos
          </FilterChip>
          {CATEGORIES.map((category) => (
            <FilterChip
              key={category.id}
              active={filtro === category.id}
              onClick={() => selecionarCategoria(category.id)}
            >
              {category.label}
            </FilterChip>
          ))}
        </div>

        {buscaAtiva && (
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-grafite-600">
            <span>
              Resultados para{" "}
              <strong className="text-grafite-900">“{busca.trim()}”</strong> —{" "}
              {produtos.length}{" "}
              {produtos.length === 1 ? "produto" : "produtos"}
            </span>
            <button
              type="button"
              onClick={() => selecionarCategoria("todos")}
              className="inline-flex items-center gap-1 rounded-full border border-prata-200 bg-white px-3 py-1 text-xs font-semibold text-grafite-600 transition-colors hover:border-prata-300 hover:text-grafite-900"
            >
              <X aria-hidden="true" className="size-3" />
              Limpar busca
            </button>
          </div>
        )}

        {buscaAtiva && produtos.length === 0 && (
          <div className="hairline-light mt-7 rounded-2xl bg-white p-8 text-center">
            <p className="font-display text-lg font-bold text-grafite-900">
              Não encontramos “{busca.trim()}” no catálogo
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-grafite-600">
              Mas como tudo aqui é sob medida, é bem provável que a gente
              fabrique. Conte o que você precisa direto no WhatsApp:
            </p>
            <a
              href={whatsappUrl(
                `Olá! Estou procurando: ${busca.trim()}. Vocês fazem?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-wa="busca-sem-resultado"
              className="mt-5 inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-verde-600 px-6 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(21,128,61,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsAppIcon />
              Perguntar no WhatsApp
            </a>
          </div>
        )}

        <div className="mt-7 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {produtos.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 0.06}>
              <article className="group hairline-light flex h-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(10,23,51,0.35)]">
                <div className="relative aspect-square overflow-hidden border-b border-prata-100">
                  <ProjectImage
                    photo={product.photo}
                    fallback={product.placeholder}
                    idPrefix={`produto-${product.id}`}
                    /* 2 colunas no mobile, 4 a partir de lg */
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 22vw"
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
