import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'red',
    },
}));

const Work = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container maxwidth='xl'>
                <Typography variant="h4" gutterBottom>What I do</Typography>
                <Grid container>

                </Grid>
            </Container>
        </Box>
    )
}

export default Work
