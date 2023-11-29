import { AboutSection } from "../features/AboutSection";
import { ContactSection } from "../features/ContactSection";
import { ProjectSections } from "../features/ProjectsSection";
import { SkillsSection } from "../features/SkillsSection";
import { Section } from "./Section";

export const Interface = ({ setSection }) => {
  return (
    <div className="flex flex-col items-center w-screen max-h-[100vh]  ">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};
