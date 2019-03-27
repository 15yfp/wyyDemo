import React, { Component } from 'react'
import './index.scss'

export default class Friends extends Component {
  renderItems(){
      
  }
  render() {
    return (
      <div>
          {/* { this.renderItems() } */}
          <div className="item">
                <div className="item-img">
                    <img src="http://p2.music.126.net/C4F_cFkqS6u_7x6hJKursQ==/7812030116003837.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt=""/>
                    <i></i>
                </div>
                <ul className="item-info">
                    <li className="item-title">
                        <p><span>情想天鹅</span>分享单曲:</p>
                        <b>16.6万粉丝</b>
                        <a className="attention">+关注</a>
                    </li>
                    <li>留下你的生日，没准明年可以搭伴过</li>
                    <li className="item-center">
                        <div className="item-center-video">
                          <video></video>
                        </div>
                        <div className="item-center-img">
                            <img/>
                        </div>
                    </li>
                    <li className="item-play">
                        <div className="item-play-button">
                            <img  src="http://p2.music.126.net/Ijq8KnpmPaaspSGGmm2QIw==/109951163659810881.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt=""/>
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
      </div>
    )
  }
}
