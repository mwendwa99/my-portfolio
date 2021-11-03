import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    palette: {
        // primary: {
        //     main: '#0c0032',
        //     light: '#190061'
        // },
        // secondary: {
        //     main: '#420090',
        //     light: '#3500d3'
        // },
        mode: 'dark',
    },
});

const light = createTheme({
    palette: {
        grey: {
            main: '#282828',
        },
        primary: {
            main: '#0c0032',
            light: '#190061',
            contrastText: '#fff'
        },
        secondary: {
            main: '#420090',
            light: '#3500d3',
            contrastText: '#fff'
        },
        mode: 'light',
    },
})

export { dark, light };