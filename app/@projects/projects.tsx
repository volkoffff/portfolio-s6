"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingPrev from "./floatingPrev";
import ProjectModal from "./projectModal";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Rolix",
      description: "Description 1",
      image: "/images/rolixCover.png",
      id: 1,
      img: [
        { url: "images/rolixCover.png" },
        { url: "images/rolix1.png" },
        { url: "images/rolix2.png" },
        { url: "images/rolix3.png" },
        { url: "images/rolix4.png" },
        { url: "images/rolix5.png" },
        { url: "images/rolix7.png" },
        { url: "images/rolix8.png" },
        { url: "images/rolix9.png" },
      ],
      links: [
        { link: "", type: "link", status: "private" },
        { link: "www.github.com", type: "git", status: "public" },
      ],
      tags: [
        { name: "React" },
        { name: "TS" },
        { name: "Bibliothèque de composants" },
        { name: "Design Système" },
        { name: "tailwind" },
        { name: "Shadcn" },
        { name: "Projet d'entreprise" },
      ],
      pargraphs: [
        {text:"En collaboration avec Killian David, j'ai conçu un modèle de départ pour nos logiciels destinés aux clients en entreprise. Étant donné que ces logiciels reposent souvent sur des bases similaires, nous avons développé ce modèle documenté et intégré à Figma. Cela nous permet de créer nos maquettes sur cette plateforme et de développer ensuite nos interfaces en utilisant les mêmes composants."},
        {text:"Le template comprend de nombreux composants soigneusement nommés, chacun contenant exactement les mêmes noms de variantes que sur Figma. Cette uniformité facilite une transition fluide et optimale entre les deux plateformes."},
      ]
    },
    {
      title: "Paoline.K",
      description: "Description 5",
      image: "/images/paoline3.png",
      link: "#",
      id: 2,
    },
    {
      title: "JCDecaux",
      description: "Description 2",
      image: "/images/jcdCover.png",
      link: "#",
      id: 3,
    },
    {
      title: "Schneider Electric",
      description: "Description 3",
      image: "/images/seCover.png",
      link: "#",
      id: 4,
    },
    {
      title: "FCBA",
      description: "Description 4",
      image: "/images/fcbaCover.png",
      link: "#",
      id: 5,
    },
    {
      title: "Roy Lunetier",
      description: "Description 4",
      image: "/images/roy1.png",
      link: "#",
      id: 6,
    },
    {
      title: "LyonTour",
      description: "Description 5",
      image: "/images/lyontour1.png",
      link: "#",
      id: 7,
    },
    {
      title: "Woocop",
      description: "Description 4",
      image: "/images/woocopCover.png",
      link: "#",
      id: 8,
    },
  ]);

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(projects[index]);
  };

  useEffect(() => {
    setHoveredProject(projects[0]);
  }, []);

  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="p-12 min-h-screen flex items-center">
      <div className="group grid grid-cols-5 gap-12">
        <div className="col-span-2 relative">
          <FloatingPrev hoveredProject={hoveredProject} />
        </div>
        <div className="col-span-3">
          <ul>
            {projects.map((item, index) => (
              <motion.li
                className="project transition-all font-bold text-5xl md:text-7xl hover:cursor-default"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => setSelectedId(item.id)}
              >
                <motion.a
                  layoutId={item.id}
                  className={`block h-fit ${
                    hoveredProject === item
                      ? "text-black"
                      : "group-hover:text-neutral-400"
                  }`}
                >
                  <motion.p layoutId={`title-${item.id}`}>
                    {item.title}
                  </motion.p>
                </motion.a>
              </motion.li>
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
    </section>
  );
}
