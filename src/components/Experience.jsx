import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Animation variants for fade-in
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-[90%] h-full text-white my-[16rem]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {/* Title */}
      <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
        Experience
      </h2>

      {/* PT. Hexaon Bussiness Mitrasindo */}
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col w-[18rem] md:w-full">
              <h3 className="text-lg md:text-2xl font-semibold ">
                PT. Hexaon Bussiness Mitrasindo
              </h3>
              <p className="text-sm md:text-lg">
                Frontend Developer Internship
              </p>
            </div>{" "}
            <div className="w-[8rem] md:w-[14rem]">
              <p className="text-sm md:text-md text-right">
                Oct 2023 - Feb 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Line under each job */}
      <motion.div
        className="w-full h-[2px] bg-gray-400 my-4"
        variants={fadeInVariants}
      ></motion.div>

      {/* PT. Asuransi Tripakarta Intern */}
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col w-[18rem] md:w-full">
              <h3 className="text-lg md:text-2xl font-semibold ">
                PT. Asuransi Tripakarta
              </h3>
              <p className="text-sm md:text-lg">Mobile Developer Internship</p>
            </div>{" "}
            <div className="w-[8rem] md:w-[14rem]">
              <p className="text-sm md:text-md text-right">
                May 2024 - Oct 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Line under each job */}
      <motion.div
        className="w-full h-[2px] bg-gray-400 my-4"
        variants={fadeInVariants}
      ></motion.div>

      {/* PT. Asuransi Tripakarta */}
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-col w-[18rem] md:w-full">
              <h3 className="text-lg md:text-2xl font-semibold ">
                PT. Asuransi Tripakarta
              </h3>
              <p className="text-sm md:text-lg">Junior Mobile Developer</p>
            </div>
            <div className="w-[8rem] md:w-[14rem]">
              <p className="text-sm md:text-md text-right">Dec 2024 - Now</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
