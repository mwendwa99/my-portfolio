import React from 'react';
import { Box, Container, Fade, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ControlledAccordion from './components/ControlledAccordion';
import LottieAnimation from '../assets/animations/LottieAnimation';
import build from '../assets/animations/build.json';
import design from '../assets/animations/design.json';
import deploy from '../assets/animations/deploy.json';
import world from '../assets/animations/world.json';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
    },
    container: {
        height: '100%',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    gridItem: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));

const Work = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className={classes.root}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant="h4" align='center' gutterBottom className={classes.title}>
                                <strong>What I do 💻</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} className={classes.gridItem}>
                            <Typography variant="h5" align='center' gutterBottom>
                                <strong>Design</strong>
                            </Typography>
                            <LottieAnimation lotti={design} height={250} width='100%' />
                            <Typography variant="h6" align='center' gutterBottom>
                                I conceptualize an idea into beautiful ui and great user experience.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography variant="h5" align='center' gutterBottom>
                                <strong>Build</strong>
                            </Typography>
                            <LottieAnimation lotti={build} height={250} width='100%' />
                            <Typography variant="h6" align='center' gutterBottom>
                                I identify, test and build software from the ground up in modern web technologies.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography variant="h5" align='center' gutterBottom>
                                <strong>Deploy</strong>
                            </Typography>
                            <LottieAnimation lotti={deploy} height={250} width='100%' />
                            <Typography variant="h6" align='center' gutterBottom>
                                I monitor cloud maintenance, planning, security and usage across the company.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" align='center' gutterBottom className={classes.title}>
                                <strong>Experience 💼</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <LottieAnimation lotti={world} height='100%' width='100%' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <ControlledAccordion />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default Work
