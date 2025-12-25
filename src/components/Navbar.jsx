import { useState, useEffect } from "react";
import { TbMessageLanguage } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function Navbar({ setDarkMode, setLanguage, language, darkMode }) {
  const [open, setOpen] = useState(false)

  // Etiquetas bilingües
  const labels = {
    es: {
      about: "Acerca",
      tech: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
      form: "Formulario"
    },
    en: {
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
    <nav className="w-[90%] top-0 bg-purple-800 my-4 rounded-full justify-around gb-14">
      <div className="w-full flex justify-around items-center py-2 px-4">        
        {/* Links en pantallas grandes */}
        <div className="w-full md:justify-around hidden md:flex gap-6">
          <p className="py-3 px-4 rounded-full text-center dark:text-black bg-white text-black font-bold">
            JC
          </p>
          <div className="flex justify-center items-center gap-3">
            <a href="#about" className="style-navbar-section">
              {labels[language].about}
            </a>
            <a href="#tech" className="style-navbar-section">
              {labels[language].tech}
            </a>
            <a href="#projects" className="style-navbar-section">
              {labels[language].projects}
            </a>
            <a href="#contact" className="style-navbar-section">
              {labels[language].contact}
            </a>
          </div>
        <div className="flex gap-4 items-center">
          {/* Icono de tema */}
          <button onClick={toggleTheme} className="text-xl cursor-pointer text-white hover:text-gray-200">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Icono de idioma */}
          <button onClick={toggleLanguage} className="text-xl text-white hover:text-gray-200 cursor-pointer">
            {language === "es" ? <TbMessageLanguage /> : <TbMessageLanguage />}
          </button>

          {/* Menú hamburguesa */}
          <button className="md:hidden text-xl text-purple-500 hover:text-purple-700 dark:text-white cursor-pointer" onClick={() => setOpen(!open)}> {open ? '✖' : '☰'}
          </button>
        </div>
      </div>

        {/* Controles */}
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-white text-purple-500 dark:bg-gray-900 py-4 gap-4 dark:text-white">
          <a href="#about" className="hover:text-purple-700 font-bold">{labels[language].about}</a>
          <a href="#tech" className="hover:text-purple-700 font-bold">{labels[language].tech}</a>
          <a href="#projects" className="hover:text-purple-700 font-bold">{labels[language].projects}</a>
          <a href="#form" className="hover:text-purple-700 font-bold">{labels[language].form}</a>
          <a href="#contact" className="hover:text-purple-700 font-bold">{labels[language].contact}</a>
        </div>
      )}
    </nav>
  );
}