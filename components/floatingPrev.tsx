"use client";
import { useEffect, useRef, useState } from "react";

interface ProjectProps {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
}
interface FloatingPrevProps {
  hoveredProject: ProjectProps;
}

export default function FloatingPrev({ hoveredProject }: FloatingPrevProps) {
  // create a reference to the floating element
  const floatingPrev = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (floatingPrev.current) {
        // get the mouse position
        const cursorY = e.pageY;

        // define the height of the floatingPrev element
        const halfFloatingPrevHeight = floatingPrev.current.offsetHeight / 2;

        // get the parent of the floatingPrev element
        const floatingPrevParent =
          floatingPrev.current.parentElement?.getBoundingClientRect().top;

        // position top of the page of the parent of the floating element
        const floatingPrevParentTopPosition =
          floatingPrevParent + window.scrollY;

        // condition if the cursor is between the top and the bottom of the parent of the floatingPrev element
        if (
          cursorY > floatingPrevParentTopPosition + halfFloatingPrevHeight &&
          cursorY <
            floatingPrevParentTopPosition +
              floatingPrev.current.parentElement?.offsetHeight! -
              halfFloatingPrevHeight
        ) {
          // annimate the floatingPrev element
          floatingPrev.current.animate(
            {
              transform: `translateY(${
                cursorY -
                (floatingPrevParentTopPosition + halfFloatingPrevHeight)
              }px)`,
            },
            {
              duration: 4000,
              fill: "forwards",
              easing: "ease",
            }
          );
        }
      }
    };

    // add the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // remove the event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

    // annimate the floatingPrev element with no cut animation
  const fadeInRef = useRef(null);
  useEffect(() => {
    if (fadeInRef.current) {

      // remove the animation class
      fadeInRef.current.classList.remove("animate-fade-up");

      // Forcer un reflow pour redémarrer l'animation
      void fadeInRef.current.offsetWidth;

      // add the animation class
      fadeInRef.current.classList.add("animate-fade-up");
    }
  }, [hoveredProject]);

  // annimate the floatingPrev element with no cut animation
  // const [isAnimating, setIsAnimating] = useState(false);
  // const fadeInRef2 = useRef(null);
  // useEffect(() => {
  //   if (!isAnimating && fadeInRef2.current) {
  //     setIsAnimating(true);

  //     // remove the animation class
  //     fadeInRef2.current.classList.remove("animate-wiggle");

  //     // Forcer un reflow pour redémarrer l'animation
  //     void fadeInRef2.current.offsetWidth;

  //     // add the animation class
  //     fadeInRef2.current.classList.add("animate-wiggle");

  //     // add a timeout to remove the animation class
  //     const timeout = setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 1400);
  //   }
  // }, [hoveredProject]);

  return (
    <a
      href={hoveredProject?.link}
      className="w-fit absolute group-hover:opacity-100 opacity-0 transition-all duration-300"
      ref={floatingPrev}
    >
      <div>
        <img
          src={hoveredProject?.image}
          className="w-full aspect-video bg-cover rounded-lg shadow-lg animate-duration-[1400ms]"
          alt="Picture of the project"
          // ref={fadeInRef2}
        />
      </div>
      <div className="text-lg font-medium mt-5 ease-out animate-delay-300 animate-duration-[500ms]" >
        <p className="font-bold">{hoveredProject?.title}</p>
        <p className="leading-none">{hoveredProject?.description}</p>
      </div>
    </a>
  );
}
