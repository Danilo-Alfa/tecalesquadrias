"use client";

import { m, useReducedMotion } from "framer-motion";

import { fadeOnly, fadeUp } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/* Reveal de scroll padrao: anima uma unica vez, respeitando reduced motion */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reducedMotion ? fadeOnly : fadeUp}
      custom={delay}
    >
      {children}
    </m.div>
  );
}
