import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LottieAnimation from '../assets/animations/LottieAnimation';
import build from '../assets/animations/build.json';
import design from '../assets/animations/design.json';
import deploy from '../assets/animations/deploy.json';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'red',

    },
    gridItem: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    },
}));

const Work = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container maxwidth='xl'>
                <Typography variant="h5" align='center' gutterBottom>
                    <strong>What I do</strong>
                </Typography>
                <Grid container>
                    <Grid item xs={12} sm={4} md={4} className={classes.gridItem}>
                        <Box p={2}>
                            <Typography variant="h6" align='center' gutterBottom>
                                <strong>Design</strong>
                            </Typography>
                            <LottieAnimation lotti={design} height={200} width='100%' />
                            <Typography variant="h6" align='center' gutterBottom>
                                I design user friendly and intuitive interfaces.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box p={2}>
                            <Typography variant="h6" align='center' gutterBottom>
                                <strong>Build</strong>
                            </Typography>
                            <LottieAnimation lotti={build} height={200} width='100%' />
                            <Typography variant="h6" align='center' gutterBottom>
                                I build websites and web applications using the latest technologies.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box p={2}>
                            <Typography variant="h6" align='center' gutterBottom>
                                <strong>Deploy</strong>
                            </Typography>
                            <LottieAnimation lotti={deploy} height={200} width='100%' />
                            <Typography variant="h6" align='center' gutterBottom>
                                I deploy websites and web applications to the cloud.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Work
