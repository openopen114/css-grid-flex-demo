import React, { Component } from "react";

import "./topic.scss";
export default class Topic extends Component {
  gridTopicList = [
    { desc: "定義area區塊", attribute: "grid-template-areas" },
    { desc: "起始線 / 終止線 ", attribute: "grid-row(column)" },
    { desc: "隱藏/自動格線", attribute: "grid-auto-rows(columns)" }
  ];

  flexboxTopicList = [
    { desc: "排序方向", attribute: "flex-direction" },
    { desc: "水平排列", attribute: "justify-content" },
    { desc: "垂直排列", attribute: "align-items" },
    { desc: "多行排列", attribute: "align-content" },
    { desc: "排列順序", attribute: "order" },
    { desc: "元件彈性", attribute: "flex" }
  ];

  render() {
    return (
      <div className="bg">
        {/* Grid Topic */}
        <div className="topic-container">
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

        {/* flexbox Topic */}
        <div className="topic-container">
          <div className="title">
            <h1>Flexbox</h1>
          </div>

          {this.flexboxTopicList &&
            this.flexboxTopicList.map((item, i) => {
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

        {/* IUAP Topic */}
        <div className="topic-container">
          <div className="title">
            <h1>IUAP</h1>
          </div>

          {/* 後端產生器 */}
          {/* https://github.com/openopen114/gen-entity-web */}
          <div className="topic" key="iuap-gen-1">
            <div className="index">
              <div className="index-num-box">1</div>
            </div>
            <div className="desc">後端產生器</div>
            <div className="css-attribute source-link">
              <a href="https://bit.ly/2Y9JRPn" target="_blank">
                https://bit.ly/2Y9JRPn
              </a>
            </div>
          </div>

          {/* columns產生器 */}
          {/* https://github.com/openopen114/gen-entity-web
           */}
          <div className="topic" key="iuap-gen-2">
            <div className="index">
              <div className="index-num-box">2</div>
            </div>
            <div className="desc">columns產生器</div>
            <div className="css-attribute source-link">
              <a href="https://bit.ly/2JXgAi5" target="_blank">
                https://bit.ly/2JXgAi5
              </a>
            </div>
          </div>
        </div>

        {/* S0urce code Topic */}
        <div className="topic-container">
          <div className="title">
            <h1>Demo</h1>
          </div>

          {/* Demo Code */}
          {/* https://github.com/openopen114/css-grid-flex-demo
           */}
          <div className="topic" key="demo-code-1">
            <div className="index">
              <div className="index-num-box">😎</div>
            </div>
            <div className="desc">｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡</div>
            <div className="css-attribute source-link">
              <a href="https://bit.ly/2yfayD4" target="_blank">
                https://bit.ly/2yfayD4
              </a>
            </div>
          </div>

          {/* Decode from Base64 format : 57ev5Ym15byf5YWE6L6b6Ium5oO5IX4= */}
        </div>
      </div>
    );
  }
}
