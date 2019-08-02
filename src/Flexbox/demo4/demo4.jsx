import React, { Component, Fragment } from "react";
import style from "./demo4.module.css";

export default class FlexboxDem4 extends Component {
  render() {
    return (
      <Fragment>
        <h1>align-content: flex-start;</h1>
        <div className={`${style.container} ${style["flex-start"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
          <div className={style.EE}>EE</div>
          <div className={style.FF}>FF</div>
          <div className={style.GG}>GG</div>
        </div>

        <h1>align-content: flex-end;</h1>
        <div className={`${style.container} ${style["flex-end"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
          <div className={style.EE}>EE</div>
          <div className={style.FF}>FF</div>
          <div className={style.GG}>GG</div>
        </div>

        <h1>align-content: center;</h1>
        <div className={`${style.container} ${style["center"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
          <div className={style.EE}>EE</div>
          <div className={style.FF}>FF</div>
          <div className={style.GG}>GG</div>
        </div>

        <h1>align-content: space-between;</h1>
        <div
          className={`${style.container} ${style["space-between"]} fontStyle`}
        >
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
          <div className={style.EE}>EE</div>
          <div className={style.FF}>FF</div>
          <div className={style.GG}>GG</div>
        </div>

        <h1>align-content: space-around;</h1>
        <div
          className={`${style.container} ${style["space-around"]} fontStyle`}
        >
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
          <div className={style.EE}>EE</div>
          <div className={style.FF}>FF</div>
          <div className={style.GG}>GG</div>
        </div>
      </Fragment>
    );
  }
}
