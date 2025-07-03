import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-blue-800 text-white text-center p-4 mt-10 w-full">
            <p className="text-1 text-white font-bold hover:text-blue-300 transition-colors">&copy; 2025. JulyDevops. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/JCesar206" target="_blank" rel="noreferrer" className="hover:text-rose-300 transition-colors">
                    <FaGithub />
                </a>
                <a href="mailto:jcesar206@hotmail.com" className="hover:text-lime-300 transition-colors">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;