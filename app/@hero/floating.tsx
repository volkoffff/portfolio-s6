"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Floating() {
  // create a reference to the floating element
  const floating = useRef<HTMLDivElement>(null);
  var xMousePos = 0;

  document.onmousemove = function (e) {
    // get the mouse position
    xMousePos = e.clientX + window.pageXOffset;

    if (floating.current) {
      // define the size of the floating element
      const floatingSize = floating.current.offsetWidth;

      // define the parent size of the floating element
      const floatingParentSize = floating.current.parentElement?.offsetWidth;

      // 12 is the padding of the parent, 4 is baseline tailwind padding, 2 is the number of padding right and left
      const floatingParentSizeWithoutPadding = floatingParentSize - 12 * 4 * 2;
      const floatingPercent = (xMousePos / window.innerWidth) * 100;

      // calculate the position of the floating element
      const pixelToMove =
        ((floatingParentSizeWithoutPadding - floatingSize) / 100) *
        floatingPercent;

      // annimate the floating element
      floating.current.animate(
        {
          transform: `translateX(${pixelToMove}px)`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
      );
    }
  };

  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.2, duration: 1, ease: "easeOut" }}
      href=""
      className="w-fit absolute top-[25%]"
      ref={floating}
    >
      <div className="animate-fade animate-duration-1000 animate-delay-[4000ms] animate-ease-out">
        <Image
          src="/rolix-trailer.gif"
          className="w-96 rounded-xl shadow-lg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="text-lg font-medium mt-4 ">
        <p className="animate-fade-up animate-duration-1500 animate-ease-out animate-delay-[3800ms]">
          Rolix / Librairie de composant
        </p>
        <p className="leading-none animate-fade-up animate-duration-1500 animate-ease-out animate-delay-[3950ms]">
          (Entreprise - 2024 ft.Killian David)
        </p>
      </div>
    </motion.a>
  );
}
