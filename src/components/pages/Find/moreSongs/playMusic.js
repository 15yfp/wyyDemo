import React from "react"
import Axios from "axios";
import { Link } from "react-router-dom"
class PlayMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songRoot: [],
            cover: [],
            user: []
        }
        console.log(props)
        let { location } = this.props
        let url = `http://localhost:3000/playlist/detail?id=${location.state.uid}`
        Axios.get(url)
            .then(res => {
                this.setState({
                    cover: res.data.playlist,
                    user: res.data.playlist.creator,
                    songRoot: res.data.playlist.tracks.splice(1, 20)
                })
            })
    }
    Listen_music(id) {
        // console.log(id)
    }
    render() {
        let {match} = this.props
        let { cover, user, songRoot } = this.state
        return (
            <div className="song_root" style={{ background: `url(${user.backgroundUrl})` }}>
                <div className="song_details">
                    <div className="song_details_top">
                        <div className="song_details_left">
                            <img src={cover.coverImgUrl} alt="" />
                        </div>
                        <div className="song_details_right">
                            <h1>{cover.name}</h1>
                            <div className="icon_name">
                                <img src={user.avatarUrl} alt="" />
                                <span>{user.nickname} ></span>
                            </div>
                            <div className="introduce">
                                <span>介绍:</span>
                                <span>{user.signature} ></span>
                            </div>
                        </div>
                    </div>
                    <ul className="oul">
                        <li>
                            <i className="iconfont icon-pinglun"></i>
                            <span>{cover.commentCount}</span>
                        </li>
                        <li>
                            <i className="iconfont icon-fenxiang"></i>
                            <span>{cover.shareCount}</span>
                        </li>
                        <li>
                            <i className="iconfont icon-xiazai"></i>
                            <span>下载</span>
                        </li>
                        <li>
                            <i className="iconfont icon-checkbox"></i>
                            <span>多选</span>
                        </li>
                    </ul>
                </div>
                <div className="play_all">
                    <div className="play_all_root">
                        <ul className="play_all_top">
                            <li className="first_li">
                                <i className="iconfont icon-bofang1"></i>
                            </li>
                            <li>
                                <p>播放全部</p>
                            </li>
                            <li>
                                <span className="span_color">(共{songRoot.length}首)</span>
                            </li>
                        </ul>
                        <div className="List_of_songs">
                            <ul className="List_ul">
                                {songRoot.map((item, index) => (
                                    <li key={index}>
                                        <Link to={{pathname:"/Musics",state:{uid:item.id}}} onClick={this.Listen_music.bind(this, item.id)}>
                                            <div className="lineHeight">
                                                <span className="index_color">{index + 1}</span>
                                            </div>
                                            <div>
                                                <p className="p_color">{item.name}</p>
                                                <span className="span_color">{item.al.name}</span>
                                            </div>
                                            <div>
                                                <i className="iconfont icon-gengduo icon_color"></i>
                                            </div>
                                            <div>
                                                <i className="iconfont icon-bofang icon_color"></i>
                                            </div>
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default PlayMusic