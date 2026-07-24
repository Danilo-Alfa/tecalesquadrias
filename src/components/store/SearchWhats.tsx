"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

import { whatsappUrl } from "@/lib/whatsapp";

/*
 * "Busca" que converte: o visitante digita o que procura e a mensagem
 * ja chega pronta no WhatsApp. Nao existe catalogo para buscar — em vez
 * de um campo quebrado, o elemento vira um atalho de orcamento.
 */
export function SearchWhats() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const term = query.trim();
    const message = term
      ? `Olá! Estou procurando: ${term}. Pode me passar um orçamento?`
      : undefined;

    window.dataLayer?.push({ event: "whatsapp_click", source: "busca" });
    window.gtag?.("event", "whatsapp_click", { source: "busca" });
    window.fbq?.("track", "Contact", { source: "busca" });

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
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
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Digite o que você precisa: janela, porta, portão…"
          aria-label="Descreva o que você procura"
          className="h-9 flex-1 bg-transparent text-sm text-grafite-900 placeholder:text-grafite-600/70 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Pedir orçamento no WhatsApp"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-azul-500 text-white transition-colors hover:bg-azul-400"
        >
          <Search aria-hidden="true" className="size-4" />
        </button>
      </div>
    </form>
  );
}
