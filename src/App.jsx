import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CurrentJob from "./components/CurrentJob";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import TelegramButton from "./components/TelegramButton";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  // Sincroniza la clase "dark" en el nodo raíz de HTML para Tailwind CSS
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Barra de navegación fija */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      {/* Contenedor principal con espaciado superior para el Navbar fijo */}
      <main className="max-w-5xl mx-auto px-4 pt-28 pb-16 space-y-16">
        {/* HERO / SOBRE MÍ */}
        <Section id="hero">
          <Hero language={language} />
        </Section>
        {/* TECNOLOGÍAS Y HABILIDADES */}
        <Section id="tech">
          <Technologies language={language} />
        </Section>
        {/* PROYECTOS DESTACADOS */}
        <Section id="projects">
          <Projects language={language} />
        </Section>
        {/* SECCIÓN DE CONTACTO Y EXPERIENCIA ACTUAL */}
        <Section id="contact">
          <div className="space-y-12 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <Contact language={language} />
            <CurrentJob language={language} />
            <ContactForm language={language} />
          </div>
        </Section>
      </main>
      {/* PIE DE PÁGINA */}
      <Footer language={language} />
      {/* BOTONES FLOTANTES DE ACCESO RÁPIDO */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <WhatsAppIcon language={language} />
        <TelegramButton language={language} />
      </div>
    </div>
  );
}

export default App;