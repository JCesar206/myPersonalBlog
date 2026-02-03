import DownloadCV from "./DownloadCV";

const techStyles = {
	HTML: "tech-badge bg-orange-100 text-orange-700 ring-orange-300 font-semibold",
	CSS: "tech-badge bg-blue-100 text-blue-700 ring-blue-300 font-semibold",
	JavaScript: "tech-badge bg-yellow-100 text-yellow-700 ring-yellow-300 font-semibold",
	React: "tech-badge bg-cyan-100 text-cyan-700 ring-cyan-300 font-semibold",
	Vue: "tech-badge bg-emerald-100 text-emerald-700 ring-emerald-300 font-semibold",
	TypeScript: "tech-badge bg-indigo-100 text-indigo-700 ring-indigo-300 font-semibold",
	Java: "tech-badge bg-red-100 text-red-700 ring-red-300 font-semibold",
	"UX/UI": "tech-badge bg-purple-100 text-purple-700 ring-purple-300 font-semibold",
};

export default function Hero({ language }) {
	const title = language === "es" ? "Acerca de mi" : "About me";
	const text = {
es: [
  "Desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y accesibilidad. Especializado en ",
  "HTML", ", ","CSS", ", ","JavaScript"," y frameworks como ",
  "React", ", ","Vue", ", ","TypeScript"," y ","Java",
  ", con conocimientos en ","UX/UI"," y diseño responsivo.",
],
en: [
  "Web developer with experience creating websites and applications optimized for performance and accessibility. Specialized in ","HTML", ", ","CSS", ", ","JavaScript",
  " and frameworks such as ","React", ", ","Vue", ", ","TypeScript",
  " and ","Java",", with knowledge of ","UX/UI"," and responsive design.",
],
};

	return (
		<section
			id="hero"
			className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center"
		>

			{/*Content*/}
			<div className="text-center md:text-left space-y-6">
				<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-indigo-700 leading-tight">
					{title}
				</h1>

				<p className="text-gray-600 dark:text-gray-800 leading-relaxed max-w-xl mx-auto md:mx-0">
					{text[language].map((part, i) => (
						<span key={i} className={techStyles[part] || ""}>
							{part}
						</span>
					))}
				</p>

				{/*CTA*/}
				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
					<DownloadCV language={language}/>
				</div>
			</div>

			{/*Image*/}
			<div className="flex justify-center md:justify-start">
				<div className="relative">
					<img
						src="./myAvatar.jpg"
						alt="Avatar"
						className="w-80 h-100 md:w-72 md:h-72 rounded-3xl object-contain shadow-xl transition-transform duration-500 hover:scale-110"/>
					<span className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg font-extrabold">
						↗
					</span>
				</div>
			</div>
		</section>
	);
}