import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"

function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          title="Sobre mí"
          subtitle="Quién soy y cómo trabajo"
        />
        <p>Desarrollador web...</p>
      </motion.div>
    </section>
  )
}

export default About