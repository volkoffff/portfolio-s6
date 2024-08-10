import TextRevealByWord from "@/components/textReveal";
import { VelocityScroll } from "@/components/velocityScroll";

export function Profile() {
  return (
    <section className="py-10 md:py-20" id="profile">
      <VelocityScroll
        text="React"
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll
        text="Tailwind"
        default_velocity={3}
        direction="right"
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll
        text="JavaScript"
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll
        text="TypeScript"
        default_velocity={3}
        direction="right"
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      <VelocityScroll
        text="Next"
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      <VelocityScroll
        text="Postman"
        default_velocity={3}
        direction="right"
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      <VelocityScroll
        text="Github"
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      <VelocityScroll
        text="Docker"
        default_velocity={3}
        direction="right"
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll
        text="Figma"
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </section>
  );
}
