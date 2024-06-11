import Projects from "@/app/@projects/projects";
import Footer from "./@footer/footer";
import Hero from "./@hero/hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
