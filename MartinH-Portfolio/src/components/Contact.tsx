import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const contactLinks = [
    {
      icon: <FaGithub size={20} />,
      text: "GitHub",
      href: "https://github.com/horvathmartin97",
      ariaLabel: t("contact.github_aria_label"),
    },
    {
      icon: <FaLinkedin size={20} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-horváth-069487363",
      ariaLabel: t("contact.linkedin_aria_label"),
    },
    {
      icon: <Smartphone size={20} />,
      text: "+36 30 474 6967",
      href: "tel:+36304746967",
      ariaLabel: t("contact.phone_aria_label"),
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-14 shadow-2xl shadow-black/30">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
              {t("contact.title")}
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-slate-300 leading-8">
              {t("contact.description")}
            </p>
          </div>

          <a
            href="mailto:martin@martinhorvath.dev"
            aria-label={t("contact.email_aria_label")}
            className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all mb-8"
          >
            <Mail size={20} />
            martin@martinhorvath.dev
          </a>

          <div className="border-t border-white/10 mb-8" />

          <div className="flex flex-wrap gap-3">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white font-medium px-5 py-2.5 rounded-xl transition-all"
              >
                {item.icon}
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
