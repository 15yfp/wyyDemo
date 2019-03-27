import React, { Component } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import ThisSong from './ThisSong/thisSong'
import RecPlayed from './RecentlyPlayed/recPlayed'
import './programa.css'
class Programa extends Component {
    render() {
        return (
            <Router>
            <div className="programa">
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe9d5;</span></div>
                    <div className="proaramaItems mymusic" ><Link to="/thissong">本地音乐</Link> <i>(0)</i></div>
                    <Route path="/thissong" component={ThisSong}/>
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe501;</span></div>
                    <div className="proaramaItems mypaly"><Link to="/recplayed">最近播放</Link> <i>(0)</i></div>
                    <Route path="/recplayed" component={RecPlayed}/>
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe654;</span></div>
                    <div className="proaramaItems mydown">下载管理 <i>(0)</i></div>
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe506;</span></div>
                    <div className="proaramaItems myfm">我的电台 <i>(0)</i></div>
                </div>
                <div className="programaItem">
                    <div className="proaramaItemsp"><span className="iconfont">&#xe639;</span></div>
                    <div className="proaramaItems mycollect">我的收藏 <i>(专辑/歌手/视频/专栏)</i></div>
                </div>

            </div>
            </Router>
        )
    }
}

export default Programa