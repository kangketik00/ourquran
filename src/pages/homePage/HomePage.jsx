import React, { Component } from "react";
import "./HomePage.scss";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import JumbotronHeader from "../../components/JumbotronHeader/JumbotronHeader";
import Header from "../../components/header/Header";
import AboutSection from "../../components/aboutSection/AboutSection";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
class HomePage extends Component {
  render() {
    return (
      <>
        <Header urlPage="home" />
        <JumbotronHeader />
        <FeaturesSection />
        <AboutSection />
        <Footer />
        <ScrollToTop />
      </>
    );
  }
}

export default HomePage;
