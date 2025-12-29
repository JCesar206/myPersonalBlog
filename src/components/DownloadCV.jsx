import { FiDownload } from "react-icons/fi";

export default function DownloadCV() {
	return (
		<a
			href="/cvJulioCesarYanezMEnglish.pdf"
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center text-center gap-2 rounded-full bg-indigo-600 text-white px-6 py-3 font-bold shadow-lg hover:bg-indigo-700 transition">
				<FiDownload size={18}/>
				Descargar CV
			</a>
	);
}