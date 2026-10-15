import { createContext } from "react";

export interface LocaleState {
  locale: 'pt-BR' | 'en-US';
  setLocale: (Locale: LocaleState['locale']) => void;
}

export const LocaleContext = createContext<LocaleState>({} as LocaleState);

