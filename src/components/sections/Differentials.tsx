import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { DIFFERENTIALS } from "@/content/differentials";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
      className="relative scroll-mt-20 overflow-hidden bg-navy-900 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-azul-500/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow tone="dark">Por que a TEC ALUMI</SectionEyebrow>
          <h2
            id="diferenciais-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Qualidade que se{" "}
            <span className="text-metallic">vê no reflexo</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.08}>
              <div className="hairline-dark h-full rounded-2xl bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <item.icon aria-hidden="true" className="size-6 text-azul-400" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-prata-300">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
