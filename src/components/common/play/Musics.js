import React from "react"
import "./Music.css"
import Axios from "axios";
import { withRouter } from "react-router-dom"
class Musics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            songsname: [],
            songsname_al: [],
            songLyric: []
        }
        //进度条方法
        this.ProgressBar = this.ProgressBar.bind(this)
    }
    componentDidMount() {
        //获取歌曲url
        Axios.get(`http://localhost:3000/song/url?id=${this.props.location.state.uid}`)
            .then(res => {
                this.setState({
                    songs: res.data.data[0]
                })
                // console.log(res.data.data[0])
            })
        //获取歌曲详情
        Axios.get(`http://localhost:3000/song/detail?ids=${this.props.location.state.uid}`)
            .then(res => {
                this.setState({
                    songsname: res.data.songs[0],
                    songsname_al: res.data.songs[0].al
                })
            })
        //获取歌曲的歌词
        Axios.get(`http://localhost:3000/lyric?id=${this.props.location.state.uid}`)
            .then(res =>res.data.lrc.lyric)
            .then(lrc=>{
                let lrcJSON = lrc.split("/n");
                console.log(lrcJSON)
                let lrcTime = [];
                
            })
    }
    goback() {
        this.props.history.go(-1)
    }
    //播放暂停功能,停止图片旋转,切换播放停止图标
    playMusic(e) {
        //播放停止
        if (e.currentTarget.className === "iconfont icon-weibiaoti--") {
            //停止
            this.refs.audio_ref.pause();
            e.currentTarget.className = "iconfont icon-bofang"
            this.refs.img_auto.className = "music_back"
        } else if (e.currentTarget.className === "iconfont icon-bofang") {
            //播放
            this.refs.audio_ref.play();
            e.currentTarget.className = "iconfont icon-weibiaoti--"
            this.refs.img_auto.className = "music_back autoplay"
            console.log(this.ProgressBar())
        }
    }
    //进度条功能
    ProgressBar() {
        let Progress = document.getElementById("Progress")
        let audio = document.getElementById("audio")
        //1,获取当前歌曲的长度
        let songLength = audio.duration;
        //2,设置一个定时器
        let timer = setInterval(() => {
            //3,获取当前歌曲播放时间
            let cur = audio.currentTime;
            //4,div的宽度跟着播放时间递增
            Progress.style.width = "" + parseFloat(cur / songLength) * 2.86 + "rem";
        }, 1000);
    }
    render() {
        let { songsname, songsname_al, songs } = this.state
        return (
            <div className="music_root">
                <div className="music_top">
                    <i className="iconfont icon-fanhui go_back" onClick={this.goback.bind(this)}></i>
                    <div>
                        <p className="div_p">{songsname.name}</p>
                        <span>{songsname_al.name}</span>
                    </div>
                    <i className="share iconfont icon-fenxiang"></i>
                </div>
                <div className="music_center">
                    <div className="music_Record"></div>
                    <div className="music_back autoplay" ref="img_auto" id="img_auto" style={{ background: `url(${songsname_al.picUrl})` }}></div>
                    <div className="music_pic"></div>
                </div>
                <div className="music_bottom">
                    <ul className="music_ul">
                        <li>
                            <i className="iconfont icon-qq"></i>
                        </li>
                        <li>
                            <i className="iconfont icon-xiazai"></i>
                        </li>
                        <li>
                            <i className="iconfont icon-fenxiang"></i>
                        </li>
                        <li>
                            <i className="iconfont icon-pinglun"></i>
                        </li>
                        <li>
                            <i className="iconfont icon-gengduo"></i>
                        </li>
                    </ul>
                    <div className="Progress_bar">
                        <span className="float">3:00</span>
                        <div className="float Progress">
                            <div className="progress_son" id="Progress"></div>
                        </div>
                        <span className="float">4:00</span>
                    </div>
                    <ul className="play_ul">
                        <li>
                            <i className="iconfont icon-suiji"></i>
                        </li>
                        <li >
                            <i className="iconfont icon-shangyishoushangyige"></i>
                        </li>
                        <li >
                            <i className="iconfont icon-weibiaoti--" id="off" onClick={this.playMusic.bind(this)}></i>
                        </li>
                        <li >
                            <i className="iconfont icon-xiayigexiayishou"></i>
                        </li>
                        <li >
                            <i className="iconfont icon-liebiaoshunxu"></i>
                        </li>
                    </ul>
                    <audio src={songs.url} ref="audio_ref" autoPlay="autoplay" id="audio" ></audio>
                </div>
            </div>
        )
    }
}
export default Musics