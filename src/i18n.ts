import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
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

  let tempMsg = {};
  // dynamically import json file based on locale
  for (let i = 0; i < sections.length; i++) {
    tempMsg = {
      ...tempMsg,
      ...(await import(`../messages/${locale}/${sections[i]}.json`)).default,
    };
  }

  const messages = tempMsg;

  return {
    messages,
  };
});
