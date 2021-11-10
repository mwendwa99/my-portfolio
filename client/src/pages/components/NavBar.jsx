import * as React from 'react';
import { Brightness4, Brightness5, MenuRounded } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography, MenuItem, Menu, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useTheme } from '../../context/themeContext';

const useStyles = makeStyles(theme => ({
    mainmenu: {
        width: "50vw",
        height: "50vh",
        background: theme.palette.background.default,
    }
}));

const NavBar = () => {
    const { changeTheme, theme } = useTheme();
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" enableColorOnDark elevation={0} >
                <Toolbar>
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Container>
                    </Menu>


                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;