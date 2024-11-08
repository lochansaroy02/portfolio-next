


import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import Header from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";




export default function Home() {




  return (
    <div>
      <Header />
      <HeroSection id="home" />
      <ProjectsSection id="projects" />
      <TapeSection />
      {/* <TestimonialsSection /> */}
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </div>
  );
}
