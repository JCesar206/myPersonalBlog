export default function Contact({ language }) {
	const title = language === "es" ? "Contacto" : "Contact";
	const subtitle = 
		language === "es" ? "¿Tienes un proyecto o una idea? Escríbeme." : "Have a project or an idea? Lets talk.";
	
	return (
		<section id="contact" className="space-y-6">
  		<h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-indigo-700">
				{title}
			</h2>

			<p className="text-center text-gray-600 dark:text-indigo-500 font-semibold">
				{subtitle}	
			</p>
			
			<div className="flex justify-center">
				<a href="mailto:jcesary06@gmail.com" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-900 transition">
					jcesary06@gmail.com
				</a>
			</div>
		</section>
	);
}