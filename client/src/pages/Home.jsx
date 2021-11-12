import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, Divider, Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AttachFile } from '@mui/icons-material';
import { animated, useSpring } from 'react-spring';

import LottieAnimation from '../assets/animations/LottieAnimation';
import work from '../assets/animations/working-man.json';
import scroll from '../assets/animations/scroll-down-animation.json';
import upwards from '../assets/animations/upwards.json';
import Pdf from '../document/Resume-Brian-Mwendwa.pdf';
import Work from './Work';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F3F2C9',
        marginTop: '15%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '170%',
        },
    },
    container: {
        // marginTop: '30%',
        // [theme.breakpoints.down('sm')]: {
        //     marginTop: '50%',
        // },
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        // alignItems: 'center',
        height: 'auto',
        textAlign: 'center',
    },
    fab: {
        padding: theme.spacing(2),
        // marginTop: theme.spacing(10),
    }
}));

const Home = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 900px)');
    // spring props
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <Box className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container className={classes.gridContainer}>
                    <Grid item sm={6} xs={12} className={classes.gridItem}>
                        <animated.div style={props}>
                            <LottieAnimation lotti={work} height='100%' width='100%' />
                        </animated.div>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridItem}>
                        <Typography variant='h4' gutterBottom>
                            <strong>Hello I am Brian Mwendwa</strong>
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                            I design and build software solutions that meet your strategic needs.
                            I am skilled in web and mobile development with over 2 years of experience
                            developing products for a diverse range of clients.
                        </Typography>
                        <br />
                        <Divider variant='middle' flexItem light style={{ backgroundColor: '#F3F2C9' }} />
                        <br />
                        <Fab variant='extended' color='secondary' size='large'
                            onClick={() => window.open(Pdf, '_blank')} className={classes.fab}>
                            <AttachFile fontSize='medium' sx={{ mr: 1 }} />
                            <Typography variant='h6'>
                                View My Resume
                            </Typography>
                        </Fab>
                    </Grid>
                    {
                        isMobile ? <LottieAnimation lotti={scroll} height={90} width='100%' />
                            : <LottieAnimation lotti={upwards} height={100} width={100} />
                    }
                </Grid>

            </Container>
            <Container maxWidth='lg'>
                <animated.div style={props}>
                    <Work />
                </animated.div>
            </Container>
        </Box >
    )
}

export default Home
