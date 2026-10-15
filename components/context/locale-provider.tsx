import { type LocaleState, LocaleContext } from "@/components/context/locale-context";
import { type ReactNode, useState } from "react";

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<LocaleState['locale']>("pt-BR");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}