import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  /** tone define o contraste conforme o fundo da secao */
  tone?: "dark" | "light";
  className?: string;
}

/*
 * Assinatura visual da marca: caixa alta espacada com filetes laterais,
 * eco direto da tagline "Qualidade que Reflete" da logo.
 */
export function SectionEyebrow({
  children,
  tone = "light",
  className,
}: SectionEyebrowProps) {
  const lineClass =
    tone === "dark"
      ? "bg-gradient-to-r from-transparent via-prata-400/60 to-prata-400/60"
      : "bg-gradient-to-r from-transparent via-prata-300 to-prata-300";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em]",
        tone === "dark" ? "text-prata-300" : "text-azul-500",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-px w-8", lineClass)} />
      {children}
      <span aria-hidden="true" className={cn("h-px w-8 scale-x-[-1]", lineClass)} />
    </span>
  );
}
