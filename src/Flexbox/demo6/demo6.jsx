import React, { Component, Fragment } from "react";
import style from "./demo6.module.css";

export default class FlexboxDem6 extends Component {
  render() {
    return (
      <Fragment>
        <h1>flex-basis</h1>
        <div className={`${style.container} ${style["flex-basis"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
        </div>

        <h1>flex-grow</h1>
        <div
          className={`${style.container} ${style["flex-basis"]} ${
            style["flex-grow"]
          } fontStyle`}
        >
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
        </div>

        <h1>flex-shrink</h1>
        <div className={`${style.container} ${style["flex-shrink"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
        </div>
      </Fragment>
    );
  }
}
