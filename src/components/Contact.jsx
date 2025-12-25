export default function Contact({ language }) {
	const title = language === "es" ? "Contacto" : "Contact";
	
	return (
		<section id="about">
  		<div className="max-w-5xl mx-auto bg-white dark:bg-purple-800 rounded-xl p-2 shadow-2xl shadow-green-400">
			<h2 className="text-2xl font-bold text-purple-500  dark:text-white text-center">{title}</h2>
			<p className="font-bold text-purple-500 dark:text-white text-center">Email:</p><a href="mailto:jcesary06@gmail.com"><p className="text-purple-900 font-bold hover:underline text-center dark:text-yellow-300">jcesary06@gmail.com</p></a>
			</div>
		</section>
	);
}