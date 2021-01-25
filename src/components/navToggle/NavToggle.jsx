import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

export default function NavToggle({ handleOpenDrawer }) {
  return (
    <Hidden smUp implementation="css">
      <IconButton
        id="app-bar-toggle"
        edge="start"
        aria-label="menu"
        onClick={handleOpenDrawer}
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  );
}
