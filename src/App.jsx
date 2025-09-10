import { useState } from "react";
import {DiHtml5, DiCss3, DiJavascript1, DiMysql, DiReact, DiGit, DiGithub, DiNodejsSmall} from "react-icons/di";
import {SiTailwindcss, SiPostman, SiTypescript, SiJest } from "react-icons/si";
import {VscVscodeInsiders} from "react-icons/vsc";
import { FaReact, FaVuejs } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const texts = {
    es: {
      title: "Mi Blog Personal", home: "Bienvenido a mi Blog Personal",
      desc: "Aquí comparto mis proyectos y experiencia en desarrollo web.", about: "Sobre mí",
      aboutText: `Desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y
      accesibilidad. Especializado en HTML, CSS, JavaScript y frameworks como React, Vue y TypeScript, con
      conocimientos en UX/UI y diseño responsivo. Busco una oportunidad en una empresa que valore la innovación
      y el desarrollo de soluciones digitales eficientes.`,
      projects: "Proyectos", passManag: "Administrador de Contraseñas", ecommerce: "Ecommerce Loco",
      passGene: "Generador de contraseñas", contact: "Contacto", contactText: "Puedes contactarme en los siguientes medios:",
      contactText1: "¿Te interesa colaborar o tienes alguna duda? ¡Escribeme a", copyRight: "Todos los derechos reservados",
      sendEmail: "Enviame un correo", seeProject: "Ver proyecto", madeWith: "Hecho con:",  
      descProjec1: "Aplicación administradora de contraseñas, el usuario puede colocar el sitio, usuario y contraseña y la app guarda localmente su información de forma segura.",
      descProjec2: "Comercio electronico que permite sumar articulos al carrito, suma la cantidad total y descuenta los articulos del stock o los devuelve segun sea el caso. Simula una compra completa.",  
      tecnologies: "Conocimiento y uso de las siguientes tecnologias:"
    },
    en: {
      title: "My Personal Blog", home: "Welcome to my Personal Blog", desc: "Here I share my projects and web development experience.",
      about: "About Me", aboutText: `Web developer with experience creating websites and applications optimized for performance and 
      accessibility. Specialized in HTML, CSS, JavaScript, and frameworks such as React, Vue, and TypeScript, with knowledge of UX/UI 
      and responsive design. I am looking for an opportunity at a company that values ​​innovation and the development of efficient 
      digital solutions.`, projects: "Projects", passManag: "Password Manager", ecommerce: "Crazy Ecommerce", 
      passGene: "Password Generator", contact: "Contact", contactText: "You can reach me through the following channels:",
      contactText1: "Are you interested in collaborating or have any questions? Write to me at",
      copyRight: "All rights reserved", sendEmail: "Send me an email", madeWith: "Made with:", 
      titlePro1: "Password Manager", descProjec1: "Password manager application, the user can enter the site, username and password and the app saves their information locally and securely.", 
      titlePro2: "Crazy Ecommerce", descProjec2: "E-commerce that allows you to add items to your cart, add up the total amount, and deduct items from stock or return them as appropriate. Simulates a complete purchase.", 
      tecnologies: "Knowledge and use of the following technologies:", 
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-950 text-white" : "bg-white text-black"}>
      <Navbar language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

<main className="container mx-auto p-6 lg:p-16"> {/* About me */}
  <section id="about" className="min-h-[80vh] flex flex-col items-center justify-center text-center pb-12 px-4 py-3">
    <h1 className="style-header pb-12">😊 {texts[language].about}</h1>

    <div className="mb-6 w-45 h-45 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-700 dark:border-purple-700">
      <img src="./myPhoto.jpg" alt="myPhoto"
        className="w-72 h-72 object-cover scale-105 hover:scale-110 transition-transform duration-300 ease-in-out" />
      </div>
          
    <p className="text-complete pb-16"> {texts[language].aboutText}</p>
    <p className="text-complete text-2xl pb-3 pt-3">🛠️ {texts[language].tecnologies}</p><br/><br/>
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-7 gap-3 pb-12">
        <DiHtml5 className="button-style" size={30} />
        <DiCss3 className="button-style" size={30} />
        <DiJavascript1 className="button-style" size={30} />
        <DiReact className="button-style" size={30} />
        <SiTailwindcss className="button-style" size={30} />
        <DiMysql className="button-style" size={30} />
        <DiNodejsSmall className="button-style" size={30} />
        <DiGit className="button-style" size={30} />
        <DiGithub className="button-style" size={30} />
        <VscVscodeInsiders className="button-style" size={30} />
        <SiPostman className="button-style" size={30} />
        <FaVuejs className="button-style" size={30} />
        <SiTypescript className="button-style" size={30} />
        <SiJest className="button-style" size={30} />
      </div>
    </div>
  </section>

      <section id="projects" className="py-16 bg-blue-50 rounded-lg shadow-xl p-8 mb-12 dark:bg-gray-900/90">
          <h2 className="style-header pt-6 pb-6 text-center">📱 {texts[language].projects}</h2>
          
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl">
              
              {/* Tarjeta de Proyecto 1 - Convertida a Enlace Clickeable */}
              <a href="https://jcesar206.github.io/passwordManager/" target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-lg shadow-md hover:shadow-2xl shadow-blue-500 dark:shadow-purple-800 transition-shadow duration-300 ease-in-out block overflow-hidden">
                <img src="./passwordManager01.jpg" alt="Proyecto 1" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-950 text-center">{texts[language].passGene}</h3>
                  <p className="text-gray-700 text-sm">{texts[language].descProjec1}</p>
                <div className="style-button-card"><FaReact size={24}/><SiTailwindcss size={24}/></div>
                </div>
              </a>
              {/* Tarjeta de Proyecto 2 - Convertida a Enlace Clickeable */}
              <a href="https://jcesar206.github.io/ecommerce-react/" target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-lg shadow-md hover:shadow-2xl shadow-blue-500 dark:shadow-purple-800 transition-shadow duration-300 ease-in-out block overflow-hidden">
                <img src="./ecommerceSimple01.jpg" alt="Proyecto 2" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-950 text-center">{texts[language].ecommerce}</h3>
                  <p className="text-gray-700 text-sm">{texts[language].descProjec2}</p>
                <div className="style-button-card"><FaReact size={24}/><SiTailwindcss size={24}/></div>
                </div>
              </a>
              {/* Tarjeta de Proyecto 3 - Convertida a Enlace Clickeable */}
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-lg shadow-md hover:shadow-2xl shadow-blue-500 dark:shadow-purple-800 transition-shadow duration-300 ease-in-out block overflow-hidden">
                <img src="./next.jpg" alt="Proyecto 2" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{texts[language].project3}</h3>
                  <p className="text-gray-700 text-sm">{texts[language].descProjec3}</p>
                <div className="style-button-card"><FaVuejs size={24}/><SiTailwindcss size={24}/></div>
                </div>
              </a>
              {/* Tarjeta de Proyecto 4 - Convertida a Enlace Clickeable */}
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-lg shadow-md hover:shadow-2xl shadow-blue-500 dark:shadow-purple-800 transition-shadow duration-300 ease-in-out block overflow-hidden">
                <img src="./next.jpg" alt="Proyecto 2" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{texts[language].project4}</h3>
                  <p className="text-gray-700 text-sm">{texts[language].descProjec4}</p>
                <div className="style-button-card"><SiTypescript size={24}/><SiTailwindcss size={24}/></div>
                </div>
              </a>
              {/* Tarjeta de Proyecto 4 - Convertida a Enlace Clickeable */}
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-lg shadow-md hover:shadow-2xl shadow-blue-500 dark:shadow-purple-800 transition-shadow duration-300 ease-in-out block overflow-hidden">
                <img src="./next.jpg" alt="Proyecto 2" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{texts[language].project5}</h3>
                  <p className="text-gray-700 text-sm">{texts[language].descProjec5}</p>
                <div className="style-button-card"><FaReact size={24}/><SiTailwindcss size={24}/></div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-[28vh] bg-gray-600/10 dark:bg-gray-900/90 rounded-4xl flex flex-col items-center justify-center text-center pb-12 px-4 py-3">
          <div className="">
            <h2 className="style-header">📬 {texts[language].contact}</h2>
            <p className="text-complete">{texts[language].contactText}</p><br/>
            <a href="mailto:jcesar206@hotmail.com"
              className="bg-white text-indigo-800 hover:bg-blue-200 px-6 py-2 dark:text-purple-800 dark:hover:bg-purple-300 rounded-full text-sm font-bold shadow-md transition-colors duration-300 ease-in-out">
              {texts[language].sendEmail}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;