import React from "react";
import { Hidden } from "@material-ui/core";
import noMatchBackground from "../../assets/images/notMatchBackground.svg";
import noMatchBackgroundipad from "../../assets/images/notMatchBackgroundipad.svg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./NoMatchDesktop.scss";

const NoMatchDesktop = () => {
  return (
    <Hidden xsDown>
      <section id="no-match-desktop">
        <Hidden mdDown>
          <div className="background-desktop">
            <img src={noMatchBackground} alt="no-match" />
          </div>
        </Hidden>
        <Hidden xsDown lgUp>
          <div className="background-ipad">
            <img src={noMatchBackgroundipad} alt="no-match" />
          </div>
        </Hidden>

        <div className="title">
          <div className="title-box">
            <h1>Ooops..</h1>
            <p>The page you are looking for does not exist!</p>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Back To Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Hidden>
  );
};

export default NoMatchDesktop;
