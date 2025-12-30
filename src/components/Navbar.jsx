import { useState, useEffect, useRef } from "react";
import { TbMessageLanguage } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
import DownloadCV from "./DownloadCV";

export default function Navbar({ setDarkMode, setLanguage, language, darkMode }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Etiquetas bilingües
  const labels = {
    es: {
      hero: "Acerca",
      tech: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
      download: "Descargar CV",
    },
    en: {
      hero: "About",
      tech: "Technologies",
      projects: "Projects",
      contact: "Contact",
      download: "Download CV",
    },
  }

  // Sincroniza el modo oscuro con el <html>
useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

  // Alternar tema e idioma
  const toggleTheme = () => setDarkMode((prev) => !prev);
  const toggleLanguage = () => setLanguage(prev => (prev === "es" ? "en" : "es"));

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
    {/*Navbar*/}
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="flex items-center justify-between px-6 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md">
        <span className="font-extrabold text-lg bg-indigo-800 rounded-full px-4 py-3 text-white dark:text-white">
          JC
        </span>

        {/*Desktop Links*/}
        <div className="font-mono font-semibold hidden md:flex items-center gap-8 text-1xl">
          {["hero","tech","projects","contact"].map((key) => (
            <a
              key={key}
              href={`#${key === "tech" ? "technologies" : key}`} className="font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-800 hover:text-white px-4 py-3 rounded-full transition">
              {labels[language][key]}
            </a>
          ))}  
        </div>

        {/*Controls*/}  
        <div className="flex items-center gap-4">
          {/* Icono de tema */}
          <button 
            onClick={toggleTheme}
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition cursor-pointer">
            {darkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}
          </button>

          {/* Icono de idioma */}
          <button
            onClick={toggleLanguage}
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition cursor-pointer">
            <TbMessageLanguage size={20}/>
          </button>

          {/* Menú hamburguesa */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition cursor-pointer">
            {open ? <IoClose size={20}/> : <MdOutlineSegment size={20}/>}
          </button>
        </div>
      </div>
    </nav>

    {/*Mobile menu overlay*/}
    {open && (
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden">
        <div 
        ref={menuRef}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-gray-900 dark:text-white rounded-3xl shadow-2xl p-6 flex flex-col gap-5 text-center text-1xl">
          {["hero","technologies","projects","contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="font-semibold hover:text-indigo-600 hover:font-extrabold transition"
              >
                {labels[language][id === "technologies" ? "tech" : id]}
              </a>
            ))}
        </div>
        <DownloadCV/>
      </div>
    )}
    </>
  );
}