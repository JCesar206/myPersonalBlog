import Card from "../components/Card";
import BackToTop from "./BackToTop";
import { texts } from "../i18n/texts.js";
import { projects } from "../data/projects.js"

export default function Projects({ language }) {
  const t = texts[language];

  return (
    <section id="projects" className="space-y-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-indigo-700">
        {t.projects.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Card
            key={i} image={p.image} github={p.github} techs={p.techs} 
            title={t.projects.items[i].title} description={t.projects.items[i].description}/>
        ))}
      </div>
      <BackToTop/>
    </section>
  );
}