import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="w-full h-[4rem] flex justify-center items-center bg-[rgb(50,20,80)] drop-shadow-md fixed top-0 z-50">
      <div className="w-[90%] flex justify-between items-center">
        <p className="text-md md:text-xl font-bold text-white">Rafif Zahdana</p>

        {/* Burger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation links for desktop and mobile */}
        <div
          className={`flex flex-col md:flex-row md:gap-[4rem] ${
            isMenuOpen
              ? "absolute top-[4rem] left-0 h-full w-full bg-[rgb(50,20,80)] md:hidden items-center"
              : "hidden md:flex"
          }`}
          style={{
            height: isMenuOpen ? "100vh" : "10rem",
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          <button
            onClick={() => scrollToSection("greetings")}
            className="text-white cursor-pointer font-semibold p-4"
          >
            Greetings
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white cursor-pointer font-semibold p-4"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-white cursor-pointer font-semibold p-4"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white cursor-pointer font-semibold p-4"
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
