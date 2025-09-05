import { useState } from "react";

export default function Navbar({ language, setLanguage, darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const texts = {
    es: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto", page: "Mi Blog Personal", },
    en: { home: "Home", about: "About", projects: "Projects", contact: "Contact", page: "My Personal Blog", }
  };

  return (
    <nav className="bg-white/95 text-indigo-800 font-bold dark:bg-gray-900/90 dark:text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-navbar">{texts[language].page}</h1>

        {/* Botón menú hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Lista menú en escritorio */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li><a href="#home" className="text-navbar">{texts[language].home}</a></li>
          <li><a href="#about" className="text-navbar">{texts[language].about}</a></li>
          <li><a href="#projects" className="text-navbar">{texts[language].projects}</a></li>
          <li><a href="#contact" className="text-navbar">{texts[language].contact}</a></li>
          <li>
            <button 
              onClick={() => setLanguage(language === "es" ? "en" : "es")} 
              className="mr-4 text-navbar"
            >
              🌐 {language.toUpperCase()}
            </button>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>

      {/* Lista menú en móviles */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li><a href="#home" className="hover:text-purple-400 font-bold" onClick={() => setIsOpen(false)}>{texts[language].home}</a></li>
          <li><a href="#about" className="hover:text-purple-400 font-bold" onClick={() => setIsOpen(false)}>{texts[language].about}</a></li>
          <li><a href="#projects" className="hover:text-purple-400 font-bold" onClick={() => setIsOpen(false)}>{texts[language].projects}</a></li>
          <li><a href="#contact" className="hover:text-purple-400 font-bold" onClick={() => setIsOpen(false)}>{texts[language].contact}</a></li>
          <li>
            <button 
              onClick={() => { setLanguage(language === "es" ? "en" : "es"); setIsOpen(false); }} 
              className="mr-4 hover:text-purple-400 font-bold"
            >
              🌐 {language.toUpperCase()}
            </button>
            <button onClick={() => { setDarkMode(!darkMode); setIsOpen(false); }}>
              {darkMode ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}