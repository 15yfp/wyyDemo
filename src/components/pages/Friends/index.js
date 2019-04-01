import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
export default class Friends extends Component {
  constructor(){
    super()
    this.state = {
        friendsItems: []
    }
  }
  
  componentWillMount(){
    axios.get("http://localhost:3000/user/event?uid=32953014")
    .then( res=>{
        this.setState({
            friendsItems: res.data.events
        })
    })
  }
  render() {
    let { friendsItems } = this.state
    return (
      <div>
         {
             friendsItems.map(item => {
                 return (
                    <div className="item" key={ item.id }>
                        <div className="item-img">
                            <img src={item.user.avatarUrl} alt=""/>
                            <i></i>
                        </div>
                        <ul className="item-info">
                            <li className="item-title">
                                <p><span>{ item.user.signature }</span>分享单曲:</p>
                                <b>{ item.user.province/10000 }万粉丝</b>
                                <a className="attention">+关注</a>
                            </li>
                            <li>留下你的生日，没准明年可以搭伴过</li>
                            <li className="item-center">
                                <div className="item-center-video">
                                <video></video>
                                </div>
                                <div className="item-center-img">
                                    <img src={ item.user.backgroundUrl }/>
                                </div>
                            </li>
                            <li className="item-play">
                                <div className="item-play-button">
                                    <img  src={ item.user.backgroundUrl } alt=""/>
                                    <i></i>
                                </div>
                                <div className="item-play-info">
                                <h3>生日快乐</h3>
                                <b>丢火车</b>
                                </div>
                            </li>
                            <li className="item-operation">
                                <div>
                                    <span>
                                        <img src={require("../../../assets/images/zhuan.png")} />
                                        80
                                    </span>
                                    <span>
                                        <img src={require("../../../assets/images/com.png")} />
                                        16819
                                    </span>
                                    <span>
                                        <img src={require("../../../assets/images/zan.png")} />
                                        3180
                                    </span>
                                </div>
                                <i></i>
                            </li>
                        </ul>
                </div>
                 )
             })
         }
      </div>
    )
  }
}
