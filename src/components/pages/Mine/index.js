import React, { Component } from 'react'
import './iconfont/iconfont.css'
import './icon/iconfont.css'
import './common.css'
import Myhome from "./myhome"
import Programa from "./programa"
import MysongList from "./mysongList"
import RecommendSong from "./recommendSong"
import MyCollectList from './mycollectList';

// import { BrowserRouter as Router, Link, Route } from "react-router-dom"


export default class Mine extends Component {
  render() {
    return (
      <div className='my-box'>
      
        <Myhome/>
        <Programa/>
        <MysongList/>
        <MyCollectList/>
        <RecommendSong/>
        {/* <Route path="/thissong" component={ThisSong}/> */}
      </div>
    )
  }
}
