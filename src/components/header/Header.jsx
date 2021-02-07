import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../navBar/Navbar";
import NavDrawer from "../navDrawer/NavDrawer";
import Typography from "@material-ui/core/Typography";
import NavToggle from "../navToggle/NavToggle";
import NavItems from "../navItems/NavItems";

const Header = (props) => {
  // Create state for Nav Drawer
  const [state, setState] = React.useState({
    showDrawer: false,
  });

  // method for toggle drawer (open/close)
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ showDrawer: open });
  };

  return (
    <>
      {/* Nav Drawer is nav items when mobile size */}
      <NavDrawer
        anchor="left"
        open={state["showDrawer"]}
        handleClose={toggleDrawer(false)}
        handleOpen={toggleDrawer(true)}
      />

      <Navbar>
        {props.urlPage === "home" ? (
          <>
            <Typography id="logo-brand" variant="h4">
              Our<span>Qur'an</span>
            </Typography>

            {/* Toggle for open drawer when mobile size*/}
            <NavToggle handleOpenDrawer={toggleDrawer(true)} />

            {/* Nav Items when desktop size */}
            <NavItems />
          </>
        ) : (
          <Typography id="back-to-home" variant="h4">
            <Link to="/">
              <span className="material-icons">arrow_left</span>Back
            </Link>
          </Typography>
        )}
      </Navbar>
    </>
  );
};

export default Header;
