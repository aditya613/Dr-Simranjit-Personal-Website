import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

/**
 * Dr. Simranjit Singh — Academic Portfolio
 * Built with Next.js 16 · Tailwind CSS v4 · Motion (Framer Motion) · Phosphor Icons
 *
 * All content sourced from: Dr_Simranjit_Singh_Portfolio_Content.md
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Teaching />
      <Skills />
      <Contact />
    </main>
  );
}
