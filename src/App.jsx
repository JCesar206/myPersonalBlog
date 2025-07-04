import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Foto from './assets/mifoto.jpg';
import './App.css';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header />
      <main className='flex-1 px-6 py-10 space-y-16 max-w-3xl mx-auto'>
        <section className='text-center' id='sobre-mi'>
          <img src={Foto} alt='Julio César Yañez Mejia'
          className='w-40 h-40 mx-auto rounded-full shadow-lg object-cover hover:scale-105 transition-transform' />
          <h1 className='text-3xl font-bold mt-4'>¡Hola! Soy Julio César Yañez Mejia 👋</h1>
          <p className='mt-2 text-gray-700 font-bold'>Desarrollador web apasionado por crear soluciones HTML, CSS, JS, React, Tailwind, SQL.</p>
          <p className='mt-2 text-gray-600 font-bold'>Lic. en Informática Administrativa.</p>
        </section>
        <section id='habilidades'>
          <h2 className='text-2xl font-semibold mb-2'>🛠️ Habilidades</h2>
          <ul className='list-disc list-inside text-gray-700'>
            <li>HTML, CSS, JavaScript, SQL</li>
            <li>React, Tailwind CSS</li>
            <li>Proyectos responsivos</li>
          </ul>
        </section>
        <section id='proyectos'>
          <h2 className='text-2xl font-semibold mb-2'>📂 Proyectos</h2>
          <ul className='list-disc list-inside text-gray-700'>
            <li><a href='./components/PasswordManager.jsx' target='_blank' rel='noopener noreferrer'>Administrador de Contraseñas
              </a></li>
            <li>Carrito de compras en LocalStorage</li>
            <li>Generador de contraseñas seguras</li>
          </ul>
        </section>
        <section id='contacto'>
          <h2 className='text-2xl font-semibold mb-2'>📬 Contacto</h2>
          <p className='text-gray-700'>¿Te interesa colaborar o tienes alguna duda? ¡Escribeme a <a className='text-blue-600 underline' href='mailto:jcesar206@hotmail.com'>jcesar206@hotmail.com</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

