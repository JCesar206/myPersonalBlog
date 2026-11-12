import { useState, useEffect, useRef } from "react";
import { TbMessageLanguage } from "react-icons/tb";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
import { texts } from "../i18n/texts";
import DownloadCV from "./DownloadCV";
import DownloadCertificates from "./DownloadCertificate";

export default function Navbar({ setDarkMode, setLanguage, language, darkMode }) {
  const t = texts[language];
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { id: "hero", label: t.navbar.hero },
    { id: "technologies", label: t.navbar.technologies },
    { id: "projects", label: t.navbar.projects },
    { id: "contact", label: t.navbar.contact }
  ];
  // Sincroniza la clase dark en el HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleLanguage = () => setLanguage(prev => (prev === "es" ? "en" : "es"));
  // Cerrar menú móvil con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);
  // Cerrar menú móvil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
    {/* Barra de Navegación Flotante */}
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
        {/* Logo/Iniciales */}
        <a href="#hero" className="flex items-center justify-center font-extrabold text-sm tracking-wider bg-indigo-600 hover:bg-indigo-700 w-10 h-10 rounded-full text-white shadow-sm transition-transform hover:scale-105">JC</a>
        {/* Enlances de Navegación (Desktop) */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 px-4 py-2 rounded-full transition-all duration-200">
                {item.label}
            </a>
          ))}
        </div>

        {/* Redes sociales y controles de interfaz */}
        <div className="flex items-center gap-3">
          {/* Redes sociales (Desktop) */}
          <div className="hidden md:flex items-center gap-2 border-r border-slate-200 dark:border-slate-800 pr-3">
            <a
              href="https://github.com/JCesar206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110"
              title="Github"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin/in/jcesar206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Botón de Modo Obscuro/Claro */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110 cursor-pointer"
            aria-label="Cambiar tema"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Botón de Idioma */}
          <button
            onClick={toggleLanguage}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110 cursor-pointer"
            aria-label="Cambiar idioma"
            title={language === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <TbMessageLanguage size={20} />
          </button>

          {/* Botón de Menú Móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110 cursor-pointer"
            aria-label="Menú de navegación"
          >
            {open ? <IoClose size={22} /> : <MdOutlineSegment size={22} />}
          </button>
        </div>
      </div>
    </nav>

    {/* Menú desplegable para dispositivos móviles*/}
    {open && (
      <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden transition-opacity">
        <div
          ref={menuRef}
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col gap-4 text-center border border-slate-200 dark:border-slate-800"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <hr className="border-slate-200 dark:border-slate-800 my-1" />
          {/* Redes y documentos en móvil */}
          <div className="flex justify-center gap-4 py-2">
            <a
              href="https://github.com/JCesar206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jcesar206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <DownloadCV language={language} />
            <DownloadCertificates language={language} />
          </div>
        </div>
      </div>
    )}
    </>
  );
}