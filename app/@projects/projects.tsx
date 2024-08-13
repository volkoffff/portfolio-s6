"use client";
import { VelocityScroll } from "@/components/velocityScroll";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingPrev from "./floatingPrev";
import ProjectModal from "./projectModal";

export default function Projects({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(projects[index]);
  };

  useEffect(() => {
    setHoveredProject(projects[0]);
  }, []);

  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="p-12 py-10 md:py-20" id="project">
      {/* <div className="relative">
        {projects.map((item, index) => (
          <motion.div
            onClick={() => setSelectedId(item.id)}
            // onMouseMove={() => handleMouseEnter(index)}
          >
            <VelocityScroll
              text={item.title}
              default_velocity={3}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
          </motion.div>
        ))}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {hoveredProject && <FloatingPrev hoveredProject={hoveredProject} />}
        </div>
      </div> */}
      <div className=" flex items-center">
        <div className="group grid grid-cols-6 gap-12 w-full">
          <div className="col-span-2 relative">
            {hoveredProject && <FloatingPrev hoveredProject={hoveredProject} />}
          </div>
          <div className="col-span-4">
            <ul>
              {projects.map((item, index) => (
                <motion.button
                  className="project block w-full transition-all font-bold text-4xl md:text-7xl hover:cursor-default"
                  key={index}
                  onMouseMove={() => handleMouseEnter(index)}
                  onClick={() => setSelectedId(item.id)}
                >
                  <motion.a
                    layoutId={item.id}
                    initial={{ opacity: 0, filter: "blur(20px)" }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.4 },
                    }}
                    // viewport={{ once: true }}
                    className={`block h-fit w-fit text-left ${
                      hoveredProject === item
                        ? "text-black cursor-pointer"
                        : "text-neutral-300"
                    }`}
                  >
                    <motion.p layoutId={`title-${item.id}`}>
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
