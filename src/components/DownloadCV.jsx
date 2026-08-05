import { texts } from "../i18n/texts.js"
import { FiDownload } from "react-icons/fi";

export default function DownloadCV({ compact = false, language = "es" }) {
	const t = texts[language];

	return (
		<a href={`${import.meta.env.BASE_URL}cv_Fullstack_JulioCYañezM.pdf`}
			download
			className={`inline-flex items-center gap-2 font-bold transition border-1 rounded-lg p-2 pl-4
			${compact ? 
				"text-black font-semibold hover:bg-gray-300 cursor-pointer rounded border-full" 
				: `text-black dark:text-white font-semibold shadow-lg hover:bg-gray-300 hover:text-gray-800 border-full cursor-pointer`}`}>
				<FiDownload size={18}/>
				{t.buttons.downloadCV}
				{!compact && t.download}
			</a>
	);
}