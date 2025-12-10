"use client";

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          key="navbar"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          <AppBar
            position="static"
            sx={{
              bgcolor: "rgba(18, 18, 18, 0.9)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                Neel.dev
              </Typography>

              <Box>
                <Button href="#education" sx={{ color: "white" }}>
                  Education
                </Button>
                <Button href="#projects" sx={{ color: "white" }}>
                  Projects
                </Button>
                <Button href="#contact" sx={{ color: "white" }}>
                  Contact
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
