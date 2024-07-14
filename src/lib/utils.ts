import worldCurrency from "@/data/world-currency.json";
import { CurrentLocationTypes } from "@/types/miscellaneous";
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

export const getCurrencyCode = (localeValue: string) => {
  const list = worldCurrency.map((item) => ({
    ...item,
    locale: item.locale.replace("_", "-"),
  }));
  const data = list.find((item) => item.locale === localeValue);

  return data?.code || "BRL";
};

export const formatCurrency = (value: number, locale = "pt-BR") => {
  const converted = value.toString();
  const currency = getCurrencyCode(locale);

  return {
    raw: formatValue({
      value: converted,
      intlConfig: { locale },
    }),
    prefixed: formatValue({
      value: converted,
      intlConfig: { locale, currency },
    }),
  };
};

export const getUserLocation = async (
  latitude: number,
  longitude: number,
  language: string = "pt-br",
): Promise<CurrentLocationTypes> => {
  const baseUrl = `http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=${language.toLowerCase()}`;

  return fetch(baseUrl).then((res) => res.json());
};
