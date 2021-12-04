import React, { memo, Fragment } from 'react';
import { Box } from '@mui/system';
import { Typography, Container, Grid, Divider, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LottieAnimation from '../assets/animations/LottieAnimation';
import ControlledAccordion from './components/ControlledAccordion';
import world from '../assets/animations/world.json';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
        flexGrow: 1,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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
}));

const Experience = memo(() => {
    const classes = useStyles();
    return (
        <Fragment>
            <Fade in={true} timeout={1000}>
                <Box className={classes.root}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Divider light={true}>
                                    <Typography variant="h4" align='center' gutterBottom className={classes.title}>
                                        <strong>Experience 💼</strong>
                                    </Typography>
                                </Divider>
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
        </Fragment>
    );
});

export default Experience;
