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

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Education />
      <Skills/>
      <Skills2/>
      <Experience/>
      <Projects/>

    </>
  );
}

export default App;

