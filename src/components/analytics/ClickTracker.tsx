"use client";

import { useEffect } from "react";

import { TRACKING } from "@/lib/tracking";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "tecalumi_utms";

function readStoredUtms(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as Record<
      string,
      string
    >;
  } catch {
    // sessionStorage pode estar indisponivel (navegacao privada); segue sem UTMs
    return {};
  }
}

/*
 * Rastreio de conversao para trafego pago:
 * - captura UTMs na chegada e persiste na sessao;
 * - todo clique em link com data-wa dispara whatsapp_click no GA4,
 *   a conversao "Orcamento via WhatsApp" no Google Ads, Contact no Meta
 *   Pixel e um push no dataLayer (GTM).
 *
 * Sem aceite de cookies, o GA4 nem e configurado; a conversao do Ads
 * segue pelo Consent Mode v2, sem cookies (ping anonimo para modelagem).
 */
export function ClickTracker() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const utms = UTM_KEYS.reduce<Record<string, string>>((acc, key) => {
        const value = params.get(key);
        return value ? { ...acc, [key]: value } : acc;
      }, {});
      if (Object.keys(utms).length > 0) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
      }
    } catch {
      // sem sessionStorage o rastreio segue funcionando, apenas sem UTMs
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[data-wa]");
      if (!link) return;

      const source = link.getAttribute("data-wa") ?? "desconhecido";
      const utms = readStoredUtms();

      window.dataLayer?.push({ event: "whatsapp_click", source, ...utms });
      window.gtag?.("event", "whatsapp_click", { source, ...utms });

      // Conversao do Google Ads: o clique e o lead, nao o carregamento
      const { googleAdsId, googleAdsWhatsappConversion: conversao } = TRACKING;
      if (googleAdsId && conversao.sendTo) {
        window.gtag?.("event", "conversion", {
          send_to: conversao.sendTo,
          value: conversao.value,
          currency: conversao.currency,
        });
      }

      window.fbq?.("track", "Contact", { source });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
