import React from "react"
import axios from "axios"
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
    render() {
        return (
                <div className="recom_title">
                    <h3>推荐歌单</h3>
                    <div className="songs">
                        <ul className="songs_ul">
                            {this.state.recomSongs.map((item,index) => {
                                return(
                                    <li key={index}>
                                        <a href="javascript:;">
                                            <div>
                                                <img src={item.picUrl} alt=""/>
                                            </div>
                                            <span>{item.name}</span>
                                        </a>
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