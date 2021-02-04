import React from "react";
import { Container } from "@material-ui/core";
import "./ErrorHandle.scss";
import errorImage from "../../assets/images/errorImage.png";
const ErrorHandle = () => {
  return (
    <section id="error-handling">
      <Container>
        <img src={errorImage} alt="logo" />
      </Container>
    </section>
  );
};

export default ErrorHandle;
