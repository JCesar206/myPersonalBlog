import { texts } from "../i18n/texts.js"
import { FiDownload } from "react-icons/fi";

export default function DownloadCV({ compact = false, language = "es" }) {
	const t = texts[language];

	return (
		<a href={`${import.meta.env.BASE_URL}cv_Fullstack_JulioCYañezM.pdf`}
			download className={`inline-flex items-center gap-2 font-bold transition
			${compact ? "text-indigo-600 hover:text-indigo-950" :
				"rounded-full bg-indigo-600 text-white text-xs px-6 py-3 shadow-lg hover:bg-indigo-950 cursor-pointer"}`}>
				<FiDownload size={18}/>
				{t.buttons.downloadCV}
				{!compact && t.download}
			</a>
	);
}