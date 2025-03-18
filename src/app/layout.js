
// import './styles/globals.css' // Ensure this path matches your CSS location
// import { ThemeProvider, CssBaseline } from '@mui/material'
// import theme from './styles/theme'


export const metadata = {
    title: 'Neel Malwatkar | Portfolio',
    description: 'Hello There! I am Neel. Use this website to get to know me better.',
  }


export default function RootLayout({ children }) {
    return (
        
        <html lang="en">
          <head>

            {/*  uncomment if icon not loaded.
            <link rel="icon" href="%PUBLIC_URL%/assets/NeelMemoji.png" />           
            <link rel="manifest" href="%PUBLIC_URL%/assets/NeelMemoji.png" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/assets/NeelMemoji.png" /> 
            */}

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          </head>
          <body>
        <div id="root">
        {/* <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider> */}
        {children}
            </div>
      </body>
        </html>
        )
  }