import { useState, useEffect, useRef } from "react";
import { TbMessageLanguage } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
import { texts } from "../i18n/texts.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadCV from "./DownloadCV";
import DownloadCertificate from "./DownloadCertificate";

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleLanguage = () =>
    setLanguage(prev => (prev === "es" ? "en" : "es"));

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="flex items-center justify-between px-6 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md">

          {/* Logo */}
          <span className="font-extrabold text-lg bg-indigo-800 rounded-full px-4 py-3 text-white">JC</span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5 font-mono font-semibold">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}
                className="text-gray-700 dark:text-gray-200 hover:bg-indigo-800 hover:text-white px-4 py-3 rounded-full transition">
                {item.label}
              </a>
            ))}
          </div>

          {/* Links SocialMedia Desktop */}
          <div className="hidden md:flex items-center gap-3 font-serif">
            <a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer"
            className="hover:scale-145 hover:text-purple-600 dark:hover:text-violet-400">
              <FaGithub size={18}/>
            </a>
            <a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer"
            className="hover:scale-150 hover:text-purple-600 dark:hover:text-violet-400">
              <FaLinkedin size={18}/>
            </a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Links SocialMedia Desktop Mobile */}
            <div className="flex md:hidden items-center gap-3">
              <a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-violet-400 transition hover:scale-150"><FaGithub size={20}/>
              </a>
              <a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-violet-400 transition hover:scale-150"><FaLinkedin size={20} />
            </a>
            </div>
            {/* Theme */}
            <button onClick={toggleTheme}
              className="hover:text-purple-600 dark:hover:text-violet-400 transition cursor-pointer hover:scale-150">
              {darkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}
            </button>

            {/* Language */}
            <button onClick={toggleLanguage}
              className="hover:text-purple-600 dark:hover:text-violet-400 transition cursor-pointer hover:scale-150">
              <TbMessageLanguage size={20}/>
            </button>

            {/* Mobile menu */}
            <button onClick={() => setOpen(!open)}
              className="md:hidden hover:text-purple-600 dark:hover:text-violet-400 transition cursor-pointer hover:scale-150">
              {open ? <IoClose size={20}/> : <MdOutlineSegment size={20}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden">
          <div ref={menuRef} className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}
                className="font-semibold dark:hover:text-violet-400 hover:font-extrabold transition">
                {item.label}
              </a>
            ))}
            <DownloadCV language={language}/>
            <DownloadCertificate language={language}/>
          </div>
        </div>
      )}
    </>
  );
}