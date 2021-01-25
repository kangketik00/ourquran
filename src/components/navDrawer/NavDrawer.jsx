import React from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-scroll";
import "./NavDrawer.scss";
export default function NavDrawer({ anchor, open, handleClose, handleOpen }) {
  // * Items nav
  const list = () => (
    <div role="presentation" onClick={handleClose} onKeyDown={handleClose}>
      <List>
        {["Home", "Features", "About", "Contact"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText>
              <Link
                key={text}
                to={text === "Home" ? "jumbotron-header" : text.toLowerCase()}
                activeClass="active"
                spy={true}
                smooth={true}
                hashSpy={true}
                onClick={handleClose}
                isDynamic={true}
              >
                {text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      id="swipe-drawer"
      anchor={anchor}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      {list("left")}
    </SwipeableDrawer>
  );
}
