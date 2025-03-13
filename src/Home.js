import { Container, Typography, Box, IconButton } from '@mui/material';
import Grid from "@mui/material/Grid2"; // Correct import for Grid v2
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from './assets/NeelMemoji.png'; // Add your profile image in the project
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Home() {
  const text = "Hello! I am Neel.";
  const subintro1 = "A backend developer, passionate about solving problems using AI.";

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
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
    <Container sx={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side: Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold"component="div" gutterBottom sx={{ color: "secondary.light" }}>
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
              {chars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.02,
                    ease: 'easeInOut',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </Typography>

          <Typography variant="h6" component="div" sx={{ color: "secondary.light" }}>
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
              {chars1.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.01 + 0.4,
                    ease: 'easeInOut',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </Typography>
        </Grid>

        {/* Right Side: Profile Image */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box component="img" src={profilePic} alt="Neel" sx={{ width: 450, borderRadius: '0%' }} />
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
        }}
      >
        {/* LinkedIn */}
        <IconButton
          href="https://linkedin.com/in/neelmalwatkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0077b5', mx: 1 }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        {/* Twitter */}
        {/* <IconButton
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1DA1F2', mx: 1 }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton> */}

        {/* GitHub */}
        <IconButton
          href="https://github.com/NeelMalwatkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#333', mx: 1 }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        {/* Instagram */}
        <IconButton
          href="https://instagram.com/neelofthehousemalwatkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#E4405F', mx: 1 }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Home;
