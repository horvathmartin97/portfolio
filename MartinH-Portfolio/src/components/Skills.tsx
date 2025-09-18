import { useTranslation } from "react-i18next";

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
      className="w-full py-20 md:py-32 bg-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("skills.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">
              {t("skills.technical_skills")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-700 bg-opacity-20 text-blue-200 font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">
              {t("skills.personal_competencies")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-700 bg-opacity-40 text-gray-300 font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
