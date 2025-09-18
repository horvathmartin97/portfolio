import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationHU from "./locales/hu/translation.json";
import translationDE from "./locales/de/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
  de: { translation: translationDE },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "hu",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
