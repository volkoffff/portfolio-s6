"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="">
      <motion.nav
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
        className="z-50 fixed h-20 flex items-center w-full mix-blend-difference text-white"
      >
        <div className="px-12 w-full mx-auto flex justify-between">
          <div className="flex gap-12 lg:gap-32">
            <a href="#">
              <h2 className="font-bold text-xl">Robin Lanfranchi</h2>
            </a>
            <div className="flex items-center gap-2 h-fit">
              <div className="relative w-3 h-3 mix-blend-normal">
                <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-pink-500 animate-ping "></span>
                <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-pink-600"></span>
              </div>
              <p className="font-medium">Disponible pour du Freelance</p>
            </div>
          </div>
          <div className="flex gap-12 lg:gap-32 font-medium group [&>ul>li:hover]:!opacity-100 ">
            <ul className="flex [&>li]:group-has-[li:hover]:opacity-30">
              <li>
                <a href="#home">Accueil</a>
                <span className="h-full">,</span>
              </li>
              <li>
                <a href="#profile">Profile</a>
                <span>,</span>
              </li>
              <li>
                <a href="#project">Travaux</a>
                <span>,</span>
              </li>
            </ul>
            <ul className="[&>li]:group-has-[li:hover]:opacity-30">
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
