import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LottieAnimation from '../assets/animations/LottieAnimation';
import build from '../assets/animations/build.json';
import design from '../assets/animations/design.json';
import deploy from '../assets/animations/deploy.json';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
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
            <Typography variant="h5" align='center' gutterBottom>
                <strong>What I do</strong>
            </Typography>
            <Grid container sx={{ m: 2 }}>
                <Grid item xs={12} sm={4} md={4} className={classes.gridItem}>
                    {/* <Box p={2}> */}
                    <Typography variant="h6" align='center' gutterBottom>
                        <strong>Design</strong>
                    </Typography>
                    <LottieAnimation lotti={design} height={250} width='100%' />
                    <Typography variant="h6" align='center' gutterBottom>
                        I conceptualize an idea into beautiful ui and great user experience.
                    </Typography>
                    {/* </Box> */}
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    {/* <Box p={2}> */}
                    <Typography variant="h6" align='center' gutterBottom>
                        <strong>Build</strong>
                    </Typography>
                    <LottieAnimation lotti={build} height={250} width='100%' />
                    <Typography variant="h6" align='center' gutterBottom>
                        I identify, test and build software from the ground up in modern web technologies.
                    </Typography>
                    {/* </Box> */}
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    {/* <Box p={2} style={{display:'flex', flexDirection:'column'}}> */}
                    <Typography variant="h6" align='center' gutterBottom>
                        <strong>Deploy</strong>
                    </Typography>
                    <LottieAnimation lotti={deploy} height={250} width='100%' />
                    <Typography variant="h6" align='center' gutterBottom>
                        I monitor cloud maintenance, planning, security and usage across the company.
                    </Typography>
                    {/* </Box> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Work
