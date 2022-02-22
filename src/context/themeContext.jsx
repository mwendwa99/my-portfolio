import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('');

const AppThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    const values = { changeTheme, theme }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { useTheme, AppThemeProvider }
