import React, { Component } from "react";
import NoMatchDesktop from "../../components/noMatchDesktop/NoMatchDesktop";
import NoMatchMobile from "../../components/noMatchMobile/NoMatchMobile";

import "./NoMatch.scss";
class NoMatch extends Component {
  render() {
    return (
      <>
        <NoMatchDesktop />
        <NoMatchMobile />
      </>
    );
  }
}

export default NoMatch;
