import { useState } from "react";

export default function Card({ title, description, image, link, language }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 70;
  const shortText = description[language].slice(0, maxLength) + '...';

  return (
    <article className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      {/*Image*/}
      <div className="overflow-hidden">
        <img 
          src={image}
          alt={title[language]}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/*Content*/}
      <div className="flex flex-col justify-between flex-grow p-6 h-full">
        <div className="space-y-3">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
            {title[language]}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 
          leading-relaxed">
            {expanded ? description[language] : shortText}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-2xl font-bold text-indigo-600 hover:underline hover:font-extrabold cursor-pointer">
            {expanded ? "-" : "+"}
          </button>
        </div>

        {/*CTA*/}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {language === "es" ? "Ver proyecto" : "View project"}
        </a>
      </div>
    </article>
  );
}