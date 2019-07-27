import React, { Component, Fragment } from "react";
import "./demo1.css";

export default class FlexboxDem1 extends Component {
  render() {
    return (
      <Fragment>
        <h1>flex-direction: row;</h1>
        <div className="container flex-row">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>flex-direction: row-reverse;</h1>
        <div className="container flex-row-reverse">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>flex-direction: column;</h1>
        <div className="container flex-column">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>flex-direction: column-reverse;</h1>
        <div className="container flex-column-reverse">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>
      </Fragment>
    );
  }
}
