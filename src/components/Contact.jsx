export default function Contact({ language }) {
	const title = language === "es" ? "Contacto" : "Contact";
	
	return (
		<section id="about" className="pt-18 pb-10 px-4">
  		<div className="max-w-5xl mx-auto pb-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-2 shadow-2xl shadow-purple-800">
			<h2 className="text-2xl font-bold mb-6 text-blue-500 hover:text-blue-800 dark:text-white text-center">{title} 📧</h2>
			<p className="font-bold text-blue-600 dark:text-white text-center">Email:</p><a href="mailto:jcesar206@hotmail.com"><p className="text-blue-500 font-bold hover:underline text-center">jcesar206@hotmail.com</p></a>
			</div>
		</section>
	);
}