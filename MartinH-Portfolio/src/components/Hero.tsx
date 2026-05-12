import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import thatsme from "../assets/thatsme.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300">
              React · TypeScript · Node.js · PostgreSQL
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
              {t("hero.name")}
            </h1>

            <p className="mt-4 text-xl font-semibold text-sky-300 md:text-2xl">
              {t("hero.title")}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                {t("header.projects")} <ArrowRight size={18} />
              </a>

              <a
                href="https://github.com/horvathmartin97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t("hero.github_button")} <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-sky-500/10 md:h-96 md:w-80">
              <img
                src={thatsme}
                alt={t("hero.name")}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
