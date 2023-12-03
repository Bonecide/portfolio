import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const SkillsContainer = ({ skill, idx }) => {
  const [isHover, setIsHover] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const click = new Audio("/click1.mp3");
  useEffect(() => {
    if (hasClicked) {
      setTimeout(() => {
        setHasClicked(false);
      }, 300);
    }
  }, [hasClicked]);
  return (
    <motion.div
    id="allSkills"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: isMobile ? 0.2 : idx * 0.1,
        },
      }}
      animate={{
        borderColor: isHover ? "#FF6B6B" : "#6156FF",
        boxShadow: isHover
          ? "0px 1px 45px 0px #FF6B6B66"
          : "0px 1px 45px 0px #8C53CF66",
        scale: hasClicked ? 0.9 : isHover ? 1.1 : 1,
        transition: {
          duration: 0.3,
        },
      }}
      onClick={() => {
        click.play();
        setHasClicked(true);
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="py-[18px] px-[32px] border-[2px] border-[#6156FF] rounded-full shadow-[0px_1px_45px_0px_#8C53CF66] flex items-center gap-[20px] min-w-[250px] cursor-pointer"
    >
      <img className="w-[40px] h-[40px]" src={skill.img} alt={skill.title} />
      <motion.p
        animate={{
          color: isHover ? "#FF6B6B" : "#6156FF",
        }}
        className="text-[#6156FF] text-[20px]"
      >
        {skill.title}
      </motion.p>
    </motion.div>
  );
};
