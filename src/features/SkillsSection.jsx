import { Section } from "../components/Section";
import { motion } from "framer-motion";
const skills = [
  {
    title: "HTML / CSS",
    level: 80,
  },
  {
    title: "Tailwind",
    level: 60,
  },
  {
    title: "Typescript",
    level: 65,
  },
  {
    title: "React / React Native",
    level: 70,
  },
  {
    title: "Next JS",
    level: 70,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 25,
  },
  {
    title: "Solidity",
    level: 20,
  },
];
const languages = [
  {
    title: "🇷🇺 Russian",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 50,
  },
];

export const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-xl md:text-5xl font-bold text-[#f2b786] ">
          Skills
        </h2>
        <div className=" mt-8 space-y-4 pr-[20px]">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className=" text-[15px] md:text-xl font-bold text-white"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: index * 0.1,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-[200px] md:w-full  bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-[#3A86FF]  rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: index * 0.1,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl md:text-5xl font-bold mt-10 text-[#f2b786]">
            Languages
          </h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-[15px] md:text-xl font-bold text-white"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: index * 0.1,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-[200px] md:w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: index * 0.1,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
