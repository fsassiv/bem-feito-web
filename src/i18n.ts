import deepmerge from "deepmerge";
import { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["pt-BR", "en-US"];
export const defaultLocale = "pt-BR";
const sections = [
  "errors",
  "filterBar",
  "forms",
  "mainMenu",
  "navBar",
  "pages",
  "utils",
];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let temp = { default: {}, fallback: {} };
  // dynamically import json file based on locale
  for (let i = 0; i < sections.length; i++) {
    try {
      temp.default = {
        ...temp.default,
        ...(await import(`../messages/${locale}/${sections[i]}.json`)).default,
      };

      temp.fallback = {
        ...temp.fallback,
        ...(await import(`../messages/pt-BR/${sections[i]}.json`)).default,
      };
    } catch (error) {
      continue;
    }
  }

  const messages = deepmerge(temp.fallback, temp.default) as
    | AbstractIntlMessages
    | undefined;

  return {
    messages,
  };
});
