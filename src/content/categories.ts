import { DoorOpen, Fence, Grid2x2, type LucideIcon } from "lucide-react";

export type CategoryId =
  | "janelas"
  | "portas"
  | "grades";

export interface Category {
  id: CategoryId;
  label: string;
  waLabel: string;
  icon: LucideIcon;
}

export const CATEGORIES: readonly Category[] = [
  {
    id: "janelas",
    label: "Janelas",
    waLabel: "janelas de alumínio sob medida",
    icon: Grid2x2,
  },
  {
    id: "portas",
    label: "Portas",
    waLabel: "portas de alumínio sob medida",
    icon: DoorOpen,
  },
  {
    id: "grades",
    label: "Grades",
    waLabel: "grades de alumínio",
    icon: Fence,
  },
] as const;
