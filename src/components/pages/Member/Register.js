/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {   BrowserRouter as Router, Link } from "react-router-dom"
import './index.scss'
import Mfoot from './Mfoot'
export default class Member extends Component {
  render() {
    let { go } = this.props.history
    return (
      <div className="login-con"> 
            <div className="m-top">
              <i className="iconfont icon-fanhui" onClick={() => go(-1)}></i>
              <span>手机号登录</span>
            </div>
            <ul className="m-container">
              <li>
                <span>+86</span>
                <input type="text" placeholder="请输入手机号"/>
              </li>
              <li>
                <input type="password" placeholder="请设置登录密码，不少于6位"/>
              </li>
          </ul>
          <a to="/login" className="logBtn">注册</a>
          <Mfoot/>
      </div>
    )
  }
}
