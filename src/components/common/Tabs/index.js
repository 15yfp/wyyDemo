import React, { Component } from 'react'
import './index.scss'
export default class Tabs extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabs: [
        {id: 1,title:"我的"}
      ]
    }
  }
  render() {
    return (
      <div className="app-tabs">
        <ul className="tob">
          <li>1</li>
          <li>
              <a>我的</a>
              <a>发现</a>
              <a>朋友</a>
              <a>视频</a>
          </li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}
