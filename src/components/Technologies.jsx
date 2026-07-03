import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithubAlt, FaGithub, FaVuejs, FaJava, FaPhp
} from "react-icons/fa";
import { SiTailwindcss, SiJest, SiPostman, SiIntellijidea } from "react-icons/si";
import { BiLogoTypescript, BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";

import { texts } from "../i18n/texts";

export default function Technologies({ language }) {
  const t = texts[language];

  const techTitle =
    language === "es"
      ? "Tecnologías y Herramientas"
      : "Technologies and Tools";

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
    { name: "PHP", icon: FaPhp },
    { name: "Spring Boot", icon: BiLogoSpringBoot },
    { name: "Jest", icon: SiJest },
    { name: "Git", icon: FaGithubAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Intellij", icon: SiIntellijidea },
    { name: "Postman", icon: SiPostman },
    { name: "Azure", icon: VscAzure },

    // 👇 i18n real aquí
    {
      name: language === "es" ? "Ciberseguridad" : "Cybersecurity",
      icon: MdOutlineSecurity
    }
  ];

  return (
    <section id="technologies" className="space-y-12">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x hover:scale-105">
        {techTitle}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {techs.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-white dark:bg-gray-900 p-3 min-h-44 min-w-[97px] w-full shadow-md hover:shadow-xl transition"
          >
            <Icon className="text-4xl sm:text-5xl md:text-6xl text-indigo-600" />

            <span className="text-center text-xs font-semibold text-gray-800 dark:text-gray-200 break-words leading-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}