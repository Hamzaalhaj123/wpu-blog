import { arSA, enAU, Locale } from "date-fns/locale";

export type Locales = (typeof locales)[number];

export const locales = ["ar", "en"] as const;

export const dateFnsLocales: Record<Locales, Locale> = {
  ar: arSA,
  en: enAU,
};
