import { useTranslation } from "react-i18next";
import { GraduationCap, ExternalLink } from "lucide-react";
import progmaticCert from "../assets/progmaticCert.pdf";
import mayerfeldCert from "../assets/mayerfeldCert.pdf";
import beschwerdemanagementCert from "../assets/beschwerdemanagementCert.pdf";

interface CertEntry {
  assetKey: string;
  title: string;
  issuer: string;
  date: string;
  specialization: string;
  skills: string[];
}

const certAssets: { [key: string]: string } = {
  beschwerdemanagement: beschwerdemanagementCert,
  progmatic: progmaticCert,
  mayerfeld: mayerfeldCert,
};

export default function Certifications() {
  const { t } = useTranslation();

  const certs = t("certifications.entries", {
    returnObjects: true,
  }) as CertEntry[];

  return (
    <section
      id="certifications"
      className="w-full py-20 md:py-32 bg-slate-950 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400 mb-2">
            {t("certifications.label")}
          </p>
          <h2 className="text-4xl font-bold text-white">
            {t("certifications.title")}
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl">
          {certs.map((cert) => (
            <div
              key={cert.assetKey}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                    <GraduationCap size={22} className="text-sky-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sky-400 font-medium mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {cert.specialization} · {cert.date}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={certAssets[cert.assetKey]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-xl transition-all shrink-0"
                >
                  <ExternalLink size={15} />
                  {t("certifications.view_cert")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
