import { cn } from "@/lib/utils";

type ButtonVariant = "whatsapp" | "outline-dark" | "outline-light";
type ButtonSize = "lg" | "md" | "sm";

interface ButtonLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Identifica a secao de origem do clique para o rastreio de conversao */
  waSource?: string;
}

const BASE_STYLES =
  "inline-flex select-none items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.98]";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  whatsapp:
    "bg-verde-600 text-white shadow-[0_10px_28px_-10px_rgba(21,128,61,0.65)] hover:-translate-y-0.5 hover:brightness-110",
  "outline-dark":
    "border border-white/20 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/5",
  "outline-light":
    "border border-prata-200 bg-white text-grafite-900 hover:border-prata-300 hover:bg-prata-50",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  lg: "h-14 px-7 text-base",
  md: "h-12 px-5 text-[0.9375rem]",
  sm: "h-10 px-4 text-sm",
};

export function ButtonLink({
  variant = "whatsapp",
  size = "md",
  waSource,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      data-wa={waSource}
      className={cn(BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
