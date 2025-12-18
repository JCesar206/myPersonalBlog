export default function Contact({ language }) {
	const title = language === "es" ? "Contacto" : "Contact";
	
	return (
		<section id="about">
  		<div className="max-w-5xl mx-auto bg-blue-200 dark:bg-purple-800 rounded-xl p-2 shadow-2xl shadow-green-400">
			<h2 className="text-2xl font-bold text-blue-500 hover:text-blue-400 dark:text-white text-center">{title} 📧</h2>
			<p className="font-bold text-blue-600 dark:text-white text-center">Email:</p><a href="mailto:jcesaryy06@gmail.com"><p className="text-blue-500 font-bold hover:underline text-center dark:text-yellow-300">jcesary06@gmail.com</p></a>
			</div>
		</section>
	);
}