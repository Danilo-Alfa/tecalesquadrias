"use client";

import { useEffect, useRef } from "react";
import { Ruler, ShieldCheck } from "lucide-react";

const MAX_TILT_DEG = 5;
const PARALLAX_PX = 14;

/*
 * Vitrine arquitetonica do hero: janela em alumini com bisel realista,
 * vidro com reflexo de skyline (eco da tagline "Qualidade que Reflete"),
 * varredura de luz periodica e tilt 3D reagindo ao mouse.
 * Renderizada apenas em telas lg+ (o hero mobile fica leve).
 */
export function HeroShowcase() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty("--tilt-x", `${(-y * MAX_TILT_DEG * 2).toFixed(2)}deg`);
        scene.style.setProperty("--tilt-y", `${(x * MAX_TILT_DEG * 2).toFixed(2)}deg`);
        scene.style.setProperty("--par-x", `${(x * PARALLAX_PX).toFixed(2)}px`);
        scene.style.setProperty("--par-y", `${(y * PARALLAX_PX).toFixed(2)}px`);
      });
    };

    const handlePointerLeave = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty("--tilt-x", "0deg");
        scene.style.setProperty("--tilt-y", "0deg");
        scene.style.setProperty("--par-x", "0px");
        scene.style.setProperty("--par-y", "0px");
      });
    };

    scene.addEventListener("pointermove", handlePointerMove);
    scene.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      cancelAnimationFrame(frame);
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md [perspective:1200px]"
    >
      {/* Luz ambiente atras da janela */}
      <div className="absolute -inset-16 rounded-full bg-azul-500/20 blur-3xl" />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-azul-400/15 blur-3xl" />

      <div className="relative transition-transform duration-200 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]">
        <div className="animate-float">
          <WindowArt idPrefix="vitrine" />
        </div>

        {/* Chips de credibilidade flutuando em profundidades diferentes */}
        <div className="absolute -right-5 top-16 [transform:translate3d(calc(var(--par-x,0px)*1.6),calc(var(--par-y,0px)*1.6),60px)]">
          <div className="animate-float flex items-center gap-3 rounded-xl border border-white/15 bg-navy-800/70 px-4 py-3 shadow-[0_16px_40px_-12px_rgba(5,11,26,0.9)] backdrop-blur-md [animation-delay:1.8s]">
            <span className="flex size-9 items-center justify-center rounded-lg border border-azul-400/30 bg-azul-500/20">
              <ShieldCheck className="size-4.5 text-azul-400" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-[0.8125rem] font-semibold leading-tight text-white">
                Garantia de fábrica
              </span>
              <span className="block text-xs text-prata-400">
                direto de quem produz
              </span>
            </span>
          </div>
        </div>

        <div className="absolute -left-7 bottom-28 [transform:translate3d(calc(var(--par-x,0px)*1.2),calc(var(--par-y,0px)*1.2),40px)]">
          <div className="animate-float flex items-center gap-3 rounded-xl border border-white/15 bg-navy-800/70 px-4 py-3 shadow-[0_16px_40px_-12px_rgba(5,11,26,0.9)] backdrop-blur-md [animation-delay:3.2s]">
            <span className="flex size-9 items-center justify-center rounded-lg border border-azul-400/30 bg-azul-500/20">
              <Ruler className="size-4.5 text-azul-400" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-[0.8125rem] font-semibold leading-tight text-white">
                Precisão milimétrica
              </span>
              <span className="block text-xs text-prata-400">
                medição técnica no local
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Sombra de contato e reflexo no piso */}
      <div className="absolute -bottom-8 inset-x-10 h-12 rounded-[100%] bg-navy-950/90 blur-xl" />
      <div className="mt-5 h-28 overflow-hidden opacity-[0.13] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] [transform:scaleY(-1)]">
        <WindowArt idPrefix="vitrine-reflexo" />
      </div>
    </div>
  );
}

interface WindowArtProps {
  idPrefix: string;
}

function WindowArt({ idPrefix }: WindowArtProps) {
  const id = (name: string) => `${idPrefix}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      viewBox="0 0 360 460"
      className="w-full drop-shadow-[0_32px_64px_rgba(5,11,26,0.75)]"
    >
      <defs>
        {/* Aluminio escovado: claro no topo, sombra embaixo, toque de azul */}
        <linearGradient id={id("alu")} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="360" y2="460">
          <stop offset="0" stopColor="#F7F9FC" />
          <stop offset="0.35" stopColor="#B9C2D0" />
          <stop offset="0.58" stopColor="#8B97AB" />
          <stop offset="0.78" stopColor="#5B8CFF" />
          <stop offset="1" stopColor="#DFE5EC" />
        </linearGradient>
        <linearGradient id={id("glass")} gradientUnits="userSpaceOnUse" x1="40" y1="20" x2="330" y2="450">
          <stop offset="0" stopColor="#162E64" />
          <stop offset="0.45" stopColor="#0C1D42" />
          <stop offset="1" stopColor="#071026" />
        </linearGradient>
        <linearGradient id={id("toplight")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("band")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.10" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("bandBlue")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5B8CFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#5B8CFF" stopOpacity="0.14" />
          <stop offset="1" stopColor="#5B8CFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("sheen")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("bldg")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050B1A" stopOpacity="0" />
          <stop offset="0.4" stopColor="#050B1A" stopOpacity="0.35" />
          <stop offset="1" stopColor="#050B1A" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={id("innershadow")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#020610" stopOpacity="0.5" />
          <stop offset="1" stopColor="#020610" stopOpacity="0" />
        </linearGradient>
        <clipPath id={id("clip")}>
          <rect x="18" y="18" width="324" height="424" rx="10" />
        </clipPath>
      </defs>

      {/* Vidro base */}
      <rect x="14" y="14" width="332" height="432" rx="14" fill={url("glass")} />

      {/* Conteudo refletido no vidro */}
      <g clipPath={`url(#${id("clip")})`}>
        {/* Skyline refletida — "qualidade que reflete" */}
        <g fill={url("bldg")}>
          <rect x="26" y="336" width="46" height="106" />
          <rect x="80" y="312" width="34" height="130" />
          <rect x="122" y="352" width="48" height="90" />
          <rect x="198" y="322" width="44" height="120" />
          <rect x="250" y="348" width="36" height="94" />
          <rect x="292" y="304" width="44" height="138" />
        </g>

        {/* Bandas de reflexo diagonais */}
        <g transform="rotate(-16 180 230)">
          <rect x="34" y="-60" width="96" height="580" fill={url("band")} />
          <rect x="150" y="-60" width="30" height="580" fill={url("band")} />
          <rect x="252" y="-60" width="70" height="580" fill={url("bandBlue")} />
        </g>

        {/* Varredura de luz periodica */}
        <g transform="rotate(-16 180 230)">
          <rect
            className="animate-hero-sheen"
            x="-80"
            y="-60"
            width="72"
            height="580"
            fill={url("sheen")}
          />
        </g>

        {/* Luz superior e sombra interna do caixilho */}
        <rect x="18" y="18" width="324" height="96" fill={url("toplight")} />
        <rect x="18" y="18" width="324" height="18" fill={url("innershadow")} />
      </g>

      {/* Brilhos especulares */}
      <path d="M44 74l34-26" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M56 92l52-38" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.6" strokeLinecap="round" />

      {/* Travessas (montantes) com bisel */}
      <g>
        <rect x="172" y="18" width="16" height="424" fill={url("alu")} />
        <rect x="172.75" y="18" width="1.5" height="424" fill="#FFFFFF" opacity="0.5" />
        <rect x="185.75" y="18" width="1.5" height="424" fill="#050B1A" opacity="0.45" />
        <rect x="18" y="222" width="324" height="16" fill={url("alu")} />
        <rect x="18" y="222.75" width="324" height="1.5" fill="#FFFFFF" opacity="0.5" />
        <rect x="18" y="235.75" width="324" height="1.5" fill="#050B1A" opacity="0.45" />
      </g>

      {/* Caixilho externo com bisel: base, aresta clara externa, seam interno */}
      <rect x="10" y="10" width="340" height="440" rx="16" fill="none" stroke={url("alu")} strokeWidth="16" />
      <rect x="2.5" y="2.5" width="355" height="455" rx="21" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="18.5" y="18.5" width="323" height="423" rx="10" fill="none" stroke="#050B1A" strokeOpacity="0.6" strokeWidth="1.5" />
    </svg>
  );
}
