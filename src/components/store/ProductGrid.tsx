import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectPlaceholder } from "@/components/ui/ProjectPlaceholder";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PRODUCTS } from "@/content/products";
import { productWhatsappUrl } from "@/lib/whatsapp";

export function ProductGrid() {
  return (
    <section
      id="produtos"
      aria-labelledby="produtos-heading"
      className="scroll-mt-24 bg-prata-50 py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="produtos-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Produtos sob medida para o seu projeto
          </h2>
          <p className="mt-2 text-sm text-grafite-600 md:text-base">
            Tudo produzido na nossa fábrica, nas medidas exatas do seu vão.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 0.06}>
              <article className="group hairline-light flex h-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(10,23,51,0.35)]">
                <div className="relative aspect-square overflow-hidden border-b border-prata-100">
                  <ProjectPlaceholder
                    variant={product.placeholder}
                    idPrefix={`produto-${product.id}`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-[0.8125rem] font-bold uppercase tracking-wide text-grafite-900">
                    {product.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-grafite-600">
                    {product.description}
                  </p>
                  <p className="mt-3 text-xs text-grafite-600">
                    Orçamento gratuito:
                  </p>
                  <p className="font-display text-base font-bold text-azul-500">
                    100% sob medida
                  </p>
                  <a
                    href={productWhatsappUrl(product.waLabel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-wa={`produto-${product.id}`}
                    className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-navy-900 text-[0.8125rem] font-semibold text-white transition-all hover:bg-navy-800 active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="size-4 text-verde-500" />
                    Calcular sob medida
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
