import React, { Component } from "react";
import "./FeaturesSection.scss";
import FeatureAlQuran from "../featureAlQuran/FeatureAlQuran";
import FeatureAsmaulHusna from "../featureAsmaulHusna/FeatureAsmaulHusna";

class FeaturesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsOption: 0,
    };
  }

  handleClick = (event) => {
    const header = document.querySelector("#tab-options");
    header.querySelector(".tab-active").classList.toggle("tab-active");
    event.target.classList.toggle("tab-active");
    const tabIndex = event.target.getAttribute("data-index");
    if (tabIndex === "0") this.setState({ tabsOption: 0 });
    if (tabIndex === "1") this.setState({ tabsOption: 1 });
  };

  handleTabsOption = () => {
    switch (this.state.tabsOption) {
      case 0:
        return <FeatureAlQuran />;
      case 1:
        return <FeatureAsmaulHusna />;
      default:
        return <h1>Something wrong...</h1>;
    }
  };

  render() {
    return (
      <section id="features">
        <div className="features-inner">
          <div id="tab-options">
            <span
              className="tab-item tab-active"
              onClick={this.handleClick}
              data-index="0"
            >
              Surah
            </span>
            <span
              className="tab-item"
              onClick={this.handleClick}
              data-index="1"
            >
              Asmaul Husna
            </span>
          </div>

          {this.handleTabsOption()}
        </div>
      </section>
    );
  }
}

export default FeaturesSection;
