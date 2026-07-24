import type { Variants } from "framer-motion";

export const EASE_SUAVE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Reveal padrao das secoes: fade + subida discreta, uma unica vez */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SUAVE, delay },
  }),
};

/* Variante para usuarios com prefers-reduced-motion */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, delay },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};
