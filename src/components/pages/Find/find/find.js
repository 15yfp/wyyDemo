import React from "react"
import Recommend from "./find_Recommend"
import Recom_songs from "./find_Recom_songs"
import New_songs from "./new_songs"
import Selected from "./find_Selected"
import Anchor from "./find_Anchor"
import BannerRoot from "./banner_root"
class Find extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="find_root">
                {/* 轮播图 */}
                <div className="find_banner">
                    <BannerRoot/>
                </div>
                {/* 每日推荐 */}
                <div className="Recommend">
                    <Recommend />
                </div>
                {/* 推荐歌单 */}
                <div className="Recommend_songs">
                    <Recom_songs/>
                </div>
                {/* 新碟 */}
                <div className="new_songs">
                    <New_songs/>
                </div>
                {/* 云村精选 */}
                <div className="Selected">
                    <Selected/>
                </div>
                {/* 主播电台 */}
                <div className="Anchor">
                    <Anchor/>
                </div>
            </div>
        )
    }
}
export default Find