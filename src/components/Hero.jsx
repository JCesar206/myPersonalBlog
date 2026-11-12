import DownloadCV from "./DownloadCV";
import DownloadCertificate from "./DownloadCertificate";
import { texts } from "../i18n/texts.js";

const techStyles = {
  HTML: "inline-block px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 font-medium text-sm",
  CSS: "inline-block px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-medium text-sm",
  JavaScript: "inline-block px-2 py-0.5 rounded-md bg-yellow-100 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-400 font-medium text-sm",
  React: "inline-block px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 font-medium text-sm",
  TypeScript: "inline-block px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 font-medium text-sm",
  Python: "inline-block px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-medium text-sm",
  "UX/UI": "inline-block px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 font-medium text-sm",
  Ciberseguridad: "inline-block px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-medium text-sm",
  Cibersecurity: "inline-block px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-medium text-sm",
};

export default function Hero({ language }) {
  const t = texts[language];
  const description = t.hero.description;

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center py-6">
      
      {/* Columna de Contenido / Información Personal */}
      <div className="text-center md:text-left space-y-6">
        
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            {t.hero.title}
          </span>
        </h1>

        {/* Descripción dinámica con resaltado de tecnologías */}
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          {Array.isArray(description) &&
            description.map((part, i) => {
              // Limpiamos puntuación para emparejar con el diccionario techStyles
              const cleanWord = part.replace(/[.,]/g, "").trim();
              const styleClass = techStyles[cleanWord];

              if (styleClass) {
                return (
                  <span key={i} className={`mx-1 ${styleClass}`}>
                    {part}
                  </span>
                );
              }
              return <span key={i}> {part}</span>;
            })}
        </p>

        {/* Botones de Acción (CTA) */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-2">
          <DownloadCV language={language} />
          <DownloadCertificate language={language} />
        </div>
      </div>

      {/* Columna del Avatar / Imagen de Perfil */}
      <div className="flex justify-center md:justify-end">
        <div className="relative group">
          {/* Marco decorativo difuminado de fondo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-75 transition duration-500"></div>
          
          <img
            src="/myAvatar.jpg"
            alt="Avatar de Julio César"
            className="relative w-72 md:w-80 rounded-3xl object-cover shadow-2xl border-2 border-slate-200 dark:border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Insignia flotante decorativa */}
          <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white p-3 rounded-2xl shadow-lg font-bold flex items-center justify-center transform transition-transform group-hover:rotate-12">
            🚀
          </div>
        </div>
      </div>
    </section>
  );
}