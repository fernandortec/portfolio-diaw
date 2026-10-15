import { createContext, useContext } from "react";

interface LocaleContext {
  Locale: 'pt-BR' | 'en-US';
  setLocale: (Locale: LocaleContext['Locale']) => void;
}

export const LocaleContext = createContext<LocaleContext>({} as LocaleContext);

export const useLocale = (): LocaleContext => {
  const context = useContext(LocaleContext)

  if (context === null) {
    throw new Error("useLocale must be used within a LocaleProviderProvider.");
  }

  return context;
}