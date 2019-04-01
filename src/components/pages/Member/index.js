/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {   BrowserRouter as Router, Link } from "react-router-dom"
import './index.scss'
import Foot from './Mfoot'
export default class Member extends Component {
  render() {
    return (
      <div className="app-member"> 
            <div className="member-img">
                <img src={require("../../../assets/images/logo.png")} />
                <Link to="/login" className="logBtn">手机登录</Link>
                <Link to="/register" className="regBtn"> 注册 </Link>
            </div>
            <Foot/>
      </div>
    )
  }
}
