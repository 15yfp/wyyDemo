import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import './index.scss'
export default class ModalCont extends Component {
    constructor(props){
        super(props)
    }
    renderItem(){
        let { navLists } = this.props
        return (
            <ul className="nav-list-con">
                { navLists.map(item => {
                    return (
                    <li key={item.id}>
                        <span className={"iconfont icon-"+item.icon}></span>
                        { item.title }
                    </li>
                    )
                })}
            </ul>
        )
    }
    isHandler(){
        this.props.method(false)
    }
  render() {
    return (
    <div className="app-nav">
        <div className="nav-list">
            <div className="nav-cont">
                <div className="nav-header">
                    <div className="nav-header-img">
                        <img src=""/>
                        <span>上传头像</span>
                    </div>
                    <p>
                        <span>这里是用户名<i>Lv.5</i></span>
                        <span><i className="iconfont icon-qiandao"></i>签到</span>
                    </p>
                </div>
                { this.renderItem() }
                <ul className="nav-foot"> 
                    <li><span className="iconfont icon-yejianmoshi"></span>夜间模式</li>
                    <li><span className="iconfont icon-shezhi"></span> 设置</li>
                    <li><span className="iconfont icon-tuichu"></span>退出</li>
                </ul>
            </div>
        </div>
        <div className="mask" onClick={this.isHandler.bind(this)}></div>
    </div>
    )
  }
}
ModalCont.defaultProps = {
    navLists: [
        { id: 1, title: "我的信息",icon: 'xinxi-'},
        { id: 2, title: "会员中心",icon: 'tubiaozhizuomoban'},
        { id: 3, title: "云村有票",icon: 'huopiaotongxing'},
        { id: 4, title: "商城",icon: 'gouwuche'},
        { id: 5, title: "在线听歌免流量",icon: 'biaoshilei_zaixianjiance'},
        { id: 6, title: "我的好友",icon: 'wode'},
        { id: 7, title: "附近的人",icon: 'weibiaoti-3'},
        { id: 8, title: "个性换肤",icon: 'pifu'},
        { id: 9, title: "听歌识曲",icon: 'tubiaozhizuomoban'},
        { id: 10, title: "定时停止播放",icon: 'ai253'}
    ]
}