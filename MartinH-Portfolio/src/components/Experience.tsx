// src/components/Experience.tsx

const experience = {
  role: "Full Stack Fejlesztő (Záróprojekt)",
  company: "Progmatic Academy",
  date: "2025. július - 2025. szeptember",
  description: [
    "Egy 3 fős agilis csapat tagjaként egy teljes értékű webalkalmazást fejlesztettünk a tervezéstől az élesítésig.",
    "Önállóan én feleltem az Event és Comment modulok teljes backendjének megtervezéséért és implementálásáért Node.js és Express.js használatával.",
    "Kialakítottam a REST API végpontokat, és egy robusztus keresési, valamint szűrési funkcionalitást implementáltam a hatékony adatlekérdezés érdekében.",
    "A frontend oldalon én fejlesztettem a felhasználó-specifikus 'Saját Helyszíneim' és 'Saját Eseményeim' oldalakat, biztosítva, hogy mindenki csak a saját adatait tudja módosítani és törölni (CRUD).",
    "A projekt kulcsfontosságú UI komponenseiért feleltem, beleértve a teljes, reszponzív Header-t és az Eseménylétrehozó oldalt is.",
    "Aktívan részt vettem a közös kódellenőrzési (code review) folyamatokban, és a csapatmunkához a Git-et és a JIRA-t használtuk.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Szakmai Tapasztalat
        </h2>

        <div className="max-w-4xl  bg-gray-700 rounded-xl shadow-2xl shadow-blue-500/10 p-8 md:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {experience.role}
              </h3>
              <p className="text-lg font-medium text-blue-300">
                {experience.company}
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0 bg-gray-700 px-3 py-1 rounded-full">
              {experience.date}
            </p>
          </div>

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            {experience.description.map((point, i) => (
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
