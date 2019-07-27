import React, { Component } from "react";

import "./topic.scss";
export default class Topic extends Component {
  gridTopicList = [
    { desc: "定義area區塊1", attribute: "grid-template-areas" },
    { desc: "定義area區塊2", attribute: "grid-template-areas" },
    { desc: "定義area區塊3", attribute: "grid-template-areas" }
  ];

  render() {
    return (
      <div className="bg">
        <div className="topic-container">
          {/* Grid Topic */}
          <div className="title">
            <h1>Grid</h1>
          </div>

          {this.gridTopicList &&
            this.gridTopicList.map((item, i) => {
              return (
                <div className="topic" key={i}>
                  <div className="index">
                    <div className="index-num-box">{i + 1}</div>
                  </div>
                  <div className="desc">{item.desc}</div>
                  <div className="css-attribute">{item.attribute}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
