import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSitcher";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: t("header.projects"), href: "#projects" },
    { title: t("header.experience"), href: "#experience" },
    { title: t("header.skills"), href: "#skills" },
    { title: t("header.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-wide transition hover:text-sky-300"
        >
          {t("header.name")}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <button
            className="flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-slate-950 px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
