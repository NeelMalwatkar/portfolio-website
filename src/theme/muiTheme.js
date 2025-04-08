// src/theme/muiTheme.js
"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "var(--primary)", // will be read from CSS
    },
    secondary: {
      main: "var(--secondary)",
    },
    background: {
      default: "var(--background)",
      paper: "var(--background)",
    },
    text: {
      primary: "var(--foreground)",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
});

export default theme;
