import { DEFAULT_WHATSAPP_MESSAGE, SITE } from "@/lib/site";

/*
 * Constroi o link de conversa no WhatsApp com mensagem pre-preenchida.
 * A mensagem qualifica o lead e reduz o atrito no inicio da conversa.
 */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productWhatsappUrl(productLabel: string): string {
  return whatsappUrl(
    `Olá! Vi o site da TEC ALUMI e quero um orçamento de ${productLabel}.`,
  );
}
