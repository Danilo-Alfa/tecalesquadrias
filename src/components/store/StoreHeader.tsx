import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SearchWhats } from "@/components/store/SearchWhats";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#fabrica", label: "A Fábrica" },
  { href: "#produtos", label: "Produtos" },
  { href: "#categorias", label: "Categorias" },
  { href: "#contato", label: "Contato" },
] as const;

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-[4.25rem]">
        <a href="#inicio" className="shrink-0">
          <Logo idPrefix="logo-header" />
        </a>

        <SearchWhats />

        <ButtonLink
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          waSource="header"
          className="shrink-0"
        >
          <WhatsAppIcon className="size-4" />
          <span className="hidden sm:inline">Orçamento rápido</span>
          <span className="sm:hidden">Orçamento</span>
        </ButtonLink>
      </Container>

      <div className="hidden border-t border-white/10 lg:block">
        <Container className="flex h-11 items-center gap-7">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-wa="nav-chip"
            className="rounded-md border border-azul-400/40 bg-azul-500/15 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-azul-400 transition-colors hover:bg-azul-500/25 hover:text-white"
          >
            Orçamento em minutos
          </a>
          <nav aria-label="Navegação principal" className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-prata-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
