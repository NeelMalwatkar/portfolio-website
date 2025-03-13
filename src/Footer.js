import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        // color: "white",
        textAlign: "center",
        py: 2,
        mt: 4,
        bottom: 0, 
        left: 0, 
        width: "100%"
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Neel Malwatkar. All Rights Reserved.</Typography>
      
      {/* Social Icons */}
      <Box mt={1}>
        <IconButton href="https://github.com/NeelMalwatkar" target="_blank" sx={{ color: "white" }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/neelmalwatkar" target="_blank" sx={{ color: "white" }}>
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:nmalwatkar@ufl.edu" sx={{ color: "white" }}>
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
