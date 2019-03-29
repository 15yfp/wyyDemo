import React, { Component } from "react"
import { Icon, Grid } from 'antd-mobile'
import axios from 'axios'

import './myFm.css'
class MyFm extends Component {
    constructor(){
        super()
    }
    thissongOuit(){
        this.props.history.push("/")
    }
    render() {
        return (
            <div className='myfms'>
                <div className='myfms-header'>
                    <Icon className="myfms-icon-left" type="left" onClick={this.thissongOuit.bind(this)} />
                    <span className='myfms-title'>我的电台</span>   
                </div>    
                <TackFm/>
            </div>
        )
    }

}

class TackFm extends Component{
    constructor(props){
        super()
        this.state={
            arr:[]
        }
    };
    componentDidMount(){
        const _this=this
        axios.get('http://localhost:3000/personalized/djprogram').then(
            function(res){
               
               _this.setState({
                   arr:res.data.result.slice(0,6)
               })
              
            }
        )
        
    }
    render() {
        return (
            <div className="myTackFm">
                <h1>&nbsp;<b>我订阅的电台</b><i>(0)</i></h1>
                <div className="myTackFmAll">
                {/* 需要请求数据遍历渲染 */}
                    <div className="myTackFmList">
                        <div className="myTackFmPic"></div>
                        <div className="myTackFmType">
                            <h1>&nbsp;分为非师范生的</h1>
                            <h2>&nbsp;by暗室逢灯</h2>
                            <h2>&nbsp;玩儿法</h2>
                        </div>
                        <div className="myTackFmRight"></div>
                    </div>
                    <div className="myTackFmList">
                        <div className="myTackFmPic"></div>
                        <div className="myTackFmType">
                            <h1>&nbsp;分为非师范生的</h1>
                            <h2>&nbsp;by暗室逢灯</h2>
                            <h2>&nbsp;玩儿法</h2>
                        </div>
                        <div className="myTackFmRight"></div>
                    </div>
                    <div className="myTackFmList">
                        <div className="myTackFmPic"></div>
                        <div className="myTackFmType">
                            <h1>&nbsp;分为非师范生的</h1>
                            <h2>&nbsp;by暗室逢灯</h2>
                            <h2>&nbsp;玩儿法</h2>
                        </div>
                        <div className="myTackFmRight"></div>
                    </div>
                    <div className="myTackFmList">
                        <div className="myTackFmPic"></div>
                        <div className="myTackFmType">
                            <h1>&nbsp;分为非师范生的</h1>
                            <h2>&nbsp;by暗室逢灯</h2>
                            <h2>&nbsp;玩儿法</h2>
                        </div>
                        <div className="myTackFmRight"></div>
                    </div>
                </div>
                {/* 推荐电台 */}
                <div className="recomFm">
                <div className="recomFmTitle">
                    <span className="recomFmImg"></span><span className="recomFmTls">推荐电台</span>
                </div>
                <div className="gedan">
                    {this.state.arr.map((item,i)=>{
                    
                    return (
                        <div className="recomFmAll" key={i}> 
                            <div className="recomFmCover"> 
                            <img className="recomFmpic" src={item.picUrl}/>
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

export default MyFm