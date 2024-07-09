import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appColors = { primary: "#00a8a8" };

export const disableOutlineCss =
  "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0";

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

// export const appColors = [
//   "#00a8e0",
//   "#004e7a",
//   "#001f3d",
//   "#3b600b",
//   "#7ebc0b",
//   "#5f8a0a",
//   "#007a7a",
//   "#00a8a8",
//   "#00dbdb",
//   "#0075db",
// ];
