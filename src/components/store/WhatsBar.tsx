import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

/* Faixa verde clicavel abaixo do header — atalho permanente de conversao */
export function WhatsBar() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      data-wa="faixa-verde"
      className="flex items-center justify-center gap-2.5 bg-verde-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
    >
      <WhatsAppIcon className="size-4" />
      Clique e peça agora seu orçamento pelo WhatsApp
    </a>
  );
}
