import { useState } from "react";
import {DiHtml5, DiCss3, DiJavascript1, DiMysql, DiReact, DiGit, DiGithub, DiNodejsSmall} from "react-icons/di";
import {SiTailwindcss, SiPostman} from "react-icons/si";
import {VscVscodeInsiders} from "react-icons/vsc";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const texts = {
    es: {
      title: "Mi Blog Personal",
      home: "Bienvenido a mi Blog Personal",
      desc: "Aquí comparto mis proyectos y experiencia en desarrollo web.",
      about: "Sobre mí",
      aboutText: "Soy un desarrollador apasionado por la tecnología.\nSoy Lic. en Informática Administrativa.\nLas tecnologías que uso son las siguientes:",
      projects: "Proyectos",
      passManag: "Administrador de Contraseñas",
      ecommSimple: "Ecommerce Simple",
      passGene: "Generador de contraseñas",
      contact: "Contacto",
      contactText: "Puedes contactarme en los siguientes medios:",
      contactText1: "¿Te interesa colaborar o tienes alguna duda? ¡Escribeme a",
      copyRight: "Todos los derechos reservados"
    },
    en: {
      title: "My Personal Blog",
      home: "Welcome to my Personal Blog",
      desc: "Here I share my projects and web development experience.",
      about: "About Me",
      aboutText: "I am a developer passionate about technology.\nI have a degree in Administrative Computing.\nThe technologies I use are the following:",
      projects: "Projects",
      passManag: "Password Manager",
      ecommSimple: "Simple Ecommerce",
      passGene: "Password Generator",
      contact: "Contact",
      contactText: "You can reach me through the following channels:",
      contactText1: "Are you interested in collaborating or have any questions? Write to me at",
      copyRight: "All rights reserved"
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* HOME */}
      <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-3">
        <h1 className="text-3xl font-bold mb-3 hover:text-blue-500">{texts[language].home}</h1>
        <p className="mb-4 font-semibold">{texts[language].desc}</p>
        <img src="./myPhoto.jpg" alt="Profile" className="w-42 h-42 mx-auto rounded-full shadow-lg object-cover hover:scale-105 transition-transform" />
      </section>

      {/* ABOUT */}
      <section id="about">
          <h2 className="text-2xl font-semibold mb-2 dark:text-white text-center hover:text-blue-500 py-3">🛠️ {texts[language].about}</h2>
          <p className="text-sm font-semibold mb-2 dark:text-white text-center py-2">{texts[language].aboutText}</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <DiHtml5 className="hover:text-blue-700" size={30} />
            <DiCss3 className="hover:text-blue-700" size={30} />
            <DiJavascript1 className="hover:text-blue-700" size={30} />
            <DiReact className="hover:text-blue-700" size={30} />
            <SiTailwindcss className="hover:text-blue-700" size={30} />
            <DiMysql className="hover:text-blue-700" size={30} />
            <DiNodejsSmall className="hover:text-blue-700" size={30} />
            <DiGit className="hover:text-blue-700" size={30} />
            <DiGithub className="hover:text-blue-700" size={30} />
            <VscVscodeInsiders className="hover:text-blue-700" size={30} />
            <SiPostman className="hover:text-blue-700" size={30} />
          </div>
        </section>

      {/* PROJECTS */}
      <section id="proyects">
          <h2 className="text-2xl font-semibold mb-2 dark:text-white py-3 text-center hover:text-blue-500">📂 {texts[language].projects}</h2>
          <ul className="list-inside text-gray-700 dark:text-white text-center py-3">
            <li><a href="https://jcesar206.github.io/passwordManager/"
            target="_blank" rel="noopener noreferrer"
            className="dark:text-white underline font-bold hover:text-blue-500"
            > {texts[language].passManag}
            </a></li>
            <li><a href="https://jcesar206.github.io/ecommerce-react/"
            target="_blank" rel="noopener noreferrer"
            className="dark:text-white underline font-bold hover:text-blue-500"
            > {texts[language].ecommSimple}
            </a></li>
            {/* <li> {texts[language].passGene}</li> */}
          </ul>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2 dark:text-white py-3 text-center hover:text-blue-500">📬 {texts[language].contact}</h2>
          <p className="text-gray-700 dark:text-white text-center font-semibold py-3">{texts[language].contactText1} <a className="text-blue-600 underline" href="mailto:jcesar206@hotmail.com">jcesar206@hotmail.com</a></p>
        </section>

      <Footer />
    </div>
  );
}

export default App;