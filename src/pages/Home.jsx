import React, { useState, memo } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Divider,
  Fab,
  Fade,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AttachFile,
  Brightness4,
  Brightness5,
  MenuRounded,
} from "@mui/icons-material";

import LottieAnimation from "../assets/animations/LottieAnimation";
import work from "../assets/animations/working-man.json";
import scroll from "../assets/animations/scroll-down-animation.json";
import Pdf from "../document/Resume-Brian-Mwendwa.pdf";
import { useTheme } from "../context/themeContext";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    textAlign: "center",
  },
  fab: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const { changeTheme, theme } = useTheme();
  const classes = useStyles();

  const isMobile = useMediaQuery("(min-width: 900px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRoute = (e) => {
    // const route = e.target.id
    // window scroll to id
    const element = document.getElementById(e.target.id);
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });.
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Fade in timeout={1000}>
        <Box id="home">
          <AppBar className={classes.appbar} enableColorOnDark elevation={0}>
            <Toolbar variant="regular">
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                mwendwa
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => changeTheme()}
              >
                {theme === "light" ? <Brightness5 /> : <Brightness4 />}
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ m: 2 }}
                // onclick set menu to open
                aria-expanded={open ? "true" : undefined}
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
                <MenuItem divider id="home" onClick={(e) => handleRoute(e)}>
                  Home
                </MenuItem>
                <MenuItem divider id="about" onClick={(e) => handleRoute(e)}>
                  About
                </MenuItem>
                <MenuItem divider id="projects" onClick={(e) => handleRoute(e)}>
                  Projects
                </MenuItem>
                <MenuItem
                  divider
                  id="experience"
                  onClick={(e) => handleRoute(e)}
                >
                  Experience
                </MenuItem>
                <MenuItem id="footer" onClick={(e) => handleRoute(e)}>
                  socials
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Container maxWidth="md" className={classes.container}>
            <Grid container className={classes.gridContainer}>
              <Grid item sm={6} xs={12} className={classes.gridItem}>
                <LottieAnimation lotti={work} height="100%" width="100%" />
              </Grid>
              <Grid item sm={6} xs={12} className={classes.gridItem}>
                <Typography variant="h5" gutterBottom>
                  <strong>Hello I am Brian Mwendwa</strong>
                </Typography>
                <Typography variant="subtitle" gutterBottom>
                  <strong>( Artist / Developer / Designer )</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Brian is a software developer and freelancer located in
                  Nairobi with a passion for creating digital services. He
                  excels at all aspects of product launch, from planning and
                  design to solving real-world challenges with code. When he is
                  not online, he loves and appreciates works of art and
                  beautiful things.
                </Typography>
                <br />
                <Divider
                  variant="middle"
                  flexItem
                  light
                  style={{ backgroundColor: "#F3F2C9" }}
                />
                <br />
                <Fab
                  variant="extended"
                  color="primary"
                  size="small"
                  onClick={() => window.open(Pdf, "_blank")}
                  className={classes.fab}
                >
                  <AttachFile fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1">View My Resume</Typography>
                </Fab>
              </Grid>
              <Grid item style={{ width: "5%", height: "5%" }}>
                {isMobile ? (
                  <div>
                    <LottieAnimation
                      lotti={scroll}
                      height="100%"
                      width="100%"
                    />
                  </div>
                ) : null}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Fade>
    </React.Fragment>
  );
};

export default memo(Home);
