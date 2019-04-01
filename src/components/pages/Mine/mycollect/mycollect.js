import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'

import axios from 'axios'



import './mycollect.css'





import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '专辑' },
    { title: '歌手' },
    { title: '视频' },
    { title: '专栏' },

];

class MyCollect extends Component {
    constructor() {
        super()
    }
    thissongOuit() {
        this.props.history.push("/")
    }
    render() {
        return (
            <div className='mycollectAll'>
                <div className='mycollectAll-header'>
                    <Icon className="mycollectAll-icon-left" type="left" onClick={this.thissongOuit.bind(this)} />
                    <span className='mycollectAll-title'>我的收藏</span>
                    <Icon className='mycollectAll-icon-search' type="search" />
                </div>
                <WhiteSpace />
                <StickyContainer>
                    <Tabs tabs={tabs} initalPage={'t2'} renderTabBar={renderTabBar}>
                        <div className="downmagege-item">
                            <Alubm />

                        </div>
                        <div className="downmagege-item">
                            <Singer />
                        </div>
                        <div className="downmagege-item">
                            <Mv />
                        </div>
                        <div className="downmagege-item">

                        </div>

                    </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        )
    }
}
//收藏的专辑组件
class Alubm extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            CollectAlubmList: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/album/sublist').then(
            res => {
                console.log(res)
                this.setState({
                    count: res.data.count,
                    CollectAlubmList: res.data.data
                })
            }
        )
    }
    render() {
        console.log(this.state.count, this.state.CollectAlubmList)
        let { count, CollectAlubmList } = this.state
        return (
            <div className='myAlubm'>
                <div className='myNumAlubm'>
                    <div className='myAlubmPic myBackPic'></div>
                    <div className='myAlubmTitle'><h1>&nbsp;&nbsp;我的数字专辑</h1></div>
                </div>
                <div className='myCollAlubmHeader'>收藏的专辑 <i>({count})</i></div>
                {CollectAlubmList.map((item, i) => {
                    return (
                        <div className='myCollAlubm' key={i}>
                            <div className='myAlubmPic'><img src={item.picUrl} alt="" /></div>
                            <div className='myAlubmTitle'>
                                <h2>&nbsp;{item.name}({item.alias[0]})</h2>
                                <h3>&nbsp;&nbsp;{item.artists[0].name} {item.size}首</h3>
                            </div>
                            <div className='myCollAlubmRight'>

                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}
//收藏的歌手
class Singer extends Component {
    constructor() {
        super()
        this.state = {
            SingerList: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/artist/sublist').then(
            res => {
                this.setState({
                    SingerList: res.data.data
                })
            }
        )
    }
    render() {
        let { SingerList } = this.state
        console.log(SingerList)
        return (
            <div>
                {SingerList.map((item, i) => {
                    return (
                        <div className='mySinger' key={i}>
                            <div className='mySingerPic'><img src={item.picUrl} alt="" /></div>
                            <div className='mySingerList'>
                                <h1>&nbsp;&nbsp;{item.name}</h1>
                                <h2>&nbsp;&nbsp;专辑:{item.albumSize} MV:{item.mvSize}</h2>
                            </div>
                            <div className="myCollAlubmRight"></div>
                        </div>
                    )

                })}
            </div>

        )
    }
}

class Mv extends Component {
    constructor() {
        super()
        this.state = {
            MvList: [],
            playTime: 0
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/mv/sublist').then(
            res => {
                this.setState({
                    MvList: res.data.data,
                })
            }
        )
    }

    render() {
        let { MvList } = this.state
        var time=function(mms){
            let data=mms
            var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = parseInt((data % (1000 * 60)) / 1000);
            return minutes + ":" +seconds
        }
        
        console.log(MvList)
        return (
            <div>
                {MvList.map((item, i) => {
                    return (
                        <div className='MvList' key={i}>
                            <div className='MvListPic'>
                                <span className='playNum'>&nbsp;&nbsp;{item.playTime ? parseInt(item.playTime / 10000) + '万' : ''}</span>
                                <img src={item.coverUrl} alt="" />
                            </div>
                            <div className='MvListTitle'>
                                <h1>{item.title}</h1>
                                <h2>{item ? time(item.durationms) : " "} by {item.creator[0].userName}</h2>
                            </div>
                            <div className='myCollAlubmRight'></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MyCollect