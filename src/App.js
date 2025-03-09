import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Home from './Home';
import About from './About';
import NavBar from './NavBar'; 

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;

