import { useTranslation } from "react-i18next";
import { MapPin, Languages, Code, Globe } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <Code size={18} className="text-sky-400" />,
      text: t("about.highlight_fullstack"),
    },
    {
      icon: <Globe size={18} className="text-sky-400" />,
      text: t("about.highlight_deployed"),
    },
    {
      icon: <MapPin size={18} className="text-sky-400" />,
      text: t("about.highlight_location"),
    },
    {
      icon: <Languages size={18} className="text-sky-400" />,
      text: t("about.languages"),
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
              {t("about.label")}
            </p>
            <h2 className="text-4xl font-bold text-white mb-8">
              {t("about.title")}
            </h2>

            <div className="space-y-5 text-slate-300 leading-8">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-md shadow-black/20"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                  {item.icon}
                </div>
                <p className="text-slate-200 text-sm font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
