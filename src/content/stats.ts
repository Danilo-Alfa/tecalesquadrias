export interface Stat {
  value: string;
  label: string;
}

// TODO(cliente): confirmar numeros reais — nunca publicar estimativas
export const STATS: readonly Stat[] = [
  { value: "+15", label: "anos de experiência" },
  { value: "+1.200", label: "projetos entregues" },
  { value: "100%", label: "sob medida" },
  { value: "5.0", label: "avaliação dos clientes" },
] as const;
