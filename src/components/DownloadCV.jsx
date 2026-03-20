import { texts } from "../i18n/texts.js"
import { FiDownload } from "react-icons/fi";

export default function DownloadCV({ compact = false, language = "es" }) {
	const t = texts[language];

	return (
		<a href={`${import.meta.env.BASE_URL}cv_Fullstack_JulioCYañezM.pdf`}
			download
			className={`inline-flex items-center gap-2 font-bold transition
			${compact ? 
				"text-indigo-600 hover:text-indigo-950" 
				: `rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white 
				text-xs px-6 py-3 shadow-lg hover:from-indigo-700 hover:to-pink-700 cursor-pointer hover:scale-105 transition-transform`}`}>
				<FiDownload size={18}/>
				{t.buttons.downloadCV}
				{!compact && t.download}
			</a>
	);
}