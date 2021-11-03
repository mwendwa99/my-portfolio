import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
    },
    palette: {
        mode: 'dark',
    },
});

const light = createTheme({
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
    },
    palette: {
        background: {
            default: '#88bdbc',
        },
        dark: {
            main: '#112d32',
        },
        primary: {
            main: '#88bdbc',
            light: '#254e58',
            contrastText: '#fff'
        },
        secondary: {
            main: '#4f4a41',
            light: '#6e6658',
            contrastText: '#fff'
        },
        mode: 'light',
    },
})

export { dark, light };