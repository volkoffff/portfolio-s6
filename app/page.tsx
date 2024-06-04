import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
