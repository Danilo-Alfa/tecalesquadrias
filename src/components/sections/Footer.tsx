import { Clock, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const FOOTER_NAV = [
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "Dúvidas frequentes" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo idPrefix="logo-footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-prata-400">
              Esquadrias de alumínio sob medida com produção própria. Janelas,
              portas e grades para residências, comércios e
              construtoras em {SITE.region}.
            </p>
            {(SITE.social.instagram || SITE.social.facebook) && (
              <div className="mt-6 flex gap-3">
                {SITE.social.instagram && (
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da TEC ALUMI"
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-prata-300 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {SITE.social.facebook && (
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook da TEC ALUMI"
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-prata-300 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <FacebookIcon />
                  </a>
                )}
              </div>
            )}
          </div>

          <nav aria-label="Navegação do rodapé" className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-prata-400">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-prata-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-prata-400">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-prata-300">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa="footer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="size-4 text-verde-500" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="size-4 text-azul-400" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-azul-400" />
                <span>
                  {SITE.address.street} — {SITE.address.district},{" "}
                  {SITE.address.city}/{SITE.address.state}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-prata-400">
              Atendimento
            </h3>
            <p className="mt-4 inline-flex items-start gap-2.5 text-sm text-prata-300">
              <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-azul-400" />
              {SITE.businessHours}
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-prata-400 md:flex-row">
          <p>
            {`© ${new Date().getFullYear()} ${SITE.name}`}
            {SITE.cnpj && ` — CNPJ ${SITE.cnpj}`}
          </p>
          <p className="flex items-center gap-3">
            <a
              href="/privacidade/"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              Política de Privacidade
            </a>
            <span aria-hidden="true">·</span>
            <span>{SITE.tagline}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
