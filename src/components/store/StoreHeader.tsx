import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
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
        <a href="#inicio">
          <Logo idPrefix="logo-header" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
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

        <ButtonLink
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          waSource="header"
        >
          <WhatsAppIcon className="size-4" />
          <span className="hidden sm:inline">Orçamento rápido</span>
          <span className="sm:hidden">Orçamento</span>
        </ButtonLink>
      </Container>
    </header>
  );
}
