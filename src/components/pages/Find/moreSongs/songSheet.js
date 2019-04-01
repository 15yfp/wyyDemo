import React from "react"
import Axios from "axios";
import {Link} from "react-router-dom"
class SongSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songShteet: []
        }
        let url = "http://localhost:3000/personalized"
        Axios.get(url)
            .then(res => {
                this.setState({
                    songShteet: res.data.result
                })
            })
    }
    Listen_music(id){
    }
    render() {
        let { songShteet } = this.state
        return (
            <div className="songSheet_root">
                <div className="songSheet_top">
                    <span>全部</span>
                </div>
                <ul className="songSheets" >
                    {songShteet.map((item, id) => {
                        return(
                            <li key={id}>
                                        {/* 若要携带id的参照此方法 */}
                                <Link to={{pathname:"/playMusic",state:{uid:item.id}}}  onClick={this.Listen_music.bind(this,item.id)}>
                                    <img src={item.picUrl} alt="" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default SongSheet