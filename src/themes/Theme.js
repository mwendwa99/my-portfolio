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
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#16213E',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#F3F2C9',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1A1A2E',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1A1A2E',
                    padding: '0px',
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
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#003638',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    color: '#F3F2C9',
                },
            },
        },
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
        MuiDivider: {
            styleOverrides: {
                root: {
                    " &:before": {
                        borderTop: '1px solid #F3F2C9',
                    },
                    " &:after": {
                        borderTop: '1px solid #F3F2C9',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#055052',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#53B8BB',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#003638',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#003638',
                    padding: '0px',
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
        text: {
            primary: '#F3F2C9',
            secondary: '#57CC99',
        },
        mode: 'light',
    },
})


export { dark, light };