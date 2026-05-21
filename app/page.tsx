import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <section id="sobre-mi" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <About />
            <div id="skills" className="scroll-mt-20">
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
