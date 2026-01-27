import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithubAlt, FaGithub, FaVuejs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJest, SiPostman } from "react-icons/si";
import { BiLogoTypescript, BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscode, VscAzure } from "react-icons/vsc";

export default function Technologies({ language }) {
  const title = language === "es" ? "Tecnologías y Herramientas" : "Technologies and Tools";
const techs = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "Vue", icon: FaVuejs },
  { name: "Java", icon: FaJava },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MySQL", icon: GrMysql },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Spring Boot", icon: BiLogoSpringBoot },
  { name: "Jest", icon: SiJest },
  { name: "Git", icon: FaGithubAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: VscVscode },
  { name: "Postman", icon: SiPostman },
  { name: "Azure", icon: VscAzure },
];

return (
  <section id="technologies" className="space-y-12">
    {/*Title*/}
    <h2 className="text-center text-3xl md:text-4xl font-extrabold  text-gray-900 dark:text-indigo-700">
      {title}
    </h2>
    {/*Grid*/}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {techs.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition"
        >
          <Icon className="text-4xl text-indigo-600"/>
          <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
              {name}
            </span>
        </div>
      ))}
    </div>
  </section>
  );
}
