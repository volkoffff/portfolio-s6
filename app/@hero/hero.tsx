"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Floating from "./floating";
import HeroModalFloating from "./heroModalFloating";
import { Project } from "../layout";
import { AnimatedGradientText } from "@/components/magicui/animatedGradientText";
import { cn } from "@/lib/utils";

interface HeroProps {
  projects: Project[];
}

export default function Hero({ projects } : HeroProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [rolixOpen, setRolixOpen] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const text = textElement.innerText;
    textElement.classList.add("opacity-100");
    textElement.innerHTML = "";

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      textElement.appendChild(span);
    });

    const timeline = gsap.timeline();

    // First part of the animation
    timeline.from(textElement.children, {
      duration: 1.6,
      rotateX: 90,
      stagger: 0.03,
      ease: "power4.out",
    });

    // Second part of the animation
    timeline.to(textElement.children, {
      duration: 1.4,
      y: -200,
      stagger: 0.01,
      ease: "power4.out",
    });
  }, []);

  const texts = [
    "Hello",
    "Morphing",
    "Text",
    "Animation",
    "React",
    "Component",
    "Smooth",
    "Transition",
    "Engaging",
  ];

  return (
    <section
      className="h-screen p-4 md:p-12 pt-48 md:pt-20 flex flex-col justify-between"
      id="home"
    >
      <div>
        <p className=" flex items-start justify-between pointer-events-none user-select-none translate-y-[-1vw]">
          <span
            ref={textRef}
            className="opacity-0 flex justify-between w-full [&>span]:inline-block pointer-events-none user-select-none tracking-[-0.06em] leading-none whitespace-nowrap text-[14.4vw] lg:text-[15.2vw] font-semibold translate-y-[200px] translate-x-[-1.2%]"
          >
            LANFRANCHI
          </span>
        </p>
      </div>
      <motion.div
        className="hidden sm:block"
        onClick={() => {
          setRolixOpen(true);
        }}
      >
        <Floating />
      </motion.div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-6">
          <div className="text-3xl lg:text-4xl font-medium">
            <div className="overflow-hidden leading-tight">
              <motion.h2
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 2.2,
                  duration: 1.5,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Je suis un développeur <AnimatedGradientText>Créatif</AnimatedGradientText> et
              </motion.h2>
            </div>
            <div className="overflow-hidden leading-tight">
              <motion.h2
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 2.35,
                  duration: 1.5,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                <AnimatedGradientText>Professionnel</AnimatedGradientText> qui m&apos;engage et
              </motion.h2>
            </div>
            <div className="overflow-hidden leading-tight">
              <motion.h2
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 2.5,
                  duration: 1.5,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                m&apos;applique sur mes projets.
              </motion.h2>
            </div>
          </div>
          <motion.a
            href="#profile"
            initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
            className="w-fit relative before:pointer-events-none after:pointer-events-none before:absolute before:w-0 before:1-0.5 before:bg-black before:content-[''] before:-bottom-1 before:left-0 hover:before:w-full before:transition-all before:duration-300 hover:before:delay-200 before:ease-out after:absolute after:w-full after:delay-200 hover:after:delay-0 after:h-0.5 after:bg-black after:content-[''] after:-bottom-1 after:right-0 hover:after:w-0 after:transition-all after:duration-300 after:ease-out"
          >
            En apprendre plus sur moi
          </motion.a>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.4, duration: 1, ease: "easeOut" }}
        >
          (Scroll)
        </motion.p>
      </div>
      <HeroModalFloating
        hoveredProject={projects[0]}
        open={rolixOpen}
        setSelectedId={setRolixOpen}
      />
    </section>
  );
}
