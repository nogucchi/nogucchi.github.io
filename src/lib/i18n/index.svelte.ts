import en from "./translations/en.json";
import ptBr from "./translations/pt-br.json";

export type Locale = "en" | "pt-br";

type TranslationDict = typeof en;

const translations: Record<Locale, TranslationDict> = {
  en: en,
  "pt-br": ptBr,
};

let locale = $state<Locale>("pt-br");

export const language = {
  get current(): Locale {
    return locale;
  },
  set(l: Locale) {
    locale = l;
  },
};

type DotKeys<T> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown>
    ? `${K}` | `${K}.${DotKeys<T[K]>}`
    : `${K}`;
}[keyof T & string];

export type TranslationKey = DotKeys<TranslationDict>;

export function t(key: TranslationKey): string {
  let result: unknown = translations[language.current];
  for (const part of key.split(".")) {
    if (result && typeof result === "object") {
      result = (result as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof result === "string" ? result : key;
}
