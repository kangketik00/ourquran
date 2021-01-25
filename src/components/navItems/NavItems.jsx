import React from "react";
import { Link } from "react-scroll";
import { Hidden } from "@material-ui/core";
import "./NavItems.scss";

export default function NavItems() {
  // Method for create nav item
  const list = () => {
    return (
      <>
        {["Home", "Features", "About", "Contact"].map((text, idx) => (
          <Link
            key={text}
            to={text === "Home" ? "jumbotron-header" : text.toLowerCase()}
            activeClass="active"
            spy={true}
            smooth={true}
            className="nav-link"
            isDynamic={true}
          >
            {text}
          </Link>
        ))}
      </>
    );
  };

  return (
    <Hidden xsDown implementation="css">
      <div id="nav-items">{list()}</div>
    </Hidden>
  );
}
