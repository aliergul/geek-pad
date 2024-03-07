import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./tr.json";
import en from "./en.json";

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};

export const getLang = () => i18n.language || "tr";
export const supportedLanguages = ["tr", "en"];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: storage.get("lang"),
    fallbackLng: "tr",
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
