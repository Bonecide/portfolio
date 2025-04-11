import { Section } from "../components/Section";
import { motion } from "framer-motion";
export const AboutSection = ({ setSection }) => {
  return (
    <Section isMain={true}>
      <h1 className="text-5xl font-extrabold leading-snug text-[#f2b786]">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic text-black mt-3">
          Kasymov Marsel
        </span>
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
        Middle Frontend developer
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
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
