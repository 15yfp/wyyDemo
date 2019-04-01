import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'

import Album from './album'
import Floder from './floder'
import Singer from './singer'
import Single from './single'

// import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './thisSong.css'

// class ThisSong extends Component {
//    constructor(){
//        super()
//    }
//    thissongOuit(){
//      this.props.history.push("/")
//    }
//     render() {
//         return (
//             <div className='thissong'>
//                 <div className='thissong-header'>
//                     <Icon className="thissong-icon-left" type="left" onClick={this.thissongOuit.bind(this)}/>
//                     <span className='thissong-title'>本地音乐</span>
//                     <Icon className='thissong-icon-search' type="search" />
//                 </div>

//                 <div className='thissong-list'>
//                     <ul>
//                         <li><Link to="/thissong/single" className="thisLink" >单曲</Link></li>
//                         <li><Link to="/thissong/singer" className="thisLink" >歌手</Link></li>
//                         <li><Link to="/thissong/album" className="thisLink">专辑</Link></li>
//                         <li><Link to="/thissong/floder"  className="thisLink">文件夹</Link></li>
//                         <Route path="/thissong/single" component={Single} />
//                         <Route path="/thissong/singer" component={Singer} />
//                         <Route path="/thissong/album" component={Album} />
//                         <Route path="/thissong/floder" component={Floder} />

//                     </ul>
//                 </div>

//             </div>
//         )
//     }
// }
// import React, { Component } from 'react'
// import { Tabs, WhiteSpace } from 'antd-mobile';



import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '单曲' },
  { title: '歌手' },
  { title: '专辑' },
  { title: '文件夹' },
  
];

class ThisSong extends Component{
    constructor(){
        super()
    }
    thissongOuit(){
        this.props.history.push("/")
    }
    render(){
        return(
            <div className='thissong'>
                 <div className='thissong-header'>
                     <Icon className="thissong-icon-left" type="left" onClick={this.thissongOuit.bind(this)}/>
                     <span className='thissong-title'>本地音乐</span>
                     <Icon className='thissong-icon-search' type="search" />
                 </div>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div className="thissong-item">
        < Single />

        </div>
        <div className="thissong-item">
        < Singer />
        </div>
        <div className="thissong-item">
          <Album/>
        </div>
        <div className="thissong-item">
          <Floder/>
        </div>
        
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
        )
    }
} 

export default ThisSong