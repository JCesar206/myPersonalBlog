import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {

	return (
		<footer className="bg-blue-950 text-white bottom-0 left-0 py-4 -pt-3 w-full">
			<div className="flex justify-center space-x-6 mb-2">
				<a href="https://github.com/JCesar206" target="_blank" rel="noreferrer">
          <FaGithub className="style-icon-footer" size={20} title="Github"/>
        </a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer">
          <FaLinkedin className="style-icon-footer" size={20} title="Linkedin"/>
        </a>
        <a href="mailto:jcesar206@hotmail.com">
          <FaEnvelope className="style-icon-footer" size={20} title="Hotmail"/>
        </a>
				<a href="mailto:jcesary06@gmail.com">
          <SiGmail className="style-icon-footer" size={20} title="Gmail"/>
        </a>
			</div>
			<p className="text-sm text-center text-white font-bold">&copy; {new Date().getFullYear()} My Personal Blog. | Juls. |
				All right reserved.</p>
		</footer>
	);
}

export default Footer;