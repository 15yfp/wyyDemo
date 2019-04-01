import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import axios from 'axios';
import Play from './play';
import './recommend.scss'
import UserList from '../userinfo/userlist';





class Recommend extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            arr: [],
            
        }
    }
   
   

    componentWillMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:3000/mv/first?limit=5')
            .then(function (response) {
                console.log(response.data.data)
                _this.setState({
                    arr: response.data.data
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    error: error
                })
            })
    }
    componentDidMount(){
        const _this=this

        setTimeout(function(){
        console.log(_this.state.arr)

        },);
    }
    render() {
       
        return (
            
            <div>
                {this.state.arr.map((item, i) => {
                    return (
                        <div key={i}>
                            <div className='recommend_video_box'>
                                <div className='recommend_video_content' >
                                    <Play mvId={item} ></Play>
                                    <b className='recommend_video_content_b' >
                                    <img src={require("../../../../assets/images/NEXT.png")} alt=""/>
                                    {item.playCount}
                                    </b>
                                </div>
                                <li>
                                    <Link to={`mvInfo/${item.id}`}><p>{item.briefDesc}</p></Link>
                                    <Link to={`simiMv/${item.id}`}>
                                    <span className='simiImg'>
                                    <img src={require("../../../../assets/images/xiangguan.png")} alt=""/>
                                    </span>
                                    </Link>
                                </li>
                            </div>
                            <div className='recommend_text_box'>
                               <UserList mvId={item}></UserList>
                            </div>
                        </div>
                        
                    )
                })}

            </div>
            

            

        );
    }
}

export default Recommend;
