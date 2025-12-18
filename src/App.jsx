import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-inter">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-800 dark:via-purple-800 dark:to-black">

        <Navbar
          setDarkMode={setDarkMode}
          setLanguage={setLanguage}
          language={language}
          darkMode={darkMode}
        />

        <div className="h-32" />

        <main className="max-w-5xl mx-auto px-4 space-y-28">

          {/* ABOUT – editorial / serif */}
          <section id="about" className="font-serif rounded-3xl p-12 bg-gradient-to-br from-indigo-500 to-violet-600 dark:from-indigo-600 dark:to-violet-700 text-white shadow-xl shadow-indigo-500/30">
            <About language={language} />
          </section>

          {/* TECH + CONTACT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* TECHNOLOGIES – tech / mono */}
            <section id="tech" className="font-mono rounded-3xl p-10 bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-teal-600 text-zinc-900 shadow-xl shadow-emerald-500/30">
              <Technologies language={language} />
            </section>

            {/* CONTACT – clean / sans */}
            <section id="contact" className="font-sans rounded-3xl p-10 bg-gradient-to-br from-amber-300 to-orange-500 dark:from-amber-500 dark:to-orange-600 text-zinc-900 shadow-xl shadow-orange-500/30">
              <Contact language={language} />
              <ContactForm/>
            </section>

          </div>

          {/* PROJECTS – bold / modern */}
          <section id="projects" className="font-sans rounded-3xl p-12bg-gradient-to-br from-fuchsia-500 to-pink-600
            dark:from-fuchsia-600 dark:to-pink-600 text-white shadow-xl shadow-pink-500/30">
            <Projects language={language} />
          </section>

        </main>

        <div className="mt-32">
          <Footer />
        </div>

        <WhatsAppIcon />
      </div>
    </div>
  );
}

export default App;