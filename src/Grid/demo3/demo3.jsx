import React, { Component } from "react";
import styles from "./demo3.module.css";

export default class GridDemo3 extends Component {
  render() {
    return (
      <div className={`${styles.container} fontStyle`}>
        <div className={styles.AA}>AA 1/2</div>
        <div className={styles.BB}>BB 2/3</div>
        <div className={styles.CC}>CC 3/7</div>
        <div className={styles.DD}>DD 4/7</div>
      </div>
    );
  }
}
