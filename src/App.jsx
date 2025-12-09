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
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark font-inter" : "font-inter"}>
      <div className="
        min-h-screen 
        bg-gradient-to-br from-blue-200/60 via-purple-200/50 to-pink-200/40 
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black
      ">

        {/* Navbar */}
        <Navbar
          setDarkMode={setDarkMode}
          setLanguage={setLanguage}
          language={language}
          darkMode={darkMode}
        />

        {/* Layout principal */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 pt-24 pb-6">

          {/* About */}
          <section
            id="about"
            className="
              rounded-3xl p-6
              backdrop-blur-xl bg-white/20 dark:bg-white/10
              border border-white/30 dark:border-white/10
              shadow-xl shadow-black/10
            "
          >
            <About language={language} />
          </section>

          {/* Technologies + Contact */}
          <div className="flex flex-col gap-6">

            <section
              id="tech"
              className="
                rounded-3xl p-6
                backdrop-blur-xl bg-white/20 dark:bg-white/10
                border border-white/30 dark:border-white/10
                shadow-xl shadow-black/10
              "
            >
              <Technologies language={language} />
            </section>

            <section
              id="contact"
              className="
                rounded-3xl p-6
                backdrop-blur-xl bg-white/20 dark:bg-white/10
                border border-white/30 dark:border-white/10
                shadow-xl shadow-black/10
              "
            >
              <Contact language={language} />
            </section>

          </div>
        </div>

        {/* Projects */}
        <div className="max-w-6xl mx-auto p-4 mt-8">
          <section
            id="projects"
            className="
              rounded-3xl p-6
              backdrop-blur-xl bg-white/20 dark:bg-white/10
              border border-white/30 dark:border-white/10
              shadow-xl shadow-black/10
            "
          >
            <Projects language={language} />
          </section>
        </div>

        <Footer />
        <WhatsAppIcon />
      </div>
    </div>
  );
}

export default App;