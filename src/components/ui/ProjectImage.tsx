import { PHOTOS, type PhotoKey } from "@/content/photos";
import {
  ProjectPlaceholder,
  type PlaceholderVariant,
} from "@/components/ui/ProjectPlaceholder";

interface ProjectImageProps {
  /** Foto do catalogo; ausente, cai no placeholder vetorial */
  photo?: PhotoKey;
  fallback: PlaceholderVariant;
  /** Prefixo unico dos IDs de gradiente do placeholder */
  idPrefix: string;
  /** Larguras de exibicao por breakpoint — sem isso o browser assume 100vw */
  sizes: string;
  /** Acima da dobra: carrega adiantada, sem lazy */
  eager?: boolean;
  /** Imagem sem conteudo informativo: recebe alt vazio */
  decorative?: boolean;
  className?: string;
}

/*
 * O site exporta estatico (output: "export" + images.unoptimized), entao o
 * loader do next/image nao roda em producao: um <Image> aqui serviria o
 * arquivo cru. Os degraus de largura vem pre-gerados por `npm run imagens`
 * e o browser escolhe um pelo srcset.
 *
 * AVIF vem primeiro porque o browser para no primeiro <source> que suporta;
 * quem nao tem AVIF cai no WebP do <img>.
 */
export function ProjectImage({
  photo,
  fallback,
  idPrefix,
  sizes,
  eager = false,
  decorative = false,
  className,
}: ProjectImageProps) {
  if (!photo) {
    return <ProjectPlaceholder variant={fallback} idPrefix={idPrefix} />;
  }

  const { base, widths, width, height, alt, blurDataURL } = PHOTOS[photo];
  const srcSetFor = (extension: string) =>
    widths.map((w) => `${base}-${w}.${extension} ${w}w`).join(", ");
  const largest = widths[widths.length - 1];

  return (
    /* display:contents para o <picture> nao gerar caixa propria nos
       containers com aspect-ratio */
    <picture className="contents">
      <source type="image/avif" srcSet={srcSetFor("avif")} sizes={sizes} />
      <img
        src={`${base}-${largest}.webp`}
        srcSet={srcSetFor("webp")}
        sizes={sizes}
        width={width}
        height={height}
        alt={decorative ? "" : alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        /* Blur de 16px embutido cobre o vao ate a foto pintar */
        style={{
          backgroundImage: `url("${blurDataURL}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={className ?? "absolute inset-0 size-full object-cover"}
      />
    </picture>
  );
}
