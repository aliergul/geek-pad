import i18next from "i18next";
import tr from "./tr.json";
import en from "./en.json";

import { initReactI18next } from "react-i18next";

export const lang =
  localStorage.getItem("lang") !== null
    ? localStorage.getItem("lang").replace(/["]/g, "")
    : "tr";

i18next.use(initReactI18next).init({
  pluralSeparator: true,
  contextSeparator: true,
  keySeparator: ":",
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  fallbackLng: ["tr"],
  lng: lang, // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources: {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  },
});

export default i18next;
