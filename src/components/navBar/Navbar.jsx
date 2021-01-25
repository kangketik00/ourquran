import React from "react";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

import "./Navbar.scss";

// Method for hide on scroll
const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ handleToggle, ...props }) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar id="navbar">
          <Toolbar disableGutters={true}>
            <Container fixed>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                {props.children}
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
