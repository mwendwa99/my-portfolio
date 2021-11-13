import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, Divider, Fab, Fade, AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AttachFile, Brightness4, Brightness5, MenuRounded } from '@mui/icons-material';

import LottieAnimation from '../assets/animations/LottieAnimation';
import work from '../assets/animations/working-man.json';
import scroll from '../assets/animations/scroll-down-animation.json';
import Pdf from '../document/Resume-Brian-Mwendwa.pdf';
import { useTheme } from '../context/themeContext';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        textAlign: 'center',
    },
    fab: {
        padding: theme.spacing(2),
    }
}));

const Home = () => {
    const { changeTheme, theme } = useTheme();
    const classes = useStyles();

    const isMobile = useMediaQuery('(min-width: 900px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Fade in timeout={1000}>
            <Box>
                <AppBar className={classes.appbar} enableColorOnDark elevation={0} >
                    <Toolbar variant='dense'>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            <strong>mwendwa</strong>
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => changeTheme()}>
                            {
                                theme === 'light' ? <Brightness5 /> : <Brightness4 />
                            }
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ m: 2 }}
                            // onclick set menu to open
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuRounded />
                        </IconButton>
                        <Menu
                            component="div"
                            id="basic-menu"
                            keepMounted
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <Container className={classes.mainmenu}>
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                                <MenuItem onClick={handleClose}>Work</MenuItem>
                                <MenuItem onClick={handleClose}>About</MenuItem>
                            </Container>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={6} xs={12} className={classes.gridItem}>
                            <LottieAnimation lotti={work} height='100%' width='100%' />
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
                        <Grid item style={{ position: 'absolute', bottom: '0', }}>
                            {
                                isMobile ? (
                                    <div>
                                        <LottieAnimation lotti={scroll} height='100%' width='100%' />
                                    </div>
                                ) : null
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box >
        </Fade>
    )
}

export default Home
