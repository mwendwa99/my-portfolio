import React, { Fragment, memo } from 'react';
import { Box, Grid, Typography, Divider, Container, createStyles, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ActionAreaCard from './components/ActionAreaCard';
import { images } from '../assets';

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
            // backgroundColor: 'grey',
            margin: theme.spacing(2),
            height: '100%',
        },
        card: {
            height: '20rem',
            width: '100%',
        },
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
                            <Grid container>
                                <Grid item xs={12} sm={4} className={classes.gridItems}>
                                    <ActionAreaCard
                                        className={classes.card}
                                        image={images.vcck}
                                        title='Vulnerable Children Concerns Kenya'
                                        description='A local NGO that works to 
                                        achieve sustainable solutions to ending children poverty.'
                                        link='https://vcck.org/'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.gridItems}>
                                    <ActionAreaCard
                                        className={classes.card}
                                        image={images.divvy}
                                        title='Divvy Analytics'
                                        description='I built a gui for analysing the data collected by Divvy bike sharing app
                                        in C++.'
                                        link='https://github.com/mwendwa99/divvy-analysis'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.gridItems}>
                                    <ActionAreaCard
                                        className={classes.card}
                                        image={images.shoppy}
                                        title='Shoppy Mobile App'
                                        description='I built an ecommerce mobile application for a fictional business
                                        in React Native.'
                                        link='https://github.com/mwendwa99/shoppy-final'
                                    />
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