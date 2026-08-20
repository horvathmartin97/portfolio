import { useTranslation } from "react-i18next";
import { Building2, Calendar } from "lucide-react";

interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export default function Experience() {
  const { t } = useTranslation();

  const entries = t("experience.entries", {
    returnObjects: true,
  }) as ExperienceEntry[];

  return (
    <section
      id="experience"
      className="w-full py-20 md:py-32 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
            {t("experience.title")}
          </p>
          <h2 className="text-4xl font-bold text-white">
            {t("experience.title")}
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl shadow-black/30"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {entry.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <Building2 size={16} className="text-sky-400" />
                    <p className="text-base font-medium text-sky-400">
                      {entry.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Calendar size={16} className="text-slate-400" />
                  <p className="text-sm font-medium text-slate-400">
                    {entry.duration}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 mb-8" />

              <ul className="flex flex-col gap-4">
                {entry.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <p className="text-slate-300 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
