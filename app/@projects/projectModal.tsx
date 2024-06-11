import { motion } from "framer-motion";
import LinkButton from "../../components/linkButton";

export default function ProjectModal({
  selectedId,
  hoveredProject,
  setSelectedId,
}) {
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
        layoutId={selectedId}
        className="relative z-1 min-h-[93%] h-fit mt-[7%] w-[90%] bg-white rounded-2xl shadow-[0_0px_50px_-15px_rgba(0,0,0,0.25)]"
      >
        <motion.div className="p-10 w-full grid grid-cols-[repeat(2,_1fr)_50px] gap-6 h-fit">
          <motion.div className="sticky top-10 h-fit">
            <motion.div className="space-y-3">
              {hoveredProject.img.map((img, index) => (
                <motion.img
                  src={img.url}
                  className="rounded-xl shadow-lg"
                  alt="Picture of the project"
                  layoutId={index === 0 ? "img-movable" : undefined}
                  key={index}
                />
              ))}
            </motion.div>
          </motion.div>
          <div className="sticky top-10 h-fit space-y-6">
            <div className="space-y-16">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <LinkButton link="">
                    Link
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
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
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </LinkButton>
                </div>
                <motion.p
                  className="text-7xl font-bold"
                  layoutId={`title-${selectedId}`}
                >
                  {hoveredProject.title}
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {hoveredProject.tags.map((tag, index) => (
                  <p className="font-medium text-sm px-3 py-1 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200/70">{tag.name}</p>
                ))}
              </div>
            </div>
            <p className="text-neutral-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestiae repellendus tenetur dolore blanditiis accusamus sed,
              reprehenderit nihil quibusdam ducimus, cumque ipsam. Saepe sed
              illo dolorum recusandae eligendi quas fugit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestiae repellendus tenetur dolore blanditiis accusamus sed,
              reprehenderit nihil quibusdam ducimus, cumque ipsam. Saepe sed
              illo dolorum recusandae eligendi quas fugit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestiae repellendus tenetur dolore blanditiis accusamus sed,
              reprehenderit nihil quibusdam ducimus, cumque ipsam. Saepe sed
              illo dolorum recusandae eligendi quas fugit!
            </p>
          </div>
          <motion.button
            className="w-8 h-8 bg-neutral-100 sticky top-10 ml-auto rounded-full"
            onClick={() => setSelectedId(null)}
          >
            X
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
