import React, { Component, Fragment } from "react";
import "./demo4.css";

export default class FlexboxDem4 extends Component {
  render() {
    return (
      <Fragment>
        <h1>align-content: flex-start;</h1>
        <div className="container flex-start ">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
          <div className="EE">EE</div>
          <div className="FF">FF</div>
          <div className="GG">GG</div>
        </div>

        <h1>align-content: flex-end;</h1>
        <div className="container flex-end">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
          <div className="EE">EE</div>
          <div className="FF">FF</div>
          <div className="GG">GG</div>
        </div>

        <h1>align-content: center;</h1>
        <div className="container center">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
          <div className="EE">EE</div>
          <div className="FF">FF</div>
          <div className="GG">GG</div>
        </div>

        <h1>align-content: space-between;</h1>
        <div className="container space-between">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
          <div className="EE">EE</div>
          <div className="FF">FF</div>
          <div className="GG">GG</div>
        </div>

        <h1>align-content: space-around;</h1>
        <div className="container space-around">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
          <div className="EE">EE</div>
          <div className="FF">FF</div>
          <div className="GG">GG</div>
        </div>
      </Fragment>
    );
  }
}
