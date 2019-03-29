import React, { Component } from 'react'
import './recvideo.css'
export default class Recvideo extends Component {
  render() {
    return (
      <div className="recvideoAll">
          <div>
              <li className="recvideoList">
                <div className="recvideoPic"><img src="" alt="" /></div>
                <div className="recvideoType">
                  <h1>&nbsp;&nbsp;换行显示显示省略号</h1>
                  <div className="recvideoTypes">&nbsp;&nbsp;
                    <span className="recvideoTime">04:30</span>&nbsp;
                    <span>by</span>&nbsp;
                    <span className="recvideoSinger">东皇太一</span>
                    <span className="recvideoDate">今天04:00</span>
                  </div>
                </div>
              </li>
          </div>
      </div>
    )
  }
}