import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectImage } from "@/components/ui/ProjectImage";

/*
 * Fecha a pagina mostrando a anatomia da porta de correr: e o ultimo bloco
 * antes do rodape, a pedido do cliente.
 *
 * O infografico ocupa a largura cheia do container porque as seis chamadas
 * vem gravadas na imagem — reduzido ao slot de 26rem do bloco da fabrica,
 * o texto ficaria ilegivel. Pelo mesmo motivo a imagem nao e recortada
 * (largura 100%, altura automatica): qualquer crop cortaria uma chamada.
 */
export function ProductDetails() {
  return (
    <section
      id="detalhes"
      aria-labelledby="detalhes-heading"
      className="scroll-mt-24 bg-white py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="detalhes-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Por dentro da nossa porta de correr
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-grafite-600 md:text-base">
            Do trilho ao vidro temperado: os detalhes que você sente no dia a
            dia.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-8 overflow-hidden rounded-2xl border border-prata-200 bg-white">
            <ProjectImage
              photo="porta-de-correr-detalhes"
              fallback="porta"
              idPrefix="detalhes"
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
