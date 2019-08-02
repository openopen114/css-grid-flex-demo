import React, { Component } from "react";
import styles from "./demo1.module.css";

export default class GridDemo1 extends Component {
  render() {
    return (
      <div className={`${styles.container} fontStyle`}>
        <div className={styles.AA}>AA</div>
        <div className={styles.BB}>BB</div>
        <div className={styles.CC}>CC</div>
        <div className={styles.DD}>DD</div>
      </div>
    );
  }
}
