import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/content/stats";

export function TrustBar() {
  return (
    <section aria-label="Números da empresa" className="border-y border-white/10 bg-navy-950">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 md:py-14">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="font-display text-metallic text-4xl font-bold md:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm text-prata-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
