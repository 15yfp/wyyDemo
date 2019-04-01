import React, { Component } from "react"
import { Icon } from 'antd-mobile';
import './mysongList.css'
import axios from 'axios'
class MyCollectList extends Component {
    constructor() {
        super()
        this.state = {
            isChange: true,
            subPlaylistCount:0,
        }
    }
    componentDidMount(){
        let _this=this
        axios.get('http://localhost:3000/user/subcount').then(
            res=>{
                console.log(res.data,1232142)
                _this.setState({
                    subPlaylistCount:res.data.subPlaylistCount
                })
            }
        )
    }




    change() {
        this.setState({
            isChange: !this.state.isChange
        })
    }
    render() {
        return (
            <div className="songList">
                <div className="listHeader" onClick={this.change.bind(this)}>
                    <span className="right" onClick={this.change.bind(this)}>
                        {this.state.isChange ? <Icon type="right" /> : <Icon type='down' />}
                    </span>
                    <span className="addlist"><b>收藏的歌单</b> <i>({this.state.subPlaylistCount})</i></span>
                </div>
                {this.state.isChange? ' '  : <List subPlaylistCount={this.state.subPlaylistCount}/>}

            </div>

        )
    }
}
class List extends Component {
    constructor() {
        super()
        this.state = {
            id:'',
            songList:[]
        }
    }

    componentDidMount() {
        console.log(this.props.subPlaylistCount)
        let num=-this.props.subPlaylistCount
        console.log(num)
        let id = localStorage.getItem('id')
        let _this = this
        axios.get('http://localhost:3000/user/playlist?uid=' + id).then(
            res => {
                console.log(res.data.playlist)
                _this.setState({
                    songList: res.data.playlist.slice(num)
                })
            }
        )
    }
    render() {
        console.log(this.state.songList)
        return (
            <div>
                {this.state.songList.map((item, i) => {
                    return (
                        <div className='mysonglist' key={i}>
                            <div className='listPic'><img src={item.coverImgUrl} alt="" /></div>
                            <div className='listTitle'>
                                <h1>&nbsp;&nbsp;{item.name}</h1>
                                <h2>&nbsp;&nbsp;{item.trackCount}首 by {item.creator.nickname}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default MyCollectList