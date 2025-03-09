import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar>
        {/* Logo / Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold',fontFamily:'monospace',font:'Helvetica Neue' }}>
          Neel Malwatkar
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>

        {/* Mobile Menu Icon */}
        <IconButton edge="end" color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;