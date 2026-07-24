import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy-900 px-5 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-azul-500/15 blur-3xl" />
      </div>

      <div className="relative">
        <a href="/" className="inline-block">
          <Logo idPrefix="logo-404" />
        </a>
        <p className="font-display text-metallic mt-10 text-7xl font-bold md:text-8xl">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-prata-300">
          O endereço que você acessou não existe ou foi movido. Volte ao início
          ou fale direto com a gente.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="outline-dark" size="md" className="w-full sm:w-auto">
            Voltar ao início
          </ButtonLink>
          <ButtonLink
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            waSource="pagina-404"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
