/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './index.scss'
export default class Member extends Component {
  render() {
    return (
      <div className="app-member"> 
            <div className="member-img">
                <img src={require("../../../assets/images/logo.png")} />
            </div>
            <div className="member-con">
                <a className="loginBtn">手机登录</a>
                <a> 注册 </a>
                <ul className="other-login">
                    <li><i></i><span>微信</span></li>
                    <li><i></i><span>QQ</span></li>
                    <li><i></i><span>微博</span></li>
                    <li><i></i><span>网易邮箱</span></li>
                </ul>
            </div>
      </div>
    )
  }
}
