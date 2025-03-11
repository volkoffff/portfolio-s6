"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="">
      <motion.nav
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
        className="z-50 fixed h-fit md:h-20 flex items-center w-full md:mix-blend-difference text-white"
      >
        <div className="px-0 md:px-12 w-full mx-auto flex flex-col md:flex-row justify-between">
          <div className="px-6 md:px-0 py-2 md:py-0 flex flex-row gap-2 md:gap-12 lg:gap-32 bg-white md:bg-transparent text-black md:text-white">
            <a href="#">
              <h2 className="font-bold text-xl text-nowrap">Robin Lanfranchi</h2>
            </a>
            <div className="items-center gap-2 h-fit hidden md:flex">
              <div className="relative w-3 h-3 mix-blend-normal">
                <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-emerald-400 md:bg-pink-500 animate-ping "></span>
                <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-emerald-500 md:bg-pink-600"></span>
              </div>
              <p className="font-medium">À la recherche d&apos;un stage en septembre 2025</p>
            </div>
          </div>
          <div className="flex gap-12 font-medium group [&>ul>li:hover]:!opacity-100">
            <ul className="px-6 md:px-0 border-y md:border-y-0 py-6 md:py-0 justify-between w-full bg-white/20 md:bg-transparent text-black md:text-white backdrop-blur-md md:backdrop-blur-0 flex [&>li]:group-has-[li:hover]:opacity-30">
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
              <li className="lg:ml-32">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
