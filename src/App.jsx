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
      aboutText: "Desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y accesibilidad. Especializado en HTML, CSS, JavaScript y frameworks como React, Vue y TypeScript, con conocimientos en UX/UI y diseño responsivo. Busco una oportunidad en una empresa que valore la innovación y el desarrollo de soluciones digitales eficientes.", projects: "Proyectos", passManag: "Administrador de Contraseñas", ecommerce: "Ecommerce Loco", passGene: "Generador de contraseñas", contact: "Contacto", contactText: "Puedes contactarme en los siguientes medios:", contactText1: "¿Te interesa colaborar o tienes alguna duda? ¡Escribeme a", copyRight: "Todos los derechos reservados",
      sendEmail: "Enviame un correo", seeProject: "Ver proyecto", madeWith: "Hecho con:",  
      descPro1: "Aplicación administradora de contraseñas, el usuario puede colocar el sitio, usuario y contraseña y la app guarda localmente su información de forma segura.", descPro2: "Comercio electronico que permite sumar articulos al carrito, suma la cantidad total y descuenta los articulos del stock o los devuelve segun sea el caso. Simula una compra completa.", titlePro3: "", descPro3: "", titlePro4: "Finanzas Personales", descPro4: "Finanzas personales Aplicacion de finanzas personales hecha con Vue + Tailwind permite gestionar de forma simple los gastos e ingresos a una cuenta.", titlePro5: "Mini Red Social", descPro5: "Con esta app puedes subir imagenes locales, comentarios y colocarles emojis simples al igual que editar y eliminar el comentario. Disfruta esta mini red social.",
      tecnologies: "Conocimiento y uso de las siguientes tecnologias:", goToPage: "Ir a la página", home1: "Bienvenido",
    },
    en: {
      title: "My Personal Blog", home: "Welcome to my Personal Blog", desc: "Here I share my projects and web development experience.",about: "About Me", aboutText: "Web developer with experience creating websites and applications optimized for performance and accessibility. Specialized in HTML, CSS, JavaScript, and frameworks such as React, Vue, and TypeScript, with knowledge of UX/UI and responsive design. I am looking for an opportunity at a company that values ​​innovation and the development of efficient digital solutions.", projects: "Projects", passManag: "Password Manager", ecommerce: "Crazy Ecommerce", passGene: "Password Generator", contact: "Contact", contactText: "You can reach me through the following channels:",contactText1: "Are you interested in collaborating or have any questions? Write to me at", copyRight: "All rights reserved", sendEmail: "Send me an email", madeWith: "Made with:", titlePro1: "Password Manager", descPro1: "Password manager application, the user can enter the site, username and password and the app saves their information locally and securely.", titlePro2: "Crazy Ecommerce", descPro2: "E-commerce that allows you to add items to your cart, add up the total amount, and deduct items from stock or return them as appropriate. Simulates a complete purchase.", titlePro3: "", descPro3: "", titlePro4: "Personal Finance", descPro4: "Personal Finance.A personal finance app built with Vue + Tailwind that allows you to easily manage expenses and income in an account.", titlePro5: "Mini Social Media", descPro5: "With this app, you can upload local images and comments, add simple emojis, and edit and delete comments. Enjoy this mini social network.", tecnologies: "Knowledge and use of the following technologies:", goToPage: "Go to page", home1: "Welcome",
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-950 text-white" : "bg-white text-black"}>
      <Navbar language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

<main className="container mx-auto p-6 lg:p-16"> {/* About me */}
  <section id="home" className="items-center text-center font-extrabold text-4xl text-blue-950 dark:text-white hover:text-purple-400 pb-6">{texts[language].home1} 😎</section>
  <section id="about" className="min-h-[80vh] flex flex-col items-center justify-center text-center pb-12 px-4 py-3">
    <h1 className="style-header pb-12">😊 {texts[language].about}</h1>

    <div className="mb-6 w-45 h-45 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-700 dark:border-purple-700">
      <img src="./myPhoto.jpg" alt="myPhoto"
        className="w-72 h-72 object-cover scale-105 hover:scale-110 transition-transform duration-300 ease-in-out" />
      </div>
          
    <p className="text-complete pb-16"> {texts[language].aboutText}</p>
    <p className="text-complete text-2xl pb-2 pt-2">🛠️ {texts[language].tecnologies}</p><br/><br/>
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-7 gap-3 pb-12">
        <DiHtml5 className="icon-tech-style" size={30} title="HTML5"/>
        <DiCss3 className="icon-tech-style" size={30} title="CSS3"/>
        <DiJavascript1 className="icon-tech-style" size={30} title="JavaScript"/>
        <DiReact className="icon-tech-style" size={30} title="React"/>
        <SiTailwindcss className="icon-tech-style" size={30} title="Tailwind CSS"/>
        <DiMysql className="icon-tech-style" size={30} title="MySQL"/>
        <DiNodejsSmall className="icon-tech-style" size={30} title="Node.js"/>
        <DiGit className="icon-tech-style" size={30} title="Git"/>
        <DiGithub className="icon-tech-style" size={30} title="Github"/>
        <VscVscodeInsiders className="icon-tech-style" size={30} title="VS Code"/>
        <SiPostman className="icon-tech-style" size={30} title="Postman"/>
        <FaVuejs className="icon-tech-style" size={30} title="Vue"/>
        <SiTypescript className="icon-tech-style" size={30} title="TypeScript"/>
        <SiJest className="icon-tech-style" size={30} title="Jest"/>
      </div>
    </div>
  </section>

  <section id="projects" className="py-16 bg-blue-50 rounded-lg shadow-xl p-8 mb-12 dark:bg-gray-900/90">
    <h2 className="style-header pt-3 pb-3 text-center">📱 {texts[language].projects}</h2>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 p-4">
{/* Proyecto 1 */}
  <div class="relative max-w-sm rounded-lg overflow-hidden bg-white shadow-md shadow-purple-800 hover:shadow-xl transform transition duration-300 hover:scale-105">
    <img class="w-full h-48 object-cover" src="./passwordManager01.jpg" alt="Password Manager" />
    
    <div class="px-6 py-4 hover:shadow-purple-500 shadow-2xl">
      <div class="font-bold text-indigo-900 text-xl mb-2">{texts[language].titlePro1}</div>
      <p class="text-indigo-800 font-semibold text-base mb-4">
        {texts[language].descPro1}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-4 mb-16 justify-center style-icon-card">
        <FaReact size={18} title="React"/>
        <SiTailwindcss size={18} title="Tailwind CSS"/>
      </div>
    </div>
    
    <a href="https://jcesar206.github.io/passwordManager/" target="_blank" class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
      <button class="style-btn-gotopage">
        {texts[language].goToPage}
      </button>
    </a>
  </div>
  {/* Proyecto 2 */}
  <div class="relative max-w-sm rounded-lg overflow-hidden bg-white shadow-md shadow-purple-800 hover:shadow-xl transform transition duration-300 hover:scale-105">
    <img class="w-full h-48 object-cover" src="./ecommerceSimple01.jpg" alt="Ecommerce Loco" />
    
    <div class="px-6 py-4">
      <div class="font-bold text-indigo-900 text-xl mb-2">{texts[language].titlePro2}</div>
      <p class="text-indigo-800 font-semibold text-base mb-4">
        {texts[language].descPro2}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-4 mb-16 justify-center style-icon-card">
        <FaReact size={18} title="React"/>
        <SiTailwindcss size={18} title="Tailwind CSS"/>
      </div>
    </div>
    
    <a href="https://jcesar206.github.io/ecommerce-react/" target="_blank" class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
      <button class="style-btn-gotopage">
        {texts[language].goToPage}
      </button>
    </a>
  </div>
{/* Proyecto 3 */}
  <div class="relative max-w-sm rounded-lg overflow-hidden bg-white shadow-md shadow-purple-800 hover:shadow-xl transform transition duration-300 hover:scale-105">
    <img class="w-full h-48 object-cover" src="./next.jpg" alt="Próximamente" />
    
    <div class="px-6 py-4">
      <div class="font-bold text-indigo-900 text-xl mb-2">{texts[language].titlePro3}</div>
      <p class="text-indigo-800 font-semibold text-base mb-4">
        {texts[language].descPro3}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-4 mb-16 justify-center style-icon-card">
        <FaReact size={18} title="React"/>
        <SiTailwindcss size={18} title="Tailwind CSS"/>
      </div>
    </div>
    
    <a href="#" class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
      <button class="style-btn-gotopage">
        {texts[language].goToPage}
      </button>
    </a>
  </div>
{/* Proyecto 4 */}
  <div class="relative max-w-sm rounded-lg overflow-hidden bg-white shadow-md shadow-purple-800 hover:shadow-xl transform transition duration-300 hover:scale-105">
    <img class="w-full h-48 object-cover" src="./personalFinance01.jpg" alt="Personal Finance" />
    
    <div class="px-6 py-4">
      <div class="font-bold text-indigo-900 text-xl mb-2">{texts[language].titlePro4}</div>
      <p class="text-indigo-800 font-semibold text-base mb-4">
        {texts[language].descPro4}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-4 mb-16 justify-center style-icon-card">
        <FaVuejs size={18} title="Vue"/>
        <SiTailwindcss size={18} title="Tailwind CSS"/>
      </div>
    </div>
    
    <a href="https://jcesar206.github.io/personalFinanceVue/" target="_blank" class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
      <button class="style-btn-gotopage">
        {texts[language].goToPage}
      </button>
    </a>
  </div>
{/* Proyecto 5 */}
  <div class="relative max-w-sm rounded-lg overflow-hidden bg-white shadow-md shadow-purple-800 hover:shadow-xl transform transition duration-300 hover:scale-105">
    <img class="w-full h-48 object-cover" src="./miniSocialMedia01.jpg" alt="Próximamente" />
    
    <div class="px-6 py-4">
      <div class="font-bold text-indigo-900 text-xl mb-2">{texts[language].titlePro5}</div>
      <p class="text-indigo-800 font-semibold text-base mb-4">
        {texts[language].descPro5}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-4 mb-16 justify-center style-icon-card">
        <SiTypescript size={18} title="TypeScript"/>
        <SiTailwindcss size={18} title="Tailwind CSS"/>
      </div>
    </div>
    
    <a href="https://jcesar206.github.io/miniSocialMediaTS/" target="_blank" class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] flex justify-center">
      <button class="style-btn-gotopage">
        {texts[language].goToPage}
      </button>
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