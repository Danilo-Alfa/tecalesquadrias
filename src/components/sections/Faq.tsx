"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FAQ } from "@/content/faq";
import { EASE_SUAVE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 bg-white py-16 md:py-24"
    >
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <SectionEyebrow>Dúvidas frequentes</SectionEyebrow>
          <h2
            id="faq-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-grafite-900 md:text-5xl"
          >
            Tudo o que você precisa saber
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="divide-y divide-prata-200 border-y border-prata-200">
            {FAQ.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-grafite-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 text-azul-500 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_SUAVE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[0.9375rem] leading-relaxed text-grafite-600">
                          {item.answer}
                        </p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
