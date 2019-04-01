/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './index.scss'
export default class ModalCont extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            users: '',
            isShow: true,
            userId: ''

        }
    }
    componentWillMount() {
        this.setState({
            users: JSON.parse(localStorage.getItem('users')),
            userId: localStorage.getItem('id')
        })
    }

    Logout() {
        console.log("已退出")
        localStorage.removeItem('users')
        localStorage.removeItem('id')
        axios.get('http://localhost:3000/logout').then(res => {
            console.log(res)
        })
    }
    renderItem() {
        let { navLists } = this.props
        return (
            <ul className="nav-list-con">
                {navLists.map(item => {
                    return (
                        <li key={item.id}>
                            <span className={"iconfont icon-" + item.icon}></span>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        )
    }
    isHandler() {
        this.props.method(false)
    }
    render() {
        let id =localStorage.getItem('id')      
        return (
            <div className="app-nav">
                <div className="nav-list">
                    <div className="nav-cont">
                        <div className="nav-header">
                            
                            
                        {id ? <UserInfo/> :<LoginInfo />}
                        </div>
                        {this.renderItem()}
                        <ul className="nav-foot">
                            <li><span className="iconfont icon-yejianmoshi"></span>夜间模式</li>
                            <li><span className="iconfont icon-shezhi"></span> 设置</li>
                            <li><span className="iconfont icon-tuichu" onClick={this.Logout.bind(this)}></span>退出</li>
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
        { id: 1, title: "我的信息", icon: 'xinxi-' },
        { id: 2, title: "会员中心", icon: 'huiyuanzhongxin' },
        { id: 3, title: "云村有票", icon: 'tianmaohuopiaotongxing' },
        { id: 4, title: "商城", icon: 'gouwuche' },
        { id: 5, title: "在线听歌免流量", icon: 'biaoshilei_zaixianjiance' },
        { id: 6, title: "我的好友", icon: 'wode' },
        { id: 7, title: "附近的人", icon: 'weibiaoti-3' },
        { id: 8, title: "个性换肤", icon: 'pifu' },
        { id: 9, title: "听歌识曲", icon: 'huabankaobei-' },
        { id: 10, title: "定时停止播放", icon: 'time' }
    ]
}

class LoginInfo extends Component {

    render() {
        return(
            <div className="login-info" >
                <p>登录网易云音乐</p>
                <p>手机电脑多段同步，尽享海量高品质音乐</p>
                <Link to="/member" >立即登录</Link>
            </div>
        )
    }
}
class UserInfo extends Component {
    constructor(){
        super()
        this.state={
            avatarUrl:'',
            nickname:' ',
            level:' '
        }
    }
componentDidMount(){
    let tx=JSON.parse(localStorage.getItem('users'))
    // console.log(tx.profile.avatarUrl)
    this.setState({
        avatarUrl:tx.profile.avatarUrl,
        nickname:tx.profile.nickname
    })
    let id = localStorage.getItem('id')
    axios.get('http://localhost:3000/user/detail?uid='+id).then(
        res=>{
            console.log(res.data)
            this.setState({
                level:res.data.level
            })
        }
    )
    axios.get('http://localhost:3000/user/dj?uid=348659714').then(
        res=>{
            console.log(res)
        }
    )
}

    render() {
        return(
            <div className="user-info" >
                <div className="nav-header-img">
                    <img src={this.state.avatarUrl}  />
                    <span>上传头像</span>
                </div>
                <p>
                    <span>{this.state.nickname}<i>Lv.{this.state.level}</i></span>
                    <span><i className="iconfont icon-qiandao"></i>签到</span>
                </p>
            </div>
        )
    }
}