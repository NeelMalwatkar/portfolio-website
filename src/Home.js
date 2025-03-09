
import { Container, Grid, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';
// import profilePic from './profile.jpg'; // Add your profile image in the project
import profilePic from './logo.svg'; // Add your profile image in the project


function Home() {
    const text = "Hello, I am Neel";
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } }
      };
        const chars = text.split("");
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
              </motion.div>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                A passionate developer with expertise in backend and full-stack development.
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Enthusiastic about problem-solving and software architecture.
              </Typography>
            </Grid>
    
            {/* Right Side: Profile Image */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Box component="img" src={profilePic} alt="Neel" sx={{ width: 250, height: 250, borderRadius: '50%' }} />
            </Grid>
          </Grid>

        </Container>
  );
}

export default Home;
