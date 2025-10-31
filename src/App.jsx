import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("es")

  // Aplica la clase "dark" al <html> cuando cambia el tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar
          setDarkMode={setDarkMode}
          setLanguage={setLanguage}
          language={language}
          darkMode={darkMode}
        />

        {/* Contenido principal */}
        <main className="w-full max-w-6xl mx-auto px-4 mt-20 space-y-4 min-h-screen">
          {/* Sección Acerca */}
          <section id="about" className="-pt-2 -pb-14">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow">
              <About language={language} />
            </div>
          </section>

          {/* Sección Tecnologías */}
          <section id="tech" className="-pt-2 -pb-10">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow">
              <Technologies language={language} />
            </div>
          </section>

          {/* Sección Proyectos */}
          <section id="projects" className="-pt-2 -pb-10">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow">
              <Projects language={language} />
            </div>
          </section>

          {/* Sección Contacto */}
          <section id="contact" className="-pt-2 -pb-10">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow">
              <Contact language={language} />
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Icono flotante de WhatsApp */}
        <WhatsAppIcon />
      </div>
    </div>
  )
}

export default App;