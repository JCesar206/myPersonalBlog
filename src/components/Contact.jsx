import { texts } from "../i18n/texts.js";
export default function Contact({ language }) {
	const t = texts[language];
	
	return (
		<section id="contact" className="space-y-6">
  		<h2
		className="text-center text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x hover:scale-105">
				{t.contact.title}
			</h2>
			<p className="text-center text-gray-600 dark:text-indigo-500 font-semibold">
				{t.contact.subtitle}	
			</p>
			<div className="flex justify-center">
				<a href="mailto:jcesary06@gmail.com" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-900 transition" title={t.contact.writeToMe}>
					jcesary06@gmail.com
				</a>
			</div>
		</section>
	);
}