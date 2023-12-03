import { useNavigate } from "react-router-dom";
import { AboutSection } from "../features/AboutSection";
import { ContactSection } from "../features/ContactSection";
import { SkillsSection } from "../features/SkillsSection";
export const Interface = ({ setSection, navigate }) => {
  return (
    <div className="flex flex-col items-center w-screen max-h-[100vh]  ">
      <AboutSection setSection={setSection} />
      <SkillsSection navigate={navigate} />
      <ContactSection />
    </div>
  );
};
