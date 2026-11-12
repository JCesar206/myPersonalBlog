import { useState } from "react";
import Card from "./Card";
import BackToTop from "./BackToTop";
import { texts } from "../i18n/texts.js";
import { projects } from "../data/projects.js";

export default function Projects({ language }) {
  const t = texts[language];
  const [selectedTech, setSelectedTech] = useState("All");

  // Extraemos tecnologías únicas para crear filtros dinámicos
  const allTechs = [
    "All",
    ...new Set(projects.flatMap((project) => project.techs || [])),
  ];

  // Combinamos los datos técnicos con las traducciones de forma segura
  const enrichedProjects = projects.map((project, index) => ({
    ...project,
    title: t.projects.items?.[index]?.title || project.title || "Project",
    description:
      t.projects.items?.[index]?.description || project.description || "",
  }));

  // Filtramos los proyectos según la etiqueta seleccionada
  const filteredProjects =
    selectedTech === "All"
      ? enrichedProjects
      : enrichedProjects.filter((project) =>
          project.techs?.includes(selectedTech)
        );

  const subtitle =
    language === "es"
      ? "Aplicaciones web full-stack, interfaces interactivas y soluciones desarrolladas con enfoque en arquitectura limpia."
      : "Full-stack web applications, interactive interfaces, and solutions built with clean architecture in mind.";

  return (
    <section id="projects" className="space-y-10 py-4">
      
      {/* Encabezado de la sección */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            {t.projects.title}
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
          {subtitle}
        </p>
      </div>

      {/* Barra de filtros por tecnología */}
      {allTechs.length > 2 && (
        <div className="flex flex-wrap justify-center gap-2">
          {allTechs.map((tech) => {
            const isActive = selectedTech === tech;
            const label =
              tech === "All" ? (language === "es" ? "Todos" : "All") : tech;

            return (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid de tarjetas de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id || project.github || index}
            image={project.image}
            github={project.github}
            demo={project.demo || project.url}
            techs={project.techs}
            title={project.title}
            description={project.description}
            language={language}
          />
        ))}
      </div>

      {/* Botón volver arriba */}
      <div className="flex justify-center pt-4">
        <BackToTop language={language} />
      </div>
    </section>
  );
}