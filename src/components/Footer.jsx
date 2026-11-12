import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { texts } from "../i18n/texts.js";

export default function Footer({ language = "es" }) {
  const t = texts[language];
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/JCesar206",
      icon: FaGithub,
      label: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/jcesar206",
      icon: FaLinkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "mailto:jcesar206@hotmail.com",
      icon: FaEnvelope,
      label: "Email Hotmail",
    },
    {
      href: "mailto:jcesary06@gmail.com",
      icon: SiGmail,
      label: "Email Gmail",
    },
  ];

  return (
    <footer className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm p-6 md:p-8">
        <div className="flex flex-col items-center gap-6">
          
          {/* Iconos de Redes Sociales y Contacto */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, icon: Icon, label }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          {/* Línea divisoria sutil */}
          <div className="w-16 h-px bg-slate-200 dark:bg-slate-800"></div>
          {/* Copyright e Información de la App */}
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 text-center font-medium">
            &copy; {currentYear} {t?.footer?.nameApp || "Portfolio"} | Juls |{" "}
            {t?.footer?.rights || "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}