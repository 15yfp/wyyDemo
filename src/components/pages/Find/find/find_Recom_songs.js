import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
class Recom_songs extends React.Component {
    constructor() {
        super()
        this.state = {
            recomSongs: []
        }
        let url = "http://localhost:3000/personalized"
        axios.get(url)
            .then(res => {
                    this.setState({
                        recomSongs:res.data.result.slice(0,6)
                    })
            })
    }
    Listen_music(id){
        console.log(id)
    }
    render() {
        return (
                <div className="recom_title">
                    <Link to="/recomSongs">
                        <h3>推荐歌单</h3>
                    </Link>
                    <div className="songs">
                        <ul className="songs_ul">
                            {this.state.recomSongs.map((item,index) => {
                                return(
                                    <li key={index}>
                                        <Link to={{pathname:"/playMusic",state:{uid:item.id}}}  onClick={this.Listen_music.bind(this,item.id)}>
                                            <div>
                                                <img src={item.picUrl} alt=""/>
                                            </div>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
        )
    }
}
export default Recom_songs