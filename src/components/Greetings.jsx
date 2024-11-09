import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Greetings() {
  return (
    <div className="w-[90%] text-white my-[6rem] md:my-[10rem] flex flex-col md:flex-row justify-between items-center mb-[18rem] relative">
      {/* Wrapper for mobile layout */}
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-center w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Section */}
        <div className="text-center md:text-left md:w-[50rem]">
          <h1 className="text-lg md:text-4xl font-bold mb-2">
            Muhammad Rafif Zahdana
          </h1>
          {/* Animated Job Role */}
          <h2 className="text-md md:text-xl font-semibold mb-4">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Fullstack Developer",
                2000,
                "Mobile Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h2>
          <p className="text-base text-md md:text-lg text-gray-200">
            Passionate about building seamless digital experiences, I specialize
            in full-stack development across web and mobile platforms. With
            expertise as a frontend and backend developer, I bring creativity
            and technical precision to every project. Whether crafting engaging
            interfaces or efficient server-side solutions, I am dedicated to
            delivering high-quality, scalable applications that make a
            meaningful impact.
          </p>
        </div>

        {/* Profile Photo */}
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full flex-shrink-0 overflow-hidden shadow-lg md:ml-4 mb-4 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="../../assets/photo.png"
            alt="Muhammad Rafif Zahdana"
            draggable="false"
            className="w-[100%] md:w-[10rem] h-[7rem] md:h-[120%] object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Greetings;
