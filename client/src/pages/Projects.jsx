import React, { useState, useEffect, Fragment, memo } from 'react';
import { Box, Grid, Typography, Button, Divider, Container, createStyles, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(2),
        },
        container: {
            height: '100%',
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            // backgroundColor: 'grey',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        title: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
        },
        gridItems: {
            // padding: theme.spacing(2),
            backgroundColor: 'grey',
            margin: theme.spacing(2),
        }
    }),
);


const Projects = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Fade timeout={1000} in={true}>
                <Box className={classes.root}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container className={classes.gridContainer}>
                            <Grid item xs={12}>
                                <Divider light>
                                    <Typography variant="h4" align='center' gutterBottom className={classes.title}>
                                        <strong>Projects 🧪</strong>
                                    </Typography>
                                </Divider>
                            </Grid>
                            <Grid container >
                                <Grid item xs={4} className={classes.gridItems}>
                                    <Typography variant="h6">
                                        Coming soon...
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItems}>
                                    <Typography variant="h6">
                                        Coming soon...
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItems}>
                                    <Typography variant="h6">
                                        Coming soon...
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Fade>
        </Fragment>
    );
}

export default memo(Projects);