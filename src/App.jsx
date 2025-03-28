import React, { useEffect } from "react";
import "./index.css";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="h-full w-screen overflow-y-auto bg-[rgb(50,20,80)]">
      <Header />
      <div id="greetings" className="w-screen flex justify-center items-center">
        <Greetings />
      </div>
      <div id="skills" className="w-screen flex justify-center items-center">
        <Skills />
      </div>
      <div
        id="experience"
        className="w-screen flex justify-center items-center"
      >
        <Experience />
      </div>
      <div id="projects" className="w-screen flex justify-center items-center">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
