import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="w-full bg-[#29132e] text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <a
            href="https://github.com/rafifza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-rafif-zahdana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-gray-300 transition-colors" />
          </a>
        </div>

        {/* Contact Info */}
        <p className="text-sm mb-2">Email: rafifzahdana14@gmail.com</p>

        {/* Copyright */}
        <p className="text-xs mt-4 text-gray-200">
          &copy; {new Date().getFullYear()} Muhammad Rafif Zahdana. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
