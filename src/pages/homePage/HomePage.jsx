import React, { Component } from "react";
import "./HomePage.scss";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import JumbotronHeader from "../../components/JumbotronHeader/JumbotronHeader";
import { Container } from "@material-ui/core";
import Header from "../../components/header/Header";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header urlPage="home" />
        <JumbotronHeader />
        <Container>
          <FeaturesSection />
        </Container>
      </>
    );
  }
}

export default HomePage;
