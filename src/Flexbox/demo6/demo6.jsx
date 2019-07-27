import React, { Component, Fragment } from "react";
import "./demo6.css";

export default class FlexboxDem6 extends Component {
  render() {
    return (
      <Fragment>
        <h1>flex-basis</h1>
        <div className="container flex-basis">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
        </div>

        <h1>flex-grow</h1>
        <div className="container flex-basis flex-grow">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
        </div>

        <h1>flex-shrink</h1>
        <div className="container flex-shrink">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
        </div>
      </Fragment>
    );
  }
}
