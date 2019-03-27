import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'
import Recsing from './recsing'
import Recvideo from './recvideo'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './recPlayed.css'

class RecPlayed extends Component {
   constructor(){
       super()
   }
   thissongOuit(){
    this.props.history.push("/")
   }
    render() {
        return (
            <div className='recplayed'>
                <div className='recplayed-header'>
                    <Icon className="recplayed-icon-left" type="left" onClick={this.thissongOuit.bind(this)}/>
                    <span className='recplayed-title'>最近播放</span>
                    <span className='recplayed-right'>清空</span>
                 </div>

                <div className='recplayed-list'>
                    <ul>
                        <li><Link to="/recplayed/recsing" className="recLink" activeStyle={{color: 'red'}}>歌曲</Link></li>
                        <li><Link to="/recplayed/recvideo" className="recLink" activeStyle={{color: 'red'}}>视频</Link></li>                      
                        <Route path="/recplayed/recsing" component={Recsing} />
                        <Route path="/recplayed/recvideo" component={Recvideo} />
                    </ul>
                </div>
                

            </div>
        )
    }
}
// import React, { Component } from 'react'
// import { Tabs, WhiteSpace } from 'antd-mobile';





export default RecPlayed