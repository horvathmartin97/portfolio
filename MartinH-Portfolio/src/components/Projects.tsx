import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import pawmapImage from "../assets/pawmap.png";
import silverCar from "../assets/silverCar.png";
import szakicosmteic from "../assets/szakiCosmetic.png";
import cartlyImage from "../assets/cartlyImage.png";
import { useTranslation } from "react-i18next";

interface Project {
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
  silverArrowImage: silverCar,
  szakicosmteicImage: szakicosmteic,
  cartlyImage: cartlyImage,
};

export default function Projects() {
  const { t } = useTranslation();

  const projectData = t("projects.project_list", {
    returnObjects: true,
  }) as Project[];

  return (
    <section
      id="projects"
      className="w-full text-white py-20 md:py-32 bg-slate-950"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
            {t("projects.title")}
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("projects.heading")}
          </h2>
          <p className="text-slate-400 leading-7">{t("projects.subtitle")}</p>
        </div>

        <div className="flex flex-col gap-20">
          {projectData.map((project, index) => (
            <div
              key={project.key}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16"
            >
              <div className={index % 2 !== 0 ? "md:order-last" : ""}>
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 transition-all duration-500 hover:shadow-sky-500/10 hover:border-sky-500/20">
                  {project.imageKey && projectImages[project.imageKey] ? (
                    <img
                      src={projectImages[project.imageKey]}
                      alt={t("projects.image_alt", { title: project.title })}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                      {t("projects.image_placeholder")}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-2">
                    {t("projects.featured_label")}
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 leading-8 text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition-all"
                    >
                      <ExternalLink size={16} />
                      {t("projects.live_button")}
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
