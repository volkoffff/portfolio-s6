import Projects from "@/app/@projects/projects";
import Footer from "./@footer/footer";
import Hero from "./@hero/hero";
import { Contact } from "./@contact/contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
