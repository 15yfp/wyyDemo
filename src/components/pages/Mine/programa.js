import React, { Component } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

import './programa.css'
class Programa extends Component {

    
    render() {
        return (
           
            <div className="programa">
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe9d5;</span></div>
                    <Link to="/thissong"><div className="proaramaItems mymusic" > &nbsp;本地音乐 <i>(0)</i></div></Link>
                    
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe501;</span></div>
                    <Link to="/recplayed"><div className="proaramaItems mypaly"> &nbsp;最近播放 <i>(0)</i></div></Link>
                    
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe654;</span></div>
                    <Link to="/downmanage"><div className="proaramaItems mydown"> &nbsp;下载管理 <i>(0)</i></div></Link>
                    
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe506;</span></div>
                    <Link to="/myfm"><div className="proaramaItems myfm"> &nbsp;我的电台 <i>(0)</i></div></Link>
                    
                </div>
                <div className="programaItem" >
                    <div className="proaramaItemsp"><span className="iconfont">&#xe639;</span></div>
                    <Link to="/myfm"><div className="proaramaItems mycollect">我的收藏 <i>(专辑/歌手/视频/专栏)</i></div></Link>
                </div>

            </div>
         
        )
    }
}

export default Programa