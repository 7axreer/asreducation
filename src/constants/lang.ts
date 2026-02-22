export type Lang = "uz" | "en";

type TranslationItem = Record<Lang, string>;

export type LangData = {
  about: TranslationItem;
  subject: TranslationItem;
  result: TranslationItem;
  price: TranslationItem;
  eduName: TranslationItem;
};

const langData: LangData = {
  about: {
    uz: "Biz haqimizda",
    en: "About us",
  },
  subject: {
    uz: "Fanlar",
    en: "Subjects",
  },
  result: {
    uz: "Natijalar",
    en: "Results",
  },
  price: {
    uz: "Narxlar",
    en: "Prices",
  },
  eduName: {
    uz: "ASR O'QUV MARKAZI",
    en: "ASR EDUCATION CENTER",
  },
};

export default langData;