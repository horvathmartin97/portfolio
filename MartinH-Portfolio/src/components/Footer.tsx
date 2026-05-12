import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 text-slate-400 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {year} Horváth Martin · {t("footer.built_with")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/horvathmartin97"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-horváth-069487363"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
