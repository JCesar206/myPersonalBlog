import DownloadCV from "./DownloadCV";

const techStyles = {
	HTML: "font-mono font-bold text-orange-600",
	CSS: "font-mono font-bold text-blue-600",
	JavaScript: "font-mono font-bold text-yellow-500",
	React: "font-mono font-bold text-cyan-500",
	Vue: "font-mono font-bold text-emerald-500",
	TypeScript: "font-mono font-bold text-indigo-600",
	"UX/UI": "font-semibold text-purple-600",
};

export default function Hero({ language }) {
	const title = language === "es" ? "Acerca de mi" : "About me";
	const text = {
  es: [
    "Desarrollador web con experiencia en la creación de sitios y aplicaciones optimizadas para rendimiento y accesibilidad. Especializado en ",
    "HTML",", ","CSS",", ","JavaScript",
    " y frameworks como ",
    "React",", ","Vue"," y ","TypeScript",
    ", con conocimientos en ","UX/UI",
    " y diseño responsivo.",
  ],
  en: [
    "Web developer with experience creating websites and applications optimized for performance and accessibility. Specialized in ",
    "HTML",", ","CSS",", ","JavaScript",
    " and frameworks such as ",
    "React",", ","Vue"," and ","TypeScript",
    ", with knowledge of ","UX/UI",
    " and responsive design.",
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