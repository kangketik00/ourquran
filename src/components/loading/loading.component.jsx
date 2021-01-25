import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loading.styles.scss";

function Loading() {
  return (
    <div className="loading text-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
