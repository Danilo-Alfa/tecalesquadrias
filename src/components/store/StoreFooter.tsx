import { Clock, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const INSTITUCIONAL = [
  { href: "#fabrica", label: "A Fábrica" },
  { href: "#produtos", label: "Produtos" },
  { href: "#categorias", label: "Categorias" },
] as const;

const CATEGORIAS = [
  { label: "Janelas", wa: "janelas de alumínio sob medida" },
  { label: "Portas", wa: "portas de alumínio sob medida" },
  { label: "Portões e grades", wa: "portões e grades de alumínio" },
  { label: "Fachadas e vidros", wa: "fachadas e vidros temperados" },
] as const;

export function StoreFooter() {
  return (
    <footer id="contato" className="scroll-mt-24 border-t border-prata-200 bg-prata-100">
      <Container className="py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo idPrefix="logo-footer" tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-grafite-600">
              Esquadrias de alumínio sob medida com produção própria em{" "}
              {SITE.address.city}. Janelas, portas, portões, fachadas e vidros
              para residências, comércios e construtoras.
            </p>
            {(SITE.social.instagram || SITE.social.facebook) && (
              <div className="mt-5 flex items-center gap-3">
                <span className="text-sm font-bold text-grafite-900">
                  Siga-nos nas redes:
                </span>
                {SITE.social.instagram && (
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da TEC ALUMI"
                    className="flex size-9 items-center justify-center rounded-full bg-navy-900 text-white transition-colors hover:bg-navy-800"
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
                    className="flex size-9 items-center justify-center rounded-full bg-navy-900 text-white transition-colors hover:bg-navy-800"
                  >
                    <FacebookIcon />
                  </a>
                )}
              </div>
            )}
          </div>

          <nav aria-label="Institucional" className="lg:col-span-2">
            <h3 className="text-sm font-bold text-grafite-900">Institucional</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {INSTITUCIONAL.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-grafite-600 transition-colors hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Categorias" className="lg:col-span-2">
            <h3 className="text-sm font-bold text-grafite-900">Categorias</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {CATEGORIAS.map((categoria) => (
                <li key={categoria.label}>
                  <a
                    href={whatsappUrl(
                      `Olá! Vi o site da TEC ALUMI e quero um orçamento de ${categoria.wa}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-wa={`footer-${categoria.label}`}
                    className="text-sm text-grafite-600 transition-colors hover:text-navy-900"
                  >
                    {categoria.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-grafite-900">SAC</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grafite-600">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa="footer-sac"
                  className="inline-flex items-center gap-2.5 font-semibold text-grafite-900 transition-colors hover:text-navy-900"
                >
                  <WhatsAppIcon className="size-4 text-verde-600" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-navy-900"
                >
                  <Mail aria-hidden="true" className="size-4 text-azul-500" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-azul-500" />
                <span>
                  {SITE.address.street} — {SITE.address.district},{" "}
                  {SITE.address.city}/{SITE.address.state} · CEP{" "}
                  {SITE.address.zip}
                </span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Clock aria-hidden="true" className="size-4 text-azul-500" />
                {SITE.businessHours}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-prata-200">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-grafite-600 md:flex-row">
          <p>
            {`© ${new Date().getFullYear()} ${SITE.name}`}
            {SITE.cnpj && ` — CNPJ ${SITE.cnpj}`}
          </p>
          <p className="flex items-center gap-3">
            <a
              href="/privacidade/"
              className="underline underline-offset-2 transition-colors hover:text-navy-900"
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
