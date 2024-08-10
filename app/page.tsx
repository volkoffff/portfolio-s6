import Projects from "@/app/@projects/projects";
import Footer from "./@footer/footer";
import Hero from "./@hero/hero";
import { Contact } from "./@contact/contact";
import { Profile } from "./@profile/profile";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
