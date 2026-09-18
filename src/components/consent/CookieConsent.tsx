"use client";

import { useEffect, useState } from "react";

import { getStoredConsent, storeConsent, type ConsentChoice } from "@/lib/consent";
import { loadTrackingScripts, updateConsent } from "@/lib/tracking";

/*
 * Banner de consentimento (LGPD): cookies de medicao (GA4/Meta Pixel)
 * so carregam apos aceite explicito. A escolha fica no localStorage.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "aceito") {
      loadTrackingScripts();
      return;
    }
    if (stored === "essenciais") {
      // reafirma a recusa nesta carga, para as tags do GTM
      updateConsent(false);
    }
    if (stored === null) {
      // atraso curto: nao compete com o paint inicial do hero
      const timer = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const decide = (choice: ConsentChoice) => {
    storeConsent(choice);
    setVisible(false);
    updateConsent(choice === "aceito");
    if (choice === "aceito") {
      loadTrackingScripts();
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/15 bg-navy-950/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md sm:flex-row sm:items-center">
        <p className="flex-1 text-sm leading-relaxed text-prata-300">
          Usamos cookies para medir o desempenho das nossas campanhas e
          melhorar sua experiência. Saiba mais na{" "}
          <a
            href="/privacidade/"
            className="text-azul-400 underline underline-offset-2 hover:text-white"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => decide("essenciais")}
            className="h-11 rounded-xl border border-white/20 px-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Somente essenciais
          </button>
          <button
            type="button"
            onClick={() => decide("aceito")}
            className="h-11 rounded-xl bg-white px-5 text-sm font-semibold text-navy-950 transition-all hover:brightness-90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
