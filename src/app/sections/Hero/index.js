"use client";

import { Container, Typography, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct import for Grid v2
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import TwitterIcon from "@mui/icons-material/Twitter"; // Uncomment if needed
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "@/app/components/Navbar"; 

//Path fo the main page pic.
const mainPic_src="/NeelMemoji.png"



function Home() {
  const text = "Hello There! I am Neel.";
  const subintro1 =
    "A backend developer, passionate about solving problems using AI.";

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const chars = text.split("");
  const chars1 = subintro1.split("");

  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  // return (
  //   <Container
  //     sx={{
  //       minHeight: "100vh",
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       position: "relative",
  //     }}
  //   >
  //     <Grid container spacing={4} alignItems="center" justifyContent="center">
  //       {/* Left Side: Text */}
  //       <Grid item xs={12} md={6}>
  //         <Typography
  //           variant="h3"
  //           fontWeight="bold"
  //           component="div"
  //           gutterBottom
  //           sx={{ color: "primary.main" }}
  //         >
  //           <motion.div
  //             initial="hidden"
  //             animate="visible"
  //             variants={textVariants}
  //           >
  //             {chars.map((char, index) => (
  //               <motion.span
  //                 key={index}
  //                 initial={{ opacity: 0 }}
  //                 animate={{ opacity: 1 }}
  //                 transition={{
  //                   duration: 0.1,
  //                   delay: index * 0.02,
  //                   ease: "easeInOut",
  //                 }}
  //               >
  //                 {char}
  //               </motion.span>
  //             ))}
  //           </motion.div>
  //         </Typography>

  //         <Typography
  //           variant="h6"
  //           component="div"
  //           sx={{ color: "secondary.light" }}
  //         >
  //           <motion.div
  //             initial="hidden"
  //             animate="visible"
  //             variants={textVariants}
  //           >
  //             {chars1.map((char, index) => (
  //               <motion.span
  //                 key={index}
  //                 initial={{ opacity: 0 }}
  //                 animate={{ opacity: 1 }}
  //                 transition={{
  //                   duration: 0.1,
  //                   delay: index * 0.01 + 0.4,
  //                   ease: "easeInOut",
  //                 }}
  //               >
  //                 {char}
  //               </motion.span>
  //             ))}
  //           </motion.div>
  //         </Typography>
  //       </Grid>

  //       {/* Right Side: Profile Image */}
  //       <Grid item xs={12} md={6} display="flex" justifyContent="center">
  //         <Box
  //           component="img"
  //           src={mainPic_src}
  //           alt="Neel"
  //           sx={{ width: 450, borderRadius: "0%" }}
  //         />
  //       </Grid>
  //     </Grid>

  //     {/* Social Media Icons */}
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       mt={4}
  //       sx={{
  //         position: "absolute",
  //         bottom: "20px",
  //         width: "100%",
  //       }}
  //     >
  //       {/* LinkedIn */}
  //       <IconButton
  //         href="https://linkedin.com/in/neelmalwatkar"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         sx={{ color: "#0077b5", mx: 1 }}
  //       >
  //         <LinkedInIcon fontSize="large" />
  //       </IconButton>

  //       {/* GitHub */}
  //       <IconButton
  //         href="https://github.com/NeelMalwatkar"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         sx={{ color: "#333", mx: 1 }}
  //       >
  //         <GitHubIcon fontSize="large" />
  //       </IconButton>

  //       {/* Instagram */}
  //       <IconButton
  //         href="https://instagram.com/neelofthehousemalwatkar"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         sx={{ color: "#E4405F", mx: 1 }}
  //       >
  //         <InstagramIcon fontSize="large" />
  //       </IconButton>
  //     </Box>
  //   </Container>
  // );
  return (
    <>
    <Navbar/>
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
    <Grid
  container
  spacing={4}
  sx={{
    height: "100%",
    flexWrap: "nowrap", // prevent wrapping!
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* Text Column */}
  <Grid
    item
    xs={6}
    sx={{
      flex: 1,
      minWidth: 0, // IMPORTANT: allows internal wrapping
      pr: 4, // adds some breathing room
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "primary.main" }}
      >
        Hello There! I am Neel.
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1}}
    >
      <Typography
        variant="h6"
        sx={{ color: "secondary.light",mt: 2,
          whiteSpace: "normal", // ensures it wraps
          wordBreak: "break-word", // break long words if needed
        }}
      >
        From deploying scalable cloud apps to training ML models and crafting clean software — I blend code with cognition to build smart, reliable systems.
      </Typography>
    </motion.div>
  </Grid>

  {/* Image Column */}
  <Grid
    item
    xs={6}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        component="img"
        src={mainPic_src}
        alt="Neel"
        sx={{
          width: 450,
          maxWidth: "100%", // responsive on smaller screens
          height: "auto",
          borderRadius: "0%",
        }}
      />
    </motion.div>
  </Grid>
</Grid>
<Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        sx={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
        }}
      >
        {/* LinkedIn */}
        <IconButton
          href="https://linkedin.com/in/neelmalwatkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0077b5", mx: 1 }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        {/* GitHub */}
        <IconButton
          href="https://github.com/NeelMalwatkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#333", mx: 1 }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        {/* Instagram */}
        <IconButton
          href="https://instagram.com/neelofthehousemalwatkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#E4405F", mx: 1 }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>

</Container>
</>
);
}

export default Home;
