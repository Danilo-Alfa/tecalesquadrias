import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { CATEGORIES } from "@/content/categories";
import { productWhatsappUrl } from "@/lib/whatsapp";

export function CategoryTiles() {
  return (
    <section
      id="categorias"
      aria-labelledby="categorias-heading"
      className="scroll-mt-24 bg-white py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="categorias-heading"
            className="font-display text-2xl font-bold tracking-tight text-grafite-900 md:text-3xl"
          >
            Categorias
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.06}>
              <a
                href={productWhatsappUrl(category.waLabel)}
                target="_blank"
                rel="noopener noreferrer"
                data-wa={`categoria-${category.id}`}
                className="group block text-center"
              >
                <span className="flex aspect-square items-center justify-center rounded-2xl bg-navy-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-navy-800 group-hover:shadow-[0_16px_32px_-16px_rgba(10,23,51,0.5)]">
                  <category.icon
                    aria-hidden="true"
                    className="size-12 text-white transition-colors group-hover:text-azul-400"
                    strokeWidth={1.2}
                  />
                </span>
                <span className="mt-3 block text-sm font-bold text-grafite-900">
                  {category.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
