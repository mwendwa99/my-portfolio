import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LottieAnimation from '../assets/animations/LottieAnimation';
import work from '../assets/animations/working-man.json';
import scroll from '../assets/animations/scroll-down-animation.json';
import upwards from '../assets/animations/upwards.json';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F3F2C9',
        // [theme.breakpoints.down('md')]: {
        //     fontSize: '0.5rem',
        // },
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        textAlign: 'center',
    },
}));

const Home = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 900px)');

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={6} xs={12} className={classes.gridItem}>
                        <LottieAnimation lotti={work} height='100%' width='100%' />
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridItem}>
                        <Typography variant='h4' gutterBottom>
                            <strong>Hello I am Brian Mwendwa</strong>
                        </Typography>
                        <br />
                        <Typography variant='h5' align='left'>
                            I design and build software solutions that meet your strategic needs.
                            I am skilled in web and mobile development with over 2 years of experience
                            developing products for a diverse range of clients.
                        </Typography>
                    </Grid>
                    {
                        isMobile ? <LottieAnimation lotti={scroll} height='100%' width='100%' />
                            : <LottieAnimation lotti={upwards} height='20%' width='20%' />
                    }
                </Grid>
            </Container>
        </Box >
    )
}

export default Home
