import React, { Component } from 'react'
import './MusicPlay.css'
class PlayMusicMain extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="playMusic">
                <div className="playMusicPic"><img src="" /></div>
                <div className="playMusicName">
                    <h1>&nbsp;第三方撒地方</h1>
                    <h2>&nbsp;阿斯蒂芬</h2>
                </div>
                <div className="playMusicBtn-All">
                    <div className="playMusicBtn"></div>
                    <div className="playMusicAll"></div>
                </div>
            </div>
                
        )
    } 
}
export default PlayMusicMain

