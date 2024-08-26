"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Floating() {
  // create a reference to the floating element
  const floating = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (floating.current) {
        // get the mouse position
        const xMousePos = e.clientX + window.pageXOffset;

        // define the size of the floating element
        const floatingSize = floating.current.offsetWidth;

        // define the parent size of the floating element
        const floatingParentSize = floating.current.parentElement?.offsetWidth || 0;

        // 12 is the padding of the parent, 4 is baseline tailwind padding, 2 is the number of padding right and left
        const floatingParentSizeWithoutPadding = floatingParentSize - 12 * 4 * 2;
        const floatingPercent = (xMousePos / window.innerWidth) * 100;

        // calculate the position of the floating element
        const pixelToMove =
          ((floatingParentSizeWithoutPadding - floatingSize) / 100) *
          floatingPercent;

        // animate the floating element
        floating.current.animate(
          {
            transform: `translateX(${pixelToMove}px)`,
          },
          {
            duration: 2500,
            delay: 400,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
      }
    };

    // add the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-fit absolute top-[25%] hover:cursor-pointer"
      ref={floating}
    >
      <motion.div
        layoutId="box-movable"
        className="p-2 bg-white/20 backdrop-blur-md rounded-2xl"
      >
        <motion.div layoutId="hero-img-movable">
          <div>
            <img
              src="/rolix-trailer.gif"
              className="w-96 rounded-xl"
              alt="Picture of the author"
            />
          </div>
          <div className="text-lg font-medium mt-4">
            <p className="animate-fade-up animate-duration-1500 animate-ease-out animate-delay-[3800ms]">
              Rolix / Librairie de composants
            </p>
            <p className="leading-none animate-fade-up animate-duration-1500 animate-ease-out animate-delay-[3950ms]">
              (Entreprise - 2024 ft.Killian David)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
