import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "Dúvidas" },
] as const;

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="#inicio">
          <Logo idPrefix="logo-header" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
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
