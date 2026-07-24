import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ProjectPlaceholder } from "@/components/ui/ProjectPlaceholder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PRODUCTS } from "@/content/products";
import { productWhatsappUrl } from "@/lib/whatsapp";

export function Products() {
  return (
    <section
      id="produtos"
      aria-labelledby="produtos-heading"
      className="scroll-mt-20 bg-prata-50 py-16 md:py-24"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <SectionEyebrow>O que fabricamos</SectionEyebrow>
          <h2
            id="produtos-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-grafite-900 md:text-5xl"
          >
            Tudo sob medida para o seu projeto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-grafite-600 md:text-lg">
            Cada peça é produzida na nossa fábrica a partir das medidas exatas
            do seu vão. Escolha o produto e receba o orçamento pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 0.08}>
              <article className="group hairline-light flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,23,51,0.35)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectPlaceholder
                    variant={product.placeholder}
                    idPrefix={`produto-${product.id}`}
                  />
                  {/* Reflexo diagonal no hover — assinatura da identidade */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[160%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-grafite-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-grafite-600">
                    {product.description}
                  </p>
                  <ButtonLink
                    href={productWhatsappUrl(product.waLabel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    waSource={`produto-${product.id}`}
                    className="mt-5 w-full"
                  >
                    <WhatsAppIcon className="size-[1.125rem]" />
                    Solicitar orçamento
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
