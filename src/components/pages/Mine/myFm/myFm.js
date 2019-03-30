import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'
import axios from 'axios'

import './myFm.css'
class MyFm extends Component {
    constructor() {
        super()
    }
    thissongOuit() {
        this.props.history.push("/")
    }
    render() {
        return (
            <div className='myfms'>
                <div className='myfms-header'>
                    <Icon className="myfms-icon-left" type="left" onClick={this.thissongOuit.bind(this)} />
                    <span className='myfms-title'>我的电台</span>
                </div>
                <TackFm />
            </div>
        )
    }

}

class TackFm extends Component {
    constructor(props) {
        super()
        this.state = {
            arr: [],

        }
    };
    componentDidMount() {
        const _this = this
        axios.get('http://localhost:3000/personalized/djprogram').then(
            function (res) {

                _this.setState({
                    arr: res.data.result.slice(0, 6)
                })

            }
        )

    }
    render() {
        console.log(this.state.arr)
        console.log(this.state.djRadios)
        let id = localStorage.getItem('id')
        console.log(id)
        return (
            <div className="myTackFm">

                <DjRadios />

                {/* 推荐电台 */}
                <div className="recomFm">
                    <div className="recomFmTitle">
                        <span className="recomFmImg"></span><span className="recomFmTls">推荐电台</span>
                    </div>
                    <div className="gedan">
                        {this.state.arr.map((item, i) => {

                            return (
                                <div className="recomFmAll" key={i}>
                                    <div className="recomFmCover">
                                        <img className="recomFmpic" src={item.picUrl} />
                                    </div>
                                    <h1 className="recomFmh1">{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        )
    }
}

class DjRadios extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            djRadios: []
        }
    }
    componentDidMount() {
        let _this = this
        axios.get('http://localhost:3000/dj/sublist').then(
            res => {
                console.log(res.data.djRadios)
                console.log(res.data.count)
                _this.setState({
                    count: res.data.count,
                    djRadios: res.data.djRadios
                })

            }
        )
    }
    render() {
        console.log(this.state.DjRadios)
        return (
            <div className="myTackFmAll">
                <h1>&nbsp;<b>我订阅的电台</b><i>({this.state.count ? "this.state.count" : "0"})</i></h1>
                {/* 需要请求数据遍历渲染 */}
                {this.state.djRadios.map((item, i) => {
                    console.log(item)
                        return (
                            <div className="myTackFmList">
                                <div className="myTackFmPic"><img src={item.picUrl} className='djPic' alt="" /></div>
                                <div className="myTackFmType">
                                    <h1>&nbsp;{item.name}</h1>
                                    <h2>&nbsp;by{item.dj.nickname}</h2>
                                    <h2>&nbsp;{item.lastProgramName}</h2>
                                </div>
                                <div className="myTackFmRight"></div>
                            </div>
                        )
                   

                })}


            </div>
        )
    }
}

class Djkong extends Component {
    render() {
        return (
            <div className='Djkong'>

            </div>
        )
    }
}
export default MyFm