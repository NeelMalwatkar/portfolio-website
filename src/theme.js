// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    background: {
      default: '#121212' // Material UI classic black
    }
  },
  typography: {
    fontFamily: 'Helvetica Neue, sans-serif',
  }
});

export default theme;
