import React, { Component } from 'react'
import './index.scss'
export default class Mfoot extends Component {
  render() {
    return (
        <ul className="other-login">
            <li><i className="iconfont icon-weixin"></i><span>微信</span></li>
            <li><i className="iconfont icon-qq"></i><span>QQ</span></li>
            <li><i className="iconfont icon-weibodenglu"></i><span>微博</span></li>
            <li><i className="iconfont icon-music"></i><span>网易邮箱</span></li>
        </ul>
    )
  }
}
