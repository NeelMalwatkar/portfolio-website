
import { Container, Grid, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
import profilePic from './assets/NeelMemoji.png'; // Add your profile image in the project


function Home() {
    const text = "Hello! I am Neel.";
    const subintro1="A backend developer, passionate about solving problems using AI."


    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } }
      };

    const chars = text.split("");
    const chars1 = subintro1.split("");

    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCursorVisible(!cursorVisible);
        }, 500);
    
        return () => clearInterval(intervalId);
      }, []);
            
  return (
     <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center" style={{ height: '70vh' }}>
            {/* Left Side: Text */}
            <Grid item xs={12} md={6}>
            <Typography variant="h3" component="div" gutterBottom sx={{color:"secondary.light"}}>
              <motion.div initial="hidden" animate="visible" variants={textVariants}>
              {chars.map((char, index) => (
                    <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: index * 0.1,
                        ease: 'easeInOut',
                    }}
                    >
                    {char}
                    </motion.span>
                ))}
              </motion.div></Typography>

              <Typography variant="h6" component="div"sx={{color:"secondary.light"}}>
              <motion.div initial="hidden" animate="visible" variants={textVariants}>
              {chars1.map((char, index) => (
                    <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: (index * 0.1)+2,
                        ease: 'easeInOut',
                    }}
                    >
                    {char}
                    </motion.span>
                ))}
              </motion.div></Typography>
            </Grid>
    
            {/* Right Side: Profile Image */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Box component="img" src={profilePic} alt="Neel" sx={{ width: 450, borderRadius: '0%' }} />
            </Grid>
          </Grid>

        </Container>
  );
}

export default Home;
