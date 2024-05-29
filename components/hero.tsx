import Floating from "./floating";

export default function Hero() {
return (
  <section className="h-screen p-12 pt-20 flex flex-col justify-between">
    <div>
      <p className="flex items-start justify-between pointer-events-none user-select-none">    
        <span className="pointer-events-none user-select-none tracking-[-0.06em] leading-none text-[14vw] font-semibold translate-y-[-14%] translate-x-[-1.2%]">LANFRANCHI </span>
        <span className="pointer-events-none user-select-none tracking-normal leading-none font-semibold text-[5vw] translate-y-[-14%]">TM</span>
      </p>
    </div>
    <Floating />
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-medium max-w-[28ch]">Je suis un développer Créatif et Professionnel qui m’engage et m'applique sur mes projets.</h2>
        <a href="" className="w-fit relative before:pointer-events-none after:pointer-events-none before:absolute before:w-0 before:h-0.5 before:bg-black before:content-[''] before:-bottom-1 before:left-0 hover:before:w-full before:transition-all before:duration-300 hover:before:delay-200 before:ease-out after:absolute after:w-full after:delay-200 hover:after:delay-0 after:h-0.5 after:bg-black after:content-[''] after:-bottom-1 after:right-0 hover:after:w-0 after:transition-all after:duration-300 after:ease-out">En apprendre plus sur moi</a>
      </div>
      <p className="animate-fade-up animate-duration-1000 animate-delay-[2ms] animate-ease-out">(Scroll)</p>
    </div>
  </section>
)}