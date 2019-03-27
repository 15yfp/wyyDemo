import React, { Component } from "react"
import { Icon } from 'antd-mobile';
import './mysongList.css'
class MysongList extends Component {
    render() {
        return (
            <div className="songList">
                <div className="listHeader">
                    <span className="right"><Icon type="right" /></span>
                    <span className="addlist"><b>创建的歌单</b> <i>(1)</i></span>   
                </div>
                <div className="listAll">
                    <span>截图导入歌词</span>
                </div>
            </div>
        )
    }
}
export default MysongList