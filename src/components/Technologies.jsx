import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJest, SiPostman } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";

// Definición estructurada del stack tecnológico fuera del componente
const getTechCategories = (language) => [
  {
    category: language === "es" ? "Frontend & UI" : "Frontend & UI",
    items: [
      { name: "HTML5", icon: FaHtml5, hoverColor: "group-hover:text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, hoverColor: "group-hover:text-blue-500" },
      { name: "JavaScript", icon: FaJs, hoverColor: "group-hover:text-yellow-500" },
      { name: "TypeScript", icon: BiLogoTypescript, hoverColor: "group-hover:text-blue-600" },
      { name: "React", icon: FaReact, hoverColor: "group-hover:text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, hoverColor: "group-hover:text-teal-400" },
    ],
  },
  {
    category: language === "es" ? "Backend & Bases de Datos" : "Backend & Databases",
    items: [
      { name: "Node.js", icon: FaNodeJs, hoverColor: "group-hover:text-green-600" },
      { name: "Python", icon: FaPython, hoverColor: "group-hover:text-yellow-600" },
      { name: "MySQL", icon: GrMysql, hoverColor: "group-hover:text-blue-700" },
    ],
  },
  {
    category: language === "es" ? "Testing, Herramientas & Seguridad" : "Testing, Tools & Security",
    items: [
      { name: "Jest", icon: SiJest, hoverColor: "group-hover:text-rose-600" },
      { name: "Git", icon: FaGitAlt, hoverColor: "group-hover:text-orange-600" },
      { name: "GitHub", icon: FaGithub, hoverColor: "group-hover:text-slate-900 dark:group-hover:text-white" },
      { name: "Postman", icon: SiPostman, hoverColor: "group-hover:text-orange-500" },
      { name: "VS Code", icon: VscVscode, hoverColor: "group-hover:text-blue-500" },
      {
        name: language === "es" ? "Ciberseguridad" : "Cybersecurity",
        icon: MdOutlineSecurity,
        hoverColor: "group-hover:text-indigo-500",
      },
    ],
  },
];

export default function Technologies({ language }) {
  const sectionTitle =
    language === "es" ? "Stack Tecnológico" : "Tech Stack";

  const sectionSubtitle =
    language === "es"
      ? "Herramientas y tecnologías con las que diseño, desarrollo y aseguro aplicaciones web."
      : "Tools and technologies I use to design, build, and secure web applications.";

  const categories = getTechCategories(language);

  return (
    <section id="technologies" className="space-y-12 py-4">
      {/* Encabezado de la sección */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            {sectionTitle}
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
          {sectionSubtitle}
        </p>
      </div>

      {/* Contenedor de Categorías */}
      <div className="space-y-10">
        {categories.map((group) => (
          <div key={group.category} className="space-y-4">
            
            {/* Título de categoría sutil */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              {group.category}
            </h3>

            {/* Grid de tecnologías */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {group.items.map(({ name, icon: Icon, hoverColor }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon
                    className={`text-3xl md:text-4xl text-slate-600 dark:text-slate-400 transition-colors duration-300 ${hoverColor}`}
                  />
                  <span className="text-center text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}