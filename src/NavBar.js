import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // List of menu items
  const menuItems = [
    { text: 'Education', id: 'education' },
    { text: 'Skills', id: 'skills' },
    { text: 'Experience', id: 'experience' },
    { text: 'Projects', id: 'projects' },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" color="default" elevation={2}>
        <Toolbar>
          {/* Logo / Brand Name */}
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              fontFamily: 'monospace',
              font: 'Helvetica Neue',
              color: 'primary.light',
              cursor: 'pointer',
            }}
            onClick={() => {
              // Scroll to Home section when clicking the logo
              const homeSection = document.getElementById('home');
              homeSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Neel Malwatkar
          </Typography>

          {/* Desktop Navigation Links */}
          <div style={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                variant="text"
                sx={{ color: 'primary.light' }}
              >
                {item.text}
              </Button>
            ))}
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <IconButton
            edge="end"
            color="secondary"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.id}
              onClick={() => {
                // Close drawer and scroll to section
                setDrawerOpen(false);
                const section = document.getElementById(item.id);
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
