import { motion } from "framer-motion";
import LinkButton from "../../components/linkButton";
import { Project } from "../layout";

interface ProjectModalProps {
  selectedId: number;
  hoveredProject: Project;
  setSelectedId: any;
}

export default function ProjectModal({
  selectedId,
  hoveredProject,
  setSelectedId,
}: ProjectModalProps) {
  return (
    <motion.div className="fixed w-full h-full overflow-y-scroll transition-all left-0 top-0 z-50 flex justify-center no-scrollbar">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed w-full h-full top-0 left-0 z-0 backdrop-blur-sm bg-black/20"
        onClick={() => setSelectedId(null)}
      ></motion.span>
      <motion.div
        layoutId={selectedId.toString()}
        className="relative z-1 min-h-[93%] h-fit mt-[7%] w-[90%] bg-white rounded-2xl shadow-[0_0px_50px_-15px_rgba(0,0,0,0.25)]"
      >
        <motion.div className="p-10 w-full h-fit">
          <div className="h-fit grid md:grid-cols-3 lg:grid-cols-5 grid-flow-row-dense gap-x-10 gap-y-6">
            <motion.div className="md:col-span-3 lg:col-span-5 flex justify-between">
              <motion.p
                className="text-4xl font-bold"
                layoutId={`title-${selectedId}`}
              >
                {hoveredProject.title}
              </motion.p>
              <motion.button
                className="size-10 bg-black hover:bg-black/80 transition-all text-white rounded-full flex items-center justify-center"
                onClick={() => setSelectedId(null)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </motion.button>
            </motion.div>
            <div className="md:col-span-2 lg:sticky lg:top-10">
              <div className="space-y-4">
                <p className="text-xl font-semibold">
                  {hoveredProject.description}
                </p>
                <div className="flex items-center gap-3">
                  <LinkButton link="">
                    Link
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </LinkButton>
                  <LinkButton link="">
                    Github
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </LinkButton>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              {hoveredProject.pargraphs.map((pargraph, index) => (
                <p className="text-neutral-800" key={index}>
                  {pargraph.text}
                </p>
              ))}
            </div>

            <div className="space-y-4 ">
              <div className="space-y-1.5">
                <p className="font-bold">Stack Technique</p>
                <div className="flex h-fit flex-wrap gap-0.5">
                  {hoveredProject.tags.map((tag, index) => (
                    <p key={index}>{tag.name},</p>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold">Équipe</p>
                <div className="flex h-fit flex-wrap gap-1.5">
                  {hoveredProject.teams.map((team, index) => (
                    <p key={index}>{team.name},</p>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold">Commanditaire</p>
                <div className="flex h-fit flex-wrap gap-1.5">
                  {hoveredProject.sponsors.map((sponsor, index) => (
                    <p className="" key={index}>
                      {sponsor.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <motion.div className="mt-4 h-fit md:col-span-3 lg:col-span-3 lg:col-start-3">
              <motion.div className="space-y-6">
                {hoveredProject.img.map((img, index) => (
                  <motion.img
                    src={img.url}
                    className="rounded-xl shadow-lg w-full"
                    alt="Picture of the project"
                    layoutId={index === 0 ? "img-movable" : undefined}
                    key={index}
                    initial={index !== 0 ? { opacity: 0 } : undefined}
                    animate={index !== 0 ? { opacity: 1 } : undefined}
                    transition={index !== 0 ? { delay: 0.2 } : undefined}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
