/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { Mine, Find, Friends, Video, ModalCont} from '../pages/index'
import './index.scss'
import { NavLink } from "react-router-dom"
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
          isShow: false
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



  isModel(msg){
      this.setState({
         isShow: false
      })
  }

  render() {
    let { isShow } = this.state
    return (
      <div className="app-main">
          <ul className="tobs">
              <li className="list" onClick={()=>{this.setState({ isShow:true})}}></li>
              <LazyLoad> { this.renderBar() } </LazyLoad>
              <NavLink to= {{ pathname: '/search' }} ><li className="search"></li></NavLink>
              {   isShow ? <ModalCont method={this.isModel.bind(this)}/> : null }
          </ul>
          { this.renderItem() }
      </div>
    )
  }
}
