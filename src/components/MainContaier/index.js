/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { Mine, Find, Friends, Video} from '../pages/index'
import './index.scss'
export default class MainContaier extends Component {
  constructor(props){
    super(props)
    this.state = {
        tabs : [
              {id:1,title: "我的",cat:"mine",com: <Mine/>},
              {id:2,title: "发现",cat:"find",com: <Find/>},
              {id:3,title: "朋友",cat:"friend",com: <Friends/>},
              {id:4,title: "视频",cat:"video",com: <Video/>},
          ],
          type: "mine",
          color: "#fff"
    }
  }
  renderItem(){
    return (
      <div>
          {
            this.state.tabs.map((item) => {
              if(this.state.type == item.cat){
                return (
                  <div key={item.id}>
                      {item.com}
                  </div>
                )
              }
            })
          }
      </div>
    )
  }
  renderBar(){
    return (
      <li className="top-center">
          {
            this.state.tabs.map((item) => {
                return (
                  <a 
                      className="tabsBtn" 
                      key={item.id} 
                      onClick={ ()=> {  
                          this.setState({ type : item.cat })
                      }}
                      style={{color: (this.state.type === item.cat) ? "#333" : "#999"}}
                  >
                      {item.title}
                  </a>
                )
            })
          }
      </li>
    )
  }
  
  render() {
    return (
      <div className="app-main">
           <ul className="tobs">
              <li></li>
              { this.renderBar() }
              <li></li>
          </ul>
          { this.renderItem() }
      </div>
    )
  }
}
