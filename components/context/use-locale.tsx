import { LocaleContext, type LocaleState } from "@/components/context/locale-context";
import { useContext } from "react";

export const useLocale = (): LocaleState => {
  const context = useContext(LocaleContext)

  if (context === null) {
    throw new Error("useLocale must be used within a LocaleProvider.");
  }

  return context;
}