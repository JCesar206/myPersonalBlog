import DownloadCV from "./DownloadCV";
import DownloadCertificate from "./DownloadCertificate";
import { texts } from "../i18n/texts.js";

const techStyles = {
  HTML: "tech-badge bg-orange-100 text-orange-700 ring-orange-300 font-semibold",
  CSS: "tech-badge bg-blue-100 text-blue-700 ring-blue-300 font-semibold",
  JavaScript: "tech-badge bg-yellow-100 text-yellow-700 ring-yellow-300 font-semibold",
  React: "tech-badge bg-cyan-100 text-cyan-700 ring-cyan-300 font-semibold",
  Vue: "tech-badge bg-emerald-100 text-emerald-700 ring-emerald-300 font-semibold",
  TypeScript: "tech-badge bg-indigo-100 text-indigo-700 ring-indigo-300 font-semibold",
  Java: "tech-badge bg-red-100 text-red-700 ring-red-300 font-semibold",
  "UX/UI": "tech-badge bg-purple-100 text-purple-700 ring-purple-300 font-semibold",
};

export default function Hero({ language }) {
  const t = texts[language];
  const description = t.hero.description;

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center">
      {/* Content */}
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-indigo-700 leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-800 leading-relaxed max-w-xl mx-auto md:mx-0">
          {Array.isArray(description) &&
            description.map((part, i) => (
              <span key={i} className={`mr-2 ${techStyles[part] || ""}`}>{part}</span>
            ))}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <DownloadCV language={language}/>
          <DownloadCertificate language={language}/>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex justify-center md:justify-start">
        <div className="relative">
          <img src="/myAvatar.jpg" alt="Avatar"
            className="w-80 md:w-72 rounded-3xl object-contain shadow-xl transition-transform duration-500 hover:scale-110"/>
          <span className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg font-extrabold">↗</span>
        </div>
      </div>
    </section>
  );
}