/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
export default class Login extends Component {
  constructor(props){
    super(props)
  }
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
                <input type="password" placeholder="请输入密码"/>
                <i>忘记密码?</i>
              </li>
          </ul>
          <a to="/login" className="logBtn">手机登录</a>
      </div>
    )
  }
}
