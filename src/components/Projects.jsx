import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";

// ProjectItem component to handle individual project animations
function ProjectItem({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: project.id * 0.2,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={project.imgSrc}
        alt={project.title}
        draggable="false"
        className={`object-cover rounded-lg ${
          project.id === 1 || project.id === 2 ? "w-68 h-48" : "w-36 h-76"
        }`}
      />
      <p className="text-lg mt-2 text-white font-semibold">{project.title}</p>
    </motion.div>
  );
}

// PropTypes validation for ProjectItem component
ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

// Main Projects component
function Projects() {
  // Placeholder data for projects
  const projectData = [
    { id: 1, title: "LAFORANT", imgSrc: "../../assets/ss1.png" },
    { id: 2, title: "RentAFields", imgSrc: "../../assets/ss2.png" },
    { id: 3, title: "Sales Report", imgSrc: "../../assets/salesreport.png" },
    { id: 4, title: "iCafe Connect", imgSrc: "../../assets/Homepage.png" },
  ];

  return (
    <div className="flex flex-col w-[90%] justify-between my-[6rem]">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-bold mb-8 text-white">
          Projects
        </h2>
      </div>
      {/* Responsive grid: 1 column on mobile, 2 columns on medium and larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
