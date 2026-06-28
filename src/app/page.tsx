import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import CodingJourney from "@/components/sections/coding-journey";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <CodingJourney />
      <Contact />
    </div>
  );
}

