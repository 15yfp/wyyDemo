import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'

import DownVideo from './downvideo'
import DownOn from './downOn'
import DownFm from './downfm'
import DownRecing from './downsing'


import '../ThisSong/thisSong.css'





import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '单曲' },
    { title: '电台节目' },
    { title: '视频' },
    { title: '下载中' },

];

class DownManage extends Component {
    constructor() {
        super()
    }
    thissongOuit() {
        this.props.history.push("/")
    }
    render() {
        return (
            <div className='thissong'>
                <div className='thissong-header'>
                    <Icon className="thissong-icon-left" type="left" onClick={this.thissongOuit.bind(this)} />
                    <span className='thissong-title'>下载管理</span>
                    <Icon className='thissong-icon-search' type="search" />
                </div>
                <WhiteSpace />
                <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        renderTabBar={renderTabBar}
                    >
                        <div className="downmagege-item">
                            < DownRecing />

                        </div>
                        <div className="downmagege-item">
                            < DownFm />
                        </div>
                        <div className="downmagege-item">
                            <DownVideo />
                        </div>
                        <div className="downmagege-item">
                            <DownOn />
                        </div>

                    </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        )
    }
}

export default DownManage