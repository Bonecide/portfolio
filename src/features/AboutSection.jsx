import { Section } from "../components/Section";
import { motion } from "framer-motion";
export const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Kasymov Marsel</span>
      </h1>
      <motion.p
        className="text-lg text-white mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        I Middle Frontend developer
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-10`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.7,
        }}
      >
        Contact with me
      </motion.button>
    </Section>
  );
};
