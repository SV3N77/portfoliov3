import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { InterestsSection } from "@/components/interests-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InterestsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
