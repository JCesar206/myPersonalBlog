export default function Technologies({ language }) {
  const title = language === "es" ? "Tecnologías y Herramientas" : "Technologies and Tools";
const techs = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Vue", icon: "devicon-vuejs-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Jest", icon: "devicon-jest-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Azure", icon: "devicon-azure-plain colored" },
];

return (
  <section id="about" className="pt-24 pb-12 px-4">
  <div className="max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-2xl shadow-purple-800">
    <h2 className="text-2xl font-bold mb-6 text-blue-500 hover:text-blue-800 dark:text-white text-center">{title} 🛠️</h2>
<div className="flex flex-wrap justify-center gap-6">
  {techs.map(t => (
    <div key={t.name} className="flex flex-col items-center">
      <i className={`${t.icon} text-4xl`}></i>
      <span className="mt-2 text-sm font-semibold text-blue-500 dark:text-white">{t.name}</span>
    </div>
  ))}
    </div>
  </div>
</section>
  );
}
