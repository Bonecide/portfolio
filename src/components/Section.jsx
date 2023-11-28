import { motion } from "framer-motion";

export const Section = ({ children }) => {
  return (
    <motion.section
      className={`
       min-h-screen w-screen p-8 pl-[50px] max-w-screen-2xl mx-auto flex flex-col items-start justify-center
        `}
      style={{ scrollSnapAlign: "center" }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.1,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
