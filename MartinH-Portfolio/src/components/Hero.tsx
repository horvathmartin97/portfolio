import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const { t } = useTranslation();
  const myName = t("hero.name");
  return (
    <section id="hero" className="w-full text-white py-20 bg-gray-800 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {myName}
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mt-2 mb-6">
            Full Stack Webfejlesztő
          </p>
          <p className="max-w-xl text-gray-300">
            Full Stack Fejlesztő, aki a React frontendeket Node.js alapú,
            hatékony backendekkel köti össze. Főbb kompetenciáim: REST API
            fejlesztés (Express.js), adatbázis-kezelés és a teljes alkalmazás
            típusbiztossá tétele TypeScript segítségével. Nyitottan állok az új
            technológiai kihívások elé.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/horvathmartin97"
              target="_blank"
              className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-3 flex px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Github <GitHubIcon className="ml-2" />
            </a>
            <a
              href="#contact"
              className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Kapcsolat
            </a>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-400 text-xl">
              Kép
            </div>

            {/* 
            <img 
              src={profileImage} 
              alt="Horváth Martin profilképe" 
              className="w-full h-full object-cover" // object-cover biztosítja, hogy a kép torzítás nélkül töltse ki a kört
            /> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
