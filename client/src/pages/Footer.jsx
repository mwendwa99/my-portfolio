import React, { memo } from 'react';
import { Box, Typography, Grid, Divider, Container, Link } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { Stack } from '@mui/material';
import { GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        // center title with icon
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    stackList: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Box id='footer' className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <Divider light>
                            <Typography variant="h4" align='center' gutterBottom className={classes.title}>
                                <strong>On the web 🌐</strong>
                            </Typography>
                        </Divider>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Stack direction="column" spacing={3} className={classes.stackList}>
                            <Link underline='hover'
                                href="https://github.com/mwendwa99"
                                target="_blank" rel="noopener noreferrer">
                                <Typography variant="h6" align='center' gutterBottom className={classes.title}>
                                    <GitHub /> &nbsp; @mwendwa99
                                </Typography>
                            </Link>
                            <Link underline='hover'
                                href="https://www.linkedin.com/in/brian-mwendwa-25326a173/"
                                target="_blank" rel="noopener noreferrer">
                                <Typography variant="h6" align='center' gutterBottom className={classes.title}>
                                    <LinkedIn /> &nbsp;Brian Mwendwa
                                </Typography>
                            </Link>
                            <Link underline='hover'
                                href="https://twitter.com/mwendwa_atl"
                                target="_blank" rel="noopener noreferrer">
                                <Typography variant="h6" align='center' gutterBottom className={classes.title}>
                                    <Twitter />&nbsp; @mwendwa_atl
                                </Typography>
                            </Link>
                            <Link underline='hover'
                                href="mailto:brianmwendwa.mu@gmail.com?subject = Feedback&body = Message"
                                rel="noopener noreferrer">
                                <Typography variant="h6" align='center' gutterBottom className={classes.title}>
                                    <Mail fontSize='small' />&nbsp; Brian mwendwa
                                </Typography>
                            </Link>
                        </Stack>
                        <Typography variant="h6" align='center' gutterBottom className={classes.title}>
                            © 2021 Brian Mwendwa. All Rights Reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default memo(Footer);
