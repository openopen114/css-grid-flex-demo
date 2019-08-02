import React, { Component, Fragment } from "react";
import style from "./demo2.module.css";

export default class FlexboxDem2 extends Component {
  render() {
    return (
      <Fragment>
        <h1>justify-content: flex-start;</h1>
        <div className={`${style.container} ${style["flex-start"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>justify-content: flex-end;</h1>
        <div className={`${style.container} ${style["flex-end"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>justify-content: center;</h1>
        <div className={`${style.container} ${style["center"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>justify-content: space-between;</h1>
        <div
          className={`${style.container} ${style["space-between"]} fontStyle`}
        >
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>justify-content: space-around;</h1>
        <div
          className={`${style.container} ${style["space-around"]} fontStyle`}
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
