"use client";

import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 480;

/*
 * CTA persistente de conversao:
 * - mobile: barra fixa inferior na zona do polegar, aparece apos o hero
 *   (para nao duplicar o CTA da primeira dobra);
 * - desktop: bolha flutuante no canto inferior direito.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/90 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 lg:hidden",
          visible ? "translate-y-0" : "translate-y-full",
        )}
      >
        <ButtonLink
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          waSource="barra-mobile"
          className="w-full"
        >
          <WhatsAppIcon />
          Solicitar orçamento grátis
        </ButtonLink>
      </div>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        data-wa="pilula-desktop"
        className={cn(
          "fixed bottom-6 right-6 z-40 hidden h-13 items-center gap-2.5 rounded-full bg-verde-600 px-6 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(21,128,61,0.6)] transition-all duration-300 hover:scale-105 hover:brightness-110 lg:flex",
          visible ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <WhatsAppIcon className="size-5" />
        Orçamento rápido
      </a>
    </>
  );
}
