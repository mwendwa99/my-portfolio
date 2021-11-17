import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        button: {
            textTransform: 'none'
        },
    },
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: '#16213E',
                },
            },
        },
    },
    palette: {
        background: {
            default: '#1A1A2E',
        },
        primary: {
            main: '#16213E',
            light: '#0F3460',
            dark: '#003638',
            contrastText: '#F3F2C9'
        },
        secondary: {
            main: '#362222',
            light: '#423F3E',
            dark: '#171010',
            contrastText: '#F3F2C9'
        },
        mode: 'dark',
    },
});

const light = createTheme({
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: '#055052',
                    '& small': {
                        color: '#F3F2C9',
                    }
                },
            },
        },
    },
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        button: {
            textTransform: 'none'
        },
        allVariants: {
            color: '#F3F2C9',
        },
    },
    palette: {
        background: {
            default: '#003638',
        },
        primary: {
            main: '#055052',
            light: '#53B8BB',
            dark: '#003638',
            contrastText: '#F3F2C9'
        },
        secondary: {
            main: '#38A3A5',
            light: '#57CC99',
            dark: '#22577A',
            contrastText: '#F3F2C9'
        },
        mode: 'light',
    },
})


export { dark, light };