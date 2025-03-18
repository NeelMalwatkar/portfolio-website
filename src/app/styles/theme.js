// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Enables dark mode
    primary: {
      light: '#03346E', 
      main: '#03346E', 
      dark: '#DAD7CD', 
      contrastText: '#FFFFFF', // Text color for contrast
    },
    secondary: {
      light: '#0E1116', // rich black
      main: '#018786', // Deep teal
      dark: '#00574B', // Darker shade
      contrastText: '#FFFFFF', // Text color for contrast
    },
    background: {
      default: '#F8F8F8', // rich black
      paper: '#1E1E1E', // Slightly lighter for contrast
    },
    text: {
      primary: '#FFFFFF', // White text
      secondary: '#B0B0B0', // Light gray for subtext
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue, sans-serif',
  },
});

export default theme;

// rich black : 0E1116
// yale blue : 03346E
// tan : D0A98F
// greyish timberwolf: DAD7CD