import React from "react";
import "./AboutSection.scss";
import alquranTitle from "../../assets/images/alquranTitle.png";
const AboutSection = () => {
  return (
    <section id="about">
      <div className="inner">
        <p>OurQur'an</p>
        <img src={alquranTitle} alt="alquran-title" />
        <p>
          “This is the book about which there <br />
          is no doubt, A guidance for those <br />
          conscious of Allah”
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
