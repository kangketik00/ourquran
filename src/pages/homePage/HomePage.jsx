import React, { Component } from "react";
import "./HomePage.scss";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import JumbotronHeader from "../../components/JumbotronHeader/JumbotronHeader";
import { Container } from "@material-ui/core";
import Header from "../../components/header/Header";
import AboutSection from "../../components/aboutSection/AboutSection";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header urlPage="home" />
        <JumbotronHeader />
        <Container>
          <FeaturesSection />
        </Container>
        <AboutSection />
      </>
    );
  }
}

export default HomePage;
