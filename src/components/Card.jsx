import { useState } from "react";

export default function Card({ title, description, image, link, language }) {
  const [expanded, setExpanded] = useState(false);
  const buttonText = {
    es: "Ir",
    en: "Go",
  }

  const toggleText = {
    es: expanded ? '➖ ...' : '➕ ...',
    en: expanded ? '➖ ...' : '➕ ...',
  }

  const maxLength = 50; // Caracteres antes de cortar el text
  const shortText = description[language].slice(0, maxLength) + '...';

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow w-full max-w-xs flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title[language]}
        className="w-full h-40 object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-between flex-grow p-4 shadow-2xl hover:shadow-red-900">
        <div>
          <h3 className="text-xl font-bold text-indigo-900 dark:text-white text-center">{title[language]}</h3>
          <p className="font-inter mt-2 text-sm font-bold text-blue-600 dark:text-white">{expanded ? description[language] : shortText}</p>
          <button onClick={() => setExpanded(!expanded)} className="mt-2 text-blue-300 hover:underline text-sm cursor-pointer font-semibold">
            {toggleText[language]}
          </button>
        </div>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full block w-12.5 text-center px-4 py-2 bg-blue-400 font-bold text-white hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-900 font-sans"
          >
            {buttonText[language]}
          </a>
        </div>
      </div>
    </div>
  );
}