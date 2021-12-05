import React from 'react';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //react-router-dom v6

import { dark, light } from './themes/Theme';
import { useTheme } from './context/themeContext';
import './App.css';
import { Home, About, Projects, Experience, Footer } from './pages';



function App() {
  const { theme } = useTheme();


  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/footer" element={<} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
