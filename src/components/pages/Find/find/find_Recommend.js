import React from "react"
import "../find.css"
import "../reset.css"
class Recommend extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <ul className="list_ul">
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-meirituijian icon"></i>
                            <span>每日推荐</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-yinle icon"></i>
                            <span>歌单</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-paixingbang icon"></i>
                            <span>排行榜</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-diantai icon"></i>
                            <span>电台</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-zhiboweb icon"></i>
                            <span>直播</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Recommend