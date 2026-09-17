export type PlaceholderVariant =
  | "janela"
  | "porta"
  | "portao"
  | "projeto"
  | "grade";

interface ProjectPlaceholderProps {
  variant: PlaceholderVariant;
  /** Prefixo unico para os IDs dos gradientes deste SVG */
  idPrefix: string;
}

/*
 * Ilustracoes vetoriais temporarias no lugar das fotos reais.
 * Sao claramente estilizadas (nao simulam fotografia) e serao trocadas
 * por imagens reais das obras. Zero requisicao de rede, zero peso.
 */
export function ProjectPlaceholder({ variant, idPrefix }: ProjectPlaceholderProps) {
  const bgId = `${idPrefix}-bg`;
  const frameId = `${idPrefix}-fr`;
  const glassId = `${idPrefix}-gl`;

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <radialGradient id={bgId} cx="0.7" cy="0.25" r="1.1">
          <stop offset="0" stopColor="#173064" />
          <stop offset="0.55" stopColor="#0F2148" />
          <stop offset="1" stopColor="#0A1733" />
        </radialGradient>
        <linearGradient
          id={frameId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="400"
          y2="300"
        >
          <stop offset="0" stopColor="#E8ECF2" />
          <stop offset="0.5" stopColor="#8B97AB" />
          <stop offset="0.75" stopColor="#5B8CFF" />
          <stop offset="1" stopColor="#C9D1DD" />
        </linearGradient>
        <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2F6BE8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#0A1733" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${bgId})`} />
      <Artwork variant={variant} frame={`url(#${frameId})`} glass={`url(#${glassId})`} />
    </svg>
  );
}

interface ArtworkProps {
  variant: PlaceholderVariant;
  frame: string;
  glass: string;
}

function Artwork({ variant, frame, glass }: ArtworkProps) {
  switch (variant) {
    case "janela":
      return (
        <g>
          <rect x="120" y="60" width="160" height="180" rx="4" fill={glass} stroke={frame} strokeWidth="6" />
          <line x1="200" y1="64" x2="200" y2="236" stroke={frame} strokeWidth="4" />
          <line x1="124" y1="150" x2="276" y2="150" stroke={frame} strokeWidth="4" />
          <path d="M140 100l30-26" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.6" />
          <path d="M218 100l30-26" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.6" />
          <path d="M140 210l30-26" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.45" />
        </g>
      );
    case "porta":
      return (
        <g>
          <rect x="140" y="40" width="120" height="230" rx="4" fill={glass} stroke={frame} strokeWidth="6" />
          <line x1="200" y1="44" x2="200" y2="266" stroke={frame} strokeWidth="4" />
          <circle cx="185" cy="160" r="4" fill={frame} />
          <path d="M156 110l26-40" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.55" />
          <path d="M216 110l26-40" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.55" />
        </g>
      );
    case "portao":
      return (
        <g>
          {[70, 106, 142, 178, 214].map((y) => (
            <rect
              key={y}
              x="80"
              y={y}
              width="240"
              height="22"
              rx="4"
              fill={glass}
              stroke={frame}
              strokeWidth="2.5"
            />
          ))}
          <path d="M110 90L150 62" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.5" />
          <path d="M240 200l40-28" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.4" />
        </g>
      );
    case "grade":
      return (
        <g>
          <rect x="90" y="60" width="220" height="180" rx="6" fill="none" stroke={frame} strokeWidth="5" />
          {[124, 158, 192, 226, 260, 294].map((x) => (
            <line key={x} x1={x} y1="66" x2={x} y2="234" stroke={frame} strokeWidth="3" />
          ))}
          <path d="M110 110l30-26" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.5" />
          <path d="M240 200l34-26" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.4" />
        </g>
      );
    case "projeto":
      return (
        <g>
          <rect
            x="100"
            y="70"
            width="200"
            height="160"
            fill="none"
            stroke={frame}
            strokeWidth="2.5"
            strokeDasharray="10 8"
          />
          <line x1="100" y1="252" x2="300" y2="252" stroke={frame} strokeWidth="2" />
          <path d="M100 246v12M300 246v12" stroke={frame} strokeWidth="2" />
          <line x1="322" y1="70" x2="322" y2="230" stroke={frame} strokeWidth="2" />
          <path d="M316 70h12M316 230h12" stroke={frame} strokeWidth="2" />
          <rect x="140" y="105" width="120" height="90" rx="2" fill="none" stroke="#5B8CFF" strokeWidth="2.5" opacity="0.7" />
          <line x1="200" y1="105" x2="200" y2="195" stroke="#5B8CFF" strokeWidth="2" opacity="0.7" />
        </g>
      );
  }
}
