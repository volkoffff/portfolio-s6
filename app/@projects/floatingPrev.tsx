"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Correction de l'interface pour inclure l'image
interface ProjectProps {
  title?: string;
  description?: string;
  image?: string; // Corrigé en "image" pour correspondre à l'utilisation dans le code
  link?: string;
  img?: { url: string }[]; // Ajouté pour correspondre à l'utilisation dans le code
}

interface FloatingPrevProps {
  hoveredProject: ProjectProps;
}

export default function FloatingPrev({ hoveredProject }: FloatingPrevProps) {
  // create a reference to the floating element
  const floatingPrev = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (floatingPrev.current) {
        // get the mouse position
        const cursorY = e.pageY;

        // define the height of the floatingPrev element
        const halfFloatingPrevHeight = floatingPrev.current.offsetHeight / 2;

        // get the parent of the floatingPrev element
        const floatingPrevParent =
          floatingPrev.current.parentElement?.getBoundingClientRect().top ?? 0;

        // position top of the page of the parent of the floating element
        const floatingPrevParentTopPosition =
          floatingPrevParent + window.scrollY;

        // condition if the cursor is between the top and the bottom of the parent of the floatingPrev element
        if (
          cursorY > floatingPrevParentTopPosition + halfFloatingPrevHeight &&
          cursorY <
            floatingPrevParentTopPosition +
              (floatingPrev.current.parentElement?.offsetHeight ?? 0) -
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
              duration: 2500,
              fill: "forwards",
              easing: "ease-in-out",
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

  return (
    <motion.a
      ref={floatingPrev}
      href={hoveredProject?.link}
      className="w-fit absolute group-hover:opacity-100 transition-all duration-300"
    >
      <motion.div className="p-2 bg-white/20 backdrop-blur-md rounded-2xl">
        <motion.img
          src={hoveredProject?.img?.[0]?.url} // Correction de l'accès à l'image
          className="aspect-video bg-cover rounded-lg w-96 max-w-none"
          alt="Picture of the project"
          layoutId="img-movable"
        />
        <div className="text-lg font-medium mt-4">
          <div className="overflow-hidden">
            <p key={hoveredProject?.description}>
              {hoveredProject?.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}
