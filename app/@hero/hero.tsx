"use client";
import { gsap } from "gsap";
import Floating from "./floating";
import { useEffect, useRef } from "react";

export default function Hero() {

  const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const text = textElement.innerText;
        textElement.innerHTML = '';

        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            textElement.appendChild(span);
        });

        const timeline = gsap.timeline();

        // First part of the animation
        timeline.from(textElement.children, {
            duration: 2,
            rotateX: 90,
            stagger: 0.03,
            ease: "power4.out"
          });
          
          // Second part of the animation
          timeline.to(textElement.children, {
            duration: 1.5,
            y: -200,
            stagger: 0.05,
            ease: "power3.out"
        });
    }, []);

  return (
    <section className="h-screen p-12 pt-20 flex flex-col justify-between">
      <div>
        <p  className=" flex items-start justify-between pointer-events-none user-select-none translate-y-[-1vw]">
          <span ref={textRef}  className="flex justify-between w-full [&>span]:inline-block pointer-events-none user-select-none tracking-[-0.06em] leading-none whitespace-nowrap text-[14.4vw] lg:text-[14.6vw] font-semibold translate-y-[200px] translate-x-[-1.2%]">
            LANFRANCHI
          </span>
        </p>
      </div>
      <Floating />
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-6">
          <h2 className=" text-2xl lg:text-3xl font-medium max-w-[28ch] animate-fade-up animate-duration-1000 animate-delay-[3100ms] animate-ease-out">
            Je suis un développer Créatif et Professionnel qui m’engage et
            m'applique sur mes projets.
          </h2>
          <a
            href=""
            className="w-fit relative before:pointer-events-none after:pointer-events-none before:absolute before:w-0 before:h-0.5 before:bg-black before:content-[''] before:-bottom-1 before:left-0 hover:before:w-full before:transition-all before:duration-300 hover:before:delay-200 before:ease-out after:absolute after:w-full after:delay-200 hover:after:delay-0 after:h-0.5 after:bg-black after:content-[''] after:-bottom-1 after:right-0 hover:after:w-0 after:transition-all after:duration-300 after:ease-out animate-fade-up animate-duration-1000 animate-delay-[3500ms] animate-ease-out"
          >
            En apprendre plus sur moi
          </a>
        </div>
        <p className="animate-fade-up animate-duration-1000 animate-delay-[3200ms] animate-ease-out">
          (Scroll)
        </p>
      </div>
    </section>
  );
}
