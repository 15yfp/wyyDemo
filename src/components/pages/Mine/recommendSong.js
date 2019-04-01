import React, { Component } from "react"
import axios from 'axios'


import './recommendSong.css'
class RecommendSong extends Component {
    constructor(props){
        super()
        this.state={
            arr:[]
        }
    };
    componentDidMount(){
        const _this=this
        axios.get('http://localhost:3000/personalized').then(
            function(res){       
                    
               _this.setState({
                   arr:res.data.result.slice(0,6)
               })              
            }
        ) 
    }
    render() {
        
        return (
            <div className="recomSong">
                <div className="SongTitle">
                    <span className="img"></span><span className="title">推荐歌单</span>
                </div>
                <div className='gedan'>
                    {this.state.arr.map((item,i)=>{
                    return (
                        <div className="songAll" key={i}> 
                            <div className="songCover"> 
                            <img className="pic" src={item.picUrl} alt='{item.name}'/>
                                </div>
                            <h1 className="recomSongh1">{item.name}</h1>
                        </div>
                    )
                })}
                </div>
                
                
                
            </div>
        )
    }
}
export default RecommendSong