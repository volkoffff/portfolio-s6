"use client";
import { useState } from "react";
import FloatingPrev from "./floatingPrev";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Rolix",
      description: "Description 1",
      image: "/images/rolixCover.png",
      link: "#",
    },
    {
      title: "Paoline.K",
      description: "Description 5",
      image: "/images/paoline3.png",
      link: "#",
    },
    {
      title: "JCDecaux",
      description: "Description 2",
      image: "/images/jcdCover.png",
      link: "#",
    },
    {
      title: "Schneider Electric",
      description: "Description 3",
      image: "/images/seCover.png",
      link: "#",
    },
    {
      title: "FCBA",
      description: "Description 4",
      image: "/images/fcbaCover.png",
      link: "#",
    },
    {
      title: "Roy Lunetier",
      description: "Description 4",
      image: "/images/roy1.png",
      link: "#",
    },
    {
      title: "LyonTour",
      description: "Description 5",
      image: "/images/lyontour1.png",
      link: "#",
    },
    {
      title: "Woocop",
      description: "Description 4",
      image: "/images/woocopCover.png",
      link: "#",
    },
  ]);

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(projects[index]);    
  };

  return (
    <section className="p-12 min-h-screen flex items-center">
      <div className="group grid grid-cols-5 gap-12 lg:gap-24">
        <div className="col-span-2 relative">
          <FloatingPrev hoveredProject={hoveredProject}/>
        </div>

        <div className="col-span-3">
          <ul>
            {projects.map((project, index) => (
              <li
                className="project text-neutral-400 transition-all hover:text-black font-bold text-5xl md:text-7xl"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <a className="" href={project.link}>
                  <p className="">{project.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
