import * as React from 'react';
import { Brightness4, Brightness5, Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import { useTheme } from '../context/themeContext';

export default function NavBar() {
    const { changeTheme, theme } = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Mwendwa
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
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
