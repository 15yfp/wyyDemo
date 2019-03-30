/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  Login() {
    let _this=this
    let { username, password } = this.state
    axios.get('http://localhost:3000/login/cellphone?phone=' + username + '&password=' + password).then(
            function (res) {
              console.log(res)
              if(res.status==200){
                let users=JSON.stringify(res.data)
                localStorage.setItem("users",users)
                localStorage.setItem("id",res.data.account.id)
                _this.props.history.push('/')
              }else(
                alert("登录失败 重新登录")
              )
      }
    )

  }
  //取得输入的账号的值
  username(e) {
    this.setState({
      username: e.target.value
    })
  }
  //取得输入的密码的值
  password(e) {
    this.setState({
      password: e.target.value
    })
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
            <input type="text" placeholder="请输入手机号" onChange={this.username.bind(this)} value={this.state.username} />
          </li>
          <li>
            <input type="password" placeholder="请输入密码" onChange={this.password.bind(this)} value={this.state.password} />
            <i>忘记密码?</i>
          </li>
        </ul>
        <a to="/login" className="logBtn" onClick={this.Login.bind(this)}>手机登录</a>
      </div>
    )
  }
}
