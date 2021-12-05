import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
// import {motion, useViewportScroll } from 'framer-motion';

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
      <Projects />
      <Experience />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
