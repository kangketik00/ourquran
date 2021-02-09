import React from "react";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import noMatchBackgroundmobile from "../../assets/images/notMatchBackgroundmobile.svg";
import "./NoMatchMobile.scss";
const NoMatchMobile = () => {
  return (
    <Hidden smUp>
      <section id="no-match-mobile">
        <div className="background-mobile">
          <img src={noMatchBackgroundmobile} alt="no-match" />
        </div>
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

export default NoMatchMobile;
