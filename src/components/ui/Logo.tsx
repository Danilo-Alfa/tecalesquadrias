import { cn } from "@/lib/utils";

interface LogoProps {
  /** Prefixo unico para os IDs dos gradientes (evita conflito de SVG na mesma pagina) */
  idPrefix: string;
  className?: string;
  withTagline?: boolean;
}

/*
 * Recriacao vetorial da marca para uso em tela (a arte original e bitmap).
 * Janela de 4 folhas com moldura metalica, fiel a logo fornecida.
 */
export function Logo({ idPrefix, className, withTagline = true }: LogoProps) {
  const frameId = `${idPrefix}-frame`;
  const glassId = `${idPrefix}-glass`;

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 44 56"
        aria-hidden="true"
        className="h-9 w-auto md:h-10"
      >
        <defs>
          <linearGradient
            id={frameId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="44"
            y2="56"
          >
            <stop offset="0" stopColor="#E8ECF2" />
            <stop offset="0.45" stopColor="#8B97AB" />
            <stop offset="0.7" stopColor="#5B8CFF" />
            <stop offset="1" stopColor="#C9D1DD" />
          </linearGradient>
          <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#10234D" />
            <stop offset="1" stopColor="#0A1733" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="40"
          height="52"
          rx="3"
          fill={`url(#${glassId})`}
          stroke={`url(#${frameId})`}
          strokeWidth="3"
        />
        <line x1="22" y1="4" x2="22" y2="52" stroke={`url(#${frameId})`} strokeWidth="2.5" />
        <line x1="4" y1="28" x2="40" y2="28" stroke={`url(#${frameId})`} strokeWidth="2.5" />
        <path d="M7 13l7-6" stroke="#5B8CFF" strokeWidth="1.4" opacity="0.65" />
        <path d="M27 13l7-6" stroke="#5B8CFF" strokeWidth="1.4" opacity="0.65" />
        <path d="M7 40l7-6" stroke="#5B8CFF" strokeWidth="1.4" opacity="0.5" />
        <path d="M27 40l7-6" stroke="#5B8CFF" strokeWidth="1.4" opacity="0.5" />
      </svg>
      <span className="flex flex-col">
        <span className="font-display text-metallic text-lg font-bold leading-none tracking-[0.14em]">
          TEC ALUMI
        </span>
        {withTagline && (
          <span className="mt-1.5 text-[0.5625rem] font-medium uppercase leading-none tracking-[0.28em] text-prata-400">
            Qualidade que Reflete
          </span>
        )}
      </span>
    </span>
  );
}
