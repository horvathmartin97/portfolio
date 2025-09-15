import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange("hu")}
        disabled={i18n.language === "hu"}
        className="font-bold disabled:text-blue-400"
      >
        HU
      </button>
      <span>|</span>
      <button
        onClick={() => handleLanguageChange("en")}
        disabled={i18n.language === "en"}
        className="font-bold disabled:text-blue-400"
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => handleLanguageChange("de")}
        disabled={i18n.language === "de"}
        className="font-bold disabled:text-blue-400"
      >
        DE
      </button>
    </div>
  );
}
