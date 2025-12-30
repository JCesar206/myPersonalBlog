import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const texts = {
	es: {
		copyright: "Mi portafolio personal.",
		rights: "Todos los derechos reservados.",
	},
	en: {
		copyright: "My personal portfolio.",
		rights: "All rights reserved."
	},
};

export default function Footer({ language = "es" }) {
	const t = texts[language];

	return (
	<footer className="w-full px-4 py-6">
	  <div className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-md rounded-full">
    	<div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-6">
					{/*Social icons*/}
					<div className="flex gap-6">
				<a 
					href="https://github.com/JCesar206"
					target="_blank" rel="noreferrer"
					className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
					>
          <FaGithub size={20}/>
        </a>
				<a 
					href="https://www.linkedin.com/in/jcesar206"
					target="_blank" rel="noreferrer"
					className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
					>
          <FaLinkedin size={20}/>
        </a>
        <a
					href="mailto:jcesar206@hotmail.com"
					className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition">
          <FaEnvelope size={20}/>
        </a>
				<a
					href="mailto:jcesary06@gmail.com"
					className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
					>
          <SiGmail size={20}/>
        </a>
			</div>
			{/*Copyright*/}
			<p className="text-sm text-gray-500 dark:text-gray-400 text-center font-bold">&copy; {new Date().getFullYear()} {t.copyright} | Juls | {t.rights}</p>
			</div>
		</div>
		</footer>
	);
}
