import React, { Component } from 'react'
import './tabAll.css'
export default class Floder extends Component {
  render() {
    return (
      <div className="tabAll">
          <div>
              <div className="tabAllNone"></div>
              <h1>暂无本地音乐</h1>
              <h2><span className="tabAllSweep">一键扫描</span></h2>
          </div>
      </div>
    )
  }
}
