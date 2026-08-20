import { useTranslation } from "react-i18next";
import { Code2, Users } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();

  const softSkills = t("skills.soft_skills", {
    returnObjects: true,
  }) as string[];

  const technicalSkills = t("skills.technicalSkills", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="skills"
      className="w-full py-20 md:py-32 bg-slate-950 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
            {t("skills.title")}
          </p>
          <h2 className="text-4xl font-bold text-white">{t("skills.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20">
                <Users size={18} className="text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t("skills.personal_competencies")}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-sky-500/10 text-sky-300 border border-sky-500/20 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-500/10 border border-slate-500/20">
                <Code2 size={18} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t("skills.technical_skills")}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/5 text-slate-300 border border-white/10 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
