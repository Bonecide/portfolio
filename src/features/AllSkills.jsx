import { SkillsContainer } from "../components/SkillsContainer";
import { SKILLS } from "../utils/consts";

export const AllSkills = () => {
  return (
    <div className="md:w-[80%] w-[80%] mx-auto pt-[40px]">
      <h5 className="text-white md:text-[60px] text-[30px] font-[700]">
        MY SKILLS
      </h5>
      <div className="flex items-center gap-x-[60px] gap-y-[50px] mt-[60px] flex-wrap justify-center">
        {SKILLS.map((skill, idx) => (
          <SkillsContainer idx={idx} skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};
