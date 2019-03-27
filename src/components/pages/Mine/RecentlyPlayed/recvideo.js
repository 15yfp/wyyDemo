import React, { Component } from 'react'
import '../ThisSong/tabAll.css'
export default class Recvideo extends Component {
  render() {
    return (
      <div>
          <div className="tabAll">
              <div className="tabAllNone"></div>
              <h1>暂无本地音乐</h1>
              <h2><span className="tabAllSweep">一键扫描</span></h2>
          </div>
      </div>
    )
  }
}