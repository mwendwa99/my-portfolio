import React from 'react';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

import { dark, light } from './themes/Theme';
import { useTheme } from './context/themeContext';
import './App.css';
import { Home, About, Projects, Experience, Footer } from './pages';



function App() {
  const { theme } = useTheme();


  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <CssBaseline />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
