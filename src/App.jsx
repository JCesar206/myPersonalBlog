import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import TelegramButton from "./components/TelegramButton";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 bg-gradient-to-br from-purple-200 to-indigo-500 dark:from-indigo-800 dark:to-black">
      <div className="flex items-center flex-col">

        <Navbar
          setDarkMode={setDarkMode}
          setLanguage={setLanguage}
          language={language}
          darkMode={darkMode}
        />

        <div className="h-26"/>

        <main className="max-w-5xl mx-auto px-2 space-y-8">

          {/* ABOUT – editorial / serif */}
          <Section id="hero" className="font-serif dark:bg-indigo-100">
            <Hero language={language}/>
          </Section>

          {/* TECH + CONTACT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* TECHNOLOGIES – tech / mono */}
            <Section id="tech" className="font-mono dark:bg-gray-100/90">
              <Technologies language={language} />
            </Section>

            {/* CONTACT – clean / sans */}
            <Section id="contact" className="font-sans dark:bg-indigo-100">
              <Contact language={language}/>
              <ContactForm language={language}/>
            </Section>

          </div>

          {/* PROJECTS – bold / modern */}
          <Section id="projects" className="font-sans dark:bg-gray-100/90">
            <Projects language={language}/>
          </Section>

        </main>

        <div className="mt-10">
          <Footer language={language}/>
        </div>

        <WhatsAppIcon/>
        <TelegramButton/>
      </div>
    </div>
  );
}

export default App;