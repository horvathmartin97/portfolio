import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  const descriptionPoints = t("experience.description", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">
          {t("experience.title")}
        </h2>

        <div className="max-w-4xl  bg-gray-700 rounded-xl shadow-2xl shadow-blue-500/10 p-8 md:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {t("experience.role")}
              </h3>
              <p className="text-lg font-medium text-blue-300">
                {t("experience.company")}
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0 bg-gray-600 px-3 py-1 rounded-full">
              {t("experience.duration")}
            </p>
          </div>

          <ul className="list-disc  text-gray-300 space-y-3">
            {descriptionPoints.map((point, i) => (
              <li key={i} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
