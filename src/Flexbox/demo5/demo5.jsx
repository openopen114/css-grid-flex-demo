import React, { Component, Fragment } from "react";
import style from "./demo5.module.css";

export default class FlexboxDem5 extends Component {
  render() {
    return (
      <Fragment>
        <h1>order</h1>
        <div className={style.container} fontStyle>
          <div className={style.AA}>-2</div>
          <div className={style.BB}>1</div>
          <div className={style.CC}>1</div>
          <div className={style.DD}>-1</div>
          <div className={style.EE}>2</div>
          <div className={style.FF}>3</div>
          <div className={style.GG}>-3</div>
        </div>
      </Fragment>
    );
  }
}
