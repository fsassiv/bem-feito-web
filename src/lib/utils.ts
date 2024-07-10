import { type ClassValue, clsx } from "clsx";
import { formatValue } from "react-currency-input-field";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appColors = { primary: "#00a8a8" };

export const disableOutlineCss =
  "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0";

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatCurrency = (value: number) => {
  const converted = value.toFixed(2).toString();
  return formatValue({
    value: converted,
    groupSeparator: ".",
    decimalSeparator: ",",
    prefix: "R$ ",
    intlConfig: { locale: "pt-BR", currency: "BRL" },
  });
};
