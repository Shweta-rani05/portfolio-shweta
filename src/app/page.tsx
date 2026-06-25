import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import CodingJourney from "@/components/sections/coding-journey";
import Achievements from "@/components/sections/achievements";
import TechStack from "@/components/sections/tech-stack";
import CertificationsAndCommunity from "@/components/sections/certifications-community";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CodingJourney />
      <Achievements />
      <TechStack />
      <CertificationsAndCommunity />
      <Contact />
    </div>
  );
}
