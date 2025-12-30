import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Card({ title, description, image, link, language }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 70;
  const shortText = description[language].slice(0, maxLength) + '...';

  return (
    <article className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      {/*Image*/}
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title[language]}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/*Arrow CTA*/}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-950 transition"
        aria-label="View project"
      >
        <FiArrowUpRight size={20}/>
      </a>

      {/*Content*/}
        <div className="p-4 space-y-2">
          <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
            {title[language]}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 
          leading-snug">
            {expanded ? description[language] : shortText}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-3xl font-bold text-indigo-600 hover:underline hover:font-extrabold hover:text-indigo-950 cursor-pointer">
            {expanded ? "-" : "+"}
          </button>
        </div>
    </article>
  );
}