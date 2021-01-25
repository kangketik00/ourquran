import React, { Component } from "react";
import { Button, Container, Toolbar } from "@material-ui/core";
import { ReactComponent as BackgroundImage } from "../../assets/images/BackgroundImage.svg";
import { Link } from "react-scroll";

import "./JumbotronHeader.scss";

class JumbotronHeader extends Component {
  render() {
    return (
      <section id="jumbotron-header" className="top-page">
        <Toolbar />
        <Container>
          <div className="jumbotron-header-inner">
            <div className="tex-box">
              <h1>
                A Moslem Daily Worship <br />
                Read <span>Qur’an</span>
              </h1>
              <p>have you read the al-qur’an today ?</p>
            </div>
            <Button variant="contained" color="secondary">
              <Link to="features" smooth={true}>
                Get your surah
              </Link>
            </Button>
            <BackgroundImage id="hero-image" />
          </div>
        </Container>
      </section>
    );
  }
}

export default JumbotronHeader;
