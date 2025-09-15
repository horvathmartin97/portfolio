// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importáljuk a fordítási fájlokat
import translationEN from "./locales/en/translation.json";
import translationHU from "./locales/hu/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
};

i18n
  .use(initReactI18next) // Átadja az i18n példányt a react-i18next-nek
  .init({
    resources,
    lng: "hu", // Alapértelmezett nyelv
    fallbackLng: "hu", // Tartalék nyelv, ha a választott nem elérhető

    interpolation: {
      escapeValue: false, // React már véd az XSS támadások ellen
    },
  });

export default i18n;
