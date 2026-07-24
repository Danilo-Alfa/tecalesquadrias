import { Clock, LockKeyhole, Mail, MapPin, ShieldCheck } from "lucide-react";

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
  { id: "janelas", label: "Janelas" },
  { id: "portas", label: "Portas" },
  { id: "portoes-grades", label: "Portões e grades" },
  { id: "fachadas-vidros", label: "Fachadas e vidros" },
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
                <li key={categoria.id}>
                  <a
                    href="#produtos"
                    data-filter={categoria.id}
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
        <Container className="grid gap-8 py-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold text-grafite-900">
              Formas de Pagamento
            </h3>
            {/* TODO(cliente): confirmar formas de pagamento aceitas */}
            <div className="mt-3 flex flex-wrap gap-2">
              {["Pix", "Cartão de crédito", "Cartão de débito", "Transferência"].map(
                (forma) => (
                  <span
                    key={forma}
                    className="rounded-md border border-prata-200 bg-white px-2.5 py-1 text-xs font-medium text-grafite-600"
                  >
                    {forma}
                  </span>
                ),
              )}
            </div>
            <p className="mt-2 text-[0.6875rem] text-grafite-600/80">
              Condições combinadas no orçamento
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-grafite-900">Segurança</h3>
            <ul className="mt-3 flex flex-col gap-2 text-xs text-grafite-600">
              <li className="inline-flex items-center gap-2">
                <LockKeyhole aria-hidden="true" className="size-3.5 text-azul-500" />
                Conexão segura (SSL)
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="size-3.5 text-azul-500" />
                Seus dados protegidos — LGPD
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-grafite-900">
              Desenvolvido por
            </h3>
            {/* TODO(dev): trocar pela marca/link do estudio */}
            <p className="mt-3 text-sm font-semibold text-grafite-600">
              Projetos Dunamis
            </p>
          </div>
        </Container>
      </div>

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
