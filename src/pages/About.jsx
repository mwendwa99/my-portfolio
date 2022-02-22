import React, { Fragment, memo } from 'react';
import { Box, Container, Divider, Fade, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { illustration } from '../assets';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        flexGrow: 1,
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
    title: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    },
}));

const Work = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Fade in timeout={1000}>
                <Box id='about' className={classes.root}>
                    <Container maxWidth="md" className={classes.container}>
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                <Divider light={true} component={'div'}>
                                    <Typography variant="h5" align='center' gutterBottom className={classes.title}>
                                        <strong>What I do 💻</strong>
                                    </Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} >
                                <Typography variant="h5" align='center' gutterBottom>
                                    Design
                                </Typography>
                                <img src={illustration.design} height={300} width="100%" alt="" />
                                <Typography variant="body1" align='center' gutterBottom>
                                    I conceptualize an idea into beautiful ui and great user experience.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Typography variant="h5" align='center' gutterBottom>
                                    Build
                                </Typography>
                                <img src={illustration.build} height={300} width="100%" alt="" />
                                <Typography variant="body1" align='center' gutterBottom>
                                    I identify, test and build software from the ground up in modern web technologies.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Typography variant="h5" align='center' gutterBottom>
                                    Deploy
                                </Typography>
                                <img src={illustration.deploy} height={300} width="100%" alt="" />
                                <Typography variant="body1" align='center' gutterBottom>
                                    I monitor cloud maintenance, planning, security and usage across the company.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Fade>
        </Fragment>
    )
}

export default memo(Work)
