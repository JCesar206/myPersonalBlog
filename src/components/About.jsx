 {/* Busco una oportunidad en una empresa que valore la innovación y el desarrollo de soluciones digitales eficientes. */}
 {/*  I am looking for an opportunity at a company that values ​​innovation and the development of efficient digital solutions. */}
export default function About({ language }) {
	const title = language === "es" ? "Acerca de mi" : "About me";
	const text = {
		es: "Desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y accesibilidad. Especializado en HTML, CSS, JavaScript y frameworks como React, Vue y TypeScript, con conocimientos en UX/UI y diseño responsivo.",
		en: "Web developer with experience creating websites and applications optimized for performance and accessibility. Specialized in HTML, CSS, JavaScript, and frameworks such as React, Vue, and TypeScript, with knowledge of UX/UI and responsive design."
	};

	return (
		<section id="about">
  			<div className="max-w-5xl mx-auto bg-blue-200/70 dark:bg-gray-800/80 rounded-xl shadow-2xl shadow-blue-800/90 pb-8">
					<h2 className="text-2xl font-bold mb-4 text-blue-600 hover:text-blue-400 dark:text-white text-center">{title} 😉</h2>
						<img src="./myPhoto.jpg" alt="Foto Profesional" className="mx-auto rounded-full w-40 h-40 object-cover transition-transform duration-500 hover:scale-105 shadow-2xl shadow-blue-900" />
							<p className="font-inter mt-4 pt-1 mb-4 text-lg font-semibold text-blue-600 dark:text-white p-3">{text[language]}</p>
				</div>
		</section>
	);
}