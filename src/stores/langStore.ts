import { defineStore } from "pinia";
import type { Lang } from "@/constants/lang";

export const useLangStore = defineStore("langStore", {
  state: () => ({
    defaultLang: "uz" as Lang,
  }),

  actions: {
    setLang(lang: Lang) {
      this.defaultLang = lang;
    },
  },
});