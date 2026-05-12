import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

export default function GitHubActivity() {
  const { t } = useTranslation();
  const username = "horvathmartin97";

  return (
    <section
      id="github"
      className="w-full py-20 md:py-32 bg-slate-950 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
              {t("github.label")}
            </p>
            <h2 className="text-4xl font-bold text-white">
              {t("github.title")}
            </h2>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-xl transition-all"
          >
            <FaGithub size={16} />
            {t("github.view_profile")}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-center">
            <img
              src={`https://streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true&background=00000000&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&sideLabels=94a3b8&dates=94a3b8&currStreakNum=e2e8f0&sideNums=e2e8f0`}
              alt="GitHub Streak"
              width={800}
              height={200}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
