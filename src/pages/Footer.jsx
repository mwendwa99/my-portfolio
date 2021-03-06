import React, { memo } from "react";
import { Box, Typography, Grid, Divider, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";
import { GitHub, LinkedIn, Mail, Twitter } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    // center title with icon
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stackList: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box id="footer" className={classes.root}>
      <Container maxWidth="md">
        <Grid container style={{}}>
          <Grid item xs={12}>
            <Divider light>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className={classes.title}
              >
                <strong>On the web 🌐</strong>
              </Typography>
            </Divider>
          </Grid>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={5}>
              <Stack
                direction="column"
                spacing={3}
                className={classes.stackList}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href="https://wakatime.com/@2aba1a8d-1c0f-4cb2-8d62-adf66b362996">
                  <img
                    src="https://wakatime.com/badge/user/2aba1a8d-1c0f-4cb2-8d62-adf66b362996.svg"
                    alt="Total time coded since Oct 23 2021"
                  />
                </Link>
                <Link
                  underline="hover"
                  href="https://github.com/mwendwa99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body1"
                    align="center"
                    gutterBottom
                    className={classes.title}
                  >
                    <GitHub /> &nbsp; @mwendwa99
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  href="https://www.linkedin.com/in/brian-mwendwa-25326a173/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body1"
                    align="center"
                    gutterBottom
                    className={classes.title}
                  >
                    <LinkedIn /> &nbsp;Brian Mwendwa
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  href="https://twitter.com/mwendwa_atl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body1"
                    align="center"
                    gutterBottom
                    className={classes.title}
                  >
                    <Twitter />
                    &nbsp; @mwendwa_atl
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  href="mailto:brianmwendwa.mu@gmail.com?subject = Feedback&body = Message"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body1"
                    align="center"
                    gutterBottom
                    className={classes.title}
                  >
                    <Mail fontSize="small" />
                    &nbsp; Brian mwendwa
                  </Typography>
                </Link>
              </Stack>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
                className={classes.title}
              >
                © 2022 Brian Mwendwa. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(Footer);
