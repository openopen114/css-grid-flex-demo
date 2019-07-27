import React, { Component, Fragment } from "react";
import "./demo3.css";

export default class FlexboxDem3 extends Component {
  render() {
    return (
      <Fragment>
        <h1>align-items: flex-start;</h1>
        <div className="container flex-start ">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>align-items: flex-end;</h1>
        <div className="container flex-end">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>align-items: center;</h1>
        <div className="container center">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>

        <h1>center with align-self: flex-end;</h1>
        <div className="container center self-end">
          <div className="AA">AA</div>
          <div className="BB">BB</div>
          <div className="CC">CC</div>
          <div className="DD">DD</div>
        </div>
      </Fragment>
    );
  }
}
