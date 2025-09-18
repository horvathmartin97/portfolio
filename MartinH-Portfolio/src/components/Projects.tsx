import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import pawmapImage from "../assets/pawmap.png";
import { useTranslation } from "react-i18next";

interface Projects {
  key: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string;
  imageKey: string;
}
const projectImages: { [key: string]: string } = {
  pawmapImage: pawmapImage,
  silverArrowImage: "",
};
export default function Projects() {
  const { t } = useTranslation();

  const projectsTitle = t("projects.title");
  const liveButton = t("projects.live_button");

  const projectData = t("projects.project_list", {
    returnObjects: true,
  }) as Projects[];

  return (
    <section
      id="projects"
      className="w-full text-white py-20 md:py-32 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {projectsTitle}
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
                  {project.imageKey && projectImages[project.imageKey] ? (
                    <img
                      src={projectImages[project.imageKey]}
                      alt={t("projects.image_alt", { title: project.title })}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  ) : (
                    <p className="text-gray-400">
                      {t("projects.image_placeholder")}
                    </p>
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
                      {liveButton}
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
