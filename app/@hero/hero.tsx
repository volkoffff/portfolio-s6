"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Floating from "./floating";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;
    textElement.innerHTML = "";

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      textElement.appendChild(span);
    });

    const timeline = gsap.timeline();

    // First part of the animation
    timeline.from(textElement.children, {
      duration: 2,
      rotateX: 90,
      stagger: 0.03,
      ease: "power4.out",
    });

    // Second part of the animation
    timeline.to(textElement.children, {
      duration: 1.5,
      y: -200,
      stagger: 0.05,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="h-screen p-12 pt-20 flex flex-col justify-between">
      <div>
        <p className=" flex items-start justify-between pointer-events-none user-select-none translate-y-[-1vw]">
          <span
            ref={textRef}
            className="flex justify-between w-full [&>span]:inline-block pointer-events-none user-select-none tracking-[-0.06em] leading-none whitespace-nowrap text-[14.4vw] lg:text-[14.6vw] font-semibold translate-y-[200px] translate-x-[-1.2%]"
          >
            LANFRANCHI
          </span>
        </p>
      </div>
      <Floating />
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 1, ease: "easeOut" }}
            className=" text-2xl lg:text-3xl font-medium max-w-[28ch]"
          >
            Je suis un développer Créatif et Professionnel qui m’engage et
            m'applique sur mes projets.
          </motion.h2>
          <motion.a
            href=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1.1, ease: "easeOut" }}
            className="w-fit relative before:pointer-events-none after:pointer-events-none before:absolute before:w-0 before:h-0.5 before:bg-black before:content-[''] before:-bottom-1 before:left-0 hover:before:w-full before:transition-all before:duration-300 hover:before:delay-200 before:ease-out after:absolute after:w-full after:delay-200 hover:after:delay-0 after:h-0.5 after:bg-black after:content-[''] after:-bottom-1 after:right-0 hover:after:w-0 after:transition-all after:duration-300 after:ease-out"
          >
            En apprendre plus sur moi
          </motion.a>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1.2, ease: "easeOut" }}
        >
          (Scroll)
        </motion.p>
      </div>
    </section>
  );
}
