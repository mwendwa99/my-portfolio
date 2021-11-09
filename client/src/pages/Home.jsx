import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WorkAnimation from '../assets/animations/WorkAnimation';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        // marginTop: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container maxWidth="lg" style={{ backgroundColor: '' }}>
                <Grid container style={{ backgroundColor: '' }}>
                    <Grid item xs={6} className={classes.gridItem}>
                        <WorkAnimation height='100%' width='100%' />
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                        <Typography variant='h4'>Hello I am Brian Mwendwa</Typography>
                        <Typography variant='h4'>I design and build software solutions that meet your strategic needs</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Home
