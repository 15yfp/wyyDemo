import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
class New_songs extends React.Component {
    constructor() {
        super()
        this.state = {
            newSongs:[]
        }
        let url = "http://localhost:3000/top/album?limit=3"
        axios.get(url)
                .then(res=>{
                    this.setState({
                        newSongs:res.data.albums
                    })
                    // console.log(this.state.newSongs)
                })
    }
    Listen_music(){
        
    }
    render() {
        return (
            <div>
                <div className="recom_title">
                    <div className="recom_top">
                        <h3 className="float_left">新碟</h3>
                        <i className="float_left s_line">|</i>
                        <span className="float_left new_span">新歌</span>
                        <a className="more_songs" href="javascript:;">更多新碟</a>
                    </div>
                    <div className="songs">
                        <ul className="songs_ul">
                            {this.state.newSongs.map((item,index)=>(
                                <li key={index}>
                                <Link to={{pathname:"/playMusic",state:{uid:item.id}}}  onClick={this.Listen_music.bind(this,item.id)}>
                                    <div>
                                        <img src={item.picUrl} alt="" />
                                    </div>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default New_songs