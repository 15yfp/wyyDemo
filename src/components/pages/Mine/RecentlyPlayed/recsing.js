import React, { Component } from 'react'
import './recsing.css'
export default class Recing extends Component {
  render() {
    return (
      <div>
          <div className="recsingPlayed">
              <div className="recsingPlayedTitle">
                <div className='recsingPlayAll'>播放全部<i className="playnum">共(0)首</i></div>
                <div className='recsingPlayAdd'>多选</div>
              </div>
              <div className="recPlayedList">
                <div className="recPlayName">
                  <h1>水星记</h1>
                  <h2>郭顶-飞行器的执行周期</h2>
                </div>
                <div className="recPlayNameright">
                    <div className="recPlayrightVideo"></div>
                    <div className="recPlayrightAdd"></div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}