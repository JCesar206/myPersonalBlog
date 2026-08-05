import { texts } from "../i18n/texts.js"
import { FiDownload } from "react-icons/fi";

export default function DownloadCV({ compact = false, language = "es" }) {
	const t = texts[language];

	return (
		<a href={`${import.meta.env.BASE_URL}cv_Fullstack_JulioCYañezM.pdf`}
			download
			className={`inline-flex items-center gap-2 font-bold transition border-1
			${compact ? 
				"text-black font-semibold hover:bg-gray-300" 
				: `rounded-lg text-black text-xs font-semibold px-6 py-3 hover:bg-gray-300 shadow-lg cursor-pointer`}`}>
				<FiDownload size={18}/>
				{t.buttons.downloadCV}
				{!compact && t.download}
			</a>
	);
}