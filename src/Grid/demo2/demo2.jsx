import React, { Component } from "react";
import styles from "./demo2.module.css";

export default class GridDemo2 extends Component {
  render() {
    return (
      <div className={`${styles.container} fontStyle`}>
        <div className={styles.AA}>AA 1/2</div>
        <div className={styles.BB}>BB 2/3</div>
        <div className={styles.CC}>CC 3/4</div>
        <div className={styles.DD}>DD 4/5</div>
      </div>
    );
  }
}
