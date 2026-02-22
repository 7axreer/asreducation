import { useLangStore } from "@/stores/langStore";
import langData from "@/constants/lang";
import type { Lang } from "@/constants/lang";

type LangKeys = keyof typeof langData;

export function useI18n() {
  const langStore = useLangStore();

  const s = (key: LangKeys): string => {
    const currentLang: Lang = langStore.defaultLang;
    return langData[key]?.[currentLang] ?? key;
  };

  return { s, langStore };
}