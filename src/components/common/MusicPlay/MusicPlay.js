import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

import './MusicPlay.css'
class PlayMusicBottom extends Component {
    constructor() {
        super()
        this.state = {
            isPlay: false,
            
        }
    }
    PlayMusic() {
        this.setState({
            isPlay: !this.state.isPlay //更改播放按钮样式
        })
    }
   
        
    
    PlayMusicList() {
        console.log(222)
    }
    render() {
        // 点击改变播放按钮的样式
        let YesPlay = {
            name: this.state.isPlay ? ' playMusicBtn1' : 'playMusicBtn',
        }
        
        

        return (
            <div className='playMusic'>
                <Link to='/musicplay' >
                    <div className="playMusicPic"><img src="" /></div>
                    <div className="playMusicName">
                        <h1>&nbsp;第三方撒地方</h1>
                        <h2>&nbsp;阿斯蒂芬</h2>
                    </div>
                </Link>
                <div className="playMusicBtn-All">
                    <div className={YesPlay.name} onClick={this.PlayMusic.bind(this)}></div>
                    <div className="playMusicAll" onClick={this.PlayMusicList.bind(this)}></div>
                </div>
            </div>

        )
    }
}
export default PlayMusicBottom

