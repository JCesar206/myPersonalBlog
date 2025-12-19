import { useState, useEffect } from "react";

export default function Navbar({ setDarkMode, setLanguage, language, darkMode }) {
  const [open, setOpen] = useState(false)

  // Etiquetas bilingües
  const labels = {
    es: {
      title: "Mi Blog Personal",
      about: "Acerca",
      tech: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
      form: "Formulario"
    },
    en: {
      title: "My Personal Blog",
      about: "About",
      tech: "Technologies",
      projects: "Projects",
      contact: "Contact",
      form: "Form"
    },
  }

  // Sincroniza el modo oscuro con el <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Alternar tema e idioma
  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleLanguage = () => setLanguage(prev => (prev === "es" ? "en" : "es"));

  return (
    <nav className="w-full fixed top-0 bg-blue-100/50 dark:bg-gray-900/60 shadow z-50 gb-14">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Título */}
        <div className="text-xl font-bold text-blue-400 dark:text-white">{labels[language].title}</div>

        {/* Links en pantallas grandes */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="transition-colors duration-300 text-blue-400 hover:text-blue-400 font-bold dark:text-white">
            {labels[language].about}
          </a>
          <a href="#tech" className="transition-colors duration-300 text-blue-400 hover:text-blue-400 font-bold dark:text-white">
            {labels[language].tech}
          </a>
          <a href="#projects" className="transition-colors duration-300 text-blue-400 hover:text-blue-400 font-bold dark:text-white">
            {labels[language].projects}
          </a>
          <a href="#contact" className="transition-colors duration-300 text-blue-400 hover:text-blue-400 font-bold dark:text-white">
            {labels[language].contact}
          </a>
        </div>

        {/* Controles */}
        <div className="flex gap-3 items-center">
          {/* Icono de tema */}
          <button onClick={toggleTheme} className="text-xl cursor-pointer">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Icono de idioma */}
          <button onClick={toggleLanguage} className="text-xl font-bold text-blue-400 cursor-pointer hover:text-blue-400 dark:text-white">
            {language === "es" ? "🌍 EN" : "🌍 ES"}
          </button>

          {/* Menú hamburguesa */}
          <button className="md:hidden text-xl text-blue-400 cursor-pointer hover:text-blue-400 dark:text-white" onClick={() => setOpen(!open)}> {open ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 gap-4 dark:text-white">
          <a href="#about" className="hover:text-blue-400 font-bold">{labels[language].about}</a>
          <a href="#tech" className="hover:text-blue-400 font-bold">{labels[language].tech}</a>
          <a href="#projects" className="hover:text-blue-400 font-bold">{labels[language].projects}</a>
          <a href="#form" className="hover:text-blue-400 font-bold">{labels[language].form}</a>
          <a href="#contact" className="hover:text-blue-400 font-bold">{labels[language].contact}</a>
        </div>
      )}
    </nav>
  );
}