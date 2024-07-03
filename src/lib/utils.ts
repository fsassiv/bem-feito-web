import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appColors = [
  "#00a8e0",
  "#004e7a",
  "#001f3d",
  "#3b600b",
  "#7ebc0b",
  "#5f8a0a",
  "#007a7a",
  "#00a8a8",
  "#00dbdb",
  "#0075db",
];
