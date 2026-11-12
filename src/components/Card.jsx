import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { texts } from "../i18n/texts.js";

export default function Card({ title, description, image, github, demo, techs = [], language = "es" }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 95;

  const t = texts[language];
  const readMoreText = language === "es" ? "Leer más" : "Read more";
  const readLessText = language === "es" ? "Ver menos" : "Show less";

  const isLongDescription = description && description.length > maxLength;
  const shortText = isLongDescription
    ? description.slice(0, maxLength) + "..."
    : description;

  return (
    <article className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">

      {/* Imagen del proyecto */}
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* Cuerpo de la tarjeta */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Título */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h3>
        {/* Descripción expandible */}
        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
          <p>{expanded ? description : shortText}</p>
          
          {isLongDescription && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
            >
              {expanded ? readLessText : readMoreText}
            </button>
          )}
        </div>

        {/* Etiquetas de tecnologías */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Botones de acción siempre visibles y bilingües */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <FiExternalLink size={14} />
              <span>{t.buttons.viewDemo}</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
            >
              <FiGithub size={14} />
              <span>{t.buttons.viewCode}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}