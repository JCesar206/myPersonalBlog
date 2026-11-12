import { FiBriefcase, FiExternalLink } from "react-icons/fi";
import { texts } from "../i18n/texts.js";

export default function CurrentJob({ language = "es" }) {
  const contact = texts[language].contact;

  return (
    <div className="group relative flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Logotipo o Icono de la Organización */}
      <a
        href="https://www.asteroi.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex-shrink-0"
        title={contact.visit || "Visitar Asteroi.dev"}
      >
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 dark:bg-indigo-500/20 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden border border-indigo-500/30">
          <img
            src="/asteroidev.svg"
            alt="Asteroi.dev"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback visual por si la imagen tarda en cargar o no existe
              e.target.style.display = "none";
            }}
          />
          {/* Icono de respaldo por si falla la imagen */}
          <span className="absolute text-xl font-bold">AS</span>
        </div>
      </a>

      {/* Información del Puesto / Rol */}
      <div className="flex-grow text-center sm:text-left space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {contact.namePosition}
          </h3>
          <span className="inline-flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full w-fit mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {language === "es" ? "Actualidad" : "Current"}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">
          {contact.iHaveWork}
        </p>

        {/* Enlace al sitio web */}
        <div className="pt-1">
          <a
            href="https://www.asteroi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>Asteroi.dev</span>
            <FiExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}