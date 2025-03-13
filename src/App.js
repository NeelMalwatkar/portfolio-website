import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

// Pages
import NavBar from './NavBar'; 
import Home from './Home';
import Education from './Education';
import Skills from './Skills';
import Skills2 from './skills2';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Footer from "./Footer";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

function App() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Sections with IDs */}
      <div id="home">
        <Home />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </>
  );
}

export default App;

