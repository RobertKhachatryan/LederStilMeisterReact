import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationRU from "./locales/ru.json";
import translationAM from "./locales/am.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    am: {
      translation: translationAM,
    },
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
