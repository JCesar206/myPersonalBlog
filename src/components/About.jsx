export default function About({ language }) {
	const title = language === "es" ? "Acerca de mi" : "About me";
	const text = {
		es: "Desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y accesibilidad. Especializado en HTML, CSS, JavaScript y frameworks como React, Vue y TypeScript, con conocimientos en UX/UI y diseño responsivo. Busco una oportunidad en una empresa que valore la innovación y el desarrollo de soluciones digitales eficientes.",
		en: "Web developer with experience creating websites and applications optimized for performance and accessibility. Specialized in HTML, CSS, JavaScript, and frameworks such as React, Vue, and TypeScript, with knowledge of UX/UI and responsive design. I am looking for an opportunity at a company that values ​​innovation and the development of efficient digital solutions."
	};

	return (
		<section id="about" className="pt-20 pb-8 px-4">
  			<div className="max-w-5xl mx-auto bg-blue-100 dark:bg-gray-800 rounded-xl p-2 shadow-2xl shadow-blue-700">
					<h2 className="text-2xl font-bold mb-6 text-blue-600 hover:text-blue-800 dark:text-white text-center">{title} 😉</h2>
						<img src="./myPhoto.jpg" alt="Foto Profesional" className="mx-auto rounded-full w-40 h-40 object-cover transition-transform duration-500 hover:scale-105 shadow-2xl shadow-blue-800" />
							<p className="mt-4 pt-8 mb-4 text-lg font-semibold text-blue-600 dark:text-white">{text[language]}</p>
				</div>
		</section>
	);
}