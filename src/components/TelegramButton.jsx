import { FaTelegramPlane } from "react-icons/fa";

const TelegramButton = () => {
	return (
		<a
			href="https://t.me/JulioMx20"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-4 bg-sky-400 hover:shadow-sky-600 text-white p-3 rounded-full shadow-lg ">
				<FaTelegramPlane size={20}/>
			</a>
	);
};

export default TelegramButton;