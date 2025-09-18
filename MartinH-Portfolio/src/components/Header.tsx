import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSitcher";

export default function Header() {
  const { t } = useTranslation();

  const navLinks = [
    { title: t("header.experience"), href: "#experience" },
    { title: t("header.projects"), href: "#projects" },
    { title: t("header.skills"), href: "#skills" },
    { title: t("header.contact"), href: "#contact" },
  ];
  const navName = t("header.name");
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-900 text-white">
      <a href="#hero" className="text-xl font-bold">
        {navName}
      </a>

      <nav className="hidden md:flex items-center gap-8 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:text-blue-400 transition-colors"
          >
            {link.title}
          </a>
        ))}
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
