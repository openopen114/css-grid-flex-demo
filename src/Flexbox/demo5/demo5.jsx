import React, { Component, Fragment } from "react";
import "./demo5.css";

export default class FlexboxDem5 extends Component {
  render() {
    return (
      <Fragment>
        <h1>order</h1>
        <div className="container">
          <div className="AA">-2</div>
          <div className="BB">1</div>
          <div className="CC">1</div>
          <div className="DD">-1</div>
          <div className="EE">2</div>
          <div className="FF">3</div>
          <div className="GG">-3</div>
        </div>
      </Fragment>
    );
  }
}
