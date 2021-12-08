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
        gridContainer: {
            // center the grid items
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
        },
        gridItems: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
        },
        title: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
        },
    }),
);


const Projects = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Fade timeout={1000} in={true}>
                <Box id='projects' className={classes.root}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container className={classes.gridContainer}>
                            <Grid item xs={12}>
                                <Divider light>
                                    <Typography variant="h4" align='center' gutterBottom className={classes.title}>
                                        <strong>Projects 🧪</strong>
                                    </Typography>
                                </Divider>
                            </Grid>
                            <Grid container className={classes.gridContainer}>
                                <Grid item xs={12} sm={4} className={classes.gridItems}>
                                    <ActionAreaCard
                                        image={images.vcck}
                                        title='Vulnerable Children Concerns Kenya'
                                        description='A local NGO that works to 
                                        achieve sustainable solutions to ending children poverty.'
                                        link='https://vcck.org/'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.gridItems}>
                                    <ActionAreaCard
                                        image={images.divvy}
                                        title='Divvy Analytics'
                                        description='I built a gui for analysing the data collected by Divvy bike sharing app
                                        in C++.'
                                        link='https://github.com/mwendwa99/divvy-analysis'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.gridItems}>
                                    <ActionAreaCard
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