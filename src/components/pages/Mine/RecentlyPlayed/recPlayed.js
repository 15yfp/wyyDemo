import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'
import Recsing from './recsing'
import Recvideo from './recvideo'

import './recPlayed.css'

import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '歌曲' },
  { title: '视频' },
  
];

class RecPlayed extends Component{
    constructor(){
        super()
    }
    thissongOuit(){
        this.props.history.push("/")
    }
    render(){
        return(
            <div className='recplayed'>
         <div className='recplayed-header'>
             <Icon className="recplayed-icon-left" type="left" onClick={this.thissongOuit.bind(this)}/>
             <span className='recplayed-title'>最近播放</span>
             <span className='recplayed-right'>清空</span>
         </div>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div className="recplayed-item">
          <Recsing/>
        </div>
        <div className="recplayed-item">
          <Recvideo/>
        </div>
        
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
        )
    }
} 
    



// import React, { Component } from 'react'
// import { Tabs, WhiteSpace } from 'antd-mobile';

export default RecPlayed