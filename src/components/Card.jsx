import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { texts } from "../i18n/texts.js";

export default function Card({ title, description, image, github, demo, techs = [], language }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 90;

  const t = texts[language];
  const readMoreText = language === "es" ? "Leer más" : "Read more";
  const readLessText = language === "es" ? "Ver menos" : "Show less";

  const isLongDescription = description && description.length > maxLength;
  const shortText = isLongDescription
    ? description.slice(0, maxLength) + "..."
    : description;

  return (
    <article className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">

      {/* Contenedor de la Imagen con zoom al hover */}
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          {/* Enlaces rápidos sobre la imagen en hover */}
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white hover:bg-indigo-600 hover:text-white transition-colors"
                title="Ver código en GitHub"
              >
                <FiGithub size={16} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white hover:bg-indigo-600 hover:text-white transition-colors"
                title="Ver demo en vivo"
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Título del proyecto */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h3>

        {/* Descripción con opción de expandir */}
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

        {/* Badges de tecnologías usadas */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
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
      </div>
    </article>
  );
}