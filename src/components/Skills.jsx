import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  // Left-to-right animation for section titles
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  // Right-to-left animation for the skill lists
  const skillListVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  // Fade-in animation for lines and the main title
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-[90%] text-white my-[7rem]"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Title with fade-in effect */}
      <motion.h2
        className="text-xl md:text-3xl font-bold text-center mb-8"
        variants={fadeInVariants}
      >
        My Skills
      </motion.h2>

      {/* Web Development */}
      <motion.div className="w-full" variants={titleVariants}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col w-full md:w-[40%] justify-between">
            <h3 className="text-lg md:text-2xl font-semibold">
              Web Development
            </h3>
            <p className="text-sm md:text-lg">
              I specialize in front-end development, creating clean, responsive
              interfaces that ensure intuitive user experiences. Skilled in the
              latest web technologies, I bring designs to life with attention to
              detail.
            </p>
          </div>
          {/* Skills list with right-to-left animation */}
          <motion.div
            className="w-full md:w-[20%] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 mt-4 md:mt-0"
            variants={skillListVariants}
          >
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg">React</li>
              <li className="text-sm md:text-lg">JavaScript</li>
            </ul>
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg">Tailwind CSS</li>
              <li className="text-sm md:text-lg">Material UI</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Line with fade-in animation */}
      <motion.div
        className="w-full h-[2px] bg-gray-400 my-4"
        variants={fadeInVariants}
      ></motion.div>

      {/* Mobile Development */}
      <motion.div className="w-full" variants={titleVariants}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col w-full md:w-[40%] justify-between">
            <h3 className="text-lg md:text-2xl font-semibold">
              Mobile Development
            </h3>
            <p className="text-sm md:text-lg">
              With expertise in mobile app development, I create functional and
              visually appealing apps that deliver seamless experiences across
              different devices.
            </p>
          </div>
          {/* Skills list with right-to-left animation */}
          <motion.div
            className="w-full md:w-[20%] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 mt-4 md:mt-0"
            variants={skillListVariants}
          >
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg">Flutter</li>
            </ul>
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg">React Native</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Line with fade-in animation */}
      <motion.div
        className="w-full h-[2px] bg-gray-400 my-4"
        variants={fadeInVariants}
      ></motion.div>

      {/* Backend Development */}
      <motion.div className="w-full mb-6" variants={titleVariants}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col w-full md:w-[40%] justify-between">
            <h3 className="text-lg md:text-2xl font-semibold">
              Backend Development
            </h3>
            <p className="text-sm md:text-lg">
              I build robust backend systems, focusing on efficient data
              management, secure APIs, and database interactions to ensure the
              best functionality for applications.
            </p>
          </div>
          {/* Skills list with right-to-left animation */}
          <motion.div
            className="w-full md:w-[20%] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 mt-4 md:mt-0"
            variants={skillListVariants}
          >
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg">Node.js</li>
              <li className="text-sm md:text-lg">Express</li>
            </ul>
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg">SQL</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
