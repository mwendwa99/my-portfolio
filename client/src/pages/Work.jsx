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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    gridItem: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    },
    // links: {
    //     textDecoration: 'underline',
    //     color: theme.palette.secondary.contrastText,
    // },
}));

const Work = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className={classes.root}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant="h4" align='center' gutterBottom>
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
                            <Typography variant="h4" align='center' gutterBottom>
                                <strong>Experience 💼</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <LottieAnimation lotti={world} height='100%' width='100%' />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <ControlledAccordion />
                            {/* <Typography variant="h6" align='left' gutterBottom>
                                <Typography variant="h5" align='left' gutterBottom>
                                    <strong>Junior Web Developer</strong>
                                </Typography>
                            </Typography>
                            <Typography variant="h6" align='left' gutterBottom>
                                <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                                    ConceptsHub Kenya &middot; Internship
                                </a>
                                <br />
                                <small>Jan 2021 - Mar 2021 3 mos</small>
                                <small>Nairobi, Kenya</small>
                                <br />
                                <ol>
                                    <li>Assisted the web development team with all aspects of website and application design.</li>
                                    <li>Built email templates with MJML</li>
                                    <li>Brainstormed new tech applications such as digital storage and mobile technology.</li>
                                </ol>
                            </Typography>
                            <Typography variant="h6" align='left' gutterBottom>
                                <Typography variant="h5" align='left' gutterBottom>
                                    <strong>Web Developer</strong>
                                </Typography>
                            </Typography>
                            <Typography variant="h6" align='left' gutterBottom>
                                <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                                    PemterGroup &middot; Freelance
                                </a>
                                <br />
                                <small>Jan 2021 - Jul 2021 7 mos</small>
                                <small>Nairobi, Kenya</small>
                                <br />
                                <ol>
                                    <li>Collaborated with a team of developers and designers to create a web application.</li>
                                    <li>Designed the data and presentation layer of the web application’s front-end.</li>
                                    <li>Used additional JavaScript libraries such as React Context API to manage the
                                        web application’s state, derive computed data from the state of the system,
                                        and make asynchronous API calls.</li>
                                </ol>
                            </Typography>
                            <Typography variant="h6" align='left' gutterBottom>
                                <Typography variant="h5" align='left' gutterBottom>
                                    <strong>Web Developer</strong>
                                </Typography>
                                <a href="https://vcck.org" target="_blank" rel="noopener noreferrer" className={classes.links}>
                                    Vulnerable Children Concerns Kenya &middot; Freelance
                                </a>
                                <br />
                                <small>Oct 2020 - Nov 2021 1y</small>
                                <small>Nairobi, Kenya</small>
                                <br />
                                <ol>
                                    <li>Wrote well designed, testable, efficient code by using best software
                                        development practices.</li>
                                    <li>Built website layout/user interfaces by using standard ReactJS components.</li>
                                    <li>Intergrated a backend email service with nodemailer</li>
                                </ol>
                            </Typography> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default Work
