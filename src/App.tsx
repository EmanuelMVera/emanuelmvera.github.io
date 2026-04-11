import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Pipeline from "./sections/Pipeline"
import Contact from "./sections/Contact"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Pipeline />
        <Contact />
      </main>
    </>
  )
}

export default App