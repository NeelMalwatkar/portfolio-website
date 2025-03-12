import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar>
        {/* Logo / Brand Name */}
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold',fontFamily:'monospace',font:'Helvetica Neue', color:'primary.light'}}>
          Neel Malwatkar
        </Typography>

        {/* Navigation Links */}
        <Button variant="text" sx={{color:"primary.light"}}>Home</Button>
        <Button variant="text" sx={{color:"primary.light"}}>Education</Button>
        <Button variant="text" sx={{color:"primary.light"}}>Skills</Button>
        <Button variant="text" sx={{color:"primary.light"}}>Experience</Button>
        <Button variant="text" sx={{color:"primary.light"}}>Projects</Button>
        <Button variant="text" sx={{color:"primary.light"}}>Socials</Button>
        <Button variant="text" sx={{color:"primary.light"}}>About Me</Button>

        {/* Mobile Menu Icon */}
        <IconButton edge="end" color="secondary" sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;