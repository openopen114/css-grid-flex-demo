import React, { Component, Fragment } from "react";
import style from "./demo1.module.css";

export default class FlexboxDem1 extends Component {
  render() {
    return (
      <Fragment>
        <h1>flex-direction: row;</h1>
        <div className={`${style.container} ${style["flex-row"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>flex-direction: row-reverse;</h1>
        <div
          className={`${style.container} ${
            style["flex-row-reverse"]
          } fontStyle`}
        >
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>flex-direction: column;</h1>
        <div className={`${style.container} ${style["flex-column"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>flex-direction: column-reverse;</h1>
        <div
          className={`${style.container} ${
            style["flex-column-reverse"]
          } fontStyle`}
        >
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>
      </Fragment>
    );
  }
}
