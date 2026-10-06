import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Process />
      <Skills />
      <Contact />
    </>
  );
}
