import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import pawmapImage from "../assets/pawmap.png";

const projectData = [
  {
    title: "PawMap",
    description:
      "A PawMap egy teljes körű Full Stack webalkalmazás, amely a React és a Node.js modern technológiáit ötvözi egy interaktív, térképes felületen. A projekt célja, hogy központi platformot biztosítson a kisállattartóknak állatbarát helyek felfedezésére és megosztására.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveUrl: "https://pawmap.eu",
    githubUrl: "https://github.com/horvathmartin97",
    image: pawmapImage,
  },
  {
    title: "Silver Arrow Car",
    description:
      "A Silver Arrow Car Kft. számára egy dinamikus digitális bemutatótermet hoztam létre, ahol az autóvásárlás élménnyé válik. A platformon az érdeklődők nemcsak megtekinthetik és szűrhetik az autókat, hanem egy 'virtuális garázst' is létrehozhatnak. A projekt egy Full Stack megoldás, teljes CRUD-műveleteket támogató adminisztrációs rendszer egészíti ki, teljes kontrollt adva az üzemeltetők kezébe.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/horvathmartin97/my-showcase-projects",
    image: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full text-white py-20 md:py-32 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Kiemelt Projektjeim
        </h2>

        <div className="flex flex-col gap-24">
          {projectData.map((project, index) => (
            <div
              key={project.title}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
            >
              <div
                className={`w-full ${index % 2 !== 0 ? "md:order-last" : ""}`}
              >
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} projekt képe`}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  ) : (
                    <p className="text-gray-400">Projekt kép</p>
                  )}
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-blue-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-blue-200 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex justify-center md:justify-start gap-4">
                  {project.liveUrl && (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<OpenInNewIcon />}
                      href={project.liveUrl}
                      target="_blank"
                    >
                      Élő Verzió
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    className="text-white border-white"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
