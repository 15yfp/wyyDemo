/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {   BrowserRouter as Router, Link } from "react-router-dom"
import './index.scss'
import Tops from '../../common/Tops'
import Mfoot from './Mfoot'
export default class Member extends Component {
  render() {
    let { go } = this.props.history
    return (
      <div>
        <Tops tit={"手机号注册"}/>
        <div className="login-con"> 
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
      </div>
    )
  }
}
