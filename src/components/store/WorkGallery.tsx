import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { GALLERY } from "@/content/gallery";

/*
 * Obras entregues. Sao poucas fotos por enquanto, entao a grade para em
 * duas colunas: com `lg:grid-cols-3` sobraria uma celula vazia no desktop.
 * Os cards sao retrato porque as fotos vem do celular, em pe — recortar
 * para paisagem cortaria o marco da janela.
 */
export function WorkGallery() {
  return (
    <section
      id="obras"
      aria-labelledby="obras-heading"
      className="scroll-mt-24 bg-prata-50 py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="obras-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Obras entregues
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-grafite-600 md:text-base">
            Esquadrias que saíram da nossa fábrica e já estão instaladas.
          </p>
        </Reveal>

        {/* max-w: com duas fotos, a grade no container inteiro daria cards
            de 600px de largura e 800px de altura, fora de escala com o
            resto da pagina. */}
        <div className="mt-8 grid max-w-3xl gap-5 sm:grid-cols-2">
          {GALLERY.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <figure className="group hairline-light h-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,23,51,0.35)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ProjectImage
                    photo={item.photo}
                    fallback="janela"
                    idPrefix={`obra-${item.id}`}
                    /* uma coluna no mobile, duas a partir de sm */
                    sizes="(max-width: 640px) 100vw, 370px"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-grafite-900">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
