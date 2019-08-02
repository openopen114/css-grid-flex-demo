import React, { Component, Fragment } from "react";
import style from "./demo3.module.css";

export default class FlexboxDem3 extends Component {
  render() {
    return (
      <Fragment>
        <h1>align-items: flex-start;</h1>
        <div className={`${style.container} ${style["flex-start"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>align-items: flex-end;</h1>
        <div className={`${style.container} ${style["flex-end"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>align-items: center;</h1>
        <div className={`${style.container} ${style["center"]} fontStyle`}>
          <div className={style.AA}>AA</div>
          <div className={style.BB}>BB</div>
          <div className={style.CC}>CC</div>
          <div className={style.DD}>DD</div>
        </div>

        <h1>center with align-self: flex-end;</h1>
        <div
          className={`${style.container} ${style["center"]} ${
            style["self-end"]
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
