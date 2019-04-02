import React, { Component } from 'react';
import './simiMv.scss'
import axios from 'axios';
import Play from './play';
import './recommend.scss';
import { BrowserRouter as  Link } from "react-router-dom"
import '../icon_font_tian/iconfont.css'
import UserList from '../userinfo/userlist.js';






class SimiMv extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            arr: []


        }
    }





    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:3000/simi/mv?mvid=' + this.props.match.params.id)
            .then(function (response) {
                console.log(response.data.mvs)
                _this.setState({
                    arr: response.data.mvs

                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    error: error
                })
            })
    }

    goback(props){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className='simiBox'>
                <div className='back'>
                <span className='goback iconfont icon-fanhui' onClick={this.goback.bind(this)}>
                    <b>相关视频</b>
                </span>
                
                </div>
                
                {this.state.arr.map((item, i) => {
                    return (

                        <div key={i} className='video_box'>
                            <div className='recommend_video_box'>
                                <div className='recommend_video_content'>
                                    <Play mvId={item}></Play>
                                </div>
                                <li>
                                    <Link to={`mvInfo/${item.id}`}>
                                    <p>{item.name}</p>

                                    </Link>
                                    <span></span>


                                </li>
                            </div>
                            <div className='recommend_text_box'>
                               <UserList mvId={item}></UserList>
                            </div>
                        </div>

                    )
                })}

            </div>




        )
    }
}
export default SimiMv