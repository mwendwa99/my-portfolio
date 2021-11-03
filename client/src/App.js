import React from 'react';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

import { dark, light } from './themes/Theme';
import { useTheme } from './context/themeContext';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';

function App() {
  const { theme } = useTheme()
  console.log(theme)
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <CssBaseline />
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
