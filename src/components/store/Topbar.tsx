import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Topbar() {
  return (
    <div className="border-b border-white/10 bg-navy-950">
      <Container className="flex h-9 items-center justify-between gap-4 text-xs text-prata-400">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-wa="topbar"
          className="transition-colors hover:text-white"
        >
          Dúvidas? <span className="font-semibold text-prata-300">Fale com a gente</span>
        </a>
        <p className="hidden sm:block">
          Atendimento pelo WhatsApp:{" "}
          <span className="font-semibold text-prata-300">{SITE.phoneDisplay}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          {SITE.businessHours}
        </p>
        <p className="sm:hidden font-semibold text-prata-300">{SITE.phoneDisplay}</p>
      </Container>
    </div>
  );
}
