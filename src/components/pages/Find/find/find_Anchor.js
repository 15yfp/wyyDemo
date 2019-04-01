import React from "react"
import axios from "axios";

class Anchor extends React.Component{
    constructor(){
        super()
        this.state ={
            anchor:[],
            towc:[]
        }
        let url = "http://localhost:3000/dj/recommend"
        axios.get(url)
                .then(res=>{
                    this.setState({
                        anchor:res.data.djRadios.splice(1,3),
                        towc:res.data.djRadios.splice(5,6)
                    })
                })
    }
    render(){
        let {anchor} = this.state
        let {towc} = this.state
        return(
            <div>
                <div className="recom_title">
                    <div className="recom_top">
                        <h3 className="float_left">主播电台></h3>
                        <a className="more_songs" href="javascript:;"></a>
                    </div>
                    <div className="songs">
                        <ul className="songs_ul">
                            {anchor.map((oli,id)=>(
                                <li key={id}>
                                <a href="javascript:;">
                                    <div>
                                        <img src={oli.picUrl} alt="" />
                                    </div>
                                    <span>{oli.name}</span>
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="anchors">
                        {towc.map((song,index)=>(
                            <div className="anchor_vedio" key={index}>
                            <img src={song.picUrl} alt=""/>
                            <a href=""></a>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Anchor