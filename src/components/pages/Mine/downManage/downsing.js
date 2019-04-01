import React, { Component } from 'react'
import './downsing.css'
export default class DownRecing extends Component {
  render() {
    return (
      <div>
          <div className="downPlayed">
              <div className="downPlayedTitle">
                <div className='downPlayAll'>播放全部<i className="playnum">共(0)首</i></div>
                <div className='downPlayAdd'>多选</div>
              </div>
              <div className="downcPlayedList">
                <div className="downPlayName">
                  <h1>水星记</h1>
                  <h2>郭顶-飞行器的执行周期</h2>
                </div>
                <div className="downcPlayNameright">
                    <div className="downcPlayrightVideo"></div>
                    <div className="downPlayrightAdd"></div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}