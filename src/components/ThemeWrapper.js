// src/components/ThemeWrapper.js
"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import themeConfig from "@/theme/theme.config";

export default function ThemeWrapper({ children, mode = "light" }) {
  const [muiTheme, setMuiTheme] = useState(null);

  useEffect(() => {
    const current = themeConfig[mode];

    // ✅ Apply to CSS variables
    for (const key in current) {
      document.documentElement.style.setProperty(`--${key}`, current[key]);
    }

    // ✅ Create actual theme values
    const builtTheme = createTheme({
      palette: {
        mode,
        primary: { main: current.primary },
        secondary: { main: current.secondary },
        background: {
          default: current.background,
          paper: current.background,
        },
        text: {
          primary: current.foreground,
        },
      },
      typography: {
        fontFamily: "var(--font-geist-sans), Arial, sans-serif",
      },
    });

    setMuiTheme(builtTheme);
  }, [mode]);

  if (!muiTheme) return null; // Wait until theme is built

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
