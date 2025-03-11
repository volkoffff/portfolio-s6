"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingPrev from "./floatingPrev";
import ProjectModal from "./projectModal";
import { Project } from "../layout";

// Définition des types des props pour le composant Projects
interface ProjectsProps {
  projects: Project[];
}

// Le composant Projects
export default function Projects({ projects }: ProjectsProps) {
  // Définition du type des états
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Gestion du survol du projet
  const handleMouseEnter = (index: number) => {
    setHoveredProject(projects[index]);
  };

  useEffect(() => {
    // Initialisation de hoveredProject avec le premier projet si disponible
    if (projects.length > 0) {
      setHoveredProject(projects[0]);
    }
  }, [projects]);

  return (
    <section className="p-12 py-10 md:py-20" id="project">
      <div className="flex items-center">
        <div className="group flex w-full gap-12">
          <div className="relative w-96 z-10 hidden md:block">
            {hoveredProject && <FloatingPrev hoveredProject={hoveredProject} />}
          </div>
          <div>
            <ul>
              {projects.map((item: Project, index: number) => (
                <motion.button
                  className="project block w-full transition-all font-bold text-6xl md:text-6xl lg:text-8xl hover:cursor-default leading-tight tracking-[-0.02em]"
                  key={item.id} // Utilisation de l'id du projet comme clé
                  onMouseMove={() => handleMouseEnter(index)}
                  onClick={() => setSelectedId(item.id)}
                >
                  <motion.a
                    layoutId={item.id.toString()}
                    className={`block h-fit w-fit text-left ${
                      hoveredProject === item
                        ? "text-black cursor-pointer z-10"
                        : "text-neutral-300"
                    }`}
                  >
                    <motion.p
                      layoutId={`title-${item.id}`}
                      className="relative"
                    >
                      {item.title}
                    </motion.p>
                  </motion.a>
                </motion.button>
              ))}
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {selectedId !== null && hoveredProject && (
            <ProjectModal
            selectedId={selectedId}
            hoveredProject={hoveredProject}
            setSelectedId={setSelectedId}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
