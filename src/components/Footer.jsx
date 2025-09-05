import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {

	return (
		<footer className="bg-blue-950 text-white bottom-0 left-0 py-4 w-full">
			<div className="flex justify-center space-x-6 mb-2">
				<a href="https://github.com/JCesar206" target="_blank" rel="noreferrer">
          <FaGithub  className="hover:text-blue-400 transition-colors" size={20}/>
        </a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer">
          <FaLinkedin  className="hover:text-blue-400 transition-colors" size={20}/>
        </a>
        <a href="mailto:jcesar206@hotmail.com">
          <FaEnvelope  className="hover:text-blue-400 transition-colors" size={20}/>
        </a>
			</div>
			<p className="text-sm text-center text-white font-bold gover:text-blue-300">&copy; {new Date().getFullYear()} My Personal Blog. | Juls. |
				All right reserved.</p>
		</footer>
	);
}

export default Footer;