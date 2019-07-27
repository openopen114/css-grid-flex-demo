import React, { Component, Fragment } from "react";
import "./demo2.css";

export default class FlexboxDem2 extends Component {
  render() {
    return (
      <Fragment>
        <h1>justify-content: flex-start;</h1>
        <div className="container flex-start ">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>justify-content: flex-end;</h1>
        <div className="container flex-end">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>justify-content: center;</h1>
        <div className="container center">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>justify-content: space-between;</h1>
        <div className="container space-between">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>justify-content: space-around;</h1>
        <div className="container space-around ">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>
      </Fragment>
    );
  }
}
