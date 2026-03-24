import { FaWhatsapp } from "react-icons/fa";
import { texts } from "../i18n/texts.js";

export default function WhatsAppIcon({ language = "es" }) {
	const contact = texts[language].contact;

	return (
		<a href="https://wa.me/527221828896" className="fixed bottom-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-green-400" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} title={contact.contactMe}/></a>
	);
}