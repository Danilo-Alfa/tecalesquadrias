import { Star } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TESTIMONIALS } from "@/content/testimonials";
import { initials } from "@/lib/utils";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="relative scroll-mt-20 overflow-hidden bg-navy-900 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-azul-500/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow tone="dark">Quem já contratou</SectionEyebrow>
          <h2
            id="depoimentos-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            A confiança de quem <span className="text-metallic">recomenda</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${index}`} delay={index * 0.08}>
              <figure className="hairline-dark flex h-full flex-col rounded-2xl bg-white/[0.03] p-7">
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star
                      key={star}
                      aria-hidden="true"
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-prata-100">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-navy-700 text-xs font-semibold text-prata-300"
                  >
                    {initials(testimonial.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-prata-400">
                      {testimonial.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
