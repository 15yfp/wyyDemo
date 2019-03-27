import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import SimiMv from './simiMv';
import axios from 'axios';
import Play from './play';






class Recommend extends Component {
    constructor(props) {
        super(props)
        //状态提升 子组件的状态将会提升到此处
        this.state = {
            arr: []
        }
    }

   

    componentDidMount() {
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
    render() {
        return (



            <div>
                {this.state.arr.map((item, i) => {
                    return (
                        <div key={i}>
                            <div style={{ height: '250px', width: '100%', }}>
                                <div style={{ height: '200px', width: '100%',position: 'relative' }}>
                                    {/* <img src={item.cover} alt=""/> */}
                                   <Play mvId={item}></Play> 
                                   

                               
                    </div>
                                <li style={{ height: '50px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p style={{ width: '320px' }}>{item.briefDesc}</p>
                                    <span style={{ display: 'block', height: '30px', width: '30px', 'borderRadius': '50%', backgroundColor: "pink" }}> </span>
                                </li>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', width: '100%', backgroundColor: 'red' }}>
                                <li style={{ display: 'flex', alignItems: 'center' }}>

                                    <span style={{ display: 'block', height: '30px', width: '30px', 'borderRadius': '50%', backgroundColor: "pink" }}>

                                    </span>

                                    <b style={{ lineHeight: '50px' }}>{item.artistName}</b>
                                </li>
                                <li style={{ listStyle: 'none' }}>
                                    <span>点赞</span>
                                    &nbsp;&nbsp;&nbsp;
                        <span>评论</span>
                                    &nbsp;&nbsp;&nbsp;
        
                    </li>
                            </div>
                        </div>
                    )
                })}

            </div>

            // <Route path="/simi/mv" component={SimiMv} />

            // </Router>

        );
    }
}

export default Recommend;
