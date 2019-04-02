import React from "react"
import "./Music.css"
import Axios from "axios";
var timer;
class Musics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 播放歌曲
            songs: [],
            //获取歌曲名字
            songsname: [],
            //获取歌手名字
            songsname_al: [],
            //获取歌曲图片
            songLyric: [],
            //获取歌曲时间
            songTime: [],
        }
    }
    componentDidMount() {
        console.log(123)
        //获取歌曲url
        Axios.get(`http://localhost:3000/song/url?id=${this.props.location.state.uid}`)
            .then(res => {

                this.setState({
                    songs: (res.data.data[0])
                })
                console.log(this.state.songs)
            })
        //获取歌曲详情
        Axios.get(`http://localhost:3000/song/detail?ids=${this.props.location.state.uid}`)
            .then(res => {
                this.setState({
                    songsname: res.data.songs[0],
                    songsname_al: res.data.songs[0].al

                })
                // console.log(this.state.songsname)
            })
        //获取歌曲的歌词
        Axios.get(`http://localhost:3000/lyric?id=${this.props.location.state.uid}`)
            .then(res => res.data.lrc.lyric)
            .then(lrc => {
                //去掉歌词里面所有的换行
                let lrcJSON = lrc.split("\n");
                // console.log(lrcJSON)
                //用一个数组保存处理过的时间数组,
                let lrcTime = [];
                let ul = this.refs.ul_lrc;
                // console.log(ul);
                let i = 0;
                let newlrcJSON = lrcJSON.map(item => {
                    //如果匹配到空字符就跳过,避免出现空字符
                    if (item == "") {
                        return;
                    }
                    //正则表达式 用于匹配[00"00"00]这种时间戳
                    let reg = /^\[.+\]/;
                    //拿到所有歌词前面的时间戳
                    let key = reg.exec(item)[0];
                    // console.log(key)
                    let lrc = {
                        //es6动态计算属性名
                        //此方法可以将{[00.00.00]:"顶叶纸虎啸山林,卧槽泥马戈勒壁"}
                        //中的[00.00.00]替换为空
                        [key]: item.replace(reg, "")
                    }
                    //提取每一行获取到时间
                    lrcTime[i++] = parseFloat(key.substr(1, 3)) * 60 + parseFloat(key.substr(4, 10))
                    //将处理好的值添加到ul标签里
                    ul.innerHTML += "<li><p>" + lrc[key] + "</p></li>"
                })
                let oLis = ul.children;
                // let lis = document.getElementsByTagName("li")
                // console.log(lis)
                // console.log(oLis)
                //当前播放到哪一句了
                let currentLine = 0;
                //当前的播放时间
                let currentTime;
                //保存ul的translateY值
                let ppxx;

                // 时间改变时间
                this.refs.audio_ref.ontimeupdate = () => {
                    //监听当前播放的时间
                    // console.log(this.refs.audio_ref.currentTime)
                    currentTime = !this.refs.audio_ref.currentTime ? 0 : this.refs.audio_ref.currentTime;
                    console.log(currentTime);
                    //让J等于播放的具体句数 当J小于时间戳数组的长度
                    for (let j = currentLine; j < lrcTime.length; j++) {
                        //如果当前播放时间小于 时间戳的行数 并且 当前播放时间大于时间戳
                        if (currentTime < lrcTime[j + 1] && currentTime > lrcTime[j]) {
                            //让播放到指定歌词的值等于j值
                            currentLine = j;
                            ppxx = 1 - (currentLine * 0.20);
                            ul.style.transform = "translateY(" + ppxx + "rem)";
                            if (currentLine == 0) {
                                continue;
                            } else {
                                oLis[currentLine - 1].style.color = "";
                                oLis[currentLine].style.color = "#fff";
                                break;
                            }
                        }
                    }
                    //1,获取当前歌曲的长度
                    let songLength = this.refs.audio_ref.duration;
                     //3,获取当前歌曲播放时间
                    let cur = this.refs.audio_ref.currentTime;
                    //2,设置一个定时器
                    //4,div的宽度跟着播放时间递增
                    console.log(this.refs.Progress)
                    this.refs.Progress.style.width = "" + parseFloat(cur / songLength) * 2.86 + "rem";
                    this.songTime()
                }
            })
    }
    goback() {
        this.refs.audio_ref.pause();
        this.props.history.go(-1);
        // let uid = localStorage.getItem("uid")
        // this.props.history.push(`/playMusic/id=${uid}`)
    }
    //播放暂停功能,停止图片旋转,切换播放停止图标
    playMusic(e) {
        //播放停止
        if (e.currentTarget.className === "iconfont icon-weibiaoti--") {
            //停止
            this.refs.audio_ref.pause();
            e.currentTarget.className = "iconfont icon-bofang"
            this.refs.img_auto.className = "music_back"
            clearInterval(timer)
        } else if (e.currentTarget.className === "iconfont icon-bofang") {
            //播放
            this.refs.audio_ref.play();
            e.currentTarget.className = "iconfont icon-weibiaoti--"
            this.refs.img_auto.className = "music_back autoplay"
        }
    }
    //歌曲时间显示
    songTime() {
        // 获取歌曲当前总时间
        let songLength = this.refs.audio_ref.duration
        //分
        let m = Math.floor(songLength / 60)
        //秒
        let s = Math.floor(songLength % 60)
        // 显示总时间
        this.refs.songTime.innerHTML = m + ":" + s
        if (s < 10) {
            s = "0" + s;
        }
        let cur = parseInt(this.refs.audio_ref.currentTime);
        let mi = parseInt(cur / 60)
        if (cur % 60 < 10) {
            this.refs.songStime.innerHTML = "" + mi + ":" + "0" + cur % 60 + ""
        } else {
            this.refs.songStime.innerHTML = "" + mi + ":" + cur % 60 + ""
        }
    }
    //上一曲功能
    songUp() {
        console.log("上一曲")
    }
    //下一曲功能
    songDown() {
        console.log("下一曲")
    }
    render() {
        let { songsname, songsname_al, songs } = this.state
        console.log(songs)
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
                {/* 中间的动画 */}
                <div className="music_center">
                    <div className="music_Record"></div>
                    <div className="music_back autoplay" ref="img_auto" id="img_auto" style={{ background: `url(${songsname_al.picUrl})` }}></div>
                    <div className="music_pic"></div>
                </div>
                {/* 歌词显示 */}
                <div className="ul_div">
                    <ul className="ul_lrc" ref="ul_lrc" style={{ transform: "translateY(1rem)" }}>

                    </ul>
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
                        <span className="float song_width" ref="songStime"></span>
                        <div className="float Progress">
                            <div className="progress_son" ref="Progress"></div>
                        </div>
                        <span className="float song_width" ref="songTime"></span>
                    </div>
                    <div className=""></div>
                    <ul className="play_ul">
                        <li>
                            <i className="iconfont icon-suiji"></i>
                        </li>
                        <li >
                            <i className="iconfont icon-shangyishoushangyige" onClick={this.songUp.bind(this)}></i>
                        </li>
                        <li >
                            <i className="iconfont icon-weibiaoti--" id="off" onClick={this.playMusic.bind(this)}></i>
                        </li>
                        <li >
                            <i className="iconfont icon-xiayigexiayishou" onClick={this.songDown.bind(this)}></i>
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