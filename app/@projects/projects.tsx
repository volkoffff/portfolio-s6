"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingPrev from "./floatingPrev";
import ProjectModal from "./projectModal";
import { Project } from "../layout";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(projects[index]);
  };

  useEffect(() => {
    setHoveredProject(projects[0]);
  }, []);

  return (
    // <div className="relative">
    //     {projects.map((item, index) => (
    //       <motion.div
    //         onClick={() => setSelectedId(item.id)}
    //         // onMouseMove={() => handleMouseEnter(index)}
    //       >
    //         <VelocityScroll
    //           text={item.title}
    //           default_velocity={3}
    //           className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    //         />
    //       </motion.div>
    //     ))}
    //     <div className="absolute top-0 left-12 w-96 h-full pointer-events-none">
    //       {hoveredProject && <FloatingPrev hoveredProject={hoveredProject} />}
    //     </div>
    //   </div>
    <section className="p-12 py-10 md:py-20" id="project">
      <div className=" flex items-center">
        <div className="group flex w-full gap-12">
          <div className="relative w-96 z-10">
            {hoveredProject && <FloatingPrev hoveredProject={hoveredProject} />}
          </div>
          <div>
            <ul>
              {projects.map((item: Project, index) => (
                <motion.button
                  className="project block w-full transition-all font-bold text-4xl md:text-8xl hover:cursor-default leading-[1rem] tracking-[-0.02em]"
                  key={index}
                  onMouseMove={() => handleMouseEnter(index)}
                  onClick={() => setSelectedId(item.id)}
                >
                  <motion.a
                    layoutId={item.id}
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
          {selectedId && hoveredProject && (
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
