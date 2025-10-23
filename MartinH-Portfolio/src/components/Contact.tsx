import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      text: "horvathmartinn@icloud.com",
      href: "mailto:horvathmartinn@icloud.com",
      ariaLabel: t("contact.email_aria_label"),
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 30 }} />,
      text: "+36 30 474 6967",
      href: "tel:+36304746967",
      ariaLabel: t("contact.phone_aria_label"),
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 30 }} />,
      text: "GitHub",
      href: "https://github.com/horvathmartin97",
      ariaLabel: t("contact.github_aria_label"),
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-horváth-069487363",
      ariaLabel: t("contact.linkedin_aria_label"),
    },
  ];

  return (
    <section
      id="contact"
      className="w-full text-white py-20 md:py-32 bg-gray-800"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="group bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-blue-500 hover:scale-105 shadow-lg"
            >
              <div className="text-blue-300 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <p className="mt-4 text-md font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
