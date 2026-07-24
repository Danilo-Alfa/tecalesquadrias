"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Search } from "lucide-react";

export const BUSCA_EVENT = "tecalumi:busca";
export const BUSCA_LIMPAR_EVENT = "tecalumi:busca-limpar";

/*
 * Busca do header: filtra a grade de produtos em tempo real (evento
 * BUSCA_EVENT consumido pelo ProductGrid). Enter/lupa rola ate a grade.
 * Quando a grade limpa a busca (ex.: usuario escolheu uma categoria),
 * o campo se esvazia via BUSCA_LIMPAR_EVENT.
 */
export function SearchWhats() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const limpar = () => setQuery("");
    window.addEventListener(BUSCA_LIMPAR_EVENT, limpar);
    return () => window.removeEventListener(BUSCA_LIMPAR_EVENT, limpar);
  }, []);

  const emitir = (term: string) => {
    window.dispatchEvent(new CustomEvent<string>(BUSCA_EVENT, { detail: term }));
  };

  const handleChange = (term: string) => {
    setQuery(term);
    emitir(term);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    emitir(query);
    document
      .querySelector("#produtos")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="hidden max-w-xl flex-1 md:block"
    >
      <div className="flex w-full items-center gap-2 rounded-full bg-white py-1 pl-5 pr-1">
        <input
          type="text"
          value={query}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="Digite o que você precisa: janela, porta, portão…"
          aria-label="Buscar produtos"
          className="h-9 flex-1 bg-transparent text-sm text-grafite-900 placeholder:text-grafite-600/70 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Buscar e ver resultados"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-azul-500 text-white transition-colors hover:bg-azul-400"
        >
          <Search aria-hidden="true" className="size-4" />
        </button>
      </div>
    </form>
  );
}
